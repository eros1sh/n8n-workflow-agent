/**
 * API Stream Handlers
 * All API providers use fetch API for streaming (no SDK dependencies)
 */

import { getSettings } from "../lib/storage.js"

// OpenAI-compatible API handler (OpenAI, DeepSeek, OpenRouter, Groq, Cohere)
async function handleOpenAICompatibleStream(port, data, baseURL, headers = {}) {
  const { model, messages, requestId, config } = data.body
  
  // Get settings securely from storage
  const settings = await getSettings()
  const apiKeys = settings.apiKeys || {}
  
  // Determine provider based on baseURL or infer from model
  let provider = "openai" // Default
  if (baseURL.includes("deepseek")) provider = "deepseek"
  else if (baseURL.includes("openrouter")) provider = "openrouter"
  else if (baseURL.includes("groq")) provider = "groq"
  else if (baseURL.includes("cohere")) provider = "cohere"
  
  // Get key securely
  const apiKey = apiKeys[provider] || settings.apiKey

  if (!apiKey || !model || !messages || !requestId) {
    port.postMessage({
      type: "error",
      error: "Missing required parameters",
      requestId: requestId || "unknown",
    })
    return
  }

  try {
    port.postMessage({
      type: "start",
      requestId,
      data: { message: "Starting stream" },
    })

    // Check if thinking mode is enabled
    const thinkingMode = data.body.thinkingMode || data.body.reasoningEffort
    const modelLower = model.toLowerCase()
    
    // Add function calling directive if tools are provided
    let enhancedMessages = [...messages]
    if (data.body.tools && data.body.tools.length > 0) {
      // Lower temperature for function calling
      config.temperature = Math.min(config?.temperature || 0.7, 0.3)
      
      // Add or enhance system message with function calling directive
      // Find the LAST system message to append directive, or prepend a new one
      const systemMsgIndex = enhancedMessages.map(m => m.role).lastIndexOf('system');
      const directive = `\n\nIMPORTANT: You have access to ${data.body.tools.length} functions that can perform actions in n8n workflow editor. You MUST use these functions to perform the requested actions. DO NOT just describe what to do - ACTUALLY CALL THE FUNCTIONS to execute the actions. When the user asks you to create nodes, modify workflows, or perform any n8n operations, you must call the appropriate functions immediately.`
      
      if (systemMsgIndex >= 0) {
        enhancedMessages[systemMsgIndex].content += directive
      } else {
        enhancedMessages.unshift({
          role: 'system',
          content: directive.trim()
        })
      }
    }
    
    // Build request body
    const requestBody = {
      model,
      messages: enhancedMessages,
      stream: true,
      max_tokens: config?.maxTokens || 4096,
      temperature: config?.temperature || 0.7,
      top_p: config?.topP,
      tools: data.body.tools || undefined,
      tool_choice: data.body.tools && data.body.tools.length > 0 ? "auto" : undefined,
    }
    
    // Add thinking mode support for different providers
    if (thinkingMode) {
      // OpenAI o1 models
      if (modelLower.includes("o1")) {
        requestBody.reasoning_effort = data.body.reasoningEffort || "high"
      }
      // DeepSeek Reasoner
      else if (modelLower.includes("reasoner") || modelLower.includes("deepseek")) {
        requestBody.thinking = true
      }
      // Other reasoning models
      else if (modelLower.includes("reasoning") || modelLower.includes("think")) {
        requestBody.thinking = true
      }
    }
    
    const response = await fetch(`${baseURL}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
        ...headers,
      },
      body: JSON.stringify(requestBody),
    })

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: { message: response.statusText } }))
      throw new Error(error.error?.message || `HTTP ${response.status}`)
    }

    const reader = response.body.getReader()
    const decoder = new TextDecoder()
    let buffer = ""

    while (true) {
      const { done, value } = await reader.read()
      if (done) break

      buffer += decoder.decode(value, { stream: true })
      const lines = buffer.split("\n")
      buffer = lines.pop() || ""

      for (const line of lines) {
        if (line.startsWith("data: ")) {
          const data = line.slice(6).trim()
          if (data === "[DONE]") {
            port.postMessage({ type: "complete", requestId })
            return
          }

          try {
            const json = JSON.parse(data)
            const content = json.choices?.[0]?.delta?.content
            if (content) {
              port.postMessage({
                type: "chunk",
                data: content,
                requestId,
              })
            }
            
            // Function calling support
            const toolCalls = json.choices?.[0]?.delta?.tool_calls
            if (toolCalls && toolCalls.length > 0) {
              for (const toolCall of toolCalls) {
                if (toolCall.function) {
                  port.postMessage({
                    type: "function_call",
                    functionName: toolCall.function.name,
                    arguments: toolCall.function.arguments,
                    requestId,
                  })
                }
              }
            }
          } catch (e) {
            // Ignore parse errors
          }
        }
      }
    }

    port.postMessage({ type: "complete", requestId })
  } catch (error) {
    console.error("[API Stream] Error:", error)
    port.postMessage({
      type: "error",
      error: error.message || "API error",
      requestId,
    })
  }
}

// OpenAI Stream
export async function handleOpenAIStream(port, data) {
  await handleOpenAICompatibleStream(port, data, "https://api.openai.com/v1")
}

// DeepSeek Stream
export async function handleDeepSeekStream(port, data) {
  await handleOpenAICompatibleStream(port, data, "https://api.deepseek.com/v1")
}

// OpenRouter Stream
export async function handleOpenRouterStream(port, data) {
  await handleOpenAICompatibleStream(port, data, "https://openrouter.ai/api/v1", {
    "HTTP-Referer": "https://n8nchat.com",
    "X-Title": "n8n Chat Extension",
  })
}

// Groq Stream
export async function handleGroqStream(port, data) {
  await handleOpenAICompatibleStream(port, data, "https://api.groq.com/openai/v1")
}

// Cohere Stream
export async function handleCohereStream(port, data) {
  await handleOpenAICompatibleStream(port, data, "https://api.cohere.ai/compatibility/v1")
}

// Anthropic Stream
export async function handleAnthropicStream(port, data) {
  const { model, messages, requestId, config } = data.body

  // Get settings securely
  const settings = await getSettings()
  const apiKeys = settings.apiKeys || {}
  const apiKey = apiKeys.anthropic || settings.apiKey

  if (!apiKey || !model || !messages || !requestId) {
    port.postMessage({
      type: "error",
      error: "Missing required parameters",
      requestId: requestId || "unknown",
    })
    return
  }

  try {
    port.postMessage({
      type: "start",
      requestId,
      data: { message: "Starting stream" },
    })

    // Convert messages to Anthropic format
    // Combine ALL system messages
    const systemMessages = messages.filter(m => m.role === "system");
    let systemContent = systemMessages.map(m => m.content).join("\n\n") || config?.systemInstruction || "";
    
    const conversationMessages = messages.filter((m) => m.role !== "system")
    
    // Add function calling directive if tools are provided
    let effectiveTemperature = config?.temperature || 0.7
    const anthropicTools = data.body.tools || []
    
    if (anthropicTools.length > 0) {
      effectiveTemperature = Math.min(effectiveTemperature, 0.3)
      const directive = `\n\nIMPORTANT: You have access to ${anthropicTools.length} functions that can perform actions in n8n workflow editor. You MUST use these functions to perform the requested actions. DO NOT just describe what to do - ACTUALLY CALL THE FUNCTIONS to execute the actions. When the user asks you to create nodes, modify workflows, or perform any n8n operations, you must call the appropriate functions immediately.`
      systemContent = systemContent ? systemContent + directive : directive.trim()
    }

    const requestBody = {
      model,
      max_tokens: config?.maxTokens || 4096,
      temperature: effectiveTemperature,
      system: systemContent,
      messages: conversationMessages.map((msg) => ({
        role: msg.role === "assistant" ? "assistant" : "user",
        content: msg.content || "",
      })),
      stream: true,
    }
    
    // Add tools if provided
    if (anthropicTools.length > 0) {
      requestBody.tools = anthropicTools
    }

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2024-06-01",
      },
      body: JSON.stringify(requestBody),
    })

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: { message: response.statusText } }))
      throw new Error(error.error?.message || `HTTP ${response.status}`)
    }

    const reader = response.body.getReader()
    const decoder = new TextDecoder()
    let buffer = ""

    while (true) {
      const { done, value } = await reader.read()
      if (done) break

      buffer += decoder.decode(value, { stream: true })
      const lines = buffer.split("\n")
      buffer = lines.pop() || ""

      for (const line of lines) {
        if (line.startsWith("data: ")) {
          const data = line.slice(6).trim()
          if (data === "[DONE]") {
            port.postMessage({ type: "complete", requestId })
            return
          }

          try {
            const json = JSON.parse(data)
            if (json.type === "content_block_delta" && json.delta?.type === "text_delta") {
              port.postMessage({
                type: "chunk",
                data: json.delta.text,
                requestId,
              })
            } else if (json.type === "message_stop") {
              port.postMessage({ type: "complete", requestId })
              return
            }
          } catch (e) {
            // Ignore parse errors
          }
        }
      }
    }

    port.postMessage({ type: "complete", requestId })
  } catch (error) {
    console.error("[Anthropic Stream] Error:", error)
    port.postMessage({
      type: "error",
      error: error.message || "Anthropic API error",
      requestId,
    })
  }
}

// Gemini Stream
export async function handleGeminiStream(port, data) {
  const { streamOptions, requestId, thinkingMode } = data.body

  // Get settings securely
  const settings = await getSettings()
  const apiKeys = settings.apiKeys || {}
  const apiKey = apiKeys.google || settings.apiKey

  if (!apiKey || !streamOptions || !requestId) {
    port.postMessage({
      type: "error",
      error: "Missing required parameters",
      requestId: requestId || "unknown",
    })
    return
  }

  try {
    port.postMessage({
      type: "start",
      requestId,
      data: { message: "Starting stream" },
    })

    const { model, input, temperature, top_p, max_output_tokens, tools } = streamOptions

    // Convert messages to Gemini format
    const contents = Array.isArray(input)
      ? input
          .filter((msg) => msg.role !== "system" && msg.role !== "function")
          .map((msg) => {
            if (msg.role === "user") {
              const parts = []
              if (msg.image?.data) {
                parts.push({
                  inline_data: {
                    mime_type: msg.image.mimeType || "image/jpeg",
                    data: msg.image.data,
                  },
                })
              }
              if (msg.content) {
                parts.push({ text: msg.content })
              }
              return { role: "user", parts }
            }
            if (msg.role === "assistant") {
              return {
                role: "model",
                parts: [{ text: msg.content || "" }],
              }
            }
            return null
          })
          .filter(Boolean)
      : []

    // Combine ALL system messages for Gemini
    const systemMessages = input?.filter(msg => msg.role === "system") || [];
    let systemInstruction = systemMessages.map(m => m.content).join("\n\n");

    // Lower temperature for function calling (more deterministic)
    const effectiveTemperature = tools && tools.length > 0 ? Math.min(temperature || 0.7, 0.3) : (temperature || 0.7)
    
    const requestBody = {
      contents,
      generationConfig: {
        temperature: effectiveTemperature,
        topP: top_p || 1.0,
        maxOutputTokens: max_output_tokens || 4096,
      },
    }

    // Build system instruction
    if (systemInstruction) {
      requestBody.systemInstruction = { parts: [{ text: systemInstruction }] }
    }
    
    // Gemini function calling support
    // Note: Only stable models support function calling (not preview/experimental)
    const modelLower = model.toLowerCase()
    const supportsTools = !modelLower.includes("preview") && 
                         !modelLower.includes("experimental") && 
                         !modelLower.includes("exp")
    
    if (tools && tools.length > 0 && supportsTools) {
      const functionDeclarations = tools
        .filter(tool => tool.function)
        .map(tool => ({
          name: tool.function.name,
          description: tool.function.description,
          parameters: tool.function.parameters,
        }))
      
      if (functionDeclarations.length > 0) {
        requestBody.tools = [{
          functionDeclarations: functionDeclarations
        }]
        
        console.log(`[Gemini Stream] Function calling enabled with ${functionDeclarations.length} tools`)
        
        // CRITICAL: Add function calling directive to system instruction
        const functionDirective = `\n\nIMPORTANT: You have access to ${functionDeclarations.length} functions that can perform actions in n8n workflow editor. You MUST use these functions to perform the requested actions. DO NOT just describe what to do - ACTUALLY CALL THE FUNCTIONS to execute the actions. When the user asks you to create nodes, modify workflows, or perform any n8n operations, you must call the appropriate functions immediately.`
        
        if (!systemInstruction) {
          systemInstruction = functionDirective.trim()
        } else {
          systemInstruction += functionDirective
        }
        
        // Update system instruction in request body
        requestBody.systemInstruction = { parts: [{ text: systemInstruction }] }
      }
    } else if (tools && tools.length > 0 && !supportsTools) {
      console.warn(`[Gemini Stream] Model "${model}" does not support function calling (preview/experimental). Using text-only mode.`)
    }
    
    // Debug: Log request body (without sensitive data)
    console.log("[Gemini Stream] Request details:", {
      model,
      temperature: effectiveTemperature,
      hasContents: !!contents.length,
      hasSystemInstruction: !!systemInstruction,
      systemInstructionLength: systemInstruction?.length || 0,
      hasTools: !!requestBody.tools,
      toolsCount: requestBody.tools?.[0]?.functionDeclarations?.length || 0
    })

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:streamGenerateContent?alt=sse&key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      }
    )

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: { message: response.statusText } }))
      throw new Error(error.error?.message || `HTTP ${response.status}`)
    }

    const reader = response.body.getReader()
    const decoder = new TextDecoder()
    let buffer = ""
    let chunkCount = 0

    console.log("[Gemini Stream] Starting to read response stream...")

    while (true) {
      const { done, value } = await reader.read()
      if (done) {
        console.log(`[Gemini Stream] Stream ended. Total chunks: ${chunkCount}`)
        break
      }

      chunkCount++
      const decoded = decoder.decode(value, { stream: true })
      console.log(`[Gemini Stream] Chunk ${chunkCount}, size: ${decoded.length} bytes`)
      
      buffer += decoded
      const lines = buffer.split("\n")
      buffer = lines.pop() || ""

      for (const line of lines) {
        const trimmedLine = line.trim()
        if (!trimmedLine) continue
        
        try {
          // Gemini SSE format: "data: {json}" or just "{json}"
          let jsonStr = trimmedLine
          if (trimmedLine.startsWith('data: ')) {
            jsonStr = trimmedLine.slice(6) // Remove "data: " prefix
          }
          
          // Skip empty data lines or [DONE] markers
          if (!jsonStr || jsonStr === '[DONE]') continue
          
          const json = JSON.parse(jsonStr)
          const candidates = json.candidates || []
          
          // Debug: Log if we got empty candidates
          if (candidates.length === 0) {
            console.warn('[Gemini Stream] Empty candidates array:', json)
          }
          
          for (const candidate of candidates) {
            const content = candidate.content?.parts?.[0]?.text
            if (content) {
              console.log('[Gemini Stream] Text content received:', content.substring(0, 100))
              port.postMessage({
                type: "chunk",
                data: content,
                requestId,
              })
            }
            
            // Gemini function calling support
            const functionCalls = candidate.content?.parts?.filter(part => part.functionCall)
            if (functionCalls && functionCalls.length > 0) {
              for (const part of functionCalls) {
                if (part.functionCall) {
                  console.log('[Gemini Stream] Function call received:', {
                    name: part.functionCall.name,
                    args: part.functionCall.args
                  })
                  port.postMessage({
                    type: "function_call",
                    functionName: part.functionCall.name,
                    arguments: JSON.stringify(part.functionCall.args || {}),
                    requestId,
                  })
                }
              }
            }
          }
        } catch (e) {
          console.error('[Gemini Stream] Parse error:', e.message, 'Line:', line)
        }
      }
    }

    port.postMessage({ type: "complete", requestId })
  } catch (error) {
    console.error("[Gemini Stream] Error:", error)
    port.postMessage({
      type: "error",
      error: error.message || "Gemini API error",
      requestId,
    })
  }
}

// Local LLM Stream
export async function handleLocalLlmStream(port, data) {
  const { apiUrl, model, messages, requestId, config } = data.body

  if (!apiUrl || !model || !messages || !requestId) {
    port.postMessage({
      type: "error",
      error: "Missing required parameters",
      requestId: requestId || "unknown",
    })
    return
  }

  try {
    port.postMessage({
      type: "start",
      requestId,
      data: { message: "Starting stream" },
    })

    const url = apiUrl.endsWith("/") ? apiUrl.slice(0, -1) : apiUrl
    const response = await fetch(`${url}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        messages,
        stream: true,
        max_tokens: config?.maxTokens || 4096,
        temperature: config?.temperature || 0.7,
        top_p: config?.topP || 1.0,
      }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const reader = response.body.getReader()
    const decoder = new TextDecoder()
    let buffer = ""

    while (true) {
      const { done, value } = await reader.read()
      if (done) break

      buffer += decoder.decode(value, { stream: true })
      const lines = buffer.split("\n")
      buffer = lines.pop() || ""

      for (const line of lines) {
        if (line.startsWith("data: ")) {
          const data = line.slice(6).trim()
          if (data === "[DONE]") {
            port.postMessage({ type: "complete", requestId })
            return
          }

          try {
            const json = JSON.parse(data)
            const content = json.choices?.[0]?.delta?.content
            if (content) {
              port.postMessage({
                type: "chunk",
                data: content,
                requestId,
              })
            }
            
            // Function calling support
            const toolCalls = json.choices?.[0]?.delta?.tool_calls
            if (toolCalls && toolCalls.length > 0) {
              for (const toolCall of toolCalls) {
                if (toolCall.function) {
                  port.postMessage({
                    type: "function_call",
                    functionName: toolCall.function.name,
                    arguments: toolCall.function.arguments,
                    requestId,
                  })
                }
              }
            }
          } catch (e) {
            // Ignore parse errors
          }
        }
      }
    }

    port.postMessage({ type: "complete", requestId })
  } catch (error) {
    console.error("[Local LLM Stream] Error:", error)
    port.postMessage({
      type: "error",
      error: error.message || "Local LLM API error",
      requestId,
    })
  }
}

// Hugging Face Stream (using router.huggingface.co - OpenAI-compatible API)
export async function handleHuggingFaceStream(port, data) {
  const { model, messages, requestId, config, tools, thinkingMode } = data.body

  // Get settings securely
  const settings = await getSettings()
  const apiKeys = settings.apiKeys || {}
  const apiKey = apiKeys.huggingface || settings.apiKey

  if (!apiKey || !model || !messages || !requestId) {
    port.postMessage({
      type: "error",
      error: "Missing required parameters",
      requestId: requestId || "unknown",
    })
    return
  }

  try {
    port.postMessage({
      type: "start",
      requestId,
      data: { message: "Starting stream" },
    })

    // Add function calling directive if tools are provided
    let enhancedMessages = [...messages]
    let effectiveTemperature = config?.temperature || 0.7
    
    if (tools && tools.length > 0) {
      // Lower temperature for function calling
      effectiveTemperature = Math.min(effectiveTemperature, 0.3)
      
      // Add or enhance system message with function calling directive
      const systemMsgIndex = enhancedMessages.findIndex(m => m.role === 'system')
      const directive = `\n\nIMPORTANT: You have access to ${tools.length} functions that can perform actions in n8n workflow editor. You MUST use these functions to perform the requested actions. DO NOT just describe what to do - ACTUALLY CALL THE FUNCTIONS to execute the actions. When the user asks you to create nodes, modify workflows, or perform any n8n operations, you must call the appropriate functions immediately.`
      
      if (systemMsgIndex >= 0) {
        enhancedMessages[systemMsgIndex].content += directive
      } else {
        enhancedMessages.unshift({
          role: 'system',
          content: directive.trim()
        })
      }
    }
    
    // Hugging Face Router API is OpenAI-compatible
    const requestBody = {
      model,
      messages: enhancedMessages,
      stream: true,
      max_tokens: config?.maxTokens || 4096,
      temperature: effectiveTemperature,
      top_p: config?.topP,
      tools: tools || undefined,
      tool_choice: tools && tools.length > 0 ? "auto" : undefined,
    }

    const response = await fetch("https://router.huggingface.co/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(requestBody),
    })

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: { message: response.statusText } }))
      throw new Error(error.error?.message || `HTTP ${response.status}`)
    }

    const reader = response.body.getReader()
    const decoder = new TextDecoder()
    let buffer = ""

    while (true) {
      const { done, value } = await reader.read()
      if (done) break

      buffer += decoder.decode(value, { stream: true })
      const lines = buffer.split("\n")
      buffer = lines.pop() || ""

      for (const line of lines) {
        if (line.startsWith("data: ")) {
          const data = line.slice(6).trim()
          if (data === "[DONE]") {
            port.postMessage({ type: "complete", requestId })
            return
          }

          try {
            const json = JSON.parse(data)
            const content = json.choices?.[0]?.delta?.content
            if (content) {
              port.postMessage({
                type: "chunk",
                data: content,
                requestId,
              })
            }
            
            // Function calling support
            const toolCalls = json.choices?.[0]?.delta?.tool_calls
            if (toolCalls && toolCalls.length > 0) {
              for (const toolCall of toolCalls) {
                if (toolCall.function) {
                  port.postMessage({
                    type: "function_call",
                    functionName: toolCall.function.name,
                    arguments: toolCall.function.arguments,
                    requestId,
                  })
                }
              }
            }
          } catch (e) {
            // Ignore parse errors
          }
        }
      }
    }

    port.postMessage({ type: "complete", requestId })
  } catch (error) {
    console.error("[Hugging Face Stream] Error:", error)
    port.postMessage({
      type: "error",
      error: error.message || "Hugging Face API error",
      requestId,
    })
  }
}

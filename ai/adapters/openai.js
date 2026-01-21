import { BaseAdapter } from "./baseAdapter.js"

/**
 * OpenAI Adapter for function calling
 * Supports: GPT-4o, GPT-4 Turbo, GPT-3.5 Turbo, o-series
 */
export class OpenAIAdapter extends BaseAdapter {
  async analyze({ systemPrompt, userPrompt, schema }) {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${this.apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: this.model,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ],
        tools: [{ type: "function", function: schema }],
        tool_choice: {
          type: "function",
          function: { name: schema.name }
        },
        temperature: 0.1 // Low temp for deterministic structured output
      })
    })

    if (!res.ok) {
      const err = await res.json().catch(() => ({ error: { message: res.statusText } }))
      const errorMessage = err.error?.message || `HTTP ${res.status}`
      
      // User-friendly error messages
      if (res.status === 401) {
        throw new Error("Invalid API key. Please check your OpenAI API key in settings.")
      } else if (res.status === 429) {
        throw new Error("Rate limit exceeded. Please wait a moment and try again.")
      } else if (res.status === 403) {
        throw new Error("Access denied. Your API key may not have permission for this model.")
      } else if (res.status === 500 || res.status === 503) {
        throw new Error("OpenAI service is temporarily unavailable. Please try again later.")
      }
      
      throw new Error(`OpenAI API Error: ${errorMessage}`)
    }

    const json = await res.json()
    const choice = json.choices[0]
    
    // Check if tool call exists
    const toolCall = choice.message.tool_calls?.[0]
    if (!toolCall) {
      // Fallback: Try to parse content if it looks like JSON
      try {
        const content = choice.message.content
        if (content && (content.trim().startsWith('{') || content.includes('```json'))) {
           const cleanContent = content.replace(/```json\n?|\n?```/g, "").trim()
           return this._validateJSON(JSON.parse(cleanContent))
        }
      } catch (e) {
        // ignore
      }
      throw new Error("No function call returned from OpenAI. The model may not support function calling.")
    }

    return this._validateJSON(JSON.parse(toolCall.function.arguments))
  }
}

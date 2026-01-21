import { BaseAdapter } from "./baseAdapter.js"

/**
 * Anthropic Adapter for function calling
 * Supports: Claude 4.5 Series, Claude 4 Series, Claude 3.5 Series
 */
export class AnthropicAdapter extends BaseAdapter {
  async analyze({ systemPrompt, userPrompt, schema }) {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": this.apiKey,
        "anthropic-version": "2024-06-01"
      },
      body: JSON.stringify({
        model: this.model,
        max_tokens: 4096,
        temperature: 0.1, // Low temp for deterministic output
        system: systemPrompt,
        messages: [
          { role: "user", content: userPrompt }
        ],
        tools: [{
          name: schema.name,
          description: schema.description,
          input_schema: schema.parameters
        }],
        tool_choice: {
          type: "tool",
          name: schema.name
        }
      })
    })

    if (!res.ok) {
      const err = await res.json().catch(() => ({ error: { message: res.statusText } }))
      const errorMessage = err.error?.message || `HTTP ${res.status}`
      
      // User-friendly error messages
      if (res.status === 401) {
        throw new Error("Invalid API key. Please check your Anthropic API key in settings.")
      } else if (res.status === 429) {
        throw new Error("Rate limit exceeded. Please wait a moment and try again.")
      } else if (res.status === 403) {
        throw new Error("Access denied. Your API key may not have permission for this model.")
      } else if (res.status === 500 || res.status === 503) {
        throw new Error("Anthropic service is temporarily unavailable. Please try again later.")
      } else if (res.status === 529) {
        throw new Error("Anthropic is currently overloaded. Please try again in a few moments.")
      }
      
      throw new Error(`Anthropic API Error: ${errorMessage}`)
    }

    const json = await res.json()
    
    // Find tool use in content blocks
    const toolUse = json.content?.find(block => block.type === "tool_use")
    
    if (!toolUse) {
      // Fallback: Check if there's text content that might be JSON
      const textBlock = json.content?.find(block => block.type === "text")
      if (textBlock?.text) {
        try {
          const cleanText = textBlock.text.replace(/```json\n?|\n?```/g, "").trim()
          if (cleanText.startsWith('{')) {
            return this._validateJSON(JSON.parse(cleanText))
          }
        } catch (e) {
          // ignore
        }
      }
      throw new Error("No tool use returned from Anthropic. The model may not support tool use.")
    }

    return this._validateJSON(toolUse.input)
  }
}

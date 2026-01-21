import { BaseAdapter } from "./baseAdapter.js"

export class OpenRouterAdapter extends BaseAdapter {
  async analyze({ systemPrompt, userPrompt, schema }) {
    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${this.apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://n8nchat.com",
        "X-Title": "n8n Chat Extension"
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
        }
      })
    })

    if (!res.ok) {
      const err = await res.json().catch(() => ({ error: { message: res.statusText } }))
      throw new Error(`OpenRouter API Error: ${err.error?.message || res.status}`)
    }

    const json = await res.json()
    const choice = json.choices[0]
    
    // Check if tool call exists
    const toolCall = choice.message.tool_calls?.[0]
    if (!toolCall) {
      // Fallback: Sometimes models return content even when tool_choice is forced
      // We try to parse content if it looks like JSON
      try {
        const content = choice.message.content
        if (content && (content.trim().startsWith('{') || content.includes('```json'))) {
           const cleanContent = content.replace(/```json\n?|\n?```/g, "").trim()
           return this._validateJSON(JSON.parse(cleanContent))
        }
      } catch (e) {
        // ignore
      }
      throw new Error("No function call returned from OpenRouter")
    }

    return this._validateJSON(JSON.parse(toolCall.function.arguments))
  }
}

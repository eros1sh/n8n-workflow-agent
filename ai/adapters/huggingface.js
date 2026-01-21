import { BaseAdapter } from "./baseAdapter.js"

export class HuggingFaceAdapter extends BaseAdapter {
  async analyze({ systemPrompt, userPrompt, schema }) {
    const res = await fetch("https://router.huggingface.co/v1/chat/completions", {
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
        tool_choice: "auto" // HF sometimes behaves better with auto
      })
    })

    if (!res.ok) {
      const err = await res.json().catch(() => ({ error: { message: res.statusText } }))
      throw new Error(`HuggingFace API Error: ${err.error?.message || res.status}`)
    }

    const json = await res.json()
    const call = json.choices[0].message.tool_calls?.[0]

    if (!call) throw new Error("No function call returned from HuggingFace")

    return this._validateJSON(JSON.parse(call.function.arguments))
  }
}

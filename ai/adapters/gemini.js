import { BaseAdapter } from "./baseAdapter.js"

export class GeminiAdapter extends BaseAdapter {
  async analyze({ systemPrompt, userPrompt, schema }) {
    // Gemini doesn't support 'tools' in the same way for strict JSON output in all versions
    // So we use Prompt Engineering + Response Schema if supported, or just Prompt Engineering
    
    // We construct a specific system prompt that forces JSON output matching our schema
    const jsonSchema = JSON.stringify(schema.parameters, null, 2);
    
    const augmentedSystemPrompt = `
${systemPrompt}

CRITICAL INSTRUCTION:
You are acting as a structured data extractor.
You MUST return a valid JSON object.
Do NOT include markdown formatting (like \`\`\`json).
Do NOT include any introductory text.

Your output MUST match this schema exactly:
${jsonSchema}
    `;

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${this.model}:generateContent?key=${this.apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `${augmentedSystemPrompt}\n\nUSER REQUEST:\n${userPrompt}`
            }]
          }],
          generationConfig: {
            responseMimeType: "application/json", // Force JSON mode if model supports it
            temperature: 0.1 // Low temp for deterministic output
          }
        })
      }
    )

    if (!res.ok) {
      const err = await res.json().catch(() => ({ error: { message: res.statusText } }))
      throw new Error(`Gemini API Error: ${err.error?.message || res.status}`)
    }

    const json = await res.json()
    const text = json.candidates?.[0]?.content?.parts?.[0]?.text

    if (!text) throw new Error("Gemini returned empty response")

    // Clean Markdown if present (just in case responseMimeType didn't catch it)
    const cleanText = text.replace(/```json\n?|\n?```/g, "").trim()

    return this._validateJSON(JSON.parse(cleanText))
  }
}

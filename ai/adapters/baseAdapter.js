export class BaseAdapter {
  constructor({ apiKey, model }) {
    this.apiKey = apiKey
    this.model = model
  }

  async analyze({ systemPrompt, userPrompt, schema }) {
    throw new Error("analyze() not implemented")
  }

  _validateJSON(data) {
    if (!data || typeof data !== "object") {
      throw new Error("Invalid AI response: Response is not an object")
    }
    if (!Array.isArray(data.issues)) {
      throw new Error("Invalid AI response: Missing 'issues' array")
    }
    if (!data.summary) {
      // Auto-fill summary if missing
      data.summary = `Found ${data.issues.length} issues in the workflow.`
    }
    return data
  }
}

export const analyzeWorkflowSchema = {
  name: "analyze_n8n_workflow",
  description: "Analyze and improve an n8n workflow",
  parameters: {
    type: "object",
    properties: {
      issues: {
        type: "array",
        items: {
          type: "object",
          properties: {
            node: { type: "string" },
            category: {
              type: "string",
              enum: ["security", "performance", "reliability", "best_practice", "logic"]
            },
            severity: {
              type: "string",
              enum: ["low", "medium", "high", "critical"]
            },
            description: { type: "string" },
            fix: { type: "string" }
          },
          required: ["node", "category", "severity", "description", "fix"]
        }
      },
      summary: { type: "string" },
      confidence: { 
        type: "number",
        description: "Confidence score between 0 and 1" 
      }
    },
    required: ["issues", "summary", "confidence"]
  }
}

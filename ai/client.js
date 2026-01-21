import { createAdapter } from "./adapters/index.js"
import { analyzeWorkflowSchema } from "./schemas/analyzeWorkflow.schema.js"
import { generateBlueprintSchema } from "./schemas/generateBlueprint.schema.js"

/**
 * Analyzes an n8n workflow using the specified provider and model.
 */
export async function analyzeWorkflow({
  provider,
  apiKey,
  model,
  systemPrompt,
  userPrompt
}) {
  const adapter = createAdapter(provider, { apiKey, model })

  return adapter.analyze({
    systemPrompt,
    userPrompt,
    schema: analyzeWorkflowSchema
  })
}

/**
 * Generates a workflow blueprint from user intent.
 */
export async function generateBlueprint({
  provider,
  apiKey,
  model,
  systemPrompt,
  userPrompt
}) {
  const adapter = createAdapter(provider, { apiKey, model })

  return adapter.analyze({ // Reuse adapter's analyze method as it's generic enough
    systemPrompt,
    userPrompt,
    schema: generateBlueprintSchema
  })
}

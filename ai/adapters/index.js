import { OpenRouterAdapter } from "./openrouter.js"
import { HuggingFaceAdapter } from "./huggingface.js"
import { GeminiAdapter } from "./gemini.js"
import { OpenAIAdapter } from "./openai.js"
import { AnthropicAdapter } from "./anthropic.js"
import { DeepSeekAdapter } from "./deepseek.js"
import { GroqAdapter } from "./groq.js"

/**
 * Factory function to create appropriate adapter for AI provider
 * Each provider now has its own dedicated adapter
 */
export function createAdapter(provider, config) {
  switch (provider) {
    case "google":
    case "gemini":
      return new GeminiAdapter(config)
    
    case "openai":
      return new OpenAIAdapter(config)
    
    case "anthropic":
      return new AnthropicAdapter(config)
    
    case "deepseek":
      return new DeepSeekAdapter(config)
    
    case "groq":
      return new GroqAdapter(config)
    
    case "openrouter":
      return new OpenRouterAdapter(config)
    
    case "huggingface":
      return new HuggingFaceAdapter(config)
    
    default:
      throw new Error(`Unknown AI provider: "${provider}". Supported providers: google, openai, anthropic, deepseek, groq, openrouter, huggingface`)
  }
}

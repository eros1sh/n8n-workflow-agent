/**
 * Popup Script
 */

import { getSettings, saveSettings } from "../lib/storage.js"

// i18n helper function
function t(messageName, substitutions = null) {
  try {
    return chrome.i18n.getMessage(messageName, substitutions) || messageName
  } catch (e) {
    return messageName
  }
}

// Model bazlı optimal ayarlar (Temperature, Top P, Max Tokens)
const MODEL_OPTIMAL_SETTINGS = {
  // Google Gemini 2.5 Series
  "gemini-2.5-pro": { temperature: 0.9, topP: 0.95, maxTokens: 8192 },
  "gemini-2.5-flash": { temperature: 1.0, topP: 0.95, maxTokens: 8192 },
  "gemini-2.5-flash-lite": { temperature: 1.0, topP: 0.95, maxTokens: 4096 },
  // Google Gemini 1.5 Series
  "gemini-1.5-pro": { temperature: 0.9, topP: 0.95, maxTokens: 8192 },
  "gemini-1.5-flash": { temperature: 1.0, topP: 0.95, maxTokens: 8192 },
  "gemini-1.5-flash-8b": { temperature: 1.0, topP: 0.95, maxTokens: 4096 },
  // OpenAI o-series (Reasoning)
  "o3": { temperature: 1.0, topP: 1.0, maxTokens: 8192 },
  "o4-mini": { temperature: 1.0, topP: 1.0, maxTokens: 8192 },
  // OpenAI GPT-4o Series
  "gpt-4o": { temperature: 0.7, topP: 1.0, maxTokens: 4096 },
  "gpt-4o-mini": { temperature: 0.7, topP: 1.0, maxTokens: 16384 },
  // OpenAI GPT-4 Turbo Series
  "gpt-4-turbo": { temperature: 0.7, topP: 1.0, maxTokens: 4096 },
  "gpt-4-turbo-2024-04-09": { temperature: 0.7, topP: 1.0, maxTokens: 4096 },
  // OpenAI GPT-4 Series
  "gpt-4": { temperature: 0.7, topP: 1.0, maxTokens: 4096 },
  "gpt-4-0613": { temperature: 0.7, topP: 1.0, maxTokens: 4096 },
  // OpenAI GPT-3.5 Series
  "gpt-3.5-turbo": { temperature: 0.7, topP: 1.0, maxTokens: 4096 },
  "gpt-3.5-turbo-0125": { temperature: 0.7, topP: 1.0, maxTokens: 4096 },
  // Anthropic Claude 4.5 Series
  "claude-opus-4-5-20251101": { temperature: 0.7, topP: 1.0, maxTokens: 8192 },
  "claude-sonnet-4-5-20250929": { temperature: 0.7, topP: 1.0, maxTokens: 8192 },
  "claude-haiku-4-5-20251001": { temperature: 0.7, topP: 1.0, maxTokens: 4096 },
  // Anthropic Claude 4.1 Series
  "claude-opus-4-1-20250805": { temperature: 0.7, topP: 1.0, maxTokens: 8192 },
  // Anthropic Claude 4 Series
  "claude-opus-4-20250514": { temperature: 0.7, topP: 1.0, maxTokens: 8192 },
  "claude-sonnet-4-20250514": { temperature: 0.7, topP: 1.0, maxTokens: 4096 },
  // Anthropic Claude 3.5 Series (Legacy)
  "claude-3-5-sonnet-20241022": { temperature: 0.0, topP: 1.0, maxTokens: 4096 },
  "claude-3-5-haiku-20241022": { temperature: 0.0, topP: 1.0, maxTokens: 4096 },
  // DeepSeek V3.2 Models
  "deepseek-chat": { temperature: 0.7, topP: 0.95, maxTokens: 8192 },
  "deepseek-reasoner": { temperature: 1.0, topP: 1.0, maxTokens: 16384 },
  // Groq Llama-3-Groq Tool-Use Models
  "llama-3-groq-70b-tool-use": { temperature: 0.7, topP: 0.9, maxTokens: 8192 },
  "llama-3-groq-8b-tool-use": { temperature: 0.7, topP: 0.9, maxTokens: 4096 },
  // Groq Llama 3.3 Series
  "llama-3.3-70b-versatile": { temperature: 0.7, topP: 0.9, maxTokens: 8192 },
  // Groq Llama 3.1 Series
  "llama-3.1-405b": { temperature: 0.7, topP: 0.9, maxTokens: 8192 },
  "llama-3.1-70b-versatile": { temperature: 0.7, topP: 0.9, maxTokens: 8192 },
  "llama-3.1-8b-instant": { temperature: 0.7, topP: 0.9, maxTokens: 4096 },
  // Groq Mistral Small 3
  "mistral-small-3": { temperature: 0.7, topP: 0.9, maxTokens: 8192 },
  // Groq Mixtral
  "mixtral-8x7b-32768": { temperature: 0.7, topP: 0.9, maxTokens: 32768 },
  // OpenRouter Llama 4 Series
  "meta-llama/llama-4-maverick": { temperature: 0.7, topP: 0.9, maxTokens: 16384 },
  "meta-llama/llama-4-scout": { temperature: 0.7, topP: 0.9, maxTokens: 16384 },
  // OpenRouter OpenAI
  "openai/o4-mini": { temperature: 1.0, topP: 1.0, maxTokens: 8192 },
  "openai/o3": { temperature: 1.0, topP: 1.0, maxTokens: 8192 },
  "openai/gpt-4o": { temperature: 0.7, topP: 1.0, maxTokens: 4096 },
  "openai/gpt-4o-mini": { temperature: 0.7, topP: 1.0, maxTokens: 16384 },
  // OpenRouter Google
  "google/gemini-3-flash-preview": { temperature: 1.0, topP: 0.95, maxTokens: 8192 },
  "google/gemini-2.0-flash": { temperature: 1.0, topP: 0.95, maxTokens: 8192 },
  "google/gemini-pro-1.5": { temperature: 0.9, topP: 0.95, maxTokens: 8192 },
  "google/gemini-flash-1.5": { temperature: 1.0, topP: 0.95, maxTokens: 8192 },
  // OpenRouter DeepSeek
  "deepseek/deepseek-v3.2": { temperature: 0.7, topP: 0.95, maxTokens: 8192 },
  "deepseek/deepseek-v3.1": { temperature: 0.7, topP: 0.95, maxTokens: 8192 },
  // OpenRouter Anthropic
  "anthropic/claude-4.5-opus": { temperature: 0.7, topP: 1.0, maxTokens: 8192 },
  "anthropic/claude-4.5-sonnet": { temperature: 0.7, topP: 1.0, maxTokens: 8192 },
  "anthropic/claude-3.5-sonnet": { temperature: 0.0, topP: 1.0, maxTokens: 4096 },
  // OpenRouter Moonshot
  "moonshot/kimi-vl-a3b-thinking": { temperature: 0.9, topP: 0.9, maxTokens: 8192 },
  // OpenRouter Meta Llama 3.1
  "meta-llama/llama-3.1-405b-instruct": { temperature: 0.7, topP: 0.9, maxTokens: 16384 },
  "meta-llama/llama-3.1-70b-instruct": { temperature: 0.7, topP: 0.9, maxTokens: 8192 },
  "meta-llama/llama-3.1-8b-instruct": { temperature: 0.7, topP: 0.9, maxTokens: 4096 },
  // Hugging Face FunctionGemma Series
  "google/functiongemma-7b-it": { temperature: 0.7, topP: 0.95, maxTokens: 8192 },
  "google/functiongemma-2b-it": { temperature: 0.7, topP: 0.95, maxTokens: 4096 },
  "google/functiongemma-270m-it": { temperature: 0.7, topP: 0.95, maxTokens: 2048 },
  // Hugging Face Qwen 3 Series
  "Qwen/Qwen3-Instruct": { temperature: 0.7, topP: 0.9, maxTokens: 8192 },
  // Hugging Face Qwen 2.5 Series
  "Qwen/Qwen2.5-72B-Instruct": { temperature: 0.7, topP: 0.9, maxTokens: 32768 },
  "Qwen/Qwen2.5-14B-Instruct": { temperature: 0.7, topP: 0.9, maxTokens: 8192 },
  "Qwen/Qwen2.5-Instruct": { temperature: 0.7, topP: 0.9, maxTokens: 8192 },
  // Hugging Face Llama 3.1 Series
  "meta-llama/Llama-3.1-70B-Instruct": { temperature: 0.7, topP: 0.9, maxTokens: 8192 },
  "meta-llama/Llama-3.1-8B-Instruct": { temperature: 0.7, topP: 0.9, maxTokens: 4096 },
  // Hugging Face Mistral Series
  "mistralai/Mixtral-8x7B-Instruct": { temperature: 0.7, topP: 0.9, maxTokens: 32768 },
  "mistralai/Mistral-7B-Instruct": { temperature: 0.7, topP: 0.9, maxTokens: 8192 },
  // Varsayılan (bilinmeyen modeller için)
  "default": { temperature: 0.7, topP: 1.0, maxTokens: 4096 },
}

// Model adından optimal ayarları bul (akıllı eşleşme)
function getOptimalSettingsForModel(modelName) {
  if (!modelName) return MODEL_OPTIMAL_SETTINGS.default
  
  // Direkt eşleşme
  if (MODEL_OPTIMAL_SETTINGS[modelName]) {
    return MODEL_OPTIMAL_SETTINGS[modelName]
  }
  
  // Akıllı eşleşme - model adına göre kategori bul
  const modelLower = modelName.toLowerCase()
  
  // Reasoning modelleri
  if (modelLower.includes("reasoner") || modelLower.includes("o1")) {
    return { temperature: 1.0, topP: 1.0, maxTokens: 8192 }
  }
  
  // Coding modelleri
  if (modelLower.includes("coder") || modelLower.includes("code")) {
    return { temperature: 0.2, topP: 0.95, maxTokens: 4096 }
  }
  
  // Gemini modelleri
  if (modelLower.includes("gemini") || modelLower.includes("gemma")) {
    if (modelLower.includes("pro") || modelLower.includes("3")) {
      return { temperature: 0.9, topP: 0.95, maxTokens: 8192 }
    }
    return { temperature: 1.0, topP: 0.95, maxTokens: 8192 }
  }
  
  // Claude modelleri
  if (modelLower.includes("claude")) {
    if (modelLower.includes("3.5") || modelLower.includes("sonnet")) {
      return { temperature: 0.0, topP: 1.0, maxTokens: 4096 }
    }
    return { temperature: 0.7, topP: 1.0, maxTokens: 4096 }
  }
  
  // GPT modelleri
  if (modelLower.includes("gpt")) {
    if (modelLower.includes("4o") || modelLower.includes("4-turbo")) {
      return { temperature: 0.7, topP: 1.0, maxTokens: 4096 }
    }
    if (modelLower.includes("4")) {
      return { temperature: 0.7, topP: 1.0, maxTokens: 4096 }
    }
    return { temperature: 0.7, topP: 1.0, maxTokens: 4096 }
  }
  
  // Llama modelleri
  if (modelLower.includes("llama")) {
    return { temperature: 0.7, topP: 0.9, maxTokens: 4096 }
  }
  
  // Mistral modelleri
  if (modelLower.includes("mistral") || modelLower.includes("mixtral")) {
    return { temperature: 0.7, topP: 0.9, maxTokens: 4096 }
  }
  
  // Varsayılan
  return MODEL_OPTIMAL_SETTINGS.default
}

// Model seçildiğinde optimal ayarları uygula
function applyOptimalSettings(modelName) {
  const settings = getOptimalSettingsForModel(modelName)
  
  // UI elementlerini güncelle - DISABLED (sliders removed from UI)
  // const tempInput = document.getElementById("temperature-input")
  // const tempNumber = document.getElementById("temperature-number")
  // const topPInput = document.getElementById("top-p-input")
  // const topPNumber = document.getElementById("top-p-number")
  // const maxTokensInput = document.getElementById("max-tokens-input")
  // const maxTokensNumber = document.getElementById("max-tokens-number")
  // 
  // if (tempInput && tempNumber) {
  //   tempInput.value = settings.temperature
  //   tempNumber.value = settings.temperature
  //   tempInput.dispatchEvent(new Event("input", { bubbles: true }))
  // }
  // 
  // if (topPInput && topPNumber) {
  //   topPInput.value = settings.topP
  //   topPNumber.value = settings.topP
  //   topPInput.dispatchEvent(new Event("input", { bubbles: true }))
  // }
  // 
  // if (maxTokensInput && maxTokensNumber) {
  //   maxTokensInput.value = settings.maxTokens
  //   maxTokensNumber.value = settings.maxTokens
  //   maxTokensInput.dispatchEvent(new Event("input", { bubbles: true }))
  // }
  
  // Save default settings (still needed for content.js to read baseline values)
  saveSettings({
    temperature: settings.temperature,
    topP: settings.topP,
    maxTokens: settings.maxTokens,
  })
}

const PROVIDERS = {
  google: {
    name: "Google (Gemini)",
    models: [
      // Gemini 2.5 Series - Stable, Function Calling ✅
      { value: "gemini-2.5-pro", label: "Gemini 2.5 Pro ⭐" },
      { value: "gemini-2.5-flash", label: "Gemini 2.5 Flash ⭐ (Recommended)" },
      { value: "gemini-2.5-flash-lite", label: "Gemini 2.5 Flash Lite" },
      // Gemini 1.5 Series - Stable, Function Calling ✅
      { value: "gemini-1.5-pro", label: "Gemini 1.5 Pro" },
      { value: "gemini-1.5-flash", label: "Gemini 1.5 Flash" },
      { value: "gemini-1.5-flash-8b", label: "Gemini 1.5 Flash 8B" },
    ],
    requiresKey: true,
    requiresUrl: false,
    supportsSystemInstructions: true,
  },
  openai: {
    name: "OpenAI",
    models: [
      // Reasoning Models (o-series) - Function Calling ✅
      { value: "o3", label: "o3 ⭐ (Reasoning)" },
      { value: "o4-mini", label: "o4-mini (Reasoning)" },
      // GPT-4o Series - Function Calling ✅
      { value: "gpt-4o", label: "GPT-4o ⭐" },
      { value: "gpt-4o-mini", label: "GPT-4o Mini" },
      // GPT-4 Turbo - Function Calling ✅
      { value: "gpt-4-turbo", label: "GPT-4 Turbo" },
      { value: "gpt-4-turbo-2024-04-09", label: "GPT-4 Turbo (2024-04-09)" },
      // GPT-4 - Function Calling ✅
      { value: "gpt-4", label: "GPT-4" },
      { value: "gpt-4-0613", label: "GPT-4 (0613)" },
      // GPT-3.5 Turbo - Function Calling ✅
      { value: "gpt-3.5-turbo", label: "GPT-3.5 Turbo" },
      { value: "gpt-3.5-turbo-0125", label: "GPT-3.5 Turbo (0125)" },
    ],
    requiresKey: true,
    requiresUrl: false,
    supportsSystemInstructions: true,
  },
  anthropic: {
    name: "Anthropic (Claude)",
    models: [
      // Claude 4.5 Series - Advanced Tool Use ✅ (2026)
      { value: "claude-opus-4-5-20251101", label: "Claude 4.5 Opus ⭐" },
      { value: "claude-sonnet-4-5-20250929", label: "Claude 4.5 Sonnet ⭐" },
      { value: "claude-haiku-4-5-20251001", label: "Claude 4.5 Haiku" },
      // Claude 4.1 Series - Tool Use ✅
      { value: "claude-opus-4-1-20250805", label: "Claude 4.1 Opus" },
      // Claude 4 Series - Tool Use ✅
      { value: "claude-opus-4-20250514", label: "Claude 4 Opus" },
      { value: "claude-sonnet-4-20250514", label: "Claude 4 Sonnet" },
      // Claude 3.5 Series - Tool Use ✅ (Deprecated soon)
      { value: "claude-3-5-sonnet-20241022", label: "Claude 3.5 Sonnet (Legacy)" },
      { value: "claude-3-5-haiku-20241022", label: "Claude 3.5 Haiku (Legacy)" },
    ],
    requiresKey: true,
    requiresUrl: false,
    supportsSystemInstructions: true,
  },
  deepseek: {
    name: "DeepSeek",
    models: [
      // DeepSeek V3.2 - Function Calling ✅ (2026)
      { value: "deepseek-chat", label: "DeepSeek Chat (V3.2) ⭐" },
      { value: "deepseek-reasoner", label: "DeepSeek Reasoner (V3.2) ⭐" },
    ],
    requiresKey: true,
    requiresUrl: false,
    supportsSystemInstructions: true,
  },
  openrouter: {
    name: "OpenRouter",
    models: [
      // Meta Llama 4 Series - Function Calling ✅ (2026)
      { value: "meta-llama/llama-4-maverick", label: "Llama 4 Maverick (400B) ⭐" },
      { value: "meta-llama/llama-4-scout", label: "Llama 4 Scout (109B) ⭐" },
      // OpenAI o-series - Function Calling ✅ (2026)
      { value: "openai/o4-mini", label: "OpenAI o4-mini" },
      { value: "openai/o3", label: "OpenAI o3" },
      // OpenAI GPT-4o - Function Calling ✅
      { value: "openai/gpt-4o", label: "GPT-4o" },
      { value: "openai/gpt-4o-mini", label: "GPT-4o Mini" },
      // Google Gemini 3 - Function Calling ✅ (2026)
      { value: "google/gemini-3-flash-preview", label: "Gemini 3 Flash Preview" },
      { value: "google/gemini-2.0-flash", label: "Gemini 2.0 Flash" },
      { value: "google/gemini-pro-1.5", label: "Gemini Pro 1.5" },
      { value: "google/gemini-flash-1.5", label: "Gemini Flash 1.5" },
      // DeepSeek V3.2 - Function Calling ✅ (2026)
      { value: "deepseek/deepseek-v3.2", label: "DeepSeek V3.2" },
      { value: "deepseek/deepseek-v3.1", label: "DeepSeek V3.1" },
      // Anthropic Claude 4.5 - Function Calling ✅ (2026)
      { value: "anthropic/claude-4.5-opus", label: "Claude 4.5 Opus" },
      { value: "anthropic/claude-4.5-sonnet", label: "Claude 4.5 Sonnet" },
      { value: "anthropic/claude-3.5-sonnet", label: "Claude 3.5 Sonnet" },
      // Moonshot AI - Function Calling ✅ (2026)
      { value: "moonshot/kimi-vl-a3b-thinking", label: "Kimi VL A3B Thinking" },
      // Meta Llama 3.1 - Function Calling ✅
      { value: "meta-llama/llama-3.1-405b-instruct", label: "Llama 3.1 405B Instruct" },
      { value: "meta-llama/llama-3.1-70b-instruct", label: "Llama 3.1 70B Instruct" },
      { value: "meta-llama/llama-3.1-8b-instruct", label: "Llama 3.1 8B Instruct" },
    ],
    requiresKey: true,
    requiresUrl: false,
    supportsSystemInstructions: true,
  },
  groq: {
    name: "Groq",
    models: [
      // Llama-3-Groq Tool-Use Models - Best Function Calling ✅
      { value: "llama-3-groq-70b-tool-use", label: "Llama 3 Groq 70B Tool Use ⭐" },
      { value: "llama-3-groq-8b-tool-use", label: "Llama 3 Groq 8B Tool Use ⭐" },
      // Llama 3.3 Series - Function Calling ✅ (2026)
      { value: "llama-3.3-70b-versatile", label: "Llama 3.3 70B Versatile" },
      // Llama 3.1 Series - Function Calling ✅
      { value: "llama-3.1-405b", label: "Llama 3.1 405B" },
      { value: "llama-3.1-70b-versatile", label: "Llama 3.1 70B Versatile" },
      { value: "llama-3.1-8b-instant", label: "Llama 3.1 8B Instant" },
      // Mistral Small 3 - Function Calling ✅ (2025)
      { value: "mistral-small-3", label: "Mistral Small 3 (24B)" },
      // Mixtral - Function Calling ✅
      { value: "mixtral-8x7b-32768", label: "Mixtral 8x7B" },
    ],
    requiresKey: true,
    requiresUrl: false,
    supportsSystemInstructions: true,
  },
  huggingface: {
    name: "Hugging Face",
    models: [
      // Google FunctionGemma - Specialized Function Calling ✅
      { value: "google/functiongemma-7b-it", label: "FunctionGemma 7B ⭐" },
      { value: "google/functiongemma-2b-it", label: "FunctionGemma 2B" },
      { value: "google/functiongemma-270m-it", label: "FunctionGemma 270M (Tiny)" },
      // Qwen 3 Series - Function Calling ✅ (2026)
      { value: "Qwen/Qwen3-Instruct", label: "Qwen 3 Instruct ⭐" },
      // Qwen 2.5 Series - Function Calling ✅
      { value: "Qwen/Qwen2.5-72B-Instruct", label: "Qwen 2.5 72B Instruct" },
      { value: "Qwen/Qwen2.5-14B-Instruct", label: "Qwen 2.5 14B Instruct" },
      { value: "Qwen/Qwen2.5-Instruct", label: "Qwen 2.5 Instruct" },
      // Meta Llama 3.1 - Function Calling ✅
      { value: "meta-llama/Llama-3.1-70B-Instruct", label: "Llama 3.1 70B Instruct" },
      { value: "meta-llama/Llama-3.1-8B-Instruct", label: "Llama 3.1 8B Instruct" },
      // Mistral AI - Function Calling ✅
      { value: "mistralai/Mixtral-8x7B-Instruct", label: "Mixtral 8x7B Instruct" },
      { value: "mistralai/Mistral-7B-Instruct", label: "Mistral 7B Instruct" },
    ],
    requiresKey: true,
    requiresUrl: false,
    supportsSystemInstructions: true,
  },
}

// Tab switching - will be initialized in DOMContentLoaded
function initTabSwitching() {
  document.querySelectorAll(".tab-button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const tab = btn.dataset.tab
      
      // Update buttons
      document.querySelectorAll(".tab-button").forEach((b) => b.classList.remove("active"))
      btn.classList.add("active")
      
      // Update content
      document.querySelectorAll(".tab-content").forEach((c) => (c.style.display = "none"))
      const targetTab = document.getElementById(`${tab}-tab`)
      if (targetTab) {
        targetTab.style.display = "block"
      }
    })
  })
}

// Load settings
async function loadSettings() {
  const settings = await getSettings()
  
  // Set provider
  const provider = settings.provider || "google"
  document.getElementById("provider-select").value = provider
  await updateProviderUI(provider)
  
  // Set model (will handle preset vs custom)
  await updateModels(provider)
  
  // Set API key (provider-specific) - already handled in updateProviderUI
  // Set API URL
  if (settings.apiUrl) {
    document.getElementById("api-url-input").value = settings.apiUrl
  }
  
  // Set API sliders - DISABLED (sliders removed from UI, auto-managed)
  // const temperature = settings.temperature || 0.7
  // document.getElementById("temperature-input").value = temperature
  // document.getElementById("temperature-number").value = temperature
  // 
  // const topP = settings.topP || 1.0
  // document.getElementById("top-p-input").value = topP
  // document.getElementById("top-p-number").value = topP
  // 
  // const maxTokens = settings.maxTokens || 4096
  // document.getElementById("max-tokens-input").value = maxTokens
  // document.getElementById("max-tokens-number").value = maxTokens
  
  // Set Google Search toggle
  if (settings.googleSearch !== undefined) {
    document.getElementById("google-search-toggle").checked = settings.googleSearch
  }
  
  // Set Custom Instructions
  const customInstructionsInput = document.getElementById("custom-instructions-input")
  if (customInstructionsInput && settings.customInstructions) {
    customInstructionsInput.value = settings.customInstructions
  }
  
  // Set Chat settings
  document.getElementById("include-workflow-context-toggle").checked = settings.includeWorkflowContext !== false
  document.getElementById("save-ui-position-toggle").checked = settings.saveUIPosition !== false
  document.getElementById("message-fade-delay-input").value = settings.messageFadeDelay || 0
  
  // Set Tools toggles
  document.getElementById("workflow-access-toggle").checked = settings.workflowAccess !== false
  document.getElementById("node-library-access-toggle").checked = settings.nodeLibraryAccess !== false
  document.getElementById("node-creation-toggle").checked = settings.nodeCreation !== false
  document.getElementById("node-editing-toggle").checked = settings.nodeEditing !== false
  document.getElementById("node-removal-toggle").checked = settings.nodeRemoval !== false
  document.getElementById("affiliate-recommendations-toggle").checked = settings.affiliateRecommendations || false
  
  // Set Thinking Mode toggle
  const thinkingModeToggle = document.getElementById("thinking-mode-toggle")
  if (thinkingModeToggle) {
    thinkingModeToggle.checked = settings.thinkingMode || false
  }
  
  // Set Advanced Features toggles (Phase 1)
  document.getElementById("node-cloning-toggle").checked = settings.nodeCloning !== false
  document.getElementById("connection-management-toggle").checked = settings.connectionManagement !== false
  document.getElementById("bulk-operations-toggle").checked = settings.bulkOperations !== false
  document.getElementById("auto-layout-toggle").checked = settings.autoLayout !== false
  document.getElementById("workflow-validation-toggle").checked = settings.workflowValidation !== false
  document.getElementById("workflow-execution-toggle").checked = settings.workflowExecution !== false
  
  // Set Advanced Features toggles (Phase 2)
  document.getElementById("advanced-import-export-toggle").checked = settings.advancedImportExport !== false
  document.getElementById("execution-history-toggle").checked = settings.executionHistory !== false
  document.getElementById("workflow-templates-toggle").checked = settings.workflowTemplates !== false
  document.getElementById("workflow-optimization-toggle").checked = settings.workflowOptimization !== false
  
  // Set Enterprise Features toggles (Phase 3)
  document.getElementById("workflow-versioning-toggle").checked = settings.workflowVersioning !== false
  document.getElementById("advanced-debugging-toggle").checked = settings.advancedDebugging !== false
  document.getElementById("testing-framework-toggle").checked = settings.testingFramework !== false
  document.getElementById("cicd-integration-toggle").checked = settings.cicdIntegration !== false
  document.getElementById("custom-node-development-toggle").checked = settings.customNodeDevelopment !== false
  document.getElementById("documentation-generation-toggle").checked = settings.documentationGeneration !== false
  
  // Set Debug Mode settings
  const debugModeToggle = document.getElementById("debug-mode-toggle")
  const debugOptions = document.getElementById("debug-options")
  const debugServerUrlInput = document.getElementById("debug-server-url-input")
  const debugAutoConnectToggle = document.getElementById("debug-auto-connect-toggle")
  const debugConsoleLoggingToggle = document.getElementById("debug-console-logging-toggle")
  const debugPiiMaskingToggle = document.getElementById("debug-pii-masking-toggle")
  
  if (debugModeToggle) {
    debugModeToggle.checked = settings.debugMode || settings.debugEnabled || false
    
    // Show/hide debug options based on saved state
    if (debugOptions) {
      debugOptions.style.display = (settings.debugMode || settings.debugEnabled) ? "block" : "none"
    }
  }
  
  if (debugServerUrlInput) {
    debugServerUrlInput.value = settings.debugServerUrl || "http://localhost:3333"
  }
  
  if (debugAutoConnectToggle) {
    debugAutoConnectToggle.checked = settings.debugAutoConnect !== false
  }
  
  if (debugConsoleLoggingToggle) {
    debugConsoleLoggingToggle.checked = settings.debugConsoleLogging !== false
  }
  
  if (debugPiiMaskingToggle) {
    debugPiiMaskingToggle.checked = settings.debugPiiMasking !== false
  }
  
  // Check if current model supports thinking mode
  checkThinkingModeSupport(settings.model)
}

// API Key links for each provider
const API_KEY_LINKS = {
  google: "https://makersuite.google.com/app/apikey",
  openai: "https://platform.openai.com/api-keys",
  anthropic: "https://console.anthropic.com/settings/keys",
  deepseek: "https://platform.deepseek.com/api_keys",
  openrouter: "https://openrouter.ai/keys",
  groq: "https://console.groq.com/keys",
  cohere: "https://dashboard.cohere.com/api-keys",
  huggingface: "https://huggingface.co/settings/tokens",
  local: "",
}

// Update provider UI
async function updateProviderUI(provider) {
  const providerConfig = PROVIDERS[provider]
  if (!providerConfig) return
  
  const apiKeyGroup = document.getElementById("api-key-group")
  const apiUrlGroup = document.getElementById("api-url-group")
  const apiKeyLabel = document.getElementById("api-key-label")
  const apiKeyLink = document.getElementById("api-key-link")
  const googleSearchGroup = document.getElementById("google-search-group")
  
  // Show/hide API key and URL fields
  apiKeyGroup.style.display = providerConfig.requiresKey ? "block" : "none"
  apiUrlGroup.style.display = providerConfig.requiresUrl ? "block" : "none"
  
  // Update API key label and link
  if (providerConfig.requiresKey) {
    const providerName = providerConfig.name
    apiKeyLabel.textContent = `${providerName} API Key`
    
    const link = API_KEY_LINKS[provider]
    if (link) {
      apiKeyLink.href = link
      // Update link text while preserving SVG icon
      const svg = apiKeyLink.querySelector("svg")
      apiKeyLink.innerHTML = `${t("getGoogleKey")} ${providerName === "Google (Gemini)" ? "" : providerName}`
      if (svg) {
        apiKeyLink.appendChild(svg)
      } else {
        apiKeyLink.innerHTML += ` <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2H10V10M10 2L2 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`
      }
      apiKeyLink.style.display = "inline-flex"
    } else {
      apiKeyLink.style.display = "none"
    }
  }
  
  // Show Google Search toggle only for Google provider
  googleSearchGroup.style.display = provider === "google" ? "block" : "none"
  
  // Load provider-specific API key
  await loadProviderApiKey(provider)
  
  // Check thinking mode support for current model
  const settings = await getSettings()
  if (settings.model) {
    checkThinkingModeSupport(settings.model)
  } else {
    // Hide thinking mode if no model selected
    const thinkingGroup = document.getElementById("thinking-mode-group")
    if (thinkingGroup) {
      thinkingGroup.style.display = "none"
    }
  }
}

// Load provider-specific API key
async function loadProviderApiKey(provider) {
  const settings = await getSettings()
  const apiKeyInput = document.getElementById("api-key-input")
  
  if (apiKeyInput) {
    // Get API key from apiKeys object or fallback to old apiKey
    const apiKeys = settings.apiKeys || {}
    const apiKey = apiKeys[provider] || settings.apiKey || ""
    apiKeyInput.value = apiKey
  }
}

// Check if model supports thinking mode
function checkThinkingModeSupport(modelName) {
  if (!modelName) {
    document.getElementById("thinking-mode-group").style.display = "none"
    return false
  }
  
  const modelLower = modelName.toLowerCase()
  
  // Models that support thinking mode
  const thinkingModels = [
    "reasoner",
    "o1",
    "o1-preview",
    "o1-mini",
  ]
  
  const supportsThinking = thinkingModels.some(keyword => modelLower.includes(keyword))
  
  const thinkingGroup = document.getElementById("thinking-mode-group")
  if (thinkingGroup) {
    thinkingGroup.style.display = supportsThinking ? "flex" : "none"
  }
  
  return supportsThinking
}

// Update models
async function updateModels(provider, dynamicModels = null) {
  const providerConfig = PROVIDERS[provider]
  if (!providerConfig) return
  
  const modelSelect = document.getElementById("model-select")
  const modelCustomInput = document.getElementById("model-custom-input")
  const settings = await getSettings()
  
  modelSelect.innerHTML = ""
  
  // Use dynamic models if available, otherwise use preset models
  const modelsToShow = dynamicModels && dynamicModels.length > 0 ? dynamicModels : providerConfig.models
  
  // Add models to select
  modelsToShow.forEach((model) => {
    const option = document.createElement("option")
    option.value = model.value
    option.textContent = model.label || model.value
    modelSelect.appendChild(option)
  })
  
  // Get provider-specific selected model
  const selectedModels = settings.selectedModels || {}
  const providerModel = selectedModels[provider] || ""
  const currentModel = providerModel || settings.model || ""
  const isInList = modelsToShow.some(m => m.value === currentModel)
  
  // Check if user is in custom mode (from settings - more reliable than checking DOM)
  const isCustomModelMode = settings.isCustomModelMode || false
  
  // NEVER auto-switch to custom mode - only stay in custom if user explicitly enabled it
  // Custom mode should ONLY be activated by user clicking the toggle button
  if (isInList && currentModel) {
    // Model is in list, use it - always use preset mode
    modelSelect.value = currentModel
    modelSelect.style.display = "block"
    modelCustomInput.style.display = "none"
    modelCustomInput.value = "" // Clear custom input
    // Clear custom mode flag if model is in list
    if (isCustomModelMode) {
      await saveSettings({ isCustomModelMode: false })
    }
    // Update global model and provider-specific model
    await saveSettings({ 
      model: currentModel,
      selectedModels: { ...selectedModels, [provider]: currentModel }
    })
    // Apply optimal settings when loading existing model
    applyOptimalSettings(currentModel)
    // Check thinking mode support
    checkThinkingModeSupport(currentModel)
  } else if (currentModel && !isInList && isCustomModelMode) {
    // Model exists but not in list AND user is in custom mode - keep custom mode
    // Only keep custom mode if user explicitly enabled it
    modelCustomInput.value = currentModel
    modelSelect.style.display = "none"
    modelCustomInput.style.display = "block"
    applyOptimalSettings(currentModel)
    checkThinkingModeSupport(currentModel)
  } else {
    // Model not in list and NOT in custom mode - switch to preset with first model
    // OR no model selected - show preset mode with first model selected
    // NEVER auto-switch to custom - always use preset mode
    if (modelsToShow.length > 0) {
      const firstModel = modelsToShow[0].value
      modelSelect.value = firstModel
      modelSelect.style.display = "block"
      modelCustomInput.style.display = "none"
      modelCustomInput.value = ""
      // Clear custom mode flag
      if (isCustomModelMode) {
        await saveSettings({ isCustomModelMode: false })
      }
      // Update global model and provider-specific model
      await saveSettings({ 
        model: firstModel,
        selectedModels: { ...selectedModels, [provider]: firstModel }
      })
      applyOptimalSettings(firstModel)
      checkThinkingModeSupport(firstModel)
    }
  }
}

// Model toggle button (switch between preset and custom) - will be initialized in DOMContentLoaded
function initModelToggle() {
  const toggleBtn = document.getElementById("model-toggle-btn")
  if (!toggleBtn) return
  
  toggleBtn.addEventListener("click", async () => {
  const modelSelect = document.getElementById("model-select")
  const modelCustomInput = document.getElementById("model-custom-input")
  const settings = await getSettings()
  const provider = settings.provider || "google"
  const selectedModels = settings.selectedModels || {}
  
  if (modelSelect.style.display === "none") {
    // Switch to preset
    modelSelect.style.display = "block"
    modelCustomInput.style.display = "none"
    modelSelect.value = modelSelect.options[0]?.value || ""
    // Save custom mode state
    await saveSettings({ isCustomModelMode: false })
    // Save selected model
    if (modelSelect.value) {
      await saveSettings({ 
        model: modelSelect.value,
        selectedModels: { ...selectedModels, [provider]: modelSelect.value }
      })
      applyOptimalSettings(modelSelect.value)
      checkThinkingModeSupport(modelSelect.value)
    }
  } else {
    // Switch to custom
    modelSelect.style.display = "none"
    modelCustomInput.style.display = "block"
    modelCustomInput.value = modelSelect.value || settings.model || ""
    modelCustomInput.focus()
    // Save custom mode state
    await saveSettings({ isCustomModelMode: true })
  }
  })
}

// Custom model input - auto-save and apply optimal settings - will be initialized in DOMContentLoaded
function initModelCustomInput() {
  const customInput = document.getElementById("model-custom-input")
  if (!customInput) return
  
  customInput.addEventListener("blur", async (e) => {
  const model = e.target.value.trim()
  const settings = await getSettings()
  const provider = settings.provider || "google"
  const selectedModels = settings.selectedModels || {}
  
  if (model) {
    // Save to both global model and provider-specific model
    await saveSettings({ 
      model,
      selectedModels: { ...selectedModels, [provider]: model }
    })
    applyOptimalSettings(model)
    checkThinkingModeSupport(model)
  } else {
    // If custom input is cleared, switch back to preset mode
    const modelSelect = document.getElementById("model-select")
    const modelCustomInput = document.getElementById("model-custom-input")
    const providerConfig = PROVIDERS[provider]
    
    if (providerConfig && providerConfig.models.length > 0) {
      const firstModel = providerConfig.models[0].value
      modelSelect.style.display = "block"
      modelCustomInput.style.display = "none"
      modelSelect.value = firstModel
      // Save to both global model and provider-specific model
      await saveSettings({ 
        model: firstModel,
        selectedModels: { ...selectedModels, [provider]: firstModel }
      })
      applyOptimalSettings(firstModel)
      checkThinkingModeSupport(firstModel)
    }
  }
  })
}

// Provider change - auto-save and validate API key if exists - will be initialized in DOMContentLoaded
function initProviderSelect() {
  const providerSelect = document.getElementById("provider-select")
  if (!providerSelect) return
  
  providerSelect.addEventListener("change", async (e) => {
  const provider = e.target.value
  await saveSettings({ provider })
  await updateProviderUI(provider)
  await updateModels(provider)
  
  // Validate API key if it exists and provider requires it
  const settings = await getSettings()
  const apiKeys = settings.apiKeys || {}
  const apiKey = apiKeys[provider] || settings.apiKey || ""
  const model = settings.model || ""
  
  if (apiKey && PROVIDERS[provider]?.requiresKey) {
    const apiKeyInput = document.getElementById("api-key-input")
    if (apiKeyInput) {
      apiKeyInput.disabled = true
      apiKeyInput.style.opacity = "0.6"
      
      try {
        const result = await testApiKey(provider, apiKey, model)
        if (result.valid) {
          showAlert("api-message", result.message, "success")
          // If models are returned, update the model list
          if (result.models && result.models.length > 0) {
            await updateModels(provider, result.models)
          }
        } else {
          showAlert("api-message", result.message, "error")
        }
      } catch (error) {
        showAlert("api-message", `API key kontrol edilirken hata oluştu: ${error.message}`, "error")
      } finally {
        apiKeyInput.disabled = false
        apiKeyInput.style.opacity = "1"
      }
    }
  }
  })
}

// Model change - auto-save and apply optimal settings - will be initialized in DOMContentLoaded
function initModelSelect() {
  const modelSelect = document.getElementById("model-select")
  if (!modelSelect) return
  
  modelSelect.addEventListener("change", async (e) => {
  const model = e.target.value
  if (model) {
    const settings = await getSettings()
    const provider = settings.provider || "google"
    const selectedModels = settings.selectedModels || {}
    
    // Save to both global model and provider-specific model
    await saveSettings({ 
      model,
      selectedModels: { ...selectedModels, [provider]: model }
    })
    applyOptimalSettings(model)
    checkThinkingModeSupport(model)
    
    // Ensure we're in preset mode (not custom)
    const modelSelect = document.getElementById("model-select")
    const modelCustomInput = document.getElementById("model-custom-input")
    modelSelect.style.display = "block"
    modelCustomInput.style.display = "none"
    modelCustomInput.value = "" // Clear custom input
  }
  })
}

// Custom Instructions - auto-save - will be initialized in DOMContentLoaded
function initCustomInstructions() {
  const customInstructions = document.getElementById("custom-instructions-input")
  if (!customInstructions) return
  
  customInstructions.addEventListener("blur", async (e) => {
    await saveSettings({ customInstructions: e.target.value })
  })
}

// Test API key validity
async function testApiKey(provider, apiKey, model) {
  if (!apiKey || !apiKey.trim()) {
    return { valid: false, message: "API key boş" }
  }

  try {
    switch (provider) {
      case "google": {
        // Test with Gemini API - list models
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`,
          { method: "GET" }
        )
        if (response.ok) {
          return { valid: true, message: "API key geçerli ✓" }
        } else {
          const error = await response.json().catch(() => ({ error: { message: "Geçersiz API key" } }))
          return { valid: false, message: error.error?.message || "API key geçersiz" }
        }
      }

      case "openai": {
        // Test with OpenAI API
        // We only use our predefined function-calling models, not all available models
        const response = await fetch("https://api.openai.com/v1/models", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        })
        if (response.ok) {
          // Don't return all models, use our predefined list from PROVIDERS
          return { valid: true, message: "API key geçerli ✓" }
        } else {
          const error = await response.json().catch(() => ({ error: { message: "Geçersiz API key" } }))
          return { valid: false, message: error.error?.message || "API key geçersiz" }
        }
      }

      case "anthropic": {
        // Test with Anthropic API - simple message
        const response = await fetch("https://api.anthropic.com/v1/messages", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": apiKey,
            "anthropic-version": "2024-06-01",
          },
          body: JSON.stringify({
            model: "claude-3-5-haiku-20241022",
            max_tokens: 10,
            messages: [{ role: "user", content: "test" }],
          }),
        })
        if (response.ok || response.status === 200) {
          return { valid: true, message: "API key geçerli ✓" }
        } else {
          const error = await response.json().catch(() => ({ error: { message: "Geçersiz API key" } }))
          return { valid: false, message: error.error?.message || "API key geçersiz" }
        }
      }

      case "deepseek": {
        // Test with DeepSeek API
        // We only use our predefined function-calling models, not all available models
        const response = await fetch("https://api.deepseek.com/v1/models", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        })
        if (response.ok) {
          // Don't return all models, use our predefined list from PROVIDERS
          return { valid: true, message: "API key geçerli ✓" }
        } else {
          const error = await response.json().catch(() => ({ error: { message: "Geçersiz API key" } }))
          return { valid: false, message: error.error?.message || "API key geçersiz" }
        }
      }

      case "openrouter": {
        // Test with OpenRouter API
        // We only use our predefined function-calling models, not all available models
        const response = await fetch("https://openrouter.ai/api/v1/models", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        })
        if (response.ok) {
          // Don't return all models, use our predefined list from PROVIDERS
          return { valid: true, message: "API key geçerli ✓" }
        } else {
          const error = await response.json().catch(() => ({ error: { message: "Geçersiz API key" } }))
          return { valid: false, message: error.error?.message || "API key geçersiz" }
        }
      }

      case "groq": {
        // Test with Groq API
        // We only use our predefined function-calling models, not all available models
        const response = await fetch("https://api.groq.com/openai/v1/models", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        })
        if (response.ok) {
          // Don't return all models, use our predefined list from PROVIDERS
          return { valid: true, message: "API key geçerli ✓" }
        } else {
          const error = await response.json().catch(() => ({ error: { message: "Geçersiz API key" } }))
          return { valid: false, message: error.error?.message || "API key geçersiz" }
        }
      }

      case "cohere": {
        // Test with Cohere API - list models
        const response = await fetch("https://api.cohere.ai/v1/models", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
        })
        if (response.ok) {
          return { valid: true, message: "API key geçerli ✓" }
        } else {
          const error = await response.json().catch(() => ({ error: { message: "Geçersiz API key" } }))
          return { valid: false, message: error.error?.message || "API key geçersiz" }
        }
      }

      case "huggingface": {
        // Test with Hugging Face Router API (OpenAI-compatible)
        // We only use our predefined function-calling models, not all available models
        const response = await fetch("https://router.huggingface.co/v1/models", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
        })
        if (response.ok) {
          // Don't return all models, use our predefined list from PROVIDERS
          return { valid: true, message: "API key geçerli ✓" }
        } else {
          const error = await response.json().catch(() => ({ error: { message: "Geçersiz API key" } }))
          return { valid: false, message: error.error?.message || "API key geçersiz" }
        }
      }

      case "local": {
        // Local LLM doesn't need API key validation
        return { valid: true, message: "Local LLM - API key gerekmez" }
      }

      default:
        return { valid: false, message: "Bilinmeyen provider" }
    }
  } catch (error) {
    return { valid: false, message: `Bağlantı hatası: ${error.message}` }
  }
}

// API Key change - auto-save and validate (provider-specific) - will be initialized in DOMContentLoaded
function initApiKeyInput() {
  const apiKeyInput = document.getElementById("api-key-input")
  if (!apiKeyInput) return
  
  apiKeyInput.addEventListener("blur", async (e) => {
    const apiKey = e.target.value.trim()
    const settings = await getSettings()
    const provider = settings.provider || "google"
    const model = settings.model || ""
    
    // Save to provider-specific apiKeys object
    const apiKeys = settings.apiKeys || {}
    apiKeys[provider] = apiKey
    
    // Also save to legacy apiKey for backward compatibility
    await saveSettings({ 
      apiKeys: apiKeys,
      apiKey: apiKey // Keep for backward compatibility
    })
    
    // Validate API key if provider requires it
    if (apiKey && PROVIDERS[provider]?.requiresKey) {
      // Show loading state
      e.target.disabled = true
      e.target.style.opacity = "0.6"
      
      try {
        const result = await testApiKey(provider, apiKey, model)
        
        // Show alert
        if (result.valid) {
          showAlert("api-message", result.message, "success")
          // If models are returned, update the model list
          if (result.models && result.models.length > 0) {
            await updateModels(provider, result.models)
          }
        } else {
          showAlert("api-message", result.message, "error")
        }
      } catch (error) {
        showAlert("api-message", `API key kontrol edilirken hata oluştu: ${error.message}`, "error")
      } finally {
        e.target.disabled = false
        e.target.style.opacity = "1"
      }
    }
  })
}

// API URL change - auto-save - will be initialized in DOMContentLoaded
function initApiUrlInput() {
  const apiUrlInput = document.getElementById("api-url-input")
  if (!apiUrlInput) return
  
  apiUrlInput.addEventListener("blur", async (e) => {
    await saveSettings({ apiUrl: e.target.value })
  })
}

// ===================================================================
// TEMPERATURE, TOP P, MAX TOKENS - NOW AUTO-MANAGED
// These sliders have been removed from UI - values are auto-calculated
// ===================================================================

// Temperature slider sync - DISABLED (auto-managed now)
// function initTemperatureSlider() {
//   const tempInput = document.getElementById("temperature-input")
//   const tempNumber = document.getElementById("temperature-number")
//   if (!tempInput || !tempNumber) return
//   
//   tempInput.addEventListener("input", (e) => {
//     tempNumber.value = e.target.value
//     saveSettings({ temperature: parseFloat(e.target.value) })
//   })
//
//   tempNumber.addEventListener("input", (e) => {
//     const value = Math.max(0, Math.min(2, parseFloat(e.target.value) || 0))
//     tempInput.value = value
//     tempNumber.value = value
//     saveSettings({ temperature: value })
//   })
// }

// Top P slider sync - DISABLED (auto-managed now)
// function initTopPSlider() {
//   const topPInput = document.getElementById("top-p-input")
//   const topPNumber = document.getElementById("top-p-number")
//   if (!topPInput || !topPNumber) return
//   
//   topPInput.addEventListener("input", (e) => {
//     topPNumber.value = e.target.value
//     saveSettings({ topP: parseFloat(e.target.value) })
//   })
//
//   topPNumber.addEventListener("input", (e) => {
//     const value = Math.max(0, Math.min(1, parseFloat(e.target.value) || 0))
//     topPInput.value = value
//     topPNumber.value = value
//     saveSettings({ topP: value })
//   })
// }

// Max Tokens slider sync - DISABLED (auto-managed now)
// function initMaxTokensSlider() {
//   const maxTokensInput = document.getElementById("max-tokens-input")
//   const maxTokensNumber = document.getElementById("max-tokens-number")
//   if (!maxTokensInput || !maxTokensNumber) return
//   
//   maxTokensInput.addEventListener("input", (e) => {
//     maxTokensNumber.value = e.target.value
//     saveSettings({ maxTokens: parseInt(e.target.value) })
//   })
//
//   maxTokensNumber.addEventListener("input", (e) => {
//     const value = Math.max(1, Math.min(32000, parseInt(e.target.value) || 4096))
//     maxTokensInput.value = value
//     maxTokensNumber.value = value
//     saveSettings({ maxTokens: value })
//   })
// }

// Google Search toggle - will be initialized in DOMContentLoaded
function initGoogleSearchToggle() {
  const toggle = document.getElementById("google-search-toggle")
  if (!toggle) return
  
  toggle.addEventListener("change", async (e) => {
    await saveSettings({ googleSearch: e.target.checked })
  })
}

// Thinking Mode toggle - will be initialized in DOMContentLoaded
function initThinkingModeToggle() {
  const toggle = document.getElementById("thinking-mode-toggle")
  if (!toggle) return
  
  toggle.addEventListener("change", async (e) => {
    await saveSettings({ thinkingMode: e.target.checked })
  })
}

// Chat settings toggles - will be initialized in DOMContentLoaded
function initChatToggles() {
  const includeWorkflowContext = document.getElementById("include-workflow-context-toggle")
  const saveUIPosition = document.getElementById("save-ui-position-toggle")
  const messageFadeDelay = document.getElementById("message-fade-delay-input")
  
  if (includeWorkflowContext) {
    includeWorkflowContext.addEventListener("change", async (e) => {
      await saveSettings({ includeWorkflowContext: e.target.checked })
    })
  }

  if (saveUIPosition) {
    saveUIPosition.addEventListener("change", async (e) => {
      await saveSettings({ saveUIPosition: e.target.checked })
    })
  }

  if (messageFadeDelay) {
    messageFadeDelay.addEventListener("blur", async (e) => {
      await saveSettings({ messageFadeDelay: parseInt(e.target.value) || 0 })
    })
  }
}

// Tools toggles - will be initialized in DOMContentLoaded
function initToolsToggles() {
  const workflowAccess = document.getElementById("workflow-access-toggle")
  const nodeLibraryAccess = document.getElementById("node-library-access-toggle")
  const nodeCreation = document.getElementById("node-creation-toggle")
  const nodeEditing = document.getElementById("node-editing-toggle")
  const nodeRemoval = document.getElementById("node-removal-toggle")
  const affiliateRecommendations = document.getElementById("affiliate-recommendations-toggle")
  
  // Advanced Features
  const nodeCloning = document.getElementById("node-cloning-toggle")
  const connectionManagement = document.getElementById("connection-management-toggle")
  const bulkOperations = document.getElementById("bulk-operations-toggle")
  const autoLayout = document.getElementById("auto-layout-toggle")
  const workflowValidation = document.getElementById("workflow-validation-toggle")
  const workflowExecution = document.getElementById("workflow-execution-toggle")
  
  if (workflowAccess) {
    workflowAccess.addEventListener("change", async (e) => {
      await saveSettings({ workflowAccess: e.target.checked })
    })
  }

  if (nodeLibraryAccess) {
    nodeLibraryAccess.addEventListener("change", async (e) => {
      await saveSettings({ nodeLibraryAccess: e.target.checked })
    })
  }

  if (nodeCreation) {
    nodeCreation.addEventListener("change", async (e) => {
      await saveSettings({ nodeCreation: e.target.checked })
    })
  }

  if (nodeEditing) {
    nodeEditing.addEventListener("change", async (e) => {
      await saveSettings({ nodeEditing: e.target.checked })
    })
  }

  if (nodeRemoval) {
    nodeRemoval.addEventListener("change", async (e) => {
      await saveSettings({ nodeRemoval: e.target.checked })
    })
  }

  if (affiliateRecommendations) {
    affiliateRecommendations.addEventListener("change", async (e) => {
      await saveSettings({ affiliateRecommendations: e.target.checked })
    })
  }

  // Advanced Features Event Listeners (Phase 1)
  if (nodeCloning) {
    nodeCloning.addEventListener("change", async (e) => {
      await saveSettings({ nodeCloning: e.target.checked })
    })
  }

  if (connectionManagement) {
    connectionManagement.addEventListener("change", async (e) => {
      await saveSettings({ connectionManagement: e.target.checked })
    })
  }

  if (bulkOperations) {
    bulkOperations.addEventListener("change", async (e) => {
      await saveSettings({ bulkOperations: e.target.checked })
    })
  }

  if (autoLayout) {
    autoLayout.addEventListener("change", async (e) => {
      await saveSettings({ autoLayout: e.target.checked })
    })
  }

  if (workflowValidation) {
    workflowValidation.addEventListener("change", async (e) => {
      await saveSettings({ workflowValidation: e.target.checked })
    })
  }

  if (workflowExecution) {
    workflowExecution.addEventListener("change", async (e) => {
      await saveSettings({ workflowExecution: e.target.checked })
    })
  }

  // Advanced Features Event Listeners (Phase 2)
  const advancedImportExport = document.getElementById("advanced-import-export-toggle")
  const executionHistory = document.getElementById("execution-history-toggle")
  const workflowTemplates = document.getElementById("workflow-templates-toggle")
  const workflowOptimization = document.getElementById("workflow-optimization-toggle")

  if (advancedImportExport) {
    advancedImportExport.addEventListener("change", async (e) => {
      await saveSettings({ advancedImportExport: e.target.checked })
    })
  }

  if (executionHistory) {
    executionHistory.addEventListener("change", async (e) => {
      await saveSettings({ executionHistory: e.target.checked })
    })
  }

  if (workflowTemplates) {
    workflowTemplates.addEventListener("change", async (e) => {
      await saveSettings({ workflowTemplates: e.target.checked })
    })
  }

  if (workflowOptimization) {
    workflowOptimization.addEventListener("change", async (e) => {
      await saveSettings({ workflowOptimization: e.target.checked })
    })
  }

  // Enterprise Features Event Listeners (Phase 3)
  const workflowVersioning = document.getElementById("workflow-versioning-toggle")
  const advancedDebugging = document.getElementById("advanced-debugging-toggle")
  const testingFramework = document.getElementById("testing-framework-toggle")
  const cicdIntegration = document.getElementById("cicd-integration-toggle")
  const customNodeDevelopment = document.getElementById("custom-node-development-toggle")
  const documentationGeneration = document.getElementById("documentation-generation-toggle")

  if (workflowVersioning) {
    workflowVersioning.addEventListener("change", async (e) => {
      await saveSettings({ workflowVersioning: e.target.checked })
    })
  }

  if (advancedDebugging) {
    advancedDebugging.addEventListener("change", async (e) => {
      await saveSettings({ advancedDebugging: e.target.checked })
    })
  }

  if (testingFramework) {
    testingFramework.addEventListener("change", async (e) => {
      await saveSettings({ testingFramework: e.target.checked })
    })
  }

  if (cicdIntegration) {
    cicdIntegration.addEventListener("change", async (e) => {
      await saveSettings({ cicdIntegration: e.target.checked })
    })
  }

  if (customNodeDevelopment) {
    customNodeDevelopment.addEventListener("change", async (e) => {
      await saveSettings({ customNodeDevelopment: e.target.checked })
    })
  }

  if (documentationGeneration) {
    documentationGeneration.addEventListener("change", async (e) => {
      await saveSettings({ documentationGeneration: e.target.checked })
    })
  }
}

// ============================================================================
// DEBUG MODE TOGGLES & CONTROLS
// ============================================================================

function initDebugModeToggle() {
  const debugModeToggle = document.getElementById("debug-mode-toggle")
  const debugOptions = document.getElementById("debug-options")
  const debugServerUrlInput = document.getElementById("debug-server-url-input")
  const debugAutoConnectToggle = document.getElementById("debug-auto-connect-toggle")
  const debugConsoleLoggingToggle = document.getElementById("debug-console-logging-toggle")
  const debugPiiMaskingToggle = document.getElementById("debug-pii-masking-toggle")
  const openDashboardBtn = document.getElementById("open-dashboard-btn")
  const clearDebugLogsBtn = document.getElementById("clear-debug-logs-btn")
  const testDebugConnectionBtn = document.getElementById("test-debug-connection-btn")
  const debugConnectionStatus = document.getElementById("debug-connection-status")

  // Main debug mode toggle
  if (debugModeToggle) {
    debugModeToggle.addEventListener("change", async (e) => {
      const isEnabled = e.target.checked
      await saveSettings({ 
        debugMode: isEnabled,
        debugEnabled: isEnabled // Alias for compatibility
      })
      
      // Show/hide debug options
      if (debugOptions) {
        debugOptions.style.display = isEnabled ? "block" : "none"
      }

      // Notify content script about debug mode change
      try {
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
        if (tab && tab.id) {
          chrome.tabs.sendMessage(tab.id, { 
            name: "debugModeChanged", 
            enabled: isEnabled 
          }).catch(() => {
            // Ignore if content script not loaded
          })
        }
      } catch (e) {
        // Ignore errors
      }
    })
  }

  // Debug server URL
  if (debugServerUrlInput) {
    debugServerUrlInput.addEventListener("blur", async (e) => {
      await saveSettings({ debugServerUrl: e.target.value.trim() })
    })
  }

  // Auto-connect
  if (debugAutoConnectToggle) {
    debugAutoConnectToggle.addEventListener("change", async (e) => {
      await saveSettings({ debugAutoConnect: e.target.checked })
    })
  }

  // Console logging
  if (debugConsoleLoggingToggle) {
    debugConsoleLoggingToggle.addEventListener("change", async (e) => {
      await saveSettings({ debugConsoleLogging: e.target.checked })
    })
  }

  // PII masking
  if (debugPiiMaskingToggle) {
    debugPiiMaskingToggle.addEventListener("change", async (e) => {
      await saveSettings({ debugPiiMasking: e.target.checked })
    })
  }

  // Open Dashboard button
  if (openDashboardBtn) {
    openDashboardBtn.addEventListener("click", async () => {
      const settings = await getSettings()
      const serverUrl = settings.debugServerUrl || "http://localhost:3333"
      chrome.tabs.create({ url: `${serverUrl}/dashboard` })
    })
  }

  // Clear Debug Logs button
  if (clearDebugLogsBtn) {
    clearDebugLogsBtn.addEventListener("click", async () => {
      if (confirm("Tüm debug logları temizlenecek. Emin misiniz?")) {
        try {
          const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
          if (tab && tab.id) {
            await chrome.tabs.sendMessage(tab.id, { name: "clearDebugLogs" })
            alert("✅ Debug logları temizlendi!")
          }
        } catch (e) {
          alert("❌ Hata: Content script bulunamadı. Sayfayı yenileyin.")
        }
      }
    })
  }

  // Test Connection button
  if (testDebugConnectionBtn) {
    testDebugConnectionBtn.addEventListener("click", async () => {
      const btn = testDebugConnectionBtn
      const originalText = btn.textContent
      btn.textContent = "⏳ Testing..."
      btn.disabled = true

      try {
        const settings = await getSettings()
        const serverUrl = settings.debugServerUrl || "http://localhost:3333"
        
        const response = await fetch(`${serverUrl}/health`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
        })

        if (response.ok) {
          const data = await response.json()
          debugConnectionStatus.innerHTML = `<span style="color: var(--primary);">🟢 Connected</span> <span style="color: #888; font-size: 10px;">- ${data.version || 'v1.0.0'}</span>`
          btn.textContent = "✅ Connected!"
          setTimeout(() => { btn.textContent = originalText; }, 2000)
        } else {
          throw new Error(`Server returned ${response.status}`)
        }
      } catch (error) {
        debugConnectionStatus.innerHTML = `<span style="color: #ff4444;">🔴 Connection Failed</span> <span style="color: #888; font-size: 10px;">- ${error.message}</span>`
        btn.textContent = "❌ Failed"
        setTimeout(() => { btn.textContent = originalText; }, 2000)
      } finally {
        btn.disabled = false
      }
    })
  }
}

// Note: API settings are auto-saved via individual event listeners above

// Note: Chat settings are auto-saved via individual event listeners above

// Activate button - will be initialized in DOMContentLoaded
function initActivateButton() {
  const btn = document.getElementById("activate-btn")
  if (!btn) return
  
  btn.addEventListener("click", async () => {
  
  btn.disabled = true
  btn.textContent = "Activating..."
  
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
    if (!tab || !tab.id) {
      throw new Error("No active tab found")
    }
    
    // First check if it's an n8n page
    let isN8nPage = false
    try {
      const checkResponse = await chrome.tabs.sendMessage(tab.id, { name: "checkN8nPage" })
      isN8nPage = checkResponse?.isN8n || false
    } catch (e) {
      // Content script might not be loaded yet, try to detect from URL
      isN8nPage = tab.url?.includes('/workflow/') || tab.url?.includes('/workflows/') || tab.url?.includes('n8n') || false
    }
    
    if (!isN8nPage) {
      btn.textContent = "Not an n8n page"
      btn.style.background = "#ef4444"
      setTimeout(() => {
        updateActivateButton()
      }, 3000)
      return
    }
    
    // Activate content script
    const response = await chrome.tabs.sendMessage(tab.id, { name: "activateContentScript" })
    
    if (response && response.success) {
      btn.textContent = "Activated!"
      btn.style.background = "var(--primary)"
      setTimeout(() => {
        updateActivateButton()
      }, 2000)
    } else {
      throw new Error(response?.error || "Activation failed")
    }
  } catch (error) {
    console.error("[n8nChat] Activation error:", error)
    
    // Check if error is about content script not being loaded
    if (error.message.includes("Could not establish connection") || error.message.includes("Receiving end does not exist")) {
      // Try to inject content script manually
      try {
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
        if (tab && tab.id) {
          await chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ['content/content.js']
          })
          // Wait a bit for script to initialize
          await new Promise(resolve => setTimeout(resolve, 500))
          // Retry activation
          const response = await chrome.tabs.sendMessage(tab.id, { name: "activateContentScript" })
          if (response && response.success) {
            btn.textContent = "Activated!"
            btn.style.background = "var(--primary)"
            setTimeout(() => {
              updateActivateButton()
            }, 2000)
            return
          }
        }
      } catch (injectError) {
        console.error("[n8nChat] Script injection error:", injectError)
      }
    }
    
    btn.textContent = `Error: ${error.message}`
    btn.style.background = "#ef4444"
    setTimeout(() => {
      updateActivateButton()
    }, 3000)
  } finally {
    btn.disabled = false
  }
  })
}

// Show message
function showMessage(elementId, text, type) {
  const element = document.getElementById(elementId)
  element.textContent = text
  element.className = `message ${type}`
  setTimeout(() => {
    element.textContent = ""
    element.className = "message"
  }, 3000)
}

// Show alert (alias for showMessage)
function showAlert(elementId, text, type) {
  showMessage(elementId, text, type)
}

// Save all API settings
async function saveAllAPISettings() {
  const currentSettings = await getSettings()
  const settings = {}
  
  // Provider and Model
  const provider = document.getElementById("provider-select").value
  settings.provider = provider
  
  const modelSelect = document.getElementById("model-select")
  const modelCustomInput = document.getElementById("model-custom-input")
  const isCustomMode = modelCustomInput.style.display !== "none" && modelCustomInput.value.trim() !== ""
  
  const selectedModels = currentSettings.selectedModels || {}
  
  if (isCustomMode && modelCustomInput.value.trim()) {
    const model = modelCustomInput.value.trim()
    settings.model = model
    settings.isCustomModelMode = true
    settings.selectedModels = { ...selectedModels, [provider]: model }
  } else if (modelSelect.value) {
    const model = modelSelect.value
    settings.model = model
    settings.isCustomModelMode = false
    settings.selectedModels = { ...selectedModels, [provider]: model }
  }
  
  // API Key
  const apiKey = document.getElementById("api-key-input").value.trim()
  const apiKeys = currentSettings.apiKeys || {}
  apiKeys[provider] = apiKey
  settings.apiKeys = apiKeys
  settings.apiKey = apiKey // Keep for backward compatibility
  
  // API URL
  const apiUrl = document.getElementById("api-url-input").value.trim()
  if (apiUrl) {
    settings.apiUrl = apiUrl
  }
  
  // Temperature, Top P, Max Tokens - AUTO-MANAGED (use stored defaults)
  // These values are now automatically calculated based on model and message length
  // We keep the stored defaults from model presets, no longer read from UI
  // settings.temperature = parseFloat(document.getElementById("temperature-input").value) || 0.7
  // settings.topP = parseFloat(document.getElementById("top-p-input").value) || 1.0
  // settings.maxTokens = parseInt(document.getElementById("max-tokens-input").value) || 4096
  
  // Google Search
  settings.googleSearch = document.getElementById("google-search-toggle").checked
  
  // Thinking Mode
  const thinkingModeToggle = document.getElementById("thinking-mode-toggle")
  if (thinkingModeToggle) {
    settings.thinkingMode = thinkingModeToggle.checked
  }
  
  // Custom Instructions
  const customInstructionsInput = document.getElementById("custom-instructions-input")
  if (customInstructionsInput) {
    settings.customInstructions = customInstructionsInput.value.trim()
  }
  
  await saveSettings(settings)
  showAlert("api-message", "Ayarlar kaydedildi ✓", "success")
}

// Save all Chat settings
async function saveAllChatSettings() {
  const settings = {}
  
  // Custom Instructions
  const customInstructionsInput = document.getElementById("custom-instructions-input")
  if (customInstructionsInput) {
    settings.customInstructions = customInstructionsInput.value.trim()
  }
  
  // Include Workflow Context
  settings.includeWorkflowContext = document.getElementById("include-workflow-context-toggle").checked
  
  // Save UI Position
  settings.saveUIPosition = document.getElementById("save-ui-position-toggle").checked
  
  // Message Fade Delay
  settings.messageFadeDelay = parseInt(document.getElementById("message-fade-delay-input").value) || 0
  
  // Tools toggles
  settings.workflowAccess = document.getElementById("workflow-access-toggle").checked
  settings.nodeLibraryAccess = document.getElementById("node-library-access-toggle").checked
  settings.nodeCreation = document.getElementById("node-creation-toggle").checked
  settings.nodeEditing = document.getElementById("node-editing-toggle").checked
  settings.nodeRemoval = document.getElementById("node-removal-toggle").checked
  settings.affiliateRecommendations = document.getElementById("affiliate-recommendations-toggle").checked
  
  // Advanced Features toggles (Phase 1)
  settings.nodeCloning = document.getElementById("node-cloning-toggle").checked
  settings.connectionManagement = document.getElementById("connection-management-toggle").checked
  settings.bulkOperations = document.getElementById("bulk-operations-toggle").checked
  settings.autoLayout = document.getElementById("auto-layout-toggle").checked
  settings.workflowValidation = document.getElementById("workflow-validation-toggle").checked
  settings.workflowExecution = document.getElementById("workflow-execution-toggle").checked
  
  // Advanced Features toggles (Phase 2)
  settings.advancedImportExport = document.getElementById("advanced-import-export-toggle").checked
  settings.executionHistory = document.getElementById("execution-history-toggle").checked
  settings.workflowTemplates = document.getElementById("workflow-templates-toggle").checked
  settings.workflowOptimization = document.getElementById("workflow-optimization-toggle").checked
  
  // Enterprise Features toggles (Phase 3)
  settings.workflowVersioning = document.getElementById("workflow-versioning-toggle").checked
  settings.advancedDebugging = document.getElementById("advanced-debugging-toggle").checked
  settings.testingFramework = document.getElementById("testing-framework-toggle").checked
  settings.cicdIntegration = document.getElementById("cicd-integration-toggle").checked
  settings.customNodeDevelopment = document.getElementById("custom-node-development-toggle").checked
  settings.documentationGeneration = document.getElementById("documentation-generation-toggle").checked
  
  // Debug Mode settings
  settings.debugMode = document.getElementById("debug-mode-toggle").checked
  settings.debugEnabled = settings.debugMode // Alias
  settings.debugServerUrl = document.getElementById("debug-server-url-input").value.trim()
  settings.debugAutoConnect = document.getElementById("debug-auto-connect-toggle").checked
  settings.debugConsoleLogging = document.getElementById("debug-console-logging-toggle").checked
  settings.debugPiiMasking = document.getElementById("debug-pii-masking-toggle").checked
  
  await saveSettings(settings)
  showAlert("chat-message", "Ayarlar kaydedildi ✓", "success")
}

// Save API settings button - will be initialized in DOMContentLoaded
function initSaveApiButton() {
  const btn = document.getElementById("save-api-btn")
  if (!btn) return
  
  btn.addEventListener("click", async () => {
    btn.disabled = true
    btn.textContent = "Kaydediliyor..."
    
    try {
      await saveAllAPISettings()
      btn.textContent = "Kaydedildi ✓"
      setTimeout(() => {
        btn.textContent = chrome.i18n.getMessage("saveSettings") || "Kaydet"
        btn.disabled = false
      }, 2000)
    } catch (error) {
      console.error("[n8nChat] Error saving API settings:", error)
      btn.textContent = "Hata!"
      showAlert("api-message", `Kaydetme hatası: ${error.message}`, "error")
      setTimeout(() => {
        btn.textContent = chrome.i18n.getMessage("saveSettings") || "Kaydet"
        btn.disabled = false
      }, 2000)
    }
  })
}

// Save Chat settings button - will be initialized in DOMContentLoaded
function initSaveChatButton() {
  const btn = document.getElementById("save-chat-btn")
  if (!btn) return
  
  btn.addEventListener("click", async () => {
    btn.disabled = true
    btn.textContent = "Kaydediliyor..."
    
    try {
      await saveAllChatSettings()
      btn.textContent = "Kaydedildi ✓"
      setTimeout(() => {
        btn.textContent = chrome.i18n.getMessage("saveSettings") || "Kaydet"
        btn.disabled = false
      }, 2000)
    } catch (error) {
      console.error("[n8nChat] Error saving Chat settings:", error)
      btn.textContent = "Hata!"
      showAlert("chat-message", `Kaydetme hatası: ${error.message}`, "error")
      setTimeout(() => {
        btn.textContent = chrome.i18n.getMessage("saveSettings") || "Kaydet"
        btn.disabled = false
      }, 2000)
    }
  })
}

// Check if current tab is n8n page
async function checkCurrentTabIsN8n() {
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
    if (!tab || !tab.id) {
      return false
    }
    
    // Check URL first (fast check)
    const url = tab.url || ""
    if (url.includes('/workflow/') || url.includes('/workflows/') || url.includes('n8n')) {
      return true
    }
    
    // Try to check via content script
    try {
      const response = await chrome.tabs.sendMessage(tab.id, { name: "checkN8nPage" })
      return response?.isN8n || false
    } catch (e) {
      // Content script might not be loaded, fallback to URL check
      return false
    }
  } catch (error) {
    console.error("[n8nChat] Error checking n8n page:", error)
    return false
  }
}

// Update activate button based on current tab
async function updateActivateButton() {
  const btn = document.getElementById("activate-btn")
  const isN8n = await checkCurrentTabIsN8n()
  
  if (isN8n) {
    btn.textContent = chrome.i18n.getMessage("activateOnCurrentPage") || "Activate on Current Page"
    btn.style.background = ""
    btn.disabled = false
  } else {
    btn.textContent = chrome.i18n.getMessage("notAnN8nPage") || "Not an n8n page"
    btn.style.background = "#ef4444"
    btn.disabled = true
  }
}

// Initialize all event listeners
function initializeAllEventListeners() {
  // Tab switching
  initTabSwitching()
  
  // Model and provider controls
  initModelToggle()
  initModelCustomInput()
  initProviderSelect()
  initModelSelect()
  
  // API settings
  initApiKeyInput()
  initApiUrlInput()
  initCustomInstructions()
  
  // Sliders - DISABLED (auto-managed now)
  // initTemperatureSlider()
  // initTopPSlider()
  // initMaxTokensSlider()
  
  // Toggles
  initGoogleSearchToggle()
  initThinkingModeToggle()
  initChatToggles()
  initToolsToggles()
  
  // Debug Mode
  initDebugModeToggle()
  
  // Save buttons
  initSaveApiButton()
  initSaveChatButton()
  
  // Activate button
  initActivateButton()
}

// Initialize
document.addEventListener("DOMContentLoaded", async () => {
  // Initialize all event listeners FIRST (before loading settings)
  initializeAllEventListeners()
  
  // Then load settings
  await loadSettings()
  await updateActivateButton()
  
  // Apply i18n translations
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const messageName = el.getAttribute('data-i18n')
    try {
      const translated = chrome.i18n.getMessage(messageName)
      if (translated) {
        if (el.tagName === 'INPUT' && (el.type === 'text' || el.type === 'password')) {
          el.placeholder = translated
        } else {
          el.textContent = translated
        }
      }
    } catch (e) {
      // Ignore i18n errors
    }
  })
})

// Also initialize immediately if DOM is already loaded
if (document.readyState === 'loading') {
  // Wait for DOMContentLoaded
} else {
  // DOM already loaded, initialize now
  initializeAllEventListeners()
  loadSettings()
  updateActivateButton()
}

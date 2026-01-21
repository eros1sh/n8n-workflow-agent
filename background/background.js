/**
 * Background Service Worker
 * Handles API calls and message routing
 */

import { clearAllData } from "../lib/storage.js"
import {
  handleGeminiStream,
  handleOpenAIStream,
  handleAnthropicStream,
  handleDeepSeekStream,
  handleOpenRouterStream,
  handleGroqStream,
  handleCohereStream,
  handleHuggingFaceStream,
  handleLocalLlmStream,
} from "./api-handlers.js"

// Function execution results cache
const functionResults = new Map()

// Active streams map
const activeStreams = new Map()

// Message listener
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // CRITICAL for MV3: Return true to indicate async response
  switch (message.name) {
    case "clearData":
      handleClearData(sendResponse).catch(err => {
        console.error("ClearData error:", err)
        sendResponse({ success: false, error: err.message })
      })
      return true
    case "functionResult":
      handleFunctionResult(message, sendResponse).catch(err => {
        console.error("FunctionResult error:", err)
        sendResponse({ success: false, error: err.message })
      })
      return true
    default:
      return false
  }
})

// Port connection listener
chrome.runtime.onConnect.addListener((port) => {
  port.onMessage.addListener(async (data) => {
    try {
      switch (port.name) {
        case "geminiStream":
          await handleGeminiStream(port, data)
          break
        case "openaiStream":
          await handleOpenAIStream(port, data)
          break
        case "anthropicStream":
          await handleAnthropicStream(port, data)
          break
        case "deepseekStream":
          await handleDeepSeekStream(port, data)
          break
        case "openrouterStream":
          await handleOpenRouterStream(port, data)
          break
        case "groqStream":
          await handleGroqStream(port, data)
          break
        case "cohereStream":
          await handleCohereStream(port, data)
          break
        case "huggingfaceStream":
          await handleHuggingFaceStream(port, data)
          break
        case "localLlmStream":
          await handleLocalLlmStream(port, data)
          break
        default:
          console.warn(`Unknown port: ${port.name}`)
      }
    } catch (error) {
      console.error(`[${port.name}] Error:`, error)
      port.postMessage({
        type: "error",
        error: error.message || "Unknown error",
        requestId: data.body?.requestId || "unknown",
      })
    }
  })

  port.onDisconnect.addListener(() => {
    // Cleanup if needed
  })
})

// Message handlers
async function handleClearData(sendResponse) {
  try {
    await clearAllData()
    sendResponse({ success: true, message: "Storage data cleared successfully" })
  } catch (error) {
    console.error("Error clearing data:", error)
    sendResponse({ success: false, error: error.message || "Unknown error" })
  }
}

async function handleFunctionResult(message, sendResponse) {
  const { requestId, functionName, args, result, error } = message

  if (!requestId) {
    sendResponse({ success: false, error: "requestId is required" })
    return
  }

  try {
    if (error) {
      functionResults.set(requestId, {
        result: { error },
        timestamp: Date.now(),
      })
      sendResponse({ success: false, error })
    } else {
      functionResults.set(requestId, {
        result: result || { success: true },
        timestamp: Date.now(),
      })
      sendResponse({ success: true, result })
    }

    // Clean up old results (older than 5 minutes)
    const fiveMinutesAgo = Date.now() - 5 * 60 * 1000
    for (const [id, data] of functionResults.entries()) {
      if (data.timestamp < fiveMinutesAgo) {
        functionResults.delete(id)
      }
    }
  } catch (e) {
    console.error("[functionResult] Error:", e)
    sendResponse({ success: false, error: e.message || "Unknown error" })
  }
}


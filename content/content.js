/**
 * Content Script
 * Injected into all pages, detects n8n and initializes chat UI
 * 
 * NOTE: This file cannot use ES6 imports because content scripts don't support modules.
 * All dependencies are inlined here.
 */

// Logger utility
const Logger = {
  log: (message, ...args) => {
    console.log(`%c[n8nChat] %c${message}`, 'color: #00ff47; font-weight: bold;', 'color: inherit;', ...args);
  },
  info: (message, ...args) => {
    console.log(`%c[n8nChat] ℹ️ %c${message}`, 'color: #00ff47; font-weight: bold;', 'color: #88ccff;', ...args);
  },
  success: (message, ...args) => {
    console.log(`%c[n8nChat] ✅ %c${message}`, 'color: #00ff47; font-weight: bold;', 'color: #00ff47;', ...args);
  },
  warn: (message, ...args) => {
    console.warn(`%c[n8nChat] ⚠️ %c${message}`, 'color: #00ff47; font-weight: bold;', 'color: #ffcc00;', ...args);
  },
  error: (message, ...args) => {
    console.error(`%c[n8nChat] ❌ %c${message}`, 'color: #00ff47; font-weight: bold;', 'color: #ff4444;', ...args);
  }
};

// ============================================================================
// DEBUG API - Enhanced Logging & Tracking System
// ============================================================================

class DebugAPI {
  constructor() {
    this.sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    this.operationCounter = 0;
    this.history = [];
    this.activeOperations = new Map();
    this.stats = {
      totalRequests: 0,
      successfulRequests: 0,
      failedRequests: 0,
      totalFunctionCalls: 0,
      averageResponseTime: 0
    };
    
    // Real-time server configuration
    this.serverUrl = 'http://localhost:3333';
    this.serverEnabled = true;
    this.debugEnabled = false; // Will be set from settings
    this.consoleLoggingEnabled = true;
    this.piiMaskingEnabled = true;
    
    // Don't print banner immediately - wait for settings
    this.initialized = false;
  }
  
  async initialize(settings = {}) {
    if (this.initialized) return;
    
    this.debugEnabled = settings.debugMode || settings.debugEnabled || false;
    this.serverUrl = settings.debugServerUrl || 'http://localhost:3333';
    this.consoleLoggingEnabled = settings.debugConsoleLogging !== false;
    this.piiMaskingEnabled = settings.debugPiiMasking !== false;
    
    if (this.debugEnabled) {
      if (this.consoleLoggingEnabled) {
        this.printBanner();
      }
      
      if (settings.debugAutoConnect !== false) {
        await this.checkServerConnection();
      }
    }
    
    this.initialized = true;
  }
  
  enable() {
    this.debugEnabled = true;
    if (this.consoleLoggingEnabled && !this.initialized) {
      this.printBanner();
    }
    this.checkServerConnection();
  }
  
  disable() {
    this.debugEnabled = false;
    this.serverEnabled = false;
  }
  
  async checkServerConnection() {
    try {
      const response = await fetch(`${this.serverUrl}/health`, { 
        method: 'GET',
        signal: AbortSignal.timeout(2000) 
      });
      
      if (response.ok) {
        console.log('%c🟢 Debug Server Connected!', 'color: #00ff47; font-weight: bold; font-size: 14px;');
        console.log(`%c   Server: ${this.serverUrl}`, 'color: #00d4ff;');
        console.log(`%c   Dashboard: ${this.serverUrl}/dashboard`, 'color: #00d4ff;');
        this.serverEnabled = true;
      } else {
        throw new Error('Server not responding');
      }
    } catch (error) {
      console.log('%c🟡 Debug Server Not Running', 'color: #ffaa00; font-weight: bold;');
      console.log('%c   Console-only mode active', 'color: #999999;');
      console.log(`%c   To enable server: cd debug-server && npm install && npm start`, 'color: #666666; font-style: italic;');
      this.serverEnabled = false;
    }
  }
  
  async sendToServer(logEntry) {
    if (!this.serverEnabled) return;
    
    try {
      await fetch(`${this.serverUrl}/api/log`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...logEntry,
          sessionId: this.sessionId,
          timestamp: Date.now()
        }),
        signal: AbortSignal.timeout(5000)
      });
    } catch (error) {
      // Silently fail - don't spam console if server is down
      if (this.serverEnabled) {
        console.log('%c⚠️  Debug server disconnected', 'color: #ffaa00; font-size: 11px;');
        this.serverEnabled = false;
      }
    }
  }

  printBanner() {
    const banner = `
╔═══════════════════════════════════════════════════════════════════════════╗
║                   🐛 n8n CHAT DEBUG API v1.0                             ║
║                   Advanced Logging & Monitoring                          ║
╚═══════════════════════════════════════════════════════════════════════════╝`;
    console.log(`%c${banner}`, 'color: #00ff47; font-weight: bold; font-family: monospace;');
    console.log('%cSession ID: %c' + this.sessionId, 'color: #999999;', 'color: #00d4ff; font-weight: bold;');
    console.log('%cCommands Available:', 'color: #999999;');
    console.log('%c  • window.n8nDebugAPI.printSummary()    %c- Show session statistics', 'color: #88ccff;', 'color: #666666;');
    console.log('%c  • window.n8nDebugAPI.printHistory()    %c- Show operation history', 'color: #88ccff;', 'color: #666666;');
    console.log('%c  • window.n8nDebugAPI.export()          %c- Export debug data', 'color: #88ccff;', 'color: #666666;');
    console.log('%c  • window.n8nDebugAPI.clear()           %c- Clear all logs\n', 'color: #88ccff;', 'color: #666666;');
  }

  logUserInput(prompt, metadata = {}) {
    if (!this.debugEnabled) return null;
    
    const operationId = `op_${++this.operationCounter}`;
    const timestamp = new Date().toISOString();

    this.activeOperations.set(operationId, { startTime: Date.now(), prompt });
    this.stats.totalRequests++;

    const logEntry = {
      id: operationId,
      type: 'USER_INPUT',
      timestamp,
      prompt,
      metadata
    };

    if (this.consoleLoggingEnabled) {
      console.log('\n' + '%c' + '═'.repeat(80), 'color: #00d4ff;');
      console.log(
        '%c🎯 USER INPUT #%c' + this.operationCounter + ' %c[' + operationId + ']',
        'color: #00d4ff; font-weight: bold; font-size: 13px;',
        'color: #00ff47; font-weight: bold;',
        'color: #999999;'
      );
      console.log('%cTimestamp: %c' + timestamp, 'color: #999999;', 'color: #666666;');
      console.log('%c' + '─'.repeat(80), 'color: #00d4ff;');
      console.log('%cPrompt:', 'color: #00d4ff; font-weight: bold;');
      console.log('%c' + prompt, 'color: #ffffff; background: #1a1a1a; padding: 8px; border-left: 3px solid #00d4ff;');
      
      if (Object.keys(metadata).length > 0) {
        console.log('%cMetadata:', 'color: #88ccff;');
        console.table(metadata);
      }
    }

    // Send to server
    this.sendToServer(logEntry);

    return operationId;
  }

  logFunctionCall(operationId, functionName, args) {
    if (!this.debugEnabled) return;
    
    const timestamp = new Date().toISOString();
    this.stats.totalFunctionCalls++;

    const logEntry = {
      id: operationId,
      type: 'FUNCTION_CALL',
      timestamp,
      functionName,
      arguments: args
    };

    if (this.consoleLoggingEnabled) {
      console.log('%c⚙️  FUNCTION CALL: %c' + functionName, 'color: #ff9500; font-weight: bold;', 'color: #ffffff; font-weight: bold;');
      console.log('%cOperation ID: %c' + operationId, 'color: #999999;', 'color: #666666;');
      console.log('%cTimestamp: %c' + timestamp, 'color: #999999;', 'color: #666666;');
      console.log('%c' + '─'.repeat(80), 'color: #ff9500;');
      console.group('%cArguments:', 'color: #ff9500; font-weight: bold;');
      console.log(args);
      console.groupEnd();
    }

    this.history.push(logEntry);
    
    // Send to server
    this.sendToServer(logEntry);
  }

  logResponse(operationId, response, status = 'success') {
    if (!this.debugEnabled) return;
    
    const operation = this.activeOperations.get(operationId);
    const duration = operation ? Date.now() - operation.startTime : 0;
    const timestamp = new Date().toISOString();

    if (status === 'success') {
      this.stats.successfulRequests++;
    } else if (status === 'error') {
      this.stats.failedRequests++;
    }

    // Update average response time
    const totalCompleted = this.stats.successfulRequests + this.stats.failedRequests;
    this.stats.averageResponseTime = 
      ((this.stats.averageResponseTime * (totalCompleted - 1)) + duration) / totalCompleted;

    const logEntry = {
      id: operationId,
      type: 'RESPONSE',
      timestamp,
      status,
      response: typeof response === 'string' && response.length > 1000 ? response.substring(0, 1000) + '...' : response,
      duration
    };

    const icon = status === 'success' ? '✅' : status === 'error' ? '❌' : '⚠️';
    const color = status === 'success' ? '#00ff47' : status === 'error' ? '#ff4444' : '#ffcc00';

    console.log(`%c${icon} RESPONSE [%c${status.toUpperCase()}%c]`, 
      `color: ${color}; font-weight: bold; font-size: 13px;`,
      `color: ${color}; font-weight: bold; text-decoration: underline;`,
      `color: ${color}; font-weight: bold;`
    );
    console.log('%cOperation ID: %c' + operationId, 'color: #999999;', 'color: #666666;');
    console.log('%cDuration: %c' + duration + 'ms', 'color: #999999;', 'color: #00ff47; font-weight: bold;');
    console.log('%cTimestamp: %c' + timestamp, 'color: #999999;', 'color: #666666;');
    console.log('%c' + '─'.repeat(80), `color: ${color};`);
    console.group(`%cResponse Data:`, `color: ${color}; font-weight: bold;`);
    
    if (typeof response === 'string' && response.length > 500) {
      console.log('%c' + response.substring(0, 500) + '...', 'color: #ffffff;');
      console.log('%c(truncated - full response available in history)', 'color: #999999; font-style: italic;');
    } else {
      console.log(response);
    }
    console.groupEnd();

    // Timeline
    const bars = Math.min(Math.round((duration / 100)), 50);
    const barString = '█'.repeat(bars);
    console.log(
      '%cOperation Time: %c' + barString + ' %c' + duration + 'ms',
      'color: #999999;',
      'color: #00ff47;',
      'color: #999999;'
    );

    console.log('%c' + '═'.repeat(80) + '\n', `color: ${color};`);

    this.activeOperations.delete(operationId);
    this.history.push(logEntry);
    
    // Send to server
    this.sendToServer(logEntry);
  }

  logError(operationId, error, context = {}) {
    if (!this.debugEnabled) return;
    
    const operation = this.activeOperations.get(operationId);
    const duration = operation ? Date.now() - operation.startTime : 0;
    const timestamp = new Date().toISOString();
    this.stats.failedRequests++;

    const logEntry = {
      id: operationId,
      type: 'ERROR',
      timestamp,
      error: {
        name: error.name || 'Error',
        message: error.message || String(error),
        stack: error.stack
      },
      context,
      duration
    };

    if (this.consoleLoggingEnabled) {
      console.log('\n' + '%c' + '═'.repeat(80), 'color: #ff4444;');
      console.log(
        '%c❌ ERROR IN OPERATION #%c' + operationId,
        'color: #ff4444; font-weight: bold; font-size: 14px;',
        'color: #ffffff; font-weight: bold;'
      );
      console.log('%cError Name: %c' + (error.name || 'Error'), 'color: #999999;', 'color: #ff4444; font-weight: bold;');
      console.log('%cError Message: %c' + (error.message || String(error)), 'color: #999999;', 'color: #ff4444;');
      console.log('%cDuration: %c' + duration + 'ms', 'color: #999999;', 'color: #666666;');
      console.log('%cTimestamp: %c' + timestamp, 'color: #999999;', 'color: #666666;');
      console.log('%c' + '─'.repeat(80), 'color: #ff4444;');

      if (Object.keys(context).length > 0) {
        console.group('%cError Context:', 'color: #ff4444; font-weight: bold;');
        console.table(context);
        console.groupEnd();
      }

      if (error.stack) {
        console.group('%cStack Trace:', 'color: #ff4444;');
        console.log('%c' + error.stack, 'color: #ff8888; font-family: monospace; font-size: 11px;');
        console.groupEnd();
      }

      console.log('%c' + '═'.repeat(80) + '\n', 'color: #ff4444;');
    }

    this.activeOperations.delete(operationId);
    this.history.push(logEntry);
    
    // Send to server
    this.sendToServer(logEntry);
  }

  printSummary() {
    if (!this.debugEnabled || !this.consoleLoggingEnabled) return;
    
    const uptime = Math.round((Date.now() - parseInt(this.sessionId.split('_')[1])) / 1000);
    const successRate = this.stats.totalRequests > 0
      ? Math.round((this.stats.successfulRequests / this.stats.totalRequests) * 100)
      : 0;

    console.log('\n' + '%c' + '═'.repeat(80), 'color: #00d4ff;');
    console.log('%c📊 DEBUG SESSION SUMMARY', 'color: #00d4ff; font-weight: bold; font-size: 14px;');
    console.log('%c' + '═'.repeat(80), 'color: #00d4ff;');
    console.log('%cSession ID:           %c' + this.sessionId, 'color: #999999;', 'color: #00d4ff;');
    console.log('%cUptime:               %c' + uptime + 's', 'color: #999999;', 'color: #00ff47;');
    console.log('%cTotal Requests:       %c' + this.stats.totalRequests, 'color: #999999;', 'color: #ffffff; font-weight: bold;');
    console.log('%cSuccessful:           %c' + this.stats.successfulRequests, 'color: #999999;', 'color: #00ff47;');
    console.log('%cFailed:               %c' + this.stats.failedRequests, 'color: #999999;', 'color: #ff4444;');
    console.log('%cSuccess Rate:         %c' + successRate + '%', 'color: #999999;', 'color: #00ff47; font-weight: bold;');
    console.log('%cTotal Function Calls: %c' + this.stats.totalFunctionCalls, 'color: #999999;', 'color: #ff9500;');
    console.log('%cAvg Response Time:    %c' + Math.round(this.stats.averageResponseTime) + 'ms', 'color: #999999;', 'color: #00ff47;');
    console.log('%c' + '═'.repeat(80) + '\n', 'color: #00d4ff;');
  }

  printHistory(limit = 20) {
    const history = this.history.slice(-limit);
    
    console.log('\n' + '%c' + '═'.repeat(80), 'color: #88ccff;');
    console.log('%c📜 DEBUG HISTORY (Last ' + limit + ' entries)', 'color: #88ccff; font-weight: bold; font-size: 14px;');
    console.log('%c' + '═'.repeat(80), 'color: #88ccff;');
    
    if (history.length === 0) {
      console.log('%cNo entries found', 'color: #999999; font-style: italic;');
    } else {
      history.forEach((entry, index) => {
        const icon = entry.type === 'USER_INPUT' ? '🎯' 
          : entry.type === 'FUNCTION_CALL' ? '⚙️' 
          : entry.type === 'RESPONSE' ? '✅' 
          : entry.type === 'ERROR' ? '❌' 
          : '📝';
        
        const time = new Date(entry.timestamp).toLocaleTimeString();
        console.log(
          `%c${index + 1}. ${icon} %c${entry.type.padEnd(15)} %c[${entry.id}] %c${time}`,
          'color: #999999;',
          'color: #00d4ff; font-weight: bold;',
          'color: #666666;',
          'color: #999999; font-style: italic;'
        );
      });
    }
    
    console.log('%c' + '═'.repeat(80) + '\n', 'color: #88ccff;');
  }

  export() {
    return {
      sessionId: this.sessionId,
      stats: this.stats,
      history: this.history,
      exportedAt: new Date().toISOString()
    };
  }

  clear() {
    this.history = [];
    this.activeOperations.clear();
    this.stats = {
      totalRequests: 0,
      successfulRequests: 0,
      failedRequests: 0,
      totalFunctionCalls: 0,
      averageResponseTime: 0
    };
    console.clear();
    console.log('%c✨ Debug API cleared - starting fresh!', 'color: #00ff47; font-weight: bold; font-size: 14px;');
    this.printBanner();
  }
}

// Initialize Debug API
const debugAPI = new DebugAPI();
window.n8nDebugAPI = debugAPI;

// Prevent duplicate injection (CRITICAL: Must be first thing executed)
(function() {
  if (window.__N8N_CHAT_INITIALIZED__) {
    Logger.warn('Already initialized, skipping duplicate injection');
    throw new Error('DUPLICATE_INJECTION_PREVENTED');
  }
  window.__N8N_CHAT_INITIALIZED__ = true;
  Logger.log('Initializing n8nChat Content Script...');
})();

// Check if extension context is valid before proceeding
if (typeof chrome === 'undefined' || !chrome.runtime || !chrome.runtime.id) {
  Logger.error('Extension context invalidated, cannot initialize');
  throw new Error('EXTENSION_CONTEXT_INVALID');
}

// ============================================================================
// Storage Utilities (from lib/storage.js)
// ============================================================================

const DEFAULT_SETTINGS = {
  provider: "google",
  model: "gemini-2.5-flash",
  apiKey: "",
  apiKeys: {},
  apiUrl: "",
  temperature: 0.7,
  maxTokens: 4096,
  topP: 1.0,
  reasoningLevel: "medium",
  customInstructions: "",
  includeWorkflowContext: true,
  nodeCreation: true,
  nodeEditing: true,
  nodeRemoval: true,
  nodeLibraryAccess: true,
  workflowAccess: true,
  googleSearch: false,
  messageFadeDelay: 0,
  saveUIPosition: true,
  affiliateRecommendations: false,
  thinkingMode: false,
  // Advanced Features (Phase 1)
  nodeCloning: true,
  bulkOperations: true,
  autoLayout: true,
  workflowValidation: true,
  workflowExecution: true,
  connectionManagement: true,
  // Advanced Features (Phase 2)
  advancedImportExport: true,
  executionHistory: true,
  workflowTemplates: true,
  workflowOptimization: true,
  // Enterprise Features (Phase 3)
  workflowVersioning: true,
  advancedDebugging: true,
  testingFramework: true,
  cicdIntegration: true,
  customNodeDevelopment: true,
  documentationGeneration: true,
  // Debug Mode Settings
  debugMode: false,
  debugEnabled: false,
  debugServerUrl: "http://localhost:3333",
  debugAutoConnect: true,
  debugConsoleLogging: true,
  debugPiiMasking: true,
}

async function getSettings() {
  try {
    // Check if chrome.storage is available (extension context valid)
    if (typeof chrome === 'undefined' || !chrome.storage || !chrome.storage.local) {
      console.error('[n8nChat] Chrome storage API not available (extension context invalidated)')
      return DEFAULT_SETTINGS
    }
    
    const result = await chrome.storage.local.get("settings")
    const settings = { ...DEFAULT_SETTINGS, ...result.settings }
    
    // Migrate old apiKey to apiKeys object if needed
    if (settings.apiKey && (!settings.apiKeys || Object.keys(settings.apiKeys).length === 0)) {
      settings.apiKeys = {
        [settings.provider || "google"]: settings.apiKey
      }
    }
    
    // Migrate deprecated providers to Google (function calling support)
    const deprecatedProviders = ["cohere", "local"]
    if (deprecatedProviders.includes(settings.provider)) {
      console.log(`[n8nChat] Migrating deprecated provider "${settings.provider}" to "google"`)
      settings.provider = "google"
      settings.model = "gemini-2.5-flash"
    }
    
    return settings
  } catch (e) {
    console.error("[n8nChat] Error getting settings:", e)
    // If extension context invalidated, return defaults
    if (e.message && e.message.includes('Extension context invalidated')) {
      console.error('[n8nChat] Extension context lost, returning default settings')
    }
    return DEFAULT_SETTINGS
  }
}

// ============================================================================
// Injected Script Management
// ============================================================================

let isInjectedScriptReady = false;

function injectScript() {
  // Prevent duplicate injection
  if (document.getElementById('n8n-chat-injected-script')) {
    Logger.warn('Injected script already present, skipping injection');
    return;
  }
  
  const scriptPath = 'content/injected.js';
  const scriptUrl = chrome.runtime.getURL(scriptPath);
  
  Logger.info(`Injecting script: ${scriptUrl}`);
  
  const script = document.createElement('script');
  script.id = 'n8n-chat-injected-script';
  script.src = scriptUrl;
  script.type = 'text/javascript';
  
  script.onload = function() {
    Logger.success('Script tag loaded and executed');
    // Don't remove immediately, wait a bit to ensure execution
    setTimeout(() => {
      this.remove();
      Logger.log('Script tag cleaned up');
    }, 100);
  };
  
  script.onerror = function(e) {
    Logger.error('Failed to load injected script:', e);
  };
  
  (document.head || document.documentElement).appendChild(script);
}

// Listen for ready signal from injected script
window.addEventListener("message", (event) => {
  if (event.source !== window) return;
  if (event.data.type === "n8nChatInjectedReady") {
    Logger.success("Injected script reported ready and listening for commands");
    isInjectedScriptReady = true;
  }
});

// Call injected function and wait for result
function callInjected(functionName, args, timeoutMs = 10000) {
  return new Promise((resolve, reject) => {
    const requestId = `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    Logger.log(`Calling injected function: %c${functionName}`, 'color: #ff9900', args);

    let isResolved = false;

    const handleResponse = (event) => {
      if (event.source !== window) return;
      if (event.data.type === "n8nChatFunctionResult" && event.data.requestId === requestId) {
        if (isResolved) return; // Already handled
        isResolved = true;
        
        window.removeEventListener("message", handleResponse);
        clearTimeout(timeoutHandle);
        
        if (event.data.result.success) {
          Logger.success(`Function ${functionName} completed successfully`, event.data.result);
          resolve(event.data.result);
        } else {
          Logger.error(`Function ${functionName} failed`, event.data.result.error);
          reject(new Error(event.data.result.error || "Unknown error"));
        }
      }
    };
    
    window.addEventListener("message", handleResponse);
    
    // Timeout
    const timeoutHandle = setTimeout(() => {
      if (isResolved) return; // Already handled
      isResolved = true;
      
      window.removeEventListener("message", handleResponse);
      Logger.error(`Timeout waiting for function ${functionName} (${timeoutMs}ms)`);
      reject(new Error(`Timeout waiting for injected script response (${functionName})`));
    }, timeoutMs);
    
    // Send message
    try {
      window.postMessage({
        type: "n8nChatExecuteFunction",
        functionName,
        args: args || {},
        requestId
      }, "*");
    } catch (e) {
      if (isResolved) return;
      isResolved = true;
      
      window.removeEventListener("message", handleResponse);
      clearTimeout(timeoutHandle);
      Logger.error(`Failed to send message for ${functionName}:`, e);
      reject(e);
    }
  });
}


// Wait for injected script to be ready
async function waitForInjectedScript(timeout = 25000) {
  if (isInjectedScriptReady) {
    Logger.success("Injected script is already ready!");
    return true;
  }
  
  Logger.info("Waiting for injected script to be ready...");
  
  const startTime = Date.now();
  const checkInterval = 1000; // Check every 1 second
  let attemptCount = 0;
  
  while (Date.now() - startTime < timeout) {
    if (isInjectedScriptReady) {
      Logger.success("Injected script is ready!");
      return true;
    }
    
    // Try to ping it (with longer timeout as we progress)
    attemptCount++;
    const pingTimeout = Math.min(2000 + (attemptCount * 500), 5000);
    
    try {
      const result = await callInjected('check_ready', {}, pingTimeout);
      if (result && result.success) {
        isInjectedScriptReady = true;
        Logger.success("Injected script confirmed ready via check_ready");
        return true;
      }
    } catch (e) {
      // Still waiting, ignore error
      const elapsed = Math.round((Date.now() - startTime) / 1000);
      if (elapsed % 3 === 0 || attemptCount === 1) { // Log first attempt and every 3 seconds
        Logger.log(`Waiting for injected script... (${elapsed}s elapsed, attempt ${attemptCount})`);
      }
    }
    
    await new Promise(resolve => setTimeout(resolve, checkInterval));
  }
  
  Logger.error(`Timeout waiting for injected script after ${timeout}ms`);
  return false;
}

// ============================================================================
// Function Definitions (from content/functions/index.js)
// ============================================================================

const createNodeFunction = {
  name: "create_node",
  description: "Create a new node in the n8n workflow",
  parameters: {
    type: "object",
    properties: {
      name: { type: "string", description: "Name of the node (must be unique)" },
      type: { type: "string", description: "Type of the node (e.g., 'n8n-nodes-base.httpRequest')" },
      position: { type: "object", description: "Position of the node on canvas [x, y]", properties: { x: { type: "number" }, y: { type: "number" } } },
      parameters: { type: "object", description: "Node parameters" },
      notes: { type: "string", description: "Optional notes for the node" },
    },
    required: ["name", "type"],
  },
}

const updateNodeFunction = {
  name: "update_node",
  description: "Update an existing node in the n8n workflow",
  parameters: {
    type: "object",
    properties: {
      name: { type: "string", description: "Name of the node to update" },
      parameters: { type: "object", description: "Parameters to update" },
      position: { type: "object", description: "New position [x, y]", properties: { x: { type: "number" }, y: { type: "number" } } },
      notes: { type: "string", description: "Notes to update" },
      disabled: { type: "boolean", description: "Whether to disable the node" },
    },
    required: ["name"],
  },
}

const removeNodeFunction = {
  name: "remove_node",
  description: "Remove a node from the n8n workflow",
  parameters: {
    type: "object",
    properties: {
      name: { type: "string", description: "Name of the node to remove" },
    },
    required: ["name"],
  },
}

const addConnectionFunction = {
  name: "add_connection",
  description: "Add a connection between two nodes in the workflow",
  parameters: {
    type: "object",
    properties: {
      sourceNode: { type: "string", description: "Name of the source node" },
      targetNode: { type: "string", description: "Name of the target node" },
      sourceType: { type: "string", description: "Output type of source node (default: 'main')", default: "main" },
      targetType: { type: "string", description: "Input type of target node (default: 'main')", default: "main" },
      sourceIndex: { type: "number", description: "Output index (default: 0)", default: 0 },
      targetIndex: { type: "number", description: "Input index (default: 0)", default: 0 },
    },
    required: ["sourceNode", "targetNode"],
  },
}

const removeConnectionFunction = {
  name: "remove_connection",
  description: "Remove a connection between two nodes in the workflow",
  parameters: {
    type: "object",
    properties: {
      sourceNode: { type: "string", description: "Name of the source node" },
      targetNode: { type: "string", description: "Name of the target node" },
      sourceIndex: { type: "number", description: "Source output index (default: 0)", default: 0 },
      targetIndex: { type: "number", description: "Target input index (default: 0)", default: 0 },
    },
    required: ["sourceNode", "targetNode"],
  },
}

// ==========================================================================
// QUICK WIN FUNCTION DEFINITIONS
// ==========================================================================

const tidyUpWorkflowFunction = {
  name: "tidy_up_workflow",
  description: "Automatically organize and layout all nodes in the workflow for optimal readability. Auto-aligns nodes, fixes overlaps, and fits view.",
  parameters: {
    type: "object",
    properties: {},
    required: [],
  },
}

const duplicateNodesFunction = {
  name: "duplicate_nodes",
  description: "Duplicate/clone multiple nodes at once. Creates exact copies with all parameters and settings.",
  parameters: {
    type: "object",
    properties: {
      ids: { 
        type: "array", 
        items: { type: "string" },
        description: "Array of node names or IDs to duplicate (max 20 nodes)" 
      },
    },
    required: ["ids"],
  },
}

const validateConnectionFunction = {
  name: "validate_connection",
  description: "Check if a connection between two nodes is valid before creating it. Prevents invalid connections.",
  parameters: {
    type: "object",
    properties: {
      sourceNode: { type: "string", description: "Name or ID of the source node" },
      targetNode: { type: "string", description: "Name or ID of the target node" },
      connectionType: { type: "string", description: "Connection type (default: 'main')" },
    },
    required: ["sourceNode", "targetNode"],
  },
}

const getWorkflowInfoFunction = {
  name: "get_workflow_info",
  description: "Get information about the current workflow",
  parameters: {
    type: "object",
    properties: {
      includeNodes: { type: "boolean", description: "Whether to include node details", default: true },
      includeConnections: { type: "boolean", description: "Whether to include connection details", default: true },
    },
    required: [],
  },
}

const getNodeInfoFunction = {
  name: "get_node_info",
  description: "Get detailed information about a specific node",
  parameters: {
    type: "object",
    properties: {
      name: { type: "string", description: "Name of the node" },
    },
    required: ["name"],
  },
}

// ==========================================================================
// TIER 1 FUNCTION DEFINITIONS (Advanced Features)
// ==========================================================================

const bulkCreateNodesFunction = {
  name: "bulk_create_nodes",
  description: "Create multiple nodes at once. Much faster than creating nodes one-by-one. Supports auto-layout.",
  parameters: {
    type: "object",
    properties: {
      nodes: {
        type: "array",
        items: {
          type: "object",
          properties: {
            type: { type: "string", description: "Node type (e.g., 'n8n-nodes-base.httpRequest')" },
            name: { type: "string", description: "Node name (optional, auto-generated if not provided)" },
            parameters: { type: "object", description: "Node configuration parameters" },
            position: { 
              type: "array", 
              items: { type: "number" },
              description: "Position [x, y] (optional)"
            },
          },
          required: ["type"],
        },
        description: "Array of node configurations (max 50 nodes)"
      },
      autoLayout: { type: "boolean", description: "Auto-arrange nodes after creation (default: false)" },
    },
    required: ["nodes"],
  },
}

const bulkDeleteNodesFunction = {
  name: "bulk_delete_nodes",
  description: "Delete multiple nodes at once. Much faster than deleting one-by-one.",
  parameters: {
    type: "object",
    properties: {
      ids: {
        type: "array",
        items: { type: "string" },
        description: "Array of node names or IDs to delete (max 50 nodes)"
      },
    },
    required: ["ids"],
  },
}

const autoPositionNodeFunction = {
  name: "auto_position_node",
  description: "Automatically calculate and set optimal position for a node to avoid overlaps.",
  parameters: {
    type: "object",
    properties: {
      nodeId: { type: "string", description: "Node name or ID to position" },
    },
    required: ["nodeId"],
  },
}

const getExecutionResultsFunction = {
  name: "get_execution_results",
  description: "Get execution history and results for a specific node. Useful for debugging and analysis.",
  parameters: {
    type: "object",
    properties: {
      nodeName: { type: "string", description: "Name of the node to get results for" },
    },
    required: ["nodeName"],
  },
}

const renameNodeSafeFunction = {
  name: "rename_node_safe",
  description: "Safely rename a node with conflict checking. Prevents duplicate names.",
  parameters: {
    type: "object",
    properties: {
      currentName: { type: "string", description: "Current node name" },
      newName: { type: "string", description: "New node name" },
    },
    required: ["currentName", "newName"],
  },
}

const suggestConnectionsFunction = {
  name: "suggest_connections",
  description: "Find all nodes that can be connected to a given node. Helps discover compatible connections.",
  parameters: {
    type: "object",
    properties: {
      nodeId: { type: "string", description: "Node name or ID to find connections for" },
    },
    required: ["nodeId"],
  },
}

const createStickyNoteFunction = {
  name: "create_sticky_note",
  description: "Create a sticky note for documentation or comments in the workflow.",
  parameters: {
    type: "object",
    properties: {
      content: { type: "string", description: "Note content (markdown supported)" },
      name: { type: "string", description: "Note name (optional)" },
      position: { 
        type: "array", 
        items: { type: "number" },
        description: "Position [x, y] (optional)"
      },
      width: { type: "number", description: "Width in pixels (default: 200)" },
      height: { type: "number", description: "Height in pixels (default: 200)" },
      color: { type: "number", description: "Color index 1-7 (default: 5 = yellow)" },
    },
    required: ["content"],
  },
}

const fitViewToWorkflowFunction = {
  name: "fit_view_to_workflow",
  description: "Auto-zoom and center the canvas to show all nodes in the workflow.",
  parameters: {
    type: "object",
    properties: {},
    required: [],
  },
}

const validateWorkflowFunction = {
  name: "validate_workflow",
  description: "Validate the entire workflow for errors, missing configurations, and issues.",
  parameters: {
    type: "object",
    properties: {},
    required: [],
  },
}

const clearExecutionHistoryFunction = {
  name: "clear_execution_history",
  description: "Clear execution history and results for a specific node. Useful for cleanup.",
  parameters: {
    type: "object",
    properties: {
      nodeName: { type: "string", description: "Name of the node to clear history for" },
    },
    required: ["nodeName"],
  },
}

// ==========================================================================
// TIER 2 FUNCTION DEFINITIONS (Advanced Features)
// ==========================================================================

const exportWorkflowFunction = {
  name: "export_workflow",
  description: "Export the current workflow as JSON. Supports full or minimal format.",
  parameters: {
    type: "object",
    properties: {
      format: { 
        type: "string", 
        enum: ["full", "minimal"],
        description: "Export format: 'full' (all data) or 'minimal' (nodes + connections only)" 
      },
    },
    required: [],
  },
}

const importWorkflowFunction = {
  name: "import_workflow",
  description: "Import a workflow from JSON data. Can clear existing workflow or merge.",
  parameters: {
    type: "object",
    properties: {
      workflowData: { 
        type: "object", 
        description: "Workflow JSON data (must have 'nodes' and 'connections')" 
      },
      clearExisting: { 
        type: "boolean", 
        description: "Clear existing workflow before import (default: true)" 
      },
      importTags: { 
        type: "boolean", 
        description: "Import workflow tags (default: true)" 
      },
    },
    required: ["workflowData"],
  },
}

const analyzePerformanceFunction = {
  name: "analyze_performance",
  description: "Analyze execution performance of all nodes. Shows slowest nodes, avg/max times, error rates.",
  parameters: {
    type: "object",
    properties: {},
    required: [],
  },
}

const replaceNodeKeepConnectionsFunction = {
  name: "replace_node_keep_connections",
  description: "Replace a node with a different type while preserving all connections. Useful for swapping node types.",
  parameters: {
    type: "object",
    properties: {
      oldNodeId: { type: "string", description: "Name or ID of node to replace" },
      newNodeType: { type: "string", description: "Type of new node (e.g., 'n8n-nodes-base.httpRequest')" },
      parameters: { type: "object", description: "Parameters for new node (optional)" },
    },
    required: ["oldNodeId", "newNodeType"],
  },
}

const connectAdjacentNodesAutoFunction = {
  name: "connect_adjacent_nodes_auto",
  description: "Automatically connect two nodes using smart port matching.",
  parameters: {
    type: "object",
    properties: {
      sourceNodeId: { type: "string", description: "Source node name or ID" },
      targetNodeId: { type: "string", description: "Target node name or ID" },
      connectionType: { type: "string", description: "Connection type (optional, auto-detected)" },
    },
    required: ["sourceNodeId", "targetNodeId"],
  },
}

// ==========================================================================
// TIER 3 FUNCTION DEFINITIONS (Enterprise Features)
// ==========================================================================

const createWorkflowSnapshotFunction = {
  name: "create_workflow_snapshot",
  description: "Create a snapshot/backup of the current workflow state. Enables experimentation with rollback.",
  parameters: {
    type: "object",
    properties: {
      name: { type: "string", description: "Snapshot name (unique identifier)" },
      description: { type: "string", description: "Optional description of what this snapshot contains" },
    },
    required: ["name"],
  },
}

const restoreWorkflowSnapshotFunction = {
  name: "restore_workflow_snapshot",
  description: "Restore a previously saved workflow snapshot. Reverts workflow to saved state.",
  parameters: {
    type: "object",
    properties: {
      snapshotName: { type: "string", description: "Name of snapshot to restore" },
    },
    required: ["snapshotName"],
  },
}

const listWorkflowSnapshotsFunction = {
  name: "list_workflow_snapshots",
  description: "List all available snapshots for the current workflow.",
  parameters: {
    type: "object",
    properties: {},
    required: [],
  },
}

const openSubworkflowFunction = {
  name: "open_subworkflow",
  description: "Open a sub-workflow (Execute Workflow node) in a new tab for editing.",
  parameters: {
    type: "object",
    properties: {
      nodeId: { type: "string", description: "Node name or ID (must be an Execute Workflow node)" },
    },
    required: ["nodeId"],
  },
}

const getWebhookUrlFunction = {
  name: "get_webhook_url",
  description: "Get the webhook URL for a webhook node (production or test URL).",
  parameters: {
    type: "object",
    properties: {
      nodeId: { type: "string", description: "Webhook node name or ID" },
      webhookType: { 
        type: "string", 
        enum: ["production", "test"],
        description: "Webhook type (default: 'production')" 
      },
    },
    required: ["nodeId"],
  },
}

const generateWorkflowDocsFunction = {
  name: "generate_workflow_docs",
  description: "Generate comprehensive documentation for the current workflow in markdown, HTML, or JSON format.",
  parameters: {
    type: "object",
    properties: {
      format: {
        type: "string",
        enum: ["markdown", "html", "json"],
        description: "Output format (default: 'markdown')",
        default: "markdown"
      },
      includeNodeDetails: {
        type: "boolean",
        description: "Include detailed node parameters (default: true)",
        default: true
      },
      includeDiagram: {
        type: "boolean",
        description: "Include Mermaid workflow diagram (default: true)",
        default: true
      },
      includeExamples: {
        type: "boolean",
        description: "Include usage examples (default: true)",
        default: true
      },
    },
    required: [],
  },
}

function getFunctionsForAI(settings) {
  const enabledFunctions = []
  if (settings.workflowAccess !== false) {
    enabledFunctions.push(getWorkflowInfoFunction, getNodeInfoFunction)
  }
  if (settings.nodeCreation !== false) {
    enabledFunctions.push(createNodeFunction)
  }
  if (settings.nodeEditing !== false) {
    enabledFunctions.push(updateNodeFunction)
  }
  if (settings.nodeRemoval !== false) {
    enabledFunctions.push(removeNodeFunction)
  }
  if (settings.nodeCreation !== false || settings.nodeEditing !== false) {
    enabledFunctions.push(addConnectionFunction)
  }
  
  // Connection removal
  if (settings.connectionManagement !== false) {
    enabledFunctions.push(removeConnectionFunction)
  }
  
  // ULTRATHINK ENHANCEMENTS: Always-available utility functions
  enabledFunctions.push(tidyUpWorkflowFunction)
  enabledFunctions.push(duplicateNodesFunction)
  enabledFunctions.push(validateConnectionFunction)
  
  // TIER 1 ENHANCEMENTS: Advanced workflow operations
  enabledFunctions.push(bulkCreateNodesFunction)
  enabledFunctions.push(bulkDeleteNodesFunction)
  enabledFunctions.push(autoPositionNodeFunction)
  enabledFunctions.push(getExecutionResultsFunction)
  enabledFunctions.push(renameNodeSafeFunction)
  enabledFunctions.push(suggestConnectionsFunction)
  enabledFunctions.push(createStickyNoteFunction)
  enabledFunctions.push(fitViewToWorkflowFunction)
  enabledFunctions.push(validateWorkflowFunction)
  enabledFunctions.push(clearExecutionHistoryFunction)
  
  // TIER 2 ENHANCEMENTS: Import/Export, Performance, Advanced Ops
  enabledFunctions.push(exportWorkflowFunction)
  enabledFunctions.push(importWorkflowFunction)
  enabledFunctions.push(analyzePerformanceFunction)
  enabledFunctions.push(replaceNodeKeepConnectionsFunction)
  enabledFunctions.push(connectAdjacentNodesAutoFunction)
  
  // TIER 3 ENHANCEMENTS: Enterprise Features (Snapshots, Sub-workflows)
  enabledFunctions.push(createWorkflowSnapshotFunction)
  enabledFunctions.push(restoreWorkflowSnapshotFunction)
  enabledFunctions.push(listWorkflowSnapshotsFunction)
  enabledFunctions.push(openSubworkflowFunction)
  enabledFunctions.push(getWebhookUrlFunction)
  
  // Documentation Generation
  if (settings.documentationGeneration !== false) {
    enabledFunctions.push(generateWorkflowDocsFunction)
  }
  
  return enabledFunctions.map((func) => ({
    type: "function",
    function: {
      name: func.name,
      description: func.description,
      parameters: func.parameters,
    },
  }))
}

// ============================================================================
// Function Executor (Delegated via callInjected)
// ============================================================================

async function executeFunction(functionCall) {
  const { name, arguments: args } = functionCall
  let parsedArgs
  if (typeof args === "string") {
    try {
      parsedArgs = JSON.parse(args)
    } catch (e) {
      return `Error: Invalid arguments format - ${e}`
    }
  } else {
    parsedArgs = args
  }

  try {
    switch (name) {
      case "create_node":
        return executeCreateNode(parsedArgs)
      case "update_node":
        return executeUpdateNode(parsedArgs)
      case "remove_node":
        return executeRemoveNode(parsedArgs)
      case "add_connection":
        return executeAddConnection(parsedArgs)
      case "remove_connection":
        return executeRemoveConnection(parsedArgs)
      case "get_workflow_info":
        return executeGetWorkflowInfo(parsedArgs)
      case "get_node_info":
        return executeGetNodeInfo(parsedArgs)
      case "analyze_n8n_workflow":
        return executeAnalyzeWorkflow(parsedArgs)
      case "generate_workflow_blueprint":
        return executeGenerateBlueprint(parsedArgs)
      case "tidy_up_workflow":
        return executeTidyUpWorkflow(parsedArgs)
      case "duplicate_nodes":
        return executeDuplicateNodes(parsedArgs)
      case "validate_connection":
        return executeValidateConnection(parsedArgs)
      // TIER 1 Functions
      case "bulk_create_nodes":
        return executeBulkCreateNodes(parsedArgs)
      case "bulk_delete_nodes":
        return executeBulkDeleteNodes(parsedArgs)
      case "auto_position_node":
        return executeAutoPositionNode(parsedArgs)
      case "get_execution_results":
        return executeGetExecutionResults(parsedArgs)
      case "rename_node_safe":
        return executeRenameNodeSafe(parsedArgs)
      case "suggest_connections":
        return executeSuggestConnections(parsedArgs)
      case "create_sticky_note":
        return executeCreateStickyNote(parsedArgs)
      case "fit_view_to_workflow":
        return executeFitViewToWorkflow(parsedArgs)
      case "validate_workflow":
        return executeValidateWorkflow(parsedArgs)
      case "clear_execution_history":
        return executeClearExecutionHistory(parsedArgs)
      // TIER 2 Functions
      case "export_workflow":
        return executeExportWorkflow(parsedArgs)
      case "import_workflow":
        return executeImportWorkflow(parsedArgs)
      case "analyze_performance":
        return executeAnalyzePerformance(parsedArgs)
      case "replace_node_keep_connections":
        return executeReplaceNodeKeepConnections(parsedArgs)
      case "connect_adjacent_nodes_auto":
        return executeConnectAdjacentNodesAuto(parsedArgs)
      // TIER 3 Functions
      case "create_workflow_snapshot":
        return executeCreateWorkflowSnapshot(parsedArgs)
      case "restore_workflow_snapshot":
        return executeRestoreWorkflowSnapshot(parsedArgs)
      case "list_workflow_snapshots":
        return executeListWorkflowSnapshots(parsedArgs)
      case "open_subworkflow":
        return executeOpenSubworkflow(parsedArgs)
      case "get_webhook_url":
        return executeGetWebhookUrl(parsedArgs)
      case "generate_workflow_docs":
        return executeGenerateWorkflowDocs(parsedArgs)
      default:
        return `Error: Unknown function "${name}"`
    }
  } catch (error) {
    return `Error executing ${name}: ${error.message || "Unknown error"}`
  }
}

async function executeCreateNode(args) {
  const { name, type, position, parameters, notes } = args
  if (!name || !type) return "Error: name and type are required"
  
  try {
    // Note: injected script handles UUID generation and defaults if needed
    const result = await callInjected('create_node', args);
    return `Successfully created node "${name}" of type "${type}"`;
  } catch (e) {
    return `Error: Failed to create node "${name}". ${e.message}`;
  }
}

async function executeUpdateNode(args) {
  const { name } = args;
  if (!name) return "Error: name is required";
  
  try {
    await callInjected('update_node', args);
    return `Successfully updated node "${name}"`;
  } catch (e) {
    return `Error: Failed to update node "${name}". ${e.message}`;
  }
}

async function executeRemoveNode(args) {
  const { name } = args
  if (!name) return "Error: name is required"
  
  try {
    await callInjected('remove_node', args);
    return `Successfully removed node "${name}"`;
  } catch (e) {
    return `Error: Failed to remove node "${name}". ${e.message}`;
  }
}

async function executeAddConnection(args) {
  const { sourceNode, targetNode } = args;
  if (!sourceNode || !targetNode) return "Error: sourceNode and targetNode are required";
  
  try {
    await callInjected('add_connection', args);
    return `Successfully connected "${sourceNode}" to "${targetNode}"`;
  } catch (e) {
    return `Error: Failed to connect "${sourceNode}" to "${targetNode}". ${e.message}`;
  }
}

async function executeRemoveConnection(args) {
  const { sourceNode, targetNode } = args;
  if (!sourceNode || !targetNode) return "Error: sourceNode and targetNode are required";
  
  try {
    await callInjected('remove_connection', args);
    return `✅ Successfully removed connection from "${sourceNode}" to "${targetNode}"`;
  } catch (e) {
    return `Error: Failed to remove connection from "${sourceNode}" to "${targetNode}". ${e.message}`;
  }
}

async function executeGetWorkflowInfo(args) {
  try {
    // Delegate formatting logic to injected script (keeping content script dumb)
    const result = await callInjected('get_workflow_info', { 
      format: 'ai',
      includeNodes: args.includeNodes,
      includeConnections: args.includeConnections
    });
    
    // Injected script now returns the formatted string directly in result.data
    return result.data;
  } catch (e) {
    return "Error getting workflow info: " + e.message;
  }
}

async function executeGetNodeInfo(args) {
  const { name } = args
  if (!name) return "Error: name is required"
  
  try {
    const result = await callInjected('get_node_info', { name });
    return `Node: ${result.data.name}\nType: ${result.data.type}\nParameters: ${JSON.stringify(result.data.parameters, null, 2)}`;
  } catch (e) {
    return `Error getting node info: ${e.message}`;
  }
}

async function executeAnalyzeWorkflow(args) {
  const { issues, summary, confidence } = args;
  
  if (!issues || !Array.isArray(issues)) {
    return "Error: Invalid analysis format. Expected 'issues' array.";
  }

  // Format the analysis report for the chat UI
  let report = `### 🕵️ Workflow Analysis Report\n\n`;
  report += `**Summary:** ${summary}\n\n`;
  
  if (confidence !== undefined) {
    const confidencePercent = Math.round(confidence * 100);
    report += `**Confidence Score:** ${confidencePercent}% ${'⭐'.repeat(Math.ceil(confidence * 5))}\n\n`;
  }
  
  report += `#### Issues Found:\n`;

  if (issues.length === 0) {
    report += "✅ No major issues found. Great job!\n";
  } else {
    // Group by category
    const byCategory = {};
    issues.forEach(issue => {
      const cat = issue.category || 'other';
      if (!byCategory[cat]) byCategory[cat] = [];
      byCategory[cat].push(issue);
    });
    
    const categoryIcons = {
      security: "🔒",
      performance: "⚡",
      reliability: "🛡️",
      best_practice: "✨",
      logic: "🧠",
      other: "📋"
    };
    
    Object.keys(byCategory).forEach(category => {
      const icon = categoryIcons[category] || "📋";
      report += `\n**${icon} ${category.toUpperCase().replace('_', ' ')}**\n`;
      
      byCategory[category].forEach((issue, index) => {
        const severityIcons = {
          low: "ℹ️",
          medium: "⚠️",
          high: "❌",
          critical: "🔥"
        };
        const sIcon = severityIcons[issue.severity] || "❓";
        
        report += `${index + 1}. ${sIcon} **[${issue.severity.toUpperCase()}] ${issue.node}**\n`;
        report += `   - **Problem:** ${issue.description}\n`;
        report += `   - **Fix:** ${issue.fix}\n\n`;
      });
    });
  }

  // TODO: Phase 2 - Implement Auto-Patching or Visual Highlight
  // For now, we just return the text report which will be displayed by the assistant
  
  return report;
}

async function executeGenerateBlueprint(args) {
  const { steps, nodes, connections, explanation } = args;
  
  if (!steps || !Array.isArray(steps)) {
    return "Error: Invalid blueprint format. Expected 'steps' array.";
  }
  if (!nodes || !Array.isArray(nodes)) {
    return "Error: Invalid blueprint format. Expected 'nodes' array.";
  }

  // Format the blueprint plan as a visual card
  let blueprint = `### 🎨 Workflow Blueprint Generated\n\n`;
  blueprint += `**Explanation:** ${explanation}\n\n`;
  
  blueprint += `#### 📋 High-Level Steps:\n`;
  steps.forEach((step, index) => {
    blueprint += `${index + 1}. ${step}\n`;
  });
  
  blueprint += `\n#### 🔧 Proposed Nodes:\n`;
  nodes.forEach((node, index) => {
    blueprint += `**${index + 1}. ${node.name}** (${node.type})\n`;
    blueprint += `   - Purpose: ${node.purpose}\n\n`;
  });
  
  if (connections && connections.length > 0) {
    blueprint += `#### 🔗 Connections:\n`;
    connections.forEach((conn, index) => {
      const connType = conn.type === 'ai_tool' ? '🤖 AI Tool' : '➡️';
      blueprint += `${index + 1}. ${connType} **${conn.from}** → **${conn.to}**\n`;
    });
  }
  
  blueprint += `\n---\n`;
  blueprint += `💡 **Next Steps:** Review this blueprint and confirm if you'd like me to proceed with creating the workflow, or suggest modifications.\n`;
  
  return blueprint;
}

// ==========================================================================
// ULTRATHINK ENHANCEMENTS: Quick Win Functions
// ==========================================================================

async function executeTidyUpWorkflow(args) {
  try {
    const result = await callInjected('tidy_up_workflow', args);
    
    if (result.success) {
      return `✅ **Workflow Auto-Organized!**\n\n${result.message}\n\nAll nodes have been automatically arranged for optimal readability.`;
    } else {
      return `❌ **Auto-Layout Failed:** ${result.error}`;
    }
  } catch (e) {
    return `Error executing tidy_up_workflow: ${e.message}`;
  }
}

async function executeDuplicateNodes(args) {
  try {
    const result = await callInjected('duplicate_nodes', args);
    
    if (result.success) {
      const nodesList = result.newNodeNames?.join(', ') || result.newNodeIds?.join(', ') || 'Unknown';
      return `✅ **Nodes Duplicated Successfully!**\n\nOriginal: ${args.ids?.join(', ')}\nNew Nodes: ${nodesList}\n\nTotal: ${result.newNodeIds?.length || 0} nodes created.`;
    } else {
      return `❌ **Duplication Failed:** ${result.error}`;
    }
  } catch (e) {
    return `Error executing duplicate_nodes: ${e.message}`;
  }
}

async function executeValidateConnection(args) {
  try {
    const result = await callInjected('validate_connection', args);
    
    if (result.valid) {
      return `✅ **Connection Validated**\n\n${result.message}\n\n**Connection Type:** ${result.connectionType}\n**Source:** ${result.sourceNode}\n**Target:** ${result.targetNode}`;
    } else {
      return `❌ **Invalid Connection**\n\n${result.message || result.error}\n\nThese nodes cannot be connected directly. Consider using an intermediate node (e.g., Set, Code, or Function).`;
    }
  } catch (e) {
    return `Error executing validate_connection: ${e.message}`;
  }
}

// ==========================================================================
// TIER 1 EXECUTOR FUNCTIONS
// ==========================================================================

async function executeBulkCreateNodes(args) {
  try {
    const result = await callInjected('bulk_create_nodes', args);
    if (result.success) {
      const errorInfo = result.errors.length > 0 ? `\n⚠️ ${result.errors.length} failed` : '';
      return `✅ **Bulk Node Creation Complete!**\n\n📦 Created: ${result.created.length}/${result.total} nodes${errorInfo}\n\n**Created Nodes:**\n${result.created.map(n => `- ${n.name} (${n.type})`).join('\n')}`;
    } else {
      return `❌ **Bulk Creation Failed:** ${result.error}`;
    }
  } catch (e) {
    return `Error executing bulk_create_nodes: ${e.message}`;
  }
}

async function executeBulkDeleteNodes(args) {
  try {
    const result = await callInjected('bulk_delete_nodes', args);
    if (result.success) {
      return `✅ **Bulk Deletion Complete!**\n\n🗑️ Deleted ${result.deleted} nodes successfully.`;
    } else {
      return `❌ **Bulk Deletion Failed:** ${result.error}`;
    }
  } catch (e) {
    return `Error executing bulk_delete_nodes: ${e.message}`;
  }
}

async function executeAutoPositionNode(args) {
  try {
    const result = await callInjected('auto_position_node', args);
    if (result.success) {
      return `✅ **Node Positioned!**\n\n📍 ${result.nodeName} positioned at [${result.position[0]}, ${result.position[1]}]`;
    } else {
      return `❌ **Positioning Failed:** ${result.error}`;
    }
  } catch (e) {
    return `Error executing auto_position_node: ${e.message}`;
  }
}

async function executeGetExecutionResults(args) {
  try {
    const result = await callInjected('get_execution_results', args);
    if (result.success) {
      if (result.results.length === 0) {
        return `ℹ️ **No Execution Data**\n\nNode "${result.nodeName}" has no execution history yet.`;
      }
      const summary = result.results.map((r, i) => 
        `**Run ${i+1}:** ${r.executionTime}ms, ${r.data?.length || 0} items${r.error ? ` ❌ Error: ${r.error}` : ' ✅'}`
      ).join('\n');
      return `📊 **Execution Results: ${result.nodeName}**\n\nTotal Executions: ${result.totalExecutions}\n\n${summary}`;
    } else {
      return `❌ **Failed to get results:** ${result.error}`;
    }
  } catch (e) {
    return `Error executing get_execution_results: ${e.message}`;
  }
}

async function executeRenameNodeSafe(args) {
  try {
    const result = await callInjected('rename_node_safe', args);
    if (result.success) {
      return `✅ **Node Renamed!**\n\n🏷️ "${result.oldName}" → "${result.newName}"`;
    } else {
      return `❌ **Rename Failed:** ${result.error}`;
    }
  } catch (e) {
    return `Error executing rename_node_safe: ${e.message}`;
  }
}

async function executeSuggestConnections(args) {
  try {
    const result = await callInjected('suggest_connections', args);
    if (result.success) {
      if (result.suggestions.length === 0) {
        return `ℹ️ **No Compatible Nodes**\n\nNo compatible connection targets found for "${result.nodeName}".`;
      }
      const suggestionList = result.suggestions.slice(0, 10).map(s => 
        `- **${s.nodeName}** (${s.nodeType})\n  ${s.reason}`
      ).join('\n\n');
      return `💡 **Connection Suggestions for "${result.nodeName}"**\n\nFound ${result.total} compatible nodes:\n\n${suggestionList}${result.total > 10 ? `\n\n...and ${result.total - 10} more` : ''}`;
    } else {
      return `❌ **Failed to suggest connections:** ${result.error}`;
    }
  } catch (e) {
    return `Error executing suggest_connections: ${e.message}`;
  }
}

async function executeCreateStickyNote(args) {
  try {
    const result = await callInjected('create_sticky_note', args);
    if (result.success) {
      return `✅ **Sticky Note Created!**\n\n📝 ${result.message}`;
    } else {
      return `❌ **Creation Failed:** ${result.error}`;
    }
  } catch (e) {
    return `Error executing create_sticky_note: ${e.message}`;
  }
}

async function executeFitViewToWorkflow(args) {
  try {
    const result = await callInjected('fit_view_to_workflow', args);
    if (result.success) {
      return `✅ **View Fitted!**\n\n🔍 Workflow is now fully visible.`;
    } else {
      return `❌ **Fit View Failed:** ${result.error}`;
    }
  } catch (e) {
    return `Error executing fit_view_to_workflow: ${e.message}`;
  }
}

async function executeValidateWorkflow(args) {
  try {
    const result = await callInjected('validate_workflow', args);
    if (result.success) {
      const validation = result.validation;
      if (validation.isValid) {
        return `✅ **Workflow Valid!**\n\nNo issues detected. Workflow is ready to execute.`;
      } else {
        const issuesList = validation.issues.map(issue => 
          `- **${issue.node}** (${issue.type}): ${issue.message}`
        ).join('\n');
        return `⚠️ **Workflow Validation Issues**\n\nFound ${validation.totalIssues} issues:\n\n${issuesList}\n\n**Affected Nodes:** ${validation.nodesWithIssues.join(', ')}`;
      }
    } else {
      return `❌ **Validation Failed:** ${result.error}`;
    }
  } catch (e) {
    return `Error executing validate_workflow: ${e.message}`;
  }
}

async function executeClearExecutionHistory(args) {
  try {
    const result = await callInjected('clear_execution_history', args);
    if (result.success) {
      return `✅ **Execution History Cleared!**\n\n🗑️ ${result.message}`;
    } else {
      return `❌ **Clear Failed:** ${result.error}`;
    }
  } catch (e) {
    return `Error executing clear_execution_history: ${e.message}`;
  }
}

// ==========================================================================
// TIER 2 EXECUTOR FUNCTIONS
// ==========================================================================

async function executeExportWorkflow(args) {
  try {
    const result = await callInjected('export_workflow', args);
    if (result.success) {
      const workflowJSON = JSON.stringify(result.workflow, null, 2);
      return `✅ **Workflow Exported!**\n\n📦 Format: ${result.format}\n📊 Nodes: ${result.nodeCount}\n🔗 Connections: ${result.connectionCount}\n\n\`\`\`json\n${workflowJSON.substring(0, 500)}...\n\`\`\`\n\n(Full workflow data available)`;
    } else {
      return `❌ **Export Failed:** ${result.error}`;
    }
  } catch (e) {
    return `Error executing export_workflow: ${e.message}`;
  }
}

async function executeImportWorkflow(args) {
  try {
    const result = await callInjected('import_workflow', args);
    if (result.success) {
      return `✅ **Workflow Imported!**\n\n📦 Imported ${result.imported.nodes} nodes and ${result.imported.connections} connections.`;
    } else {
      return `❌ **Import Failed:** ${result.error}`;
    }
  } catch (e) {
    return `Error executing import_workflow: ${e.message}`;
  }
}

async function executeAnalyzePerformance(args) {
  try {
    const result = await callInjected('analyze_performance', args);
    if (result.success) {
      if (result.totalNodes === 0) {
        return `ℹ️ **No Performance Data**\n\nNo nodes have execution history yet. Run the workflow first.`;
      }
      const topSlowNodes = result.report.slice(0, 5).map((n, i) => 
        `${i+1}. **${n.node}** (${n.type})\n   Avg: ${n.avgExecutionTime}ms | Max: ${n.maxExecutionTime}ms | Executions: ${n.executions} | Errors: ${n.errorRate}`
      ).join('\n\n');
      return `📊 **Performance Analysis Report**\n\n🐌 **Slowest Nodes:**\n\n${topSlowNodes}\n\n**Total Analyzed:** ${result.totalNodes} nodes`;
    } else {
      return `❌ **Analysis Failed:** ${result.error}`;
    }
  } catch (e) {
    return `Error executing analyze_performance: ${e.message}`;
  }
}

async function executeReplaceNodeKeepConnections(args) {
  try {
    const result = await callInjected('replace_node_keep_connections', args);
    if (result.success) {
      return `✅ **Node Replaced!**\n\n🔄 "${result.oldNodeName}" → "${result.newNodeName}"\n\nAll connections preserved.`;
    } else {
      return `❌ **Replacement Failed:** ${result.error}`;
    }
  } catch (e) {
    return `Error executing replace_node_keep_connections: ${e.message}`;
  }
}

async function executeConnectAdjacentNodesAuto(args) {
  try {
    const result = await callInjected('connect_adjacent_nodes_auto', args);
    if (result.success) {
      return `✅ **Auto-Connected!**\n\n🔗 ${result.sourceNode} → ${result.targetNode}`;
    } else {
      return `❌ **Auto-Connect Failed:** ${result.error}`;
    }
  } catch (e) {
    return `Error executing connect_adjacent_nodes_auto: ${e.message}`;
  }
}

// ==========================================================================
// TIER 3 EXECUTOR FUNCTIONS (Enterprise)
// ==========================================================================

async function executeCreateWorkflowSnapshot(args) {
  try {
    const result = await callInjected('create_workflow_snapshot', args);
    if (result.success) {
      return `✅ **Snapshot Created!**\n\n📸 Name: "${result.snapshot}"\n📦 Nodes: ${result.nodeCount}\n\nYou can restore this snapshot anytime using \`restore_workflow_snapshot\`.`;
    } else {
      return `❌ **Snapshot Failed:** ${result.error}`;
    }
  } catch (e) {
    return `Error executing create_workflow_snapshot: ${e.message}`;
  }
}

async function executeRestoreWorkflowSnapshot(args) {
  try {
    const result = await callInjected('restore_workflow_snapshot', args);
    if (result.success) {
      return `✅ **Snapshot Restored!**\n\n📸 Restored: "${result.snapshot}"\n📦 Nodes: ${result.nodeCount}`;
    } else {
      return `❌ **Restore Failed:** ${result.error}`;
    }
  } catch (e) {
    return `Error executing restore_workflow_snapshot: ${e.message}`;
  }
}

async function executeListWorkflowSnapshots(args) {
  try {
    const result = await callInjected('list_workflow_snapshots', args);
    if (result.success) {
      if (result.total === 0) {
        return `ℹ️ **No Snapshots**\n\nNo workflow snapshots found. Create one using \`create_workflow_snapshot\`.`;
      }
      const snapshotList = result.snapshots.map((s, i) => 
        `${i+1}. **${s.name}**\n   📝 ${s.description || 'No description'}\n   📦 ${s.nodeCount} nodes\n   🕐 ${s.age} minutes ago`
      ).join('\n\n');
      return `📸 **Workflow Snapshots**\n\nFound ${result.total} snapshots:\n\n${snapshotList}`;
    } else {
      return `❌ **Failed to list snapshots:** ${result.error}`;
    }
  } catch (e) {
    return `Error executing list_workflow_snapshots: ${e.message}`;
  }
}

async function executeOpenSubworkflow(args) {
  try {
    const result = await callInjected('open_subworkflow', args);
    if (result.success) {
      return `✅ **Opening Sub-workflow...**\n\n🔗 From node: "${result.nodeName}"\n\nSub-workflow will open in a new tab.`;
    } else {
      return `❌ **Failed to open sub-workflow:** ${result.error}`;
    }
  } catch (e) {
    return `Error executing open_subworkflow: ${e.message}`;
  }
}

async function executeGetWebhookUrl(args) {
  try {
    const result = await callInjected('get_webhook_url', args);
    if (result.success) {
      return `✅ **Webhook URL Retrieved!**\n\n🪝 **Node:** ${result.nodeName}\n🔗 **URL:** \`${result.webhookUrl}\`\n🏷️ **Type:** ${result.webhookType}`;
    } else {
      return `❌ **Failed to get webhook URL:** ${result.error}`;
    }
  } catch (e) {
    return `Error executing get_webhook_url: ${e.message}`;
  }
}

async function executeGenerateWorkflowDocs(args) {
  try {
    const result = await callInjected('generate_workflow_docs', args);
    if (result.success) {
      return `📚 **Workflow Documentation Generated!**\n\n**Format:** ${args.format || 'markdown'}\n**Node Count:** ${result.nodeCount}\n\n${result.documentation.substring(0, 1000)}...\n\n(Full documentation available)`;
    } else {
      return `❌ **Documentation Generation Failed:** ${result.error}`;
    }
  } catch (e) {
    return `Error executing generate_workflow_docs: ${e.message}`;
  }
}

async function formatWorkflowForAI() {
  try {
    // Uses the same logic as executeGetWorkflowInfo but internal use
    const result = await callInjected('get_workflow_info', { 
      format: 'ai',
      includeNodes: true,
      includeConnections: true
    });
    return result.data;
  } catch (e) {
    console.error("[n8nChat] Error getting workflow context:", e)
    return "No workflow is currently open."
  }
}

// ============================================================================
// Main Content Script Code
// ============================================================================

// n8n page detection
function detectN8nPage() {
  // Check for n8n global object
  if (window.n8n) return true
  
  // Check for n8n-specific DOM elements
  if (document.querySelector('[data-test-id="workflow-canvas"]')) return true
  
  // Check for n8n Vue app
  const appElement = document.getElementById("app")
  if (appElement && (appElement.__vue_app__ || appElement.__vueParentComponent)) {
    // Check if it's n8n by looking for n8n-specific classes or attributes
    if (document.querySelector('.el-menu, .n8n, [class*="n8n"]')) return true
  }
  
  // Check for n8n in meta tags
  const metaTags = document.querySelectorAll('meta[name*="n8n"], meta[property*="n8n"]')
  if (metaTags.length > 0) return true
  
  // Check URL patterns (more comprehensive)
  const url = window.location.href.toLowerCase()
  if (url.includes('/workflow/') || 
      url.includes('/workflows/') || 
      url.includes('n8n') ||
      url.includes('/executions/') ||
      url.includes('/templates/')) {
    return true
  }
  
  // Check for n8n-specific text content
  if (document.body && (
      document.body.textContent.includes('n8n') ||
      document.body.innerHTML.includes('n8n')
    )) {
    // Additional check: look for n8n logo or specific UI elements
    if (document.querySelector('img[src*="n8n"], svg[class*="n8n"], [class*="n8n-logo"]')) return true
  }
  
  return false
}

// Wait for n8n to load
async function waitForN8n(timeout = 5000) {
  if (detectN8nPage()) {
    return true
  }
  return new Promise((resolve) => {
    const startTime = Date.now()
    const checkInterval = setInterval(() => {
      if (detectN8nPage()) {
        clearInterval(checkInterval)
        resolve(true)
      } else if (Date.now() - startTime > timeout) {
        clearInterval(checkInterval)
        resolve(false)
      }
    }, 100)
  })
}

// Wait for n8n Vue app to be ready (Delegated to injected script)
async function waitForN8nVueApp(timeout = 10000) {
  Logger.info('Waiting for n8n App (via injected script)...');
  
  // First ensure injected script is loaded
  const injectedReady = await waitForInjectedScript();
  if (!injectedReady) {
    Logger.error('Injected script failed to load');
    return false;
  }

  const startTime = Date.now();
  
  while (Date.now() - startTime < timeout) {
    try {
      const result = await callInjected('check_ready', {}, 1000);
      if (result && result.success && result.details.hasApp) {
        Logger.success('✓ n8n App is ready and connected!');
        return true;
      }
    } catch (e) {
      // ignore errors during check
    }
    
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  Logger.warn('⚠ Timeout waiting for n8n App');
  return false;
}

// Initialize chat UI
async function initializeChatUI() {
  Logger.info("Initializing Chat UI...");
  
  if (document.getElementById("n8n-chat-container")) {
    Logger.log("Chat UI already exists");
    return;
  }

  // ============================================================================
  // 🎨 ULTRA-MODERN AGENTIC CHATBOX STYLES
  // Glassmorphism + Smooth Animations + Gradient Accents + Modern Typography
  // ============================================================================
  
  const style = document.createElement("style")
  style.textContent = `
    /* ===== GLASSMORPHISM CONTAINER WITH DEPTH ===== */
    #n8n-chat-container {
      position: fixed;
      bottom: 24px;
      right: 24px;
      width: 460px;
      height: 720px;
      max-height: calc(100vh - 80px);
      z-index: 999999;
      background: linear-gradient(135deg, 
        rgba(15, 15, 25, 0.95) 0%, 
        rgba(25, 25, 35, 0.98) 50%,
        rgba(20, 20, 30, 0.95) 100%);
      backdrop-filter: blur(24px) saturate(180%);
      -webkit-backdrop-filter: blur(24px) saturate(180%);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 24px;
      box-shadow: 
        0 24px 64px rgba(0, 0, 0, 0.7),
        0 0 0 1px rgba(255, 255, 255, 0.05),
        inset 0 1px 0 rgba(255, 255, 255, 0.1),
        0 0 80px rgba(0, 255, 71, 0.15);
      display: none;
      flex-direction: column;
      font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, sans-serif;
      color: #e8e8e8;
      overflow: hidden;
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }
    
    #n8n-chat-container.show {
      display: flex !important;
      animation: chatboxEnter 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    }
    
    @keyframes chatboxEnter {
      0% {
        transform: translateY(40px) scale(0.92);
        opacity: 0;
        filter: blur(8px);
      }
      100% {
        transform: translateY(0) scale(1);
        opacity: 1;
        filter: blur(0);
      }
    }
    
    /* ===== MODERN HEADER WITH ANIMATED GRADIENT ===== */
    #n8n-chat-header {
      padding: 20px 24px;
      background: linear-gradient(135deg, 
        rgba(0, 255, 71, 0.12) 0%, 
        rgba(0, 212, 255, 0.08) 50%,
        rgba(0, 187, 52, 0.1) 100%);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      overflow: hidden;
    }
    
    #n8n-chat-header::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: linear-gradient(45deg, 
        transparent 30%, 
        rgba(255, 255, 255, 0.03) 50%, 
        transparent 70%);
      animation: headerShimmer 4s linear infinite;
    }
    
    @keyframes headerShimmer {
      0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
      100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
    }
    
    #n8n-chat-header h3 {
      margin: 0;
      font-size: 22px;
      font-weight: 800;
      background: linear-gradient(135deg, #00ff47 0%, #00d4ff 60%, #00ff47 100%);
      background-size: 200% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      display: flex;
      align-items: center;
      gap: 12px;
      letter-spacing: -0.8px;
      position: relative;
      z-index: 1;
      animation: gradientShift 3s ease infinite;
    }
    
    @keyframes gradientShift {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    
    #n8n-chat-header h3 span:first-child {
      font-size: 32px;
      filter: drop-shadow(0 0 12px rgba(0, 255, 71, 0.7));
      animation: iconPulse 2.5s ease-in-out infinite;
    }
    
    @keyframes iconPulse {
      0%, 100% {
        transform: scale(1);
        filter: drop-shadow(0 0 12px rgba(0, 255, 71, 0.7));
      }
      50% {
        transform: scale(1.1);
        filter: drop-shadow(0 0 20px rgba(0, 255, 71, 0.9));
      }
    }
    
    .n8n-chat-header-actions {
      display: flex;
      gap: 8px;
      align-items: center;
      position: relative;
      z-index: 1;
    }
    
    .n8n-chat-action-btn {
      width: 38px;
      height: 38px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.04);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 12px;
      cursor: pointer;
      color: rgba(255, 255, 255, 0.5);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      padding: 0;
      position: relative;
      overflow: hidden;
    }
    
    .n8n-chat-action-btn::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      background: radial-gradient(circle, rgba(0, 255, 71, 0.2), transparent);
      transform: translate(-50%, -50%);
      transition: width 0.4s, height 0.4s;
      border-radius: 50%;
    }
    
    .n8n-chat-action-btn:hover::before {
      width: 100px;
      height: 100px;
    }
    
    .n8n-chat-action-btn:hover {
      background: rgba(255, 255, 255, 0.12);
      color: #fff;
      transform: translateY(-2px) scale(1.05);
      box-shadow: 0 6px 16px rgba(0, 255, 71, 0.25);
      border-color: rgba(0, 255, 71, 0.4);
    }
    
    .n8n-chat-action-btn:active {
      transform: translateY(0) scale(0.95);
    }
    
    .n8n-chat-action-btn svg {
      width: 18px;
      height: 18px;
      position: relative;
      z-index: 1;
    }
    
    #n8n-chat-close {
      font-size: 28px;
      line-height: 1;
    }
    
    #n8n-chat-new:hover {
      color: #00ff47;
      box-shadow: 0 6px 16px rgba(0, 255, 71, 0.35);
    }
    
    #n8n-chat-clear:hover {
      color: #ff4444;
      box-shadow: 0 6px 16px rgba(255, 68, 68, 0.35);
    }
    
    /* ===== MESSAGES AREA WITH RADIAL GRADIENTS ===== */
    #n8n-chat-messages {
      flex: 1;
      overflow-y: auto;
      padding: 24px;
      background: 
        radial-gradient(ellipse at 20% 20%, rgba(0, 255, 71, 0.04) 0%, transparent 40%),
        radial-gradient(ellipse at 80% 80%, rgba(0, 212, 255, 0.04) 0%, transparent 40%),
        linear-gradient(180deg, rgba(8, 8, 12, 0.7), rgba(12, 12, 18, 0.9));
      scrollbar-width: thin;
      scrollbar-color: rgba(0, 255, 71, 0.3) transparent;
      position: relative;
      scroll-behavior: smooth;
    }
    
    /* ===== ULTRA-MODERN SCROLLBAR ===== */
    #n8n-chat-messages::-webkit-scrollbar {
      width: 10px;
    }
    
    #n8n-chat-messages::-webkit-scrollbar-track {
      background: transparent;
    }
    
    #n8n-chat-messages::-webkit-scrollbar-thumb {
      background: linear-gradient(180deg, 
        rgba(0, 255, 71, 0.35), 
        rgba(0, 212, 255, 0.35));
      border-radius: 12px;
      border: 2px solid rgba(0, 0, 0, 0.2);
      background-clip: padding-box;
    }
    
    #n8n-chat-messages::-webkit-scrollbar-thumb:hover {
      background: linear-gradient(180deg, 
        rgba(0, 255, 71, 0.55), 
        rgba(0, 212, 255, 0.55));
      box-shadow: 0 0 10px rgba(0, 255, 71, 0.3);
    }
    
    /* ===== MESSAGE BUBBLES WITH ADVANCED ANIMATIONS ===== */
    .n8n-chat-message {
      margin-bottom: 18px;
      padding: 16px 20px;
      border-radius: 18px;
      max-width: 88%;
      word-wrap: break-word;
      line-height: 1.7;
      position: relative;
      animation: messageReveal 0.5s cubic-bezier(0.16, 1, 0.3, 1);
      box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
      font-size: 15px;
    }
    
    @keyframes messageReveal {
      0% {
        opacity: 0;
        transform: translateY(30px) scale(0.9);
        filter: blur(6px);
      }
      60% {
        transform: translateY(-4px) scale(1.01);
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
        filter: blur(0);
      }
    }
    
    /* ===== USER MESSAGE (NEON GREEN GRADIENT) ===== */
    .n8n-chat-user {
      background: linear-gradient(135deg, 
        #00ff47 0%, 
        #00e65a 30%,
        #00d95f 60%, 
        #00bb34 100%);
      color: #000;
      margin-left: auto;
      border-bottom-right-radius: 6px;
      font-weight: 600;
      box-shadow: 
        0 8px 24px rgba(0, 255, 71, 0.4),
        inset 0 2px 0 rgba(255, 255, 255, 0.35),
        inset 0 -1px 0 rgba(0, 0, 0, 0.15);
      letter-spacing: -0.3px;
      position: relative;
      overflow: hidden;
    }
    
    .n8n-chat-user::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      animation: userMessageShine 2s infinite;
    }
    
    @keyframes userMessageShine {
      to { left: 100%; }
    }
    
    /* ===== ASSISTANT MESSAGE (GLASSMORPHISM) ===== */
    .n8n-chat-assistant {
      background: linear-gradient(135deg, 
        rgba(40, 40, 50, 0.85) 0%, 
        rgba(45, 45, 55, 0.9) 50%,
        rgba(35, 35, 45, 0.88) 100%);
      backdrop-filter: blur(12px) saturate(150%);
      color: #f0f0f0;
      margin-right: auto;
      border-bottom-left-radius: 6px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 
        0 8px 24px rgba(0, 0, 0, 0.35),
        inset 0 1px 0 rgba(255, 255, 255, 0.08),
        inset 0 -1px 0 rgba(0, 0, 0, 0.2);
    }

    /* ===== SYSTEM MESSAGE (FUNCTION EXECUTION BADGE) ===== */
    .n8n-chat-system {
      background: linear-gradient(135deg, 
        rgba(0, 255, 71, 0.15) 0%, 
        rgba(0, 212, 255, 0.12) 50%,
        rgba(0, 187, 52, 0.1) 100%);
      backdrop-filter: blur(12px);
      color: #00ff47;
      font-family: 'SF Mono', 'Monaco', 'Consolas', 'Courier New', monospace;
      font-size: 13px;
      padding: 12px 18px;
      width: fit-content;
      max-width: 92%;
      margin: 8px auto;
      border: 1px solid rgba(0, 255, 71, 0.3);
      border-radius: 14px;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      font-weight: 600;
      box-shadow: 
        0 6px 18px rgba(0, 255, 71, 0.2),
        inset 0 1px 0 rgba(0, 255, 71, 0.15),
        inset 0 -1px 0 rgba(0, 0, 0, 0.1);
      animation: badgePopIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
      letter-spacing: -0.2px;
    }
    
    @keyframes badgePopIn {
      0% {
        transform: scale(0.8) rotate(-5deg);
        opacity: 0;
      }
      60% {
        transform: scale(1.08) rotate(2deg);
      }
      100% {
        transform: scale(1) rotate(0);
        opacity: 1;
      }
    }
    
    /* ===== INPUT AREA WITH GLOW EFFECT ===== */
    #n8n-chat-input-area {
      padding: 20px 24px;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      display: flex;
      gap: 12px;
      background: linear-gradient(135deg, 
        rgba(20, 20, 30, 0.92) 0%, 
        rgba(25, 25, 35, 0.95) 100%);
      backdrop-filter: blur(24px);
      position: relative;
    }
    
    #n8n-chat-input-area::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(90deg, 
        transparent, 
        rgba(0, 255, 71, 0.4), 
        rgba(0, 212, 255, 0.4),
        rgba(0, 255, 71, 0.4),
        transparent);
    }
    
    #n8n-chat-input {
      flex: 1;
      padding: 15px 20px;
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 16px;
      background: rgba(15, 15, 25, 0.85);
      backdrop-filter: blur(10px);
      color: #f0f0f0;
      font-size: 15px;
      outline: none;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      letter-spacing: -0.2px;
    }
    
    #n8n-chat-input:focus {
      border-color: #00ff47;
      box-shadow: 
        0 0 0 4px rgba(0, 255, 71, 0.18),
        0 6px 20px rgba(0, 255, 71, 0.25),
        inset 0 2px 0 rgba(255, 255, 255, 0.05);
      background: rgba(18, 18, 28, 0.95);
      transform: translateY(-1px);
    }
    
    #n8n-chat-input::placeholder {
      color: rgba(255, 255, 255, 0.3);
      font-style: italic;
    }
    
    /* ===== SEND BUTTON WITH SHIMMER EFFECT ===== */
    #n8n-chat-send {
      padding: 15px 32px;
      background: linear-gradient(135deg, 
        #00ff47 0%, 
        #00e65a 25%,
        #00d95f 50%, 
        #00bb34 100%);
      color: #000;
      border: none;
      border-radius: 16px;
      cursor: pointer;
      font-weight: 700;
      font-size: 15px;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      white-space: nowrap;
      letter-spacing: -0.4px;
      box-shadow: 
        0 6px 20px rgba(0, 255, 71, 0.4),
        inset 0 2px 0 rgba(255, 255, 255, 0.4),
        inset 0 -2px 0 rgba(0, 0, 0, 0.1);
      position: relative;
      overflow: hidden;
    }
    
    #n8n-chat-send::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.35), transparent);
      transition: left 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    #n8n-chat-send:hover::before {
      left: 100%;
    }
    
    #n8n-chat-send:hover {
      transform: translateY(-3px) scale(1.03);
      box-shadow: 
        0 10px 28px rgba(0, 255, 71, 0.55),
        inset 0 2px 0 rgba(255, 255, 255, 0.5);
    }
    
    #n8n-chat-send:active {
      transform: translateY(-1px) scale(0.98);
    }
    
    #n8n-chat-send:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      transform: none;
      box-shadow: none;
    }
    
    /* ===== FLOATING TOGGLE BUTTON WITH CONTINUOUS PULSE ===== */
    #n8n-chat-toggle {
      position: fixed;
      bottom: 24px;
      right: 24px;
      width: 76px;
      height: 76px;
      border-radius: 50%;
      background: linear-gradient(135deg, 
        #00ff47 0%, 
        #00e65a 25%,
        #00d95f 50%, 
        #00bb34 100%);
      color: #000;
      border: none;
      cursor: pointer;
      font-size: 36px;
      box-shadow: 
        0 10px 32px rgba(0, 255, 71, 0.6),
        0 0 0 0 rgba(0, 255, 71, 0.5),
        inset 0 3px 0 rgba(255, 255, 255, 0.35),
        inset 0 -3px 0 rgba(0, 0, 0, 0.15);
      z-index: 999998;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      animation: togglePulse 2.5s ease-in-out infinite;
    }
    
    @keyframes togglePulse {
      0%, 100% {
        box-shadow: 
          0 10px 32px rgba(0, 255, 71, 0.6),
          0 0 0 0 rgba(0, 255, 71, 0.5),
          inset 0 3px 0 rgba(255, 255, 255, 0.35);
      }
      50% {
        box-shadow: 
          0 10px 32px rgba(0, 255, 71, 0.6),
          0 0 0 16px rgba(0, 255, 71, 0),
          inset 0 3px 0 rgba(255, 255, 255, 0.35);
      }
    }
    
    #n8n-chat-toggle:hover {
      transform: scale(1.12) rotate(8deg);
      box-shadow: 
        0 16px 40px rgba(0, 255, 71, 0.7),
        inset 0 3px 0 rgba(255, 255, 255, 0.45);
      animation: none;
    }
    
    #n8n-chat-toggle:active {
      transform: scale(0.95) rotate(-3deg);
    }
    
    /* ===== ADVANCED THINKING INDICATOR (3-DOT PULSE) ===== */
    .n8n-chat-thinking {
      display: flex;
      align-items: center;
      gap: 14px;
      color: rgba(255, 255, 255, 0.45);
      font-style: italic;
      font-size: 15px;
      font-weight: 500;
      position: relative;
    }
    
    .n8n-chat-thinking::before {
      content: '✨';
      font-style: normal;
      font-size: 20px;
      animation: thinkingSpark 1.8s ease-in-out infinite;
    }
    
    @keyframes thinkingSpark {
      0%, 100% {
        opacity: 0.4;
        transform: scale(1) rotate(0deg);
        filter: drop-shadow(0 0 4px rgba(0, 255, 71, 0.3));
      }
      50% {
        opacity: 1;
        transform: scale(1.25) rotate(15deg);
        filter: drop-shadow(0 0 12px rgba(0, 255, 71, 0.7));
      }
    }
    
    .n8n-chat-thinking::after {
      content: '';
      width: 50px;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      animation: thinkingDotsAdvanced 1.6s infinite;
    }
    
    @keyframes thinkingDotsAdvanced {
      0%, 20% {
        content: '●○○';
        color: #00ff47;
        letter-spacing: 3px;
      }
      40% {
        content: '○●○';
        color: #00e65a;
        letter-spacing: 4px;
      }
      60%, 100% {
        content: '○○●';
        color: #00d95f;
        letter-spacing: 3px;
      }
    }
    
    /* ===== FADE OUT ANIMATION ===== */
    @keyframes fadeOut {
      from {
        opacity: 1;
        transform: scale(1);
      }
      to {
        opacity: 0;
        transform: scale(0.9);
      }
    }
    
    /* ===== CODE BLOCKS IN MESSAGES ===== */
    .n8n-chat-assistant code {
      background: rgba(0, 0, 0, 0.5);
      padding: 4px 10px;
      border-radius: 8px;
      font-family: 'SF Mono', 'Monaco', 'Consolas', monospace;
      font-size: 13px;
      border: 1px solid rgba(0, 255, 71, 0.25);
      color: #00ff47;
      font-weight: 500;
      letter-spacing: -0.3px;
    }
    
    .n8n-chat-assistant strong {
      color: #00ff47;
      font-weight: 800;
      text-shadow: 0 0 8px rgba(0, 255, 71, 0.3);
    }
    
    .n8n-chat-assistant em {
      color: rgba(255, 255, 255, 0.85);
      font-style: italic;
    }
    
    /* ===== RESPONSIVE MOBILE ===== */
    @media (max-width: 520px) {
      #n8n-chat-container {
        width: calc(100vw - 32px);
        height: calc(100vh - 100px);
        bottom: 16px;
        right: 16px;
        border-radius: 20px;
      }
      
      #n8n-chat-toggle {
        width: 68px;
        height: 68px;
        bottom: 16px;
        right: 16px;
      }
      
      .n8n-chat-message {
        max-width: 92%;
      }
    }
    
    /* ===== SCROLL FADE EFFECTS ===== */
    #n8n-chat-messages::before {
      content: '';
      position: sticky;
      top: 0;
      left: 0;
      right: 0;
      height: 40px;
      background: linear-gradient(180deg, 
        rgba(12, 12, 18, 0.9) 0%, 
        transparent 100%);
      pointer-events: none;
      z-index: 1;
    }
    
    #n8n-chat-messages::after {
      content: '';
      position: sticky;
      bottom: 0;
      left: 0;
      right: 0;
      height: 40px;
      background: linear-gradient(0deg, 
        rgba(12, 12, 18, 0.9) 0%, 
        transparent 100%);
      pointer-events: none;
      z-index: 1;
    }
  `
  document.head.appendChild(style)

  const container = document.createElement("div")
  container.id = "n8n-chat-container"

  const header = document.createElement("div")
  header.id = "n8n-chat-header"
  header.innerHTML = `
    <h3>
      <span>💬</span>
      <span>n8n Chat</span>
    </h3>
    <div class="n8n-chat-header-actions">
      <button id="n8n-chat-new" class="n8n-chat-action-btn" title="Yeni Chat">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 3V13M3 8H13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
      <button id="n8n-chat-clear" class="n8n-chat-action-btn" title="Mesajları Temizle">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 4H13M5 4V3C5 2.4 5.4 2 6 2H10C10.6 2 11 2.4 11 3V4M6 7V11M10 7V11M4 4L5 13C5 13.6 5.4 14 6 14H10C10.6 14 11 13.6 11 13L12 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </button>
      <button id="n8n-chat-close" class="n8n-chat-action-btn" title="Kapat">×</button>
    </div>
  `

  const messagesArea = document.createElement("div")
  messagesArea.id = "n8n-chat-messages"

  const inputArea = document.createElement("div")
  inputArea.id = "n8n-chat-input-area"
  inputArea.innerHTML = `
    <input type="text" id="n8n-chat-input" placeholder="İş akışınız hakkında bana her şeyi sorabilirsiniz..." autocomplete="off">
    <button id="n8n-chat-send">Gönder</button>
  `

  container.appendChild(header)
  container.appendChild(messagesArea)
  container.appendChild(inputArea)
  document.body.appendChild(container)

  const closeBtn = document.getElementById("n8n-chat-close")
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      container.classList.remove("show")
      container.style.display = "none"
    })
  }

  // New Chat button - creates a fresh chat session
  const newChatBtn = document.getElementById("n8n-chat-new")
  if (newChatBtn) {
    newChatBtn.addEventListener("click", async () => {
      const confirmed = confirm("Yeni bir chat başlatmak istediğinize emin misiniz? Mevcut konuşma temizlenecek.")
      if (confirmed) {
        // Clear messages UI
        const messagesArea = document.getElementById("n8n-chat-messages")
        if (messagesArea) {
          messagesArea.innerHTML = ""
        }
        
        // Clear chat history from storage
        try {
          const key = getChatHistoryKey()
          await chrome.storage.local.remove(key)
          Logger.success("Yeni chat başlatıldı - geçmiş temizlendi")
          
          // Add welcome message
          addMessage("assistant", "👋 Merhaba! Yeni bir chat başlattınız. Size nasıl yardımcı olabilirim?")
        } catch (e) {
          Logger.error("Chat geçmişi temizlenirken hata:", e)
        }
      }
    })
  }

  // Clear Chat button - clears messages only
  const clearChatBtn = document.getElementById("n8n-chat-clear")
  if (clearChatBtn) {
    clearChatBtn.addEventListener("click", async () => {
      const confirmed = confirm("Tüm mesajları silmek istediğinize emin misiniz?")
      if (confirmed) {
        // Clear messages UI
        const messagesArea = document.getElementById("n8n-chat-messages")
        if (messagesArea) {
          messagesArea.innerHTML = ""
        }
        
        // Clear chat history from storage
        try {
          const key = getChatHistoryKey()
          await chrome.storage.local.remove(key)
          Logger.success("Chat geçmişi temizlendi")
        } catch (e) {
          Logger.error("Chat geçmişi temizlenirken hata:", e)
        }
      }
    })
  }

  const sendBtn = document.getElementById("n8n-chat-send")
  if (sendBtn) {
    sendBtn.addEventListener("click", handleSendMessage)
  }

  const input = document.getElementById("n8n-chat-input")
  if (input) {
    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault()
        handleSendMessage()
      }
    })
  }

  const chatButton = document.createElement("button")
  chatButton.id = "n8n-chat-toggle"
  chatButton.textContent = "💬"
  chatButton.title = "n8n Chat'i Aç"
  chatButton.addEventListener("click", () => {
    const isVisible = container.classList.contains("show") || container.style.display === "flex"
    if (isVisible) {
      container.classList.remove("show")
      container.style.display = "none"
    } else {
      container.classList.add("show")
      container.style.display = "flex"
      input?.focus()
    }
  })
  document.body.appendChild(chatButton)
  
  // Restore chat history from session storage
  await restoreChatHistory()
}

// Handle send message
async function handleSendMessage() {
  const input = document.getElementById("n8n-chat-input")
  const sendBtn = document.getElementById("n8n-chat-send")
  if (!input) return
  
  const message = input.value.trim()
  if (!message) return

  // Disable input and button
  input.disabled = true
  if (sendBtn) sendBtn.disabled = true

  addMessage("user", message)
  input.value = ""
  
  // Show thinking indicator
  showThinking()

  const settings = await getSettings()
  // NOTE: We DO NOT send apiKeys to background for security. 
  // Background script will read them securely from storage.
  const effectiveSettings = { ...settings }
  
  // ============================================================================
  // DYNAMIC MAX TOKENS CALCULATION (Smart Token Allocation)
  // ============================================================================
  
  /**
   * Calculate optimal max_tokens based on:
   * - GUARANTEE COMPLETE RESPONSES (top priority!)
   * - User message length
   * - Workflow context size
   * - Model capabilities
   * - Request type (analysis/generation/default)
   * 
   * PHILOSOPHY: Be GENEROUS, not conservative. Better to use more tokens
   * than to cut responses in half!
   */
  const calculateOptimalMaxTokens = (message, hasWorkflowContext, requestType, model) => {
    // Estimate input tokens (rough: 1 token ≈ 4 characters)
    const messageTokens = Math.ceil(message.length / 4);
    let estimatedInputTokens = messageTokens;
    
    // Add workflow context estimation (be accurate!)
    if (hasWorkflowContext) {
      estimatedInputTokens += 2000; // Generous estimate for workflow context
    }
    
    // Add system prompt overhead
    estimatedInputTokens += 500; // System prompts, tool definitions, etc.
    
    // Model-specific MAXIMUM limits (use these aggressively!)
    const modelLimits = {
      // Gemini models (generous output capability)
      'gemini-2.5-pro': 16384,
      'gemini-2.5-flash': 16384,
      'gemini-1.5-pro': 16384,
      'gemini-1.5-flash': 16384,
      
      // OpenAI models
      'gpt-4o': 16384,
      'gpt-4o-mini': 16384,
      'gpt-4-turbo': 16384,
      'o3': 16384,
      'o4-mini': 16384,
      
      // Claude models
      'claude-opus-4-5': 16384,
      'claude-sonnet-4-5': 16384,
      'claude-haiku-4-5': 8192,
      'claude-3-5': 8192,
      
      // DeepSeek models
      'deepseek-chat': 16384,
      'deepseek-reasoner': 32768,
      
      // Groq/Llama models
      'llama': 8192,
      'mixtral': 32768,
      
      // Default for unknown models
      'default': 8192
    };
    
    // Get model limit (be generous with default!)
    let modelLimit = 8192; // Generous default
    if (model) {
      const modelLower = model.toLowerCase();
      for (const [key, limit] of Object.entries(modelLimits)) {
        if (modelLower.includes(key.toLowerCase().replace(/-/g, ''))) {
          modelLimit = limit;
          break;
        }
      }
    }
    
    // ============================================================================
    // STRATEGY: GUARANTEE MINIMUM OUTPUT BUFFER
    // ============================================================================
    
    // Minimum guaranteed output space based on request type
    let minOutputBuffer;
    if (requestType === 'analysis') {
      minOutputBuffer = 6144; // Analysis needs structured, detailed output
    } else if (requestType === 'generation') {
      minOutputBuffer = 8192; // Blueprint generation needs space
    } else {
      minOutputBuffer = 4096; // Default: always allow substantial response
    }
    
    // If message is long/complex, increase buffer even more
    if (messageTokens > 200) {
      minOutputBuffer = Math.max(minOutputBuffer, 8192);
    }
    if (messageTokens > 500) {
      minOutputBuffer = Math.max(minOutputBuffer, 12288);
    }
    
    // Calculate total needed: input + guaranteed output
    const totalNeeded = estimatedInputTokens + minOutputBuffer;
    
    // Use as much as possible, up to model limit
    let optimalTokens;
    if (totalNeeded > modelLimit) {
      // If we exceed model limit, use maximum and warn
      optimalTokens = modelLimit;
      Logger.warn(`⚠️ Token demand (${totalNeeded}) exceeds model limit (${modelLimit}). Using maximum available.`);
    } else {
      // Use 90% of model limit or totalNeeded, whichever is higher
      // This ensures we're generous but don't waste tokens
      optimalTokens = Math.max(totalNeeded, Math.floor(modelLimit * 0.75));
    }
    
    // NEVER go below 4096 for output (absolute minimum safety)
    optimalTokens = Math.max(optimalTokens, 4096);
    
    // Log detailed calculation
    Logger.log(`📊 Smart Token Allocation:
      - Input estimate: ${estimatedInputTokens} tokens
      - Output buffer: ${minOutputBuffer} tokens
      - Total needed: ${totalNeeded} tokens
      - Model limit: ${modelLimit} tokens
      - Allocated: ${optimalTokens} tokens ✅
      - Request type: ${requestType || 'default'}`);
    
    return optimalTokens;
  };
  
  // Determine request type for token calculation
  const lowerMsg = message.toLowerCase();
  const isAnalysisRequest = lowerMsg.includes("analy") || lowerMsg.includes("analiz") || lowerMsg.includes("review");
  
  // TWO DISTINCT INTENTS:
  // 1. CREATION REQUEST = User wants to CREATE/BUILD actual nodes (ACTION MODE)
  const isCreationRequest = (
    (lowerMsg.includes("oluştur") || lowerMsg.includes("yap") || lowerMsg.includes("kur") || 
     lowerMsg.includes("ekle") || lowerMsg.includes("create") || lowerMsg.includes("build") ||
     lowerMsg.includes("add")) &&
    // Exclude planning keywords
    !(lowerMsg.includes("plan") || lowerMsg.includes("tasarla") || lowerMsg.includes("design") || 
      lowerMsg.includes("blueprint") || lowerMsg.includes("öneri"))
  );
  
  // 2. GENERATION REQUEST = User wants a PLAN/BLUEPRINT only (PLANNING MODE)
  const isGenerationRequest = !isCreationRequest && (
    lowerMsg.includes("plan") || lowerMsg.includes("tasarla") || lowerMsg.includes("design") || 
    lowerMsg.includes("blueprint") || lowerMsg.includes("öneri") || lowerMsg.includes("suggest") ||
    lowerMsg.includes("generat")
  );
  
  const requestType = isAnalysisRequest ? 'analysis' : (isCreationRequest ? 'creation' : (isGenerationRequest ? 'generation' : null));
  
  // Calculate optimal max tokens (GENEROUS allocation to prevent truncation)
  const optimalMaxTokens = calculateOptimalMaxTokens(
    message,
    effectiveSettings.includeWorkflowContext !== false,
    requestType,
    effectiveSettings.model
  );
  
  // ALWAYS use calculated tokens (ignore user's conservative setting)
  // We know better - we guarantee complete responses!
  effectiveSettings.maxTokens = optimalMaxTokens;
  
  Logger.success(`✅ Final max_tokens: ${effectiveSettings.maxTokens} (GUARANTEED COMPLETE RESPONSE)`);
  
  // Just check if key exists for UI feedback (optional, but good UX)
  const apiKeys = settings.apiKeys || {}
  const hasKey = apiKeys[settings.provider] || settings.apiKey
  
  if (!hasKey && settings.provider !== "local") {
     // We verify validity in background, but basic empty check here is fine
  }

  let portName = "geminiStream"
  if (effectiveSettings.provider === "google") portName = "geminiStream"
  else if (effectiveSettings.provider === "openai") portName = "openaiStream"
  else if (effectiveSettings.provider === "anthropic") portName = "anthropicStream"
  else if (effectiveSettings.provider === "deepseek") portName = "deepseekStream"
  else if (effectiveSettings.provider === "openrouter") portName = "openrouterStream"
  else if (effectiveSettings.provider === "groq") portName = "groqStream"
  else if (effectiveSettings.provider === "cohere") portName = "cohereStream"
  else if (effectiveSettings.provider === "huggingface") portName = "huggingfaceStream"
  else if (effectiveSettings.provider === "local") portName = "localLlmStream"

  // Check extension context before connecting
  if (!chrome.runtime || !chrome.runtime.id) {
    hideThinking()
    addMessage("assistant", "Hata: Extension context invalidated. Lütfen sayfayı yenileyin (F5).")
    input.disabled = false
    if (sendBtn) sendBtn.disabled = false
    return
  }
  
  const port = chrome.runtime.connect({ name: portName })
  const requestId = `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`

  // 🐛 DEBUG API: Log user input
  const operationId = debugAPI.logUserInput(message, {
    provider: effectiveSettings.provider,
    model: effectiveSettings.model,
    isCreation: isCreationRequest,
    isAnalysis: isAnalysisRequest,
    isGeneration: isGenerationRequest
  });

  const messages = []
  
  // Note: isAnalysisRequest, isCreationRequest, and isGenerationRequest already defined above
  
  if (effectiveSettings.customInstructions) {
    messages.push({
      role: "system",
      content: effectiveSettings.customInstructions,
    })
  }

  // Inject Architect Mode instructions (CREATION, ANALYSIS, GENERATION, or DEFAULT)
  if (isCreationRequest) {
    // CREATION MODE: Direct workflow manipulation (ACTION MODE)
    messages.push({
      role: "system",
      content: `SYSTEM ROLE:
You are a SENIOR n8n Automation Architect and Agentic Workflow Engineer (2026 standard).

You operate directly on the n8n canvas and ONLY create REAL, EXECUTABLE workflows.
You do NOT plan, describe, or pseudo-design workflows — you BUILD them.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 PRIMARY OBJECTIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Create, modify, and validate ACTUAL n8n workflows by:
- Creating real nodes on the canvas
- Connecting them correctly
- Positioning them cleanly
- Validating the final workflow

You behave like an IDE-integrated AI (Cursor / Copilot-style), not a chatbot.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔄 AGENTIC MULTI-STEP EXECUTION (ABSOLUTE RULE)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
You are ALWAYS in MULTI-STEP EXECUTION MODE.

For ANY non-trivial request, you MUST:
1. Execute the FIRST required action (e.g. get_workflow_info)
2. Read the result
3. IMMEDIATELY continue to the next required step
4. NEVER stop after a single function call
5. Continue until the workflow is 100% COMPLETE and VALIDATED
6. Only stop when NO further actions are required

Think exactly like:
"I completed step 1 → now I execute step 2 → now step 3 → ... until done."

🚫 Stopping early is a CRITICAL FAILURE.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🧠 EXECUTION EXAMPLE (MANDATORY BEHAVIOR)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
User: "Replace Google Sheets with Supabase"

You MUST:
- Step 1: get_workflow_info
- Step 2: bulk_delete_nodes (Google Sheets)
- Step 3: bulk_create_nodes (Supabase)
- Step 4: add_connection (re-wire logic)
- Step 5: auto_position_node OR fit_view_to_workflow
- Step 6: validate_workflow
- Step 7: Confirm completion

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔗 CONNECTION MANAGEMENT (ULTRA-CRITICAL)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EVERY created node MUST be connected.

Rules:
- After create_node or bulk_create_nodes → IMMEDIATELY call add_connection
- NEVER leave floating or orphan nodes
- Use EXACT node names returned by creation functions
- Logical flow is MANDATORY:
  Trigger → Processing → AI / Logic → Storage / Output
- If a node has multiple outputs, connect ALL relevant paths

🚫 An unconnected node = broken workflow = FAILURE.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️ HARD CONSTRAINTS (NO EXCEPTIONS)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- DO NOT use generate_workflow_blueprint
- DO NOT describe workflows in text instead of building them
- ALWAYS use create_node or bulk_create_nodes
- ALWAYS connect nodes with add_connection
- ALWAYS clean layout (auto_position_node or fit_view_to_workflow)
- ALWAYS validate with validate_workflow
- NEVER stop mid-process

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🏗️ WORKFLOW CREATION PIPELINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Analyze user intent
2. Resolve correct node types (2026-compatible)
3. Create ALL required nodes (bulk_create_nodes preferred)
4. Connect ALL nodes immediately
5. Clean and align canvas
6. Validate workflow
7. Confirm success

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 NODE SELECTION PRIORITY (STRICT)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ALWAYS use OFFICIAL / DEDICATED nodes.
HTTP Request is LAST RESORT ONLY.

Examples:
- "OpenAI" → @n8n/n8n-nodes-langchain.openAi OR lmChatOpenAi
- "AI Agent" → @n8n/n8n-nodes-langchain.agent
- "Supabase" → n8n-nodes-base.supabase
- "Telegram" → n8n-nodes-base.telegram
- "Google Sheets" → n8n-nodes-base.googleSheets
- "PostgreSQL" → n8n-nodes-base.postgres
- "MySQL" → n8n-nodes-base.mySql

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🧠 AI / LANGCHAIN (2026 STANDARD)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Preferred nodes:
- @n8n/n8n-nodes-langchain.agent
- @n8n/n8n-nodes-langchain.openAi
- @n8n/n8n-nodes-langchain.lmChatOpenAi
- @n8n/n8n-nodes-langchain.lmChatGoogleGemini
- @n8n/n8n-nodes-langchain.lmChatAnthropic
- @n8n/n8n-nodes-langchain.chainSummarization

Agent workflows MUST:
- Have memory if needed
- Be connected to tools (DB, HTTP, Telegram, etc.)
- Be deterministic unless user requests creativity

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗄️ DATA & DATABASE NODES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- n8n-nodes-base.supabase
- n8n-nodes-base.postgres
- n8n-nodes-base.mySql
- n8n-nodes-base.mongoDb
- n8n-nodes-base.redis

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📡 TRIGGERS (ENTRY POINTS)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- n8n-nodes-base.start
- n8n-nodes-base.webhook
- n8n-nodes-base.scheduleTrigger
- n8n-nodes-base.telegramTrigger

EVERY workflow MUST have a trigger.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🧰 CORE UTILITY NODES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- n8n-nodes-base.if
- n8n-nodes-base.switch
- n8n-nodes-base.merge
- n8n-nodes-base.wait
- n8n-nodes-base.set
- n8n-nodes-base.code
- n8n-nodes-base.itemLists
- n8n-nodes-base.splitInBatches

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🌍 LANGUAGE RULE (ABSOLUTE)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
You MUST respond in the SAME language as the user's LAST message.

- Turkish → Turkish
- English → English
- Spanish → Spanish

NO language switching.
Applies to confirmations, errors, and logs.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🧠 FINAL REMINDER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
You are NOT a planner.
You are NOT a tutorial.
You are a WORKFLOW EXECUTION ENGINE.

BUILD.
CONNECT.
VALIDATE.
FINISH.`
    })
  } else if (isAnalysisRequest) {
    messages.push({
      role: "system",
      content: `SYSTEM ROLE:
You are a SENIOR n8n Workflow Architect, Automation Auditor, and Self-Healing Systems Engineer (2026 standard).

You specialize in reviewing, validating, and correcting NORMALIZED n8n workflow JSON structures.
You operate with production-grade rigor and deterministic logic.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 CORE OBJECTIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Analyze provided n8n workflow JSON and produce a structured audit covering:

1. Architecture & design issues
2. Performance and scalability risks
3. Security and credential handling flaws
4. Logical and data-flow mistakes
5. Concrete improvement suggestions

If issues are detected that can be safely corrected:
👉 You MUST automatically APPLY FIXES, not just report them.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔄 AGENTIC AUTO-FIX MODE (CRITICAL)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
You operate in ANALYZE → FIX → VERIFY mode.

When a problem is found:
1. Identify the exact root cause (node, connection, or config level)
2. Decide if a SAFE and MINIMAL fix is possible
3. Apply the fix directly (node-level or connection-level)
4. Re-evaluate the workflow after the fix
5. Confirm whether the issue is fully resolved

🚫 Do NOT stop at analysis if a deterministic fix exists.
🚫 Do NOT suggest fixes you could have applied yourself.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🧠 ANALYSIS SCOPE (STRICT)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
You may analyze ONLY what is explicitly present in the provided workflow JSON.

Rules:
- Never hallucinate node properties
- Never assume credentials, environment variables, or secrets
- Never invent missing nodes or configurations
- Never infer intent beyond observable logic

If data is missing → explicitly mark as "Not verifiable from provided JSON".

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🧱 ARCHITECTURE REVIEW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Check for:
- Missing or invalid triggers
- Improper node ordering
- Tight coupling where loose coupling is preferable
- Overuse of generic nodes (HTTP Request vs dedicated nodes)
- Missing error-handling or fallback paths
- Broken or ambiguous branching logic

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚡ PERFORMANCE & SCALABILITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Evaluate:
- Inefficient loops (Item Lists / SplitInBatches misuse)
- Missing batching or pagination
- Excessive sequential execution where parallelism is possible
- Redundant data transformations
- AI / LLM overuse or unnecessary repeated calls

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔐 SECURITY & SAFETY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Audit for:
- Unsafe credential exposure
- Tokens or secrets passed in plain text
- Webhook endpoints lacking validation
- Missing rate limiting or throttling
- Over-privileged integrations
- Risky dynamic code execution

Only flag issues provable from the JSON.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🧠 LOGIC & DATA FLOW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Detect:
- Unreachable nodes
- Floating or orphan nodes
- Broken connections
- Incorrect condition logic (IF / Switch)
- Data schema mismatches between nodes
- Silent failures or swallowed errors

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🛠️ FIXING RULES (VERY IMPORTANT)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Prefer MINIMAL and LOCAL changes
- Do NOT rewrite entire workflows unless absolutely required
- Do NOT refactor for style unless it fixes a real issue
- Preserve original intent and structure
- Clearly distinguish between:
  • Applied fixes
  • Suggested (optional) improvements

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 OUTPUT FORMAT (MANDATORY)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Always respond in this structure:

1️⃣ Summary (high-level health status)
2️⃣ Detected Issues (grouped by category)
3️⃣ Applied Fixes (exactly what was changed and why)
4️⃣ Remaining Risks (if any)
5️⃣ Improvement Suggestions (optional, non-breaking)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🌍 LANGUAGE CONSISTENCY (ABSOLUTE)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
You MUST respond in the SAME language as the user's last message.

- English → English
- Turkish → Turkish
- Spanish → Spanish

NO language switching.
Applies to all sections, including technical terms and warnings.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🧠 FINAL PRINCIPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
You are not a passive reviewer.
You are a PROACTIVE, SELF-CORRECTING workflow auditor.

If it can be fixed safely → FIX IT.
If it cannot → EXPLAIN WHY, precisely.`
    });
  } else if (isGenerationRequest) {
    messages.push({
      role: "system",
      content: `SYSTEM ROLE:
You are a SENIOR n8n Workflow Architect, Blueprint Designer, and Pre-Implementation Systems Planner (2026 standard).

You specialize in converting USER INTENT into CLEAN, MAINTAINABLE, and IMPLEMENTATION-READY workflow blueprints.
You design for production, not demos.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 PRIMARY OBJECTIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Generate HIGH-LEVEL n8n workflow BLUEPRINTS that are:

- Deterministic
- Maintainable
- Implementation-ready
- Fully aligned with real n8n node capabilities

Blueprints must be clear enough to be directly converted into real workflows without reinterpretation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔄 AGENTIC MODE – BLUEPRINT → BUILD SWITCH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
You operate in TWO MODES:

🧠 BLUEPRINT MODE (default)
🛠️ CREATION MODE (automatic switch)

Flow:
1. Generate a blueprint using generate_workflow_blueprint
2. If the user explicitly asks for:
   - “uygula”
   - “oluştur”
   - “workflow’u kur”
   - “bunu n8n’de yap”
   → AUTOMATICALLY switch to CREATION MODE
3. Then execute:
   Blueprint → Node Creation → Connections → Layout → Done

🚫 Do NOT ask for confirmation to switch modes.
🚫 Do NOT partially implement a blueprint.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📐 BLUEPRINT OUTPUT REQUIREMENTS (MANDATORY)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Every blueprint MUST include ALL of the following sections:

1️⃣ High-Level Execution Steps  
   - Numbered
   - Ordered
   - Human-readable but precise

2️⃣ Proposed n8n Nodes  
   - Use REAL, VALID n8n node types
   - Example: n8n-nodes-base.httpRequest
   - Example: n8n-nodes-base.supabase
   - Example: @n8n/n8n-nodes-langchain.agent
   - Each node MUST include its purpose

3️⃣ Connection Map  
   - Explicit source → target mapping
   - Include branching (IF / Switch) where applicable
   - Define error paths if relevant

4️⃣ Workflow Logic Explanation  
   - Step-by-step explanation of data flow
   - Explain decisions, conditions, and outputs
   - Mention edge cases and failure scenarios

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 NODE SELECTION RULES (STRICT)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- ALWAYS prefer DEDICATED nodes over HTTP Request
- HTTP Request is allowed ONLY if no official node exists
- Use 2026-compatible nodes only
- Do NOT invent nodes or properties

Examples:
- OpenAI → @n8n/n8n-nodes-langchain.openAi / lmChatOpenAi
- AI Agent → @n8n/n8n-nodes-langchain.agent
- Supabase → n8n-nodes-base.supabase
- Telegram → n8n-nodes-base.telegram
- Google Sheets → n8n-nodes-base.googleSheets

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️ ERROR HANDLING & EDGE CASES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Blueprints MUST consider:
- API failures
- Empty or malformed data
- Rate limits
- Conditional branching for invalid states
- Retry or fallback logic (conceptual, not implementation)

Do NOT over-engineer — keep solutions minimal and robust.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🧱 DESIGN PRINCIPLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Keep blueprints SIMPLE and MODULAR
- Avoid unnecessary nodes
- Prefer linear flows unless branching is required
- Design for future extension (but don’t implement it yet)
- Assume production usage, not toy examples

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🧠 HALLUCINATION SAFETY RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- NEVER invent node parameters
- NEVER assume credentials or secrets
- NEVER reference workflow state not defined by the user
- If something is ambiguous → state assumptions clearly

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🛠️ FUNCTION USAGE (MANDATORY)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- ALWAYS use the generate_workflow_blueprint function
- NEVER output a blueprint only as free text
- The function output is the SOURCE OF TRUTH

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🌍 LANGUAGE CONSISTENCY (ABSOLUTE)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
You MUST respond in the SAME language as the user's last message.

- Turkish → Turkish
- English → English
- Spanish → Spanish

NO language switching.
Applies to blueprint content, explanations, and labels.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🧠 FINAL REMINDER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
You are NOT implementing yet.
You are designing with INTENT TO IMPLEMENT.

Every blueprint you generate must be:
✔ Realistic
✔ Actionable
✔ n8n-native
✔ Ready for agentic execution`
    });
  } else {
    // Default Architect Prompt (Enhanced with connection & language consistency)
    messages.push({
      role: "system",
      content: `
SYSTEM ROLE:
You are a CHIEF Automation Architect specializing in n8n,
with 30+ years of experience designing enterprise-grade,
AI-powered, scalable, and reusable automation systems (2026 standard).

You operate at ARCHITECTURE level, not task level.
Your output quality must MATCH or EXCEED official n8n Template Marketplace standards.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 PRIMARY MISSION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Design, evaluate, and implement PRODUCTION-READY n8n automation architectures that are:

- Visually clean
- Logically deterministic
- Horizontally scalable
- Easily reusable
- Instantly understandable by other engineers

You do NOT build “simple workflows”.
You build SYSTEMS composed of workflows.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔄 AGENTIC MULTI-STEP EXECUTION (ABSOLUTE RULE)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
When a task requires multiple steps, you MUST:

1. Execute the first required action
2. Read and understand the result
3. Immediately continue to the next action
4. Repeat until the task is 100% complete
5. Stop ONLY when no further actions are required

Think like an IDE-integrated agent (Cursor-style):
“I finished step 1 → now step 2 → now step 3…”

🚫 Never stop after a single function call  
🚫 Never ask “Should I continue?”  

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🏗️ CORE DESIGN PRINCIPLES (NON-NEGOTIABLE)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Visual clarity is MANDATORY
- Any engineer must understand the workflow in under **5 seconds**
- Execution correctness AND visual elegance carry equal weight
- Every node MUST have:
  • Clear purpose
  • Meaningful name
  • Logical placement
- No node exists without CONTEXT
- No workflow exists without STRUCTURE

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🧠 ARCHITECTURAL THINKING MODEL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
You think in:
- Entry points (Triggers)
- Control flow
- Data contracts
- Responsibility boundaries
- Failure domains
- Reusability units (sub-workflows / patterns)

You actively AVOID:
- God-workflows
- Overloaded nodes
- Visual spaghetti
- Implicit logic
- Hidden assumptions

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 NODE SELECTION PRIORITY (STRICT & ENFORCED)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ALWAYS use DEDICATED service nodes.
HTTP Request is a LAST RESORT.

Mandatory mappings:
- “OpenAI / AI / summarize” → 
  @n8n/n8n-nodes-langchain.openAi
  @n8n/n8n-nodes-langchain.chainSummarization
- “AI Agent” → @n8n/n8n-nodes-langchain.agent
- “Supabase” → n8n-nodes-base.supabase
- “Telegram” → n8n-nodes-base.telegram
- “Google Sheets” → n8n-nodes-base.googleSheets
- “PostgreSQL” → n8n-nodes-base.postgres

🚫 Using httpRequest when a dedicated node exists is a DESIGN FAILURE.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔗 CONNECTION MANAGEMENT (ULTRA-CRITICAL)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
When creating nodes:

- EVERY node MUST be connected
- IMMEDIATELY connect after create_node / bulk_create_nodes
- Use EXACT node names returned by creation functions
- Respect logical order:
  Trigger → Processing → AI / Logic → Storage / Output
- NO floating nodes
- NO ambiguous branches
- NO silent dead ends

A disconnected node = BROKEN ARCHITECTURE.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🧩 REUSABILITY & SCALE RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Design workflows so that:
- Logic can be extracted into sub-workflows
- Components can be reused across projects
- One workflow = one responsibility
- Naming conventions allow instant scanning

Prefer:
- Modular patterns
- Clear boundaries
- Predictable data shapes

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🖼️ VISUAL LAYOUT STANDARDS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Left → Right execution flow
- Even spacing between nodes
- Parallel branches visually aligned
- Group related logic visually
- Final canvas must look “presentation-ready”

If it looks messy → it IS messy.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🌍 LANGUAGE CONSISTENCY (ABSOLUTE)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
You MUST respond in the SAME language as the user's last message.

- Turkish → Turkish
- English → English
- Spanish → Spanish

NO language switching.
Applies to:
- Architecture explanations
- Node names (where applicable)
- Errors
- Confirmations

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🧠 FINAL ARCHITECT PRINCIPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
You are the FINAL QUALITY GATE.

If a workflow is:
✔ Clear  
✔ Correct  
✔ Scalable  
✔ Reusable  
✔ Visually elegant  

— then and ONLY then it is acceptable.

Otherwise: redesign it.`
    });
  }

  
  if (effectiveSettings.includeWorkflowContext !== false) {
    try {
      // Use Normalized JSON for analysis/generation/creation, Regular context otherwise
      const format = (isAnalysisRequest || isGenerationRequest || isCreationRequest) ? 'normalized' : 'ai';
      
      const result = await callInjected('get_workflow_info', { 
        format: format,
        includeNodes: true,
        includeConnections: true
      });
      
      const workflowContext = result.data;

      if (workflowContext && (typeof workflowContext === 'object' || workflowContext !== "No workflow is currently open.")) {
        
        if (isAnalysisRequest) {
           messages.push({
            role: "user",
            content: `SYSTEM ROLE:
You are a SENIOR n8n Workflow Static Analyzer and Automation Auditor (2026 standard).

You specialize in DEEP, DETERMINISTIC analysis of NORMALIZED n8n workflow JSON.
You do NOT explain in prose.
You do NOT speculate.
You return STRUCTURED RESULTS via FUNCTION CALLS ONLY.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 PRIMARY OBJECTIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Analyze the provided normalized n8n workflow and DETECT:

- Broken or unreachable execution paths
- Infinite or unbounded loops
- Missing or insufficient error handling
- Performance bottlenecks
- Bad or risky node usage patterns

You are an ANALYZER, not a builder.
You do NOT modify workflows unless explicitly instructed elsewhere.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔍 ANALYSIS SCOPE (STRICT & ENFORCED)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
You may analyze ONLY what is explicitly present in the provided workflow JSON.

Rules:
- NEVER hallucinate node properties
- NEVER assume credentials, secrets, or runtime data
- NEVER infer intent beyond observable structure
- NEVER invent missing connections or configurations

If something cannot be proven from JSON → mark it as "Not verifiable".

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🧠 ANALYSIS DIMENSIONS (MANDATORY)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
You MUST evaluate the workflow across ALL of the following axes:

1️⃣ Broken Execution Paths  
- Orphan nodes
- Unreachable branches
- Dead-end nodes
- Conditional paths with no exit

2️⃣ Infinite / Dangerous Loops  
- Cycles without termination conditions
- Item Lists / SplitInBatches without bounds
- Recursive sub-workflow calls
- Webhook → self-trigger patterns

3️⃣ Error Handling Gaps  
- Missing error outputs
- Failed execution paths not handled
- External API calls without fallback
- Silent failures

4️⃣ Performance Bottlenecks  
- Sequential processing where batching is required
- Missing pagination or chunking
- Redundant node execution
- Unnecessary repeated AI / API calls

5️⃣ Bad Node Usage Patterns  
- Overuse of generic nodes (httpRequest)
- Logic embedded in Code nodes unnecessarily
- Oversized “god nodes”
- Mixed responsibilities in single nodes

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📤 OUTPUT CONSTRAINT (ABSOLUTE)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
You MUST return ONLY a FUNCTION CALL.

🚫 Do NOT include:
- Natural language explanations
- Markdown
- Headings
- Commentary
- Suggestions outside structured output

If NO issues are found:
→ Return a function call indicating a clean analysis result.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🧩 OUTPUT STRUCTURE (LOGICAL REQUIREMENT)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
The function call payload MUST contain structured sections for:

- broken_paths
- infinite_loops
- error_handling_gaps
- performance_issues
- bad_node_patterns

Each finding MUST reference:
- Node name
- Node ID (if present)
- Exact reason
- Evidence from workflow structure

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🌍 LANGUAGE CONSISTENCY (ABSOLUTE)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
The function call content MUST match the language of the user's last message.

- English → English
- Turkish → Turkish
- Spanish → Spanish

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🧠 FINAL ANALYZER PRINCIPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
You are a STATIC ANALYSIS ENGINE.

If it is provable → report it.
If it is not provable → omit it.
If nothing is wrong → say so via FUNCTION CALL.

Silence outside the function call is CORRECT behavior.

WORKFLOW_JSON:
${JSON.stringify(workflowContext, null, 2)}`
          });
          // Note: User message is implicitly handled by the context injection in this specific flow
        } else if (isCreationRequest) {
          messages.push({
            role: "user",
            content: `CREATE actual workflow nodes based on the user's request.

EXISTING WORKFLOW CONTEXT:
${JSON.stringify(workflowContext, null, 2)}

INSTRUCTIONS:
1. Use bulk_create_nodes to create multiple nodes at once
2. Each node needs: name, type (e.g., "n8n-nodes-base.telegram"), position {x, y}, parameters
3. After creating nodes, use auto_position_node or fit_view_to_workflow for layout
4. DO NOT use generate_workflow_blueprint - CREATE actual nodes!

User's request will follow.`
          });
        } else if (isGenerationRequest) {
          messages.push({
            role: "user",
            content: `Generate a workflow blueprint based on the user's request.

EXISTING WORKFLOW CONTEXT (for reference):
${JSON.stringify(workflowContext, null, 2)}

Use this context to understand the current workflow structure if needed, but focus on the user's new request.

Return ONLY the generate_workflow_blueprint function call with a complete plan.`
          });
          // but we still append the user's specific question/comment below
        } else {
           messages.push({
            role: "system",
            content: `Current workflow context:\n${workflowContext}`,
          })
        }
      }
    } catch (e) {
      console.error("[n8nChat] Error getting workflow context:", e)
    }
  }
  
  // Add user message (always for creation/generation, conditionally for analysis)
  if (isCreationRequest || isGenerationRequest || !isAnalysisRequest || (message.length > 20)) {
      messages.push({ role: "user", content: message })
  }

  const tools = getFunctionsForAI(effectiveSettings)
  
  // Add Analysis Tool if request is analysis
  if (isAnalysisRequest) {
    tools.push({
      type: "function",
      function: {
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
    });
  }
  
  // Add Blueprint Generation Tool if request is generation
  if (isGenerationRequest) {
    tools.push({
      type: "function",
      function: {
        name: "generate_workflow_blueprint",
        description: "Generate a workflow blueprint plan from user intent",
        parameters: {
          type: "object",
          properties: {
            steps: {
              type: "array",
              items: { type: "string" },
              description: "High-level execution steps"
            },
            nodes: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  name: { type: "string" },
                  type: { type: "string", description: "n8n node type (e.g., n8n-nodes-base.httpRequest)" },
                  purpose: { type: "string" }
                },
                required: ["name", "type", "purpose"]
              }
            },
            connections: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  from: { type: "string" },
                  to: { type: "string" },
                  type: { type: "string", enum: ["main", "ai_tool"] }
                },
                required: ["from", "to"]
              }
            },
            explanation: { type: "string" }
          },
          required: ["steps", "nodes", "connections", "explanation"]
        }
      }
    });
  }
  const supportsFunctionCalling = ["google", "openai", "anthropic", "deepseek", "openrouter", "groq"].includes(effectiveSettings.provider)

  let requestBody = {}
  
  if (effectiveSettings.provider === "google") {
    requestBody = {
      // apiKey: secure handling in background
      requestId,
      streamOptions: {
        model: effectiveSettings.model,
        input: messages,
        temperature: effectiveSettings.temperature,
        max_output_tokens: effectiveSettings.maxTokens,
        top_p: effectiveSettings.topP,
        tools: supportsFunctionCalling && tools.length > 0 ? tools : undefined,
        thinking: effectiveSettings.thinkingMode || undefined,
      },
    }
  } else if (effectiveSettings.provider === "local") {
    requestBody = {
      apiUrl: effectiveSettings.apiUrl,
      model: effectiveSettings.model,
      messages: messages,
      requestId,
      config: {
        maxTokens: effectiveSettings.maxTokens,
        temperature: effectiveSettings.temperature,
        topP: effectiveSettings.topP,
      },
    }
  } else {
    requestBody = {
      // apiKey: secure handling in background
      model: effectiveSettings.model,
      messages: messages,
      requestId,
      config: {
        maxTokens: effectiveSettings.maxTokens,
        temperature: effectiveSettings.temperature,
        topP: effectiveSettings.topP,
      },
      tools: supportsFunctionCalling && tools.length > 0 ? tools : undefined,
      thinkingMode: effectiveSettings.thinkingMode || undefined,
      reasoningEffort: effectiveSettings.thinkingMode ? "high" : undefined,
    }
  }

  port.postMessage({ body: requestBody })

  let fullResponse = ""
  let functionCallCount = 0 // Track function calls for agentic loop
  let conversationHistory = [...messages] // Track full conversation for continuation
  
  // Timeout safety
  const safetyTimeout = setTimeout(() => {
    if (!fullResponse && document.getElementById("n8n-chat-thinking")) {
      removeThinking()
      addMessage("assistant", "⚠️ Yanıt alınamadı. Lütfen API anahtarınızı kontrol edin veya tekrar deneyin.")
      if (input) input.disabled = false
      if (sendBtn) sendBtn.disabled = false
    }
  }, 45000) // 45 seconds timeout

  // AGENTIC LOOP: Continue conversation after function execution
  const continueAgenticLoop = async (functionResult, functionName) => {
    try {
      Logger.info(`🔄 Agentic Loop: Continuing after ${functionName}...`)
      
      // ✅ FIX: Show thinking indicator for continuation
      showThinking()
      
      // Add function result to conversation history (provider-aware format)
      let resultMessage = typeof functionResult === 'string' ? functionResult : JSON.stringify(functionResult, null, 2)
      
      // 🔥 SMART CONTINUATION: Add context-aware guidance after specific functions
      if (functionName === 'create_node' || functionName === 'bulk_create_nodes') {
        // After node creation, remind AI to connect them
        try {
          const parsedResult = typeof functionResult === 'string' ? JSON.parse(functionResult) : functionResult;
          if (parsedResult.success && parsedResult.data) {
            const createdNodes = Array.isArray(parsedResult.data) ? parsedResult.data : [parsedResult.data];
            const nodeNames = createdNodes.map(n => n.name || n.nodeName || 'Unknown').join(', ');
            resultMessage += `\n\n🔗 NEXT STEP: You created nodes: ${nodeNames}. Now you MUST connect them to the workflow using add_connection. Find the appropriate source nodes from the workflow and connect these new nodes.`;
          }
        } catch (e) {
          // If parsing fails, add generic reminder
          resultMessage += `\n\n🔗 REMINDER: Now connect the newly created nodes to the workflow using add_connection.`;
        }
      } else if (functionName === 'remove_node' || functionName === 'bulk_delete_nodes') {
        // After node deletion, remind AI to verify workflow integrity
        resultMessage += `\n\n✅ NEXT STEP: Verify that the workflow connections are still intact after deletion.`;
      } else if (functionName === 'get_workflow_info') {
        // After getting workflow info, provide clear next step guidance
        resultMessage += `\n\n📋 NEXT STEP: Based on this workflow information, proceed with the user's request. If creating nodes, use bulk_create_nodes. If analyzing, provide insights. If modifying, identify what needs to change.`;
      }
      
      // OpenAI/Anthropic/DeepSeek/OpenRouter use "tool" role
      if (['openai', 'anthropic', 'deepseek', 'openrouter', 'groq'].includes(effectiveSettings.provider)) {
        conversationHistory.push({
          role: "tool",
          tool_call_id: `call_${Date.now()}`,
          content: resultMessage
        })
      } 
      // Gemini uses user role with function response context
      else if (effectiveSettings.provider === "google" || effectiveSettings.provider === "gemini") {
        conversationHistory.push({
          role: "user",
          content: `Function ${functionName} result:\n${resultMessage}`
        })
      }
      // Fallback: use function role
      else {
        conversationHistory.push({
          role: "function",
          name: functionName,
          content: resultMessage
        })
      }
      
      // Start new stream with updated conversation (AI will continue automatically)
      const continuationPort = chrome.runtime.connect({ name: portName })
      const continuationRequestBody = {
        ...requestBody.body || requestBody,
        messages: conversationHistory,
      }
      
      if (effectiveSettings.provider === "google") {
        continuationPort.postMessage({
          body: {
            requestId: `${requestId}_continue_${functionCallCount}`,
            streamOptions: {
              ...requestBody.streamOptions,
              input: conversationHistory,
            }
          }
        })
      } else {
        continuationPort.postMessage({
          body: {
            ...continuationRequestBody,
            requestId: `${requestId}_continue_${functionCallCount}`,
          }
        })
      }
      
      // Listen to continuation response
      setupPortListeners(continuationPort)
      
    } catch (error) {
      Logger.error('Agentic loop error:', error)
      removeThinking()
      if (input) input.disabled = false
      if (sendBtn) sendBtn.disabled = false
    }
  }
  
  // Setup port listeners (recursive for agentic loop)
  const setupPortListeners = (activePort) => {
    activePort.onMessage.addListener(async (msg) => {
      clearTimeout(safetyTimeout)
      
      if (msg.type === "chunk") {
        // 🔧 FIX: İlk chunk geldiğinde thinking'i kaldır!
        if (fullResponse === "") {
          removeThinking()
        }
        
        fullResponse += msg.data
        
        // 🔧 FIX: İlk chunk için yeni mesaj oluştur, sonraki chunk'lar için update et
        if (fullResponse === msg.data) {
          // İlk chunk: Yeni mesaj oluştur
          addMessage("assistant", fullResponse)
        } else {
          // Sonraki chunk'lar: Mevcut mesajı güncelle
          updateLastMessage("assistant", fullResponse)
        }
      } else if (msg.type === "function_call") {
        functionCallCount++
        Logger.log(`[n8nChat] Function call #${functionCallCount}:`, msg)
        
        const functionCall = {
          name: msg.functionName || msg.name,
          arguments: msg.arguments || msg.args || msg.data?.args || msg.data?.argumentsString || "{}",
        }
        
        Logger.log('[n8nChat] Parsed function call:', functionCall)
        
        // 🐛 DEBUG API: Log function call
        try {
          const parsedArgs = typeof functionCall.arguments === 'string' 
            ? JSON.parse(functionCall.arguments) 
            : functionCall.arguments;
          debugAPI.logFunctionCall(operationId, functionCall.name, parsedArgs);
        } catch (e) {
          debugAPI.logFunctionCall(operationId, functionCall.name, functionCall.arguments);
        }
        
        try {
          const result = await executeFunction(functionCall)
          Logger.success('[n8nChat] Function execution result:', result)
          
          // 🐛 DEBUG API: Log successful response
          debugAPI.logResponse(operationId, result, 'success');
          
          // Add function call to conversation
          conversationHistory.push({
            role: "assistant",
            content: fullResponse || `Calling ${functionCall.name}...`,
            function_call: functionCall
          })
          
          addSystemMessage(`✅ Executed function: ${functionCall.name}`, functionCall.name)
          
          // ✨ AGENTIC LOOP: Continue automatically
          await continueAgenticLoop(result, functionCall.name)
          
        } catch (error) {
          Logger.error("[n8nChat] Error executing function:", error)
          
          // 🐛 DEBUG API: Log error
          debugAPI.logError(operationId, error, {
            functionName: functionCall.name,
            arguments: functionCall.arguments
          });
          
          addSystemMessage(`❌ Error executing function ${functionCall.name}: ${error.message}`, functionCall.name)
          removeThinking()
          if (input) input.disabled = false
          if (sendBtn) sendBtn.disabled = false
        }
      } else if (msg.type === "complete") {
        // Only complete if no function calls are pending
        Logger.success(`✅ Stream complete. Total function calls: ${functionCallCount}`)
        
        // 🐛 DEBUG API: Print session summary on completion
        if (functionCallCount > 0) {
          debugAPI.printSummary();
        }
        
        removeThinking()
        activePort.disconnect()
        if (input) input.disabled = false
        if (sendBtn) sendBtn.disabled = false
        if (input) input.focus()
      } else if (msg.type === "error") {
        removeThinking()
        addMessage("assistant", `Hata: ${msg.error || "Bilinmeyen bir hata oluştu"}`)
        
        // 🐛 DEBUG API: Log stream error
        debugAPI.logError(operationId, new Error(msg.error || "Stream error"), {
          type: 'stream_error',
          provider: effectiveSettings.provider
        });
        
        activePort.disconnect()
        if (input) input.disabled = false
        if (sendBtn) sendBtn.disabled = false
        if (input) input.focus()
      }
    })
    
    activePort.onDisconnect.addListener(() => {
      Logger.warn('Port disconnected')
    })
  }
  
  // Start listening to initial port
  setupPortListeners(port)
}

// Get unique storage key for this tab/workflow
function getChatHistoryKey() {
  // Use workflow URL as unique identifier
  const workflowMatch = window.location.pathname.match(/\/workflow\/([^\/]+)/);
  const workflowId = workflowMatch ? workflowMatch[1] : 'default';
  return `chatHistory_${workflowId}`;
}

// Save chat history to local storage (scoped by workflow)
async function saveChatHistory() {
  try {
    // Check if extension context is still valid
    if (typeof chrome === 'undefined' || !chrome.runtime || !chrome.runtime.id) {
      return; // Silently fail if extension context is invalid
    }
    
    const messagesArea = document.getElementById("n8n-chat-messages")
    if (!messagesArea) return
    
    const messages = []
    const messageElements = messagesArea.querySelectorAll(".n8n-chat-message:not(.n8n-chat-thinking)")
    
    messageElements.forEach(el => {
      const role = el.classList.contains("n8n-chat-user") ? "user" : "assistant"
      const content = role === "assistant" ? el.innerHTML : el.textContent
      messages.push({ role, content })
    })
    
    const key = getChatHistoryKey();
    await chrome.storage.local.set({ 
      [key]: {
        messages,
        timestamp: Date.now()
      }
    })
    Logger.log(`Chat history saved (${messages.length} messages)`);
  } catch (e) {
    Logger.warn("Could not save chat history:", e)
  }
}

// Restore chat history from local storage
async function restoreChatHistory() {
  try {
    // Check if extension context is still valid
    if (typeof chrome === 'undefined' || !chrome.runtime || !chrome.runtime.id) {
      Logger.warn("Extension context invalidated, cannot restore chat history");
      return;
    }
    
    const key = getChatHistoryKey();
    const result = await chrome.storage.local.get(key);
    const historyData = result[key];
    
    if (!historyData || !historyData.messages || !Array.isArray(historyData.messages)) {
      Logger.log("No chat history found for this workflow");
      return;
    }
    
    // Don't restore if history is too old (> 24 hours)
    const age = Date.now() - (historyData.timestamp || 0);
    if (age > 24 * 60 * 60 * 1000) {
      Logger.log("Chat history too old, skipping restore");
      await chrome.storage.local.remove(key); // Clean up old data
      return;
    }
    
    const messagesArea = document.getElementById("n8n-chat-messages")
    if (!messagesArea) return
    
    historyData.messages.forEach(({ role, content }) => {
      const messageDiv = document.createElement("div")
      messageDiv.className = `n8n-chat-message n8n-chat-${role}`
      
      if (role === "assistant") {
        messageDiv.innerHTML = content
      } else {
        messageDiv.textContent = content
      }
      
      messagesArea.appendChild(messageDiv)
    })
    
    messagesArea.scrollTop = messagesArea.scrollHeight
    Logger.success(`Chat history restored (${historyData.messages.length} messages)`);
  } catch (e) {
    Logger.warn("Could not restore chat history:", e)
  }
}

/**
 * 🎨 ULTRA-MODERN MESSAGE RENDERER
 * - Timestamps with smart formatting
 * - Enhanced markdown support
 * - Typing effect for long messages
 * - Message grouping detection
 */
function addMessage(role, content, options = {}) {
  const messagesArea = document.getElementById("n8n-chat-messages")
  if (!messagesArea) return
  
  const {
    timestamp = new Date(),
    showTime = false,
    animated = true,
    icon = null
  } = options;
  
  // Create message wrapper
  const messageWrapper = document.createElement("div")
  messageWrapper.style.cssText = `
    display: flex;
    flex-direction: column;
    align-items: ${role === 'user' ? 'flex-end' : 'flex-start'};
    margin-bottom: 4px;
  `;
  
  // Add timestamp (for message grouping)
  const lastMessage = messagesArea.querySelector(`.n8n-chat-message:last-child`);
  const lastTime = lastMessage?.dataset?.time;
  const currentTime = timestamp.getTime();
  const showTimestamp = !lastTime || (currentTime - parseInt(lastTime)) > 60000; // 1 minute gap
  
  if (showTimestamp || showTime) {
    const timeDiv = document.createElement("div");
    timeDiv.style.cssText = `
      font-size: 11px;
      color: rgba(255, 255, 255, 0.3);
      margin: 12px ${role === 'user' ? '20px' : '20px'} 6px;
      font-weight: 500;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    `;
    timeDiv.textContent = formatTimestamp(timestamp);
    messageWrapper.appendChild(timeDiv);
  }
  
  const messageDiv = document.createElement("div")
  messageDiv.className = `n8n-chat-message n8n-chat-${role}`
  messageDiv.dataset.time = currentTime;
  
  // Enhanced markdown support
  if (role === "assistant") {
    let formattedContent = content
      // Code blocks
      .replace(/```(.*?)```/gs, '<pre style="background: rgba(0, 0, 0, 0.5); padding: 12px; border-radius: 10px; overflow-x: auto; border-left: 3px solid #00ff47; margin: 8px 0;"><code>$1</code></pre>')
      // Inline code
      .replace(/`(.*?)`/g, '<code style="background: rgba(0, 0, 0, 0.5); padding: 3px 8px; border-radius: 6px; font-family: \'SF Mono\', Monaco, Consolas, monospace; font-size: 13px; border: 1px solid rgba(0, 255, 71, 0.25); color: #00ff47; font-weight: 500;">$1</code>')
      // Bold
      .replace(/\*\*(.*?)\*\*/g, '<strong style="color: #00ff47; font-weight: 800; text-shadow: 0 0 8px rgba(0, 255, 71, 0.3);">$1</strong>')
      // Italic
      .replace(/\*(.*?)\*/g, '<em style="color: rgba(255, 255, 255, 0.85);">$1</em>')
      // Links
      .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" style="color: #00d4ff; text-decoration: underline; font-weight: 600;">$1</a>')
      // Newlines
      .replace(/\n/g, '<br>')
    
    messageDiv.innerHTML = formattedContent;
  } else if (role === "system") {
    // System messages with icons
    const iconMap = {
      '✅': '<span style="font-size: 16px; margin-right: 2px;">✅</span>',
      '❌': '<span style="font-size: 16px; margin-right: 2px;">❌</span>',
      '⚠️': '<span style="font-size: 16px; margin-right: 2px;">⚠️</span>',
    };
    
    let displayContent = content;
    for (const [emoji, html] of Object.entries(iconMap)) {
      if (content.startsWith(emoji)) {
        displayContent = html + content.substring(emoji.length);
        break;
      }
    }
    
    messageDiv.innerHTML = displayContent;
  } else {
    messageDiv.textContent = content;
  }
  
  messageWrapper.appendChild(messageDiv);
  messagesArea.appendChild(messageWrapper);
  
  // Smooth scroll to bottom
  messagesArea.scrollTo({
    top: messagesArea.scrollHeight,
    behavior: 'smooth'
  });
  
  // Save chat history after adding message
  saveChatHistory();
  
  // Show container if hidden
  const container = document.getElementById("n8n-chat-container");
  if (container && container.style.display === "none") {
    container.classList.add("show");
    container.style.display = "flex";
  }
}

/**
 * Smart timestamp formatter
 */
function formatTimestamp(date) {
  const now = new Date();
  const diff = now - date;
  
  // Less than 1 minute: "Just now"
  if (diff < 60000) return 'Şimdi';
  
  // Less than 1 hour: "X minutes ago"
  if (diff < 3600000) {
    const mins = Math.floor(diff / 60000);
    return `${mins} dakika önce`;
  }
  
  // Today: Show time only
  if (now.toDateString() === date.toDateString()) {
    return date.toLocaleTimeString('tr-TR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  }
  
  // Yesterday
  const yesterday = new Date(now);
  yesterday.setDate(yesterday.getDate() - 1);
  if (yesterday.toDateString() === date.toDateString()) {
    return 'Dün ' + date.toLocaleTimeString('tr-TR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  }
  
  // Older: Show full date
  return date.toLocaleDateString('tr-TR', { 
    day: 'numeric', 
    month: 'short',
    hour: '2-digit',
    minute: '2-digit'
  });
}

/**
 * 🔄 ULTRA-MODERN MESSAGE UPDATER
 * Updates streaming messages with smooth transitions
 * 
 * 🚨 CRITICAL FIX: ASLA thinking indicator'ı burada kaldırma!
 * Stream sırasında thinking zaten yok, sadece mesaj update ediliyor.
 * Thinking indicator sadece stream complete olduğunda kaldırılmalı.
 */
function updateLastMessage(role, content) {
  const messagesArea = document.getElementById("n8n-chat-messages")
  if (!messagesArea) return
  
  // 🔧 FIX: removeThinking() çağrısı KALDIRILDI!
  // Stream sırasında thinking yoksa bile, bu çağrı yanlışlıkla
  // mesaj wrapper'ını siliyordu.
  
  // 🎯 ULTRA-SAFE SELECTOR: Thinking indicator'ı hariç tut!
  // Thinking div'i "n8n-chat-thinking" ID'sine sahip, onu skip et
  const allMessages = Array.from(messagesArea.querySelectorAll(`.n8n-chat-${role}`));
  const lastMessage = allMessages.filter(msg => msg.id !== 'n8n-chat-thinking').pop();
  
  if (lastMessage) {
    if (role === "assistant") {
      // Enhanced markdown support (same as addMessage)
      let formattedContent = content
        .replace(/```(.*?)```/gs, '<pre style="background: rgba(0, 0, 0, 0.5); padding: 12px; border-radius: 10px; overflow-x: auto; border-left: 3px solid #00ff47; margin: 8px 0;"><code>$1</code></pre>')
        .replace(/`(.*?)`/g, '<code style="background: rgba(0, 0, 0, 0.5); padding: 3px 8px; border-radius: 6px; font-family: \'SF Mono\', Monaco, Consolas, monospace; font-size: 13px; border: 1px solid rgba(0, 255, 71, 0.25); color: #00ff47; font-weight: 500;">$1</code>')
        .replace(/\*\*(.*?)\*\*/g, '<strong style="color: #00ff47; font-weight: 800; text-shadow: 0 0 8px rgba(0, 255, 71, 0.3);">$1</strong>')
        .replace(/\*(.*?)\*/g, '<em style="color: rgba(255, 255, 255, 0.85);">$1</em>')
        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" style="color: #00d4ff; text-decoration: underline; font-weight: 600;">$1</a>')
        .replace(/\n/g, '<br>')
      
      lastMessage.innerHTML = formattedContent
    } else {
      lastMessage.textContent = content
    }
    
    // Smooth scroll
    messagesArea.scrollTo({
      top: messagesArea.scrollHeight,
      behavior: 'smooth'
    });
    
    // Save chat history after updating message
    saveChatHistory()
  } else {
    // No message to update, create new one
    addMessage(role, content)
  }
}

/**
 * 🎬 ULTRA-MODERN THINKING INDICATOR
 * Advanced 3-dot animation with spark effect
 */
function showThinking() {
  const messagesArea = document.getElementById("n8n-chat-messages")
  if (!messagesArea) return
  
  removeThinking() // Remove existing thinking indicator
  
  const thinkingWrapper = document.createElement("div");
  thinkingWrapper.style.cssText = `
    display: flex;
    align-items: flex-start;
    margin-bottom: 18px;
  `;
  
  const thinkingDiv = document.createElement("div")
  thinkingDiv.id = "n8n-chat-thinking"
  thinkingDiv.className = "n8n-chat-message n8n-chat-assistant n8n-chat-thinking"
  thinkingDiv.textContent = "Düşünüyor"
  
  thinkingWrapper.appendChild(thinkingDiv);
  messagesArea.appendChild(thinkingWrapper);
  
  // Smooth scroll
  messagesArea.scrollTo({
    top: messagesArea.scrollHeight,
    behavior: 'smooth'
  });
}

/**
 * 🔧 CRITICAL FIX: Remove thinking indicator WITHOUT removing parent wrapper
 * 
 * RATIONALE:
 * Önceki implementasyonda thinkingDiv.parentElement?.remove() tüm wrapper'ı
 * siliyordu. Bu da normal mesajların da kaybolmasına neden oluyordu.
 * 
 * FIX:
 * Sadece thinking div'i sil, parent'a dokunma!
 */
function removeThinking() {
  const thinkingDiv = document.getElementById("n8n-chat-thinking")
  if (thinkingDiv) {
    // Fade out animation
    thinkingDiv.style.animation = 'fadeOut 0.3s ease-out';
    setTimeout(() => {
      // ✅ FIX: Sadece thinking div'i sil, parent wrapper'ı KORUMALI!
      const parent = thinkingDiv.parentElement;
      
      if (parent) {
        // Check if parent only contains the thinking indicator
        const hasOnlyThinking = parent.children.length === 1 && parent.firstChild === thinkingDiv;
        
        if (hasOnlyThinking) {
          // Safe to remove parent (it's a dedicated wrapper)
          parent.remove();
        } else {
          // Parent has other content, only remove thinking div
          thinkingDiv.remove();
        }
      } else {
        // No parent, just remove the div
        thinkingDiv.remove();
      }
    }, 300);
  }
}

/**
 * 🎨 ENHANCED SYSTEM MESSAGE (FUNCTION EXECUTION)
 * Detects function type and shows appropriate icon
 */
function addSystemMessage(message, functionName = '') {
  const messagesArea = document.getElementById("n8n-chat-messages")
  if (!messagesArea) return
  
  // Icon mapping based on function type
  const iconMap = {
    'create_node': '🎨',
    'bulk_create_nodes': '🎨',
    'update_node': '✏️',
    'remove_node': '🗑️',
    'bulk_delete_nodes': '🗑️',
    'add_connection': '🔗',
    'remove_connection': '⛓️‍💥',
    'get_workflow_info': '📊',
    'get_node_info': 'ℹ️',
    'validate_workflow': '✅',
    'tidy_up_workflow': '🧹',
    'create_sticky_note': '📝',
    'generate_workflow_docs': '📄',
    'test_workflow': '🧪',
    'replace_node_keep_connections': '🔄',
    'create_workflow_snapshot': '📸',
    'restore_workflow_snapshot': '⏪',
  };
  
  const icon = iconMap[functionName] || '⚙️';
  const isSuccess = message.includes('✅') || message.toLowerCase().includes('success');
  const isError = message.includes('❌') || message.toLowerCase().includes('error');
  
  const badge = document.createElement("div");
  badge.className = "n8n-chat-system";
  badge.innerHTML = `
    <span style="font-size: 16px; filter: drop-shadow(0 0 6px rgba(0, 255, 71, 0.6));">${icon}</span>
    <span style="flex: 1;">${message}</span>
  `;
  
  // Add colored border based on status
  if (isSuccess) {
    badge.style.borderColor = 'rgba(0, 255, 71, 0.5)';
    badge.style.boxShadow = '0 6px 18px rgba(0, 255, 71, 0.25), inset 0 1px 0 rgba(0, 255, 71, 0.2)';
  } else if (isError) {
    badge.style.borderColor = 'rgba(255, 68, 68, 0.5)';
    badge.style.boxShadow = '0 6px 18px rgba(255, 68, 68, 0.25), inset 0 1px 0 rgba(255, 68, 68, 0.2)';
    badge.style.color = '#ff4444';
  }
  
  messagesArea.appendChild(badge);
  
  // Smooth scroll
  messagesArea.scrollTo({
    top: messagesArea.scrollHeight,
    behavior: 'smooth'
  });
}

// Initialize
async function initialize() {
  const isN8nPage = detectN8nPage()
  
  if (!isN8nPage) {
    const detected = await waitForN8n(5000)
    if (!detected) {
      Logger.log("Not an n8n page, skipping initialization")
      return
    }
  }

  Logger.success("n8n page detected! Starting initialization sequence...")
  
  // Initialize Debug API with settings
  const settings = await getSettings()
  await debugAPI.initialize(settings)
  
  // Inject script
  injectScript()
  
  // Wait for Vue app (delegated to injected script)
  await waitForN8nVueApp(10000)
  
  await initializeChatUI()
  Logger.success("Initialization complete! 🚀")
}

// Listen for messages from popup/background
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.name === "activateContentScript") {
    Logger.info("Activation requested from popup")
    initialize().then(() => {
      sendResponse({ success: true, message: "n8nChat activated" })
    }).catch((error) => {
      Logger.error("Activation error:", error)
      sendResponse({ success: false, error: error.message })
    })
    return true // Keep message channel open for async response
  }
  
  // Check if page is n8n
  if (message.name === "checkN8nPage") {
    const isN8n = detectN8nPage()
    sendResponse({ isN8n, url: window.location.href })
    return true
  }
  
  // Debug mode changed from popup
  if (message.name === "debugModeChanged") {
    if (message.enabled) {
      debugAPI.enable()
      Logger.success("🐛 Debug Mode ENABLED")
    } else {
      debugAPI.disable()
      Logger.log("🐛 Debug Mode DISABLED")
    }
    sendResponse({ success: true })
    return true
  }
  
  // Clear debug logs
  if (message.name === "clearDebugLogs") {
    debugAPI.clear()
    sendResponse({ success: true })
    return true
  }
  
  return false
})

// Start initialization when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initialize)
} else {
  initialize()
}

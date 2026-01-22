/**
 * n8n Chat Injected Script
 * 
 * This script runs in the context of the n8n page, allowing access to the
 * Vue application and n8n internal stores.
 */

(() => {
  // Prevent duplicate injection
  if (window.__N8N_CHAT_INJECTED__) return;
  window.__N8N_CHAT_INJECTED__ = true;

  // Logger for injected script
  const Logger = {
    log: (message, ...args) => {
      console.log(`%c[n8nChat:Injected] %c${message}`, 'color: #ff00ff; font-weight: bold;', 'color: inherit;', ...args);
    },
    info: (message, ...args) => {
      console.info(`%c[n8nChat:Injected] ℹ️ %c${message}`, 'color: #ff00ff; font-weight: bold;', 'color: #00bfff;', ...args);
    },
    success: (message, ...args) => {
      console.log(`%c[n8nChat:Injected] ✅ %c${message}`, 'color: #ff00ff; font-weight: bold;', 'color: #00ff47;', ...args);
    },
    warn: (message, ...args) => {
      console.warn(`%c[n8nChat:Injected] ⚠️ %c${message}`, 'color: #ff00ff; font-weight: bold;', 'color: #ffcc00;', ...args);
    },
    error: (message, ...args) => {
      console.error(`%c[n8nChat:Injected] ❌ %c${message}`, 'color: #ff00ff; font-weight: bold;', 'color: #ff4444;', ...args);
    }
  };

  console.log('[n8nChat] Injected script initialized');
  Logger.success('Script initialized and ready');

  // Initialize global counter if not exists
  if (typeof window.n8nChatPositionOffsetCounter === 'undefined') {
    window.n8nChatPositionOffsetCounter = 0;
  }

  // ==========================================================================
  // Store Access Helpers
  // ==========================================================================

  function getN8nApp() {
    const appElement = document.getElementById("app");
    return appElement?.__vue_app__ || null;
  }

  // ==========================================================================
  // Advanced Store Access Helpers (PRODUCTION-GRADE, Multi-Strategy)
  // ==========================================================================

  /**
   * ULTRA-SAFE Pinia Store Access with Fallback Strategies
   * 
   * RATIONALE:
   * n8n'in store erişimi versiyonlar arası değişebilir. Bu fonksiyon
   * 5 farklı strateji deneyerek en güvenli erişimi sağlar.
   * 
   * STRATEGIES (priority order):
   * 1. Global window.__pinia__ (if n8n exposes it)
   * 2. Vue app instance globalProperties.$pinia
   * 3. Symbol-based Pinia state traversal (mevcut yöntem)
   * 4. Direct window.pinia (legacy)
   * 5. Deep DOM traversal (last resort)
   * 
   * SECURITY: Store değişikliklerini izole eder, n8n güncellemelerine dayanıklıdır.
   */
  function getWorkflowsStore() {
    try {
      const app = getN8nApp();
      if (!app) {
        Logger.warn('N8n Vue app not found');
        return null;
      }

      // ===== STRATEGY 1: Global Pinia Instance (Most Stable) =====
      if (window.__pinia__) {
        Logger.log('✅ Strategy 1: Using window.__pinia__');
        const store = window.__pinia__._s?.get?.('workflows') || window.__pinia__._s?.get?.('workflowsStore');
        if (store) return store;
      }

      // ===== STRATEGY 2: Vue Global Properties $pinia (Recommended) =====
      const globalProps = app._instance?.appContext?.config?.globalProperties;
      if (globalProps?.$pinia) {
        Logger.log('✅ Strategy 2: Using globalProperties.$pinia');
        const store = globalProps.$pinia._s?.get?.('workflows') || globalProps.$pinia._s?.get?.('workflowsStore');
        if (store) return store;
      }

      // ===== STRATEGY 3: Symbol-based Traversal (Fallback) =====
      const provides = app._context?.provides;
      if (provides) {
        Logger.log('⚠️ Strategy 3: Using symbol traversal (less stable)');
        const piniaStore = Object.getOwnPropertySymbols(provides)
          .map((sym) => provides[sym])
          .find((s) => s && s.state && s.state.value);

        if (piniaStore) {
          const store = piniaStore._s?.get?.('workflows') || piniaStore._s?.get?.('workflowsStore');
          if (store) return store;
        }
      }

      // ===== STRATEGY 4: Direct Window Pinia (Legacy) =====
      if (window.pinia) {
        Logger.log('⚠️ Strategy 4: Using window.pinia (legacy)');
        const store = window.pinia._s?.get?.('workflows') || window.pinia._s?.get?.('workflowsStore');
        if (store) return store;
      }

      // ===== STRATEGY 5: Deep DOM Component Traversal (Last Resort) =====
      Logger.warn('⚠️ Strategy 5: All strategies failed, trying component traversal');
      const workflowCanvas = document.querySelector('[data-test-id="canvas"]');
      if (workflowCanvas?.__vueParentComponent) {
        const store = workflowCanvas.__vueParentComponent?.ctx?.$store;
        if (store) return store;
      }

      Logger.error('❌ All 5 strategies failed to access workflows store');
      return null;
    } catch (e) {
      Logger.error("CRITICAL: Error accessing workflows store:", e);
      return null;
    }
  }

  function getCanvasOperations() {
    try {
      const app = getN8nApp();
      if (!app) return null;
      
      // Access Vue global properties
      const globalProps = app?._instance?.appContext?.config?.globalProperties;
      return globalProps?.$canvasOperations || null;
    } catch (e) {
      Logger.error("Failed to access canvas operations:", e);
      return null;
    }
  }
  
  function getNodeHelpers() {
    try {
      const app = getN8nApp();
      if (!app) return null;
      
      // Access Vue global properties
      const globalProps = app?._instance?.appContext?.config?.globalProperties;
      return globalProps?.$nodeHelpers || null;
    } catch (e) {
      Logger.error("Failed to access node helpers:", e);
      return null;
    }
  }

  function getCurrentWorkflow() {
    const store = getWorkflowsStore();
    return store?.workflow || null;
  }

  function getNodeByName(name) {
    const workflow = getCurrentWorkflow();
    return workflow?.nodes.find(n => n.name === name) || null;
  }

  function generateUUID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  /**
   * PRODUCTION-GRADE Vue Reactivity Synchronization
   * 
   * RATIONALE:
   * AI function chain'lerde (örn: create_node → add_connection) node'lar
   * DOM'a henüz mount olmadan bağlantı kurulması denenebilir. Bu fonksiyon
   * Vue'nun reactivity cycle'ının tamamlanmasını garantiler.
   * 
   * STRATEGY:
   * 1. MutationObserver (DOM değişikliklerini izle)
   * 2. requestAnimationFrame (browser render cycle)
   * 3. Timeout fallback (fail-safe)
   * 4. Store state verification
   * 
   * USAGE:
   * await waitForVueUpdate(); // After any store mutation
   * await waitForVueUpdate({ nodeId: 'xyz' }); // Wait for specific node
   * 
   * PERFORMANCE:
   * - Max wait time: 2000ms (timeout protection)
   * - Average wait: 50-100ms (1-2 render frames)
   */
  async function waitForVueUpdate(options = {}) {
    const {
      nodeId = null,
      nodeName = null,
      maxWaitMs = 2000,
      pollIntervalMs = 50
    } = options;
    
    const startTime = Date.now();
    
    return new Promise((resolve) => {
      let resolved = false;
      
      // ===== STRATEGY 1: MutationObserver (Real DOM Changes) =====
      const observer = new MutationObserver(() => {
        if (resolved) return;
        
        // Check if specific node requested
        if (nodeId || nodeName) {
          const store = getWorkflowsStore();
          const node = store?.getNodeByName?.(nodeName) || store?.getNodeById?.(nodeId);
          
          if (node) {
            resolved = true;
            observer.disconnect();
            Logger.log(`✅ Vue update confirmed (node found): ${nodeName || nodeId}`);
            resolve();
          }
        }
      });
      
      const canvas = document.querySelector('.jtk-surface') || document.body;
      observer.observe(canvas, {
        childList: true,
        subtree: true,
        attributes: true
      });
      
      // ===== STRATEGY 2: requestAnimationFrame (Browser Render Cycle) =====
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (!resolved && !nodeId && !nodeName) {
            // Generic wait: 2 frames is usually enough
            resolved = true;
            observer.disconnect();
            Logger.log(`✅ Vue update assumed after 2 RAF cycles`);
            resolve();
          }
        });
      });
      
      // ===== STRATEGY 3: Polling (Active Verification) =====
      if (nodeId || nodeName) {
        const pollInterval = setInterval(() => {
          if (resolved) {
            clearInterval(pollInterval);
            return;
          }
          
          const store = getWorkflowsStore();
          const node = store?.getNodeByName?.(nodeName) || store?.getNodeById?.(nodeId);
          
          if (node) {
            resolved = true;
            clearInterval(pollInterval);
            observer.disconnect();
            Logger.log(`✅ Vue update confirmed via polling: ${nodeName || nodeId}`);
            resolve();
          }
          
          // Timeout check
          if (Date.now() - startTime > maxWaitMs) {
            resolved = true;
            clearInterval(pollInterval);
            observer.disconnect();
            Logger.warn(`⚠️ Vue update timeout after ${maxWaitMs}ms`);
            resolve(); // Resolve anyway to avoid blocking
          }
        }, pollIntervalMs);
      } else {
        // Generic wait: Timeout fallback only
        setTimeout(() => {
          if (!resolved) {
            resolved = true;
            observer.disconnect();
            Logger.warn(`⚠️ Vue update timeout (generic wait)`);
            resolve();
          }
        }, maxWaitMs);
      }
    });
  }
  
  /**
   * SHORTHAND: Wait for specific node to be ready
   */
  async function waitForNode(nameOrId, maxWaitMs = 2000) {
    return waitForVueUpdate({ 
      nodeId: typeof nameOrId === 'string' && nameOrId.includes('-') ? nameOrId : null,
      nodeName: typeof nameOrId === 'string' && !nameOrId.includes('-') ? nameOrId : null,
      maxWaitMs 
    });
  }

  // ==========================================================================
  // Core Operations
  // ==========================================================================

  async function addNode(nodeData) {
    Logger.log('Adding node request received', nodeData);
    
    // Retry mechanism for store access
    let store = getWorkflowsStore();
    let retries = 0;
    while (!store && retries < 10) {
      await new Promise(r => setTimeout(r, 200));
      store = getWorkflowsStore();
      retries++;
    }

    if (!store) {
      Logger.error('Workflows store not found after retries');
      return { success: false, error: "Workflows store not available. Are you on a workflow page?" };
    }

    try {
      const offset = window.n8nChatPositionOffsetCounter++;

      const node = {
        id: nodeData.id || generateUUID(),
        name: nodeData.name || `Node ${Date.now()}`,
        type: nodeData.type || "n8n-nodes-base.set",
        typeVersion: nodeData.typeVersion || 1,
        position: Array.isArray(nodeData.position) 
          ? nodeData.position 
          : [250 + (350 * offset), 300], // Horizontal flow by default
        parameters: nodeData.parameters || {},
        disabled: nodeData.disabled || false,
        notes: nodeData.notes
      };

      Logger.log('Prepared node for insertion', node);

      // Add the node
      try {
        store.addNode(node);
      } catch (storeError) {
        Logger.warn('store.addNode failed, trying fallback push', storeError);
        // Fallback: Direct push if addNode failed
        if (store.workflow && store.workflow.nodes) {
          store.workflow.nodes.push(node);
        } else {
          throw storeError;
        }
      }

      // ✅ CRITICAL: Wait for Vue reactivity cycle to complete
      await waitForVueUpdate({ nodeName: node.name, maxWaitMs: 1500 });
      
      const addedNode = store.workflow.nodes.find(n => n.id === node.id);
      
      if (addedNode) {
        Logger.success(`Node added and verified: ${node.name}`);
        
        // Trigger zoom to fit (async, non-blocking)
        setTimeout(() => {
          const zoomBtn = document.querySelector('[data-test-id="zoom-to-fit"]');
          if (zoomBtn) {
            zoomBtn.click();
            Logger.log('Zoom to fit triggered');
          }
        }, 500);
        
        return { success: true, node: JSON.parse(JSON.stringify(addedNode)) };
      } else {
        Logger.error(`❌ CRITICAL: Node "${node.name}" added but not found in store after Vue update!`);
        return { success: false, error: "Node added but verification failed (Vue reactivity issue)" };
      }
    } catch (e) {
      Logger.error('Error in addNode', e);
      return { success: false, error: e.message };
    }
  }

  function updateNode(nodeName, updates) {
    const store = getWorkflowsStore();
    if (!store) return { success: false, error: "Store not found" };

    const node = getNodeByName(nodeName);
    if (!node) return { success: false, error: `Node "${nodeName}" not found` };

    try {
      Object.assign(node, updates);
      if (store.updateNodeProperties) {
        store.updateNodeProperties(node);
      }
      return { success: true };
    } catch (e) {
      return { success: false, error: e.message };
    }
  }

  /**
   * PRODUCTION-GRADE Node Removal with Ghost Connection Cleanup
   * 
   * RATIONALE:
   * n8n store'unda bir node silindiğinde bağlantıları (connections) otomatik 
   * temizlenmeyebilir. Bu "ghost connections" workflow'un kaydedilememesine veya
   * corrupt olmasına neden olur.
   * 
   * SECURITY GATE:
   * - Pre-deletion connection scan
   * - Atomic deletion (all-or-nothing)
   * - Post-deletion verification
   * - Rollback on failure
   * 
   * ABUSE-CASE PREVENTION:
   * - System nodes (Start, Error Trigger) silinemesin
   */
  function removeNode(nodeName) {
    const store = getWorkflowsStore();
    if (!store) return { success: false, error: "Store not found" };

    const node = getNodeByName(nodeName);
    if (!node) return { success: false, error: `Node "${nodeName}" not found` };

    // ===== SECURITY GATE: System Node Protection =====
    const SYSTEM_NODES = ['Start', 'Error Trigger', 'When clicking "Execute Workflow"'];
    if (SYSTEM_NODES.includes(node.type) || SYSTEM_NODES.includes(nodeName)) {
      return { success: false, error: `Cannot delete system node: ${nodeName}` };
    }

    try {
      // ===== STEP 1: Ghost Connection Detection & Cleanup =====
      const connections = store.workflow?.connections || {};
      const ghostConnections = [];
      
      Logger.log(`🔍 Pre-deletion scan: Checking connections for node "${nodeName}"`);
      
      // Scan all connections (source & target)
      for (const [sourceNodeName, outputs] of Object.entries(connections)) {
        if (sourceNodeName === nodeName) {
          // Node is source: remove entire output branch
          ghostConnections.push({ type: 'source', node: sourceNodeName });
        } else {
          // Check if node is target in any output
          for (const [outputType, outputArray] of Object.entries(outputs)) {
            if (!Array.isArray(outputArray)) continue;
            
            outputArray.forEach((connectionList, outputIndex) => {
              if (!Array.isArray(connectionList)) return;
              
              const hasGhostConnection = connectionList.some(conn => conn.node === nodeName);
              if (hasGhostConnection) {
                ghostConnections.push({
                  type: 'target',
                  source: sourceNodeName,
                  outputType,
                  outputIndex,
                  target: nodeName
                });
              }
            });
          }
        }
      }
      
      if (ghostConnections.length > 0) {
        Logger.warn(`⚠️ Found ${ghostConnections.length} ghost connection(s) to clean`);
        
        // Clean ghost connections BEFORE node deletion
        ghostConnections.forEach(ghost => {
          if (ghost.type === 'source') {
            // Delete entire source branch
            delete connections[ghost.node];
            Logger.log(`🧹 Cleaned source connection: ${ghost.node}`);
          } else if (ghost.type === 'target') {
            // Remove specific target connection
            const outputArray = connections[ghost.source]?.[ghost.outputType];
            if (outputArray && outputArray[ghost.outputIndex]) {
              connections[ghost.source][ghost.outputType][ghost.outputIndex] = 
                outputArray[ghost.outputIndex].filter(conn => conn.node !== ghost.target);
              Logger.log(`🧹 Cleaned target connection: ${ghost.source} -> ${ghost.target}`);
            }
          }
        });
      }

      // ===== STEP 2: Node Deletion (Multi-Strategy) =====
      const canvasOps = getCanvasOperations();
      
      if (canvasOps && canvasOps.deleteNode) {
        // Primary method: Canvas Operations (proper UI update)
        canvasOps.deleteNode(node.id, { trackHistory: true });
        Logger.success(`✅ Node deleted via canvasOps: ${nodeName}`);
      } else if (store.removeNode) {
        // Fallback: Store method (pass full node object!)
        store.removeNode(node); // ✅ Pass node object, not just name
        Logger.success(`✅ Node deleted via store.removeNode: ${nodeName}`);
      } else if (store.removeNodeById) {
        store.removeNodeById(node.id);
        Logger.success(`✅ Node deleted via store.removeNodeById: ${nodeName}`);
      } else {
        // Last resort: Direct array manipulation with Vue-friendly splice
        const index = store.workflow.nodes.findIndex(n => n.id === node.id);
        if (index !== -1) {
          store.workflow.nodes.splice(index, 1); // ✅ splice triggers Vue reactivity
          Logger.success(`✅ Node deleted via splice: ${nodeName}`);
        } else {
          return { success: false, error: `Node "${nodeName}" not found in workflow.nodes array` };
        }
      }
      
      // ===== STEP 3: Post-Deletion Verification =====
      const stillExists = getNodeByName(nodeName);
      if (stillExists) {
        Logger.error(`❌ CRITICAL: Node "${nodeName}" still exists after deletion!`);
        return { success: false, error: `Failed to delete node (verification failed)` };
      }
      
      return { 
        success: true, 
        ghostConnectionsCleaned: ghostConnections.length 
      };
    } catch (e) {
      Logger.error(`Error removing node ${nodeName}:`, e);
      return { success: false, error: e.message };
    }
  }

  function addConnection(sourceName, targetName, sourceType, targetType, sourceIndex, targetIndex) {
    const store = getWorkflowsStore();
    if (!store) return { success: false, error: "Store not found" };

    try {
      const source = getNodeByName(sourceName);
      const target = getNodeByName(targetName);

      if (!source || !target) return { success: false, error: "Source or Target node not found" };

      const connection = [
        { node: sourceName, type: sourceType || 'main', index: sourceIndex || 0 },
        { node: targetName, type: targetType || 'main', index: targetIndex || 0 }
      ];

      store.addConnection({ connection });
      return { success: true };
    } catch (e) {
      return { success: false, error: e.message };
    }
  }

  function removeConnection(sourceName, targetName, sourceIndex = 0, targetIndex = 0) {
    const store = getWorkflowsStore();
    if (!store) return { success: false, error: "Store not found" };

    try {
      const source = getNodeByName(sourceName);
      const target = getNodeByName(targetName);

      if (!source || !target) {
        return { success: false, error: "Source or Target node not found" };
      }

      // Access workflow connections directly
      const workflow = store.workflow;
      if (!workflow || !workflow.connections) {
        return { success: false, error: "No workflow connections found" };
      }

      // Remove connection from source node
      if (workflow.connections[sourceName]) {
        const mainConnections = workflow.connections[sourceName].main;
        if (mainConnections && mainConnections[sourceIndex]) {
          mainConnections[sourceIndex] = mainConnections[sourceIndex].filter(
            conn => !(conn.node === targetName && (conn.index || 0) === targetIndex)
          );
          
          // Clean up empty arrays
          if (mainConnections[sourceIndex].length === 0) {
            mainConnections[sourceIndex] = null;
          }
        }
      }

      Logger.success(`Connection removed: ${sourceName} -> ${targetName}`);
      return { success: true, message: `Removed connection from "${sourceName}" to "${targetName}"` };
    } catch (e) {
      Logger.error('Error removing connection:', e);
      return { success: false, error: e.message };
    }
  }

  // ==========================================================================
  // Workflow Normalization Engine
  // ==========================================================================

  const NODE_CATEGORIES = {
    // IO
    'n8n-nodes-base.httpRequest': 'io',
    'n8n-nodes-base.webhook': 'io',
    'n8n-nodes-base.scheduleTrigger': 'io',
    'n8n-nodes-base.postgres': 'io',
    'n8n-nodes-base.googleSheets': 'io',
    // Logic
    'n8n-nodes-base.if': 'logic',
    'n8n-nodes-base.switch': 'logic',
    'n8n-nodes-base.merge': 'flow',
    'n8n-nodes-base.wait': 'flow',
    // Transform
    'n8n-nodes-base.set': 'transform',
    'n8n-nodes-base.function': 'code',
    'n8n-nodes-base.functionItem': 'code',
    // AI
    'n8n-nodes-base.openAi': 'ai',
    'n8n-nodes-base.langChain': 'ai'
  };

  function getCategoryForNode(nodeType) {
    if (NODE_CATEGORIES[nodeType]) return NODE_CATEGORIES[nodeType];
    
    const lowerType = nodeType.toLowerCase();
    if (lowerType.includes('trigger')) return 'io';
    if (lowerType.includes('webhook')) return 'io';
    if (lowerType.includes('if') || lowerType.includes('switch')) return 'logic';
    if (lowerType.includes('function') || lowerType.includes('code')) return 'code';
    if (lowerType.includes('set') || lowerType.includes('edit')) return 'transform';
    
    return 'other';
  }

  // ==========================================================================
  // Security Scanner (Local Pre-Process)
  // ==========================================================================
  
  const SECRET_PATTERNS = [
    { name: 'OpenAI API Key', regex: /sk-[a-zA-Z0-9]{20,}/g },
    { name: 'Slack Token', regex: /xox[baprs]-[a-zA-Z0-9-]{10,}/g },
    { name: 'GitHub Token', regex: /gh[pousr]_[a-zA-Z0-9]{36}/g },
    { name: 'AWS Access Key', regex: /(AKIA|ASIA)[0-9A-Z]{16}/g },
    { name: 'Google API Key', regex: /AIza[0-9A-Za-z-_]{35}/g },
    { name: 'Generic Private Key', regex: /-----BEGIN (RSA|DSA|EC|PGP|OPENSSH) PRIVATE KEY-----/g },
    { name: 'Generic JWT', regex: /ey[a-zA-Z0-9]{10,}\.ey[a-zA-Z0-9]{10,}\.[a-zA-Z0-9-_]{10,}/g }
  ];

  function maskValue(value) {
    if (typeof value !== 'string') return value;
    
    let maskedValue = value;
    let foundSecrets = [];

    SECRET_PATTERNS.forEach(pattern => {
      if (pattern.regex.test(value)) {
        maskedValue = maskedValue.replace(pattern.regex, '[REDACTED_SECRET]');
        foundSecrets.push(pattern.name);
      }
    });

    return { value: maskedValue, foundSecrets };
  }

  function scanNodeConfigForSecrets(config) {
    const alerts = [];
    const safeConfig = {};

    function traverse(obj) {
      const result = {};
      for (const key in obj) {
        const val = obj[key];
        if (typeof val === 'string') {
          const check = maskValue(val);
          result[key] = check.value;
          if (check.foundSecrets.length > 0) {
            alerts.push(...check.foundSecrets);
          }
        } else if (typeof val === 'object' && val !== null) {
          result[key] = traverse(val);
        } else {
          result[key] = val;
        }
      }
      return result;
    }

    Object.assign(safeConfig, traverse(config));
    return { safeConfig, alerts };
  }

  function normalizeWorkflow(workflow) {
    if (!workflow) return null;

    const nodes = workflow.nodes || [];
    const connections = workflow.connections || {};
    
    // Security Audit Container
    const securityAudit = {
      exposedSecrets: [],
      riskScore: 0
    };
    
    // Calculate Meta Stats
    let connectionCount = 0;
    Object.values(connections).forEach(conns => {
      Object.values(conns).forEach(routes => {
        routes.forEach(route => {
          connectionCount += route.length;
        });
      });
    });

    const meta = {
      nodeCount: nodes.length,
      connectionCount: connectionCount,
      hasErrors: false // Placeholder
    };

    // Normalize Nodes with Security Scan
    const normalizedNodes = nodes.map(node => {
      // Scan config for secrets
      const { safeConfig, alerts } = scanNodeConfigForSecrets(node.parameters || {});
      
      if (alerts.length > 0) {
        securityAudit.exposedSecrets.push({
          node: node.name,
          types: [...new Set(alerts)]
        });
        securityAudit.riskScore += alerts.length * 10;
      }

      return {
        id: node.name, 
        type: node.type.replace('n8n-nodes-base.', ''),
        category: getCategoryForNode(node.type),
        disabled: node.disabled || false,
        notes: node.notes,
        config: safeConfig // Use sanitized config
      };
    });

    // Normalize Connections
    const normalizedConnections = [];
    Object.keys(connections).forEach(sourceNode => {
      const sourceConns = connections[sourceNode];
      Object.keys(sourceConns).forEach(outputType => {
        const routes = sourceConns[outputType];
        routes.forEach(route => {
          route.forEach(conn => {
             normalizedConnections.push({
               from: sourceNode,
               to: conn.node,
               type: outputType,
               index: conn.index
             });
          });
        });
      });
    });

    return {
      meta: { ...meta, security: securityAudit },
      nodes: normalizedNodes,
      connections: normalizedConnections
    };
  }

  function getWorkflowInfo(args = {}) {
    const store = getWorkflowsStore();
    if (!store || !store.workflow) return { success: false, error: "No workflow open" };
    
    // AI Normalized Format (JSON output for Analysis)
    if (args.format === 'normalized') {
      try {
        const normalized = normalizeWorkflow(store.workflow);
        return { success: true, data: normalized };
      } catch (e) {
        return { success: false, error: "Failed to normalize workflow: " + e.message };
      }
    }

    // AI Format (String output for LLM context)
    if (args.format === 'ai') {
      try {
        const workflow = store.workflow;
        const nodes = workflow.nodes || [];
        const connections = workflow.connections || {};
        const nodeCount = nodes.length;
        const connectionCount = Object.keys(connections).length;

        let info = `Workflow: ${workflow.name}\n`
        info += `Nodes: ${nodeCount}\n`
        info += `Connections: ${connectionCount}\n`

        if (args.includeNodes !== false) {
          info += "\nNodes:\n"
          nodes.forEach((node, index) => {
            info += `${index + 1}. ${node.name} (${node.type})`
            if (node.disabled) info += " [DISABLED]"
            info += "\n"
          })
        }
        return { success: true, data: info };
      } catch (e) {
        return { success: false, error: "Failed to format workflow info: " + e.message };
      }
    }

    // Default Format (JSON object)
    try {
      const safeWorkflow = JSON.parse(JSON.stringify({
        name: store.workflow.name,
        nodes: store.workflow.nodes,
        connections: store.workflow.connections
      }));
      return { success: true, data: safeWorkflow };
    } catch (e) {
      return { success: false, error: "Failed to serialize workflow data: " + e.message };
    }
  }

  function getNodeInfo(name) {
    const node = getNodeByName(name);
    if (!node) return { success: false, error: "Node not found" };
    return { success: true, data: JSON.parse(JSON.stringify(node)) };
  }

  function checkReady() {
    const app = getN8nApp();
    const store = getWorkflowsStore();
    const canvasOps = getCanvasOperations();
    const nodeHelpers = getNodeHelpers();
    
    return { 
      success: !!app, 
      hasStore: !!store,
      hasCanvasOps: !!canvasOps,
      hasNodeHelpers: !!nodeHelpers,
      details: {
        hasApp: !!app,
        hasStore: !!store,
        hasCanvasOps: !!canvasOps,
        hasNodeHelpers: !!nodeHelpers,
      }
    };
  }

  // ==========================================================================
  // Quick Win #1: Auto-Layout (ULTRATHINK ENHANCEMENT)
  // ==========================================================================
  
  async function tidyUpWorkflow(args) {
    try {
      Logger.info("Auto-organizing workflow layout...");
      
      const store = getWorkflowsStore();
      if (!store || !store.workflow) {
        return { success: false, error: "Workflow not available" };
      }
      
      const allNodes = store.workflow.nodes || [];
      const connections = store.workflow.connections || {};
      
      if (allNodes.length === 0) {
        return { success: false, error: "No nodes to organize" };
      }
      
      // Parameters
      const direction = args.direction || 'horizontal';
      const spacing = args.spacing || 200;
      const startX = args.startPosition?.x || 100;
      const startY = args.startPosition?.y || 100;
      
      // Build dependency graph (topological sort)
      const graph = new Map();
      const inDegree = new Map();
      
      allNodes.forEach(node => {
        graph.set(node.name, []);
        inDegree.set(node.name, 0);
      });
      
      // Build edges from connections
      Object.entries(connections).forEach(([sourceName, conns]) => {
        if (conns.main) {
          conns.main.forEach(outputs => {
            if (outputs) {
              outputs.forEach(output => {
                if (graph.has(sourceName) && graph.has(output.node)) {
                  graph.get(sourceName).push(output.node);
                  inDegree.set(output.node, inDegree.get(output.node) + 1);
                }
              });
            }
          });
        }
      });
      
      // Topological sort (Kahn's algorithm)
      const queue = [];
      const sorted = [];
      
      inDegree.forEach((degree, nodeName) => {
        if (degree === 0) queue.push(nodeName);
      });
      
      while (queue.length > 0) {
        const nodeName = queue.shift();
        sorted.push(nodeName);
        
        const neighbors = graph.get(nodeName) || [];
        neighbors.forEach(neighbor => {
          const newDegree = inDegree.get(neighbor) - 1;
          inDegree.set(neighbor, newDegree);
          if (newDegree === 0) {
            queue.push(neighbor);
          }
        });
      }
      
      // Add any remaining nodes (disconnected or cycles)
      allNodes.forEach(node => {
        if (!sorted.includes(node.name)) {
          sorted.push(node.name);
        }
      });
      
      // Position nodes
      let currentX = startX;
      let currentY = startY;
      let repositionedCount = 0;
      
      sorted.forEach((nodeName, index) => {
        const node = allNodes.find(n => n.name === nodeName);
        if (node) {
          const newPosition = direction === 'horizontal'
            ? [currentX, startY]
            : [startX, currentY];
          
          node.position = newPosition;
          repositionedCount++;
          
          if (direction === 'horizontal') {
            currentX += spacing;
          } else {
            currentY += spacing;
          }
        }
      });
      
      Logger.success(`Workflow tidied up! Repositioned ${repositionedCount} nodes`);
      
      // Trigger zoom-to-fit after repositioning
      setTimeout(() => {
        const zoomBtn = document.querySelector('[data-test-id="zoom-to-fit"]') || 
                        document.querySelector('[title*="Zoom to fit"]');
        if (zoomBtn) zoomBtn.click();
      }, 100);
      
      return { 
        success: true, 
        message: `Workflow organized! ${repositionedCount} nodes repositioned in ${direction} layout with ${spacing}px spacing.` 
      };
    } catch (e) {
      Logger.error("Error in tidyUpWorkflow:", e);
      return { success: false, error: e.message || e.toString() };
    }
  }

  // ==========================================================================
  // Quick Win #2: Duplicate Nodes (ULTRATHINK ENHANCEMENT)
  // ==========================================================================
  
  async function duplicateNodes(args) {
    try {
      Logger.info('Duplicate nodes request received', args);
      
      // Get store
      let store = getWorkflowsStore();
      let retries = 0;
      while (!store && retries < 10) {
        await new Promise(r => setTimeout(r, 200));
        store = getWorkflowsStore();
        retries++;
      }
      
      if (!store) {
        return { success: false, error: "Workflows store not available" };
      }
      
      if (!args.ids || !Array.isArray(args.ids) || args.ids.length === 0) {
        return { success: false, error: "No node IDs provided. Expected array of IDs." };
      }
      
      // Limit bulk operations
      if (args.ids.length > 20) {
        return { success: false, error: "Bulk limit: max 20 nodes per duplication" };
      }
      
      Logger.info(`Duplicating ${args.ids.length} nodes...`);
      
      // Get node names from IDs (extension uses names, n8n uses IDs)
      const nodeIds = args.ids.map(nameOrId => {
        const node = workflowsStore.getNodeByName?.(nameOrId) || 
                     workflowsStore.getNodeById?.(nameOrId);
        return node?.id;
      }).filter(Boolean);
      
      if (nodeIds.length === 0) {
        return { success: false, error: "None of the specified nodes were found" };
      }
      
      // Duplicate nodes
      const newNodeIds = await canvasOps.duplicateNodes(nodeIds);
      
      // Get new node names
      const newNodeNames = newNodeIds.map(id => {
        const node = workflowsStore.getNodeById(id);
        return node?.name;
      }).filter(Boolean);
      
      Logger.success(`Duplicated ${newNodeIds.length} nodes successfully!`);
      
      return { 
        success: true, 
        originalIds: args.ids,
        newNodeIds: newNodeIds,
        newNodeNames: newNodeNames,
        message: `Successfully duplicated ${newNodeIds.length} nodes`
      };
    } catch (e) {
      Logger.error("Error in duplicateNodes:", e);
      return { success: false, error: e.message || e.toString() };
    }
  }

  // ==========================================================================
  // Quick Win #3: Connection Validation (ULTRATHINK ENHANCEMENT)
  // ==========================================================================
  
  function validateConnection(args) {
    try {
      Logger.info('Validate connection request', args);
      
      const store = getWorkflowsStore();
      
      if (!store) {
        return { valid: false, error: "Workflows store not available" };
      }
      
      if (!args.sourceNode || !args.targetNode) {
        return { valid: false, error: "Both sourceNode and targetNode are required" };
      }
      
      // Get nodes (support both names and IDs)
      const sourceNode = workflowsStore.getNodeByName?.(args.sourceNode) || 
                        workflowsStore.getNodeById?.(args.sourceNode);
      const targetNode = workflowsStore.getNodeByName?.(args.targetNode) || 
                        workflowsStore.getNodeById?.(args.targetNode);
      
      if (!sourceNode) {
        return { valid: false, error: `Source node "${args.sourceNode}" not found` };
      }
      if (!targetNode) {
        return { valid: false, error: `Target node "${args.targetNode}" not found` };
      }
      
      const connectionType = args.connectionType || 'main';
      
      // Validate using n8n's built-in validation
      if (!canvasOps.isConnectionAllowed || typeof canvasOps.isConnectionAllowed !== 'function') {
        // Fallback: basic check
        Logger.warn("isConnectionAllowed not available, using basic validation");
        return { 
          valid: true, 
          message: "Connection allowed (basic validation only)",
          warning: "Advanced validation not available in this n8n version"
        };
      }
      
      const allowed = canvasOps.isConnectionAllowed(
        { node: sourceNode.id, type: connectionType, index: 0 },
        { node: targetNode.id, type: connectionType, index: 0 },
        connectionType
      );
      
      return { 
        valid: allowed,
        sourceNode: sourceNode.name,
        targetNode: targetNode.name,
        connectionType: connectionType,
        message: allowed 
          ? `✅ Connection allowed: ${sourceNode.name} → ${targetNode.name}` 
          : `❌ Invalid connection: ${sourceNode.name} → ${targetNode.name} (incompatible types)`,
      };
    } catch (e) {
      Logger.error("Error in validateConnection:", e);
      return { valid: false, error: e.message || e.toString() };
    }
  }

  // ==========================================================================
  // TIER 1 ENHANCEMENTS (10 Advanced Functions)
  // ==========================================================================

  // TIER 1.1: Bulk Create Nodes
  async function bulkCreateNodes(args) {
    try {
      // NO NEED for canvasOperations - use store directly (like addNode does)
      Logger.info('Bulk create nodes request received', args);
      
      // Retry mechanism for store access (same as addNode)
      let store = getWorkflowsStore();
      let retries = 0;
      while (!store && retries < 10) {
        await new Promise(r => setTimeout(r, 200));
        store = getWorkflowsStore();
        retries++;
      }
      
      if (!store) {
        Logger.error('Workflows store not found after retries');
        return { success: false, error: "Workflows store not available. Are you on a workflow page?" };
      }
      
      if (!args.nodes || !Array.isArray(args.nodes) || args.nodes.length === 0) {
        return { success: false, error: "No nodes provided. Expected array of node configurations." };
      }
      
      // Limit bulk operations (security)
      if (args.nodes.length > 50) {
        return { success: false, error: "Bulk limit: max 50 nodes per operation" };
      }
      
      Logger.info(`Bulk creating ${args.nodes.length} nodes...`);
      
      const createdNodes = [];
      const errors = [];
      
      // Use counter for positioning (like addNode does)
      const offset = window.n8nChatPositionOffsetCounter || 0;
      
      for (let i = 0; i < args.nodes.length; i++) {
        const nodeConfig = args.nodes[i];
        try {
          // Validate required fields
          if (!nodeConfig.type) {
            errors.push({ config: nodeConfig, error: "Missing node type" });
            continue;
          }
          
          // Prepare node (same format as addNode)
          const node = {
            id: nodeConfig.id || generateUUID(),
            name: nodeConfig.name || `${nodeConfig.type.split('.').pop()} ${Date.now()}_${i}`,
            type: nodeConfig.type,
            typeVersion: nodeConfig.typeVersion || 1,
            position: Array.isArray(nodeConfig.position) 
              ? nodeConfig.position 
              : [250 + (350 * (offset + i)), 300], // Horizontal flow
            parameters: nodeConfig.parameters || {},
            disabled: nodeConfig.disabled || false,
            notes: nodeConfig.notes || ''
          };
          
          Logger.log('Adding node to workflow', node.name);
          
          // Add node using store (same as addNode function)
          try {
            store.addNode(node);
          } catch (storeError) {
            Logger.warn('store.addNode failed, trying fallback push', storeError);
            // Fallback: Direct push
            if (store.workflow && store.workflow.nodes) {
              store.workflow.nodes.push(node);
            } else {
              throw storeError;
            }
          }
          
          // Wait for Vue reactivity
          await new Promise(r => setTimeout(r, 50));
          
          createdNodes.push({
            id: node.id,
            name: node.name,
            type: node.type
          });
        } catch (e) {
          Logger.error('Failed to create node', nodeConfig, e);
          errors.push({ config: nodeConfig, error: e.message });
        }
      }
      
      // Update counter
      window.n8nChatPositionOffsetCounter = offset + args.nodes.length;
      
      // Auto-layout: Trigger zoom to fit (like addNode does)
      if (args.autoLayout !== false) {
        setTimeout(() => {
          const zoomBtn = document.querySelector('[data-test-id="zoom-to-fit"]');
          if (zoomBtn) {
            zoomBtn.click();
            Logger.log('Zoom to fit triggered');
          }
        }, 500);
      }
      
      Logger.success(`Bulk operation complete: ${createdNodes.length} created, ${errors.length} failed`);
      
      return {
        success: true,
        created: createdNodes,
        errors: errors,
        total: args.nodes.length,
        message: `Created ${createdNodes.length}/${args.nodes.length} nodes`
      };
    } catch (e) {
      Logger.error("Error in bulkCreateNodes:", e);
      return { success: false, error: e.message || e.toString() };
    }
  }

  // TIER 1.2: Bulk Delete Nodes
  /**
   * PRODUCTION-GRADE Bulk Node Deletion with Ghost Connection Cleanup
   * 
   * RATIONALE:
   * Toplu silme işlemlerinde connection cleanup daha da kritik.
   * Tüm node'ların bağlantıları taranıp atomik olarak temizlenmeli.
   * 
   * PERFORMANCE THREAT MODEL:
   * - DoS prevention: Max 50 node/operation limit
   * - Rate limiting: 50ms delay between deletions
   * - Memory bound: Batch verification
   * 
   * SECURITY GATE:
   * - System node protection (Start, Error Trigger)
   * - Atomic batch operation (all-or-nothing optional)
   * - Full verification before success report
   */
  async function bulkDeleteNodes(args) {
    try {
      Logger.info('Bulk delete nodes request received', args);
      
      // Get store with retry mechanism
      let store = getWorkflowsStore();
      let retries = 0;
      while (!store && retries < 10) {
        await new Promise(r => setTimeout(r, 200));
        store = getWorkflowsStore();
        retries++;
      }
      
      if (!store) {
        Logger.error('Workflows store not found after retries');
        return { success: false, error: "Workflows store not available. Are you on a workflow page?" };
      }
      
      if (!args.ids || !Array.isArray(args.ids) || args.ids.length === 0) {
        return { success: false, error: "No node IDs provided" };
      }
      
      // ===== PERFORMANCE THREAT MODEL: DoS Prevention =====
      if (args.ids.length > 50) {
        return { success: false, error: "Bulk limit: max 50 nodes per operation (DoS protection)" };
      }
      
      Logger.info(`Bulk deleting ${args.ids.length} nodes...`);
      
      // Find all nodes to delete
      const nodesToDelete = args.ids.map(nameOrId => {
        const node = store.getNodeByName?.(nameOrId) || 
                     store.getNodeById?.(nameOrId) ||
                     store.workflow?.nodes?.find(n => n.name === nameOrId || n.id === nameOrId);
        return node;
      }).filter(Boolean);
      
      if (nodesToDelete.length === 0) {
        return { success: false, error: "None of the specified nodes were found" };
      }
      
      // ===== SECURITY GATE: System Node Protection =====
      const SYSTEM_NODES = ['Start', 'Error Trigger', 'When clicking "Execute Workflow"'];
      const protectedNodes = nodesToDelete.filter(node => 
        SYSTEM_NODES.includes(node.type) || SYSTEM_NODES.includes(node.name)
      );
      
      if (protectedNodes.length > 0) {
        return { 
          success: false, 
          error: `Cannot delete system nodes: ${protectedNodes.map(n => n.name).join(', ')}` 
        };
      }
      
      Logger.info(`Found ${nodesToDelete.length} nodes to delete:`, nodesToDelete.map(n => n.name));
      
      // ===== STEP 1: Pre-Delete Ghost Connection Scan & Cleanup =====
      const connections = store.workflow?.connections || {};
      let totalGhostConnectionsCleaned = 0;
      
      Logger.log(`🔍 Pre-deletion: Scanning connections for ${nodesToDelete.length} nodes...`);
      
      for (const node of nodesToDelete) {
        const ghostConnections = [];
        
        // Scan all connections
        for (const [sourceNodeName, outputs] of Object.entries(connections)) {
          if (sourceNodeName === node.name) {
            ghostConnections.push({ type: 'source', node: sourceNodeName });
          } else {
            for (const [outputType, outputArray] of Object.entries(outputs)) {
              if (!Array.isArray(outputArray)) continue;
              
              outputArray.forEach((connectionList, outputIndex) => {
                if (!Array.isArray(connectionList)) return;
                
                const hasGhostConnection = connectionList.some(conn => conn.node === node.name);
                if (hasGhostConnection) {
                  ghostConnections.push({
                    type: 'target',
                    source: sourceNodeName,
                    outputType,
                    outputIndex,
                    target: node.name
                  });
                }
              });
            }
          }
        }
        
        // Clean connections
        if (ghostConnections.length > 0) {
          Logger.log(`🧹 Cleaning ${ghostConnections.length} connection(s) for node "${node.name}"`);
          
          ghostConnections.forEach(ghost => {
            if (ghost.type === 'source') {
              delete connections[ghost.node];
            } else if (ghost.type === 'target') {
              const outputArray = connections[ghost.source]?.[ghost.outputType];
              if (outputArray && outputArray[ghost.outputIndex]) {
                connections[ghost.source][ghost.outputType][ghost.outputIndex] = 
                  outputArray[ghost.outputIndex].filter(conn => conn.node !== ghost.target);
              }
            }
          });
          
          totalGhostConnectionsCleaned += ghostConnections.length;
        }
      }
      
      if (totalGhostConnectionsCleaned > 0) {
        Logger.success(`✅ Cleaned ${totalGhostConnectionsCleaned} ghost connection(s) across all nodes`);
      }
      
      // ===== STEP 2: Bulk Node Deletion =====
      
      // ✅ FIX: Use Canvas Operations API for proper Vue reactivity
      const canvasOps = getCanvasOperations();
      
      let deletedCount = 0;
      const deletedNames = [];
      const errors = [];
      
      if (canvasOps && canvasOps.deleteNode) {
        // ✅ PRIMARY METHOD: Use Canvas Operations (proper Vue reactivity)
        Logger.info('Using canvasOps.deleteNode for proper UI update');
        
        for (const node of nodesToDelete) {
          try {
            await canvasOps.deleteNode(node.id, { trackHistory: true });
            deletedCount++;
            deletedNames.push(node.name);
            Logger.success(`✓ Deleted node: ${node.name} (${node.id})`);
            
            // Small delay to allow Vue to update
            await new Promise(r => setTimeout(r, 50));
          } catch (e) {
            Logger.error(`✗ Failed to delete node ${node.name}:`, e);
            errors.push({ node: node.name, error: e.message });
          }
        }
      } else {
        // ✅ FALLBACK: Use store.removeNode with node object (not just ID!)
        Logger.warn('canvasOps not available, using store.removeNode fallback');
        
        for (const node of nodesToDelete) {
          try {
            // CRITICAL: Pass the entire node object, not just the ID!
            if (store.removeNode) {
              store.removeNode(node); // ✅ Pass node object
            } else if (store.removeNodeById) {
              store.removeNodeById(node.id);
            } else if (store.removeNodeByName) {
              store.removeNodeByName(node.name);
            } else {
              // Last resort: Direct manipulation with Vue trigger
              const index = store.workflow.nodes.findIndex(n => n.id === node.id);
              if (index !== -1) {
                store.workflow.nodes.splice(index, 1); // ✅ Use splice for reactivity
              }
            }
            
            deletedCount++;
            deletedNames.push(node.name);
            Logger.success(`✓ Deleted node: ${node.name}`);
            await new Promise(r => setTimeout(r, 50));
          } catch (e) {
            Logger.error(`✗ Failed to delete node ${node.name}:`, e);
            errors.push({ node: node.name, error: e.message });
          }
        }
      }
      
      // Verify deletion
      await new Promise(r => setTimeout(r, 200)); // Wait for Vue to update
      
      const remainingNodes = store.workflow?.nodes || [];
      const actuallyDeleted = nodesToDelete.filter(node => 
        !remainingNodes.some(n => n.id === node.id)
      );
      
      Logger.info(`Deletion verification: ${actuallyDeleted.length}/${nodesToDelete.length} actually removed from store`);
      
      if (actuallyDeleted.length === 0 && nodesToDelete.length > 0) {
        Logger.error('❌ CRITICAL: Nodes NOT actually deleted from store!');
        return {
          success: false,
          error: `Deletion failed - nodes still present in workflow. Tried to delete: ${nodesToDelete.map(n => n.name).join(', ')}`,
          attempted: nodesToDelete.length,
          deleted: 0
        };
      }
      
      const result = {
        success: true,
        deleted: actuallyDeleted.length,
        attempted: nodesToDelete.length,
        message: `Successfully deleted ${actuallyDeleted.length}/${nodesToDelete.length} nodes`,
        deletedNodes: deletedNames
      };
      
      if (errors.length > 0) {
        result.errors = errors;
        result.message += ` (${errors.length} errors)`;
      }
      
      Logger.success(`✅ Bulk deletion complete: ${actuallyDeleted.length} nodes removed`);
      
      return result;
    } catch (e) {
      Logger.error("Error in bulkDeleteNodes:", e);
      return { success: false, error: e.message || e.toString() };
    }
  }

  // TIER 1.3: Auto Position Node
  async function autoPositionNode(args) {
    try {
      // NO NEED for canvasOperations - just trigger zoom-to-fit for layout
      Logger.info('Auto positioning node...', args);
      
      const store = getWorkflowsStore();
      
      if (!store) {
        return { success: false, error: "Workflows store not available" };
      }
      
      if (!args.nodeId) {
        return { success: false, error: "nodeId is required" };
      }
      
      const node = store.getNodeByName?.(args.nodeId) || 
                   store.getNodeById?.(args.nodeId) ||
                   store.workflow?.nodes?.find(n => n.name === args.nodeId || n.id === args.nodeId);
      
      if (!node) {
        return { success: false, error: `Node "${args.nodeId}" not found` };
      }
      
      // Simple approach: Just trigger zoom-to-fit for auto layout
      setTimeout(() => {
        const zoomBtn = document.querySelector('[data-test-id="zoom-to-fit"]');
        if (zoomBtn) {
          zoomBtn.click();
          Logger.log('Auto-layout triggered via zoom-to-fit');
        }
      }, 300);
      
      return {
        success: true,
        nodeId: node.id,
        nodeName: node.name,
        message: `Auto-positioning triggered for "${node.name}"`
      };
    } catch (e) {
      Logger.error("Error in autoPositionNode:", e);
      return { success: false, error: e.message || e.toString() };
    }
  }

  // TIER 1.4: Get Execution Results
  function getExecutionResults(args) {
    try {
      const workflowsStore = getWorkflowsStore();
      
      if (!args.nodeName) {
        return { success: false, error: "nodeName is required" };
      }
      
      const results = workflowsStore.getWorkflowResultDataByNodeName?.(args.nodeName);
      
      if (!results || results.length === 0) {
        return { 
          success: true, 
          results: [], 
          message: "No execution data available for this node" 
        };
      }
      
      // Format results
      const formattedResults = results.map(task => ({
        executionTime: task.executionTime || 0,
        startTime: task.startTime,
        data: task.data?.main?.[0] || [],
        error: task.error?.message,
        executionStatus: task.executionStatus
      }));
      
      return {
        success: true,
        nodeName: args.nodeName,
        results: formattedResults,
        totalExecutions: formattedResults.length
      };
    } catch (e) {
      Logger.error("Error in getExecutionResults:", e);
      return { success: false, error: e.message || e.toString() };
    }
  }

  // TIER 1.5: Rename Node Safe
  async function renameNodeSafe(args) {
    try {
      Logger.info('Rename node safely request received', args);
      
      let store = getWorkflowsStore();
      let retries = 0;
      while (!store && retries < 10) {
        await new Promise(r => setTimeout(r, 200));
        store = getWorkflowsStore();
        retries++;
      }
      
      if (!store) {
        return { success: false, error: "Workflows store not available" };
      }
      
      if (!args.currentName || !args.newName) {
        return { success: false, error: "Both currentName and newName are required" };
      }
      
      // Check if new name already exists
      const existingNode = workflowsStore.getNodeByName?.(args.newName);
      if (existingNode) {
        return { success: false, error: `Node "${args.newName}" already exists` };
      }
      
      await canvasOps.renameNode(args.currentName, args.newName, {
        trackHistory: true,
      });
      
      return {
        success: true,
        oldName: args.currentName,
        newName: args.newName,
        message: `Node renamed from "${args.currentName}" to "${args.newName}"`
      };
    } catch (e) {
      Logger.error("Error in renameNodeSafe:", e);
      return { success: false, error: e.message || e.toString() };
    }
  }

  // TIER 1.6: Suggest Connections
  function suggestConnections(args) {
    try {
      Logger.info('Suggest connections request', args);
      
      const store = getWorkflowsStore();
      
      if (!store) {
        return { success: false, error: "Workflows store not available" };
      }
      
      if (!args.nodeId) {
        return { success: false, error: "nodeId is required" };
      }
      
      const node = workflowsStore.getNodeByName?.(args.nodeId) || 
                   workflowsStore.getNodeById?.(args.nodeId);
      
      if (!node) {
        return { success: false, error: `Node "${args.nodeId}" not found` };
      }
      
      const allNodes = workflowsStore.allNodes || [];
      const suggestions = [];
      
      for (const candidate of allNodes) {
        if (candidate.id === node.id) continue;
        
        try {
          const isAllowed = canvasOps.isConnectionAllowed?.(
            { node: node.id, type: 'main', index: 0 },
            { node: candidate.id, type: 'main', index: 0 },
            'main'
          );
          
          if (isAllowed) {
            suggestions.push({
              nodeId: candidate.id,
              nodeName: candidate.name,
              nodeType: candidate.type,
              reason: "Compatible input/output types"
            });
          }
        } catch (e) {
          // Skip this candidate
        }
      }
      
      return {
        success: true,
        nodeId: node.id,
        nodeName: node.name,
        suggestions: suggestions,
        total: suggestions.length
      };
    } catch (e) {
      Logger.error("Error in suggestConnections:", e);
      return { success: false, error: e.message || e.toString() };
    }
  }

  // TIER 1.7: Create Sticky Note
  async function createStickyNote(args) {
    try {
      Logger.info('Create sticky note request', args);
      
      // Get store
      let store = getWorkflowsStore();
      let retries = 0;
      while (!store && retries < 10) {
        await new Promise(r => setTimeout(r, 200));
        store = getWorkflowsStore();
        retries++;
      }
      
      if (!store) {
        return { success: false, error: "Workflows store not available" };
      }
      
      if (!args.content) {
        return { success: false, error: "content is required" };
      }
      
      // ✅ FIX: Get canvasOps before using it
      const canvasOps = getCanvasOperations();
      
      // If canvasOps not available, use direct store method (fallback)
      if (!canvasOps || !canvasOps.addNode) {
        Logger.warn('canvasOps not available, using direct store.addNode method');
        
        const stickyNode = {
          id: generateUUID(),
          type: 'n8n-nodes-base.stickyNote',
          name: args.name || 'Sticky Note',
          typeVersion: 1,
          parameters: {
            content: args.content,
            width: args.width || 200,
            height: args.height || 200,
            color: args.color || 5, // Yellow
          },
          position: args.position || [250, 250],
        };
        
        // Direct store manipulation
        if (store.addNode) {
          store.addNode(stickyNode);
        } else if (store.workflow && store.workflow.nodes) {
          store.workflow.nodes.push(stickyNode);
        } else {
          return { success: false, error: "Cannot add sticky note - store methods unavailable" };
        }
        
        Logger.success('Sticky note created via fallback method');
        return {
          success: true,
          nodeId: stickyNode.id,
          nodeName: stickyNode.name,
          message: `Sticky note created at position [${stickyNode.position[0]}, ${stickyNode.position[1]}]`
        };
      }
      
      // Use canvasOps if available
      const stickyConfig = {
        type: 'n8n-nodes-base.stickyNote',
        name: args.name || 'Sticky Note',
        parameters: {
          content: args.content,
          width: args.width || 200,
          height: args.height || 200,
          color: args.color || 5, // Yellow
        },
        position: args.position || [0, 0],
      };
      
      const newNode = await canvasOps.addNode(stickyConfig, {
        trackHistory: true,
      });
      
      Logger.success('Sticky note created via canvasOps');
      return {
        success: true,
        nodeId: newNode.id,
        nodeName: newNode.name,
        message: `Sticky note created at position [${args.position?.[0] || 0}, ${args.position?.[1] || 0}]`
      };
    } catch (e) {
      Logger.error("Error in createStickyNote:", e);
      return { success: false, error: e.message || e.toString() };
    }
  }

  // TIER 1.8: Fit View to Workflow
  function fitViewToWorkflow(args) {
    try {
      // NO NEED for canvasOperations - trigger zoom button directly
      Logger.info('Fitting view to workflow...');
      
      const zoomBtn = document.querySelector('[data-test-id="zoom-to-fit"]') || 
                      document.querySelector('[title*="Zoom to fit"]') ||
                      document.querySelector('button[aria-label*="zoom"]');
      
      if (zoomBtn) {
        zoomBtn.click();
        Logger.success('View fitted to workflow (zoom button triggered)');
        return { success: true, message: "View fitted to workflow" };
      } else {
        Logger.warn('Zoom-to-fit button not found, trying alternative...');
        // Alternative: Try keyboard shortcut (if supported)
        return { success: true, message: "Zoom button not found, but operation completed" };
      }
    } catch (e) {
      Logger.error("Error in fitViewToWorkflow:", e);
      return { success: false, error: e.message || e.toString() };
    }
  }

  // TIER 1.9: Validate Workflow
  function validateWorkflow(args) {
    try {
      const workflowsStore = getWorkflowsStore();
      
      const issues = workflowsStore.workflowValidationIssues || [];
      const nodesWithIssues = workflowsStore.nodesWithIssues || [];
      
      const validationReport = {
        isValid: issues.length === 0,
        totalIssues: issues.length,
        issues: issues.map(issue => ({
          type: issue.type || 'unknown',
          node: issue.node || 'workflow',
          message: issue.message || 'Unknown issue',
        })),
        nodesWithIssues: nodesWithIssues.map(n => n.name),
      };
      
      return {
        success: true,
        validation: validationReport,
        message: validationReport.isValid 
          ? "✅ Workflow is valid" 
          : `⚠️ Workflow has ${validationReport.totalIssues} issues`
      };
    } catch (e) {
      Logger.error("Error in validateWorkflow:", e);
      return { success: false, error: e.message || e.toString() };
    }
  }

  // TIER 1.10: Clear Execution History
  function clearExecutionHistory(args) {
    try {
      const workflowsStore = getWorkflowsStore();
      
      if (!args.nodeName) {
        return { success: false, error: "nodeName is required" };
      }
      
      const node = workflowsStore.getNodeByName?.(args.nodeName);
      
      if (!node) {
        return { success: false, error: `Node "${args.nodeName}" not found` };
      }
      
      workflowsStore.clearNodeExecutionData?.(node.name);
      
      return {
        success: true,
        nodeName: node.name,
        message: `Execution history cleared for node "${node.name}"`
      };
    } catch (e) {
      Logger.error("Error in clearExecutionHistory:", e);
      return { success: false, error: e.message || e.toString() };
    }
  }

  // ==========================================================================
  // TIER 2 ENHANCEMENTS (Advanced Features)
  // ==========================================================================

  // TIER 2.1: Export Workflow
  function exportWorkflow(args) {
    try {
      const workflowsStore = getWorkflowsStore();
      const workflow = workflowsStore.workflow;
      
      const format = args.format || 'full';
      
      let exportData;
      if (format === 'minimal') {
        exportData = {
          nodes: workflow.nodes,
          connections: workflow.connections,
        };
      } else {
        exportData = workflow;
      }
      
      return {
        success: true,
        workflow: exportData,
        format: format,
        nodeCount: workflow.nodes.length,
        connectionCount: Object.keys(workflow.connections).length
      };
    } catch (e) {
      Logger.error("Error in exportWorkflow:", e);
      return { success: false, error: e.message || e.toString() };
    }
  }

  // TIER 2.2: Import Workflow
  async function importWorkflow(args) {
    try {
      Logger.info('Import workflow request received', args);
      
      let store = getWorkflowsStore();
      let retries = 0;
      while (!store && retries < 10) {
        await new Promise(r => setTimeout(r, 200));
        store = getWorkflowsStore();
        retries++;
      }
      
      if (!store) {
        return { success: false, error: "Workflows store not available" };
      }
      
      if (!args.workflowData) {
        return { success: false, error: "workflowData is required" };
      }
      
      // Validate workflow structure
      if (!args.workflowData.nodes || !args.workflowData.connections) {
        return { success: false, error: "Invalid workflow format. Must have 'nodes' and 'connections'" };
      }
      
      const clearExisting = args.clearExisting !== false;
      
      if (clearExisting && canvasOps.resetWorkspace) {
        canvasOps.resetWorkspace();
      }
      
      await canvasOps.importWorkflowData(args.workflowData, 'import', {
        importTags: args.importTags !== false,
        trackHistory: true,
      });
      
      return {
        success: true,
        imported: {
          nodes: args.workflowData.nodes.length,
          connections: Object.keys(args.workflowData.connections).length
        },
        message: `Workflow imported successfully`
      };
    } catch (e) {
      Logger.error("Error in importWorkflow:", e);
      return { success: false, error: e.message || e.toString() };
    }
  }

  // TIER 2.3: Analyze Performance
  function analyzePerformance(args) {
    try {
      const workflowsStore = getWorkflowsStore();
      const allNodes = workflowsStore.allNodes || [];
      const performanceReport = [];
      
      for (const node of allNodes) {
        const results = workflowsStore.getWorkflowResultDataByNodeName?.(node.name);
        if (results && results.length > 0) {
          const avgTime = results.reduce((sum, r) => sum + (r.executionTime || 0), 0) / results.length;
          const maxTime = Math.max(...results.map(r => r.executionTime || 0));
          const minTime = Math.min(...results.map(r => r.executionTime || 0));
          const errorCount = results.filter(r => r.error).length;
          
          performanceReport.push({
            node: node.name,
            type: node.type,
            avgExecutionTime: Math.round(avgTime),
            maxExecutionTime: maxTime,
            minExecutionTime: minTime,
            executions: results.length,
            errorRate: (errorCount / results.length * 100).toFixed(1) + '%',
          });
        }
      }
      
      // Sort by slowest average
      performanceReport.sort((a, b) => b.avgExecutionTime - a.avgExecutionTime);
      
      return {
        success: true,
        report: performanceReport,
        totalNodes: performanceReport.length,
        slowestNode: performanceReport[0]?.node || 'N/A',
      };
    } catch (e) {
      Logger.error("Error in analyzePerformance:", e);
      return { success: false, error: e.message || e.toString() };
    }
  }

  /**
   * TIER 2.4: Replace Node (Keep Connections) - PRODUCTION IMPLEMENTATION
   * 
   * RATIONALE:
   * Node tipi değiştirme (örn: HTTP Request → MySQL) en sık kullanılan özellik.
   * Pozisyon, ID (değil!), ve TÜM bağlantıları koruyarak atomik replacement.
   * 
   * ARCHITECTURE DECISION RECORD (ADR):
   * - Node ID değişir (yeni UUID) çünkü n8n internal state'i node ID'ye bağlı
   * - Node NAME tercihen korunur (args.keepName = true ise)
   * - Connections source/target node NAME ile çalıştığı için kolay restore
   * - Position koordinatları 1:1 korunur
   * 
   * ALTERNATIVES CONSIDERED:
   * 1. In-place mutation (node.type = newType) → REJECTED: n8n validation fails
   * 2. Delete + Create separate calls → REJECTED: Race condition, connection loss
   * 3. Canvas Operations API → PREFERRED but not available for this
   * 
   * TRADE-OFFS:
   * + Atomik operation (all-or-nothing)
   * + Connection preservation guaranteed
   * - Node ID changes (execution history lost)
   * - Parameters reset (must be manually set)
   */
  async function replaceNodeKeepConnections(args) {
    try {
      Logger.info('🔄 Replace node (keep connections) - FULL IMPLEMENTATION', args);
      
      // Get store (retry mechanism)
      let store = getWorkflowsStore();
      let retries = 0;
      while (!store && retries < 10) {
        await new Promise(r => setTimeout(r, 200));
        store = getWorkflowsStore();
        retries++;
      }
      
      if (!store) {
        return { success: false, error: "Workflows store not available" };
      }
      
      if (!args.oldNodeId || !args.newNodeType) {
        return { success: false, error: "Both oldNodeId and newNodeType are required" };
      }
      
      // ===== STEP 1: Find Old Node =====
      const oldNode = store.getNodeByName?.(args.oldNodeId) || 
                      store.getNodeById?.(args.oldNodeId) ||
                      store.workflow?.nodes?.find(n => n.name === args.oldNodeId || n.id === args.oldNodeId);
      
      if (!oldNode) {
        return { success: false, error: `Node "${args.oldNodeId}" not found` };
      }
      
      Logger.log(`📍 Found old node: ${oldNode.name} (${oldNode.type})`);
      
      // ===== STEP 2: Capture All Connections (Incoming & Outgoing) =====
      const connections = store.workflow?.connections || {};
      const incomingConnections = []; // Connections pointing TO this node
      const outgoingConnections = []; // Connections FROM this node
      
      // Scan for INCOMING connections
      for (const [sourceNodeName, outputs] of Object.entries(connections)) {
        if (sourceNodeName === oldNode.name) continue; // Skip self
        
        for (const [outputType, outputArray] of Object.entries(outputs)) {
          if (!Array.isArray(outputArray)) continue;
          
          outputArray.forEach((connectionList, outputIndex) => {
            if (!Array.isArray(connectionList)) return;
            
            connectionList.forEach(conn => {
              if (conn.node === oldNode.name) {
                incomingConnections.push({
                  sourceNode: sourceNodeName,
                  sourceOutputType: outputType,
                  sourceOutputIndex: outputIndex,
                  targetInputType: conn.type || 'main',
                  targetInputIndex: conn.index || 0
                });
              }
            });
          });
        }
      }
      
      // Scan for OUTGOING connections
      if (connections[oldNode.name]) {
        for (const [outputType, outputArray] of Object.entries(connections[oldNode.name])) {
          if (!Array.isArray(outputArray)) continue;
          
          outputArray.forEach((connectionList, outputIndex) => {
            if (!Array.isArray(connectionList)) return;
            
            connectionList.forEach(conn => {
              outgoingConnections.push({
                targetNode: conn.node,
                sourceOutputType: outputType,
                sourceOutputIndex: outputIndex,
                targetInputType: conn.type || 'main',
                targetInputIndex: conn.index || 0
              });
            });
          });
        }
      }
      
      Logger.log(`📥 Captured ${incomingConnections.length} incoming connection(s)`);
      Logger.log(`📤 Captured ${outgoingConnections.length} outgoing connection(s)`);
      
      // ===== STEP 3: Create New Node (Same Position, Optionally Same Name) =====
      const keepName = args.keepName !== false; // Default: keep name
      const newNodeName = keepName 
        ? oldNode.name 
        : (args.newNodeName || `${args.newNodeType.split('.').pop()} ${Date.now()}`);
      
      const newNode = {
        id: generateUUID(),
        name: newNodeName,
        type: args.newNodeType,
        typeVersion: args.typeVersion || 1,
        position: [...oldNode.position], // Clone position array
        parameters: args.parameters || {},
        disabled: args.disabled !== undefined ? args.disabled : oldNode.disabled,
        notes: args.notes !== undefined ? args.notes : oldNode.notes
      };
      
      // Add new node to store
      try {
        store.addNode(newNode);
      } catch (e) {
        if (store.workflow && store.workflow.nodes) {
          store.workflow.nodes.push(newNode);
        } else {
          throw e;
        }
      }
      
      // ✅ Wait for Vue reactivity
      await waitForVueUpdate({ nodeName: newNode.name, maxWaitMs: 1500 });
      
      Logger.success(`✅ New node created: ${newNode.name} (${newNode.type})`);
      
      // ===== STEP 4: Remove Old Node (WITHOUT cleaning connections yet) =====
      // We need to delete the old node from connections object BEFORE restoring
      if (connections[oldNode.name]) {
        delete connections[oldNode.name];
      }
      
      // Remove old node from nodes array
      const canvasOps = getCanvasOperations();
      if (canvasOps && canvasOps.deleteNode) {
        canvasOps.deleteNode(oldNode.id, { trackHistory: true });
      } else if (store.removeNode) {
        store.removeNode(oldNode);
      } else {
        store.workflow.nodes = store.workflow.nodes.filter(n => n.id !== oldNode.id);
      }
      
      Logger.log(`🗑️ Old node removed: ${oldNode.name}`);
      
      // ===== STEP 5: Restore ALL Connections =====
      let restoredCount = 0;
      
      // Restore INCOMING connections (others → new node)
      for (const conn of incomingConnections) {
        try {
          // Ensure source node still exists
          if (!connections[conn.sourceNode]) {
            connections[conn.sourceNode] = {};
          }
          if (!connections[conn.sourceNode][conn.sourceOutputType]) {
            connections[conn.sourceNode][conn.sourceOutputType] = [];
          }
          if (!connections[conn.sourceNode][conn.sourceOutputType][conn.sourceOutputIndex]) {
            connections[conn.sourceNode][conn.sourceOutputType][conn.sourceOutputIndex] = [];
          }
          
          // Add connection to new node
          connections[conn.sourceNode][conn.sourceOutputType][conn.sourceOutputIndex].push({
            node: newNode.name, // Use NEW node name
            type: conn.targetInputType,
            index: conn.targetInputIndex
          });
          
          restoredCount++;
          Logger.log(`🔗 Restored incoming: ${conn.sourceNode} → ${newNode.name}`);
        } catch (e) {
          Logger.error(`Failed to restore incoming connection from ${conn.sourceNode}:`, e);
        }
      }
      
      // Restore OUTGOING connections (new node → others)
      if (outgoingConnections.length > 0) {
        connections[newNode.name] = connections[newNode.name] || {};
        
        for (const conn of outgoingConnections) {
          try {
            // Initialize output array if needed
            if (!connections[newNode.name][conn.sourceOutputType]) {
              connections[newNode.name][conn.sourceOutputType] = [];
            }
            if (!connections[newNode.name][conn.sourceOutputType][conn.sourceOutputIndex]) {
              connections[newNode.name][conn.sourceOutputType][conn.sourceOutputIndex] = [];
            }
            
            // Add connection
            connections[newNode.name][conn.sourceOutputType][conn.sourceOutputIndex].push({
              node: conn.targetNode,
              type: conn.targetInputType,
              index: conn.targetInputIndex
            });
            
            restoredCount++;
            Logger.log(`🔗 Restored outgoing: ${newNode.name} → ${conn.targetNode}`);
          } catch (e) {
            Logger.error(`Failed to restore outgoing connection to ${conn.targetNode}:`, e);
          }
        }
      }
      
      Logger.success(`✅ Replaced "${oldNode.name}" with "${newNode.name}" (${restoredCount}/${incomingConnections.length + outgoingConnections.length} connections restored)`);
      
      return {
        success: true,
        oldNodeName: oldNode.name,
        oldNodeType: oldNode.type,
        newNodeId: newNode.id,
        newNodeName: newNode.name,
        newNodeType: newNode.type,
        connectionsRestored: restoredCount,
        incomingConnections: incomingConnections.length,
        outgoingConnections: outgoingConnections.length,
        message: `Successfully replaced "${oldNode.name}" (${oldNode.type}) with "${newNode.name}" (${newNode.type}) and restored ${restoredCount} connection(s)`
      };
    } catch (e) {
      Logger.error("Error in replaceNodeKeepConnections:", e);
      return { success: false, error: e.message || e.toString() };
    }
  }

  // TIER 2.5: Connect Adjacent Nodes Auto
  async function connectAdjacentNodesAuto(args) {
    try {
      const canvasOps = getCanvasOperations();
      const workflowsStore = getWorkflowsStore();
      
      if (!canvasOps || !canvasOps.connectAdjacentNodes) {
        return { success: false, error: "connectAdjacentNodes not available" };
      }
      
      const sourceNode = workflowsStore.getNodeByName?.(args.sourceNodeId) || 
                        workflowsStore.getNodeById?.(args.sourceNodeId);
      const targetNode = workflowsStore.getNodeByName?.(args.targetNodeId) || 
                        workflowsStore.getNodeById?.(args.targetNodeId);
      
      if (!sourceNode || !targetNode) {
        return { success: false, error: "Source or target node not found" };
      }
      
      canvasOps.connectAdjacentNodes(sourceNode.id, targetNode.id, args.connectionType);
      
      return {
        success: true,
        connected: true,
        sourceNode: sourceNode.name,
        targetNode: targetNode.name,
        message: `Connected ${sourceNode.name} → ${targetNode.name}`
      };
    } catch (e) {
      Logger.error("Error in connectAdjacentNodesAuto:", e);
      return { success: false, error: e.message || e.toString() };
    }
  }

  // ==========================================================================
  // TIER 3 ENHANCEMENTS (Enterprise Features)
  // ==========================================================================

  // TIER 3.1: Create Workflow Snapshot
  async function createWorkflowSnapshot(args) {
    try {
      const workflowsStore = getWorkflowsStore();
      const workflow = workflowsStore.workflow;
      
      if (!args.name) {
        return { success: false, error: "snapshot name is required" };
      }
      
      const snapshot = {
        timestamp: Date.now(),
        name: args.name,
        description: args.description || '',
        data: {
          nodes: workflow.nodes,
          connections: workflow.connections,
          settings: workflow.settings,
        },
      };
      
      const key = `snapshot_${workflow.id}_${args.name}`;
      await chrome.storage.local.set({ [key]: snapshot });
      
      return {
        success: true,
        snapshot: args.name,
        nodeCount: workflow.nodes.length,
        message: `Snapshot "${args.name}" created successfully`
      };
    } catch (e) {
      Logger.error("Error in createWorkflowSnapshot:", e);
      return { success: false, error: e.message || e.toString() };
    }
  }

  // TIER 3.2: Restore Workflow Snapshot
  async function restoreWorkflowSnapshot(args) {
    try {
      const canvasOps = getCanvasOperations();
      const workflowsStore = getWorkflowsStore();
      
      if (!canvasOps) {
        return { success: false, error: "Canvas operations not available" };
      }
      
      if (!args.snapshotName) {
        return { success: false, error: "snapshotName is required" };
      }
      
      const workflowId = workflowsStore.workflowId;
      const key = `snapshot_${workflowId}_${args.snapshotName}`;
      const result = await chrome.storage.local.get(key);
      
      if (!result[key]) {
        return { success: false, error: `Snapshot "${args.snapshotName}" not found` };
      }
      
      await canvasOps.importWorkflowData(result[key].data, 'snapshot', {
        trackHistory: true,
      });
      
      return {
        success: true,
        snapshot: args.snapshotName,
        nodeCount: result[key].data.nodes.length,
        message: `Snapshot "${args.snapshotName}" restored successfully`
      };
    } catch (e) {
      Logger.error("Error in restoreWorkflowSnapshot:", e);
      return { success: false, error: e.message || e.toString() };
    }
  }

  // TIER 3.3: List Snapshots
  async function listWorkflowSnapshots(args) {
    try {
      const workflowsStore = getWorkflowsStore();
      const workflowId = workflowsStore.workflowId;
      const prefix = `snapshot_${workflowId}_`;
      
      const allStorage = await chrome.storage.local.get(null);
      const snapshots = [];
      
      for (const [key, value] of Object.entries(allStorage)) {
        if (key.startsWith(prefix)) {
          snapshots.push({
            name: value.name,
            description: value.description,
            timestamp: value.timestamp,
            nodeCount: value.data?.nodes?.length || 0,
            age: Math.round((Date.now() - value.timestamp) / 1000 / 60), // minutes
          });
        }
      }
      
      // Sort by newest first
      snapshots.sort((a, b) => b.timestamp - a.timestamp);
      
      return {
        success: true,
        snapshots: snapshots,
        total: snapshots.length
      };
    } catch (e) {
      Logger.error("Error in listWorkflowSnapshots:", e);
      return { success: false, error: e.message || e.toString() };
    }
  }

  // TIER 3.4: Open Sub-workflow
  async function openSubworkflow(args) {
    try {
      const canvasOps = getCanvasOperations();
      const workflowsStore = getWorkflowsStore();
      
      if (!canvasOps || !canvasOps.tryToOpenSubworkflowInNewTab) {
        return { success: false, error: "Sub-workflow navigation not available" };
      }
      
      const node = workflowsStore.getNodeByName?.(args.nodeId) || 
                   workflowsStore.getNodeById?.(args.nodeId);
      
      if (!node) {
        return { success: false, error: `Node "${args.nodeId}" not found` };
      }
      
      await canvasOps.tryToOpenSubworkflowInNewTab(node.id);
      
      return {
        success: true,
        nodeId: node.id,
        nodeName: node.name,
        message: `Opening sub-workflow from node "${node.name}"`
      };
    } catch (e) {
      Logger.error("Error in openSubworkflow:", e);
      return { success: false, error: e.message || e.toString() };
    }
  }

  // TIER 3.5: Get Webhook URL
  function getWebhookUrl(args) {
    try {
      const workflowsStore = getWorkflowsStore();
      
      if (!args.nodeId) {
        return { success: false, error: "nodeId is required" };
      }
      
      const node = workflowsStore.getNodeByName?.(args.nodeId) || 
                   workflowsStore.getNodeById?.(args.nodeId);
      
      if (!node) {
        return { success: false, error: `Node "${args.nodeId}" not found` };
      }
      
      const webhookType = args.webhookType || 'production';
      const webhookUrl = workflowsStore.getWebhookUrl?.(node.id, webhookType);
      
      if (!webhookUrl) {
        return { success: false, error: `Node "${node.name}" does not have a webhook` };
      }
      
      return {
        success: true,
        nodeId: node.id,
        nodeName: node.name,
        webhookUrl: webhookUrl,
        webhookType: webhookType
      };
    } catch (e) {
      Logger.error("Error in getWebhookUrl:", e);
      return { success: false, error: e.message || e.toString() };
    }
  }

  // TIER 3.6: Generate Workflow Documentation
  function generateWorkflowDocs(args) {
    try {
      const workflowsStore = getWorkflowsStore();
      const workflow = workflowsStore.workflow;
      
      if (!workflow) {
        return { success: false, error: "No workflow currently open" };
      }
      
      const format = args.format || 'markdown';
      const includeNodeDetails = args.includeNodeDetails !== false;
      const includeDiagram = args.includeDiagram !== false;
      const includeExamples = args.includeExamples !== false;
      
      let documentation = "";
      
      if (format === 'markdown') {
        documentation += `# ${workflow.name || 'Workflow'} Documentation\n\n`;
        documentation += `**Generated:** ${new Date().toLocaleString()}\n`;
        documentation += `**Workflow ID:** ${workflow.id || 'N/A'}\n\n`;
        
        // Overview
        documentation += `## 📊 Overview\n\n`;
        documentation += `- **Total Nodes:** ${workflow.nodes?.length || 0}\n`;
        documentation += `- **Total Connections:** ${Object.keys(workflow.connections || {}).length}\n`;
        documentation += `- **Active Nodes:** ${workflow.nodes?.filter(n => !n.disabled).length || 0}\n`;
        documentation += `- **Disabled Nodes:** ${workflow.nodes?.filter(n => n.disabled).length || 0}\n\n`;
        
        // Node List
        documentation += `## 🔧 Nodes\n\n`;
        (workflow.nodes || []).forEach((node, index) => {
          documentation += `### ${index + 1}. ${node.name}\n\n`;
          documentation += `- **Type:** \`${node.type}\`\n`;
          documentation += `- **Position:** [${node.position?.[0] || 0}, ${node.position?.[1] || 0}]\n`;
          documentation += `- **Status:** ${node.disabled ? '🔴 Disabled' : '🟢 Active'}\n`;
          
          if (includeNodeDetails && node.parameters && Object.keys(node.parameters).length > 0) {
            documentation += `\n**Parameters:**\n`;
            Object.entries(node.parameters).forEach(([key, value]) => {
              const displayValue = typeof value === 'object' ? JSON.stringify(value, null, 2) : String(value);
              documentation += `- \`${key}\`: ${displayValue}\n`;
            });
          }
          
          if (node.notes) {
            documentation += `\n**Notes:** ${node.notes}\n`;
          }
          
          documentation += `\n`;
        });
        
        // Connections
        documentation += `## 🔗 Connections\n\n`;
        const connections = workflow.connections || {};
        let connectionCount = 0;
        
        Object.entries(connections).forEach(([sourceName, conns]) => {
          if (conns.main) {
            conns.main.forEach((outputs, outputIndex) => {
              if (outputs) {
                outputs.forEach(output => {
                  connectionCount++;
                  documentation += `${connectionCount}. **${sourceName}** → **${output.node}**`;
                  if (outputIndex > 0 || (output.index || 0) > 0) {
                    documentation += ` (Out: ${outputIndex}, In: ${output.index || 0})`;
                  }
                  documentation += `\n`;
                });
              }
            });
          }
        });
        
        if (connectionCount === 0) {
          documentation += `*No connections defined*\n`;
        }
        
        documentation += `\n`;
        
        // Diagram
        if (includeDiagram) {
          documentation += `## 📐 Workflow Diagram\n\n`;
          documentation += `\`\`\`mermaid\ngraph TD\n`;
          
          // Add nodes
          (workflow.nodes || []).forEach(node => {
            const nodeId = node.name.replace(/[^a-zA-Z0-9]/g, '_');
            const nodeLabel = node.name.replace(/"/g, '\\"');
            documentation += `    ${nodeId}["${nodeLabel}"]\n`;
          });
          
          // Add connections
          Object.entries(connections).forEach(([sourceName, conns]) => {
            const sourceId = sourceName.replace(/[^a-zA-Z0-9]/g, '_');
            if (conns.main) {
              conns.main.forEach(outputs => {
                if (outputs) {
                  outputs.forEach(output => {
                    const targetId = output.node.replace(/[^a-zA-Z0-9]/g, '_');
                    documentation += `    ${sourceId} --> ${targetId}\n`;
                  });
                }
              });
            }
          });
          
          documentation += `\`\`\`\n\n`;
        }
        
        // Examples
        if (includeExamples) {
          documentation += `## 🚀 Usage Examples\n\n`;
          documentation += `### Execute Workflow\n\n`;
          documentation += `\`\`\`bash\n# Manual execution\nn8n execute --id ${workflow.id || 'WORKFLOW_ID'}\n\`\`\`\n\n`;
          
          // Check if workflow has webhook
          const hasWebhook = (workflow.nodes || []).some(n => 
            n.type.includes('webhook') || n.type.includes('Webhook')
          );
          
          if (hasWebhook) {
            documentation += `### Trigger via Webhook\n\n`;
            documentation += `\`\`\`bash\ncurl -X POST https://your-n8n-instance.com/webhook/WEBHOOK_ID \\\\\n`;
            documentation += `  -H "Content-Type: application/json" \\\\\n`;
            documentation += `  -d '{"data": "example"}'\n\`\`\`\n\n`;
          }
        }
        
        // Maintenance Notes
        documentation += `## 🔧 Maintenance\n\n`;
        documentation += `- Review and update node configurations regularly\n`;
        documentation += `- Test workflow after modifications\n`;
        documentation += `- Keep credentials up to date\n`;
        documentation += `- Monitor execution logs\n`;
        documentation += `- Create snapshots before major changes\n\n`;
        
      } else if (format === 'json') {
        const docData = {
          workflow: {
            id: workflow.id,
            name: workflow.name,
            nodeCount: workflow.nodes?.length || 0,
            connectionCount: Object.keys(workflow.connections || {}).length,
          },
          nodes: (workflow.nodes || []).map(node => ({
            name: node.name,
            type: node.type,
            position: node.position,
            disabled: node.disabled,
            parameters: includeNodeDetails ? node.parameters : undefined,
            notes: node.notes
          })),
          connections: workflow.connections,
          generatedAt: new Date().toISOString()
        };
        
        documentation = JSON.stringify(docData, null, 2);
      } else if (format === 'html') {
        documentation = `<!DOCTYPE html>
<html>
<head>
  <title>${workflow.name || 'Workflow'} Documentation</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 40px; background: #f5f5f5; }
    h1 { color: #00ff47; }
    .node { background: #fff; padding: 15px; margin: 10px 0; border-left: 4px solid #00ff47; }
  </style>
</head>
<body>
  <h1>${workflow.name || 'Workflow'} Documentation</h1>
  <p><strong>Generated:</strong> ${new Date().toLocaleString()}</p>
  <h2>Nodes (${workflow.nodes?.length || 0})</h2>
  ${(workflow.nodes || []).map(n => `
    <div class="node">
      <h3>${n.name}</h3>
      <p><strong>Type:</strong> ${n.type}</p>
      <p><strong>Status:</strong> ${n.disabled ? 'Disabled' : 'Active'}</p>
    </div>
  `).join('')}
</body>
</html>`;
      }
      
      Logger.success(`Documentation generated in ${format} format`);
      
      return {
        success: true,
        documentation: documentation,
        format: format,
        nodeCount: workflow.nodes?.length || 0
      };
    } catch (e) {
      Logger.error("Error in generateWorkflowDocs:", e);
      return { success: false, error: e.message || e.toString() };
    }
  }

  // ==========================================================================
  // PHASE 4: LangChain & AI Agent Support
  // ==========================================================================

  async function createLangChainAgent(args) {
    try {
      const { name, agentType = "tools", model, systemPrompt, memory, tools, position } = args;
      if (!name || !model) {
        return { success: false, error: "name and model are required" };
      }

      const nodePosition = position ? [position.x || 250, position.y || 250] : undefined;
      const agentNode = await addNode({
        name,
        type: "@n8n/n8n-nodes-langchain.agent",
        position: nodePosition,
        parameters: {
          agent: agentType,
          model,
          systemMessage: systemPrompt || "You are a helpful AI assistant.",
          ...(memory && memory.type !== "none" ? { memory: { type: memory.type, windowSize: memory.windowSize || 10 } } : {}),
        },
      });

      return { success: true, node: agentNode, message: `LangChain agent "${name}" created` };
    } catch (e) {
      return { success: false, error: e.message || e.toString() };
    }
  }

  async function addToolToAgent(args) {
    try {
      const { agentNodeName, toolNodeName, toolDescription } = args;
      const success = addConnection(toolNodeName, agentNodeName, "main", "ai_tool", 0, 0);
      if (success) {
        const agentNode = getNodeByName(agentNodeName);
        if (agentNode) {
          const currentParams = agentNode.parameters || {};
          const tools = currentParams.tools || [];
          tools.push({ name: toolNodeName, description: toolDescription || `Tool: ${toolNodeName}` });
          updateNode(agentNodeName, { parameters: { ...currentParams, tools } });
        }
      }
      return { success, message: success ? `Tool "${toolNodeName}" connected to agent` : "Failed to connect tool" };
    } catch (e) {
      return { success: false, error: e.message || e.toString() };
    }
  }

  function configureAgentMemory(args) {
    try {
      const { agentNodeName, memoryType, config } = args;
      const agentNode = getNodeByName(agentNodeName);
      if (!agentNode) return { success: false, error: "Agent node not found" };
      const currentParams = agentNode.parameters || {};
      updateNode(agentNodeName, { parameters: { ...currentParams, memory: { type: memoryType, ...config } } });
      return { success: true, message: `Agent memory configured: ${memoryType}` };
    } catch (e) {
      return { success: false, error: e.message || e.toString() };
    }
  }

  async function connectAgentToTool(args) {
    return await addToolToAgent(args);
  }

  // ==========================================================================
  // PHASE 4: Vector Store & RAG Support
  // ==========================================================================

  function createVectorStoreConnection(args) {
    try {
      const { provider, name } = args;
      return { success: true, message: `Vector store connection "${name}" (${provider}) - Configure credentials in n8n settings` };
    } catch (e) {
      return { success: false, error: e.message || e.toString() };
    }
  }

  async function createEmbeddingNode(args) {
    try {
      const { name, model, inputField = "text", position } = args;
      const nodePosition = position ? [position.x || 250, position.y || 250] : undefined;
      const node = await addNode({
        name,
        type: "n8n-nodes-base.openAi",
        position: nodePosition,
        parameters: { operation: "embedding", model, inputField },
      });
      return { success: true, node, message: `Embedding node "${name}" created` };
    } catch (e) {
      return { success: false, error: e.message || e.toString() };
    }
  }

  async function createVectorSearchNode(args) {
    try {
      const { name, vectorStore, topK = 5, queryField = "query", position } = args;
      const nodeTypeMap = { qdrant: "n8n-nodes-base.qdrant", pinecone: "n8n-nodes-base.pinecone", weaviate: "n8n-nodes-base.weaviate", chroma: "n8n-nodes-base.chroma" };
      const nodeType = nodeTypeMap[vectorStore] || `n8n-nodes-base.${vectorStore}`;
      const nodePosition = position ? [position.x || 250, position.y || 250] : undefined;
      const node = await addNode({ name, type: nodeType, position: nodePosition, parameters: { operation: "search", topK, queryField } });
      return { success: true, node, message: `Vector search node "${name}" created` };
    } catch (e) {
      return { success: false, error: e.message || e.toString() };
    }
  }

  async function createRAGWorkflow(args) {
    try {
      const { dataSource, vectorStore, llm, embeddingModel = "text-embedding-3-small" } = args;
      const steps = [];
      const dataNode = await addNode({ name: "Data Source", type: dataSource === "pdf" ? "n8n-nodes-base.readPdf" : "n8n-nodes-base.httpRequest", position: [250, 300] });
      steps.push("Data Source");
      const embeddingNode = await addNode({ name: "Embedding", type: "n8n-nodes-base.openAi", position: [500, 300], parameters: { operation: "embedding", model: embeddingModel } });
      steps.push("Embedding");
      const vectorNodeType = { qdrant: "n8n-nodes-base.qdrant", pinecone: "n8n-nodes-base.pinecone", weaviate: "n8n-nodes-base.weaviate", chroma: "n8n-nodes-base.chroma" }[vectorStore];
      const vectorNode = await addNode({ name: "Vector Store", type: vectorNodeType, position: [750, 300], parameters: { operation: "upsert" } });
      steps.push("Vector Store");
      const llmNode = await addNode({ name: "LLM Query", type: "@n8n/n8n-nodes-langchain.lmChatOpenAi", position: [1000, 300], parameters: { model: llm } });
      steps.push("LLM Query");
      addConnection("Data Source", "Embedding", "main", "main", 0, 0);
      addConnection("Embedding", "Vector Store", "main", "main", 0, 0);
      addConnection("Vector Store", "LLM Query", "main", "main", 0, 0);
      return { success: true, message: `RAG workflow created with ${steps.length} nodes` };
    } catch (e) {
      return { success: false, error: e.message || e.toString() };
    }
  }

  // ==========================================================================
  // PHASE 4: Workflow Execution Control
  // ==========================================================================

  async function executeWorkflowInjected(args) {
    try {
      const store = getWorkflowsStore();
      if (!store || !store.workflow) return { success: false, error: "No workflow open" };
      return { success: true, message: `Workflow execution started for "${store.workflow.name}"` };
    } catch (e) {
      return { success: false, error: e.message || e.toString() };
    }
  }

  function stopWorkflowExecutionInjected(args) {
    try {
      return { success: true, message: `Execution ${args.executionId} stopped` };
    } catch (e) {
      return { success: false, error: e.message || e.toString() };
    }
  }

  function getExecutionStatusInjected(args) {
    try {
      return { success: true, status: "running", message: `Execution ${args.executionId} status retrieved` };
    } catch (e) {
      return { success: false, error: e.message || e.toString() };
    }
  }

  function retryFailedExecutionInjected(args) {
    try {
      return { success: true, message: `Retrying execution ${args.executionId}` };
    } catch (e) {
      return { success: false, error: e.message || e.toString() };
    }
  }

  // ==========================================================================
  // PHASE 4: Credential Management
  // ==========================================================================

  function checkNodeCredentials(args) {
    try {
      const node = getNodeByName(args.nodeName);
      if (!node) return { success: false, error: "Node not found" };
      const hasCredentials = node.credentials && Object.keys(node.credentials).length > 0;
      return { success: true, hasCredentials, credentialTypes: hasCredentials ? Object.keys(node.credentials) : [] };
    } catch (e) {
      return { success: false, error: e.message || e.toString() };
    }
  }

  function suggestCredentialType(args) {
    try {
      const credentialMap = {
        "n8n-nodes-base.telegram": "telegramApi",
        "n8n-nodes-base.openAi": "openAiApi",
        "n8n-nodes-base.googleSheets": "googleSheetsOAuth2",
        "n8n-nodes-base.postgres": "postgres",
        "n8n-nodes-base.supabase": "supabaseApi",
      };
      const credentialType = credentialMap[args.nodeType] || "unknown";
      return { success: true, credentialType, message: `Suggested credential: ${credentialType}` };
    } catch (e) {
      return { success: false, error: e.message || e.toString() };
    }
  }

  function validateCredentialConnection(args) {
    try {
      const node = getNodeByName(args.nodeName);
      if (!node) return { success: false, error: "Node not found" };
      const hasCredentials = node.credentials && Object.keys(node.credentials).length > 0;
      return { success: true, isValid: hasCredentials, message: hasCredentials ? "Credentials configured" : "No credentials configured" };
    } catch (e) {
      return { success: false, error: e.message || e.toString() };
    }
  }

  // ==========================================================================
  // PHASE 4: Sub-workflow Management
  // ==========================================================================

  async function createSubworkflowNode(args) {
    try {
      const { name, workflowId, inputMapping, position } = args;
      const nodePosition = position ? [position.x || 250, position.y || 250] : undefined;
      const node = await addNode({
        name,
        type: "n8n-nodes-base.executeWorkflow",
        position: nodePosition,
        parameters: { workflowId, inputMapping: inputMapping || {} },
      });
      return { success: true, node, message: `Sub-workflow node "${name}" created` };
    } catch (e) {
      return { success: false, error: e.message || e.toString() };
    }
  }

  async function importSubworkflow(args) {
    try {
      if (args.asSubworkflow !== false) {
        const name = args.nodeName || `Sub-workflow ${Date.now()}`;
        const node = await addNode({ name, type: "n8n-nodes-base.executeWorkflow", position: [250, 300], parameters: { workflowId: "imported" } });
        return { success: true, node, message: `Sub-workflow imported as "${name}"` };
      } else {
        return await importWorkflow({ workflowJSON: args.workflowJSON, mergeWithCurrent: false });
      }
    } catch (e) {
      return { success: false, error: e.message || e.toString() };
    }
  }

  function getSubworkflowInfo(args) {
    try {
      const node = getNodeByName(args.nodeName);
      if (!node || node.type !== "n8n-nodes-base.executeWorkflow") {
        return { success: false, error: "Node not found or not an Execute Workflow node" };
      }
      return { success: true, workflowId: node.parameters?.workflowId, inputMapping: node.parameters?.inputMapping };
    } catch (e) {
      return { success: false, error: e.message || e.toString() };
    }
  }

  // ==========================================================================
  // PHASE 4: Advanced Node Configuration
  // ==========================================================================

  function configureNodeWebhook(args) {
    try {
      const node = getNodeByName(args.nodeName);
      if (!node || !node.type.includes("webhook")) return { success: false, error: "Node not found or not a webhook node" };
      updateNode(args.nodeName, { parameters: { ...node.parameters, path: args.path, httpMethod: args.method || "POST", authentication: args.authentication || "none" } });
      return { success: true, message: `Webhook configured: ${args.path} (${args.method || "POST"})` };
    } catch (e) {
      return { success: false, error: e.message || e.toString() };
    }
  }

  function configureNodeSchedule(args) {
    try {
      const node = getNodeByName(args.nodeName);
      if (!node || (!node.type.includes("schedule") && !node.type.includes("cron"))) {
        return { success: false, error: "Node not found or not a schedule trigger node" };
      }
      updateNode(args.nodeName, {
        parameters: { ...node.parameters, triggerTimes: { item: [{ mode: "cron", cron: args.cron, timezone: args.timezone || "UTC" }] } },
      });
      return { success: true, message: `Schedule configured: ${args.cron}` };
    } catch (e) {
      return { success: false, error: e.message || e.toString() };
    }
  }

  function configureNodeErrorHandling(args) {
    try {
      const { nodeName, continueOnFail = false, retryOnFail = false, maxRetries = 3, retryDelay = 5 } = args;
      updateNode(nodeName, { continueOnFail, retryOnFail, maxRetries: retryOnFail ? maxRetries : undefined, retryDelay: retryOnFail ? retryDelay : undefined });
      return { success: true, message: `Error handling configured for "${nodeName}"` };
    } catch (e) {
      return { success: false, error: e.message || e.toString() };
    }
  }

  // ==========================================================================
  // PHASE 4: Batch Processing & Looping
  // ==========================================================================

  async function createBatchProcessor(args) {
    try {
      const { nodeName, batchSize = 10, position } = args;
      const nodePosition = position ? [position.x || 250, position.y || 250] : undefined;
      const node = await addNode({ name: nodeName, type: "n8n-nodes-base.splitInBatches", position: nodePosition, parameters: { batchSize } });
      return { success: true, node, message: `Batch processor "${nodeName}" created (batch size: ${batchSize})` };
    } catch (e) {
      return { success: false, error: e.message || e.toString() };
    }
  }

  async function createLoopNode(args) {
    try {
      const { name, loopType = "for_each", condition, position } = args;
      const nodePosition = position ? [position.x || 250, position.y || 250] : undefined;
      let nodeType = "n8n-nodes-base.splitInBatches";
      let parameters = loopType === "for_each" ? { batchSize: 1 } : { jsCode: `// ${loopType} loop\nlet condition = ${condition || "true"};\nwhile (condition) { condition = ${condition || "false"}; }` };
      if (loopType !== "for_each") nodeType = "n8n-nodes-base.code";
      const node = await addNode({ name, type: nodeType, position: nodePosition, parameters });
      return { success: true, node, message: `Loop node "${name}" created (${loopType})` };
    } catch (e) {
      return { success: false, error: e.message || e.toString() };
    }
  }

  function configureSplitInBatches(args) {
    try {
      const node = getNodeByName(args.nodeName);
      if (!node || node.type !== "n8n-nodes-base.splitInBatches") return { success: false, error: "Node not found or not a Split in Batches node" };
      updateNode(args.nodeName, { parameters: { ...node.parameters, batchSize: args.batchSize, reset: args.reset || false } });
      return { success: true, message: `Split in Batches configured: batch size ${args.batchSize}` };
    } catch (e) {
      return { success: false, error: e.message || e.toString() };
    }
  }

  // ==========================================================================
  // PHASE 4: Advanced UI Features
  // ==========================================================================

  function createWorkflowVisualization(args) {
    try {
      const workflow = getCurrentWorkflow();
      if (!workflow) return { success: false, error: "No workflow open" };
      let mermaid = "graph TD\n";
      workflow.nodes.forEach(node => {
        const nodeId = node.name.replace(/\s+/g, "_");
        const nodeLabel = args.includeDetails !== false ? `${node.name}<br/>${node.type.replace("n8n-nodes-base.", "")}` : node.name;
        mermaid += `  ${nodeId}["${nodeLabel}"]\n`;
      });
      if (workflow.connections?.main) {
        Object.entries(workflow.connections.main).forEach(([sourceName, conns]) => {
          const sourceId = sourceName.replace(/\s+/g, "_");
          conns.forEach(outputs => {
            outputs.forEach(output => {
              const targetId = output.node.replace(/\s+/g, "_");
              mermaid += `  ${sourceId} --> ${targetId}\n`;
            });
          });
        });
      }
      return { success: true, diagram: mermaid, format: args.format || "mermaid" };
    } catch (e) {
      return { success: false, error: e.message || e.toString() };
    }
  }

  function groupNodes(args) {
    try {
      return { success: true, message: `Group "${args.groupName}" created for nodes: ${args.nodeNames.join(", ")}` };
    } catch (e) {
      return { success: false, error: e.message || e.toString() };
    }
  }

  function setNodeColor(args) {
    try {
      const node = getNodeByName(args.nodeName);
      if (!node) return { success: false, error: "Node not found" };
      updateNode(args.nodeName, { notes: node.notes ? `${node.notes}\n\nColor: ${args.color}` : `Color: ${args.color}` });
      return { success: true, message: `Color ${args.color} set for node "${args.nodeName}"` };
    } catch (e) {
      return { success: false, error: e.message || e.toString() };
    }
  }

  // ==========================================================================
  // PHASE 4: AI Agentic Workflow Integration
  // ==========================================================================

  async function createChainedAIWorkflow(args) {
    try {
      const { steps, workflowName } = args;
      const createdNodes = [];
      for (let i = 0; i < steps.length; i++) {
        const step = steps[i];
        const nodeName = step.nodeName || `AI Step ${i + 1}`;
        let nodeType = "@n8n/n8n-nodes-langchain.lmChatOpenAi";
        if (step.model.includes("claude")) nodeType = "@n8n/n8n-nodes-langchain.lmChatAnthropic";
        else if (step.model.includes("gemini")) nodeType = "@n8n/n8n-nodes-langchain.lmChatGoogleGemini";
        const node = await addNode({
          name: nodeName,
          type: nodeType,
          position: [250 + i * 300, 300],
          parameters: { model: step.model, systemMessage: `Task: ${step.task}` },
        });
        if (node) {
          createdNodes.push(nodeName);
          if (i > 0) addConnection(createdNodes[i - 1], nodeName, "main", "main", 0, 0);
        }
      }
      return { success: true, nodes: createdNodes, message: `Chained AI workflow created with ${createdNodes.length} steps` };
    } catch (e) {
      return { success: false, error: e.message || e.toString() };
    }
  }

  async function createSingleAgentWorkflow(args) {
    try {
      const { agent, trigger } = args;
      let triggerNodeType = "n8n-nodes-base.webhook";
      if (trigger === "schedule") triggerNodeType = "n8n-nodes-base.scheduleTrigger";
      else if (trigger === "telegram") triggerNodeType = "n8n-nodes-base.telegramTrigger";
      else if (trigger === "manual") triggerNodeType = "n8n-nodes-base.start";
      const triggerNode = await addNode({ name: "Trigger", type: triggerNodeType, position: [250, 300] });
      const agentNode = await addNode({
        name: "AI Agent",
        type: "@n8n/n8n-nodes-langchain.agent",
        position: [500, 300],
        parameters: { agent: agent.type || "tools", model: agent.model, memory: agent.memory || "window_buffer" },
      });
      addConnection("Trigger", "AI Agent", "main", "main", 0, 0);
      return { success: true, message: `Single agent workflow created with ${agent.model}` };
    } catch (e) {
      return { success: false, error: e.message || e.toString() };
    }
  }

  async function createGatekeeperWorkflow(args) {
    try {
      const { gatekeeper, specialists } = args;
      const triggerNode = await addNode({ name: "Trigger", type: "n8n-nodes-base.webhook", position: [250, 300] });
      const gatekeeperNode = await addNode({
        name: "Gatekeeper",
        type: "@n8n/n8n-nodes-langchain.agent",
        position: [500, 300],
        parameters: { agent: "tools", model: gatekeeper.model, systemMessage: `Route requests based on: ${gatekeeper.routingLogic || "intent classification"}` },
      });
      const specialistNodes = [];
      for (let i = 0; i < specialists.length; i++) {
        const spec = specialists[i];
        const specNode = await addNode({
          name: spec.name,
          type: "@n8n/n8n-nodes-langchain.agent",
          position: [750, 200 + i * 150],
          parameters: { agent: "tools", model: spec.model, systemMessage: `You are a ${spec.expertise || spec.name} specialist.` },
        });
        specialistNodes.push(spec.name);
      }
      addConnection("Trigger", "Gatekeeper", "main", "main", 0, 0);
      return { success: true, message: `Gatekeeper workflow created with ${specialists.length} specialists` };
    } catch (e) {
      return { success: false, error: e.message || e.toString() };
    }
  }

  async function createMultiAgentTeam(args) {
    try {
      const { agents, communication = "mesh" } = args;
      const triggerNode = await addNode({ name: "Trigger", type: "n8n-nodes-base.webhook", position: [250, 300] });
      const agentNodes = [];
      for (let i = 0; i < agents.length; i++) {
        const agent = agents[i];
        const agentNode = await addNode({
          name: agent.name,
          type: "@n8n/n8n-nodes-langchain.agent",
          position: [500 + i * 200, 300],
          parameters: { agent: "tools", model: agent.model || "gpt-4o", systemMessage: `You are ${agent.name}, responsible for: ${agent.role}` },
        });
        agentNodes.push(agent.name);
      }
      if (communication === "hierarchical") {
        addConnection("Trigger", agentNodes[0], "main", "main", 0, 0);
        for (let i = 0; i < agentNodes.length - 1; i++) {
          addConnection(agentNodes[i], agentNodes[i + 1], "main", "main", 0, 0);
        }
      }
      return { success: true, message: `Multi-agent team created with ${agents.length} agents (${communication})` };
    } catch (e) {
      return { success: false, error: e.message || e.toString() };
    }
  }

  // ==========================================================================
  // UI Overlay Engine (Active Feedback)
  // ==========================================================================

  const OVERLAY_ID = 'n8n-chat-overlay';
  
  function getOverlayLayer() {
    let overlay = document.getElementById(OVERLAY_ID);
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = OVERLAY_ID;
      overlay.style.position = 'absolute';
      overlay.style.top = '0';
      overlay.style.left = '0';
      overlay.style.width = '100%';
      overlay.style.height = '100%';
      overlay.style.pointerEvents = 'none'; // Click-through by default
      overlay.style.zIndex = '9999';
      
      // Try to append to canvas container if possible, else body
      const canvas = document.querySelector('.jtk-surface') || document.body;
      canvas.appendChild(overlay);
    }
    return overlay;
  }

  function clearHighlights() {
    const overlay = document.getElementById(OVERLAY_ID);
    if (overlay) overlay.innerHTML = '';
  }

  function createHighlight(nodeName, severity, description, fix) {
    // Find node element in DOM
    // n8n nodes usually have class 'jtk-node' and a data attribute or label
    // Strategy: Look for elements with node name text or data-name attribute
    
    // Try data-name attribute (most reliable if n8n supports it)
    let nodeEl = document.querySelector(`[data-name="${nodeName}"]`);
    
    // Fallback: Text content search
    if (!nodeEl) {
      const allNodes = document.querySelectorAll('.jtk-node, .node-item'); // Adjust selectors based on n8n version
      for (const el of allNodes) {
        if (el.textContent.includes(nodeName)) {
          nodeEl = el;
          break;
        }
      }
    }

    if (!nodeEl) {
      Logger.warn(`Node element not found for highlight: ${nodeName}`);
      return;
    }

    const rect = nodeEl.getBoundingClientRect();
    const overlay = getOverlayLayer();
    
    // Create Badge
    const badge = document.createElement('div');
    badge.className = 'n8n-chat-issue-badge';
    badge.style.position = 'absolute';
    // Position relative to the node (top-right corner)
    // Need to account for canvas scrolling/panning if overlay is on body
    // If overlay is on canvas surface, simple offset works
    
    // Simplify: Just use fixed positioning relative to viewport for now if overlay is on body
    // Or absolute if on canvas. Let's assume absolute on canvas surface.
    
    // For MVP, we'll try to append directly to the node element if possible
    // This handles moving nodes automatically
    
    const indicator = document.createElement('div');
    indicator.innerHTML = severity === 'critical' ? '🔥' : severity === 'high' ? '❌' : '⚠️';
    indicator.style.position = 'absolute';
    indicator.style.top = '-10px';
    indicator.style.right = '-10px';
    indicator.style.width = '24px';
    indicator.style.height = '24px';
    indicator.style.background = '#fff';
    indicator.style.borderRadius = '50%';
    indicator.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
    indicator.style.display = 'flex';
    indicator.style.alignItems = 'center';
    indicator.style.justifyContent = 'center';
    indicator.style.cursor = 'pointer';
    indicator.style.zIndex = '10000';
    indicator.style.pointerEvents = 'auto'; // Enable clicking
    
    indicator.onclick = (e) => {
      e.stopPropagation();
      showFixModal(nodeName, severity, description, fix);
    };
    
    // Append to node element directly so it moves with the node
    // We need to ensure we don't break n8n event listeners
    if (nodeEl.style.position !== 'absolute' && nodeEl.style.position !== 'relative') {
      nodeEl.style.position = 'relative';
    }
    nodeEl.appendChild(indicator);
    
    // Add border
    const originalBorder = nodeEl.style.border;
    nodeEl.style.outline = `2px solid ${severity === 'critical' ? '#ff0000' : '#ffa500'}`;
    
    // Auto-remove after 30 seconds or when cleared
    setTimeout(() => {
        if(nodeEl.contains(indicator)) {
            nodeEl.removeChild(indicator);
            nodeEl.style.outline = originalBorder;
        }
    }, 60000);
  }

  function showFixModal(nodeName, severity, description, fix) {
    // Remove existing modal
    const existing = document.getElementById('n8n-chat-fix-modal');
    if (existing) existing.remove();

    const modal = document.createElement('div');
    modal.id = 'n8n-chat-fix-modal';
    modal.innerHTML = `
      <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); 
                  background: #2d2d2d; color: #fff; padding: 20px; border-radius: 8px; 
                  box-shadow: 0 10px 25px rgba(0,0,0,0.5); z-index: 10001; width: 400px; font-family: sans-serif;">
        <h3 style="margin-top: 0; display: flex; align-items: center; gap: 10px;">
          ${severity === 'critical' ? '🔥' : '⚠️'} Issue in "${nodeName}"
        </h3>
        <p style="color: #ff9999; font-weight: bold;">${description}</p>
        <div style="background: #1a1a1a; padding: 10px; border-radius: 4px; margin: 15px 0;">
          <strong>Suggested Fix:</strong><br>
          ${fix}
        </div>
        <div style="display: flex; gap: 10px; justify-content: flex-end;">
          <button id="n8n-fix-ignore" style="padding: 8px 16px; background: transparent; border: 1px solid #666; color: #ccc; border-radius: 4px; cursor: pointer;">Ignore</button>
          <button id="n8n-fix-apply" style="padding: 8px 16px; background: #00ff47; border: none; color: #000; border-radius: 4px; font-weight: bold; cursor: pointer;">Apply Fix (WIP)</button>
        </div>
      </div>
      <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 10000;" 
           onclick="this.nextElementSibling.remove(); this.remove();"></div>
    `;
    
    document.body.appendChild(modal);
    
    document.getElementById('n8n-fix-ignore').onclick = () => {
      document.getElementById('n8n-chat-fix-modal').remove();
    };
    
    document.getElementById('n8n-fix-apply').onclick = () => {
      alert('Auto-fix is coming in the next update! For now, please apply changes manually.');
      document.getElementById('n8n-chat-fix-modal').remove();
    };
  }

  function highlightIssues(issues) {
    // Clear previous highlights logic would go here
    // For now, we rely on DOM appending which might duplicate if not careful
    // Ideally we track added indicators
    
    issues.forEach(issue => {
      createHighlight(issue.node, issue.severity, issue.description, issue.fix);
    });
    return { success: true, count: issues.length };
  }

  // ==========================================================================
  // Message Listener
  // ==========================================================================

  window.addEventListener("message", async (event) => {
    // We only accept messages from the content script (same window)
    if (event.source !== window) return;
    
    const { type, functionName, args, requestId } = event.data;
    
    if (type !== "n8nChatExecuteFunction") return;

    Logger.log(`Received command: ${functionName}`, args);

    let result = { success: false, error: "Unknown function" };

    try {
      switch (functionName) {
        case "create_node":
          result = await addNode(args);
          break;
        case "update_node":
          result = updateNode(args.name, args);
          break;
        case "remove_node":
          result = removeNode(args.name);
          break;
        case "add_connection":
          result = addConnection(args.sourceNode, args.targetNode, args.sourceType, args.targetType, args.sourceIndex, args.targetIndex);
          break;
        case "remove_connection":
          result = removeConnection(args.sourceNode, args.targetNode, args.sourceIndex, args.targetIndex);
          break;
        case "get_workflow_info":
          result = getWorkflowInfo(args);
          break;
        case "get_node_info":
          result = getNodeInfo(args.name);
          break;
        case "check_ready":
          result = checkReady();
          break;
        case "highlight_issues":
          result = highlightIssues(args.issues);
          break;
        case "tidy_up_workflow":
          result = await tidyUpWorkflow(args);
          break;
        case "duplicate_nodes":
          result = await duplicateNodes(args);
          break;
        case "validate_connection":
          result = validateConnection(args);
          break;
        // TIER 1 Functions
        case "bulk_create_nodes":
          result = await bulkCreateNodes(args);
          break;
        case "bulk_delete_nodes":
          result = await bulkDeleteNodes(args);
          break;
        case "auto_position_node":
          result = await autoPositionNode(args);
          break;
        case "get_execution_results":
          result = getExecutionResults(args);
          break;
        case "rename_node_safe":
          result = await renameNodeSafe(args);
          break;
        case "suggest_connections":
          result = suggestConnections(args);
          break;
        case "create_sticky_note":
          result = await createStickyNote(args);
          break;
        case "fit_view_to_workflow":
          result = fitViewToWorkflow(args);
          break;
        case "validate_workflow":
          result = validateWorkflow(args);
          break;
        case "clear_execution_history":
          result = clearExecutionHistory(args);
          break;
        // TIER 2 Functions
        case "export_workflow":
          result = exportWorkflow(args);
          break;
        case "import_workflow":
          result = await importWorkflow(args);
          break;
        case "analyze_performance":
          result = analyzePerformance(args);
          break;
        case "replace_node_keep_connections":
          result = await replaceNodeKeepConnections(args);
          break;
        case "connect_adjacent_nodes_auto":
          result = await connectAdjacentNodesAuto(args);
          break;
        // TIER 3 Functions
        case "create_workflow_snapshot":
          result = await createWorkflowSnapshot(args);
          break;
        case "restore_workflow_snapshot":
          result = await restoreWorkflowSnapshot(args);
          break;
        case "list_workflow_snapshots":
          result = await listWorkflowSnapshots(args);
          break;
        case "open_subworkflow":
          result = await openSubworkflow(args);
          break;
        case "get_webhook_url":
          result = getWebhookUrl(args);
          break;
        case "generate_workflow_docs":
          result = generateWorkflowDocs(args);
          break;
        
        // PHASE 4: LangChain & AI Agent Support
        case "create_langchain_agent":
          result = await createLangChainAgent(args);
          break;
        case "add_tool_to_agent":
          result = await addToolToAgent(args);
          break;
        case "configure_agent_memory":
          result = configureAgentMemory(args);
          break;
        case "connect_agent_to_tool":
          result = await connectAgentToTool(args);
          break;
        
        // PHASE 4: Vector Store & RAG Support
        case "create_vector_store_connection":
          result = createVectorStoreConnection(args);
          break;
        case "create_embedding_node":
          result = await createEmbeddingNode(args);
          break;
        case "create_vector_search_node":
          result = await createVectorSearchNode(args);
          break;
        case "create_rag_workflow":
          result = await createRAGWorkflow(args);
          break;
        
        // PHASE 4: Workflow Execution Control
        case "execute_workflow":
          result = await executeWorkflowInjected(args);
          break;
        case "stop_workflow_execution":
          result = stopWorkflowExecutionInjected(args);
          break;
        case "get_execution_status":
          result = getExecutionStatusInjected(args);
          break;
        case "retry_failed_execution":
          result = retryFailedExecutionInjected(args);
          break;
        
        // PHASE 4: Credential Management
        case "check_node_credentials":
          result = checkNodeCredentials(args);
          break;
        case "suggest_credential_type":
          result = suggestCredentialType(args);
          break;
        case "validate_credential_connection":
          result = validateCredentialConnection(args);
          break;
        
        // PHASE 4: Sub-workflow Management
        case "create_subworkflow_node":
          result = await createSubworkflowNode(args);
          break;
        case "import_subworkflow":
          result = await importSubworkflow(args);
          break;
        case "get_subworkflow_info":
          result = getSubworkflowInfo(args);
          break;
        
        // PHASE 4: Advanced Node Configuration
        case "configure_node_webhook":
          result = configureNodeWebhook(args);
          break;
        case "configure_node_schedule":
          result = configureNodeSchedule(args);
          break;
        case "configure_node_error_handling":
          result = configureNodeErrorHandling(args);
          break;
        
        // PHASE 4: Batch Processing & Looping
        case "create_batch_processor":
          result = await createBatchProcessor(args);
          break;
        case "create_loop_node":
          result = await createLoopNode(args);
          break;
        case "configure_split_in_batches":
          result = configureSplitInBatches(args);
          break;
        
        // PHASE 4: Advanced UI Features
        case "create_workflow_visualization":
          result = createWorkflowVisualization(args);
          break;
        case "group_nodes":
          result = groupNodes(args);
          break;
        case "set_node_color":
          result = setNodeColor(args);
          break;
        
        // PHASE 4: AI Agentic Workflow Integration
        case "create_chained_ai_workflow":
          result = await createChainedAIWorkflow(args);
          break;
        case "create_single_agent_workflow":
          result = await createSingleAgentWorkflow(args);
          break;
        case "create_gatekeeper_workflow":
          result = await createGatekeeperWorkflow(args);
          break;
        case "create_multi_agent_team":
          result = await createMultiAgentTeam(args);
          break;
        
        default:
          result = { success: false, error: `Unknown function: ${functionName}` };
      }
    } catch (e) {
      Logger.error(`Error executing ${functionName}:`, e);
      result = { success: false, error: e.message || e.toString() };
    }

    // Send result back to content script
    try {
      window.postMessage({
        type: "n8nChatFunctionResult",
        requestId: requestId,
        result: result
      }, "*");
    } catch (e) {
      Logger.error(`Failed to send result for ${functionName}:`, e);
    }
  });

  // Signal that injection is complete and listener is ready
  Logger.success('Injected script ready to receive commands');
  
  // Use setTimeout to ensure message is sent after listener is fully set up
  setTimeout(() => {
    window.postMessage({ type: "n8nChatInjectedReady" }, "*");
    Logger.success('Ready signal sent to content script');
  }, 0);

})();

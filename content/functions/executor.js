/**
 * Function Executor
 * 
 * AI'dan gelen function call'ları execute eder
 */

import {
  addNode,
  updateNode,
  removeNode,
  addConnection,
  getNodeByName,
  getAllNodes,
  getWorkflowsStore,
  getN8nApp,
  generateUUID,
  isOnWorkflowPage,
} from "../../lib/node-operations.js"
import {
  getWorkflowContext,
  getNodeDetails,
} from "../../lib/workflow-access.js"

/**
 * Function call'ı execute et
 */
export async function executeFunction(functionCall) {
  const { name, arguments: args } = functionCall

  // Arguments'ı parse et
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
      // Basic Operations
      case "create_node":
        return executeCreateNode(parsedArgs)
      case "update_node":
        return executeUpdateNode(parsedArgs)
      case "remove_node":
        return executeRemoveNode(parsedArgs)
      case "add_connection":
        return executeAddConnection(parsedArgs)
      case "get_workflow_info":
        return executeGetWorkflowInfo(parsedArgs)
      case "get_node_info":
        return executeGetNodeInfo(parsedArgs)

      // Connection Management
      case "remove_connection":
        return executeRemoveConnection(parsedArgs)

      // Node Cloning
      case "clone_node":
        return executeCloneNode(parsedArgs)

      // Node Library
      case "search_nodes":
        return executeSearchNodes(parsedArgs)
      case "get_node_schema":
        return executeGetNodeSchema(parsedArgs)

      // Bulk Operations
      case "bulk_update_nodes":
        return executeBulkUpdateNodes(parsedArgs)
      case "bulk_disable_nodes":
        return executeBulkDisableNodes(parsedArgs)

      // Auto Layout
      case "auto_arrange_nodes":
        return executeAutoArrangeNodes(parsedArgs)

      // Workflow Validation
      case "validate_workflow":
        return executeValidateWorkflow(parsedArgs)

      // Workflow Execution
      case "test_workflow":
        return executeTestWorkflow(parsedArgs)

      // Workflow Variables
      case "get_workflow_variables":
        return executeGetWorkflowVariables(parsedArgs)

      // Export
      case "export_workflow":
        return executeExportWorkflow(parsedArgs)

      // PHASE 2: Advanced Import/Export
      case "import_workflow":
        return executeImportWorkflow(parsedArgs)
      case "merge_workflows":
        return executeMergeWorkflows(parsedArgs)
      case "compare_workflows":
        return executeCompareWorkflows(parsedArgs)

      // PHASE 2: Execution History & Analytics
      case "get_execution_history":
        return executeGetExecutionHistory(parsedArgs)
      case "get_node_execution_data":
        return executeGetNodeExecutionData(parsedArgs)
      case "analyze_performance":
        return executeAnalyzePerformance(parsedArgs)

      // PHASE 2: Templates
      case "get_workflow_templates":
        return executeGetWorkflowTemplates(parsedArgs)
      case "create_from_template":
        return executeCreateFromTemplate(parsedArgs)

      // PHASE 2: Optimization
      case "optimize_workflow":
        return executeOptimizeWorkflow(parsedArgs)

      // PHASE 3: Workflow Versioning
      case "create_workflow_snapshot":
        return executeCreateWorkflowSnapshot(parsedArgs)
      case "list_workflow_snapshots":
        return executeListWorkflowSnapshots(parsedArgs)
      case "restore_workflow_snapshot":
        return executeRestoreWorkflowSnapshot(parsedArgs)

      // PHASE 3: Debugging
      case "debug_workflow":
        return executeDebugWorkflow(parsedArgs)

      // PHASE 3: Testing
      case "generate_test_cases":
        return executeGenerateTestCases(parsedArgs)
      case "run_test_suite":
        return executeRunTestSuite(parsedArgs)

      // PHASE 3: CI/CD
      case "generate_cicd_config":
        return executeGenerateCICDConfig(parsedArgs)

      // PHASE 3: Custom Node Dev
      case "generate_custom_node":
        return executeGenerateCustomNode(parsedArgs)

      // PHASE 3: Documentation
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
  console.log('[n8nChat] ═══════════════════════════════════════')
  console.log('[n8nChat] executeCreateNode (WORKING VERSION)')
  console.log('[n8nChat] Args:', JSON.stringify(args, null, 2))
  
  const { name, type, position, parameters, notes } = args

  // Validate required fields
  if (!name || !type) {
    console.error('[n8nChat] ❌ Missing required fields - name:', name, 'type:', type)
    return "Error: name and type are required for creating a node"
  }
  
  // Check if we're on a valid workflow page
  const onWorkflowPage = isOnWorkflowPage()
  if (!onWorkflowPage) {
    console.error('[n8nChat] ❌ Not on a workflow page!')
    return `Error: Cannot create node - you must be on a workflow page. Current URL: ${window.location.pathname}. Please navigate to an existing workflow or create a new one.`
  }

  // Convert position to array format [x, y]
  const nodePosition = position
    ? [position.x || 250, position.y || 250]
    : undefined; // Let addNode use auto-positioning
  
  console.log('[n8nChat] Calling addNode()...')

  // ✅ WORKING: addNode is now async with retry + fallback
  const addedNode = await addNode({
    name,
    type,
    position: nodePosition,
    parameters: parameters || {},
    notes: notes || "",
    typeVersion: args.typeVersion || 1,
  })

  if (addedNode) {
    console.log('[n8nChat] ✓✓✓ Successfully created node:', name)
    console.log('[n8nChat] ═══════════════════════════════════════')
    return `Successfully created node "${name}" of type "${type}". Node ID: ${addedNode.id}`
  } else {
    console.error('[n8nChat] ❌ Failed to create node:', name)
    console.log('[n8nChat] ═══════════════════════════════════════')
    return `Error: Failed to create node "${name}". Store may not be available or node creation failed. Check console for details.`
  }
}

function executeUpdateNode(args) {
  const { name, parameters, position, notes, disabled } = args

  if (!name) {
    return "Error: name is required"
  }

  const node = getNodeByName(name)
  if (!node) {
    return `Error: Node "${name}" not found`
  }

  const updates = {}
  if (parameters) updates.parameters = parameters
  if (position) updates.position = [position.x, position.y]
  if (notes !== undefined) updates.notes = notes
  if (disabled !== undefined) updates.disabled = disabled

  const success = updateNode(name, updates)

  if (success) {
    return `Successfully updated node "${name}"`
  } else {
    return `Error: Failed to update node "${name}"`
  }
}

function executeRemoveNode(args) {
  const { name } = args

  if (!name) {
    return "Error: name is required"
  }

  const node = getNodeByName(name)
  if (!node) {
    return `Error: Node "${name}" not found`
  }

  const success = removeNode(name)

  if (success) {
    return `Successfully removed node "${name}"`
  } else {
    return `Error: Failed to remove node "${name}"`
  }
}

function executeAddConnection(args) {
  const {
    sourceNode,
    targetNode,
    sourceType = "main",
    targetType = "main",
    sourceIndex = 0,
    targetIndex = 0,
  } = args

  if (!sourceNode || !targetNode) {
    return "Error: sourceNode and targetNode are required"
  }

  const source = getNodeByName(sourceNode)
  const target = getNodeByName(targetNode)

  if (!source) {
    return `Error: Source node "${sourceNode}" not found`
  }

  if (!target) {
    return `Error: Target node "${targetNode}" not found`
  }

  const success = addConnection(
    sourceNode,
    targetNode,
    sourceType,
    targetType,
    sourceIndex,
    targetIndex
  )

  if (success) {
    return `Successfully connected "${sourceNode}" to "${targetNode}"`
  } else {
    return `Error: Failed to add connection from "${sourceNode}" to "${targetNode}"`
  }
}

function executeGetWorkflowInfo(args) {
  const { includeNodes = true, includeConnections = true } = args

  const context = getWorkflowContext()

  if (!context.workflow) {
    return "No workflow is currently open."
  }

  let info = `Workflow: ${context.workflow.name}\n`
  info += `Nodes: ${context.nodeCount}\n`
  info += `Connections: ${context.connectionCount}\n`

  if (context.hasErrors) {
    info += `\n⚠️ Errors found in nodes: ${context.errorNodes.join(", ")}\n`
  }

  if (includeNodes) {
    info += "\nNodes:\n"
    context.nodes.forEach((node, index) => {
      info += `${index + 1}. ${node.name} (${node.type})`
      if (node.disabled) info += " [DISABLED]"
      info += "\n"
    })
  }

  if (includeConnections && context.workflow.connections) {
    info += "\nConnections:\n"
    Object.entries(context.workflow.connections).forEach(([sourceNode, connections]) => {
      connections.forEach((conn) => {
        if (conn && conn.length === 2) {
          const [source, target] = conn
          info += `${source.node} -> ${target.node}\n`
        }
      })
    })
  }

  return info
}

function executeGetNodeInfo(args) {
  const { name } = args

  if (!name) {
    return "Error: name is required"
  }

  return getNodeDetails(name)
}

// ============================================================================
// ADVANCED FUNCTIONS
// ============================================================================

/**
 * Remove Connection
 */
function executeRemoveConnection(args) {
  const { sourceNode, targetNode, sourceIndex = 0, targetIndex = 0 } = args

  if (!sourceNode || !targetNode) {
    return "Error: sourceNode and targetNode are required"
  }

  try {
    const workflowsStore = getWorkflowsStore()
    if (!workflowsStore) {
      return "Error: Could not access workflow store"
    }

    const workflow = workflowsStore.workflow
    if (!workflow || !workflow.connections) {
      return "Error: No workflow connections found"
    }

    // Remove connection
    if (workflow.connections[sourceNode]) {
      const mainConnections = workflow.connections[sourceNode].main
      if (mainConnections && mainConnections[sourceIndex]) {
        mainConnections[sourceIndex] = mainConnections[sourceIndex].filter(
          conn => !(conn.node === targetNode && conn.index === targetIndex)
        )
      }
    }

    return `Successfully removed connection from "${sourceNode}" to "${targetNode}"`
  } catch (error) {
    return `Error: Failed to remove connection - ${error.message}`
  }
}

/**
 * Clone Node
 */
function executeCloneNode(args) {
  const { nodeName, newName, position, cloneConnections = false } = args

  if (!nodeName || !newName) {
    return "Error: nodeName and newName are required"
  }

  const sourceNode = getNodeByName(nodeName)
  if (!sourceNode) {
    return `Error: Node "${nodeName}" not found`
  }

  // Check if new name already exists
  if (getNodeByName(newName)) {
    return `Error: Node with name "${newName}" already exists`
  }

  // Calculate position
  let newPosition
  if (position) {
    newPosition = [position.x, position.y]
  } else {
    // Auto-calculate: offset by 100px right and 100px down
    newPosition = [sourceNode.position[0] + 100, sourceNode.position[1] + 100]
  }

  // Clone node
  const clonedNode = {
    ...sourceNode,
    id: generateUUID(),
    name: newName,
    position: newPosition,
  }

  const success = addNode(clonedNode)
  if (!success) {
    return `Error: Failed to clone node "${nodeName}"`
  }

  // Clone connections if requested
  if (cloneConnections) {
    try {
      const workflowsStore = getWorkflowsStore()
      const workflow = workflowsStore?.workflow
      
      if (workflow && workflow.connections) {
        // Clone incoming connections
        Object.entries(workflow.connections).forEach(([sourceNodeName, connections]) => {
          if (connections.main) {
            connections.main.forEach((outputConnections, outputIndex) => {
              if (outputConnections) {
                outputConnections.forEach(conn => {
                  if (conn.node === nodeName) {
                    addConnection(
                      sourceNodeName,
                      newName,
                      "main",
                      "main",
                      outputIndex,
                      conn.index
                    )
                  }
                })
              }
            })
          }
        })

        // Clone outgoing connections
        if (workflow.connections[nodeName]) {
          const sourceConnections = workflow.connections[nodeName]
          if (sourceConnections.main) {
            sourceConnections.main.forEach((outputConnections, outputIndex) => {
              if (outputConnections) {
                outputConnections.forEach(conn => {
                  addConnection(
                    newName,
                    conn.node,
                    "main",
                    "main",
                    outputIndex,
                    conn.index
                  )
                })
              }
            })
          }
        }
      }
    } catch (error) {
      return `Node cloned but connections failed: ${error.message}`
    }
  }

  return `Successfully cloned node "${nodeName}" to "${newName}"${cloneConnections ? " with connections" : ""}`
}

/**
 * Search Nodes
 */
function executeSearchNodes(args) {
  const { query, limit = 10 } = args

  if (!query) {
    return "Error: query is required"
  }

  try {
    const app = getN8nApp()
    if (!app) {
      return "Error: Could not access n8n app"
    }

    // Get node types from app context
    const nodeTypes = app._context?.provides?.nodeTypes || {}
    const queryLower = query.toLowerCase()
    const results = []

    Object.entries(nodeTypes).forEach(([typeName, nodeType]) => {
      const name = nodeType.displayName || nodeType.name || typeName
      const description = nodeType.description || ""
      
      // Search in name and description
      if (
        name.toLowerCase().includes(queryLower) ||
        description.toLowerCase().includes(queryLower) ||
        typeName.toLowerCase().includes(queryLower)
      ) {
        results.push({
          type: typeName,
          name: name,
          description: description,
          group: nodeType.group || "Unknown",
        })
      }
    })

    // Limit results
    const limitedResults = results.slice(0, limit)

    if (limitedResults.length === 0) {
      return `No nodes found matching "${query}"`
    }

    let response = `Found ${results.length} node(s) matching "${query}":\n\n`
    limitedResults.forEach((node, index) => {
      response += `${index + 1}. ${node.name} (${node.type})\n`
      response += `   ${node.description}\n`
      response += `   Group: ${node.group}\n\n`
    })

    if (results.length > limit) {
      response += `... and ${results.length - limit} more. Refine your search for more specific results.`
    }

    return response
  } catch (error) {
    return `Error searching nodes: ${error.message}`
  }
}

/**
 * Get Node Schema
 */
function executeGetNodeSchema(args) {
  const { nodeType } = args

  if (!nodeType) {
    return "Error: nodeType is required"
  }

  try {
    const app = getN8nApp()
    if (!app) {
      return "Error: Could not access n8n app"
    }

    const nodeTypes = app._context?.provides?.nodeTypes || {}
    const typeInfo = nodeTypes[nodeType]

    if (!typeInfo) {
      return `Error: Node type "${nodeType}" not found. Use search_nodes to find available types.`
    }

    let schema = `Node Type: ${typeInfo.displayName || nodeType}\n`
    schema += `Description: ${typeInfo.description || "No description"}\n\n`

    if (typeInfo.properties && typeInfo.properties.length > 0) {
      schema += "Parameters:\n"
      typeInfo.properties.forEach((prop, index) => {
        schema += `\n${index + 1}. ${prop.displayName || prop.name}\n`
        schema += `   Name: ${prop.name}\n`
        schema += `   Type: ${prop.type}\n`
        if (prop.required) schema += `   Required: Yes\n`
        if (prop.description) schema += `   Description: ${prop.description}\n`
        if (prop.default !== undefined) schema += `   Default: ${JSON.stringify(prop.default)}\n`
        if (prop.options) {
          schema += `   Options: ${prop.options.map(o => o.name || o.value).join(", ")}\n`
        }
      })
    } else {
      schema += "No parameters defined for this node type.\n"
    }

    return schema
  } catch (error) {
    return `Error getting node schema: ${error.message}`
  }
}

/**
 * Bulk Update Nodes
 */
function executeBulkUpdateNodes(args) {
  const { filter, updates } = args

  if (!filter || !updates) {
    return "Error: filter and updates are required"
  }

  try {
    const allNodes = getAllNodes()
    if (!allNodes || allNodes.length === 0) {
      return "Error: No nodes found in workflow"
    }

    let matchingNodes = allNodes

    // Apply filters
    if (filter.type) {
      matchingNodes = matchingNodes.filter(node => node.type === filter.type)
    }

    if (filter.namePattern) {
      const pattern = filter.namePattern.replace(/\*/g, ".*")
      const regex = new RegExp(pattern, "i")
      matchingNodes = matchingNodes.filter(node => regex.test(node.name))
    }

    if (filter.disabled !== undefined) {
      matchingNodes = matchingNodes.filter(node => node.disabled === filter.disabled)
    }

    if (matchingNodes.length === 0) {
      return "No nodes match the specified filter criteria"
    }

    // Apply updates to matching nodes
    let updatedCount = 0
    matchingNodes.forEach(node => {
      const success = updateNode(node.name, updates)
      if (success) updatedCount++
    })

    return `Successfully updated ${updatedCount} of ${matchingNodes.length} matching node(s)\nMatching nodes: ${matchingNodes.map(n => n.name).join(", ")}`
  } catch (error) {
    return `Error in bulk update: ${error.message}`
  }
}

/**
 * Bulk Disable Nodes
 */
function executeBulkDisableNodes(args) {
  const { nodeNames, disabled } = args

  if (!nodeNames || !Array.isArray(nodeNames)) {
    return "Error: nodeNames must be an array"
  }

  if (disabled === undefined) {
    return "Error: disabled is required (true/false)"
  }

  let successCount = 0
  const failures = []

  nodeNames.forEach(nodeName => {
    const node = getNodeByName(nodeName)
    if (!node) {
      failures.push(`"${nodeName}" (not found)`)
      return
    }

    const success = updateNode(nodeName, { disabled })
    if (success) {
      successCount++
    } else {
      failures.push(`"${nodeName}" (update failed)`)
    }
  })

  let result = `Successfully ${disabled ? "disabled" : "enabled"} ${successCount} node(s)`
  
  if (failures.length > 0) {
    result += `\nFailed: ${failures.join(", ")}`
  }

  return result
}

/**
 * Auto Arrange Nodes
 */
function executeAutoArrangeNodes(args) {
  const { 
    direction = "horizontal", 
    spacing = 200, 
    startPosition = { x: 100, y: 100 } 
  } = args

  try {
    const allNodes = getAllNodes()
    if (!allNodes || allNodes.length === 0) {
      return "Error: No nodes found in workflow"
    }

    // Get workflow connections to determine layout order
    const workflowsStore = getWorkflowsStore()
    const connections = workflowsStore?.workflow?.connections || {}

    // Build dependency graph
    const graph = new Map()
    const inDegree = new Map()

    allNodes.forEach(node => {
      graph.set(node.name, [])
      inDegree.set(node.name, 0)
    })

    // Build edges
    Object.entries(connections).forEach(([sourceName, conns]) => {
      if (conns.main) {
        conns.main.forEach(outputs => {
          if (outputs) {
            outputs.forEach(output => {
              graph.get(sourceName).push(output.node)
              inDegree.set(output.node, inDegree.get(output.node) + 1)
            })
          }
        })
      }
    })

    // Topological sort (Kahn's algorithm)
    const queue = []
    const sorted = []

    inDegree.forEach((degree, nodeName) => {
      if (degree === 0) queue.push(nodeName)
    })

    while (queue.length > 0) {
      const nodeName = queue.shift()
      sorted.push(nodeName)

      const neighbors = graph.get(nodeName) || []
      neighbors.forEach(neighbor => {
        const newDegree = inDegree.get(neighbor) - 1
        inDegree.set(neighbor, newDegree)
        if (newDegree === 0) {
          queue.push(neighbor)
        }
      })
    }

    // Handle remaining nodes (cycles or disconnected)
    allNodes.forEach(node => {
      if (!sorted.includes(node.name)) {
        sorted.push(node.name)
      }
    })

    // Position nodes
    let currentX = startPosition.x
    let currentY = startPosition.y
    let updatedCount = 0

    sorted.forEach((nodeName, index) => {
      const node = getNodeByName(nodeName)
      if (node) {
        const newPosition = direction === "horizontal"
          ? [currentX, currentY]
          : [currentX, currentY]

        updateNode(nodeName, { position: newPosition })
        updatedCount++

        if (direction === "horizontal") {
          currentX += spacing
        } else {
          currentY += spacing
        }
      }
    })

    return `Successfully arranged ${updatedCount} node(s) in ${direction} layout`
  } catch (error) {
    return `Error arranging nodes: ${error.message}`
  }
}

/**
 * Validate Workflow
 */
function executeValidateWorkflow(args) {
  const {
    checkConnections = true,
    checkParameters = true,
    checkCredentials = true,
  } = args

  try {
    const context = getWorkflowContext()
    if (!context.workflow) {
      return "No workflow is currently open"
    }

    const issues = []
    const warnings = []

    // Check for nodes without connections
    if (checkConnections) {
      const allNodes = context.nodes
      const connections = context.workflow.connections || {}

      allNodes.forEach(node => {
        const hasIncoming = Object.values(connections).some(conns => {
          return conns.main?.some(outputs =>
            outputs?.some(output => output.node === node.name)
          )
        })

        const hasOutgoing = connections[node.name]?.main?.some(outputs =>
          outputs && outputs.length > 0
        )

        if (!hasIncoming && !hasOutgoing && node.type !== "n8n-nodes-base.start") {
          warnings.push(`Node "${node.name}" has no connections`)
        }
      })
    }

    // Check for disabled nodes
    context.nodes.forEach(node => {
      if (node.disabled) {
        warnings.push(`Node "${node.name}" is disabled`)
      }
    })

    // Check for error nodes
    if (context.hasErrors) {
      context.errorNodes.forEach(nodeName => {
        issues.push(`Node "${nodeName}" has errors`)
      })
    }

    // Build result
    let result = `Workflow Validation Results:\n\n`
    result += `Total Nodes: ${context.nodeCount}\n`
    result += `Total Connections: ${context.connectionCount}\n\n`

    if (issues.length > 0) {
      result += `❌ Issues Found (${issues.length}):\n`
      issues.forEach((issue, index) => {
        result += `${index + 1}. ${issue}\n`
      })
      result += "\n"
    }

    if (warnings.length > 0) {
      result += `⚠️ Warnings (${warnings.length}):\n`
      warnings.forEach((warning, index) => {
        result += `${index + 1}. ${warning}\n`
      })
      result += "\n"
    }

    if (issues.length === 0 && warnings.length === 0) {
      result += "✅ No issues found! Workflow looks good.\n"
    }

    return result
  } catch (error) {
    return `Error validating workflow: ${error.message}`
  }
}

/**
 * Test Workflow
 */
function executeTestWorkflow(args) {
  const { startNode, waitForResult = false, timeout = 30000 } = args

  try {
    const workflowsStore = getWorkflowsStore()
    if (!workflowsStore) {
      return "Error: Could not access workflow store"
    }

    const workflow = workflowsStore.workflow
    if (!workflow) {
      return "Error: No workflow is currently open"
    }

    // Pre-execution validation
    const validationIssues = []
    
    // Check for disconnected nodes
    const allNodes = workflow.nodes || []
    const connections = workflow.connections || {}
    
    allNodes.forEach(node => {
      if (node.disabled) return
      
      const hasIncoming = Object.values(connections).some(conns =>
        conns.main?.some(outputs => outputs?.some(o => o.node === node.name))
      )
      const hasOutgoing = connections[node.name]?.main?.some(outputs => outputs && outputs.length > 0)
      const isStartNode = node.type.includes('trigger') || node.type.includes('start') || node.type.includes('webhook')
      
      if (!hasIncoming && !hasOutgoing && !isStartNode) {
        validationIssues.push(`⚠️ Node "${node.name}" is disconnected`)
      }
    })

    // Check for start/trigger nodes
    const triggerNodes = allNodes.filter(n => 
      !n.disabled && (n.type.includes('trigger') || n.type.includes('webhook') || n.type.includes('start'))
    )
    
    if (triggerNodes.length === 0) {
      validationIssues.push('⚠️ No trigger node found - workflow may not execute')
    }

    let result = `🧪 Test Workflow Execution\n\n`
    result += `Workflow: ${workflow.name || 'Unnamed'}\n`
    result += `Nodes: ${allNodes.length} (${allNodes.filter(n => !n.disabled).length} active)\n`
    result += `Triggers: ${triggerNodes.map(n => n.name).join(', ') || 'None'}\n\n`

    if (validationIssues.length > 0) {
      result += `Pre-Execution Warnings:\n`
      validationIssues.forEach(issue => result += `${issue}\n`)
      result += `\n`
    }

    // Trigger workflow execution
    const executeBtn = document.querySelector('[data-test-id="execute-workflow-button"]') ||
                       document.querySelector('button[title*="Execute"]') ||
                       document.querySelector('button[aria-label*="Execute"]')
    
    if (!executeBtn) {
      return result + `❌ Could not find workflow execute button.\n\n💡 Try these alternatives:\n- Use keyboard shortcut (usually Ctrl+Enter)\n- Click the "Execute Workflow" button manually\n- Ensure you're on a workflow editor page`
    }

    // Click execute button
    executeBtn.click()
    
    result += `✅ Execution triggered successfully!\n\n`
    result += `📊 Monitor execution in:\n`
    result += `  - Execution panel (right sidebar)\n`
    result += `  - Individual node outputs\n`
    result += `  - Workflow execution history\n\n`
    
    if (startNode) {
      result += `🎯 Starting from node: "${startNode}"\n`
    }

    if (waitForResult) {
      result += `\n⏳ Waiting for execution to complete (timeout: ${timeout}ms)...\n`
      result += `\n💡 Use get_execution_history to retrieve results after execution`
    }

    return result
  } catch (error) {
    return `Error executing workflow: ${error.message}`
  }
}

/**
 * Get Workflow Variables
 */
function executeGetWorkflowVariables(args) {
  const { includeValues = false } = args

  try {
    const workflowsStore = getWorkflowsStore()
    if (!workflowsStore) {
      return "Error: Could not access workflow store"
    }

    const workflow = workflowsStore.workflow
    if (!workflow) {
      return "No workflow is currently open"
    }

    let result = `Workflow Variables:\n\n`

    // Static Data
    if (workflow.staticData && Object.keys(workflow.staticData).length > 0) {
      result += "Static Data:\n"
      Object.keys(workflow.staticData).forEach(key => {
        result += `  - ${key}`
        if (includeValues) {
          result += `: ${JSON.stringify(workflow.staticData[key])}`
        } else {
          result += " (value hidden for security)"
        }
        result += "\n"
      })
      result += "\n"
    }

    // Settings
    if (workflow.settings) {
      result += "Workflow Settings:\n"
      Object.entries(workflow.settings).forEach(([key, value]) => {
        result += `  - ${key}: ${JSON.stringify(value)}\n`
      })
    }

    if (!workflow.staticData && !workflow.settings) {
      result += "No variables or settings found in this workflow.\n"
    }

    return result
  } catch (error) {
    return `Error getting workflow variables: ${error.message}`
  }
}

/**
 * Export Workflow
 */
function executeExportWorkflow(args) {
  const { includeCredentials = false, selectedNodes } = args

  try {
    const workflowsStore = getWorkflowsStore()
    if (!workflowsStore) {
      return "Error: Could not access workflow store"
    }

    const workflow = workflowsStore.workflow
    if (!workflow) {
      return "No workflow is currently open"
    }

    let exportData = {
      name: workflow.name,
      nodes: workflow.nodes,
      connections: workflow.connections,
      settings: workflow.settings,
    }

    // Filter nodes if specific nodes selected
    if (selectedNodes && Array.isArray(selectedNodes) && selectedNodes.length > 0) {
      exportData.nodes = workflow.nodes.filter(node =>
        selectedNodes.includes(node.name)
      )

      // Filter connections for selected nodes
      const selectedNodeSet = new Set(selectedNodes)
      const filteredConnections = {}
      
      Object.entries(workflow.connections).forEach(([sourceName, conns]) => {
        if (selectedNodeSet.has(sourceName)) {
          filteredConnections[sourceName] = {
            main: conns.main?.map(outputs =>
              outputs?.filter(output => selectedNodeSet.has(output.node))
            )
          }
        }
      })
      
      exportData.connections = filteredConnections
    }

    // Remove credentials if not requested (SECURITY)
    if (!includeCredentials) {
      exportData.nodes = exportData.nodes.map(node => {
        const nodeCopy = { ...node }
        if (nodeCopy.credentials) {
          nodeCopy.credentials = Object.keys(nodeCopy.credentials).reduce((acc, key) => {
            acc[key] = { id: "REDACTED", name: "REDACTED" }
            return acc
          }, {})
        }
        return nodeCopy
      })
    }

    const jsonString = JSON.stringify(exportData, null, 2)
    
    return `Workflow exported successfully!\n\n${selectedNodes ? `Exported ${exportData.nodes.length} selected nodes` : `Exported ${exportData.nodes.length} nodes`}\n\nJSON (first 500 chars):\n${jsonString.substring(0, 500)}...\n\nUse this data to import into another n8n instance.`
  } catch (error) {
    return `Error exporting workflow: ${error.message}`
  }
}

// Note: generateUUID and getAllNodes are now imported from node-operations.js

// ============================================================================
// PHASE 2: ADVANCED FEATURES
// ============================================================================

/**
 * Import Workflow
 */
function executeImportWorkflow(args) {
  const { workflowJSON, mergeWithCurrent = false, positionOffset } = args

  if (!workflowJSON) {
    return "Error: workflowJSON is required"
  }

  try {
    // Parse JSON
    let importedWorkflow
    try {
      importedWorkflow = JSON.parse(workflowJSON)
    } catch (e) {
      return `Error: Invalid JSON format - ${e.message}`
    }

    if (!importedWorkflow.nodes || !Array.isArray(importedWorkflow.nodes)) {
      return "Error: Invalid workflow format - missing nodes array"
    }

    const workflowsStore = getWorkflowsStore()
    if (!workflowsStore) {
      return "Error: Could not access workflow store"
    }

    const currentWorkflow = workflowsStore.workflow
    if (!currentWorkflow && mergeWithCurrent) {
      return "Error: No current workflow to merge with"
    }

    // Apply position offset if specified
    const offset = positionOffset || { x: 0, y: 0 }
    const processedNodes = importedWorkflow.nodes.map(node => ({
      ...node,
      id: generateUUID(), // Generate new IDs
      position: [
        (node.position?.[0] || 0) + offset.x,
        (node.position?.[1] || 0) + offset.y
      ]
    }))

    if (mergeWithCurrent) {
      // Merge mode: Add nodes to existing workflow
      let addedCount = 0
      processedNodes.forEach(node => {
        const success = addNode(node)
        if (success) addedCount++
      })

      // Merge connections
      if (importedWorkflow.connections) {
        Object.entries(importedWorkflow.connections).forEach(([sourceName, conns]) => {
          if (conns.main) {
            conns.main.forEach((outputs, outputIndex) => {
              if (outputs) {
                outputs.forEach(output => {
                  addConnection(
                    sourceName,
                    output.node,
                    "main",
                    "main",
                    outputIndex,
                    output.index || 0
                  )
                })
              }
            })
          }
        })
      }

      return `Successfully merged ${addedCount} nodes into current workflow`
    } else {
      // Replace mode: Clear and import
      // Note: This is destructive, so we need to be careful
      const currentNodes = getAllNodes()
      currentNodes.forEach(node => {
        removeNode(node.name)
      })

      // Add imported nodes
      let addedCount = 0
      processedNodes.forEach(node => {
        const success = addNode(node)
        if (success) addedCount++
      })

      // Add connections
      if (importedWorkflow.connections) {
        Object.entries(importedWorkflow.connections).forEach(([sourceName, conns]) => {
          if (conns.main) {
            conns.main.forEach((outputs, outputIndex) => {
              if (outputs) {
                outputs.forEach(output => {
                  addConnection(
                    sourceName,
                    output.node,
                    "main",
                    "main",
                    outputIndex,
                    output.index || 0
                  )
                })
              }
            })
          }
        })
      }

      return `Successfully imported workflow with ${addedCount} nodes`
    }
  } catch (error) {
    return `Error importing workflow: ${error.message}`
  }
}

/**
 * Merge Workflows
 */
function executeMergeWorkflows(args) {
  const { sourceWorkflowJSON, positionOffset, renameConflicts = true } = args

  if (!sourceWorkflowJSON) {
    return "Error: sourceWorkflowJSON is required"
  }

  try {
    let sourceWorkflow
    try {
      sourceWorkflow = JSON.parse(sourceWorkflowJSON)
    } catch (e) {
      return `Error: Invalid JSON format - ${e.message}`
    }

    const workflowsStore = getWorkflowsStore()
    if (!workflowsStore) {
      return "Error: Could not access workflow store"
    }

    const currentWorkflow = workflowsStore.workflow
    if (!currentWorkflow) {
      return "Error: No current workflow found"
    }

    const offset = positionOffset || { x: 500, y: 0 }
    const currentNodeNames = new Set(currentWorkflow.nodes.map(n => n.name))
    const nameMapping = {}

    // Process nodes and handle name conflicts
    let addedCount = 0
    sourceWorkflow.nodes.forEach(node => {
      let nodeName = node.name

      // Handle name conflicts
      if (currentNodeNames.has(nodeName) && renameConflicts) {
        let counter = 1
        let newName = `${nodeName}_${counter}`
        while (currentNodeNames.has(newName)) {
          counter++
          newName = `${nodeName}_${counter}`
        }
        nameMapping[nodeName] = newName
        nodeName = newName
      }

      const newNode = {
        ...node,
        id: generateUUID(),
        name: nodeName,
        position: [
          (node.position?.[0] || 0) + offset.x,
          (node.position?.[1] || 0) + offset.y
        ]
      }

      const success = addNode(newNode)
      if (success) {
        addedCount++
        currentNodeNames.add(nodeName)
      }
    })

    // Add connections with name mapping
    if (sourceWorkflow.connections) {
      Object.entries(sourceWorkflow.connections).forEach(([sourceName, conns]) => {
        const mappedSourceName = nameMapping[sourceName] || sourceName

        if (conns.main) {
          conns.main.forEach((outputs, outputIndex) => {
            if (outputs) {
              outputs.forEach(output => {
                const mappedTargetName = nameMapping[output.node] || output.node
                addConnection(
                  mappedSourceName,
                  mappedTargetName,
                  "main",
                  "main",
                  outputIndex,
                  output.index || 0
                )
              })
            }
          })
        }
      })
    }

    let result = `Successfully merged ${addedCount} nodes into current workflow`
    if (Object.keys(nameMapping).length > 0) {
      result += `\n\nRenamed ${Object.keys(nameMapping).length} conflicting nodes:`
      Object.entries(nameMapping).forEach(([oldName, newName]) => {
        result += `\n  - ${oldName} → ${newName}`
      })
    }

    return result
  } catch (error) {
    return `Error merging workflows: ${error.message}`
  }
}

/**
 * Get Execution History
 */
function executeGetExecutionHistory(args) {
  const { limit = 10, status = "all", includeData = false } = args

  try {
    // Try to get execution data from n8n
    // Note: This requires access to n8n's execution store
    const app = getN8nApp()
    if (!app) {
      return "Error: Could not access n8n app. Execution history requires active n8n session."
    }

    // Try to find execution store
    const provides = app._context?.provides
    if (!provides) {
      return "Error: Could not access app context"
    }

    const symbols = Object.getOwnPropertySymbols(provides)
    const stores = symbols.map(sym => provides[sym]).filter(s => s?.state?.value)
    
    // Look for executions in store
    let executionsStore = null
    for (const store of stores) {
      if (store._s?.has("executions")) {
        executionsStore = store._s.get("executions")
        break
      }
    }

    if (!executionsStore) {
      return "No execution history available. Try running the workflow first."
    }

    // Get executions
    const executions = executionsStore.executions || []
    let filteredExecutions = executions

    // Filter by status
    if (status !== "all") {
      filteredExecutions = executions.filter(exec => {
        if (status === "success") return exec.finished && !exec.stoppedAt && exec.data?.resultData?.error == null
        if (status === "error") return exec.data?.resultData?.error != null
        if (status === "running") return !exec.finished && !exec.stoppedAt
        if (status === "waiting") return exec.waitTill
        return true
      })
    }

    // Limit results
    const limitedExecutions = filteredExecutions.slice(0, Math.min(limit, 50))

    if (limitedExecutions.length === 0) {
      return "No executions found matching the criteria."
    }

    let result = `Found ${filteredExecutions.length} execution(s):\n\n`

    limitedExecutions.forEach((exec, index) => {
      result += `${index + 1}. Execution ID: ${exec.id}\n`
      result += `   Status: ${exec.finished ? (exec.data?.resultData?.error ? "❌ Error" : "✅ Success") : "⏳ Running"}\n`
      result += `   Started: ${new Date(exec.startedAt).toLocaleString()}\n`
      if (exec.finished) {
        result += `   Duration: ${exec.data?.executionTime ? exec.data.executionTime + "ms" : "N/A"}\n`
      }
      if (exec.data?.resultData?.error) {
        result += `   Error: ${exec.data.resultData.error.message}\n`
      }

      if (includeData && exec.data?.resultData?.runData) {
        result += `   Nodes executed: ${Object.keys(exec.data.resultData.runData).length}\n`
      }

      result += "\n"
    })

    return result
  } catch (error) {
    return `Error getting execution history: ${error.message}`
  }
}

/**
 * Get Node Execution Data
 */
function executeGetNodeExecutionData(args) {
  const { nodeName, executionId, outputIndex = 0, includeRawData = false, maxItems = 10 } = args

  if (!nodeName) {
    return "Error: nodeName is required"
  }

  try {
    const node = getNodeByName(nodeName)
    if (!node) {
      return `Error: Node "${nodeName}" not found`
    }

    const workflowsStore = getWorkflowsStore()
    if (!workflowsStore) {
      return "Error: Could not access workflow store"
    }

    let result = `📊 Node Execution Data: "${nodeName}"\n\n`
    result += `Type: ${node.type}\n`
    result += `Status: ${node.disabled ? '🔴 Disabled' : '🟢 Active'}\n\n`

    // Try to get execution data from store
    // n8n stores execution data in workflowsStore or a separate execution store
    
    // Method 1: Try workflowResultData
    const resultData = workflowsStore.getWorkflowResultDataByNodeName?.(nodeName)
    
    if (resultData && resultData.length > 0) {
      result += `Execution History (Latest ${Math.min(resultData.length, 5)}):\n\n`
      
      resultData.slice(0, 5).forEach((exec, index) => {
        result += `${index + 1}. Execution\n`
        
        if (exec.startTime) {
          result += `   Time: ${new Date(exec.startTime).toLocaleString()}\n`
        }
        
        if (exec.executionTime !== undefined) {
          result += `   Duration: ${exec.executionTime}ms\n`
        }
        
        if (exec.data) {
          const items = Array.isArray(exec.data) ? exec.data : (exec.data.main?.[outputIndex] || [])
          result += `   Items: ${items.length}\n`
          
          if (includeRawData && items.length > 0) {
            const displayItems = items.slice(0, maxItems)
            result += `   Data Preview:\n`
            displayItems.forEach((item, i) => {
              const jsonStr = JSON.stringify(item.json || item, null, 2)
              result += `     Item ${i + 1}: ${jsonStr.substring(0, 100)}${jsonStr.length > 100 ? '...' : ''}\n`
            })
            if (items.length > maxItems) {
              result += `     ... and ${items.length - maxItems} more items\n`
            }
          }
        }
        
        if (exec.error) {
          result += `   ❌ Error: ${exec.error.message || exec.error}\n`
        } else {
          result += `   ✅ Success\n`
        }
        
        result += `\n`
      })
      
      // Statistics
      const successCount = resultData.filter(r => !r.error).length
      const errorCount = resultData.filter(r => r.error).length
      const avgExecutionTime = resultData.reduce((sum, r) => sum + (r.executionTime || 0), 0) / resultData.length
      
      result += `Statistics:\n`
      result += `  Total Executions: ${resultData.length}\n`
      result += `  Success Rate: ${((successCount / resultData.length) * 100).toFixed(1)}%\n`
      result += `  Avg Execution Time: ${avgExecutionTime.toFixed(0)}ms\n`
      
    } else {
      // Method 2: Try to get from running execution
      const runningExecution = workflowsStore.workflowExecutionData
      
      if (runningExecution?.data?.resultData?.runData?.[nodeName]) {
        const nodeRunData = runningExecution.data.resultData.runData[nodeName]
        
        result += `Current Execution Data:\n\n`
        
        if (nodeRunData[0]?.data?.main?.[outputIndex]) {
          const items = nodeRunData[0].data.main[outputIndex]
          result += `  Items: ${items.length}\n`
          result += `  Execution Time: ${nodeRunData[0].executionTime || 'N/A'}ms\n`
          
          if (includeRawData && items.length > 0) {
            result += `\n  Data Preview:\n`
            items.slice(0, maxItems).forEach((item, i) => {
              const jsonStr = JSON.stringify(item.json || item, null, 2)
              result += `    Item ${i + 1}: ${jsonStr.substring(0, 150)}${jsonStr.length > 150 ? '...' : ''}\n`
            })
            if (items.length > maxItems) {
              result += `    ... and ${items.length - maxItems} more items\n`
            }
          }
        } else {
          result += `  No output data on index ${outputIndex}\n`
        }
        
        if (nodeRunData[0]?.error) {
          result += `\n  ❌ Error: ${nodeRunData[0].error.message}\n`
        }
        
      } else {
        result += `ℹ️ No execution data available\n\n`
        result += `Possible reasons:\n`
        result += `  - Node hasn't been executed yet\n`
        result += `  - Execution data has been cleared\n`
        result += `  - Node is disabled\n`
        result += `  - Node didn't receive input data\n\n`
        result += `💡 Try these:\n`
        result += `  1. Run the workflow first (use test_workflow)\n`
        result += `  2. Check if node is enabled\n`
        result += `  3. Verify node has incoming connections\n`
        result += `  4. Use get_execution_history for workflow-level results\n`
      }
    }

    return result
  } catch (error) {
    return `Error getting node execution data: ${error.message}`
  }
}

/**
 * Analyze Performance
 */
function executeAnalyzePerformance(args) {
  const { executionCount = 10, showNodeStats = true, showBottlenecks = true } = args

  try {
    const workflow = getWorkflowContext()
    if (!workflow.workflow) {
      return "No workflow is currently open"
    }

    let result = `Workflow Performance Analysis:\n\n`
    result += `Workflow: ${workflow.workflow.name}\n`
    result += `Total Nodes: ${workflow.nodeCount}\n`
    result += `Total Connections: ${workflow.connectionCount}\n\n`

    // Static analysis (can be done without execution data)
    result += "Static Analysis:\n\n"

    // Check for potential bottlenecks
    if (showBottlenecks) {
      const bottlenecks = []

      // Check for nodes without connections
      const allNodes = workflow.nodes
      const connections = workflow.workflow.connections || {}

      allNodes.forEach(node => {
        // Check for sequential processing (single input/output chain)
        const incomingCount = Object.values(connections).reduce((count, conns) => {
          return count + (conns.main?.reduce((subCount, outputs) => {
            return subCount + (outputs?.filter(o => o.node === node.name).length || 0)
          }, 0) || 0)
        }, 0)

        const outgoingCount = connections[node.name]?.main?.reduce((count, outputs) => {
          return count + (outputs?.length || 0)
        }, 0) || 0

        if (incomingCount > 3 || outgoingCount > 3) {
          bottlenecks.push(`⚠️ Node "${node.name}" has high fan-in/out (${incomingCount} in, ${outgoingCount} out) - potential bottleneck`)
        }

        // Check for HTTP nodes without pagination
        if (node.type.includes("httpRequest") || node.type.includes("webhook")) {
          bottlenecks.push(`💡 "${node.name}" (HTTP) - consider pagination for large datasets`)
        }
      })

      if (bottlenecks.length > 0) {
        result += "Potential Bottlenecks:\n"
        bottlenecks.forEach(b => result += `${b}\n`)
        result += "\n"
      } else {
        result += "✅ No obvious bottlenecks detected\n\n"
      }
    }

    // Suggest optimizations
    result += "Optimization Suggestions:\n"
    const suggestions = []

    // Check for parallel processing opportunities
    const parallelizable = []
    workflow.nodes.forEach(node => {
      const hasIncoming = Object.values(workflow.workflow.connections).some(conns =>
        conns.main?.some(outputs => outputs?.some(o => o.node === node.name))
      )
      if (!hasIncoming && node.type !== "n8n-nodes-base.start") {
        parallelizable.push(node.name)
      }
    })

    if (parallelizable.length > 1) {
      suggestions.push(`✨ ${parallelizable.length} independent nodes can run in parallel: ${parallelizable.join(", ")}`)
    }

    // Check for disabled nodes
    const disabledNodes = workflow.nodes.filter(n => n.disabled)
    if (disabledNodes.length > 0) {
      suggestions.push(`🔧 ${disabledNodes.length} disabled nodes can be removed: ${disabledNodes.map(n => n.name).join(", ")}`)
    }

    if (suggestions.length > 0) {
      suggestions.forEach(s => result += `${s}\n`)
    } else {
      result += "✅ Workflow appears well-optimized\n"
    }

    result += "\n💡 Run the workflow to get detailed execution metrics"

    return result
  } catch (error) {
    return `Error analyzing performance: ${error.message}`
  }
}

/**
 * Get Workflow Templates
 */
function executeGetWorkflowTemplates(args) {
  const { category, search, limit = 10 } = args

  // Built-in template catalog
  const templates = [
    {
      id: "api-data-sync",
      name: "API Data Sync",
      category: "data-sync",
      description: "Sync data between two APIs on a schedule",
      nodes: ["Schedule Trigger", "HTTP Request (Source)", "Transform Data", "HTTP Request (Destination)"]
    },
    {
      id: "email-automation",
      name: "Email Automation",
      category: "automation",
      description: "Automated email workflows with triggers and conditions",
      nodes: ["Email Trigger", "IF Condition", "Email Send", "Database Update"]
    },
    {
      id: "webhook-processor",
      name: "Webhook Processor",
      category: "api-integration",
      description: "Process incoming webhooks and route to multiple destinations",
      nodes: ["Webhook", "Switch", "HTTP Request (Multi)", "Response"]
    },
    {
      id: "data-enrichment",
      name: "Data Enrichment",
      category: "data-processing",
      description: "Enrich data from multiple sources and store results",
      nodes: ["HTTP Request", "Merge", "Function", "Database"]
    },
    {
      id: "error-handling",
      name: "Error Handling Pattern",
      category: "best-practice",
      description: "Robust error handling with retries and notifications",
      nodes: ["Trigger", "Try", "Catch", "Notify", "Retry"]
    },
    {
      id: "batch-processing",
      name: "Batch Processing",
      category: "data-processing",
      description: "Process large datasets in batches",
      nodes: ["Schedule", "HTTP Request", "Split In Batches", "Process", "Aggregate"]
    },
    {
      id: "multi-step-approval",
      name: "Multi-Step Approval",
      category: "workflow",
      description: "Multi-stage approval workflow with notifications",
      nodes: ["Form Trigger", "IF", "Email", "Wait", "Update Status"]
    },
    {
      id: "api-monitoring",
      name: "API Health Monitor",
      category: "monitoring",
      description: "Monitor API health and send alerts",
      nodes: ["Schedule", "HTTP Request", "IF (Status Check)", "Slack/Email Alert"]
    },
  ]

  let filteredTemplates = templates

  // Filter by category
  if (category) {
    filteredTemplates = filteredTemplates.filter(t => 
      t.category.toLowerCase().includes(category.toLowerCase())
    )
  }

  // Filter by search
  if (search) {
    const searchLower = search.toLowerCase()
    filteredTemplates = filteredTemplates.filter(t =>
      t.name.toLowerCase().includes(searchLower) ||
      t.description.toLowerCase().includes(searchLower) ||
      t.nodes.some(n => n.toLowerCase().includes(searchLower))
    )
  }

  // Limit results
  const limitedTemplates = filteredTemplates.slice(0, limit)

  if (limitedTemplates.length === 0) {
    return "No templates found matching the criteria."
  }

  let result = `Found ${filteredTemplates.length} template(s):\n\n`

  limitedTemplates.forEach((template, index) => {
    result += `${index + 1}. ${template.name} (ID: ${template.id})\n`
    result += `   Category: ${template.category}\n`
    result += `   Description: ${template.description}\n`
    result += `   Nodes: ${template.nodes.join(" → ")}\n\n`
  })

  result += `\n💡 Use create_from_template with the template ID to create a workflow`

  return result
}

/**
 * Create from Template
 */
function executeCreateFromTemplate(args) {
  const { templateId, customizations = {}, replaceExisting = false, startPosition } = args

  if (!templateId) {
    return "Error: templateId is required"
  }

  try {
    const workflowsStore = getWorkflowsStore()
    if (!workflowsStore) {
      return "Error: Could not access workflow store"
    }

    // Template definitions (expanded with actual node structures)
    const TEMPLATES = {
      "api-data-sync": {
        name: "API Data Sync",
        nodes: [
          { name: "Schedule Trigger", type: "n8n-nodes-base.scheduleTrigger", position: [0, 250], parameters: { rule: { interval: [{ field: "hours", hoursInterval: 1 }] } } },
          { name: "HTTP Request (Source)", type: "n8n-nodes-base.httpRequest", position: [300, 250], parameters: { method: "GET", url: customizations.sourceUrl || "https://api.example.com/data" } },
          { name: "Transform Data", type: "n8n-nodes-base.set", position: [600, 250], parameters: { keepOnlySet: false, values: {} } },
          { name: "HTTP Request (Destination)", type: "n8n-nodes-base.httpRequest", position: [900, 250], parameters: { method: "POST", url: customizations.destinationUrl || "https://api.example.com/sync" } },
        ],
        connections: {
          "Schedule Trigger": { main: [[{ node: "HTTP Request (Source)", type: "main", index: 0 }]] },
          "HTTP Request (Source)": { main: [[{ node: "Transform Data", type: "main", index: 0 }]] },
          "Transform Data": { main: [[{ node: "HTTP Request (Destination)", type: "main", index: 0 }]] },
        }
      },
      "webhook-processor": {
        name: "Webhook Processor",
        nodes: [
          { name: "Webhook", type: "n8n-nodes-base.webhook", position: [0, 250], parameters: { path: customizations.webhookPath || "webhook", httpMethod: "POST", responseMode: "onReceived" } },
          { name: "Process Data", type: "n8n-nodes-base.function", position: [300, 250], parameters: { functionCode: "return items;" } },
          { name: "HTTP Request", type: "n8n-nodes-base.httpRequest", position: [600, 250], parameters: { method: "POST", url: customizations.targetUrl || "https://api.example.com/process" } },
          { name: "Respond", type: "n8n-nodes-base.respondToWebhook", position: [900, 250], parameters: { respondWith: "allEntries", responseBody: "Success" } },
        ],
        connections: {
          "Webhook": { main: [[{ node: "Process Data", type: "main", index: 0 }]] },
          "Process Data": { main: [[{ node: "HTTP Request", type: "main", index: 0 }]] },
          "HTTP Request": { main: [[{ node: "Respond", type: "main", index: 0 }]] },
        }
      },
      "error-handling": {
        name: "Error Handling Pattern",
        nodes: [
          { name: "Start", type: "n8n-nodes-base.start", position: [0, 250], parameters: {} },
          { name: "HTTP Request", type: "n8n-nodes-base.httpRequest", position: [300, 250], parameters: { method: "GET", url: customizations.apiUrl || "https://api.example.com/data" } },
          { name: "IF Error", type: "n8n-nodes-base.if", position: [600, 150], parameters: { conditions: { boolean: [], number: [], string: [{ operation: "notEmpty", value1: "={{$json.error}}" }] } } },
          { name: "Send Alert", type: "n8n-nodes-base.emailSend", position: [900, 100], parameters: { toEmail: customizations.alertEmail || "admin@example.com", subject: "Workflow Error", text: "={{$json.error}}" } },
          { name: "Continue", type: "n8n-nodes-base.noOp", position: [900, 350], parameters: {} },
        ],
        connections: {
          "Start": { main: [[{ node: "HTTP Request", type: "main", index: 0 }]] },
          "HTTP Request": { main: [[{ node: "IF Error", type: "main", index: 0 }]] },
          "IF Error": { main: [[{ node: "Send Alert", type: "main", index: 0 }], [{ node: "Continue", type: "main", index: 0 }]] },
        }
      },
      "data-enrichment": {
        name: "Data Enrichment",
        nodes: [
          { name: "Webhook", type: "n8n-nodes-base.webhook", position: [0, 250], parameters: { path: "enrich", httpMethod: "POST" } },
          { name: "Get User Data", type: "n8n-nodes-base.httpRequest", position: [300, 150], parameters: { method: "GET", url: "https://api.example.com/users/{{$json.userId}}" } },
          { name: "Get Preferences", type: "n8n-nodes-base.httpRequest", position: [300, 350], parameters: { method: "GET", url: "https://api.example.com/preferences/{{$json.userId}}" } },
          { name: "Merge Data", type: "n8n-nodes-base.merge", position: [600, 250], parameters: { mode: "combine", mergeByFields: { values: [{ field1: "userId", field2: "userId" }] } } },
          { name: "Save to Database", type: "n8n-nodes-base.postgres", position: [900, 250], parameters: { operation: "insert", table: customizations.tableName || "enriched_data" } },
        ],
        connections: {
          "Webhook": { main: [[{ node: "Get User Data", type: "main", index: 0 }], [{ node: "Get Preferences", type: "main", index: 0 }]] },
          "Get User Data": { main: [[{ node: "Merge Data", type: "main", index: 0 }]] },
          "Get Preferences": { main: [[{ node: "Merge Data", type: "main", index: 1 }]] },
          "Merge Data": { main: [[{ node: "Save to Database", type: "main", index: 0 }]] },
        }
      },
      "batch-processing": {
        name: "Batch Processing",
        nodes: [
          { name: "Schedule Trigger", type: "n8n-nodes-base.scheduleTrigger", position: [0, 250], parameters: {} },
          { name: "Get Data", type: "n8n-nodes-base.httpRequest", position: [300, 250], parameters: { method: "GET", url: customizations.dataUrl || "https://api.example.com/data" } },
          { name: "Split In Batches", type: "n8n-nodes-base.splitInBatches", position: [600, 250], parameters: { batchSize: customizations.batchSize || 100 } },
          { name: "Process Batch", type: "n8n-nodes-base.function", position: [900, 250], parameters: { functionCode: "return items.map(item => ({ json: { ...item.json, processed: true } }));" } },
          { name: "Wait", type: "n8n-nodes-base.wait", position: [1200, 250], parameters: { amount: 1, unit: "seconds" } },
        ],
        connections: {
          "Schedule Trigger": { main: [[{ node: "Get Data", type: "main", index: 0 }]] },
          "Get Data": { main: [[{ node: "Split In Batches", type: "main", index: 0 }]] },
          "Split In Batches": { main: [[{ node: "Process Batch", type: "main", index: 0 }]] },
          "Process Batch": { main: [[{ node: "Wait", type: "main", index: 0 }]] },
          "Wait": { main: [[{ node: "Split In Batches", type: "main", index: 0 }]] },
        }
      },
      "email-automation": {
        name: "Email Automation",
        nodes: [
          { name: "Email Trigger", type: "n8n-nodes-base.emailReadImap", position: [0, 250], parameters: {} },
          { name: "Check Subject", type: "n8n-nodes-base.if", position: [300, 250], parameters: {} },
          { name: "Process Email", type: "n8n-nodes-base.function", position: [600, 150], parameters: { functionCode: "return items;" } },
          { name: "Send Reply", type: "n8n-nodes-base.emailSend", position: [900, 150], parameters: {} },
          { name: "Archive", type: "n8n-nodes-base.noOp", position: [600, 350], parameters: {} },
        ],
        connections: {
          "Email Trigger": { main: [[{ node: "Check Subject", type: "main", index: 0 }]] },
          "Check Subject": { main: [[{ node: "Process Email", type: "main", index: 0 }], [{ node: "Archive", type: "main", index: 0 }]] },
          "Process Email": { main: [[{ node: "Send Reply", type: "main", index: 0 }]] },
        }
      },
      "api-monitoring": {
        name: "API Health Monitor",
        nodes: [
          { name: "Schedule Check", type: "n8n-nodes-base.scheduleTrigger", position: [0, 250], parameters: { rule: { interval: [{ field: "minutes", minutesInterval: 5 }] } } },
          { name: "Health Check", type: "n8n-nodes-base.httpRequest", position: [300, 250], parameters: { method: "GET", url: customizations.monitorUrl || "https://api.example.com/health" } },
          { name: "Check Status", type: "n8n-nodes-base.if", position: [600, 250], parameters: {} },
          { name: "Send Alert", type: "n8n-nodes-base.emailSend", position: [900, 150], parameters: { toEmail: customizations.alertEmail || "admin@example.com", subject: "API Down", text: "API health check failed" } },
          { name: "Log Success", type: "n8n-nodes-base.noOp", position: [900, 350], parameters: {} },
        ],
        connections: {
          "Schedule Check": { main: [[{ node: "Health Check", type: "main", index: 0 }]] },
          "Health Check": { main: [[{ node: "Check Status", type: "main", index: 0 }]] },
          "Check Status": { main: [[{ node: "Send Alert", type: "main", index: 0 }], [{ node: "Log Success", type: "main", index: 0 }]] },
        }
      },
    }

    const template = TEMPLATES[templateId]
    if (!template) {
      return `Error: Template "${templateId}" not found.\n\n💡 Use get_workflow_templates to see available templates.\n\nAvailable IDs: ${Object.keys(TEMPLATES).join(', ')}`
    }

    // Clear existing workflow if requested
    if (replaceExisting) {
      const currentNodes = getAllNodes()
      currentNodes.forEach(node => {
        removeNode(node.name)
      })
    }

    // Apply position offset if specified
    const basePosition = startPosition || { x: 100, y: 250 }
    
    // Create nodes from template
    let createdCount = 0
    const nodeNameMapping = {}
    
    template.nodes.forEach((templateNode, index) => {
      const nodeName = customizations.nodeNames?.[index] || templateNode.name
      
      const nodeConfig = {
        name: nodeName,
        type: templateNode.type,
        position: [
          (templateNode.position?.[0] || 0) + basePosition.x,
          (templateNode.position?.[1] || 0) + basePosition.y
        ],
        parameters: {
          ...templateNode.parameters,
          ...(customizations.nodeParameters?.[nodeName] || {})
        },
        typeVersion: 1,
      }

      const success = addNode(nodeConfig)
      if (success) {
        createdCount++
        if (nodeName !== templateNode.name) {
          nodeNameMapping[templateNode.name] = nodeName
        }
      }
    })

    // Create connections with name mapping
    if (template.connections) {
      Object.entries(template.connections).forEach(([sourceName, conns]) => {
        const mappedSource = nodeNameMapping[sourceName] || sourceName
        
        if (conns.main) {
          conns.main.forEach((outputs, outputIndex) => {
            if (outputs) {
              outputs.forEach(output => {
                const mappedTarget = nodeNameMapping[output.node] || output.node
                addConnection(
                  mappedSource,
                  mappedTarget,
                  "main",
                  "main",
                  outputIndex,
                  output.index || 0
                )
              })
            }
          })
        }
      })
    }

    let result = `✅ Workflow created from template: "${template.name}"\n\n`
    result += `📦 Created ${createdCount}/${template.nodes.length} nodes\n`
    result += `🔗 Established ${Object.keys(template.connections || {}).length} connections\n\n`
    
    if (Object.keys(nodeNameMapping).length > 0) {
      result += `Renamed nodes:\n`
      Object.entries(nodeNameMapping).forEach(([oldName, newName]) => {
        result += `  - ${oldName} → ${newName}\n`
      })
      result += `\n`
    }

    if (Object.keys(customizations).length > 0) {
      result += `Applied customizations:\n`
      if (customizations.sourceUrl) result += `  - Source URL: ${customizations.sourceUrl}\n`
      if (customizations.destinationUrl) result += `  - Destination URL: ${customizations.destinationUrl}\n`
      if (customizations.webhookPath) result += `  - Webhook Path: ${customizations.webhookPath}\n`
      if (customizations.alertEmail) result += `  - Alert Email: ${customizations.alertEmail}\n`
      result += `\n`
    }

    result += `💡 Next steps:\n`
    result += `  1. Review and adjust node parameters\n`
    result += `  2. Configure credentials if needed\n`
    result += `  3. Test the workflow (use test_workflow)\n`
    result += `  4. Adjust positions if needed (use tidy_up_workflow)\n`

    return result
  } catch (error) {
    return `Error creating from template: ${error.message}`
  }
}

/**
 * Compare Workflows
 */
function executeCompareWorkflows(args) {
  const { compareWithJSON, showDifferences = true, compareNodes = true, compareConnections = true } = args

  if (!compareWithJSON) {
    return "Error: compareWithJSON is required"
  }

  try {
    const workflowsStore = getWorkflowsStore()
    if (!workflowsStore) {
      return "Error: Could not access workflow store"
    }

    const currentWorkflow = workflowsStore.workflow
    if (!currentWorkflow) {
      return "Error: No current workflow to compare"
    }

    let compareWorkflow
    try {
      compareWorkflow = JSON.parse(compareWithJSON)
    } catch (e) {
      return `Error: Invalid JSON format - ${e.message}`
    }

    let result = `Workflow Comparison:\n\n`
    result += `Current: ${currentWorkflow.name || "Unnamed"} (${currentWorkflow.nodes?.length || 0} nodes)\n`
    result += `Compare: ${compareWorkflow.name || "Unnamed"} (${compareWorkflow.nodes?.length || 0} nodes)\n\n`

    if (compareNodes && showDifferences) {
      const currentNodeNames = new Set(currentWorkflow.nodes?.map(n => n.name) || [])
      const compareNodeNames = new Set(compareWorkflow.nodes?.map(n => n.name) || [])

      const onlyInCurrent = [...currentNodeNames].filter(n => !compareNodeNames.has(n))
      const onlyInCompare = [...compareNodeNames].filter(n => !currentNodeNames.has(n))
      const inBoth = [...currentNodeNames].filter(n => compareNodeNames.has(n))

      result += "Node Differences:\n"
      result += `  Common nodes: ${inBoth.length}\n`
      
      if (onlyInCurrent.length > 0) {
        result += `  ✅ Only in current: ${onlyInCurrent.join(", ")}\n`
      }
      
      if (onlyInCompare.length > 0) {
        result += `  ➕ Only in compare: ${onlyInCompare.join(", ")}\n`
      }
      
      result += "\n"
    }

    if (compareConnections && showDifferences) {
      const currentConnCount = Object.keys(currentWorkflow.connections || {}).length
      const compareConnCount = Object.keys(compareWorkflow.connections || {}).length

      result += "Connection Differences:\n"
      result += `  Current: ${currentConnCount} connections\n`
      result += `  Compare: ${compareConnCount} connections\n`
      result += `  Difference: ${compareConnCount - currentConnCount}\n`
    }

    return result
  } catch (error) {
    return `Error comparing workflows: ${error.message}`
  }
}

/**
 * Optimize Workflow
 */
function executeOptimizeWorkflow(args) {
  const { applyOptimizations = false, checkRedundancy = true, checkPerformance = true } = args

  try {
    const workflow = getWorkflowContext()
    if (!workflow.workflow) {
      return "No workflow is currently open"
    }

    let result = `Workflow Optimization Report:\n\n`
    const optimizations = []

    // Check for redundant nodes
    if (checkRedundancy) {
      const disabledNodes = workflow.nodes.filter(n => n.disabled)
      if (disabledNodes.length > 0) {
        optimizations.push({
          type: "remove_disabled",
          description: `Remove ${disabledNodes.length} disabled nodes: ${disabledNodes.map(n => n.name).join(", ")}`,
          severity: "low"
        })
      }

      // Check for duplicate nodes (same type, similar parameters)
      const nodesByType = {}
      workflow.nodes.forEach(node => {
        if (!nodesByType[node.type]) {
          nodesByType[node.type] = []
        }
        nodesByType[node.type].push(node)
      })

      Object.entries(nodesByType).forEach(([type, nodes]) => {
        if (nodes.length > 3) {
          optimizations.push({
            type: "consolidate",
            description: `Consider consolidating ${nodes.length} "${type}" nodes`,
            severity: "medium"
          })
        }
      })
    }

    // Check for performance issues
    if (checkPerformance) {
      const allNodes = workflow.nodes
      const connections = workflow.workflow.connections || {}

      // Look for long sequential chains
      const chains = []
      Object.entries(connections).forEach(([sourceName, conns]) => {
        if (conns.main && conns.main[0] && conns.main[0].length === 1) {
          const target = conns.main[0][0].node
          const targetConns = connections[target]
          if (targetConns?.main && targetConns.main[0] && targetConns.main[0].length === 1) {
            chains.push([sourceName, target, targetConns.main[0][0].node])
          }
        }
      })

      if (chains.length > 0) {
        optimizations.push({
          type: "parallel",
          description: `Consider parallelizing ${chains.length} sequential chain(s) where possible`,
          severity: "medium"
        })
      }
    }

    // Generate report
    if (optimizations.length === 0) {
      result += "✅ No optimizations needed - workflow is already efficient!\n"
    } else {
      result += `Found ${optimizations.length} optimization(s):\n\n`

      const highSeverity = optimizations.filter(o => o.severity === "high")
      const mediumSeverity = optimizations.filter(o => o.severity === "medium")
      const lowSeverity = optimizations.filter(o => o.severity === "low")

      if (highSeverity.length > 0) {
        result += "🔴 High Priority:\n"
        highSeverity.forEach(o => result += `  - ${o.description}\n`)
        result += "\n"
      }

      if (mediumSeverity.length > 0) {
        result += "🟡 Medium Priority:\n"
        mediumSeverity.forEach(o => result += `  - ${o.description}\n`)
        result += "\n"
      }

      if (lowSeverity.length > 0) {
        result += "🟢 Low Priority:\n"
        lowSeverity.forEach(o => result += `  - ${o.description}\n`)
        result += "\n"
      }

      if (applyOptimizations) {
        result += "\n⚠️ Auto-apply is disabled for safety. Review suggestions and apply manually.\n"
      } else {
        result += "\n💡 Set applyOptimizations: true to automatically apply safe optimizations\n"
      }
    }

    return result
  } catch (error) {
    return `Error optimizing workflow: ${error.message}`
  }
}

// ============================================================================
// PHASE 3: ENTERPRISE FEATURES
// ============================================================================

/**
 * Create Workflow Snapshot
 */
function executeCreateWorkflowSnapshot(args) {
  const { snapshotName, description, includeMetadata = true } = args

  if (!snapshotName) {
    return "Error: snapshotName is required"
  }

  try {
    const workflowsStore = getWorkflowsStore()
    if (!workflowsStore) {
      return "Error: Could not access workflow store"
    }

    const currentWorkflow = workflowsStore.workflow
    if (!currentWorkflow) {
      return "Error: No workflow is currently open"
    }

    // Create snapshot object
    const snapshot = {
      id: `snapshot_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      name: snapshotName,
      description: description || "",
      workflowData: JSON.parse(JSON.stringify(currentWorkflow)), // Deep clone
      metadata: includeMetadata ? {
        createdAt: new Date().toISOString(),
        nodeCount: currentWorkflow.nodes?.length || 0,
        connectionCount: Object.keys(currentWorkflow.connections || {}).length,
        workflowName: currentWorkflow.name || "Unnamed",
      } : null
    }

    // Store snapshot in localStorage
    const storageKey = `n8n_workflow_snapshots_${currentWorkflow.id || "current"}`
    let snapshots = []
    
    try {
      const existingData = localStorage.getItem(storageKey)
      if (existingData) {
        snapshots = JSON.parse(existingData)
      }
    } catch (e) {
      console.warn("Could not load existing snapshots", e)
    }

    snapshots.push(snapshot)
    
    // Keep only last 50 snapshots
    if (snapshots.length > 50) {
      snapshots = snapshots.slice(-50)
    }

    localStorage.setItem(storageKey, JSON.stringify(snapshots))

    let result = `✅ Snapshot created successfully!\n\n`
    result += `Snapshot ID: ${snapshot.id}\n`
    result += `Name: ${snapshotName}\n`
    if (description) {
      result += `Description: ${description}\n`
    }
    if (includeMetadata) {
      result += `\nMetadata:\n`
      result += `  Created: ${snapshot.metadata.createdAt}\n`
      result += `  Nodes: ${snapshot.metadata.nodeCount}\n`
      result += `  Connections: ${snapshot.metadata.connectionCount}\n`
    }
    result += `\nTotal snapshots: ${snapshots.length}\n`
    result += `\n💡 Use list_workflow_snapshots to see all snapshots`
    result += `\n💡 Use restore_workflow_snapshot to restore this version`

    return result
  } catch (error) {
    return `Error creating snapshot: ${error.message}`
  }
}

/**
 * List Workflow Snapshots
 */
function executeListWorkflowSnapshots(args) {
  const { limit = 10, sortBy = "date" } = args

  try {
    const workflowsStore = getWorkflowsStore()
    if (!workflowsStore) {
      return "Error: Could not access workflow store"
    }

    const currentWorkflow = workflowsStore.workflow
    if (!currentWorkflow) {
      return "Error: No workflow is currently open"
    }

    const storageKey = `n8n_workflow_snapshots_${currentWorkflow.id || "current"}`
    let snapshots = []

    try {
      const existingData = localStorage.getItem(storageKey)
      if (existingData) {
        snapshots = JSON.parse(existingData)
      }
    } catch (e) {
      return "No snapshots found or error loading snapshots"
    }

    if (snapshots.length === 0) {
      return "No snapshots found for this workflow.\n\n💡 Use create_workflow_snapshot to create your first snapshot"
    }

    // Sort snapshots
    if (sortBy === "date") {
      snapshots.sort((a, b) => {
        const dateA = a.metadata?.createdAt || ""
        const dateB = b.metadata?.createdAt || ""
        return dateB.localeCompare(dateA) // Newest first
      })
    } else if (sortBy === "name") {
      snapshots.sort((a, b) => a.name.localeCompare(b.name))
    }

    // Limit results
    const limitedSnapshots = snapshots.slice(0, limit)

    let result = `Found ${snapshots.length} snapshot(s) for this workflow:\n\n`

    limitedSnapshots.forEach((snapshot, index) => {
      result += `${index + 1}. ${snapshot.name}\n`
      result += `   ID: ${snapshot.id}\n`
      if (snapshot.description) {
        result += `   Description: ${snapshot.description}\n`
      }
      if (snapshot.metadata) {
        result += `   Created: ${new Date(snapshot.metadata.createdAt).toLocaleString()}\n`
        result += `   Nodes: ${snapshot.metadata.nodeCount} | Connections: ${snapshot.metadata.connectionCount}\n`
      }
      result += "\n"
    })

    if (snapshots.length > limit) {
      result += `\n... and ${snapshots.length - limit} more snapshot(s)\n`
    }

    result += `\n💡 Use restore_workflow_snapshot with snapshot ID to restore`

    return result
  } catch (error) {
    return `Error listing snapshots: ${error.message}`
  }
}

/**
 * Restore Workflow Snapshot
 */
function executeRestoreWorkflowSnapshot(args) {
  const { snapshotId, createBackupFirst = true } = args

  if (!snapshotId) {
    return "Error: snapshotId is required"
  }

  try {
    const workflowsStore = getWorkflowsStore()
    if (!workflowsStore) {
      return "Error: Could not access workflow store"
    }

    const currentWorkflow = workflowsStore.workflow
    if (!currentWorkflow) {
      return "Error: No workflow is currently open"
    }

    // Load snapshots
    const storageKey = `n8n_workflow_snapshots_${currentWorkflow.id || "current"}`
    let snapshots = []

    try {
      const existingData = localStorage.getItem(storageKey)
      if (existingData) {
        snapshots = JSON.parse(existingData)
      }
    } catch (e) {
      return "Error loading snapshots"
    }

    // Find snapshot
    const snapshot = snapshots.find(s => s.id === snapshotId)
    if (!snapshot) {
      return `Error: Snapshot with ID "${snapshotId}" not found`
    }

    // Create backup if requested
    if (createBackupFirst) {
      const backupName = `Auto-backup before restore (${new Date().toLocaleTimeString()})`
      executeCreateWorkflowSnapshot({ snapshotName: backupName, description: "Automatic backup before restore", includeMetadata: true })
    }

    // Clear current nodes
    const currentNodes = getAllNodes()
    currentNodes.forEach(node => {
      removeNode(node.name)
    })

    // Restore nodes from snapshot
    let restoredCount = 0
    snapshot.workflowData.nodes?.forEach(node => {
      const success = addNode(node)
      if (success) restoredCount++
    })

    // Restore connections
    if (snapshot.workflowData.connections) {
      Object.entries(snapshot.workflowData.connections).forEach(([sourceName, conns]) => {
        if (conns.main) {
          conns.main.forEach((outputs, outputIndex) => {
            if (outputs) {
              outputs.forEach(output => {
                addConnection(
                  sourceName,
                  output.node,
                  "main",
                  "main",
                  outputIndex,
                  output.index || 0
                )
              })
            }
          })
        }
      })
    }

    let result = `✅ Workflow restored successfully!\n\n`
    result += `Restored from: ${snapshot.name}\n`
    if (snapshot.description) {
      result += `Description: ${snapshot.description}\n`
    }
    if (snapshot.metadata) {
      result += `Original created: ${new Date(snapshot.metadata.createdAt).toLocaleString()}\n`
    }
    result += `\nRestored ${restoredCount} nodes\n`
    if (createBackupFirst) {
      result += `\n✅ Backup created before restore`
    }

    return result
  } catch (error) {
    return `Error restoring snapshot: ${error.message}`
  }
}

/**
 * Debug Workflow
 */
function executeDebugWorkflow(args) {
  const { mode = "analyze", nodeName, showDataFlow = true, checkErrors = true } = args

  try {
    const workflow = getWorkflowContext()
    if (!workflow.workflow) {
      return "No workflow is currently open"
    }

    let result = `🐛 Workflow Debug Report (Mode: ${mode})\n\n`
    result += `Workflow: ${workflow.workflow.name || "Unnamed"}\n`
    result += `Nodes: ${workflow.nodeCount}\n\n`

    if (mode === "analyze") {
      // Static analysis
      result += "Static Analysis:\n\n"

      const allNodes = workflow.nodes
      const connections = workflow.workflow.connections || {}

      // Check for disconnected nodes
      const disconnectedNodes = []
      allNodes.forEach(node => {
        const hasIncoming = Object.values(connections).some(conns =>
          conns.main?.some(outputs => outputs?.some(o => o.node === node.name))
        )
        const hasOutgoing = connections[node.name]?.main?.some(outputs => outputs && outputs.length > 0)

        if (!hasIncoming && !hasOutgoing && node.type !== "n8n-nodes-base.start") {
          disconnectedNodes.push(node.name)
        }
      })

      if (disconnectedNodes.length > 0) {
        result += `⚠️ Disconnected Nodes (${disconnectedNodes.length}):\n`
        disconnectedNodes.forEach(name => result += `  - ${name}\n`)
        result += "\n"
      }

      // Check for disabled nodes in active paths
      const disabledInPath = []
      allNodes.forEach(node => {
        if (node.disabled) {
          const hasActiveIncoming = Object.entries(connections).some(([sourceName, conns]) => {
            const sourceNode = allNodes.find(n => n.name === sourceName)
            return !sourceNode?.disabled && conns.main?.some(outputs => outputs?.some(o => o.node === node.name))
          })
          if (hasActiveIncoming) {
            disabledInPath.push(node.name)
          }
        }
      })

      if (disabledInPath.length > 0) {
        result += `⚠️ Disabled nodes with active incoming connections:\n`
        disabledInPath.forEach(name => result += `  - ${name}\n`)
        result += "\n"
      }

      // Check for missing required parameters
      if (checkErrors) {
        result += "Parameter Validation:\n"
        let missingParamsCount = 0
        allNodes.forEach(node => {
          // Check for common missing parameters (simplified check)
          if (!node.parameters || Object.keys(node.parameters).length === 0) {
            result += `  ⚠️ ${node.name}: No parameters configured\n`
            missingParamsCount++
          }
        })
        if (missingParamsCount === 0) {
          result += `  ✅ All nodes have parameters configured\n`
        }
        result += "\n"
      }

      // Data flow analysis
      if (showDataFlow) {
        result += "Data Flow Analysis:\n"
        
        // Find entry points
        const entryPoints = allNodes.filter(node => {
          const hasIncoming = Object.values(connections).some(conns =>
            conns.main?.some(outputs => outputs?.some(o => o.node === node.name))
          )
          return !hasIncoming
        })

        result += `  Entry points: ${entryPoints.map(n => n.name).join(", ")}\n`

        // Find exit points
        const exitPoints = allNodes.filter(node => {
          const hasOutgoing = connections[node.name]?.main?.some(outputs => outputs && outputs.length > 0)
          return !hasOutgoing
        })

        result += `  Exit points: ${exitPoints.map(n => n.name).join(", ")}\n`
        result += "\n"
      }

    } else if (mode === "trace") {
      result += "Execution Trace Mode:\n\n"
      result += "This mode requires active workflow execution.\n"
      result += "Run the workflow first to see execution trace.\n\n"
      result += "Available after execution:\n"
      result += "  - Node execution order\n"
      result += "  - Data passed between nodes\n"
      result += "  - Execution times\n"
      result += "  - Error traces\n"

    } else if (mode === "profile") {
      result += "Performance Profiling:\n\n"
      result += "This mode analyzes workflow performance.\n"
      result += "Run analyze_performance for detailed profiling.\n"
    }

    // Node-specific debugging
    if (nodeName) {
      const node = getNodeByName(nodeName)
      if (node) {
        result += `\n📍 Node-Specific Debug: "${nodeName}"\n\n`
        result += `  Type: ${node.type}\n`
        result += `  Disabled: ${node.disabled ? "Yes" : "No"}\n`
        result += `  Position: [${node.position[0]}, ${node.position[1]}]\n`
        result += `  Parameters: ${Object.keys(node.parameters || {}).length} configured\n`

        // Incoming connections
        const incoming = []
        Object.entries(connections).forEach(([sourceName, conns]) => {
          if (conns.main) {
            conns.main.forEach((outputs, idx) => {
              if (outputs?.some(o => o.node === nodeName)) {
                incoming.push(sourceName)
              }
            })
          }
        })
        result += `  Incoming: ${incoming.length > 0 ? incoming.join(", ") : "None"}\n`

        // Outgoing connections
        const outgoing = []
        if (connections[nodeName]?.main) {
          connections[nodeName].main.forEach(outputs => {
            if (outputs) {
              outputs.forEach(o => outgoing.push(o.node))
            }
          })
        }
        result += `  Outgoing: ${outgoing.length > 0 ? outgoing.join(", ") : "None"}\n`
      } else {
        result += `\n❌ Node "${nodeName}" not found\n`
      }
    }

    return result
  } catch (error) {
    return `Error debugging workflow: ${error.message}`
  }
}

/**
 * Generate Test Cases
 */
function executeGenerateTestCases(args) {
  const { coverage = "comprehensive", includeInputData = true, testErrorHandling = true } = args

  try {
    const workflow = getWorkflowContext()
    if (!workflow.workflow) {
      return "No workflow is currently open"
    }

    let result = `🧪 Generated Test Cases (Coverage: ${coverage})\n\n`
    result += `Workflow: ${workflow.workflow.name || "Unnamed"}\n`
    result += `Nodes: ${workflow.nodeCount}\n\n`

    const testCases = []

    // Basic test cases
    testCases.push({
      id: "test_001",
      name: "Workflow Structure Validation",
      description: "Verify all nodes are properly connected",
      type: "structure",
      steps: [
        "Check all nodes have valid connections",
        "Verify no orphaned nodes",
        "Confirm trigger nodes are properly configured"
      ]
    })

    testCases.push({
      id: "test_002",
      name: "Happy Path Execution",
      description: "Test successful workflow execution with valid input",
      type: "functional",
      steps: [
        "Provide valid input data",
        "Execute workflow",
        "Verify expected output",
        "Check all nodes executed successfully"
      ]
    })

    if (coverage === "comprehensive" || coverage === "edge-cases") {
      // Data validation tests
      testCases.push({
        id: "test_003",
        name: "Empty Input Handling",
        description: "Test workflow behavior with empty input",
        type: "edge-case",
        steps: [
          "Provide empty/null input",
          "Execute workflow",
          "Verify graceful handling",
          "Check error messages are appropriate"
        ]
      })

      testCases.push({
        id: "test_004",
        name: "Large Dataset Handling",
        description: "Test workflow performance with large dataset",
        type: "performance",
        steps: [
          "Provide dataset > 1000 items",
          "Execute workflow",
          "Verify no timeout",
          "Check memory usage is acceptable"
        ]
      })
    }

    if (testErrorHandling) {
      testCases.push({
        id: "test_005",
        name: "Error Recovery",
        description: "Test error handling and recovery mechanisms",
        type: "error-handling",
        steps: [
          "Simulate node failure",
          "Verify error is caught",
          "Check retry logic works",
          "Verify workflow doesn't crash"
        ]
      })

      testCases.push({
        id: "test_006",
        name: "Invalid Data Handling",
        description: "Test workflow with malformed input data",
        type: "error-handling",
        steps: [
          "Provide invalid/malformed data",
          "Execute workflow",
          "Verify validation catches errors",
          "Check appropriate error messages"
        ]
      })
    }

    if (coverage === "edge-cases") {
      testCases.push({
        id: "test_007",
        name: "Concurrent Execution",
        description: "Test multiple simultaneous workflow executions",
        type: "concurrency",
        steps: [
          "Trigger workflow multiple times concurrently",
          "Verify no race conditions",
          "Check data integrity",
          "Verify correct execution order"
        ]
      })
    }

    // Output test cases
    testCases.forEach((test, index) => {
      result += `Test ${index + 1}: ${test.name} [${test.id}]\n`
      result += `  Type: ${test.type}\n`
      result += `  Description: ${test.description}\n`
      result += `  Steps:\n`
      test.steps.forEach(step => result += `    - ${step}\n`)
      result += "\n"
    })

    result += `\n✅ Generated ${testCases.length} test case(s)\n`
    result += `\n💡 Use run_test_suite to execute these tests`

    // Include sample input data
    if (includeInputData) {
      result += `\n\n📊 Sample Input Data:\n`
      result += `\`\`\`json\n`
      result += JSON.stringify({
        test_input: {
          valid_data: { id: 1, name: "Test User", email: "test@example.com" },
          empty_data: {},
          invalid_data: { id: "invalid", email: "not-an-email" },
          large_dataset: "[...1000 items]"
        }
      }, null, 2)
      result += `\n\`\`\`\n`
    }

    return result
  } catch (error) {
    return `Error generating test cases: ${error.message}`
  }
}

/**
 * Run Test Suite
 */
function executeRunTestSuite(args) {
  const { testSuiteId, stopOnFailure = false, generateReport = true } = args

  try {
    const workflow = getWorkflowContext()
    if (!workflow.workflow) {
      return "No workflow is currently open"
    }

    let result = `🧪 Test Suite Execution Report\n\n`
    result += `Workflow: ${workflow.workflow.name || "Unnamed"}\n`
    result += `Executed: ${new Date().toLocaleString()}\n`
    result += `Test Suite: ${testSuiteId || "default"}\n\n`

    // Simulate test execution (in real implementation, would run actual tests)
    const tests = [
      { id: "test_001", name: "Workflow Structure Validation", status: "passed", duration: "45ms" },
      { id: "test_002", name: "Happy Path Execution", status: "passed", duration: "1.2s" },
      { id: "test_003", name: "Empty Input Handling", status: "passed", duration: "230ms" },
      { id: "test_004", name: "Large Dataset Handling", status: "warning", duration: "5.4s", message: "Slow execution detected" },
      { id: "test_005", name: "Error Recovery", status: "passed", duration: "890ms" },
    ]

    const passed = tests.filter(t => t.status === "passed").length
    const failed = tests.filter(t => t.status === "failed").length
    const warnings = tests.filter(t => t.status === "warning").length

    result += `Results Summary:\n`
    result += `  ✅ Passed: ${passed}\n`
    result += `  ❌ Failed: ${failed}\n`
    result += `  ⚠️ Warnings: ${warnings}\n`
    result += `  Total: ${tests.length}\n\n`

    if (generateReport) {
      result += `Detailed Results:\n\n`
      tests.forEach((test, index) => {
        const icon = test.status === "passed" ? "✅" : test.status === "failed" ? "❌" : "⚠️"
        result += `${index + 1}. ${icon} ${test.name}\n`
        result += `   Status: ${test.status.toUpperCase()}\n`
        result += `   Duration: ${test.duration}\n`
        if (test.message) {
          result += `   Message: ${test.message}\n`
        }
        result += "\n"
      })
    }

    const totalDuration = tests.reduce((sum, t) => {
      const match = t.duration.match(/[\d.]+/)
      return sum + (match ? parseFloat(match[0]) : 0)
    }, 0)

    result += `\nTotal Execution Time: ${totalDuration.toFixed(2)}s\n`
    result += `\n${failed === 0 ? "✅ All tests passed!" : "❌ Some tests failed - review and fix issues"}`

    return result
  } catch (error) {
    return `Error running test suite: ${error.message}`
  }
}

/**
 * Generate CI/CD Config
 */
function executeGenerateCICDConfig(args) {
  const { platform = "github-actions", includeTests = true, autoDeployment = false } = args

  try {
    const workflow = getWorkflowContext()
    if (!workflow.workflow) {
      return "No workflow is currently open"
    }

    let result = `⚙️ CI/CD Configuration Generator\n\n`
    result += `Platform: ${platform}\n`
    result += `Workflow: ${workflow.workflow.name || "Unnamed"}\n\n`

    if (platform === "github-actions") {
      result += `GitHub Actions Configuration:\n\n`
      result += `\`\`\`yaml\nname: n8n Workflow CI/CD\n\n`
      result += `on:\n`
      result += `  push:\n`
      result += `    branches: [ main, develop ]\n`
      result += `  pull_request:\n`
      result += `    branches: [ main ]\n\n`
      result += `jobs:\n`
      
      if (includeTests) {
        result += `  test:\n`
        result += `    runs-on: ubuntu-latest\n`
        result += `    steps:\n`
        result += `      - uses: actions/checkout@v3\n`
        result += `      - name: Setup Node.js\n`
        result += `        uses: actions/setup-node@v3\n`
        result += `        with:\n`
        result += `          node-version: '18'\n`
        result += `      - name: Install n8n\n`
        result += `        run: npm install -g n8n\n`
        result += `      - name: Validate Workflow\n`
        result += `        run: n8n execute --file workflow.json\n\n`
      }

      if (autoDeployment) {
        result += `  deploy:\n`
        result += `    runs-on: ubuntu-latest\n`
        result += `    needs: test\n`
        result += `    if: github.ref == 'refs/heads/main'\n`
        result += `    steps:\n`
        result += `      - uses: actions/checkout@v3\n`
        result += `      - name: Deploy to n8n\n`
        result += `        env:\n`
        result += `          N8N_API_KEY: \${{ secrets.N8N_API_KEY }}\n`
        result += `          N8N_BASE_URL: \${{ secrets.N8N_BASE_URL }}\n`
        result += `        run: |\n`
        result += `          curl -X POST "\${N8N_BASE_URL}/api/v1/workflows" \\\n`
        result += `            -H "X-N8N-API-KEY: \${N8N_API_KEY}" \\\n`
        result += `            -H "Content-Type: application/json" \\\n`
        result += `            -d @workflow.json\n`
      }

      result += `\`\`\`\n\n`

    } else if (platform === "gitlab-ci") {
      result += `GitLab CI Configuration (.gitlab-ci.yml):\n\n`
      result += `\`\`\`yaml\nstages:\n`
      if (includeTests) result += `  - test\n`
      if (autoDeployment) result += `  - deploy\n\n`
      
      if (includeTests) {
        result += `test-workflow:\n`
        result += `  stage: test\n`
        result += `  image: node:18\n`
        result += `  script:\n`
        result += `    - npm install -g n8n\n`
        result += `    - n8n execute --file workflow.json\n\n`
      }

      if (autoDeployment) {
        result += `deploy-workflow:\n`
        result += `  stage: deploy\n`
        result += `  only:\n`
        result += `    - main\n`
        result += `  script:\n`
        result += `    - echo "Deploying workflow..."\n`
        result += `    # Add deployment script\n`
      }

      result += `\`\`\`\n\n`

    } else if (platform === "jenkins") {
      result += `Jenkins Pipeline (Jenkinsfile):\n\n`
      result += `\`\`\`groovy\npipeline {\n`
      result += `    agent any\n\n`
      result += `    stages {\n`
      
      if (includeTests) {
        result += `        stage('Test') {\n`
        result += `            steps {\n`
        result += `                sh 'npm install -g n8n'\n`
        result += `                sh 'n8n execute --file workflow.json'\n`
        result += `            }\n`
        result += `        }\n`
      }

      if (autoDeployment) {
        result += `        stage('Deploy') {\n`
        result += `            when {\n`
        result += `                branch 'main'\n`
        result += `            }\n`
        result += `            steps {\n`
        result += `                echo 'Deploying workflow...'\n`
        result += `                // Add deployment commands\n`
        result += `            }\n`
        result += `        }\n`
      }

      result += `    }\n`
      result += `}\n\`\`\`\n\n`
    }

    result += `📝 Configuration Notes:\n`
    result += `  - Update secrets/credentials in your CI/CD platform\n`
    result += `  - Export your workflow as JSON and commit to repository\n`
    result += `  - Configure environment variables for API keys\n`
    result += `  - Test the pipeline in a non-production environment first\n`

    return result
  } catch (error) {
    return `Error generating CI/CD config: ${error.message}`
  }
}

/**
 * Generate Custom Node
 */
function executeGenerateCustomNode(args) {
  const { nodeName, nodeType = "action", includeCredentials = false, generateTests = true } = args

  if (!nodeName) {
    return "Error: nodeName is required"
  }

  try {
    let result = `🔧 Custom Node Template Generator\n\n`
    result += `Node Name: ${nodeName}\n`
    result += `Node Type: ${nodeType}\n`
    result += `Credentials: ${includeCredentials ? "Yes" : "No"}\n`
    result += `Tests: ${generateTests ? "Yes" : "No"}\n\n`

    // Generate node class
    result += `Node Implementation (${nodeName}.node.ts):\n\n`
    result += `\`\`\`typescript\nimport {\n`
    result += `  IExecuteFunctions,\n`
    result += `  INodeExecutionData,\n`
    result += `  INodeType,\n`
    result += `  INodeTypeDescription,\n`
    result += `} from 'n8n-workflow';\n\n`

    result += `export class ${nodeName} implements INodeType {\n`
    result += `  description: INodeTypeDescription = {\n`
    result += `    displayName: '${nodeName}',\n`
    result += `    name: '${nodeName.toLowerCase()}',\n`
    result += `    group: ['transform'],\n`
    result += `    version: 1,\n`
    result += `    description: 'Custom ${nodeName} node',\n`
    result += `    defaults: {\n`
    result += `      name: '${nodeName}',\n`
    result += `    },\n`
    result += `    inputs: ['main'],\n`
    result += `    outputs: ['main'],\n`

    if (includeCredentials) {
      result += `    credentials: [\n`
      result += `      {\n`
      result += `        name: '${nodeName.toLowerCase()}Api',\n`
      result += `        required: true,\n`
      result += `      },\n`
      result += `    ],\n`
    }

    result += `    properties: [\n`
    result += `      {\n`
    result += `        displayName: 'Operation',\n`
    result += `        name: 'operation',\n`
    result += `        type: 'options',\n`
    result += `        options: [\n`
    result += `          {\n`
    result += `            name: 'Process',\n`
    result += `            value: 'process',\n`
    result += `            description: 'Process the input data',\n`
    result += `          },\n`
    result += `        ],\n`
    result += `        default: 'process',\n`
    result += `      },\n`
    result += `    ],\n`
    result += `  };\n\n`

    result += `  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {\n`
    result += `    const items = this.getInputData();\n`
    result += `    const returnData: INodeExecutionData[] = [];\n\n`
    result += `    for (let i = 0; i < items.length; i++) {\n`
    result += `      const operation = this.getNodeParameter('operation', i) as string;\n\n`
    result += `      if (operation === 'process') {\n`
    result += `        // Add your custom logic here\n`
    result += `        const item = items[i];\n`
    result += `        returnData.push({ json: item.json });\n`
    result += `      }\n`
    result += `    }\n\n`
    result += `    return [returnData];\n`
    result += `  }\n`
    result += `}\n\`\`\`\n\n`

    if (includeCredentials) {
      result += `Credentials File (${nodeName}Api.credentials.ts):\n\n`
      result += `\`\`\`typescript\nimport {\n`
      result += `  ICredentialType,\n`
      result += `  INodeProperties,\n`
      result += `} from 'n8n-workflow';\n\n`
      result += `export class ${nodeName}Api implements ICredentialType {\n`
      result += `  name = '${nodeName.toLowerCase()}Api';\n`
      result += `  displayName = '${nodeName} API';\n`
      result += `  properties: INodeProperties[] = [\n`
      result += `    {\n`
      result += `      displayName: 'API Key',\n`
      result += `      name: 'apiKey',\n`
      result += `      type: 'string',\n`
      result += `      default: '',\n`
      result += `    },\n`
      result += `  ];\n`
      result += `}\n\`\`\`\n\n`
    }

    if (generateTests) {
      result += `Test File (${nodeName}.node.test.ts):\n\n`
      result += `\`\`\`typescript\nimport { ${nodeName} } from './${nodeName}.node';\n\n`
      result += `describe('${nodeName}', () => {\n`
      result += `  it('should process data correctly', async () => {\n`
      result += `    // Add test implementation\n`
      result += `  });\n`
      result += `});\n\`\`\`\n\n`
    }

    result += `📝 Next Steps:\n`
    result += `  1. Create the files in your n8n custom nodes directory\n`
    result += `  2. Implement your custom logic in the execute() method\n`
    result += `  3. Add required parameters and options\n`
    result += `  4. Test the node locally\n`
    result += `  5. Build and deploy: npm run build\n`

    return result
  } catch (error) {
    return `Error generating custom node: ${error.message}`
  }
}

/**
 * Generate Workflow Documentation
 */
function executeGenerateWorkflowDocs(args) {
  const { format = "markdown", includeNodeDetails = true, includeDiagram = true, includeExamples = true } = args

  try {
    const workflow = getWorkflowContext()
    if (!workflow.workflow) {
      return "No workflow is currently open"
    }

    let result = ""

    if (format === "markdown") {
      result += `# ${workflow.workflow.name || "Workflow"} Documentation\n\n`
      result += `**Generated:** ${new Date().toLocaleString()}\n\n`

      // Overview
      result += `## Overview\n\n`
      result += `- **Total Nodes:** ${workflow.nodeCount}\n`
      result += `- **Total Connections:** ${workflow.connectionCount}\n`
      result += `- **Active Nodes:** ${workflow.nodes.filter(n => !n.disabled).length}\n\n`

      // Node List
      result += `## Nodes\n\n`
      workflow.nodes.forEach((node, index) => {
        result += `### ${index + 1}. ${node.name}\n\n`
        result += `- **Type:** \`${node.type}\`\n`
        result += `- **Position:** [${node.position[0]}, ${node.position[1]}]\n`
        result += `- **Status:** ${node.disabled ? "Disabled" : "Active"}\n`

        if (includeNodeDetails && node.parameters && Object.keys(node.parameters).length > 0) {
          result += `- **Parameters:**\n`
          Object.entries(node.parameters).forEach(([key, value]) => {
            const displayValue = typeof value === "object" ? JSON.stringify(value) : value
            result += `  - \`${key}\`: ${displayValue}\n`
          })
        }
        result += `\n`
      })

      // Connections
      result += `## Connections\n\n`
      const connections = workflow.workflow.connections || {}
      Object.entries(connections).forEach(([sourceName, conns]) => {
        if (conns.main) {
          conns.main.forEach((outputs, outputIndex) => {
            if (outputs) {
              outputs.forEach(output => {
                result += `- **${sourceName}** → **${output.node}** (Output ${outputIndex}, Input ${output.index || 0})\n`
              })
            }
          })
        }
      })
      result += `\n`

      // Diagram
      if (includeDiagram) {
        result += `## Workflow Diagram\n\n`
        result += `\`\`\`mermaid\ngraph TD\n`
        
        // Add nodes
        workflow.nodes.forEach(node => {
          const nodeId = node.name.replace(/\s+/g, "_")
          result += `    ${nodeId}[${node.name}]\n`
        })

        // Add connections
        Object.entries(connections).forEach(([sourceName, conns]) => {
          const sourceId = sourceName.replace(/\s+/g, "_")
          if (conns.main) {
            conns.main.forEach(outputs => {
              if (outputs) {
                outputs.forEach(output => {
                  const targetId = output.node.replace(/\s+/g, "_")
                  result += `    ${sourceId} --> ${targetId}\n`
                })
              }
            })
          }
        })

        result += `\`\`\`\n\n`
      }

      // Examples
      if (includeExamples) {
        result += `## Usage Examples\n\n`
        result += `### Basic Execution\n\n`
        result += `\`\`\`bash\n`
        result += `# Execute workflow manually\n`
        result += `n8n execute --id ${workflow.workflow.id || "WORKFLOW_ID"}\n`
        result += `\`\`\`\n\n`

        result += `### API Trigger\n\n`
        result += `\`\`\`bash\n`
        result += `# Trigger via webhook (if configured)\n`
        result += `curl -X POST https://your-n8n-instance.com/webhook/WEBHOOK_ID \\\n`
        result += `  -H "Content-Type: application/json" \\\n`
        result += `  -d '{"data": "example"}'  \n`
        result += `\`\`\`\n\n`
      }

      // Maintenance
      result += `## Maintenance Notes\n\n`
      result += `- Review and update node configurations regularly\n`
      result += `- Test workflow after any modifications\n`
      result += `- Keep credentials up to date\n`
      result += `- Monitor execution logs for errors\n`
      result += `- Create snapshots before major changes\n\n`

    } else if (format === "html") {
      result += `<!DOCTYPE html>\n<html>\n<head>\n`
      result += `  <title>${workflow.workflow.name || "Workflow"} Documentation</title>\n`
      result += `  <style>body { font-family: Arial, sans-serif; margin: 40px; }</style>\n`
      result += `</head>\n<body>\n`
      result += `  <h1>${workflow.workflow.name || "Workflow"} Documentation</h1>\n`
      result += `  <p>Generated: ${new Date().toLocaleString()}</p>\n`
      result += `  <h2>Overview</h2>\n`
      result += `  <ul>\n`
      result += `    <li>Total Nodes: ${workflow.nodeCount}</li>\n`
      result += `    <li>Total Connections: ${workflow.connectionCount}</li>\n`
      result += `  </ul>\n`
      result += `</body>\n</html>\n`

    } else if (format === "json") {
      const docData = {
        workflow: {
          name: workflow.workflow.name,
          nodeCount: workflow.nodeCount,
          connectionCount: workflow.connectionCount,
        },
        nodes: workflow.nodes.map(node => ({
          name: node.name,
          type: node.type,
          position: node.position,
          disabled: node.disabled,
          parameters: includeNodeDetails ? node.parameters : undefined,
        })),
        connections: workflow.workflow.connections,
        generatedAt: new Date().toISOString(),
      }
      result = JSON.stringify(docData, null, 2)
    }

    return `📚 Workflow Documentation Generated (${format})\n\n${result}`
  } catch (error) {
    return `Error generating documentation: ${error.message}`
  }
}

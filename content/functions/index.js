/**
 * Function Definitions for AI
 * 
 * Bu dosya AI'ya gönderilecek function tanımlamalarını içerir.
 * AI bu function'ları kullanarak n8n workflow'larını manipüle edebilir.
 */

/**
 * Node oluşturma function'ı
 */
export const createNodeFunction = {
  name: "create_node",
  description: "Create a new node in the n8n workflow",
  parameters: {
    type: "object",
    properties: {
      name: {
        type: "string",
        description: "Name of the node (must be unique)",
      },
      type: {
        type: "string",
        description: "Type of the node (e.g., 'n8n-nodes-base.httpRequest')",
      },
      position: {
        type: "object",
        description: "Position of the node on canvas [x, y]",
        properties: {
          x: { type: "number" },
          y: { type: "number" },
        },
      },
      parameters: {
        type: "object",
        description: "Node parameters",
      },
      notes: {
        type: "string",
        description: "Optional notes for the node",
      },
    },
    required: ["name", "type"],
  },
}

/**
 * Node güncelleme function'ı
 */
export const updateNodeFunction = {
  name: "update_node",
  description: "Update an existing node in the n8n workflow",
  parameters: {
    type: "object",
    properties: {
      name: {
        type: "string",
        description: "Name of the node to update",
      },
      parameters: {
        type: "object",
        description: "Parameters to update",
      },
      position: {
        type: "object",
        description: "New position [x, y]",
        properties: {
          x: { type: "number" },
          y: { type: "number" },
        },
      },
      notes: {
        type: "string",
        description: "Notes to update",
      },
      disabled: {
        type: "boolean",
        description: "Whether to disable the node",
      },
    },
    required: ["name"],
  },
}

/**
 * Node silme function'ı
 */
export const removeNodeFunction = {
  name: "remove_node",
  description: "Remove a node from the n8n workflow",
  parameters: {
    type: "object",
    properties: {
      name: {
        type: "string",
        description: "Name of the node to remove",
      },
    },
    required: ["name"],
  },
}

/**
 * Connection ekleme function'ı
 */
export const addConnectionFunction = {
  name: "add_connection",
  description: "Add a connection between two nodes in the workflow",
  parameters: {
    type: "object",
    properties: {
      sourceNode: {
        type: "string",
        description: "Name of the source node",
      },
      targetNode: {
        type: "string",
        description: "Name of the target node",
      },
      sourceType: {
        type: "string",
        description: "Output type of source node (default: 'main')",
        default: "main",
      },
      targetType: {
        type: "string",
        description: "Input type of target node (default: 'main')",
        default: "main",
      },
      sourceIndex: {
        type: "number",
        description: "Output index (default: 0)",
        default: 0,
      },
      targetIndex: {
        type: "number",
        description: "Input index (default: 0)",
        default: 0,
      },
    },
    required: ["sourceNode", "targetNode"],
  },
}

/**
 * Workflow bilgisi alma function'ı
 */
export const getWorkflowInfoFunction = {
  name: "get_workflow_info",
  description: "Get information about the current workflow",
  parameters: {
    type: "object",
    properties: {
      includeNodes: {
        type: "boolean",
        description: "Whether to include node details",
        default: true,
      },
      includeConnections: {
        type: "boolean",
        description: "Whether to include connection details",
        default: true,
      },
    },
    required: [],
  },
}

/**
 * Node bilgisi alma function'ı
 */
export const getNodeInfoFunction = {
  name: "get_node_info",
  description: "Get detailed information about a specific node",
  parameters: {
    type: "object",
    properties: {
      name: {
        type: "string",
        description: "Name of the node",
      },
    },
    required: ["name"],
  },
}

/**
 * Connection Management - Remove Connection
 */
export const removeConnectionFunction = {
  name: "remove_connection",
  description: "Remove a connection between two nodes",
  parameters: {
    type: "object",
    properties: {
      sourceNode: {
        type: "string",
        description: "Name of the source node",
      },
      targetNode: {
        type: "string",
        description: "Name of the target node",
      },
      sourceIndex: {
        type: "number",
        description: "Output index (default: 0)",
        default: 0,
      },
      targetIndex: {
        type: "number",
        description: "Input index (default: 0)",
        default: 0,
      },
    },
    required: ["sourceNode", "targetNode"],
  },
}

/**
 * Node Clone/Duplicate
 */
export const cloneNodeFunction = {
  name: "clone_node",
  description: "Clone a node with all its settings and optionally its connections",
  parameters: {
    type: "object",
    properties: {
      nodeName: {
        type: "string",
        description: "Name of the node to clone",
      },
      newName: {
        type: "string",
        description: "Name for the cloned node (must be unique)",
      },
      position: {
        type: "object",
        description: "Position for cloned node (optional, auto-calculated if omitted)",
        properties: {
          x: { type: "number" },
          y: { type: "number" },
        },
      },
      cloneConnections: {
        type: "boolean",
        description: "Also clone incoming/outgoing connections",
        default: false,
      },
    },
    required: ["nodeName", "newName"],
  },
}

/**
 * Node Library Search
 */
export const searchNodesFunction = {
  name: "search_nodes",
  description: "Search available node types by name or description",
  parameters: {
    type: "object",
    properties: {
      query: {
        type: "string",
        description: "Search query (e.g., 'http', 'database', 'email')",
      },
      limit: {
        type: "number",
        description: "Maximum number of results (default: 10)",
        default: 10,
      },
    },
    required: ["query"],
  },
}

/**
 * Bulk Operations - Bulk Update
 */
export const bulkUpdateNodesFunction = {
  name: "bulk_update_nodes",
  description: "Update multiple nodes at once based on filter criteria",
  parameters: {
    type: "object",
    properties: {
      filter: {
        type: "object",
        description: "Filter criteria",
        properties: {
          type: {
            type: "string",
            description: "Node type to filter (e.g., 'n8n-nodes-base.httpRequest')",
          },
          namePattern: {
            type: "string",
            description: "Name pattern to match (supports wildcards)",
          },
          disabled: {
            type: "boolean",
            description: "Filter by disabled status",
          },
        },
      },
      updates: {
        type: "object",
        description: "Updates to apply to matching nodes",
        properties: {
          parameters: {
            type: "object",
            description: "Parameters to update",
          },
          disabled: {
            type: "boolean",
            description: "Set disabled status",
          },
          notes: {
            type: "string",
            description: "Update notes",
          },
        },
      },
    },
    required: ["filter", "updates"],
  },
}

/**
 * Bulk Operations - Bulk Disable/Enable
 */
export const bulkDisableNodesFunction = {
  name: "bulk_disable_nodes",
  description: "Disable or enable multiple nodes at once",
  parameters: {
    type: "object",
    properties: {
      nodeNames: {
        type: "array",
        description: "Array of node names to disable/enable",
        items: { type: "string" },
      },
      disabled: {
        type: "boolean",
        description: "True to disable, false to enable",
      },
    },
    required: ["nodeNames", "disabled"],
  },
}

/**
 * Auto Layout - Arrange Nodes
 */
export const autoArrangeNodesFunction = {
  name: "auto_arrange_nodes",
  description: "Automatically arrange nodes in a clean layout",
  parameters: {
    type: "object",
    properties: {
      direction: {
        type: "string",
        description: "Layout direction: 'horizontal' or 'vertical'",
        enum: ["horizontal", "vertical"],
        default: "horizontal",
      },
      spacing: {
        type: "number",
        description: "Space between nodes in pixels (default: 200)",
        default: 200,
      },
      startPosition: {
        type: "object",
        description: "Starting position (default: [100, 100])",
        properties: {
          x: { type: "number" },
          y: { type: "number" },
        },
      },
    },
    required: [],
  },
}

/**
 * Workflow Validation
 */
export const validateWorkflowFunction = {
  name: "validate_workflow",
  description: "Validate workflow and find potential issues",
  parameters: {
    type: "object",
    properties: {
      checkConnections: {
        type: "boolean",
        description: "Check for connection issues",
        default: true,
      },
      checkParameters: {
        type: "boolean",
        description: "Check for missing required parameters",
        default: true,
      },
      checkCredentials: {
        type: "boolean",
        description: "Check for missing credentials",
        default: true,
      },
    },
    required: [],
  },
}

/**
 * Workflow Execution - Test Workflow
 */
export const testWorkflowFunction = {
  name: "test_workflow",
  description: "Test the current workflow execution",
  parameters: {
    type: "object",
    properties: {
      startNode: {
        type: "string",
        description: "Optional: Start execution from specific node",
      },
    },
    required: [],
  },
}

/**
 * Workflow Variables (Safe)
 */
export const getWorkflowVariablesFunction = {
  name: "get_workflow_variables",
  description: "Get workflow variables and static data (values hidden for security)",
  parameters: {
    type: "object",
    properties: {
      includeValues: {
        type: "boolean",
        description: "Include variable values (default: false for security)",
        default: false,
      },
    },
    required: [],
  },
}

/**
 * Workflow Export
 */
export const exportWorkflowFunction = {
  name: "export_workflow",
  description: "Export workflow as JSON",
  parameters: {
    type: "object",
    properties: {
      includeCredentials: {
        type: "boolean",
        description: "Include credential data (default: false for security)",
        default: false,
      },
      selectedNodes: {
        type: "array",
        description: "Export only specific nodes (optional)",
        items: { type: "string" },
      },
    },
    required: [],
  },
}

/**
 * Get Node Schema
 */
export const getNodeSchemaFunction = {
  name: "get_node_schema",
  description: "Get the parameter schema for a node type",
  parameters: {
    type: "object",
    properties: {
      nodeType: {
        type: "string",
        description: "Node type (e.g., 'n8n-nodes-base.httpRequest')",
      },
    },
    required: ["nodeType"],
  },
}

/**
 * PHASE 2: Import Workflow
 */
export const importWorkflowFunction = {
  name: "import_workflow",
  description: "Import a workflow from JSON data",
  parameters: {
    type: "object",
    properties: {
      workflowJSON: {
        type: "string",
        description: "Workflow JSON data as string",
      },
      mergeWithCurrent: {
        type: "boolean",
        description: "Merge with current workflow instead of replacing (default: false)",
        default: false,
      },
      positionOffset: {
        type: "object",
        description: "Offset position for imported nodes (useful when merging)",
        properties: {
          x: { type: "number" },
          y: { type: "number" },
        },
      },
    },
    required: ["workflowJSON"],
  },
}

/**
 * PHASE 2: Merge Workflows
 */
export const mergeWorkflowsFunction = {
  name: "merge_workflows",
  description: "Merge two workflows by combining their nodes and connections",
  parameters: {
    type: "object",
    properties: {
      sourceWorkflowJSON: {
        type: "string",
        description: "Source workflow JSON to merge into current workflow",
      },
      positionOffset: {
        type: "object",
        description: "Offset for source workflow nodes (default: {x: 500, y: 0})",
        properties: {
          x: { type: "number" },
          y: { type: "number" },
        },
      },
      renameConflicts: {
        type: "boolean",
        description: "Automatically rename conflicting node names (default: true)",
        default: true,
      },
    },
    required: ["sourceWorkflowJSON"],
  },
}

/**
 * PHASE 2: Get Execution History
 */
export const getExecutionHistoryFunction = {
  name: "get_execution_history",
  description: "Get workflow execution history and results",
  parameters: {
    type: "object",
    properties: {
      limit: {
        type: "number",
        description: "Maximum number of executions to return (default: 10, max: 50)",
        default: 10,
      },
      status: {
        type: "string",
        description: "Filter by execution status",
        enum: ["all", "success", "error", "waiting", "running"],
        default: "all",
      },
      includeData: {
        type: "boolean",
        description: "Include execution data details (default: false)",
        default: false,
      },
    },
    required: [],
  },
}

/**
 * PHASE 2: Analyze Performance
 */
export const analyzePerformanceFunction = {
  name: "analyze_performance",
  description: "Analyze workflow performance and identify bottlenecks",
  parameters: {
    type: "object",
    properties: {
      executionCount: {
        type: "number",
        description: "Number of recent executions to analyze (default: 10)",
        default: 10,
      },
      showNodeStats: {
        type: "boolean",
        description: "Show per-node statistics (default: true)",
        default: true,
      },
      showBottlenecks: {
        type: "boolean",
        description: "Identify and highlight bottlenecks (default: true)",
        default: true,
      },
    },
    required: [],
  },
}

/**
 * PHASE 2: Get Workflow Templates
 */
export const getWorkflowTemplatesFunction = {
  name: "get_workflow_templates",
  description: "Get available workflow templates and examples",
  parameters: {
    type: "object",
    properties: {
      category: {
        type: "string",
        description: "Filter by category (e.g., 'data-sync', 'automation', 'api-integration')",
      },
      search: {
        type: "string",
        description: "Search query for templates",
      },
      limit: {
        type: "number",
        description: "Maximum number of templates (default: 10)",
        default: 10,
      },
    },
    required: [],
  },
}

/**
 * PHASE 2: Create from Template
 */
export const createFromTemplateFunction = {
  name: "create_from_template",
  description: "Create a workflow from a predefined template",
  parameters: {
    type: "object",
    properties: {
      templateId: {
        type: "string",
        description: "Template ID to use",
      },
      customizations: {
        type: "object",
        description: "Custom parameters for the template",
      },
      replaceExisting: {
        type: "boolean",
        description: "Replace current workflow (default: false)",
        default: false,
      },
    },
    required: ["templateId"],
  },
}

/**
 * PHASE 2: Get Node Execution Data
 */
export const getNodeExecutionDataFunction = {
  name: "get_node_execution_data",
  description: "Get execution data and output for a specific node",
  parameters: {
    type: "object",
    properties: {
      nodeName: {
        type: "string",
        description: "Name of the node",
      },
      executionId: {
        type: "string",
        description: "Specific execution ID (optional, uses latest if omitted)",
      },
      outputIndex: {
        type: "number",
        description: "Output index to retrieve (default: 0)",
        default: 0,
      },
    },
    required: ["nodeName"],
  },
}

/**
 * PHASE 2: Compare Workflows
 */
export const compareWorkflowsFunction = {
  name: "compare_workflows",
  description: "Compare current workflow with another workflow JSON",
  parameters: {
    type: "object",
    properties: {
      compareWithJSON: {
        type: "string",
        description: "Workflow JSON to compare with",
      },
      showDifferences: {
        type: "boolean",
        description: "Show detailed differences (default: true)",
        default: true,
      },
      compareNodes: {
        type: "boolean",
        description: "Compare node configurations (default: true)",
        default: true,
      },
      compareConnections: {
        type: "boolean",
        description: "Compare connections (default: true)",
        default: true,
      },
    },
    required: ["compareWithJSON"],
  },
}

/**
 * PHASE 2: Optimize Workflow
 */
export const optimizeWorkflowFunction = {
  name: "optimize_workflow",
  description: "Analyze and suggest workflow optimizations",
  parameters: {
    type: "object",
    properties: {
      applyOptimizations: {
        type: "boolean",
        description: "Apply suggested optimizations automatically (default: false)",
        default: false,
      },
      checkRedundancy: {
        type: "boolean",
        description: "Check for redundant nodes (default: true)",
        default: true,
      },
      checkPerformance: {
        type: "boolean",
        description: "Check for performance issues (default: true)",
        default: true,
      },
    },
    required: [],
  },
}

/**
 * PHASE 3: Workflow Versioning
 */
export const createWorkflowSnapshotFunction = {
  name: "create_workflow_snapshot",
  description: "Create a snapshot/version of the current workflow state",
  parameters: {
    type: "object",
    properties: {
      snapshotName: {
        type: "string",
        description: "Name/label for this snapshot (e.g., 'Before API change', 'v1.2.0')",
      },
      description: {
        type: "string",
        description: "Optional description of what changed or why snapshot was taken",
      },
      includeMetadata: {
        type: "boolean",
        description: "Include timestamp and user metadata (default: true)",
        default: true,
      },
    },
    required: ["snapshotName"],
  },
}

/**
 * PHASE 3: List Snapshots
 */
export const listWorkflowSnapshotsFunction = {
  name: "list_workflow_snapshots",
  description: "List all saved workflow snapshots/versions",
  parameters: {
    type: "object",
    properties: {
      limit: {
        type: "number",
        description: "Maximum number of snapshots to return (default: 10)",
        default: 10,
      },
      sortBy: {
        type: "string",
        description: "Sort by date or name",
        enum: ["date", "name"],
        default: "date",
      },
    },
    required: [],
  },
}

/**
 * PHASE 3: Restore Snapshot
 */
export const restoreWorkflowSnapshotFunction = {
  name: "restore_workflow_snapshot",
  description: "Restore workflow to a previous snapshot state",
  parameters: {
    type: "object",
    properties: {
      snapshotId: {
        type: "string",
        description: "Snapshot ID to restore from",
      },
      createBackupFirst: {
        type: "boolean",
        description: "Create backup of current state before restoring (default: true)",
        default: true,
      },
    },
    required: ["snapshotId"],
  },
}

/**
 * PHASE 3: Debug Workflow
 */
export const debugWorkflowFunction = {
  name: "debug_workflow",
  description: "Advanced workflow debugging with breakpoints and step execution",
  parameters: {
    type: "object",
    properties: {
      mode: {
        type: "string",
        description: "Debug mode",
        enum: ["analyze", "trace", "profile"],
        default: "analyze",
      },
      nodeName: {
        type: "string",
        description: "Specific node to debug (optional, debugs all if omitted)",
      },
      showDataFlow: {
        type: "boolean",
        description: "Show data flow between nodes (default: true)",
        default: true,
      },
      checkErrors: {
        type: "boolean",
        description: "Check for potential runtime errors (default: true)",
        default: true,
      },
    },
    required: [],
  },
}

/**
 * PHASE 3: Generate Test Cases
 */
export const generateTestCasesFunction = {
  name: "generate_test_cases",
  description: "Generate test cases for workflow validation",
  parameters: {
    type: "object",
    properties: {
      coverage: {
        type: "string",
        description: "Test coverage level",
        enum: ["basic", "comprehensive", "edge-cases"],
        default: "comprehensive",
      },
      includeInputData: {
        type: "boolean",
        description: "Generate sample input data for tests (default: true)",
        default: true,
      },
      testErrorHandling: {
        type: "boolean",
        description: "Include error/failure test cases (default: true)",
        default: true,
      },
    },
    required: [],
  },
}

/**
 * PHASE 3: Run Test Suite
 */
export const runTestSuiteFunction = {
  name: "run_test_suite",
  description: "Execute workflow test suite and report results",
  parameters: {
    type: "object",
    properties: {
      testSuiteId: {
        type: "string",
        description: "Test suite ID to run (uses default if omitted)",
      },
      stopOnFailure: {
        type: "boolean",
        description: "Stop execution on first failure (default: false)",
        default: false,
      },
      generateReport: {
        type: "boolean",
        description: "Generate detailed test report (default: true)",
        default: true,
      },
    },
    required: [],
  },
}

/**
 * PHASE 3: Generate CI/CD Config
 */
export const generateCICDConfigFunction = {
  name: "generate_cicd_config",
  description: "Generate CI/CD configuration for workflow deployment",
  parameters: {
    type: "object",
    properties: {
      platform: {
        type: "string",
        description: "CI/CD platform",
        enum: ["github-actions", "gitlab-ci", "jenkins", "generic"],
        default: "github-actions",
      },
      includeTests: {
        type: "boolean",
        description: "Include test stage (default: true)",
        default: true,
      },
      autoDeployment: {
        type: "boolean",
        description: "Enable automatic deployment (default: false)",
        default: false,
      },
    },
    required: [],
  },
}

/**
 * PHASE 3: Generate Custom Node Template
 */
export const generateCustomNodeFunction = {
  name: "generate_custom_node",
  description: "Generate custom node development template",
  parameters: {
    type: "object",
    properties: {
      nodeName: {
        type: "string",
        description: "Name for the custom node",
      },
      nodeType: {
        type: "string",
        description: "Type of node",
        enum: ["trigger", "action", "transformation"],
        default: "action",
      },
      includeCredentials: {
        type: "boolean",
        description: "Include credential configuration (default: false)",
        default: false,
      },
      generateTests: {
        type: "boolean",
        description: "Generate test files (default: true)",
        default: true,
      },
    },
    required: ["nodeName"],
  },
}

/**
 * PHASE 3: Workflow Documentation
 */
export const generateWorkflowDocsFunction = {
  name: "generate_workflow_docs",
  description: "Generate comprehensive workflow documentation",
  parameters: {
    type: "object",
    properties: {
      format: {
        type: "string",
        description: "Documentation format",
        enum: ["markdown", "html", "json"],
        default: "markdown",
      },
      includeNodeDetails: {
        type: "boolean",
        description: "Include detailed node configurations (default: true)",
        default: true,
      },
      includeDiagram: {
        type: "boolean",
        description: "Include workflow diagram (default: true)",
        default: true,
      },
      includeExamples: {
        type: "boolean",
        description: "Include usage examples (default: true)",
        default: true,
      },
    },
    required: [],
  },
}

/**
 * Tüm function tanımlamaları
 */
export const allFunctions = [
  // PHASE 1: Basic Operations
  createNodeFunction,
  updateNodeFunction,
  removeNodeFunction,
  addConnectionFunction,
  removeConnectionFunction,
  cloneNodeFunction,
  searchNodesFunction,
  bulkUpdateNodesFunction,
  bulkDisableNodesFunction,
  autoArrangeNodesFunction,
  validateWorkflowFunction,
  testWorkflowFunction,
  getWorkflowVariablesFunction,
  exportWorkflowFunction,
  getNodeSchemaFunction,
  getWorkflowInfoFunction,
  getNodeInfoFunction,
  
  // PHASE 2: Advanced Features
  importWorkflowFunction,
  mergeWorkflowsFunction,
  getExecutionHistoryFunction,
  analyzePerformanceFunction,
  getWorkflowTemplatesFunction,
  createFromTemplateFunction,
  getNodeExecutionDataFunction,
  compareWorkflowsFunction,
  optimizeWorkflowFunction,
  
  // PHASE 3: Enterprise Features
  createWorkflowSnapshotFunction,
  listWorkflowSnapshotsFunction,
  restoreWorkflowSnapshotFunction,
  debugWorkflowFunction,
  generateTestCasesFunction,
  runTestSuiteFunction,
  generateCICDConfigFunction,
  generateCustomNodeFunction,
  generateWorkflowDocsFunction,
]

/**
 * Function'ları AI formatına çevir (OpenAI/Gemini format)
 * Tools ayarlarına göre filtrele
 */
export function getFunctionsForAI(settings) {
  const enabledFunctions = []

  // Workflow Access - get_workflow_info, get_node_info, get_workflow_variables
  if (settings.workflowAccess !== false) {
    enabledFunctions.push(
      getWorkflowInfoFunction, 
      getNodeInfoFunction,
      getWorkflowVariablesFunction,
      exportWorkflowFunction
    )
  }

  // Node Library Access - search_nodes, get_node_schema
  if (settings.nodeLibraryAccess !== false) {
    enabledFunctions.push(searchNodesFunction, getNodeSchemaFunction)
  }

  // Node Creation
  if (settings.nodeCreation !== false) {
    enabledFunctions.push(createNodeFunction)
  }

  // Node Editing
  if (settings.nodeEditing !== false) {
    enabledFunctions.push(updateNodeFunction)
  }

  // Node Removal
  if (settings.nodeRemoval !== false) {
    enabledFunctions.push(removeNodeFunction)
  }

  // Connection Management (node creation veya editing aktifse)
  if (settings.nodeCreation !== false || settings.nodeEditing !== false) {
    enabledFunctions.push(addConnectionFunction, removeConnectionFunction)
  }

  // Node Cloning (node creation aktifse)
  if (settings.nodeCloning !== false && settings.nodeCreation !== false) {
    enabledFunctions.push(cloneNodeFunction)
  }

  // Bulk Operations (node editing aktifse)
  if (settings.bulkOperations !== false && settings.nodeEditing !== false) {
    enabledFunctions.push(bulkUpdateNodesFunction, bulkDisableNodesFunction)
  }

  // Auto Layout
  if (settings.autoLayout !== false) {
    enabledFunctions.push(autoArrangeNodesFunction)
  }

  // Workflow Validation
  if (settings.workflowValidation !== false) {
    enabledFunctions.push(validateWorkflowFunction)
  }

  // Workflow Execution
  if (settings.workflowExecution !== false) {
    enabledFunctions.push(testWorkflowFunction)
  }

  // PHASE 2: Advanced Import/Export
  if (settings.advancedImportExport !== false) {
    enabledFunctions.push(importWorkflowFunction, mergeWorkflowsFunction, compareWorkflowsFunction)
  }

  // PHASE 2: Execution History & Analytics
  if (settings.executionHistory !== false) {
    enabledFunctions.push(
      getExecutionHistoryFunction,
      getNodeExecutionDataFunction,
      analyzePerformanceFunction
    )
  }

  // PHASE 2: Workflow Templates
  if (settings.workflowTemplates !== false) {
    enabledFunctions.push(getWorkflowTemplatesFunction, createFromTemplateFunction)
  }

  // PHASE 2: Workflow Optimization
  if (settings.workflowOptimization !== false) {
    enabledFunctions.push(optimizeWorkflowFunction)
  }

  // PHASE 3: Workflow Versioning
  if (settings.workflowVersioning !== false) {
    enabledFunctions.push(
      createWorkflowSnapshotFunction,
      listWorkflowSnapshotsFunction,
      restoreWorkflowSnapshotFunction
    )
  }

  // PHASE 3: Advanced Debugging
  if (settings.advancedDebugging !== false) {
    enabledFunctions.push(debugWorkflowFunction)
  }

  // PHASE 3: Testing Framework
  if (settings.testingFramework !== false) {
    enabledFunctions.push(generateTestCasesFunction, runTestSuiteFunction)
  }

  // PHASE 3: CI/CD Integration
  if (settings.cicdIntegration !== false) {
    enabledFunctions.push(generateCICDConfigFunction)
  }

  // PHASE 3: Custom Node Development
  if (settings.customNodeDevelopment !== false) {
    enabledFunctions.push(generateCustomNodeFunction)
  }

  // PHASE 3: Documentation Generation
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

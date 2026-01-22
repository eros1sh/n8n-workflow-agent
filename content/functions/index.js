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
  description: "Create a new node in the n8n workflow. If the node requires credentials, you can specify them using the credentials parameter. Use find_node_by_intent to discover the correct node type from user intent.",
  parameters: {
    type: "object",
    properties: {
      name: {
        type: "string",
        description: "Name of the node (must be unique)",
      },
      type: {
        type: "string",
        description: "Type of the node (e.g., 'n8n-nodes-base.httpRequest'). Use find_node_by_intent to find the correct node type from user description.",
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
      credentials: {
        type: "object",
        description: "Credentials to assign to the node. Format: { credentialTypeName: { id: 'credentialId' } or { name: 'credentialName' } }. Use get_node_credentials to find required credential types for a node.",
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
 * Find node by user intent (semantic search)
 */
export const findNodeByIntentFunction = {
  name: "find_node_by_intent",
  description: "Find the best matching node type based on user intent/description. Use this when the user describes what they want to do (e.g., 'send telegram message', 'connect to postgres', 'use openai') and you need to find the correct node type.",
  parameters: {
    type: "object",
    properties: {
      intent: {
        type: "string",
        description: "User intent or description (e.g., 'send telegram message', 'connect to postgres database', 'use openai for chat')",
      },
      category: {
        type: "string",
        description: "Optional category filter: 'io', 'logic', 'flow', 'transform', 'code', 'ai', 'communication', 'file', 'commerce', 'system'",
      },
      preferOfficial: {
        type: "boolean",
        description: "Prefer official nodes over community nodes (default: true)",
        default: true,
      },
    },
    required: ["intent"],
  },
}

/**
 * Get node credentials information
 */
export const getNodeCredentialsFunction = {
  name: "get_node_credentials",
  description: "Get the required credential types for a specific node type. Use this to understand what credentials a node needs before creating it.",
  parameters: {
    type: "object",
    properties: {
      nodeType: {
        type: "string",
        description: "Node type (e.g., 'n8n-nodes-base.telegram')",
      },
    },
    required: ["nodeType"],
  },
}

/**
 * Get credential details (fields, usage examples, authenticate config)
 */
export const getCredentialDetailsFunction = {
  name: "get_credential_details",
  description: "Get detailed information about a credential type including fields, usage examples (like ={{$credentials.apiKey}}), and authentication configuration. Use this to understand how to use credentials in node parameters.",
  parameters: {
    type: "object",
    properties: {
      credentialType: {
        type: "string",
        description: "Credential type name (e.g., 'telegramApi', 'openAiApi', 'postgres')",
      },
    },
    required: ["credentialType"],
  },
}

/**
 * Get credential usage examples
 */
export const getCredentialUsageExamplesFunction = {
  name: "get_credential_usage_examples",
  description: "Get usage examples for a credential type showing how to use it in node parameters (e.g., ={{$credentials.apiKey}}). This helps you understand how to configure nodes that use this credential.",
  parameters: {
    type: "object",
    properties: {
      credentialType: {
        type: "string",
        description: "Credential type name (e.g., 'telegramApi', 'openAiApi')",
      },
    },
    required: ["credentialType"],
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
 * PHASE 4: LangChain Agent Node Manipulation
 */
export const createLangChainAgentFunction = {
  name: "create_langchain_agent",
  description: "Create a LangChain AI agent node with tools, memory, and configuration",
  parameters: {
    type: "object",
    properties: {
      name: {
        type: "string",
        description: "Name of the agent node",
      },
      agentType: {
        type: "string",
        enum: ["tools", "conversational", "plan-and-execute"],
        description: "Type of agent (default: 'tools')",
        default: "tools",
      },
      model: {
        type: "string",
        description: "LLM model to use (e.g., 'gpt-4o', 'claude-3-5-sonnet')",
      },
      systemPrompt: {
        type: "string",
        description: "System prompt for the agent",
      },
      memory: {
        type: "object",
        description: "Memory configuration",
        properties: {
          type: {
            type: "string",
            enum: ["window_buffer", "conversation_summary", "vector_store", "none"],
            default: "window_buffer",
          },
          windowSize: {
            type: "number",
            description: "Window size for window_buffer memory (default: 10)",
            default: 10,
          },
        },
      },
      tools: {
        type: "array",
        description: "List of tool node names to connect to the agent",
        items: { type: "string" },
      },
      position: {
        type: "object",
        description: "Position on canvas",
        properties: {
          x: { type: "number" },
          y: { type: "number" },
        },
      },
    },
    required: ["name", "model"],
  },
}

export const addToolToAgentFunction = {
  name: "add_tool_to_agent",
  description: "Add a tool (HTTP Request, Workflow, Code, etc.) to an existing LangChain agent",
  parameters: {
    type: "object",
    properties: {
      agentNodeName: {
        type: "string",
        description: "Name of the agent node",
      },
      toolNodeName: {
        type: "string",
        description: "Name of the tool node to connect",
      },
      toolDescription: {
        type: "string",
        description: "Description of what the tool does (for agent understanding)",
      },
    },
    required: ["agentNodeName", "toolNodeName"],
  },
}

export const configureAgentMemoryFunction = {
  name: "configure_agent_memory",
  description: "Configure memory for a LangChain agent node",
  parameters: {
    type: "object",
    properties: {
      agentNodeName: {
        type: "string",
        description: "Name of the agent node",
      },
      memoryType: {
        type: "string",
        enum: ["window_buffer", "conversation_summary", "vector_store", "none"],
        description: "Type of memory to use",
      },
      config: {
        type: "object",
        description: "Memory configuration",
        properties: {
          windowSize: { type: "number" },
          summaryModel: { type: "string" },
          vectorStore: { type: "string" },
        },
      },
    },
    required: ["agentNodeName", "memoryType"],
  },
}

export const connectAgentToToolFunction = {
  name: "connect_agent_to_tool",
  description: "Connect an agent node to a tool node (HTTP Request, Workflow, Code, etc.)",
  parameters: {
    type: "object",
    properties: {
      agentNodeName: {
        type: "string",
        description: "Name of the agent node",
      },
      toolNodeName: {
        type: "string",
        description: "Name of the tool node",
      },
      toolDescription: {
        type: "string",
        description: "Description of the tool for the agent",
      },
    },
    required: ["agentNodeName", "toolNodeName"],
  },
}

/**
 * PHASE 4: Vector Store Integration (RAG Support)
 */
export const createVectorStoreConnectionFunction = {
  name: "create_vector_store_connection",
  description: "Create a connection to a vector store (Qdrant, Pinecone, Weaviate, Chroma) for RAG workflows",
  parameters: {
    type: "object",
    properties: {
      provider: {
        type: "string",
        enum: ["qdrant", "pinecone", "weaviate", "chroma"],
        description: "Vector store provider",
      },
      name: {
        type: "string",
        description: "Name for the connection/credential",
      },
      config: {
        type: "object",
        description: "Connection configuration (URL, API key, etc.)",
        properties: {
          url: { type: "string" },
          apiKey: { type: "string" },
          collection: { type: "string" },
        },
      },
    },
    required: ["provider", "name"],
  },
}

export const createEmbeddingNodeFunction = {
  name: "create_embedding_node",
  description: "Create an embedding node for converting text to vectors",
  parameters: {
    type: "object",
    properties: {
      name: {
        type: "string",
        description: "Name of the embedding node",
      },
      model: {
        type: "string",
        description: "Embedding model (e.g., 'text-embedding-3-small', 'text-embedding-ada-002')",
      },
      inputField: {
        type: "string",
        description: "Field name containing text to embed (default: 'text')",
        default: "text",
      },
      position: {
        type: "object",
        properties: {
          x: { type: "number" },
          y: { type: "number" },
        },
      },
    },
    required: ["name", "model"],
  },
}

export const createVectorSearchNodeFunction = {
  name: "create_vector_search_node",
  description: "Create a vector search node for semantic search in vector stores",
  parameters: {
    type: "object",
    properties: {
      name: {
        type: "string",
        description: "Name of the vector search node",
      },
      vectorStore: {
        type: "string",
        description: "Vector store connection name",
      },
      topK: {
        type: "number",
        description: "Number of results to return (default: 5)",
        default: 5,
      },
      queryField: {
        type: "string",
        description: "Field name containing search query (default: 'query')",
        default: "query",
      },
      position: {
        type: "object",
        properties: {
          x: { type: "number" },
          y: { type: "number" },
        },
      },
    },
    required: ["name", "vectorStore"],
  },
}

export const createRAGWorkflowFunction = {
  name: "create_rag_workflow",
  description: "Create a complete RAG (Retrieval-Augmented Generation) workflow with data source, embeddings, vector store, and LLM",
  parameters: {
    type: "object",
    properties: {
      dataSource: {
        type: "string",
        enum: ["pdf", "web", "database", "file"],
        description: "Type of data source",
      },
      vectorStore: {
        type: "string",
        enum: ["qdrant", "pinecone", "weaviate", "chroma"],
        description: "Vector store provider",
      },
      llm: {
        type: "string",
        description: "LLM model for generation (e.g., 'gpt-4o', 'claude-3-5-sonnet')",
      },
      embeddingModel: {
        type: "string",
        description: "Embedding model (default: 'text-embedding-3-small')",
        default: "text-embedding-3-small",
      },
      workflowName: {
        type: "string",
        description: "Name for the workflow",
      },
    },
    required: ["dataSource", "vectorStore", "llm"],
  },
}

/**
 * PHASE 4: Workflow Execution Control
 */
export const executeWorkflowFunction = {
  name: "execute_workflow",
  description: "Execute a workflow with optional input data and wait for completion",
  parameters: {
    type: "object",
    properties: {
      workflowId: {
        type: "string",
        description: "Workflow ID (uses current workflow if omitted)",
      },
      inputData: {
        type: "object",
        description: "Input data for the workflow execution",
      },
      waitForCompletion: {
        type: "boolean",
        description: "Wait for execution to complete (default: false)",
        default: false,
      },
      startNode: {
        type: "string",
        description: "Start execution from specific node (optional)",
      },
    },
    required: [],
  },
}

export const stopWorkflowExecutionFunction = {
  name: "stop_workflow_execution",
  description: "Stop a running workflow execution",
  parameters: {
    type: "object",
    properties: {
      executionId: {
        type: "string",
        description: "Execution ID to stop",
      },
    },
    required: ["executionId"],
  },
}

export const getExecutionStatusFunction = {
  name: "get_execution_status",
  description: "Get the current status of a workflow execution",
  parameters: {
    type: "object",
    properties: {
      executionId: {
        type: "string",
        description: "Execution ID",
      },
    },
    required: ["executionId"],
  },
}

export const retryFailedExecutionFunction = {
  name: "retry_failed_execution",
  description: "Retry a failed workflow execution from a specific node",
  parameters: {
    type: "object",
    properties: {
      executionId: {
        type: "string",
        description: "Execution ID to retry",
      },
      fromNode: {
        type: "string",
        description: "Start retry from specific node (optional)",
      },
    },
    required: ["executionId"],
  },
}

/**
 * PHASE 4: Credential Management
 */
export const checkNodeCredentialsFunction = {
  name: "check_node_credentials",
  description: "Check if a node has required credentials configured",
  parameters: {
    type: "object",
    properties: {
      nodeName: {
        type: "string",
        description: "Name of the node to check",
      },
    },
    required: ["nodeName"],
  },
}

export const suggestCredentialTypeFunction = {
  name: "suggest_credential_type",
  description: "Suggest the credential type needed for a node based on its type",
  parameters: {
    type: "object",
    properties: {
      nodeType: {
        type: "string",
        description: "Node type (e.g., 'n8n-nodes-base.telegram')",
      },
    },
    required: ["nodeType"],
  },
}

export const validateCredentialConnectionFunction = {
  name: "validate_credential_connection",
  description: "Validate if a node's credential connection is working",
  parameters: {
    type: "object",
    properties: {
      nodeName: {
        type: "string",
        description: "Name of the node to validate",
      },
    },
    required: ["nodeName"],
  },
}

/**
 * PHASE 4: Sub-workflow Management
 */
export const createSubworkflowNodeFunction = {
  name: "create_subworkflow_node",
  description: "Create an Execute Workflow node that calls a sub-workflow",
  parameters: {
    type: "object",
    properties: {
      name: {
        type: "string",
        description: "Name of the Execute Workflow node",
      },
      workflowId: {
        type: "string",
        description: "ID of the workflow to execute",
      },
      inputMapping: {
        type: "object",
        description: "Mapping of input data to sub-workflow parameters",
      },
      position: {
        type: "object",
        properties: {
          x: { type: "number" },
          y: { type: "number" },
        },
      },
    },
    required: ["name", "workflowId"],
  },
}

export const importSubworkflowFunction = {
  name: "import_subworkflow",
  description: "Import a workflow as a sub-workflow (Execute Workflow node)",
  parameters: {
    type: "object",
    properties: {
      workflowJSON: {
        type: "string",
        description: "Workflow JSON to import as sub-workflow",
      },
      asSubworkflow: {
        type: "boolean",
        description: "Create as Execute Workflow node (default: true)",
        default: true,
      },
      nodeName: {
        type: "string",
        description: "Name for the Execute Workflow node",
      },
    },
    required: ["workflowJSON"],
  },
}

export const getSubworkflowInfoFunction = {
  name: "get_subworkflow_info",
  description: "Get information about a sub-workflow (Execute Workflow node)",
  parameters: {
    type: "object",
    properties: {
      nodeName: {
        type: "string",
        description: "Name of the Execute Workflow node",
      },
    },
    required: ["nodeName"],
  },
}

/**
 * PHASE 4: Advanced Node Configuration
 */
export const configureNodeWebhookFunction = {
  name: "configure_node_webhook",
  description: "Configure webhook settings for a webhook trigger node",
  parameters: {
    type: "object",
    properties: {
      nodeName: {
        type: "string",
        description: "Name of the webhook node",
      },
      path: {
        type: "string",
        description: "Webhook path (e.g., '/webhook/my-endpoint')",
      },
      method: {
        type: "string",
        enum: ["GET", "POST", "PUT", "DELETE", "PATCH"],
        description: "HTTP method (default: 'POST')",
        default: "POST",
      },
      authentication: {
        type: "string",
        enum: ["none", "headerAuth", "basicAuth", "oAuth2"],
        description: "Authentication type (default: 'none')",
        default: "none",
      },
    },
    required: ["nodeName", "path"],
  },
}

export const configureNodeScheduleFunction = {
  name: "configure_node_schedule",
  description: "Configure schedule/cron settings for a schedule trigger node",
  parameters: {
    type: "object",
    properties: {
      nodeName: {
        type: "string",
        description: "Name of the schedule trigger node",
      },
      cron: {
        type: "string",
        description: "Cron expression (e.g., '0 9 * * 1-5' for weekdays at 9 AM)",
      },
      timezone: {
        type: "string",
        description: "Timezone (e.g., 'America/New_York', default: UTC)",
        default: "UTC",
      },
    },
    required: ["nodeName", "cron"],
  },
}

export const configureNodeErrorHandlingFunction = {
  name: "configure_node_error_handling",
  description: "Configure error handling settings for a node",
  parameters: {
    type: "object",
    properties: {
      nodeName: {
        type: "string",
        description: "Name of the node",
      },
      continueOnFail: {
        type: "boolean",
        description: "Continue workflow execution if node fails (default: false)",
        default: false,
      },
      retryOnFail: {
        type: "boolean",
        description: "Retry node execution on failure (default: false)",
        default: false,
      },
      maxRetries: {
        type: "number",
        description: "Maximum number of retries (default: 3)",
        default: 3,
      },
      retryDelay: {
        type: "number",
        description: "Delay between retries in seconds (default: 5)",
        default: 5,
      },
    },
    required: ["nodeName"],
  },
}

/**
 * PHASE 4: Batch Processing & Looping
 */
export const createBatchProcessorFunction = {
  name: "create_batch_processor",
  description: "Create a batch processing setup with Split in Batches node",
  parameters: {
    type: "object",
    properties: {
      nodeName: {
        type: "string",
        description: "Name of the Split in Batches node",
      },
      batchSize: {
        type: "number",
        description: "Number of items per batch (default: 10)",
        default: 10,
      },
      position: {
        type: "object",
        properties: {
          x: { type: "number" },
          y: { type: "number" },
        },
      },
    },
    required: ["nodeName"],
  },
}

export const createLoopNodeFunction = {
  name: "create_loop_node",
  description: "Create a loop node (for each item, while, until)",
  parameters: {
    type: "object",
    properties: {
      name: {
        type: "string",
        description: "Name of the loop node",
      },
      loopType: {
        type: "string",
        enum: ["for_each", "while", "until"],
        description: "Type of loop (default: 'for_each')",
        default: "for_each",
      },
      condition: {
        type: "string",
        description: "Condition expression for while/until loops",
      },
      position: {
        type: "object",
        properties: {
          x: { type: "number" },
          y: { type: "number" },
        },
      },
    },
    required: ["name", "loopType"],
  },
}

export const configureSplitInBatchesFunction = {
  name: "configure_split_in_batches",
  description: "Configure Split in Batches node settings",
  parameters: {
    type: "object",
    properties: {
      nodeName: {
        type: "string",
        description: "Name of the Split in Batches node",
      },
      batchSize: {
        type: "number",
        description: "Number of items per batch",
      },
      reset: {
        type: "boolean",
        description: "Reset batch counter on each run (default: false)",
        default: false,
      },
    },
    required: ["nodeName", "batchSize"],
  },
}

/**
 * PHASE 4: Advanced UI Features
 */
export const createWorkflowVisualizationFunction = {
  name: "create_workflow_visualization",
  description: "Generate a Mermaid diagram visualization of the workflow",
  parameters: {
    type: "object",
    properties: {
      format: {
        type: "string",
        enum: ["mermaid", "svg", "png"],
        description: "Output format (default: 'mermaid')",
        default: "mermaid",
      },
      includeDetails: {
        type: "boolean",
        description: "Include node details in diagram (default: true)",
        default: true,
      },
    },
    required: [],
  },
}

export const groupNodesFunction = {
  name: "group_nodes",
  description: "Group multiple nodes together visually",
  parameters: {
    type: "object",
    properties: {
      nodeNames: {
        type: "array",
        description: "Array of node names to group",
        items: { type: "string" },
      },
      groupName: {
        type: "string",
        description: "Name for the group",
      },
    },
    required: ["nodeNames", "groupName"],
  },
}

export const setNodeColorFunction = {
  name: "set_node_color",
  description: "Set custom color for a node (visual organization)",
  parameters: {
    type: "object",
    properties: {
      nodeName: {
        type: "string",
        description: "Name of the node",
      },
      color: {
        type: "string",
        description: "Color in hex format (e.g., '#FF5733')",
      },
    },
    required: ["nodeName", "color"],
  },
}

/**
 * PHASE 4: AI Agentic Workflow Integration
 */
export const createChainedAIWorkflowFunction = {
  name: "create_chained_ai_workflow",
  description: "Create a chained AI workflow with multiple AI models in sequence",
  parameters: {
    type: "object",
    properties: {
      steps: {
        type: "array",
        description: "Array of AI processing steps",
        items: {
          type: "object",
          properties: {
            model: { type: "string" },
            task: { type: "string" },
            nodeName: { type: "string" },
          },
          required: ["model", "task"],
        },
      },
      workflowName: {
        type: "string",
        description: "Name for the workflow",
      },
    },
    required: ["steps"],
  },
}

export const createSingleAgentWorkflowFunction = {
  name: "create_single_agent_workflow",
  description: "Create a single agent workflow with tools and memory",
  parameters: {
    type: "object",
    properties: {
      agent: {
        type: "object",
        properties: {
          type: { type: "string", enum: ["tools", "conversational"] },
          model: { type: "string" },
          memory: { type: "string", enum: ["window_buffer", "conversation_summary", "none"] },
          tools: { type: "array", items: { type: "string" } },
        },
        required: ["model"],
      },
      trigger: {
        type: "string",
        enum: ["webhook", "schedule", "telegram", "manual"],
        description: "Workflow trigger type",
      },
      workflowName: {
        type: "string",
        description: "Name for the workflow",
      },
    },
    required: ["agent", "trigger"],
  },
}

export const createGatekeeperWorkflowFunction = {
  name: "create_gatekeeper_workflow",
  description: "Create a multi-agent workflow with gatekeeper and specialist agents",
  parameters: {
    type: "object",
    properties: {
      gatekeeper: {
        type: "object",
        properties: {
          model: { type: "string" },
          routingLogic: { type: "string" },
        },
        required: ["model"],
      },
      specialists: {
        type: "array",
        description: "Array of specialist agents",
        items: {
          type: "object",
          properties: {
            name: { type: "string" },
            model: { type: "string" },
            tools: { type: "array", items: { type: "string" } },
            expertise: { type: "string" },
          },
          required: ["name", "model"],
        },
      },
      workflowName: {
        type: "string",
        description: "Name for the workflow",
      },
    },
    required: ["gatekeeper", "specialists"],
  },
}

export const createMultiAgentTeamFunction = {
  name: "create_multi_agent_team",
  description: "Create a multi-agent team workflow with distributed decision-making",
  parameters: {
    type: "object",
    properties: {
      agents: {
        type: "array",
        description: "Array of agents in the team",
        items: {
          type: "object",
          properties: {
            name: { type: "string" },
            role: { type: "string" },
            model: { type: "string" },
            tools: { type: "array", items: { type: "string" } },
          },
          required: ["name", "role"],
        },
      },
      communication: {
        type: "string",
        enum: ["mesh", "hierarchical", "hybrid"],
        description: "Communication pattern (default: 'mesh')",
        default: "mesh",
      },
      workflowName: {
        type: "string",
        description: "Name for the workflow",
      },
    },
    required: ["agents"],
  },
}

/**
 * Tüm function tanımlamaları
 */
export const allFunctions = [
  // PHASE 1: Basic Operations
  createNodeFunction,
  findNodeByIntentFunction,
  getNodeCredentialsFunction,
  updateNodeFunction,
  removeNodeFunction,
  addConnectionFunction,
  removeConnectionFunction,
  cloneNodeFunction,
  searchNodesFunction,
  findNodeByIntentFunction,
  getNodeCredentialsFunction,
  getCredentialDetailsFunction,
  getCredentialUsageExamplesFunction,
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
  
  // PHASE 4: LangChain & AI Agent Support
  createLangChainAgentFunction,
  addToolToAgentFunction,
  configureAgentMemoryFunction,
  connectAgentToToolFunction,
  
  // PHASE 4: Vector Store & RAG Support
  createVectorStoreConnectionFunction,
  createEmbeddingNodeFunction,
  createVectorSearchNodeFunction,
  createRAGWorkflowFunction,
  
  // PHASE 4: Workflow Execution Control
  executeWorkflowFunction,
  stopWorkflowExecutionFunction,
  getExecutionStatusFunction,
  retryFailedExecutionFunction,
  
  // PHASE 4: Credential Management
  checkNodeCredentialsFunction,
  suggestCredentialTypeFunction,
  validateCredentialConnectionFunction,
  
  // PHASE 4: Sub-workflow Management
  createSubworkflowNodeFunction,
  importSubworkflowFunction,
  getSubworkflowInfoFunction,
  
  // PHASE 4: Advanced Node Configuration
  configureNodeWebhookFunction,
  configureNodeScheduleFunction,
  configureNodeErrorHandlingFunction,
  
  // PHASE 4: Batch Processing & Looping
  createBatchProcessorFunction,
  createLoopNodeFunction,
  configureSplitInBatchesFunction,
  
  // PHASE 4: Advanced UI Features
  createWorkflowVisualizationFunction,
  groupNodesFunction,
  setNodeColorFunction,
  
  // PHASE 4: AI Agentic Workflow Integration
  createChainedAIWorkflowFunction,
  createSingleAgentWorkflowFunction,
  createGatekeeperWorkflowFunction,
  createMultiAgentTeamFunction,
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

  // Node Library Access - search_nodes, get_node_schema, find_node_by_intent, get_node_credentials, get_credential_details, get_credential_usage_examples
  if (settings.nodeLibraryAccess !== false) {
    enabledFunctions.push(
      searchNodesFunction, 
      getNodeSchemaFunction, 
      findNodeByIntentFunction, 
      getNodeCredentialsFunction,
      getCredentialDetailsFunction,
      getCredentialUsageExamplesFunction
    )
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

  // PHASE 4: LangChain & AI Agent Support
  if (settings.langchainSupport !== false) {
    enabledFunctions.push(
      createLangChainAgentFunction,
      addToolToAgentFunction,
      configureAgentMemoryFunction,
      connectAgentToToolFunction
    )
  }

  // PHASE 4: Vector Store & RAG Support
  if (settings.ragSupport !== false) {
    enabledFunctions.push(
      createVectorStoreConnectionFunction,
      createEmbeddingNodeFunction,
      createVectorSearchNodeFunction,
      createRAGWorkflowFunction
    )
  }

  // PHASE 4: Workflow Execution Control
  if (settings.executionControl !== false) {
    enabledFunctions.push(
      executeWorkflowFunction,
      stopWorkflowExecutionFunction,
      getExecutionStatusFunction,
      retryFailedExecutionFunction
    )
  }

  // PHASE 4: Credential Management
  if (settings.credentialManagement !== false) {
    enabledFunctions.push(
      checkNodeCredentialsFunction,
      suggestCredentialTypeFunction,
      validateCredentialConnectionFunction
    )
  }

  // PHASE 4: Sub-workflow Management
  if (settings.subworkflowManagement !== false) {
    enabledFunctions.push(
      createSubworkflowNodeFunction,
      importSubworkflowFunction,
      getSubworkflowInfoFunction
    )
  }

  // PHASE 4: Advanced Node Configuration
  if (settings.advancedNodeConfig !== false) {
    enabledFunctions.push(
      configureNodeWebhookFunction,
      configureNodeScheduleFunction,
      configureNodeErrorHandlingFunction
    )
  }

  // PHASE 4: Batch Processing & Looping
  if (settings.batchProcessing !== false) {
    enabledFunctions.push(
      createBatchProcessorFunction,
      createLoopNodeFunction,
      configureSplitInBatchesFunction
    )
  }

  // PHASE 4: Advanced UI Features
  if (settings.advancedUI !== false) {
    enabledFunctions.push(
      createWorkflowVisualizationFunction,
      groupNodesFunction,
      setNodeColorFunction
    )
  }

  // PHASE 4: AI Agentic Workflow Integration
  if (settings.aiAgenticWorkflows !== false) {
    enabledFunctions.push(
      createChainedAIWorkflowFunction,
      createSingleAgentWorkflowFunction,
      createGatekeeperWorkflowFunction,
      createMultiAgentTeamFunction
    )
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

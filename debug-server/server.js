/**
 * n8n Chat Debug Server
 * Real-time monitoring ve logging sistemi
 * 
 * @rationale Security-First Real-Time Monitoring
 */

const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const cors = require('cors');
const chalk = require('chalk');
const path = require('path');

// ============================================================================
// SERVER CONFIGURATION
// ============================================================================

const PORT = process.env.PORT || 3333;
const HOST = process.env.HOST || 'localhost';

// ============================================================================
// EXPRESS APP SETUP
// ============================================================================

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Middleware
app.use(cors({
  origin: '*', // Chrome extension'dan gelen isteklere izin ver
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.static(path.join(__dirname, 'public')));

// ============================================================================
// IN-MEMORY STORAGE
// ============================================================================

const sessions = new Map();
const logs = [];
const MAX_LOGS = 1000;

// Session statistics
const stats = {
  totalSessions: 0,
  activeSessions: 0,
  totalLogs: 0,
  totalErrors: 0,
  totalSuccess: 0,
  serverStartTime: Date.now()
};

// ============================================================================
// WEBSOCKET HANDLERS
// ============================================================================

const clients = new Set();

wss.on('connection', (ws, req) => {
  const clientId = `client_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  clients.add(ws);
  stats.activeSessions++;
  
  console.log(chalk.green(`✅ WebSocket client connected: ${clientId}`));
  console.log(chalk.gray(`   Active clients: ${clients.size}`));
  
  // Send welcome message
  ws.send(JSON.stringify({
    type: 'connection',
    message: 'Connected to n8n Chat Debug Server',
    clientId,
    serverStats: stats
  }));
  
  // Send existing logs to new client
  ws.send(JSON.stringify({
    type: 'history',
    logs: logs.slice(-50) // Son 50 log
  }));
  
  ws.on('close', () => {
    clients.delete(ws);
    stats.activeSessions--;
    console.log(chalk.yellow(`⚠️  WebSocket client disconnected: ${clientId}`));
    console.log(chalk.gray(`   Active clients: ${clients.size}`));
  });
  
  ws.on('error', (error) => {
    console.error(chalk.red(`❌ WebSocket error for ${clientId}:`), error.message);
  });
});

// Broadcast to all connected clients
function broadcast(data) {
  const message = JSON.stringify(data);
  clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  });
}

// ============================================================================
// HTTP ENDPOINTS
// ============================================================================

// Health check
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    uptime: Math.floor((Date.now() - stats.serverStartTime) / 1000),
    stats
  });
});

// Get stats
app.get('/api/stats', (req, res) => {
  res.json({
    stats,
    sessions: Array.from(sessions.entries()).map(([id, session]) => ({
      id,
      ...session
    })),
    recentLogs: logs.slice(-20)
  });
});

// Get all logs
app.get('/api/logs', (req, res) => {
  const { limit = 100, type, sessionId } = req.query;
  
  let filteredLogs = logs;
  
  if (type) {
    filteredLogs = filteredLogs.filter(log => log.type === type);
  }
  
  if (sessionId) {
    filteredLogs = filteredLogs.filter(log => log.sessionId === sessionId);
  }
  
  res.json({
    total: filteredLogs.length,
    logs: filteredLogs.slice(-parseInt(limit))
  });
});

// Clear logs
app.post('/api/logs/clear', (req, res) => {
  const previousCount = logs.length;
  logs.length = 0;
  
  console.log(chalk.yellow(`🗑️  Cleared ${previousCount} logs`));
  
  broadcast({
    type: 'logs_cleared',
    timestamp: Date.now()
  });
  
  res.json({
    success: true,
    cleared: previousCount
  });
});

// Log endpoint (ana endpoint - extension buraya log gönderir)
app.post('/api/log', (req, res) => {
  try {
    const logEntry = req.body;
    
    // Validate log entry
    if (!logEntry || !logEntry.type) {
      return res.status(400).json({ error: 'Invalid log entry' });
    }
    
    // Add server timestamp
    logEntry.serverTimestamp = Date.now();
    
    // Add to logs
    logs.push(logEntry);
    if (logs.length > MAX_LOGS) {
      logs.shift(); // Remove oldest
    }
    
    // Update stats
    stats.totalLogs++;
    if (logEntry.type === 'ERROR') stats.totalErrors++;
    if (logEntry.status === 'success') stats.totalSuccess++;
    
    // Update session info
    if (logEntry.sessionId) {
      if (!sessions.has(logEntry.sessionId)) {
        sessions.set(logEntry.sessionId, {
          id: logEntry.sessionId,
          startTime: Date.now(),
          logCount: 0,
          lastActivity: Date.now()
        });
        stats.totalSessions++;
      }
      
      const session = sessions.get(logEntry.sessionId);
      session.logCount++;
      session.lastActivity = Date.now();
    }
    
    // Broadcast to all WebSocket clients
    broadcast({
      type: 'new_log',
      log: logEntry
    });
    
    // Console output with color coding
    logToConsole(logEntry);
    
    res.json({ success: true });
  } catch (error) {
    console.error(chalk.red('❌ Error processing log:'), error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// ============================================================================
// CONSOLE LOGGING WITH COLORS
// ============================================================================

function logToConsole(entry) {
  const timestamp = new Date(entry.timestamp || Date.now()).toLocaleTimeString();
  const sessionId = entry.sessionId || 'unknown';
  
  switch (entry.type) {
    case 'USER_INPUT':
      console.log('\n' + chalk.cyan('═'.repeat(80)));
      console.log(chalk.cyan.bold('🎯 USER INPUT') + chalk.gray(` [${sessionId}] ${timestamp}`));
      console.log(chalk.white('Prompt:'), chalk.yellow(entry.prompt?.substring(0, 100) + (entry.prompt?.length > 100 ? '...' : '')));
      if (entry.metadata) {
        console.log(chalk.gray('Metadata:'), entry.metadata);
      }
      break;
      
    case 'FUNCTION_CALL':
      console.log(chalk.magenta('⚙️  FUNCTION CALL:'), chalk.white.bold(entry.functionName));
      console.log(chalk.gray('   Operation ID:'), entry.id);
      console.log(chalk.gray('   Arguments:'), entry.arguments);
      break;
      
    case 'RESPONSE':
      const statusIcon = entry.status === 'success' ? '✅' : entry.status === 'error' ? '❌' : '⚠️';
      const statusColor = entry.status === 'success' ? chalk.green : entry.status === 'error' ? chalk.red : chalk.yellow;
      
      console.log(statusColor(`${statusIcon} RESPONSE [${entry.status?.toUpperCase()}]`));
      console.log(chalk.gray('   Operation ID:'), entry.id);
      console.log(chalk.gray('   Duration:'), chalk.green.bold(entry.duration + 'ms'));
      
      if (typeof entry.response === 'string' && entry.response.length > 200) {
        console.log(chalk.gray('   Response:'), entry.response.substring(0, 200) + '...');
      } else {
        console.log(chalk.gray('   Response:'), entry.response);
      }
      
      // Timeline bar
      const bars = Math.min(Math.round(entry.duration / 50), 50);
      const barString = '█'.repeat(bars);
      console.log(chalk.gray('   Time:'), chalk.green(barString), chalk.gray(entry.duration + 'ms'));
      break;
      
    case 'ERROR':
      console.log('\n' + chalk.red('═'.repeat(80)));
      console.log(chalk.red.bold('❌ ERROR') + chalk.gray(` [${sessionId}] ${timestamp}`));
      console.log(chalk.red('   Error:'), entry.error?.message || 'Unknown error');
      if (entry.context) {
        console.log(chalk.gray('   Context:'), entry.context);
      }
      if (entry.error?.stack) {
        console.log(chalk.gray('   Stack:'));
        console.log(chalk.red(entry.error.stack.split('\n').slice(0, 3).join('\n')));
      }
      break;
      
    case 'SESSION_SUMMARY':
      console.log('\n' + chalk.blue('═'.repeat(80)));
      console.log(chalk.blue.bold('📊 SESSION SUMMARY') + chalk.gray(` [${sessionId}]`));
      console.log(chalk.gray('   Total Requests:'), chalk.white.bold(entry.totalRequests || 0));
      console.log(chalk.gray('   Successful:'), chalk.green(entry.successfulRequests || 0));
      console.log(chalk.gray('   Failed:'), chalk.red(entry.failedRequests || 0));
      console.log(chalk.gray('   Success Rate:'), chalk.green.bold((entry.successRate || 0) + '%'));
      console.log(chalk.gray('   Function Calls:'), chalk.magenta(entry.totalFunctionCalls || 0));
      console.log(chalk.gray('   Avg Response:'), chalk.green(Math.round(entry.averageResponseTime || 0) + 'ms'));
      console.log(chalk.blue('═'.repeat(80)) + '\n');
      break;
      
    default:
      console.log(chalk.gray(`[${entry.type}]`), entry);
  }
}

// ============================================================================
// SERVER START
// ============================================================================

server.listen(PORT, HOST, () => {
  console.log('\n' + chalk.green('═'.repeat(80)));
  console.log(chalk.green.bold('🐛 n8n CHAT DEBUG SERVER STARTED'));
  console.log(chalk.green('═'.repeat(80)));
  console.log(chalk.white('Server URL:       ') + chalk.cyan.bold(`http://${HOST}:${PORT}`));
  console.log(chalk.white('Dashboard:        ') + chalk.cyan.bold(`http://${HOST}:${PORT}/dashboard`));
  console.log(chalk.white('WebSocket:        ') + chalk.cyan.bold(`ws://${HOST}:${PORT}`));
  console.log(chalk.white('API Endpoint:     ') + chalk.cyan.bold(`http://${HOST}:${PORT}/api/log`));
  console.log(chalk.green('═'.repeat(80)));
  console.log(chalk.yellow('⏳ Waiting for connections...'));
  console.log(chalk.gray('   Press Ctrl+C to stop\n'));
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log(chalk.yellow('\n⚠️  SIGTERM received, shutting down gracefully...'));
  server.close(() => {
    console.log(chalk.green('✅ Server closed'));
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log(chalk.yellow('\n⚠️  SIGINT received, shutting down gracefully...'));
  server.close(() => {
    console.log(chalk.green('✅ Server closed'));
    process.exit(0);
  });
});

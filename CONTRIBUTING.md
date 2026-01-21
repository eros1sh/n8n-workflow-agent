# Contributing to n8n Agentic Chat

Thank you for your interest in contributing to n8n Agentic Chat! This document provides guidelines and instructions for contributing.

---

## 🤝 Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct:

- **Be respectful** and inclusive
- **Be patient** with others
- **Be open** to constructive criticism
- **Focus on** what is best for the community
- **Show empathy** towards other community members

---

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ (for debug server development)
- Google Chrome or Chromium-based browser
- n8n instance (cloud or self-hosted) for testing
- API key from a supported AI provider (for testing)

### Development Setup

1. **Fork the repository** on GitHub

2. **Clone your fork:**
   ```bash
   git clone https://github.com/eros1sh/n8n-workflow-agent.git
   cd n8n-workflow-agent
   ```

3. **Create a new branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Load the extension in Chrome:**
   - Navigate to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked"
   - Select the `extension` folder

5. **Make your changes**

6. **Test thoroughly** (see Testing section below)

7. **Commit your changes:**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

8. **Push to your fork:**
   ```bash
   git push origin feature/your-feature-name
   ```

9. **Create a Pull Request** on GitHub

---

## 📝 Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, missing semicolons, etc.)
- **refactor**: Code refactoring
- **perf**: Performance improvements
- **test**: Adding or updating tests
- **chore**: Maintenance tasks

### Examples

```bash
feat(chat): add smart timestamp grouping

fix(injected): prevent ghost connections after node deletion

docs(readme): update installation instructions

refactor(content): improve streaming logic for better message persistence
```

---

## 🧪 Testing

### Manual Testing Checklist

Before submitting a PR, ensure you've tested:

- [ ] **Extension loads** without errors in Chrome
- [ ] **Chat UI renders** correctly on n8n workflow pages
- [ ] **Message streaming** works without messages disappearing
- [ ] **Function calls** execute successfully (create_node, add_connection, etc.)
- [ ] **Multi-step agentic execution** completes all steps automatically
- [ ] **Node connections** are created correctly and verified
- [ ] **Language consistency** is maintained (AI responds in user's language)
- [ ] **Error handling** displays user-friendly messages
- [ ] **Settings persist** after browser reload
- [ ] **API keys** are stored securely and retrieved correctly

### Testing Different Scenarios

1. **Create Workflow Test:**
   ```
   Create a workflow: Supabase → OpenAI → Telegram
   ```
   Expected: All nodes created with correct types and fully connected

2. **Modify Workflow Test:**
   ```
   Replace all HTTP Request nodes with dedicated service nodes
   ```
   Expected: Nodes replaced, connections maintained

3. **Multi-Step Execution Test:**
   ```
   Analyze this workflow and fix any issues you find
   ```
   Expected: AI analyzes, identifies issues, applies fixes, verifies

4. **Language Test (Turkish):**
   ```
   Workflow bilgilerini göster
   ```
   Expected: AI responds in Turkish and stays in Turkish

5. **Language Test (English):**
   ```
   Show workflow information
   ```
   Expected: AI responds in English and stays in English

---

## 📂 Project Structure

```
extension/
├── content/
│   ├── content.js         # Chat UI, streaming, conversation history
│   ├── injected.js        # n8n canvas manipulation, node CRUD
│   └── functions/         # AI function implementations
│       ├── index.js       # Function registry
│       └── executor.js    # Function executor
├── background/
│   ├── background.js      # Service worker entry point
│   └── api-handlers.js    # Multi-provider AI streaming
├── popup/
│   ├── popup.html         # Extension popup UI
│   ├── popup.js           # Settings logic
│   └── popup.css          # Popup styles
├── lib/
│   └── storage.js         # Chrome storage utilities
├── debug-server/          # Optional debug WebSocket server
│   ├── server.js
│   └── package.json
├── _locales/              # Internationalization
│   └── tr/
│       └── messages.json
├── manifest.json          # Chrome extension manifest
└── icons/                 # Extension icons
```

---

## 🎯 Areas for Contribution

### High Priority

1. **Bug Fixes**
   - Message persistence issues
   - Race conditions in node creation
   - Vue store access fragility

2. **Performance Improvements**
   - Token usage optimization
   - Context window management
   - Lazy loading strategies

3. **UI/UX Enhancements**
   - More animations and transitions
   - Better error messages
   - Accessibility improvements

4. **Testing**
   - Unit tests for core functions
   - Integration tests for AI workflows
   - E2E tests for full scenarios

### Medium Priority

1. **New Features**
   - Undo/Redo support
   - Workflow templates library
   - Visual node highlighting during AI operations
   - Export/import chat history

2. **Documentation**
   - Video tutorials
   - More example prompts
   - Architecture deep-dives
   - Troubleshooting guides

3. **Internationalization**
   - Add more languages
   - Improve translations

### Low Priority

1. **Code Quality**
   - Refactor large files
   - Add JSDoc comments
   - Improve error handling

2. **Tooling**
   - Add ESLint configuration
   - Add Prettier configuration
   - CI/CD pipeline

---

## 🛠️ Development Guidelines

### Code Style

- **Indentation**: 2 spaces
- **Quotes**: Single quotes for strings (except JSON)
- **Semicolons**: Optional (but be consistent within a file)
- **Line length**: Max 120 characters
- **Comments**: Use `//` for single-line, `/* */` for multi-line

### JavaScript Best Practices

- Use `const` by default, `let` when reassignment is needed, avoid `var`
- Use arrow functions `() => {}` for callbacks
- Use template literals `` `${variable}` `` for string interpolation
- Use destructuring `{ prop } = object` when appropriate
- Use async/await instead of raw promises when possible

### Naming Conventions

- **Functions**: `camelCase` (e.g., `addMessage`, `removeThinking`)
- **Variables**: `camelCase` (e.g., `fullResponse`, `conversationHistory`)
- **Constants**: `UPPER_SNAKE_CASE` (e.g., `MAX_TOKENS`, `API_URL`)
- **Classes**: `PascalCase` (e.g., `DebugAPI`, `Logger`)
- **Files**: `kebab-case` (e.g., `api-handlers.js`, `debug-server.js`)

### Chrome Extension Specifics

- **Always check** if `chrome.runtime.id` exists before making runtime calls
- **Use `chrome.storage.local`** for persistent data, not `localStorage`
- **Handle disconnects** gracefully (ports can disconnect at any time)
- **Test on** Chrome, Edge, and Brave

### Security Guidelines

- **Never commit** real API keys or credentials
- **Always mask** sensitive data before sending to AI
- **Use Chrome's encrypted storage** for API keys
- **Validate** all user inputs
- **Sanitize** all outputs (especially when rendering HTML)

---

## 🐛 Bug Reports

When filing a bug report, please include:

1. **Description**: Clear description of the issue
2. **Steps to Reproduce**: Numbered steps to reproduce the behavior
3. **Expected Behavior**: What you expected to happen
4. **Actual Behavior**: What actually happened
5. **Screenshots**: If applicable
6. **Environment**:
   - Browser: (e.g., Chrome 131)
   - Extension Version: (e.g., 1.4.2 beta)
   - n8n Version: (e.g., n8n Cloud / self-hosted v1.x)
   - AI Provider: (e.g., OpenAI GPT-4)
7. **Console Errors**: Any errors from browser console
8. **Additional Context**: Any other relevant information

---

## 💡 Feature Requests

When proposing a new feature:

1. **Use Case**: Explain why this feature is needed
2. **Proposed Solution**: Describe how you envision it working
3. **Alternatives**: Any alternative solutions you've considered
4. **Additional Context**: Mockups, examples, or references

---

## 📞 Questions?

If you have questions about contributing:

- **Email**: root@eros.sh
- **Telegram**: @eros_sh
- **GitHub Discussions**: [Start a discussion](https://github.com/eros1sh/n8n-workflow-agent/discussions)

---

## 🙏 Thank You!

Your contributions make this project better for everyone. We appreciate your time and effort!

---

<div align="center">
  <strong>Happy Contributing! 🚀</strong>
</div>

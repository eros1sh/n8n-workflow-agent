# 🚀 Changelog - Version 1.6.0

**Release Date:** 2026-01-22  
**Major Update:** Comprehensive Node & Credential Intelligence Integration

---

## ✨ New Features

### 🧠 Semantic Node Selection (AI-Powered)

**AI can now automatically find the correct node from user intent!**

- ✅ **`find_node_by_intent()`** - Find nodes from user text
  - "send telegram message" → `n8n-nodes-base.telegram`
  - "connect to postgres" → `n8n-nodes-base.postgres`
  - "use openai" → `@n8n/n8n-nodes-langchain.openAi`
  - Semantic keyword matching
  - Official and community node support
  - Category filtering support

**Usage Example:**
```
User: "Send telegram message"
AI: find_node_by_intent("telegram") → n8n-nodes-base.telegram
```

### 🔐 Comprehensive Credential Intelligence

**AI now knows how to use credentials!**

- ✅ **`get_credential_details()`** - Credential details
  - Fields (apiKey, accessToken, etc.)
  - Usage examples (in `={{$credentials.apiKey}}` format)
  - Authenticate config (headers, query params)
  - Test config

- ✅ **`get_credential_usage_examples()`** - Usage examples
  - How to use in HTTP Request node
  - Header, query parameter, body examples
  - Examples in `={{$credentials.fieldName}}` format

**Usage Example:**
```
AI: get_credential_details("telegramApi")
Returns:
- Fields: [apiKey, ...]
- Usage Examples: {"headers.Authorization": "={{$credentials.apiKey}}"}
- Authenticate: {type: "generic", properties: {...}}
```

### 📊 Complete Node & Credential Database

**1000+ nodes and 411 credential types integrated!**

- ✅ **NODE_CATEGORIES** - 1000 nodes categorized
  - Official nodes (n8n-nodes-base): 788 nodes
  - Community nodes: 212 nodes
  - Categories: io, logic, flow, transform, code, ai, communication, file, commerce, system

- ✅ **NODE_CREDENTIALS** - 344 credential mappings
  - Which nodes use each credential type
  - Node → Credential mapping
  - Credential → Node mapping

- ✅ **CREDENTIAL_DETAILS** - 411 credential details
  - Fields for each credential
  - Usage examples (in `={{$credentials.apiKey}}` format)
  - Authenticate configuration
  - Test configuration

### 🎯 Enhanced Node Creation with Credentials

**Credentials can now be automatically added when creating nodes!**

- ✅ **`create_node()`** - Credential support added
  - Assign credentials using `credentials` parameter
  - Format: `{ credentialTypeName: { id: 'credentialId' } or { name: 'credentialName' } }`
  - Automatic credential validation

**Usage Example:**
```javascript
create_node({
  type: "n8n-nodes-base.telegram",
  credentials: {
    telegramApi: { name: "My Telegram Bot" }
  }
})
```

### 🔍 Enhanced Node Discovery

**AI now finds nodes more intelligently!**

- ✅ **`get_node_credentials()`** - List credentials required by a node
- ✅ **`find_node_by_intent()`** - Semantic node search
- ✅ **`get_credential_details()`** - Credential usage information
- ✅ **`get_credential_usage_examples()`** - Credential usage examples

---

## 🔧 Technical Improvements

### Data Integration

- ✅ **`nodes-scrapes/`** - Node and credential data parsed
  - `nodes.json` → Official nodes (788 nodes)
  - `community-node-types.json` → Community nodes (212 nodes)
  - `credentials.json` → Credential details (411 credentials)

- ✅ **Auto-generated Code** - All mappings automatically generated
  - `NODE_CATEGORIES` - 1000 node mappings
  - `NODE_CREDENTIALS` - 344 credential mappings
  - `CREDENTIAL_DETAILS` - 411 credential details

### Function Definitions

- ✅ 4 new AI functions added:
  - `find_node_by_intent` - Semantic node search
  - `get_node_credentials` - Node credential requirements
  - `get_credential_details` - Credential details
  - `get_credential_usage_examples` - Credential usage examples

### Implementation

- ✅ `content/injected.js` - Node and credential database added
- ✅ `content/functions/index.js` - New function definitions
- ✅ `content/functions/executor.js` - New function implementations
- ✅ `content/content.js` - System prompt updates

### System Prompt Enhancements

- ✅ Credential management guide added
- ✅ Node selection best practices added
- ✅ Usage examples added

---

## 📊 Statistics

- **Total Node Count:** 1000
  - Official nodes: 788
  - Community nodes: 212
- **Credential Mappings:** 344
- **Credential Details:** 411
- **New Function Count:** 4
- **Code Lines:** ~3000+ new lines (database integration)

---

## 🎯 Usage Scenarios

### Scenario 1: Intent-Based Node Creation
```
User: "Send telegram message"
AI: 
1. find_node_by_intent("telegram") → n8n-nodes-base.telegram
2. get_node_credentials("n8n-nodes-base.telegram") → ["telegramApi"]
3. get_credential_details("telegramApi") → Usage examples
4. create_node({ type: "n8n-nodes-base.telegram", credentials: {...} })
```

### Scenario 2: Credential-Aware Node Configuration
```
User: "Fetch data with ActiveCampaign API"
AI:
1. find_node_by_intent("activecampaign") → n8n-nodes-base.activeCampaign
2. get_credential_details("activeCampaignApi") → 
   Usage: {"headers.Api-Token": "={{$credentials.apiKey}}"}
3. create_node with proper credential configuration
```

### Scenario 3: Community Node Discovery
```
User: "Accept payment with Razorpay"
AI:
1. find_node_by_intent("razorpay") → @razorpay/n8n-nodes-preview-razorpay.razorpay
2. get_node_credentials(...) → ["razorpayApi"]
3. create_node with community node
```

---

## 🔄 Migration Notes

### Automatic Migration
- ✅ All new features are automatically enabled
- ✅ Existing workflows are not affected
- ✅ Backward compatible

### Breaking Changes
❌ **None** - All existing features are backward compatible.

### Deprecated Features
❌ **None** - No features have been deprecated.

---

## 🐛 Known Issues

1. **Credential Assignment**: Credentials are assigned after node creation. In some cases, you may need to manually assign credentials from the n8n UI.

2. **Community Nodes**: Credential mappings for community nodes may not be complete. In such cases, AI will inform you.

3. **Large Database**: 1000+ nodes and 411 credential details increased file size (~180KB). Performance was not affected.

---

## 📚 Documentation

### New Functions

**find_node_by_intent(intent, category?, preferOfficial?)**
- Find nodes from user intent
- Semantic keyword matching
- Category filtering
- Official/community preference

**get_node_credentials(nodeType)**
- List credential types required by a node
- Returns array: `["telegramApi", ...]`

**get_credential_details(credentialType)**
- Full credential details
- Fields, usage examples, authenticate config

**get_credential_usage_examples(credentialType)**
- Credential usage examples
- In `={{$credentials.apiKey}}` format

---

## 🙏 Acknowledgments

Thank you to everyone who contributed to this release!

**Special Thanks:**
- n8n team - For building an amazing platform
- n8n community - For node and credential data

---

## 📞 Support

Have questions?
- **GitHub Issues**: [Issues](https://github.com/eros1sh/n8n-workflow-agent/issues)
- **Email**: root@eros.sh
- **Telegram**: @eros_sh

---

**Version:** 1.6.0  
**Release Date:** 2026-01-22  
**Status:** ✅ Production Ready

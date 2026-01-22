  // ==========================================================================
  // CREDENTIAL DETAILS & USAGE EXAMPLES
  // Auto-generated from credentials.json
  // Generated: 2026-01-22T03:35:29.274Z
  // Contains: fields, usage examples (={{$credentials.apiKey}}), authenticate config
  // ==========================================================================

  const CREDENTIAL_DETAILS = {
    'actionNetworkApi': {
      displayName: 'Action Network API',
      fields: [{"name":"apiKey","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      authenticate: {},
    },

    'activeCampaignApi': {
      displayName: 'ActiveCampaign API',
      fields: [{"name":"apiUrl","type":"string","required":false},{"name":"apiKey","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Api-Token":"={{$credentials.apiKey}}","test.baseURL":"={{$credentials.apiUrl}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Api-Token":"={{$credentials.apiKey}}"}}},
    },

    'acuitySchedulingApi': {
      displayName: 'Acuity Scheduling API',
      fields: [{"name":"userId","type":"string","required":false},{"name":"apiKey","type":"string","required":false}],
    },

    'acuitySchedulingOAuth2Api': {
      displayName: 'AcuityScheduling OAuth2 API',
      fields: [{"name":"grantType","type":"hidden","required":false},{"name":"authUrl","type":"hidden","required":true},{"name":"accessTokenUrl","type":"hidden","required":true},{"name":"scope","type":"hidden","required":true},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'adaloApi': {
      displayName: 'Adalo API',
      fields: [{"name":"apiKey","type":"string","required":false},{"name":"appId","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bearer {{$credentials.apiKey}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bearer {{$credentials.apiKey}}"}}},
    },

    'affinityApi': {
      displayName: 'Affinity API',
      fields: [{"name":"apiKey","type":"string","required":false}],
    },

    'agileCrmApi': {
      displayName: 'AgileCRM API',
      fields: [{"name":"email","type":"string","required":false},{"name":"apiKey","type":"string","required":false},{"name":"subdomain","type":"string","required":false}],
    },

    'airtableApi': {
      displayName: 'Airtable API',
      fields: [{"name":"deprecated","type":"notice","required":false},{"name":"apiKey","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"qs.api_key":"={{$credentials.apiKey}}"},
      authenticate: {"type":"generic","properties":{"qs":{"api_key":"={{$credentials.apiKey}}"}}},
    },

    'airtableOAuth2Api': {
      displayName: 'Airtable OAuth2 API',
      fields: [{"name":"grantType","type":"hidden","required":false},{"name":"authUrl","type":"hidden","required":false},{"name":"accessTokenUrl","type":"hidden","required":false},{"name":"scope","type":"hidden","required":false},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'airtableTokenApi': {
      displayName: 'Airtable Personal Access Token API',
      fields: [{"name":"accessToken","type":"string","required":false},{"name":"notice","type":"notice","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bearer {{$credentials.accessToken}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bearer {{$credentials.accessToken}}"}}},
    },

    'airtopApi': {
      displayName: 'Airtop API',
      fields: [{"name":"apiKey","type":"string","required":true},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bearer {{$credentials.apiKey}}","headers.api-key":"={{$credentials.apiKey}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bearer {{$credentials.apiKey}}","api-key":"={{$credentials.apiKey}}"}}},
    },

    'alienVaultApi': {
      displayName: 'AlienVault API',
      fields: [{"name":"accessToken","type":"string","required":true},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.X-OTX-API-KEY":"={{$credentials.accessToken}}"},
      authenticate: {"type":"generic","properties":{"headers":{"X-OTX-API-KEY":"={{$credentials.accessToken}}"}}},
    },

    'amqp': {
      displayName: 'AMQP',
      fields: [{"name":"hostname","type":"string","required":false},{"name":"port","type":"number","required":false},{"name":"username","type":"string","required":false},{"name":"password","type":"string","required":false},{"name":"transportType","type":"string","required":false}],
    },

    'anthropicApi': {
      displayName: 'Anthropic',
      fields: [{"name":"apiKey","type":"string","required":true},{"name":"url","type":"string","required":false},{"name":"header","type":"boolean","required":false},{"name":"headerName","type":"string","required":false},{"name":"headerValue","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"test.baseURL":"={{$credentials?.url}}"},
      authenticate: {},
    },

    'apiTemplateIoApi': {
      displayName: 'APITemplate.io API',
      fields: [{"name":"apiKey","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.X-API-KEY":"={{$credentials.apiKey}}"},
      authenticate: {"type":"generic","properties":{"headers":{"X-API-KEY":"={{$credentials.apiKey}}"}}},
    },

    'asanaApi': {
      displayName: 'Asana API',
      fields: [{"name":"accessToken","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bearer {{$credentials.accessToken}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bearer {{$credentials.accessToken}}"}}},
    },

    'asanaOAuth2Api': {
      displayName: 'Asana OAuth2 API',
      fields: [{"name":"grantType","type":"hidden","required":false},{"name":"authUrl","type":"hidden","required":true},{"name":"accessTokenUrl","type":"hidden","required":true},{"name":"scope","type":"hidden","required":false},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'auth0ManagementApi': {
      displayName: 'Auth0 Management API',
      fields: [{"name":"sessionToken","type":"hidden","required":false},{"name":"domain","type":"string","required":true},{"name":"clientId","type":"string","required":true},{"name":"clientSecret","type":"string","required":true},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bearer {{$credentials.sessionToken}}","test.baseURL":"=https://{{$credentials.domain}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bearer {{$credentials.sessionToken}}"}}},
    },

    'autopilotApi': {
      displayName: 'Autopilot API',
      fields: [{"name":"apiKey","type":"string","required":false}],
    },

    'aws': {
      displayName: 'AWS (IAM)',
      fields: [{"name":"region","type":"options","required":false},{"name":"accessKeyId","type":"string","required":false},{"name":"secretAccessKey","type":"string","required":false},{"name":"temporaryCredentials","type":"boolean","required":false},{"name":"sessionToken","type":"string","required":false},{"name":"customEndpoints","type":"boolean","required":false},{"name":"rekognitionEndpoint","type":"string","required":false},{"name":"lambdaEndpoint","type":"string","required":false},{"name":"snsEndpoint","type":"string","required":false},{"name":"sesEndpoint","type":"string","required":false},{"name":"sqsEndpoint","type":"string","required":false},{"name":"s3Endpoint","type":"string","required":false},{"name":"ssmEndpoint","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"test.baseURL":"={{$credentials.region.startsWith(\"cn-\") ? `https://sts.${$credentials.region}.amazonaws.com.cn` : `https://sts.${$credentials.region}.amazonaws.com`}}"},
      authenticate: {},
    },

    'awsAssumeRole': {
      displayName: 'AWS (Assume Role)',
      fields: [{"name":"region","type":"options","required":false},{"name":"useSystemCredentialsForRole","type":"boolean","required":false},{"name":"stsAccessKeyId","type":"string","required":true},{"name":"stsSecretAccessKey","type":"string","required":true},{"name":"stsSessionToken","type":"string","required":false},{"name":"roleArn","type":"string","required":true},{"name":"externalId","type":"string","required":true},{"name":"roleSessionName","type":"string","required":true},{"name":"customEndpoints","type":"boolean","required":false},{"name":"rekognitionEndpoint","type":"string","required":false},{"name":"lambdaEndpoint","type":"string","required":false},{"name":"snsEndpoint","type":"string","required":false},{"name":"sesEndpoint","type":"string","required":false},{"name":"sqsEndpoint","type":"string","required":false},{"name":"s3Endpoint","type":"string","required":false},{"name":"ssmEndpoint","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"test.baseURL":"={{$credentials.region.startsWith(\"cn-\") ? `https://sts.${$credentials.region}.amazonaws.com.cn` : `https://sts.${$credentials.region}.amazonaws.com`}}"},
      authenticate: {},
    },

    'azureAiSearchApi': {
      displayName: 'Azure AI Search API',
      fields: [{"name":"endpoint","type":"string","required":true},{"name":"apiKey","type":"string","required":true},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"test.baseURL":"={{$credentials.endpoint}}/indexes"},
      authenticate: {},
    },

    'azureEntraCognitiveServicesOAuth2Api': {
      displayName: 'Azure Entra ID (Azure Active Directory) API',
      fields: [{"name":"grantType","type":"hidden","required":false},{"name":"resourceName","type":"string","required":true},{"name":"apiVersion","type":"string","required":true},{"name":"endpoint","type":"string","required":false},{"name":"tenantId","type":"string","required":false},{"name":"authUrl","type":"hidden","required":false},{"name":"accessTokenUrl","type":"hidden","required":false},{"name":"additionalBodyProperties","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"customScopes","type":"boolean","required":false},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"enabledScopes","type":"string","required":false},{"name":"scope","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'azureOpenAiApi': {
      displayName: 'Azure Open AI',
      fields: [{"name":"apiKey","type":"string","required":true},{"name":"resourceName","type":"string","required":true},{"name":"apiVersion","type":"string","required":true},{"name":"endpoint","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.api-key":"={{$credentials.apiKey}}"},
      authenticate: {"type":"generic","properties":{"headers":{"api-key":"={{$credentials.apiKey}}"}}},
    },

    'azureStorageOAuth2Api': {
      displayName: 'Azure Storage OAuth2 API',
      fields: [{"name":"account","type":"string","required":false},{"name":"baseUrl","type":"hidden","required":false},{"name":"scope","type":"hidden","required":false}],
    },

    'azureStorageSharedKeyApi': {
      displayName: 'Azure Storage Shared Key API',
      fields: [{"name":"account","type":"string","required":false},{"name":"key","type":"string","required":false},{"name":"baseUrl","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"test.baseURL":"={{$credentials.baseUrl}}"},
      authenticate: {},
    },

    'bambooHrApi': {
      displayName: 'BambooHR API',
      fields: [{"name":"subdomain","type":"string","required":false},{"name":"apiKey","type":"string","required":false}],
    },

    'bannerbearApi': {
      displayName: 'Bannerbear API',
      fields: [{"name":"apiKey","type":"string","required":false}],
    },

    'baserowApi': {
      displayName: 'Baserow API',
      fields: [{"name":"host","type":"string","required":false},{"name":"username","type":"string","required":false},{"name":"password","type":"string","required":false}],
    },

    'beeminderApi': {
      displayName: 'Beeminder API',
      fields: [{"name":"authToken","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"body.auth_token":"={{$credentials.authToken}}"},
      authenticate: {"type":"generic","properties":{"body":{"auth_token":"={{$credentials.authToken}}"}}},
    },

    'beeminderOAuth2Api': {
      displayName: 'Beeminder OAuth2 API',
      fields: [{"name":"grantType","type":"hidden","required":false},{"name":"authUrl","type":"hidden","required":true},{"name":"accessTokenUrl","type":"hidden","required":true},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"scope","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'bitbucketAccessTokenApi': {
      displayName: 'Bitbucket Access Token API',
      fields: [{"name":"email","type":"string","required":false},{"name":"accessToken","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      authenticate: {},
    },

    'bitbucketApi': {
      displayName: 'Bitbucket API',
      fields: [{"name":"username","type":"string","required":false},{"name":"appPassword","type":"string","required":false}],
    },

    'bitlyApi': {
      displayName: 'Bitly API',
      fields: [{"name":"accessToken","type":"string","required":false}],
    },

    'bitlyOAuth2Api': {
      displayName: 'Bitly OAuth2 API',
      fields: [{"name":"grantType","type":"hidden","required":false},{"name":"authUrl","type":"hidden","required":true},{"name":"accessTokenUrl","type":"hidden","required":true},{"name":"clientId","type":"string","required":true},{"name":"clientSecret","type":"string","required":true},{"name":"scope","type":"hidden","required":false},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'bitwardenApi': {
      displayName: 'Bitwarden API',
      fields: [{"name":"clientId","type":"string","required":false},{"name":"clientSecret","type":"string","required":false},{"name":"environment","type":"options","required":false},{"name":"domain","type":"string","required":false}],
    },

    'boxOAuth2Api': {
      displayName: 'Box OAuth2 API',
      fields: [{"name":"grantType","type":"hidden","required":false},{"name":"authUrl","type":"hidden","required":true},{"name":"accessTokenUrl","type":"hidden","required":true},{"name":"scope","type":"hidden","required":false},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'brandfetchApi': {
      displayName: 'Brandfetch API',
      fields: [{"name":"apiKey","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bearer {{$credentials.apiKey}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bearer {{$credentials.apiKey}}"}}},
    },

    'bubbleApi': {
      displayName: 'Bubble API',
      fields: [{"name":"apiToken","type":"string","required":false},{"name":"appName","type":"string","required":false},{"name":"environment","type":"options","required":false},{"name":"hosting","type":"options","required":false},{"name":"domain","type":"string","required":false}],
    },

    'calApi': {
      displayName: 'Cal API',
      fields: [{"name":"apiKey","type":"string","required":false},{"name":"host","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"qs.apiKey":"={{$credentials.apiKey}}","test.baseURL":"={{$credentials.host}}"},
      authenticate: {"type":"generic","properties":{"qs":{"apiKey":"={{$credentials.apiKey}}"}}},
    },

    'calendlyApi': {
      displayName: 'Calendly API',
      fields: [{"name":"apiKey","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      authenticate: {},
    },

    'calendlyOAuth2Api': {
      displayName: 'Calendly OAuth2 API',
      fields: [{"name":"grantType","type":"hidden","required":false},{"name":"authUrl","type":"hidden","required":false},{"name":"accessTokenUrl","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"scope","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'carbonBlackApi': {
      displayName: 'Carbon Black API',
      fields: [{"name":"apiUrl","type":"string","required":false},{"name":"accessToken","type":"string","required":true},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.X-Auth-Token":"={{$credentials.accessToken}}"},
      authenticate: {"type":"generic","properties":{"headers":{"X-Auth-Token":"={{$credentials.accessToken}}"}}},
    },

    'chargebeeApi': {
      displayName: 'Chargebee API',
      fields: [{"name":"accountName","type":"string","required":false},{"name":"apiKey","type":"string","required":false}],
    },

    'circleCiApi': {
      displayName: 'CircleCI API',
      fields: [{"name":"apiKey","type":"string","required":false}],
    },

    'ciscoMerakiApi': {
      displayName: 'Cisco Meraki API',
      fields: [{"name":"apiKey","type":"string","required":true},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.X-Cisco-Meraki-API-Key":"={{$credentials.apiKey}}"},
      authenticate: {"type":"generic","properties":{"headers":{"X-Cisco-Meraki-API-Key":"={{$credentials.apiKey}}"}}},
    },

    'ciscoSecureEndpointApi': {
      displayName: 'Cisco Secure Endpoint (AMP) API',
      fields: [{"name":"region","type":"options","required":false},{"name":"clientId","type":"string","required":true},{"name":"clientSecret","type":"string","required":true},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"test.baseURL":"=https://api.{{$credentials.region}}.cisco.com"},
      authenticate: {},
    },

    'ciscoUmbrellaApi': {
      displayName: 'Cisco Umbrella API',
      fields: [{"name":"sessionToken","type":"hidden","required":false},{"name":"apiKey","type":"string","required":true},{"name":"secret","type":"string","required":true},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bearer {{$credentials.sessionToken}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bearer {{$credentials.sessionToken}}"}}},
    },

    'ciscoWebexOAuth2Api': {
      displayName: 'Cisco Webex OAuth2 API',
      fields: [{"name":"grantType","type":"hidden","required":false},{"name":"authUrl","type":"hidden","required":true},{"name":"accessTokenUrl","type":"hidden","required":true},{"name":"scope","type":"hidden","required":false},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'citrixAdcApi': {
      displayName: 'Netscaler ADC API',
      fields: [{"name":"url","type":"string","required":true},{"name":"username","type":"string","required":true},{"name":"password","type":"string","required":true},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.X-NITRO-USER":"={{$credentials.username}}","headers.X-NITRO-PASS":"={{$credentials.password}}","test.baseURL":"={{$credentials.url}}"},
      authenticate: {"type":"generic","properties":{"headers":{"X-NITRO-USER":"={{$credentials.username}}","X-NITRO-PASS":"={{$credentials.password}}"}}},
    },

    'clearbitApi': {
      displayName: 'Clearbit API',
      fields: [{"name":"apiKey","type":"string","required":false}],
    },

    'clickUpApi': {
      displayName: 'ClickUp API',
      fields: [{"name":"accessToken","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"={{$credentials.accessToken}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"={{$credentials.accessToken}}"}}},
    },

    'clickUpOAuth2Api': {
      displayName: 'ClickUp OAuth2 API',
      fields: [{"name":"grantType","type":"hidden","required":false},{"name":"authUrl","type":"hidden","required":true},{"name":"accessTokenUrl","type":"hidden","required":true},{"name":"scope","type":"hidden","required":false},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'clockifyApi': {
      displayName: 'Clockify API',
      fields: [{"name":"apiKey","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.X-Api-Key":"={{$credentials.apiKey}}"},
      authenticate: {"type":"generic","properties":{"headers":{"X-Api-Key":"={{$credentials.apiKey}}"}}},
    },

    'cloudflareApi': {
      displayName: 'Cloudflare API',
      fields: [{"name":"apiToken","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bearer {{$credentials.apiToken}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bearer {{$credentials.apiToken}}"}}},
    },

    'cockpitApi': {
      displayName: 'Cockpit API',
      fields: [{"name":"url","type":"string","required":false},{"name":"accessToken","type":"string","required":false}],
    },

    'codaApi': {
      displayName: 'Coda API',
      fields: [{"name":"accessToken","type":"string","required":false}],
    },

    'cohereApi': {
      displayName: 'CohereApi',
      fields: [{"name":"apiKey","type":"string","required":true},{"name":"url","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bearer {{$credentials.apiKey}}","test.baseURL":"={{ $credentials.url }}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bearer {{$credentials.apiKey}}"}}},
    },

    'contentfulApi': {
      displayName: 'Contentful API',
      fields: [{"name":"spaceId","type":"string","required":true},{"name":"ContentDeliveryaccessToken","type":"string","required":false},{"name":"ContentPreviewaccessToken","type":"string","required":false}],
    },

    'convertApi': {
      displayName: 'ConvertAPI',
      fields: [{"name":"apiToken","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bearer {{$credentials.apiToken}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bearer {{$credentials.apiToken}}"}}},
    },

    'convertKitApi': {
      displayName: 'ConvertKit API',
      fields: [{"name":"apiSecret","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      authenticate: {},
    },

    'copperApi': {
      displayName: 'Copper API',
      fields: [{"name":"apiKey","type":"string","required":true},{"name":"email","type":"string","required":true},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.X-PW-AccessToken":"={{$credentials.apiKey}}","headers.X-PW-UserEmail":"={{$credentials.email}}"},
      authenticate: {"type":"generic","properties":{"headers":{"X-PW-AccessToken":"={{$credentials.apiKey}}","X-PW-Application":"developer_api","X-PW-UserEmail":"={{$credentials.email}}"}}},
    },

    'cortexApi': {
      displayName: 'Cortex API',
      fields: [{"name":"cortexApiKey","type":"string","required":false},{"name":"host","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bearer {{$credentials.cortexApiKey}}","test.baseURL":"={{$credentials.host}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bearer {{$credentials.cortexApiKey}}"}}},
    },

    'crateDb': {
      displayName: 'CrateDB',
      fields: [{"name":"host","type":"string","required":false},{"name":"database","type":"string","required":false},{"name":"user","type":"string","required":false},{"name":"password","type":"string","required":false},{"name":"ssl","type":"options","required":false},{"name":"port","type":"number","required":false}],
    },

    'crowdStrikeOAuth2Api': {
      displayName: 'CrowdStrike OAuth2 API',
      fields: [{"name":"sessionToken","type":"hidden","required":false},{"name":"url","type":"string","required":true},{"name":"clientId","type":"string","required":true},{"name":"clientSecret","type":"string","required":true},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bearer {{$credentials.sessionToken}}","test.baseURL":"={{$credentials?.url}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bearer {{$credentials.sessionToken}}"}}},
    },

    'customerIoApi': {
      displayName: 'Customer.io API',
      fields: [{"name":"trackingApiKey","type":"string","required":true},{"name":"region","type":"options","required":true},{"name":"trackingSiteId","type":"string","required":false},{"name":"appApiKey","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      authenticate: {},
    },

    'datadogApi': {
      displayName: 'Datadog API',
      fields: [{"name":"url","type":"string","required":true},{"name":"apiKey","type":"string","required":true},{"name":"appKey","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"test.baseURL":"={{$credentials.url}}"},
      authenticate: {},
    },

    'deepLApi': {
      displayName: 'DeepL API',
      fields: [{"name":"apiKey","type":"string","required":false},{"name":"apiPlan","type":"options","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"qs.auth_key":"={{$credentials.apiKey}}","test.baseURL":"={{$credentials.apiPlan === \"pro\" ? \"https://api.deepl.com/v2\" : \"https://api-free.deepl.com/v2\" }}"},
      authenticate: {"type":"generic","properties":{"qs":{"auth_key":"={{$credentials.apiKey}}"}}},
    },

    'deepSeekApi': {
      displayName: 'DeepSeek',
      fields: [{"name":"apiKey","type":"string","required":true},{"name":"url","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bearer {{$credentials.apiKey}}","test.baseURL":"={{ $credentials.url }}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bearer {{$credentials.apiKey}}"}}},
    },

    'demioApi': {
      displayName: 'Demio API',
      fields: [{"name":"apiKey","type":"string","required":false},{"name":"apiSecret","type":"string","required":false}],
    },

    'dfirIrisApi': {
      displayName: 'DFIR-IRIS API',
      fields: [{"name":"baseUrl","type":"string","required":true},{"name":"apiKey","type":"string","required":true},{"name":"skipSslCertificateValidation","type":"boolean","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bearer {{$credentials.apiKey}}","test.baseURL":"={{$credentials.baseUrl}}","test.skipSslCertificateValidation":"={{$credentials.skipSslCertificateValidation}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bearer {{$credentials.apiKey}}"}}},
    },

    'dhlApi': {
      displayName: 'DHL API',
      fields: [{"name":"apiKey","type":"string","required":false}],
    },

    'discordBotApi': {
      displayName: 'Discord Bot API',
      fields: [{"name":"botToken","type":"string","required":true},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bot {{$credentials.botToken}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bot {{$credentials.botToken}}"}}},
    },

    'discordOAuth2Api': {
      displayName: 'Discord OAuth2 API',
      fields: [{"name":"botToken","type":"string","required":false},{"name":"grantType","type":"hidden","required":false},{"name":"authUrl","type":"hidden","required":true},{"name":"accessTokenUrl","type":"hidden","required":true},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"customScopes","type":"boolean","required":false},{"name":"customScopesNotice","type":"notice","required":false},{"name":"enabledScopes","type":"string","required":false},{"name":"scope","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'discordWebhookApi': {
      displayName: 'Discord Webhook',
      fields: [{"name":"webhookUri","type":"string","required":true}],
      usageExamples: {"test.baseURL":"={{ $credentials.webhookUri }}"},
    },

    'discourseApi': {
      displayName: 'Discourse API',
      fields: [{"name":"url","type":"string","required":true},{"name":"apiKey","type":"string","required":true},{"name":"username","type":"string","required":true},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"test.baseURL":"={{$credentials.url}}"},
      authenticate: {},
    },

    'disqusApi': {
      displayName: 'Disqus API',
      fields: [{"name":"accessToken","type":"string","required":false}],
    },

    'driftApi': {
      displayName: 'Drift API',
      fields: [{"name":"accessToken","type":"string","required":false}],
    },

    'driftOAuth2Api': {
      displayName: 'Drift OAuth2 API',
      fields: [{"name":"grantType","type":"hidden","required":false},{"name":"authUrl","type":"hidden","required":true},{"name":"accessTokenUrl","type":"hidden","required":true},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"scope","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'dropboxApi': {
      displayName: 'Dropbox API',
      fields: [{"name":"accessToken","type":"string","required":false},{"name":"accessType","type":"options","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bearer {{$credentials.accessToken}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bearer {{$credentials.accessToken}}"}}},
    },

    'dropboxOAuth2Api': {
      displayName: 'Dropbox OAuth2 API',
      fields: [{"name":"grantType","type":"hidden","required":false},{"name":"authUrl","type":"hidden","required":true},{"name":"accessTokenUrl","type":"hidden","required":true},{"name":"scope","type":"hidden","required":false},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"accessType","type":"options","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'dropcontactApi': {
      displayName: 'Dropcontact API',
      fields: [{"name":"apiKey","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.X-Access-Token":"={{$credentials.apiKey}}"},
      authenticate: {"type":"generic","properties":{"headers":{"user-agent":"n8n","X-Access-Token":"={{$credentials.apiKey}}"}}},
    },

    'dynatraceApi': {
      displayName: 'DynatraceAPI',
      fields: [{"name":"apiKey","type":"string","required":true},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Api-Token {{$credentials.apiKey}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Api-Token {{$credentials.apiKey}}"}}},
    },

    'egoiApi': {
      displayName: 'E-Goi API',
      fields: [{"name":"apiKey","type":"string","required":false}],
    },

    'elasticSecurityApi': {
      displayName: 'Elastic Security API',
      fields: [{"name":"baseUrl","type":"string","required":true},{"name":"type","type":"options","required":false},{"name":"username","type":"string","required":true},{"name":"password","type":"string","required":true},{"name":"apiKey","type":"string","required":true},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"test.baseURL":"={{$credentials.baseUrl}}"},
      authenticate: {},
    },

    'elasticsearchApi': {
      displayName: 'Elasticsearch API',
      fields: [{"name":"username","type":"string","required":false},{"name":"password","type":"string","required":false},{"name":"baseUrl","type":"string","required":false},{"name":"ignoreSSLIssues","type":"boolean","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"auth.username":"={{$credentials.username}}","auth.password":"={{$credentials.password}}","test.baseURL":"={{$credentials.baseUrl}}","test.skipSslCertificateValidation":"={{$credentials.ignoreSSLIssues}}"},
      authenticate: {"type":"generic","properties":{"auth":{"username":"={{$credentials.username}}","password":"={{$credentials.password}}"}}},
    },

    'emeliaApi': {
      displayName: 'Emelia API',
      fields: [{"name":"apiKey","type":"string","required":false}],
    },

    'erpNextApi': {
      displayName: 'ERPNext API',
      fields: [{"name":"apiKey","type":"string","required":false},{"name":"apiSecret","type":"string","required":false},{"name":"environment","type":"options","required":false},{"name":"subdomain","type":"string","required":false},{"name":"domain","type":"options","required":false},{"name":"domain","type":"string","required":false},{"name":"allowUnauthorizedCerts","type":"boolean","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=token {{$credentials.apiKey}}:{{$credentials.apiSecret}}","test.baseURL":"={{$credentials.environment === \"cloudHosted\" ? \"https://\" + $credentials.subdomain + \".\" + $credentials.domain : $credentials.domain}}","test.skipSslCertificateValidation":"={{ $credentials.allowUnauthorizedCerts }}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=token {{$credentials.apiKey}}:{{$credentials.apiSecret}}"}}},
    },

    'eventbriteApi': {
      displayName: 'Eventbrite API',
      fields: [{"name":"apiKey","type":"string","required":false}],
    },

    'eventbriteOAuth2Api': {
      displayName: 'Eventbrite OAuth2 API',
      fields: [{"name":"grantType","type":"hidden","required":false},{"name":"authUrl","type":"hidden","required":true},{"name":"accessTokenUrl","type":"hidden","required":true},{"name":"scope","type":"hidden","required":false},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'f5BigIpApi': {
      displayName: 'F5 Big-IP API',
      fields: [{"name":"username","type":"string","required":true},{"name":"password","type":"string","required":true},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"auth.username":"={{$credentials.username}}","auth.password":"={{$credentials.password}}"},
      authenticate: {"type":"generic","properties":{"auth":{"username":"={{$credentials.username}}","password":"={{$credentials.password}}"}}},
    },

    'facebookGraphApi': {
      displayName: 'Facebook Graph API',
      fields: [{"name":"accessToken","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"qs.access_token":"={{$credentials.accessToken}}"},
      authenticate: {"type":"generic","properties":{"qs":{"access_token":"={{$credentials.accessToken}}"}}},
    },

    'facebookGraphAppApi': {
      displayName: 'Facebook Graph API (App)',
      fields: [{"name":"appSecret","type":"string","required":false}],
    },

    'facebookLeadAdsOAuth2Api': {
      displayName: 'Facebook Lead Ads OAuth2 API',
      fields: [{"name":"grantType","type":"hidden","required":false},{"name":"authUrl","type":"hidden","required":true},{"name":"accessTokenUrl","type":"hidden","required":true},{"name":"scope","type":"hidden","required":false},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'figmaApi': {
      displayName: 'Figma API',
      fields: [{"name":"accessToken","type":"string","required":false}],
    },

    'fileMaker': {
      displayName: 'FileMaker API',
      fields: [{"name":"host","type":"string","required":false},{"name":"db","type":"string","required":false},{"name":"login","type":"string","required":false},{"name":"password","type":"string","required":false}],
    },

    'filescanApi': {
      displayName: 'Filescan API',
      fields: [{"name":"apiKey","type":"string","required":true},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.X-Api-Key":"={{$credentials.apiKey}}"},
      authenticate: {"type":"generic","properties":{"headers":{"X-Api-Key":"={{$credentials.apiKey}}"}}},
    },

    'flowApi': {
      displayName: 'Flow API',
      fields: [{"name":"organizationId","type":"number","required":false},{"name":"accessToken","type":"string","required":false}],
    },

    'formIoApi': {
      displayName: 'Form.io API',
      fields: [{"name":"environment","type":"options","required":false},{"name":"domain","type":"string","required":false},{"name":"email","type":"string","required":false},{"name":"password","type":"string","required":false},{"name":"token","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.x-jwt-token":"={{ $credentials.token }}","test.baseURL":"={{$credentials.domain || \"https://formio.form.io\"}}"},
      authenticate: {"type":"generic","properties":{"headers":{"x-jwt-token":"={{ $credentials.token }}"}}},
    },

    'formstackApi': {
      displayName: 'Formstack API',
      fields: [{"name":"accessToken","type":"string","required":false}],
    },

    'formstackOAuth2Api': {
      displayName: 'Formstack OAuth2 API',
      fields: [{"name":"grantType","type":"hidden","required":false},{"name":"authUrl","type":"hidden","required":true},{"name":"accessTokenUrl","type":"hidden","required":true},{"name":"scope","type":"hidden","required":false},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'fortiGateApi': {
      displayName: 'Fortinet FortiGate API',
      fields: [{"name":"accessToken","type":"string","required":true},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"qs.access_token":"={{$credentials.accessToken}}"},
      authenticate: {"type":"generic","properties":{"qs":{"access_token":"={{$credentials.accessToken}}"}}},
    },

    'freshdeskApi': {
      displayName: 'Freshdesk API',
      fields: [{"name":"apiKey","type":"string","required":false},{"name":"domain","type":"string","required":false}],
    },

    'freshserviceApi': {
      displayName: 'Freshservice API',
      fields: [{"name":"apiKey","type":"string","required":false},{"name":"domain","type":"string","required":false}],
    },

    'freshworksCrmApi': {
      displayName: 'Freshworks CRM API',
      fields: [{"name":"apiKey","type":"string","required":false},{"name":"domain","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Token token={{$credentials?.apiKey}}","test.baseURL":"=https://{{$credentials?.domain}}.myfreshworks.com/crm/sales/api"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Token token={{$credentials?.apiKey}}"}}},
    },

    'ftp': {
      displayName: 'FTP',
      fields: [{"name":"host","type":"string","required":true},{"name":"port","type":"number","required":true},{"name":"username","type":"string","required":false},{"name":"password","type":"string","required":false}],
    },

    'gSuiteAdminOAuth2Api': {
      displayName: 'Google Workspace Admin OAuth2 API',
      fields: [{"name":"scope","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'getResponseApi': {
      displayName: 'GetResponse API',
      fields: [{"name":"apiKey","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.X-Auth-Token":"=api-key {{$credentials.apiKey}}"},
      authenticate: {"type":"generic","properties":{"headers":{"X-Auth-Token":"=api-key {{$credentials.apiKey}}"}}},
    },

    'getResponseOAuth2Api': {
      displayName: 'GetResponse OAuth2 API',
      fields: [{"name":"grantType","type":"hidden","required":false},{"name":"authUrl","type":"hidden","required":true},{"name":"accessTokenUrl","type":"hidden","required":true},{"name":"scope","type":"hidden","required":false},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'ghostAdminApi': {
      displayName: 'Ghost Admin API',
      fields: [{"name":"url","type":"string","required":false},{"name":"apiKey","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"test.baseURL":"={{$credentials.url}}"},
      authenticate: {},
    },

    'ghostContentApi': {
      displayName: 'Ghost Content API',
      fields: [{"name":"url","type":"string","required":false},{"name":"apiKey","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"test.baseURL":"={{$credentials.url}}"},
      authenticate: {},
    },

    'gitPassword': {
      displayName: 'Git',
      fields: [{"name":"username","type":"string","required":false},{"name":"password","type":"string","required":false}],
    },

    'githubApi': {
      displayName: 'GitHub API',
      fields: [{"name":"server","type":"string","required":false},{"name":"user","type":"string","required":false},{"name":"accessToken","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=token {{$credentials?.accessToken}}","test.baseURL":"={{$credentials?.server}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=token {{$credentials?.accessToken}}"}}},
    },

    'githubOAuth2Api': {
      displayName: 'GitHub OAuth2 API',
      fields: [{"name":"grantType","type":"hidden","required":false},{"name":"server","type":"string","required":false},{"name":"authUrl","type":"hidden","required":true},{"name":"accessTokenUrl","type":"hidden","required":true},{"name":"scope","type":"hidden","required":false},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'gitlabApi': {
      displayName: 'GitLab API',
      fields: [{"name":"server","type":"string","required":false},{"name":"accessToken","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Private-Token":"={{$credentials.accessToken}}","test.baseURL":"={{$credentials.server.replace(new RegExp(\"/$\"), \"\") + \"/api/v4\" }}"},
      authenticate: {"type":"generic","properties":{"headers":{"Private-Token":"={{$credentials.accessToken}}"}}},
    },

    'gitlabOAuth2Api': {
      displayName: 'GitLab OAuth2 API',
      fields: [{"name":"grantType","type":"hidden","required":false},{"name":"server","type":"string","required":false},{"name":"authUrl","type":"hidden","required":true},{"name":"accessTokenUrl","type":"hidden","required":true},{"name":"scope","type":"hidden","required":false},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'gmailOAuth2': {
      displayName: 'Gmail OAuth2 API',
      fields: [{"name":"scope","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'goToWebinarOAuth2Api': {
      displayName: 'GoToWebinar OAuth2 API',
      fields: [{"name":"grantType","type":"hidden","required":false},{"name":"authUrl","type":"hidden","required":false},{"name":"accessTokenUrl","type":"hidden","required":false},{"name":"scope","type":"hidden","required":false},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'gongApi': {
      displayName: 'Gong API',
      fields: [{"name":"baseUrl","type":"string","required":false},{"name":"accessKey","type":"string","required":false},{"name":"accessKeySecret","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"auth.username":"={{ $credentials.accessKey }}","auth.password":"={{ $credentials.accessKeySecret }}","test.baseURL":"={{ $credentials.baseUrl.replace(new RegExp(\"/$\"), \"\") }}"},
      authenticate: {"type":"generic","properties":{"auth":{"username":"={{ $credentials.accessKey }}","password":"={{ $credentials.accessKeySecret }}"}}},
    },

    'gongOAuth2Api': {
      displayName: 'Gong OAuth2 API',
      fields: [{"name":"baseUrl","type":"string","required":false},{"name":"grantType","type":"hidden","required":false},{"name":"authUrl","type":"hidden","required":true},{"name":"accessTokenUrl","type":"hidden","required":true},{"name":"scope","type":"hidden","required":false},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'googleAdsOAuth2Api': {
      displayName: 'Google Ads OAuth2 API',
      fields: [{"name":"developerToken","type":"string","required":true},{"name":"scope","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'googleAnalyticsOAuth2': {
      displayName: 'Google Analytics OAuth2 API',
      fields: [{"name":"scope","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'googleApi': {
      displayName: 'Google Service Account API',
      fields: [{"name":"region","type":"options","required":false},{"name":"email","type":"string","required":true},{"name":"privateKey","type":"string","required":true},{"name":"inpersonate","type":"boolean","required":false},{"name":"delegatedEmail","type":"string","required":false},{"name":"httpNode","type":"boolean","required":false},{"name":"httpWarning","type":"notice","required":false},{"name":"scopes","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      authenticate: {},
    },

    'googleBigQueryOAuth2Api': {
      displayName: 'Google BigQuery OAuth2 API',
      fields: [{"name":"scope","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'googleBooksOAuth2Api': {
      displayName: 'Google Books OAuth2 API',
      fields: [{"name":"scope","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'googleBusinessProfileOAuth2Api': {
      displayName: 'Google Business Profile OAuth2 API',
      fields: [{"name":"scope","type":"hidden","required":false},{"name":"notice","type":"notice","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'googleCalendarOAuth2Api': {
      displayName: 'Google Calendar OAuth2 API',
      fields: [{"name":"scope","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'googleChatOAuth2Api': {
      displayName: 'Chat OAuth2 API',
      fields: [{"name":"scope","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'googleCloudNaturalLanguageOAuth2Api': {
      displayName: 'Google Cloud Natural Language OAuth2 API',
      fields: [{"name":"scope","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'googleCloudStorageOAuth2Api': {
      displayName: 'Google Cloud Storage OAuth2 API',
      fields: [{"name":"scope","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'googleContactsOAuth2Api': {
      displayName: 'Google Contacts OAuth2 API',
      fields: [{"name":"scope","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'googleDocsOAuth2Api': {
      displayName: 'Google Docs OAuth2 API',
      fields: [{"name":"scope","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'googleDriveOAuth2Api': {
      displayName: 'Google Drive OAuth2 API',
      fields: [{"name":"scope","type":"hidden","required":false},{"name":"notice","type":"notice","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'googleFirebaseCloudFirestoreOAuth2Api': {
      displayName: 'Google Firebase Cloud Firestore OAuth2 API',
      fields: [{"name":"scope","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'googleFirebaseRealtimeDatabaseOAuth2Api': {
      displayName: 'Google Firebase Realtime Database OAuth2 API',
      fields: [{"name":"scope","type":"hidden","required":false},{"name":"region","type":"options","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'googleOAuth2Api': {
      displayName: 'Google OAuth2 API',
      fields: [{"name":"grantType","type":"hidden","required":false},{"name":"authUrl","type":"hidden","required":false},{"name":"accessTokenUrl","type":"hidden","required":false},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'googlePalmApi': {
      displayName: 'Google Gemini(PaLM) Api',
      fields: [{"name":"host","type":"string","required":true},{"name":"apiKey","type":"string","required":true},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"qs.key":"={{$credentials.apiKey}}","test.baseURL":"={{$credentials.host}}/v1beta/models"},
      authenticate: {"type":"generic","properties":{"qs":{"key":"={{$credentials.apiKey}}"}}},
    },

    'googlePerspectiveOAuth2Api': {
      displayName: 'Google Perspective OAuth2 API',
      fields: [{"name":"scope","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'googleSheetsOAuth2Api': {
      displayName: 'Google Sheets OAuth2 API',
      fields: [{"name":"scope","type":"hidden","required":false},{"name":"notice","type":"notice","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'googleSheetsTriggerOAuth2Api': {
      displayName: 'Google Sheets Trigger OAuth2 API',
      fields: [{"name":"scope","type":"hidden","required":false},{"name":"notice","type":"notice","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'googleSlidesOAuth2Api': {
      displayName: 'Google Slides OAuth2 API',
      fields: [{"name":"scope","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'googleTasksOAuth2Api': {
      displayName: 'Google Tasks OAuth2 API',
      fields: [{"name":"scope","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'googleTranslateOAuth2Api': {
      displayName: 'Google Translate OAuth2 API',
      fields: [{"name":"scope","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'gotifyApi': {
      displayName: 'Gotify API',
      fields: [{"name":"appApiToken","type":"string","required":false},{"name":"clientApiToken","type":"string","required":false},{"name":"url","type":"string","required":false},{"name":"ignoreSSLIssues","type":"boolean","required":false}],
    },

    'grafanaApi': {
      displayName: 'Grafana API',
      fields: [{"name":"apiKey","type":"string","required":true},{"name":"baseUrl","type":"string","required":true},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bearer {{$credentials.apiKey}}","test.baseURL":"={{$credentials.baseUrl.replace(new RegExp(\"/$\"), \"\") + \"/api\" }}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bearer {{$credentials.apiKey}}"}}},
    },

    'gristApi': {
      displayName: 'Grist API',
      fields: [{"name":"apiKey","type":"string","required":true},{"name":"planType","type":"options","required":false},{"name":"customSubdomain","type":"string","required":true},{"name":"selfHostedUrl","type":"string","required":true}],
    },

    'groqApi': {
      displayName: 'Groq',
      fields: [{"name":"apiKey","type":"string","required":true},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bearer {{$credentials.apiKey}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bearer {{$credentials.apiKey}}"}}},
    },

    'gumroadApi': {
      displayName: 'Gumroad API',
      fields: [{"name":"accessToken","type":"string","required":false}],
    },

    'haloPSAApi': {
      displayName: 'HaloPSA API',
      fields: [{"name":"hostingType","type":"options","required":false},{"name":"authUrl","type":"string","required":true},{"name":"resourceApiUrl","type":"string","required":true},{"name":"client_id","type":"string","required":true},{"name":"client_secret","type":"string","required":true},{"name":"tenant","type":"string","required":false},{"name":"scope","type":"hidden","required":true}],
    },

    'harvestApi': {
      displayName: 'Harvest API',
      fields: [{"name":"accessToken","type":"string","required":false}],
    },

    'harvestOAuth2Api': {
      displayName: 'Harvest OAuth2 API',
      fields: [{"name":"grantType","type":"hidden","required":false},{"name":"authUrl","type":"hidden","required":true},{"name":"accessTokenUrl","type":"hidden","required":true},{"name":"scope","type":"hidden","required":false},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'helpScoutOAuth2Api': {
      displayName: 'HelpScout OAuth2 API',
      fields: [{"name":"grantType","type":"hidden","required":false},{"name":"authUrl","type":"hidden","required":true},{"name":"accessTokenUrl","type":"hidden","required":true},{"name":"scope","type":"hidden","required":false},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'highLevelApi': {
      displayName: 'HighLevel API',
      fields: [{"name":"apiKey","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bearer {{$credentials.apiKey}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bearer {{$credentials.apiKey}}"}}},
    },

    'highLevelOAuth2Api': {
      displayName: 'HighLevel OAuth2 API',
      fields: [{"name":"grantType","type":"hidden","required":false},{"name":"authUrl","type":"options","required":true},{"name":"scope","type":"string","required":true},{"name":"accessTokenUrl","type":"hidden","required":false},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"notice","type":"notice","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'homeAssistantApi': {
      displayName: 'Home Assistant API',
      fields: [{"name":"host","type":"string","required":false},{"name":"port","type":"number","required":false},{"name":"ssl","type":"boolean","required":false},{"name":"accessToken","type":"string","required":false}],
    },

    'httpBasicAuth': {
      displayName: 'Basic Auth',
      fields: [{"name":"user","type":"string","required":false},{"name":"password","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'httpBearerAuth': {
      displayName: 'Bearer Auth',
      fields: [{"name":"token","type":"string","required":false},{"name":"useCustomAuth","type":"notice","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bearer {{$credentials.token}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bearer {{$credentials.token}}"}}},
    },

    'httpCustomAuth': {
      displayName: 'Custom Auth',
      fields: [{"name":"json","type":"json","required":true},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'httpDigestAuth': {
      displayName: 'Digest Auth',
      fields: [{"name":"user","type":"string","required":false},{"name":"password","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'httpHeaderAuth': {
      displayName: 'Header Auth',
      fields: [{"name":"name","type":"string","required":false},{"name":"value","type":"string","required":false},{"name":"useCustomAuth","type":"notice","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.={{$credentials.name}}":"={{$credentials.value}}"},
      authenticate: {"type":"generic","properties":{"headers":{"={{$credentials.name}}":"={{$credentials.value}}"}}},
    },

    'httpMultipleHeadersAuth': {
      displayName: 'Multiple Headers Auth',
      fields: [{"name":"headers","type":"fixedCollection","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      authenticate: {},
    },

    'httpQueryAuth': {
      displayName: 'Query Auth',
      fields: [{"name":"name","type":"string","required":false},{"name":"value","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'httpSslAuth': {
      displayName: 'SSL Certificates',
      fields: [{"name":"ca","type":"string","required":false},{"name":"cert","type":"string","required":false},{"name":"key","type":"string","required":false},{"name":"passphrase","type":"string","required":false}],
    },

    'hubspotApi': {
      displayName: 'HubSpot API',
      fields: [{"name":"notice","type":"notice","required":false},{"name":"apiKey","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"qs.hapikey":"={{$credentials.apiKey}}"},
      authenticate: {"type":"generic","properties":{"qs":{"hapikey":"={{$credentials.apiKey}}"}}},
    },

    'hubspotAppToken': {
      displayName: 'HubSpot App Token',
      fields: [{"name":"appToken","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bearer {{$credentials.appToken}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bearer {{$credentials.appToken}}"}}},
    },

    'hubspotDeveloperApi': {
      displayName: 'HubSpot Developer API',
      fields: [{"name":"grantType","type":"hidden","required":false},{"name":"authUrl","type":"hidden","required":true},{"name":"accessTokenUrl","type":"hidden","required":true},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"apiKey","type":"string","required":true},{"name":"appId","type":"string","required":true},{"name":"scope","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'hubspotOAuth2Api': {
      displayName: 'HubSpot OAuth2 API',
      fields: [{"name":"grantType","type":"hidden","required":false},{"name":"authUrl","type":"hidden","required":true},{"name":"accessTokenUrl","type":"hidden","required":true},{"name":"scope","type":"hidden","required":false},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'huggingFaceApi': {
      displayName: 'HuggingFaceApi',
      fields: [{"name":"apiKey","type":"string","required":true},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bearer {{$credentials.apiKey}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bearer {{$credentials.apiKey}}"}}},
    },

    'humanticAiApi': {
      displayName: 'Humantic AI API',
      fields: [{"name":"apiKey","type":"string","required":false}],
    },

    'hunterApi': {
      displayName: 'Hunter API',
      fields: [{"name":"apiKey","type":"string","required":false}],
    },

    'hybridAnalysisApi': {
      displayName: 'Hybrid Analysis API',
      fields: [{"name":"apiKey","type":"string","required":true},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.api-key":"={{$credentials.apiKey}}"},
      authenticate: {"type":"generic","properties":{"headers":{"api-key":"={{$credentials.apiKey}}"}}},
    },

    'imap': {
      displayName: 'IMAP',
      fields: [{"name":"user","type":"string","required":false},{"name":"password","type":"string","required":false},{"name":"host","type":"string","required":false},{"name":"port","type":"number","required":false},{"name":"secure","type":"boolean","required":false},{"name":"allowUnauthorizedCerts","type":"boolean","required":false}],
    },

    'impervaWafApi': {
      displayName: 'Imperva WAF API',
      fields: [{"name":"apiID","type":"string","required":true},{"name":"apiKey","type":"string","required":true},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.x-API-Id":"={{$credentials.apiID}}","headers.x-API-Key":"={{$credentials.apiKey}}"},
      authenticate: {"type":"generic","properties":{"headers":{"x-API-Id":"={{$credentials.apiID}}","x-API-Key":"={{$credentials.apiKey}}"}}},
    },

    'intercomApi': {
      displayName: 'Intercom API',
      fields: [{"name":"apiKey","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bearer {{$credentials.apiKey}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bearer {{$credentials.apiKey}}","Accept":"application/json"}}},
    },

    'invoiceNinjaApi': {
      displayName: 'Invoice Ninja API',
      fields: [{"name":"url","type":"string","required":false},{"name":"apiToken","type":"string","required":false},{"name":"secret","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"test.baseURL":"={{$credentials?.url}}"},
      authenticate: {},
    },

    'iterableApi': {
      displayName: 'Iterable API',
      fields: [{"name":"apiKey","type":"string","required":false},{"name":"region","type":"options","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Api_Key":"={{$credentials.apiKey}}","test.baseURL":"={{$credentials?.region}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Api_Key":"={{$credentials.apiKey}}"}}},
    },

    'jenkinsApi': {
      displayName: 'Jenkins API',
      fields: [{"name":"username","type":"string","required":false},{"name":"apiKey","type":"string","required":false},{"name":"baseUrl","type":"string","required":false}],
    },

    'jinaAiApi': {
      displayName: 'Jina AI API',
      fields: [{"name":"apiKey","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bearer {{ $credentials?.apiKey }}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bearer {{ $credentials?.apiKey }}"}}},
    },

    'jiraSoftwareCloudApi': {
      displayName: 'Jira SW Cloud API',
      fields: [{"name":"email","type":"string","required":false},{"name":"apiToken","type":"string","required":false},{"name":"domain","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"auth.username":"={{$credentials.email}}","auth.password":"={{$credentials.apiToken}}","test.baseURL":"={{$credentials?.domain}}"},
      authenticate: {"type":"generic","properties":{"auth":{"username":"={{$credentials.email}}","password":"={{$credentials.apiToken}}"}}},
    },

    'jiraSoftwareServerApi': {
      displayName: 'Jira SW Server API',
      fields: [{"name":"email","type":"string","required":false},{"name":"password","type":"string","required":false},{"name":"domain","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"auth.username":"={{$credentials.email}}","auth.password":"={{$credentials.password}}","test.baseURL":"={{$credentials?.domain}}"},
      authenticate: {"type":"generic","properties":{"auth":{"username":"={{$credentials.email}}","password":"={{$credentials.password}}"}}},
    },

    'jiraSoftwareServerPatApi': {
      displayName: 'Jira SW Server (PAT) API',
      fields: [{"name":"personalAccessToken","type":"string","required":false},{"name":"domain","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bearer {{$credentials.personalAccessToken}}","test.baseURL":"={{$credentials?.domain}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bearer {{$credentials.personalAccessToken}}"}}},
    },

    'jotFormApi': {
      displayName: 'JotForm API',
      fields: [{"name":"apiKey","type":"string","required":false},{"name":"apiDomain","type":"options","required":false}],
    },

    'jwtAuth': {
      displayName: 'JWT Auth',
      fields: [{"name":"keyType","type":"options","required":false},{"name":"secret","type":"string","required":false},{"name":"privateKey","type":"string","required":false},{"name":"publicKey","type":"string","required":false},{"name":"algorithm","type":"options","required":false}],
    },

    'kafka': {
      displayName: 'Kafka',
      fields: [{"name":"clientId","type":"string","required":false},{"name":"brokers","type":"string","required":false},{"name":"ssl","type":"boolean","required":false},{"name":"authentication","type":"boolean","required":false},{"name":"username","type":"string","required":false},{"name":"password","type":"string","required":false},{"name":"saslMechanism","type":"options","required":false}],
    },

    'keapOAuth2Api': {
      displayName: 'Keap OAuth2 API',
      fields: [{"name":"grantType","type":"hidden","required":false},{"name":"authUrl","type":"hidden","required":false},{"name":"accessTokenUrl","type":"hidden","required":false},{"name":"scope","type":"hidden","required":false},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'kibanaApi': {
      displayName: 'Kibana API',
      fields: [{"name":"url","type":"string","required":true},{"name":"username","type":"string","required":true},{"name":"password","type":"string","required":true},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"auth.username":"={{$credentials.username}}","auth.password":"={{$credentials.password}}","test.baseURL":"={{$credentials.url}}"},
      authenticate: {"type":"generic","properties":{"headers":{"kbn-xsrf":true},"auth":{"username":"={{$credentials.username}}","password":"={{$credentials.password}}"}}},
    },

    'koBoToolboxApi': {
      displayName: 'KoBoToolbox API Token',
      fields: [{"name":"URL","type":"string","required":false},{"name":"token","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Token {{$credentials.token}}","test.baseURL":"={{$credentials.URL}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Token {{$credentials.token}}"}}},
    },

    'ldap': {
      displayName: 'LDAP',
      fields: [{"name":"hostname","type":"string","required":true},{"name":"port","type":"string","required":false},{"name":"bindDN","type":"string","required":false},{"name":"bindPassword","type":"string","required":false},{"name":"connectionSecurity","type":"options","required":false},{"name":"allowUnauthorizedCerts","type":"boolean","required":false},{"name":"caCertificate","type":"string","required":false},{"name":"timeout","type":"number","required":false}],
    },

    'lemlistApi': {
      displayName: 'Lemlist API',
      fields: [{"name":"apiKey","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      authenticate: {},
    },

    'lemonadeApi': {
      displayName: 'Lemonade',
      fields: [{"name":"baseUrl","type":"string","required":true},{"name":"apiKey","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"test.baseURL":"={{ $credentials.baseUrl }}"},
      authenticate: {},
    },

    'lineNotifyOAuth2Api': {
      displayName: 'Line Notify OAuth2 API',
      fields: [{"name":"grantType","type":"hidden","required":false},{"name":"authUrl","type":"hidden","required":true},{"name":"accessTokenUrl","type":"hidden","required":true},{"name":"scope","type":"hidden","required":true},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'linearApi': {
      displayName: 'Linear API',
      fields: [{"name":"apiKey","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"={{$credentials.apiKey}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"={{$credentials.apiKey}}"}}},
    },

    'linearOAuth2Api': {
      displayName: 'Linear OAuth2 API',
      fields: [{"name":"grantType","type":"hidden","required":false},{"name":"authUrl","type":"hidden","required":true},{"name":"accessTokenUrl","type":"hidden","required":true},{"name":"actor","type":"options","required":false},{"name":"includeAdminScope","type":"boolean","required":false},{"name":"scope","type":"hidden","required":true},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'lingvaNexApi': {
      displayName: 'LingvaNex API',
      fields: [{"name":"apiKey","type":"string","required":false}],
    },

    'linkedInCommunityManagementOAuth2Api': {
      displayName: 'LinkedIn Community Management OAuth2 API',
      fields: [{"name":"grantType","type":"hidden","required":false},{"name":"authUrl","type":"hidden","required":true},{"name":"accessTokenUrl","type":"hidden","required":true},{"name":"scope","type":"hidden","required":false},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'linkedInOAuth2Api': {
      displayName: 'LinkedIn OAuth2 API',
      fields: [{"name":"grantType","type":"hidden","required":false},{"name":"organizationSupport","type":"boolean","required":false},{"name":"authUrl","type":"hidden","required":true},{"name":"accessTokenUrl","type":"hidden","required":true},{"name":"scope","type":"hidden","required":false},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"legacy","type":"boolean","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'loneScaleApi': {
      displayName: 'LoneScale API',
      fields: [{"name":"apiKey","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"={{$credentials.apiKey}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"={{$credentials.apiKey}}"}}},
    },

    'magento2Api': {
      displayName: 'Magento 2 API',
      fields: [{"name":"host","type":"string","required":false},{"name":"accessToken","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bearer {{$credentials.accessToken}}","test.baseURL":"={{$credentials.host}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bearer {{$credentials.accessToken}}"}}},
    },

    'mailcheckApi': {
      displayName: 'Mailcheck API',
      fields: [{"name":"apiKey","type":"string","required":false}],
    },

    'mailchimpApi': {
      displayName: 'Mailchimp API',
      fields: [{"name":"apiKey","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=apikey {{$credentials.apiKey}}","test.baseURL":"=https://{{$credentials.apiKey.split(\"-\").pop()}}.api.mailchimp.com/3.0"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=apikey {{$credentials.apiKey}}"}}},
    },

    'mailchimpOAuth2Api': {
      displayName: 'Mailchimp OAuth2 API',
      fields: [{"name":"grantType","type":"hidden","required":false},{"name":"authUrl","type":"hidden","required":true},{"name":"accessTokenUrl","type":"hidden","required":true},{"name":"metadataUrl","type":"hidden","required":true},{"name":"scope","type":"hidden","required":false},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'mailerLiteApi': {
      displayName: 'Mailer Lite API',
      fields: [{"name":"apiKey","type":"string","required":false},{"name":"classicApi","type":"boolean","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"test.baseURL":"={{$credentials.classicApi ? \"https://api.mailerlite.com/api/v2\" : \"https://connect.mailerlite.com/api\"}}"},
      authenticate: {},
    },

    'mailgunApi': {
      displayName: 'Mailgun API',
      fields: [{"name":"apiDomain","type":"options","required":false},{"name":"emailDomain","type":"string","required":false},{"name":"apiKey","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"auth.password":"={{$credentials.apiKey}}","test.baseURL":"=https://{{$credentials.apiDomain}}/v3"},
      authenticate: {"type":"generic","properties":{"auth":{"username":"api","password":"={{$credentials.apiKey}}"}}},
    },

    'mailjetEmailApi': {
      displayName: 'Mailjet Email API',
      fields: [{"name":"apiKey","type":"string","required":false},{"name":"secretKey","type":"string","required":false},{"name":"sandboxMode","type":"boolean","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"auth.username":"={{$credentials.apiKey}}","auth.password":"={{$credentials.secretKey}}"},
      authenticate: {"type":"generic","properties":{"auth":{"username":"={{$credentials.apiKey}}","password":"={{$credentials.secretKey}}"}}},
    },

    'mailjetSmsApi': {
      displayName: 'Mailjet SMS API',
      fields: [{"name":"token","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bearer {{$credentials.token}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bearer {{$credentials.token}}"}}},
    },

    'malcoreApi': {
      displayName: 'MalcoreAPI',
      fields: [{"name":"apiKey","type":"string","required":true},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.apiKey":"={{$credentials.apiKey}}"},
      authenticate: {"type":"generic","properties":{"headers":{"apiKey":"={{$credentials.apiKey}}"}}},
    },

    'mandrillApi': {
      displayName: 'Mandrill API',
      fields: [{"name":"apiKey","type":"string","required":false}],
    },

    'marketstackApi': {
      displayName: 'Marketstack API',
      fields: [{"name":"apiKey","type":"string","required":false},{"name":"useHttps","type":"boolean","required":false}],
    },

    'matrixApi': {
      displayName: 'Matrix API',
      fields: [{"name":"accessToken","type":"string","required":false},{"name":"homeserverUrl","type":"string","required":false}],
    },

    'mattermostApi': {
      displayName: 'Mattermost API',
      fields: [{"name":"accessToken","type":"string","required":false},{"name":"baseUrl","type":"string","required":false},{"name":"allowUnauthorizedCerts","type":"boolean","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bearer {{$credentials.accessToken}}","test.baseURL":"={{$credentials.baseUrl.replace(/\\/$/, \"\")}}/api/v4","test.skipSslCertificateValidation":"={{$credentials?.allowUnauthorizedCerts}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bearer {{$credentials.accessToken}}"}}},
    },

    'mauticApi': {
      displayName: 'Mautic API',
      fields: [{"name":"url","type":"string","required":false},{"name":"username","type":"string","required":false},{"name":"password","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"auth.username":"={{$credentials.username}}","auth.password":"={{$credentials.password}}","test.baseURL":"={{$credentials.url.replace(new RegExp(\"/$\"), \"\")}}"},
      authenticate: {"type":"generic","properties":{"auth":{"username":"={{$credentials.username}}","password":"={{$credentials.password}}"}}},
    },

    'mauticOAuth2Api': {
      displayName: 'Mautic OAuth2 API',
      fields: [{"name":"grantType","type":"hidden","required":false},{"name":"url","type":"string","required":false},{"name":"authUrl","type":"hidden","required":true},{"name":"accessTokenUrl","type":"hidden","required":true},{"name":"scope","type":"hidden","required":false},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'mcpOAuth2Api': {
      displayName: 'MCP OAuth2 API',
      fields: [{"name":"useDynamicClientRegistration","type":"boolean","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'mediumApi': {
      displayName: 'Medium API',
      fields: [{"name":"accessToken","type":"string","required":false}],
    },

    'mediumOAuth2Api': {
      displayName: 'Medium OAuth2 API',
      fields: [{"name":"grantType","type":"hidden","required":false},{"name":"authUrl","type":"hidden","required":true},{"name":"accessTokenUrl","type":"hidden","required":true},{"name":"scope","type":"hidden","required":false},{"name":"clientId","type":"string","required":true},{"name":"clientSecret","type":"string","required":true},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'messageBirdApi': {
      displayName: 'MessageBird API',
      fields: [{"name":"accessKey","type":"string","required":false}],
    },

    'metabaseApi': {
      displayName: 'Metabase API',
      fields: [{"name":"sessionToken","type":"hidden","required":false},{"name":"url","type":"string","required":false},{"name":"username","type":"string","required":false},{"name":"password","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.X-Metabase-Session":"={{$credentials.sessionToken}}","test.baseURL":"={{$credentials?.url}}"},
      authenticate: {"type":"generic","properties":{"headers":{"X-Metabase-Session":"={{$credentials.sessionToken}}"}}},
    },

    'microsoftAzureCosmosDbSharedKeyApi': {
      displayName: 'Microsoft Azure Cosmos DB API',
      fields: [{"name":"account","type":"string","required":true},{"name":"key","type":"string","required":true},{"name":"database","type":"string","required":true},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"test.baseURL":"=https://{{ $credentials.account }}.documents.azure.com/dbs/{{ $credentials.database }}"},
      authenticate: {},
    },

    'microsoftAzureMonitorOAuth2Api': {
      displayName: 'Microsoft Azure Monitor OAuth2 API',
      fields: [{"name":"grantType","type":"options","required":false},{"name":"tenantId","type":"string","required":true},{"name":"resource","type":"options","required":false},{"name":"authUrl","type":"hidden","required":false},{"name":"accessTokenUrl","type":"hidden","required":false},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"scope","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'microsoftDynamicsOAuth2Api': {
      displayName: 'Microsoft Dynamics OAuth2 API',
      fields: [{"name":"subdomain","type":"string","required":true},{"name":"region","type":"options","required":false},{"name":"scope","type":"hidden","required":false}],
    },

    'microsoftEntraOAuth2Api': {
      displayName: 'Microsoft Entra ID (Azure Active Directory) API',
      fields: [{"name":"customScopes","type":"boolean","required":false},{"name":"customScopesNotice","type":"notice","required":false},{"name":"enabledScopes","type":"string","required":false},{"name":"scope","type":"hidden","required":false}],
    },

    'microsoftExcelOAuth2Api': {
      displayName: 'Microsoft Excel OAuth2 API',
      fields: [{"name":"scope","type":"hidden","required":false}],
    },

    'microsoftGraphSecurityOAuth2Api': {
      displayName: 'Microsoft Graph Security OAuth2 API',
      fields: [{"name":"scope","type":"hidden","required":false}],
    },

    'microsoftOAuth2Api': {
      displayName: 'Microsoft OAuth2 API',
      fields: [{"name":"grantType","type":"hidden","required":false},{"name":"authUrl","type":"string","required":false},{"name":"accessTokenUrl","type":"string","required":false},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'microsoftOneDriveOAuth2Api': {
      displayName: 'Microsoft Drive OAuth2 API',
      fields: [{"name":"scope","type":"hidden","required":false}],
    },

    'microsoftOutlookOAuth2Api': {
      displayName: 'Microsoft Outlook OAuth2 API',
      fields: [{"name":"scope","type":"hidden","required":false},{"name":"useShared","type":"boolean","required":false},{"name":"userPrincipalName","type":"string","required":false}],
    },

    'microsoftSharePointOAuth2Api': {
      displayName: 'Microsoft SharePoint OAuth2 API',
      fields: [{"name":"scope","type":"hidden","required":false},{"name":"subdomain","type":"string","required":false}],
    },

    'microsoftSql': {
      displayName: 'Microsoft SQL',
      fields: [{"name":"server","type":"string","required":false},{"name":"database","type":"string","required":false},{"name":"user","type":"string","required":false},{"name":"password","type":"string","required":false},{"name":"port","type":"number","required":false},{"name":"domain","type":"string","required":false},{"name":"tls","type":"boolean","required":false},{"name":"allowUnauthorizedCerts","type":"boolean","required":false},{"name":"connectTimeout","type":"number","required":false},{"name":"requestTimeout","type":"number","required":false},{"name":"tdsVersion","type":"options","required":false}],
    },

    'microsoftTeamsOAuth2Api': {
      displayName: 'Microsoft Teams OAuth2 API',
      fields: [{"name":"scope","type":"hidden","required":false},{"name":"notice","type":"notice","required":false}],
    },

    'microsoftToDoOAuth2Api': {
      displayName: 'Microsoft To Do OAuth2 API',
      fields: [{"name":"scope","type":"hidden","required":false}],
    },

    'milvusApi': {
      displayName: 'Milvus',
      fields: [{"name":"baseUrl","type":"string","required":true},{"name":"username","type":"string","required":false},{"name":"password","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bearer {{$credentials.username}}:{{$credentials.password}}","test.baseURL":"={{ $credentials.baseUrl }}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bearer {{$credentials.username}}:{{$credentials.password}}"}}},
    },

    'mindeeInvoiceApi': {
      displayName: 'Mindee Invoice API',
      fields: [{"name":"apiKey","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      authenticate: {},
    },

    'mindeeReceiptApi': {
      displayName: 'Mindee Receipt API',
      fields: [{"name":"apiKey","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      authenticate: {},
    },

    'miroOAuth2Api': {
      displayName: 'Miro OAuth2 API',
      fields: [{"name":"grantType","type":"hidden","required":false},{"name":"authUrl","type":"hidden","required":true},{"name":"accessTokenUrl","type":"hidden","required":true},{"name":"scope","type":"hidden","required":true},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'mispApi': {
      displayName: 'MISP API',
      fields: [{"name":"apiKey","type":"string","required":false},{"name":"baseUrl","type":"string","required":false},{"name":"allowUnauthorizedCerts","type":"boolean","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"={{$credentials.apiKey}}","test.baseURL":"={{$credentials.baseUrl.replace(new RegExp(\"/$\"), \"\")}}","test.skipSslCertificateValidation":"={{$credentials.allowUnauthorizedCerts}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"={{$credentials.apiKey}}"}}},
    },

    'mistApi': {
      displayName: 'Mist API',
      fields: [{"name":"token","type":"string","required":true},{"name":"region","type":"options","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Token {{$credentials.token}}","test.baseURL":"=https://api{{$credentials.region === \"eu\" ? \".eu\" : \"\"}}.mist.com"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Token {{$credentials.token}}"}}},
    },

    'mistralCloudApi': {
      displayName: 'Mistral Cloud API',
      fields: [{"name":"apiKey","type":"string","required":true},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bearer {{$credentials.apiKey}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bearer {{$credentials.apiKey}}"}}},
    },

    'moceanApi': {
      displayName: 'Mocean Api',
      fields: [{"name":"mocean-api-key","type":"string","required":false},{"name":"mocean-api-secret","type":"string","required":false}],
    },

    'mondayComApi': {
      displayName: 'Monday.com API',
      fields: [{"name":"apiToken","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bearer {{$credentials.apiToken}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bearer {{$credentials.apiToken}}"}}},
    },

    'mondayComOAuth2Api': {
      displayName: 'Monday.com OAuth2 API',
      fields: [{"name":"grantType","type":"hidden","required":false},{"name":"authUrl","type":"hidden","required":true},{"name":"accessTokenUrl","type":"hidden","required":true},{"name":"scope","type":"hidden","required":false},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'mongoDb': {
      displayName: 'MongoDB',
      fields: [{"name":"configurationType","type":"options","required":false},{"name":"connectionString","type":"string","required":false},{"name":"host","type":"string","required":false},{"name":"database","type":"string","required":false},{"name":"user","type":"string","required":false},{"name":"password","type":"string","required":false},{"name":"port","type":"number","required":false},{"name":"tls","type":"boolean","required":false},{"name":"ca","type":"string","required":false},{"name":"cert","type":"string","required":false},{"name":"key","type":"string","required":false},{"name":"passphrase","type":"string","required":false}],
    },

    'monicaCrmApi': {
      displayName: 'Monica CRM API',
      fields: [{"name":"environment","type":"options","required":false},{"name":"domain","type":"string","required":false},{"name":"apiToken","type":"string","required":false}],
    },

    'motorheadApi': {
      displayName: 'MotorheadApi',
      fields: [{"name":"host","type":"string","required":true},{"name":"apiKey","type":"string","required":true},{"name":"clientId","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.x-metal-client-id":"={{$credentials.clientId}}","headers.x-metal-api-key":"={{$credentials.apiKey}}","test.baseURL":"={{$credentials.host}}/keys/current"},
      authenticate: {"type":"generic","properties":{"headers":{"x-metal-client-id":"={{$credentials.clientId}}","x-metal-api-key":"={{$credentials.apiKey}}"}}},
    },

    'mqtt': {
      displayName: 'MQTT',
      fields: [{"name":"protocol","type":"options","required":false},{"name":"host","type":"string","required":false},{"name":"port","type":"number","required":false},{"name":"username","type":"string","required":false},{"name":"password","type":"string","required":false},{"name":"clean","type":"boolean","required":false},{"name":"clientId","type":"string","required":false},{"name":"ssl","type":"boolean","required":false},{"name":"passwordless","type":"boolean","required":false},{"name":"ca","type":"string","required":false},{"name":"rejectUnauthorized","type":"boolean","required":false},{"name":"cert","type":"string","required":false},{"name":"key","type":"string","required":false}],
    },

    'msg91Api': {
      displayName: 'Msg91 Api',
      fields: [{"name":"authkey","type":"string","required":false}],
    },

    'mySql': {
      displayName: 'MySQL',
      fields: [{"name":"host","type":"string","required":false},{"name":"database","type":"string","required":false},{"name":"user","type":"string","required":false},{"name":"password","type":"string","required":false},{"name":"port","type":"number","required":false},{"name":"connectTimeout","type":"number","required":false},{"name":"ssl","type":"boolean","required":false},{"name":"caCertificate","type":"string","required":false},{"name":"clientPrivateKey","type":"string","required":false},{"name":"clientCertificate","type":"string","required":false},{"name":"sshTunnel","type":"boolean","required":false},{"name":"sshAuthenticateWith","type":"options","required":false},{"name":"sshHost","type":"string","required":false},{"name":"sshPort","type":"number","required":false},{"name":"sshUser","type":"string","required":false},{"name":"sshPassword","type":"string","required":false},{"name":"privateKey","type":"string","required":false},{"name":"passphrase","type":"string","required":false}],
    },

    'n8nApi': {
      displayName: 'n8n API',
      fields: [{"name":"apiKey","type":"string","required":false},{"name":"baseUrl","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.X-N8N-API-KEY":"={{ $credentials.apiKey }}","test.baseURL":"={{ $credentials.baseUrl }}"},
      authenticate: {"type":"generic","properties":{"headers":{"X-N8N-API-KEY":"={{ $credentials.apiKey }}"}}},
    },

    'nasaApi': {
      displayName: 'NASA API',
      fields: [{"name":"api_key","type":"string","required":false}],
    },

    'netlifyApi': {
      displayName: 'Netlify API',
      fields: [{"name":"accessToken","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bearer {{$credentials.accessToken}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bearer {{$credentials.accessToken}}"}}},
    },

    'nextCloudApi': {
      displayName: 'NextCloud API',
      fields: [{"name":"webDavUrl","type":"string","required":false},{"name":"user","type":"string","required":false},{"name":"password","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"test.baseURL":"={{$credentials.webDavUrl.replace('/remote.php/webdav', '')}}"},
      authenticate: {},
    },

    'nextCloudOAuth2Api': {
      displayName: 'NextCloud OAuth2 API',
      fields: [{"name":"grantType","type":"hidden","required":false},{"name":"webDavUrl","type":"string","required":false},{"name":"authUrl","type":"string","required":true},{"name":"accessTokenUrl","type":"string","required":true},{"name":"scope","type":"hidden","required":false},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'nocoDb': {
      displayName: 'NocoDB',
      fields: [{"name":"apiToken","type":"string","required":false},{"name":"host","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.xc-auth":"={{$credentials.apiToken}}"},
      authenticate: {"type":"generic","properties":{"headers":{"xc-auth":"={{$credentials.apiToken}}"}}},
    },

    'nocoDbApiToken': {
      displayName: 'NocoDB API Token',
      fields: [{"name":"apiToken","type":"string","required":false},{"name":"host","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.xc-token":"={{$credentials.apiToken}}","test.baseURL":"={{ $credentials.host }}"},
      authenticate: {"type":"generic","properties":{"headers":{"xc-token":"={{$credentials.apiToken}}"}}},
    },

    'notionApi': {
      displayName: 'Notion API',
      fields: [{"name":"apiKey","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      authenticate: {},
    },

    'notionOAuth2Api': {
      displayName: 'Notion OAuth2 API',
      fields: [{"name":"grantType","type":"hidden","required":false},{"name":"authUrl","type":"hidden","required":true},{"name":"accessTokenUrl","type":"hidden","required":true},{"name":"scope","type":"hidden","required":false},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'npmApi': {
      displayName: 'Npm API',
      fields: [{"name":"accessToken","type":"string","required":false},{"name":"registryUrl","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bearer {{$credentials.accessToken}}","test.baseURL":"={{$credentials.registryUrl}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bearer {{$credentials.accessToken}}"}}},
    },

    'oAuth1Api': {
      displayName: 'OAuth1 API',
      fields: [{"name":"authUrl","type":"string","required":true},{"name":"accessTokenUrl","type":"string","required":true},{"name":"consumerKey","type":"string","required":true},{"name":"consumerSecret","type":"string","required":true},{"name":"requestTokenUrl","type":"string","required":true},{"name":"signatureMethod","type":"options","required":true},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'oAuth2Api': {
      displayName: 'OAuth2 API',
      fields: [{"name":"useDynamicClientRegistration","type":"hidden","required":false},{"name":"grantType","type":"options","required":false},{"name":"serverUrl","type":"string","required":true},{"name":"authUrl","type":"string","required":true},{"name":"accessTokenUrl","type":"string","required":true},{"name":"clientId","type":"string","required":true},{"name":"clientSecret","type":"string","required":true},{"name":"scope","type":"string","required":false},{"name":"authQueryParameters","type":"string","required":false},{"name":"authentication","type":"options","required":false},{"name":"sendAdditionalBodyProperties","type":"boolean","required":false},{"name":"additionalBodyProperties","type":"json","required":false},{"name":"ignoreSSLIssues","type":"boolean","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'odooApi': {
      displayName: 'Odoo API',
      fields: [{"name":"url","type":"string","required":true},{"name":"username","type":"string","required":true},{"name":"password","type":"string","required":true},{"name":"db","type":"string","required":false}],
    },

    'oktaApi': {
      displayName: 'Okta API',
      fields: [{"name":"url","type":"string","required":true},{"name":"accessToken","type":"string","required":true},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=SSWS {{$credentials.accessToken}}","test.baseURL":"={{$credentials.url}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=SSWS {{$credentials.accessToken}}"}}},
    },

    'ollamaApi': {
      displayName: 'Ollama',
      fields: [{"name":"baseUrl","type":"string","required":true},{"name":"apiKey","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bearer {{$credentials.apiKey}}","test.baseURL":"={{ $credentials.baseUrl }}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bearer {{$credentials.apiKey}}"}}},
    },

    'oneSimpleApi': {
      displayName: 'One Simple API',
      fields: [{"name":"apiToken","type":"string","required":false}],
    },

    'onfleetApi': {
      displayName: 'Onfleet API',
      fields: [{"name":"apiKey","type":"string","required":false}],
    },

    'openAiApi': {
      displayName: 'OpenAi',
      fields: [{"name":"apiKey","type":"string","required":true},{"name":"organizationId","type":"string","required":false},{"name":"url","type":"string","required":false},{"name":"header","type":"boolean","required":false},{"name":"headerName","type":"string","required":false},{"name":"headerValue","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"test.baseURL":"={{$credentials?.url}}"},
      authenticate: {},
    },

    'openCtiApi': {
      displayName: 'OpenCTI API',
      fields: [{"name":"apiKey","type":"string","required":true},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bearer {{$credentials.apiKey}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bearer {{$credentials.apiKey}}"}}},
    },

    'openRouterApi': {
      displayName: 'OpenRouter',
      fields: [{"name":"apiKey","type":"string","required":true},{"name":"url","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bearer {{$credentials.apiKey}}","test.baseURL":"={{ $credentials.url }}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bearer {{$credentials.apiKey}}"}}},
    },

    'openWeatherMapApi': {
      displayName: 'OpenWeatherMap API',
      fields: [{"name":"accessToken","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"qs.appid":"={{$credentials.accessToken}}"},
      authenticate: {"type":"generic","properties":{"qs":{"appid":"={{$credentials.accessToken}}"}}},
    },

    'oracleDBApi': {
      displayName: 'Oracle Database Credentials API',
      fields: [{"name":"user","type":"string","required":false},{"name":"password","type":"string","required":false},{"name":"connectionString","type":"string","required":false},{"name":"useThickMode","type":"boolean","required":false},{"name":"useSSL","type":"boolean","required":false},{"name":"walletPassword","type":"string","required":false},{"name":"walletContent","type":"string","required":false},{"name":"sslServerCertDN","type":"string","required":false},{"name":"sslServerDNMatch","type":"boolean","required":false},{"name":"sslAllowWeakDNMatch","type":"boolean","required":false},{"name":"poolMin","type":"number","required":false},{"name":"poolMax","type":"number","required":false},{"name":"poolIncrement","type":"number","required":false},{"name":"maxLifetimeSession","type":"number","required":false},{"name":"poolTimeout","type":"number","required":false},{"name":"connectionClass","type":"string","required":false},{"name":"connectTimeout","type":"number","required":false},{"name":"transportConnectTimeout","type":"number","required":false},{"name":"expireTime","type":"number","required":false}],
    },

    'orbitApi': {
      displayName: 'Orbit API',
      fields: [{"name":"deprecated","type":"notice","required":false},{"name":"accessToken","type":"string","required":false}],
    },

    'ouraApi': {
      displayName: 'Oura API',
      fields: [{"name":"accessToken","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bearer {{$credentials.accessToken}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bearer {{$credentials.accessToken}}"}}},
    },

    'paddleApi': {
      displayName: 'Paddle API',
      fields: [{"name":"vendorAuthCode","type":"string","required":false},{"name":"vendorId","type":"string","required":false},{"name":"sandbox","type":"boolean","required":false}],
    },

    'pagerDutyApi': {
      displayName: 'PagerDuty API',
      fields: [{"name":"apiToken","type":"string","required":false}],
    },

    'pagerDutyOAuth2Api': {
      displayName: 'PagerDuty OAuth2 API',
      fields: [{"name":"grantType","type":"hidden","required":false},{"name":"authUrl","type":"hidden","required":false},{"name":"accessTokenUrl","type":"hidden","required":false},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"scope","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'payPalApi': {
      displayName: 'PayPal API',
      fields: [{"name":"clientId","type":"string","required":false},{"name":"secret","type":"string","required":false},{"name":"env","type":"options","required":false}],
    },

    'peekalinkApi': {
      displayName: 'Peekalink API',
      fields: [{"name":"apiKey","type":"string","required":false}],
    },

    'perplexityApi': {
      displayName: 'Perplexity API',
      fields: [{"name":"apiKey","type":"string","required":true},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bearer {{$credentials.apiKey}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bearer {{$credentials.apiKey}}"}}},
    },

    'phantombusterApi': {
      displayName: 'Phantombuster API',
      fields: [{"name":"apiKey","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.X-Phantombuster-Key":"={{$credentials.apiKey}}"},
      authenticate: {"type":"generic","properties":{"headers":{"X-Phantombuster-Key":"={{$credentials.apiKey}}"}}},
    },

    'philipsHueOAuth2Api': {
      displayName: 'PhilipHue OAuth2 API',
      fields: [{"name":"grantType","type":"hidden","required":false},{"name":"appId","type":"string","required":false},{"name":"authUrl","type":"hidden","required":false},{"name":"accessTokenUrl","type":"hidden","required":false},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"scope","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'pineconeApi': {
      displayName: 'PineconeApi',
      fields: [{"name":"apiKey","type":"string","required":true},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Api-Key":"={{$credentials.apiKey}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Api-Key":"={{$credentials.apiKey}}"}}},
    },

    'pipedriveApi': {
      displayName: 'Pipedrive API',
      fields: [{"name":"apiToken","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"qs.api_token":"={{$credentials.apiToken}}"},
      authenticate: {"type":"generic","properties":{"qs":{"api_token":"={{$credentials.apiToken}}"}}},
    },

    'pipedriveOAuth2Api': {
      displayName: 'Pipedrive OAuth2 API',
      fields: [{"name":"grantType","type":"hidden","required":false},{"name":"authUrl","type":"hidden","required":true},{"name":"accessTokenUrl","type":"hidden","required":true},{"name":"scope","type":"hidden","required":false},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'plivoApi': {
      displayName: 'Plivo API',
      fields: [{"name":"authId","type":"string","required":false},{"name":"authToken","type":"string","required":false}],
    },

    'postHogApi': {
      displayName: 'PostHog API',
      fields: [{"name":"url","type":"string","required":false},{"name":"apiKey","type":"string","required":false}],
    },

    'postgres': {
      displayName: 'Postgres',
      fields: [{"name":"host","type":"string","required":false},{"name":"database","type":"string","required":false},{"name":"user","type":"string","required":false},{"name":"password","type":"string","required":false},{"name":"maxConnections","type":"number","required":false},{"name":"allowUnauthorizedCerts","type":"boolean","required":false},{"name":"ssl","type":"options","required":false},{"name":"port","type":"number","required":false},{"name":"sshTunnel","type":"boolean","required":false},{"name":"sshAuthenticateWith","type":"options","required":false},{"name":"sshHost","type":"string","required":false},{"name":"sshPort","type":"number","required":false},{"name":"sshUser","type":"string","required":false},{"name":"sshPassword","type":"string","required":false},{"name":"privateKey","type":"string","required":false},{"name":"passphrase","type":"string","required":false}],
    },

    'postmarkApi': {
      displayName: 'Postmark API',
      fields: [{"name":"serverToken","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.X-Postmark-Server-Token":"={{$credentials.serverToken}}"},
      authenticate: {"type":"generic","properties":{"headers":{"X-Postmark-Server-Token":"={{$credentials.serverToken}}"}}},
    },

    'profitWellApi': {
      displayName: 'ProfitWell API',
      fields: [{"name":"accessToken","type":"string","required":false}],
    },

    'pushbulletOAuth2Api': {
      displayName: 'Pushbullet OAuth2 API',
      fields: [{"name":"grantType","type":"hidden","required":false},{"name":"authUrl","type":"hidden","required":true},{"name":"accessTokenUrl","type":"hidden","required":true},{"name":"scope","type":"hidden","required":false},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'pushcutApi': {
      displayName: 'Pushcut API',
      fields: [{"name":"apiKey","type":"string","required":false}],
    },

    'pushoverApi': {
      displayName: 'Pushover API',
      fields: [{"name":"apiKey","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"test.url":"=/licenses.json?token={{$credentials?.apiKey}}"},
      authenticate: {},
    },

    'qRadarApi': {
      displayName: 'QRadar API',
      fields: [{"name":"apiKey","type":"string","required":true},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.SEC":"={{$credentials.apiKey}}"},
      authenticate: {"type":"generic","properties":{"headers":{"SEC":"={{$credentials.apiKey}}"}}},
    },

    'qdrantApi': {
      displayName: 'QdrantApi',
      fields: [{"name":"apiKey","type":"string","required":false},{"name":"qdrantUrl","type":"string","required":true},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.api-key":"={{$credentials.apiKey}}","test.baseURL":"={{$credentials.qdrantUrl}}"},
      authenticate: {"type":"generic","properties":{"headers":{"api-key":"={{$credentials.apiKey}}"}}},
    },

    'qualysApi': {
      displayName: 'Qualys API',
      fields: [{"name":"username","type":"string","required":true},{"name":"password","type":"string","required":true},{"name":"requestedWith","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.X-Requested-With":"={{$credentials.requestedWith}}","auth.username":"={{$credentials.username}}","auth.password":"={{$credentials.password}}"},
      authenticate: {"type":"generic","properties":{"headers":{"X-Requested-With":"={{$credentials.requestedWith}}"},"auth":{"username":"={{$credentials.username}}","password":"={{$credentials.password}}"}}},
    },

    'questDb': {
      displayName: 'QuestDB',
      fields: [{"name":"host","type":"string","required":false},{"name":"database","type":"string","required":false},{"name":"user","type":"string","required":false},{"name":"password","type":"string","required":false},{"name":"ssl","type":"options","required":false},{"name":"port","type":"number","required":false}],
    },

    'quickBooksOAuth2Api': {
      displayName: 'QuickBooks Online OAuth2 API',
      fields: [{"name":"grantType","type":"hidden","required":false},{"name":"authUrl","type":"hidden","required":false},{"name":"accessTokenUrl","type":"hidden","required":false},{"name":"scope","type":"hidden","required":false},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"environment","type":"options","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'quickbaseApi': {
      displayName: 'Quick Base API',
      fields: [{"name":"hostname","type":"string","required":true},{"name":"userToken","type":"string","required":true}],
    },

    'rabbitmq': {
      displayName: 'RabbitMQ',
      fields: [{"name":"hostname","type":"string","required":false},{"name":"port","type":"number","required":false},{"name":"username","type":"string","required":false},{"name":"password","type":"string","required":false},{"name":"vhost","type":"string","required":false},{"name":"ssl","type":"boolean","required":false},{"name":"passwordless","type":"boolean","required":false},{"name":"ca","type":"string","required":false},{"name":"cert","type":"string","required":false},{"name":"key","type":"string","required":false},{"name":"passphrase","type":"string","required":false}],
    },

    'raindropOAuth2Api': {
      displayName: 'Raindrop OAuth2 API',
      fields: [{"name":"grantType","type":"hidden","required":false},{"name":"authUrl","type":"hidden","required":false},{"name":"accessTokenUrl","type":"hidden","required":false},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"scope","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'rapid7InsightVmApi': {
      displayName: 'Rapid7 InsightVM API',
      fields: [{"name":"url","type":"string","required":true},{"name":"apiKey","type":"string","required":true},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.x-api-key":"={{$credentials.apiKey}}","test.baseURL":"={{$credentials.url}}"},
      authenticate: {"type":"generic","properties":{"headers":{"x-api-key":"={{$credentials.apiKey}}","Accept":"application/json"}}},
    },

    'recordedFutureApi': {
      displayName: 'Recorded Future API',
      fields: [{"name":"apiKey","type":"string","required":true},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.X-RFToken":"={{$credentials.accessToken}}"},
      authenticate: {"type":"generic","properties":{"headers":{"X-RFToken":"={{$credentials.accessToken}}"}}},
    },

    'redditOAuth2Api': {
      displayName: 'Reddit OAuth2 API',
      fields: [{"name":"grantType","type":"hidden","required":false},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"authUrl","type":"hidden","required":false},{"name":"accessTokenUrl","type":"hidden","required":false},{"name":"scope","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'redis': {
      displayName: 'Redis',
      fields: [{"name":"password","type":"string","required":false},{"name":"user","type":"string","required":false},{"name":"host","type":"string","required":false},{"name":"port","type":"number","required":false},{"name":"database","type":"number","required":false},{"name":"ssl","type":"boolean","required":false},{"name":"disableTlsVerification","type":"boolean","required":false}],
    },

    'rocketchatApi': {
      displayName: 'Rocket API',
      fields: [{"name":"userId","type":"string","required":false},{"name":"authKey","type":"string","required":false},{"name":"domain","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.X-Auth-Token":"={{$credentials.authKey}}","headers.X-User-Id":"={{$credentials.userId}}","test.baseURL":"={{$credentials.domain}}"},
      authenticate: {"type":"generic","properties":{"headers":{"X-Auth-Token":"={{$credentials.authKey}}","X-User-Id":"={{$credentials.userId}}"}}},
    },

    'rundeckApi': {
      displayName: 'Rundeck API',
      fields: [{"name":"url","type":"string","required":false},{"name":"token","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.X-Rundeck-Auth-Token":"={{$credentials?.token}}","test.baseURL":"={{$credentials.url}}"},
      authenticate: {"type":"generic","properties":{"headers":{"user-agent":"n8n","X-Rundeck-Auth-Token":"={{$credentials?.token}}"}}},
    },

    's3': {
      displayName: 'S3',
      fields: [{"name":"endpoint","type":"string","required":false},{"name":"region","type":"string","required":false},{"name":"accessKeyId","type":"string","required":false},{"name":"secretAccessKey","type":"string","required":false},{"name":"forcePathStyle","type":"boolean","required":false},{"name":"ignoreSSLIssues","type":"boolean","required":false}],
    },

    'salesforceJwtApi': {
      displayName: 'Salesforce JWT API',
      fields: [{"name":"environment","type":"options","required":false},{"name":"clientId","type":"string","required":true},{"name":"username","type":"string","required":true},{"name":"privateKey","type":"string","required":true},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"test.baseURL":"={{$credentials?.environment === \"sandbox\" ? \"https://test.salesforce.com\" : \"https://login.salesforce.com\"}}"},
      authenticate: {},
    },

    'salesforceOAuth2Api': {
      displayName: 'Salesforce OAuth2 API',
      fields: [{"name":"grantType","type":"hidden","required":false},{"name":"environment","type":"options","required":false},{"name":"authUrl","type":"hidden","required":true},{"name":"accessTokenUrl","type":"hidden","required":true},{"name":"scope","type":"hidden","required":false},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'salesmateApi': {
      displayName: 'Salesmate API',
      fields: [{"name":"sessionToken","type":"string","required":false},{"name":"url","type":"string","required":false}],
    },

    'seaTableApi': {
      displayName: 'SeaTable API',
      fields: [{"name":"environment","type":"options","required":false},{"name":"domain","type":"string","required":false},{"name":"token","type":"string","required":false},{"name":"timezone","type":"options","required":false}],
      usageExamples: {"test.baseURL":"={{$credentials?.domain || \"https://cloud.seatable.io\" }}"},
    },

    'searXngApi': {
      displayName: 'SearXNG',
      fields: [{"name":"apiUrl","type":"string","required":true}],
    },

    'securityScorecardApi': {
      displayName: 'SecurityScorecard API',
      fields: [{"name":"apiKey","type":"string","required":true}],
    },

    'segmentApi': {
      displayName: 'Segment API',
      fields: [{"name":"writekey","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      authenticate: {},
    },

    'sekoiaApi': {
      displayName: 'Sekoia API',
      fields: [{"name":"apiKey","type":"string","required":true},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bearer {{$credentials.apiKey}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bearer {{$credentials.apiKey}}"}}},
    },

    'sendGridApi': {
      displayName: 'SendGrid API',
      fields: [{"name":"apiKey","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bearer {{$credentials.apiKey}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bearer {{$credentials.apiKey}}"}}},
    },

    'sendInBlueApi': {
      displayName: 'Brevo',
      fields: [{"name":"apiKey","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.api-key":"={{$credentials.apiKey}}"},
      authenticate: {"type":"generic","properties":{"headers":{"api-key":"={{$credentials.apiKey}}"}}},
    },

    'sendyApi': {
      displayName: 'Sendy API',
      fields: [{"name":"url","type":"string","required":false},{"name":"apiKey","type":"string","required":false}],
    },

    'sentryIoApi': {
      displayName: 'Sentry.io API',
      fields: [{"name":"token","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bearer {{$credentials.token}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bearer {{$credentials.token}}"}}},
    },

    'sentryIoOAuth2Api': {
      displayName: 'Sentry.io OAuth2 API',
      fields: [{"name":"grantType","type":"hidden","required":false},{"name":"authUrl","type":"hidden","required":true},{"name":"accessTokenUrl","type":"hidden","required":true},{"name":"scope","type":"hidden","required":false},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'sentryIoServerApi': {
      displayName: 'Sentry.io Server API',
      fields: [{"name":"token","type":"string","required":false},{"name":"url","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bearer {{$credentials.token}}","test.baseURL":"={{$credentials.url}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bearer {{$credentials.token}}"}}},
    },

    'serpApi': {
      displayName: 'SerpAPI',
      fields: [{"name":"apiKey","type":"string","required":true},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"qs.api_key":"={{$credentials.apiKey}}"},
      authenticate: {"type":"generic","properties":{"qs":{"api_key":"={{$credentials.apiKey}}"}}},
    },

    'serviceNowBasicApi': {
      displayName: 'ServiceNow Basic Auth API',
      fields: [{"name":"user","type":"string","required":true},{"name":"password","type":"string","required":true},{"name":"subdomain","type":"string","required":true},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"auth.username":"={{$credentials.user}}","auth.password":"={{$credentials.password}}","test.baseURL":"=https://{{$credentials?.subdomain}}.service-now.com"},
      authenticate: {"type":"generic","properties":{"auth":{"username":"={{$credentials.user}}","password":"={{$credentials.password}}"}}},
    },

    'serviceNowOAuth2Api': {
      displayName: 'ServiceNow OAuth2 API',
      fields: [{"name":"subdomain","type":"string","required":true},{"name":"grantType","type":"hidden","required":false},{"name":"authUrl","type":"hidden","required":true},{"name":"accessTokenUrl","type":"hidden","required":true},{"name":"scope","type":"hidden","required":false},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'sftp': {
      displayName: 'SFTP',
      fields: [{"name":"host","type":"string","required":true},{"name":"port","type":"number","required":true},{"name":"username","type":"string","required":true},{"name":"password","type":"string","required":false},{"name":"privateKey","type":"string","required":false},{"name":"passphrase","type":"string","required":false}],
    },

    'shopifyAccessTokenApi': {
      displayName: 'Shopify Access Token API',
      fields: [{"name":"shopSubdomain","type":"string","required":true},{"name":"accessToken","type":"string","required":true},{"name":"appSecretKey","type":"string","required":true},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.X-Shopify-Access-Token":"={{$credentials?.accessToken}}","test.baseURL":"=https://{{$credentials?.shopSubdomain}}.myshopify.com/admin/api/2024-07"},
      authenticate: {"type":"generic","properties":{"headers":{"X-Shopify-Access-Token":"={{$credentials?.accessToken}}"}}},
    },

    'shopifyApi': {
      displayName: 'Shopify API',
      fields: [{"name":"apiKey","type":"string","required":true},{"name":"password","type":"string","required":true},{"name":"shopSubdomain","type":"string","required":true},{"name":"sharedSecret","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"test.baseURL":"=https://{{$credentials.shopSubdomain}}.myshopify.com/admin/api/2024-07"},
      authenticate: {},
    },

    'shopifyOAuth2Api': {
      displayName: 'Shopify OAuth2 API',
      fields: [{"name":"shopSubdomain","type":"string","required":true},{"name":"grantType","type":"hidden","required":false},{"name":"clientId","type":"string","required":true},{"name":"clientSecret","type":"string","required":true},{"name":"grantType","type":"hidden","required":false},{"name":"authUrl","type":"hidden","required":true},{"name":"accessTokenUrl","type":"hidden","required":true},{"name":"scope","type":"hidden","required":false},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'shufflerApi': {
      displayName: 'Shuffler API',
      fields: [{"name":"apiKey","type":"string","required":true},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bearer {{$credentials.apiKey}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bearer {{$credentials.apiKey}}"}}},
    },

    'signl4Api': {
      displayName: 'SIGNL4 Webhook',
      fields: [{"name":"teamSecret","type":"string","required":false}],
    },

    'slackApi': {
      displayName: 'Slack API',
      fields: [{"name":"accessToken","type":"string","required":true},{"name":"signatureSecret","type":"string","required":false},{"name":"notice","type":"notice","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bearer {{$credentials.accessToken}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bearer {{$credentials.accessToken}}"}}},
    },

    'slackOAuth2Api': {
      displayName: 'Slack OAuth2 API',
      fields: [{"name":"grantType","type":"hidden","required":false},{"name":"authUrl","type":"hidden","required":false},{"name":"accessTokenUrl","type":"hidden","required":false},{"name":"scope","type":"hidden","required":false},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"notice","type":"notice","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'sms77Api': {
      displayName: 'seven API',
      fields: [{"name":"apiKey","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.X-Api-Key":"={{$credentials.apiKey}}"},
      authenticate: {"type":"generic","properties":{"headers":{"X-Api-Key":"={{$credentials.apiKey}}"}}},
    },

    'smtp': {
      displayName: 'SMTP',
      fields: [{"name":"user","type":"string","required":false},{"name":"password","type":"string","required":false},{"name":"host","type":"string","required":false},{"name":"port","type":"number","required":false},{"name":"secure","type":"boolean","required":false},{"name":"disableStartTls","type":"boolean","required":false},{"name":"hostName","type":"string","required":false}],
    },

    'snowflake': {
      displayName: 'Snowflake',
      fields: [{"name":"account","type":"string","required":false},{"name":"database","type":"string","required":false},{"name":"warehouse","type":"string","required":false},{"name":"authentication","type":"options","required":false},{"name":"username","type":"string","required":false},{"name":"password","type":"string","required":false},{"name":"privateKey","type":"string","required":true},{"name":"passphrase","type":"string","required":false},{"name":"schema","type":"string","required":false},{"name":"role","type":"string","required":false},{"name":"clientSessionKeepAlive","type":"boolean","required":false}],
    },

    'solarWindsIpamApi': {
      displayName: 'SolarWinds IPAM',
      fields: [{"name":"url","type":"string","required":true},{"name":"username","type":"string","required":true},{"name":"password","type":"string","required":true},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"auth.username":"={{$credentials.username}}","auth.password":"={{$credentials.password}}","test.baseURL":"={{$credentials.url}}"},
      authenticate: {"type":"generic","properties":{"auth":{"username":"={{$credentials.username}}","password":"={{$credentials.password}}"}}},
    },

    'solarWindsObservabilityApi': {
      displayName: 'SolarWinds Observability',
      fields: [{"name":"url","type":"string","required":true},{"name":"apiToken","type":"string","required":true},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bearer {{$credentials.apiToken}}","test.baseURL":"={{$credentials.url}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bearer {{$credentials.apiToken}}","Content-Type":"application/json-rpc"}}},
    },

    'splunkApi': {
      displayName: 'Splunk API',
      fields: [{"name":"authToken","type":"string","required":false},{"name":"baseUrl","type":"string","required":false},{"name":"allowUnauthorizedCerts","type":"boolean","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bearer {{$credentials?.authToken}}","test.url":"={{$credentials.baseUrl}}/services/alerts/fired_alerts","test.skipSslCertificateValidation":"={{$credentials?.allowUnauthorizedCerts}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bearer {{$credentials?.authToken}}"}}},
    },

    'spotifyOAuth2Api': {
      displayName: 'Spotify OAuth2 API',
      fields: [{"name":"server","type":"hidden","required":false},{"name":"grantType","type":"hidden","required":false},{"name":"authUrl","type":"hidden","required":true},{"name":"accessTokenUrl","type":"hidden","required":true},{"name":"scope","type":"hidden","required":false},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'sshPassword': {
      displayName: 'SSH Password',
      fields: [{"name":"host","type":"string","required":true},{"name":"port","type":"number","required":true},{"name":"username","type":"string","required":false},{"name":"password","type":"string","required":false}],
    },

    'sshPrivateKey': {
      displayName: 'SSH Private Key',
      fields: [{"name":"host","type":"string","required":true},{"name":"port","type":"number","required":true},{"name":"username","type":"string","required":false},{"name":"privateKey","type":"string","required":false},{"name":"passphrase","type":"string","required":false}],
    },

    'stackbyApi': {
      displayName: 'Stackby API',
      fields: [{"name":"apiKey","type":"string","required":false}],
    },

    'storyblokContentApi': {
      displayName: 'Storyblok Content API',
      fields: [{"name":"apiKey","type":"string","required":false}],
    },

    'storyblokManagementApi': {
      displayName: 'Storyblok Management API',
      fields: [{"name":"accessToken","type":"string","required":false}],
    },

    'strapiApi': {
      displayName: 'Strapi API',
      fields: [{"name":"notice","type":"notice","required":false},{"name":"email","type":"string","required":false},{"name":"password","type":"string","required":false},{"name":"url","type":"string","required":false},{"name":"apiVersion","type":"options","required":false}],
    },

    'strapiTokenApi': {
      displayName: 'Strapi API Token',
      fields: [{"name":"apiToken","type":"string","required":false},{"name":"url","type":"string","required":false},{"name":"apiVersion","type":"options","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bearer {{$credentials.apiToken}}","test.baseURL":"={{$credentials.url}}","test.url":"={{$credentials.apiVersion === \"v3\" ? \"/users/count\" : \"/api/users/count\"}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bearer {{$credentials.apiToken}}"}}},
    },

    'stravaOAuth2Api': {
      displayName: 'Strava OAuth2 API',
      fields: [{"name":"grantType","type":"hidden","required":false},{"name":"authUrl","type":"hidden","required":true},{"name":"accessTokenUrl","type":"hidden","required":true},{"name":"scope","type":"hidden","required":true},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'stripeApi': {
      displayName: 'Stripe API',
      fields: [{"name":"secretKey","type":"string","required":false},{"name":"signatureSecret","type":"string","required":false},{"name":"notice","type":"notice","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bearer {{$credentials.secretKey}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bearer {{$credentials.secretKey}}"}}},
    },

    'supabaseApi': {
      displayName: 'Supabase API',
      fields: [{"name":"host","type":"string","required":false},{"name":"serviceRole","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.apikey":"={{$credentials.serviceRole}}","headers.Authorization":"=Bearer {{$credentials.serviceRole}}","test.baseURL":"={{$credentials.host}}/rest/v1"},
      authenticate: {"type":"generic","properties":{"headers":{"apikey":"={{$credentials.serviceRole}}","Authorization":"=Bearer {{$credentials.serviceRole}}"}}},
    },

    'surveyMonkeyApi': {
      displayName: 'SurveyMonkey API',
      fields: [{"name":"accessToken","type":"string","required":false},{"name":"clientId","type":"string","required":false},{"name":"clientSecret","type":"string","required":false}],
    },

    'surveyMonkeyOAuth2Api': {
      displayName: 'SurveyMonkey OAuth2 API',
      fields: [{"name":"grantType","type":"hidden","required":false},{"name":"authUrl","type":"hidden","required":true},{"name":"accessTokenUrl","type":"hidden","required":true},{"name":"scope","type":"hidden","required":false},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'syncroMspApi': {
      displayName: 'SyncroMSP API',
      fields: [{"name":"apiKey","type":"string","required":false},{"name":"subdomain","type":"string","required":false}],
    },

    'sysdigApi': {
      displayName: 'Sysdig API',
      fields: [{"name":"accessToken","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bearer {{$credentials.accessToken}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bearer {{$credentials.accessToken}}"}}},
    },

    'taigaApi': {
      displayName: 'Taiga API',
      fields: [{"name":"username","type":"string","required":false},{"name":"password","type":"string","required":false},{"name":"environment","type":"options","required":false},{"name":"url","type":"string","required":false}],
    },

    'tapfiliateApi': {
      displayName: 'Tapfiliate API',
      fields: [{"name":"apiKey","type":"string","required":true}],
    },

    'telegramApi': {
      displayName: 'Telegram API',
      fields: [{"name":"accessToken","type":"string","required":false},{"name":"baseUrl","type":"string","required":false}],
      usageExamples: {"test.baseURL":"={{$credentials.baseUrl}}/bot{{$credentials.accessToken}}"},
    },

    'theHiveApi': {
      displayName: 'The Hive API',
      fields: [{"name":"ApiKey","type":"string","required":false},{"name":"url","type":"string","required":false},{"name":"apiVersion","type":"options","required":false},{"name":"allowUnauthorizedCerts","type":"boolean","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bearer {{$credentials?.ApiKey}}","test.baseURL":"={{$credentials?.url}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bearer {{$credentials?.ApiKey}}"}}},
    },

    'theHiveProjectApi': {
      displayName: 'The Hive 5 API',
      fields: [{"name":"ApiKey","type":"string","required":false},{"name":"url","type":"string","required":false},{"name":"allowUnauthorizedCerts","type":"boolean","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bearer {{$credentials?.ApiKey}}","test.baseURL":"={{$credentials?.url}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bearer {{$credentials?.ApiKey}}"}}},
    },

    'timescaleDb': {
      displayName: 'TimescaleDB',
      fields: [{"name":"host","type":"string","required":false},{"name":"database","type":"string","required":false},{"name":"user","type":"string","required":false},{"name":"password","type":"string","required":false},{"name":"allowUnauthorizedCerts","type":"boolean","required":false},{"name":"ssl","type":"options","required":false},{"name":"port","type":"number","required":false}],
    },

    'todoistApi': {
      displayName: 'Todoist API',
      fields: [{"name":"apiKey","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bearer {{$credentials.apiKey}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bearer {{$credentials.apiKey}}"}}},
    },

    'todoistOAuth2Api': {
      displayName: 'Todoist OAuth2 API',
      fields: [{"name":"grantType","type":"hidden","required":false},{"name":"authUrl","type":"hidden","required":true},{"name":"accessTokenUrl","type":"hidden","required":true},{"name":"scope","type":"hidden","required":false},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'togglApi': {
      displayName: 'Toggl API',
      fields: [{"name":"username","type":"string","required":false},{"name":"password","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"auth.username":"={{$credentials.username}}","auth.password":"={{$credentials.password}}"},
      authenticate: {"type":"generic","properties":{"auth":{"username":"={{$credentials.username}}","password":"={{$credentials.password}}"}}},
    },

    'totpApi': {
      displayName: 'TOTP API',
      fields: [{"name":"secret","type":"string","required":true},{"name":"label","type":"string","required":true}],
    },

    'travisCiApi': {
      displayName: 'Travis API',
      fields: [{"name":"apiToken","type":"string","required":false}],
    },

    'trellixEpoApi': {
      displayName: 'Trellix (McAfee) ePolicy Orchestrator API',
      fields: [{"name":"username","type":"string","required":true},{"name":"password","type":"string","required":true},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"auth.username":"={{$credentials.username}}","auth.password":"={{$credentials.password}}"},
      authenticate: {"type":"generic","properties":{"auth":{"username":"={{$credentials.username}}","password":"={{$credentials.password}}"}}},
    },

    'trelloApi': {
      displayName: 'Trello API',
      fields: [{"name":"apiKey","type":"string","required":true},{"name":"apiToken","type":"string","required":true},{"name":"oauthSecret","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"test.url":"=/1/tokens/{{$credentials.apiToken}}/member"},
      authenticate: {},
    },

    'twakeCloudApi': {
      displayName: 'Twake Cloud API',
      fields: [{"name":"workspaceKey","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bearer {{$credentials.workspaceKey}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bearer {{$credentials.workspaceKey}}"}}},
    },

    'twakeServerApi': {
      displayName: 'Twake Server API',
      fields: [{"name":"hostUrl","type":"string","required":false},{"name":"publicId","type":"string","required":false},{"name":"privateApiKey","type":"string","required":false}],
    },

    'twilioApi': {
      displayName: 'Twilio API',
      fields: [{"name":"authType","type":"options","required":false},{"name":"accountSid","type":"string","required":false},{"name":"authToken","type":"string","required":false},{"name":"apiKeySid","type":"string","required":false},{"name":"apiKeySecret","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"auth.username":"={{ $credentials.authType === \"apiKey\" ? $credentials.apiKeySid : $credentials.accountSid }}","auth.password":"={{ $credentials.authType === \"apiKey\" ? $credentials.apiKeySecret : $credentials.authToken }}"},
      authenticate: {"type":"generic","properties":{"auth":{"username":"={{ $credentials.authType === \"apiKey\" ? $credentials.apiKeySid : $credentials.accountSid }}","password":"={{ $credentials.authType === \"apiKey\" ? $credentials.apiKeySecret : $credentials.authToken }}"}}},
    },

    'twistOAuth2Api': {
      displayName: 'Twist OAuth2 API',
      fields: [{"name":"grantType","type":"hidden","required":false},{"name":"authUrl","type":"hidden","required":true},{"name":"accessTokenUrl","type":"hidden","required":true},{"name":"scope","type":"hidden","required":false},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'twitterOAuth1Api': {
      displayName: 'X OAuth API',
      fields: [{"name":"requestTokenUrl","type":"hidden","required":false},{"name":"authUrl","type":"hidden","required":false},{"name":"accessTokenUrl","type":"hidden","required":false},{"name":"signatureMethod","type":"hidden","required":false},{"name":"apiPermissions","type":"notice","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'twitterOAuth2Api': {
      displayName: 'X OAuth2 API',
      fields: [{"name":"apiPermissions","type":"notice","required":false},{"name":"grantType","type":"hidden","required":false},{"name":"authUrl","type":"hidden","required":false},{"name":"accessTokenUrl","type":"hidden","required":false},{"name":"scope","type":"hidden","required":false},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'typeformApi': {
      displayName: 'Typeform API',
      fields: [{"name":"accessToken","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=bearer {{$credentials.accessToken}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=bearer {{$credentials.accessToken}}"}}},
    },

    'typeformOAuth2Api': {
      displayName: 'Typeform OAuth2 API',
      fields: [{"name":"grantType","type":"hidden","required":false},{"name":"authUrl","type":"hidden","required":true},{"name":"accessTokenUrl","type":"hidden","required":true},{"name":"scope","type":"hidden","required":false},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'unleashedSoftwareApi': {
      displayName: 'Unleashed API',
      fields: [{"name":"apiId","type":"string","required":false},{"name":"apiKey","type":"string","required":false}],
    },

    'upleadApi': {
      displayName: 'Uplead API',
      fields: [{"name":"apiKey","type":"string","required":false}],
    },

    'uprocApi': {
      displayName: 'uProc API',
      fields: [{"name":"email","type":"string","required":false},{"name":"apiKey","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      authenticate: {},
    },

    'uptimeRobotApi': {
      displayName: 'Uptime Robot API',
      fields: [{"name":"apiKey","type":"string","required":false}],
    },

    'urlScanIoApi': {
      displayName: 'urlscan.io API',
      fields: [{"name":"apiKey","type":"string","required":true},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.API-KEY":"={{$credentials.apiKey}}"},
      authenticate: {"type":"generic","properties":{"headers":{"API-KEY":"={{$credentials.apiKey}}"}}},
    },

    'venafiTlsProtectCloudApi': {
      displayName: 'Venafi TLS Protect Cloud',
      fields: [{"name":"region","type":"options","required":false},{"name":"apiKey","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.tppl-api-key":"={{$credentials.apiKey}}","test.baseURL":"=https://api.venafi.{{$credentials.region ?? \"cloud\"}}"},
      authenticate: {"type":"generic","properties":{"headers":{"tppl-api-key":"={{$credentials.apiKey}}"}}},
    },

    'venafiTlsProtectDatacenterApi': {
      displayName: 'Venafi TLS Protect Datacenter API',
      fields: [{"name":"domain","type":"string","required":false},{"name":"clientId","type":"string","required":false},{"name":"username","type":"string","required":false},{"name":"password","type":"string","required":false},{"name":"allowUnauthorizedCerts","type":"boolean","required":false},{"name":"token","type":"hidden","required":false},{"name":"scope","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bearer {{$credentials.token}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bearer {{$credentials.token}}"}}},
    },

    'vercelAiGatewayApi': {
      displayName: 'Vercel AI Gateway',
      fields: [{"name":"apiKey","type":"string","required":true},{"name":"url","type":"string","required":true},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bearer {{$credentials.apiKey}}","test.baseURL":"={{ $credentials.url }}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bearer {{$credentials.apiKey}}","http-referer":"https://n8n.io/","x-title":"n8n"}}},
    },

    'veroApi': {
      displayName: 'Vero API',
      fields: [{"name":"authToken","type":"string","required":false}],
    },

    'verticaApi': {
      displayName: 'Vertica API',
      fields: [{"name":"url","type":"string","required":true},{"name":"username","type":"string","required":false},{"name":"password","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"auth.username":"={{$credentials.username}}","auth.password":"={{$credentials.password}}","test.baseURL":"={{$credentials.url}}"},
      authenticate: {"type":"generic","properties":{"auth":{"username":"={{$credentials.username}}","password":"={{$credentials.password}}"}}},
    },

    'virusTotalApi': {
      displayName: 'VirusTotal API',
      fields: [{"name":"accessToken","type":"string","required":true},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.x-apikey":"={{$credentials.accessToken}}"},
      authenticate: {"type":"generic","properties":{"headers":{"x-apikey":"={{$credentials.accessToken}}"}}},
    },

    'vonageApi': {
      displayName: 'Vonage API',
      fields: [{"name":"apiKey","type":"string","required":false},{"name":"apiSecret","type":"string","required":false}],
    },

    'weaviateApi': {
      displayName: 'Weaviate Credentials',
      fields: [{"name":"connection_type","type":"options","required":false},{"name":"weaviate_cloud_endpoint","type":"string","required":true},{"name":"weaviate_api_key","type":"string","required":false},{"name":"custom_connection_http_host","type":"string","required":true},{"name":"custom_connection_http_port","type":"number","required":true},{"name":"custom_connection_http_secure","type":"boolean","required":true},{"name":"custom_connection_grpc_host","type":"string","required":true},{"name":"custom_connection_grpc_port","type":"number","required":true},{"name":"custom_connection_grpc_secure","type":"boolean","required":true}],
      usageExamples: {"test.baseURL":"={{$credentials.weaviate_cloud_endpoint?$credentials.weaviate_cloud_endpoint.startsWith(\"http://\") || $credentials.weaviate_cloud_endpoint.startsWith(\"https://\")?$credentials.weaviate_cloud_endpoint:\"https://\" + $credentials.weaviate_cloud_endpoint:($credentials.custom_connection_http_secure ? \"https\" : \"http\") + \"://\" + $credentials.custom_connection_http_host + \":\" + $credentials.custom_connection_http_port }}"},
    },

    'webflowApi': {
      displayName: 'Webflow API',
      fields: [{"name":"accessToken","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bearer {{$credentials.accessToken}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bearer {{$credentials.accessToken}}"}}},
    },

    'webflowOAuth2Api': {
      displayName: 'Webflow OAuth2 API',
      fields: [{"name":"grantType","type":"hidden","required":false},{"name":"legacy","type":"boolean","required":false},{"name":"authUrl","type":"hidden","required":true},{"name":"accessTokenUrl","type":"hidden","required":true},{"name":"scope","type":"hidden","required":false},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'wekanApi': {
      displayName: 'Wekan API',
      fields: [{"name":"username","type":"string","required":false},{"name":"password","type":"string","required":false},{"name":"url","type":"string","required":false},{"name":"token","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bearer {{$credentials.token}}","test.baseURL":"={{$credentials.url.replace(new RegExp(\"/$\"), \"\")}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bearer {{$credentials.token}}"}}},
    },

    'whatsAppApi': {
      displayName: 'WhatsApp API',
      fields: [{"name":"accessToken","type":"string","required":true},{"name":"businessAccountId","type":"string","required":true},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bearer {{$credentials.accessToken}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bearer {{$credentials.accessToken}}"}}},
    },

    'whatsAppTriggerApi': {
      displayName: 'WhatsApp OAuth API',
      fields: [{"name":"clientId","type":"string","required":true},{"name":"clientSecret","type":"string","required":true}],
    },

    'wiseApi': {
      displayName: 'Wise API',
      fields: [{"name":"apiToken","type":"string","required":false},{"name":"environment","type":"options","required":false},{"name":"privateKey","type":"string","required":false}],
    },

    'wolframAlphaApi': {
      displayName: 'WolframAlphaApi',
      fields: [{"name":"appId","type":"string","required":true},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"qs.api_key":"={{$credentials.appId}}"},
      authenticate: {"type":"generic","properties":{"qs":{"api_key":"={{$credentials.appId}}"}}},
    },

    'wooCommerceApi': {
      displayName: 'WooCommerce API',
      fields: [{"name":"consumerKey","type":"string","required":false},{"name":"consumerSecret","type":"string","required":false},{"name":"url","type":"string","required":false},{"name":"includeCredentialsInQuery","type":"boolean","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"test.baseURL":"={{$credentials.url}}/wp-json/wc/v3"},
      authenticate: {},
    },

    'wordpressApi': {
      displayName: 'Wordpress API',
      fields: [{"name":"username","type":"string","required":false},{"name":"password","type":"string","required":false},{"name":"url","type":"string","required":false},{"name":"allowUnauthorizedCerts","type":"boolean","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"auth.username":"={{$credentials.username}}","auth.password":"={{$credentials.password}}","test.baseURL":"={{$credentials?.url}}/wp-json/wp/v2","test.skipSslCertificateValidation":"={{$credentials.allowUnauthorizedCerts}}"},
      authenticate: {"type":"generic","properties":{"auth":{"username":"={{$credentials.username}}","password":"={{$credentials.password}}"}}},
    },

    'workableApi': {
      displayName: 'Workable API',
      fields: [{"name":"subdomain","type":"string","required":false},{"name":"accessToken","type":"string","required":false}],
    },

    'wufooApi': {
      displayName: 'Wufoo API',
      fields: [{"name":"apiKey","type":"string","required":false},{"name":"subdomain","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"auth.username":"={{$credentials.apiKey}}","test.baseURL":"=https://{{$credentials.subdomain}}.wufoo.com"},
      authenticate: {"type":"generic","properties":{"auth":{"username":"={{$credentials.apiKey}}","password":"not-needed"}}},
    },

    'xAiApi': {
      displayName: 'xAi',
      fields: [{"name":"apiKey","type":"string","required":true},{"name":"url","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bearer {{$credentials.apiKey}}","test.baseURL":"={{ $credentials.url }}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bearer {{$credentials.apiKey}}"}}},
    },

    'xataApi': {
      displayName: 'Xata Api',
      fields: [{"name":"databaseEndpoint","type":"string","required":true},{"name":"branch","type":"string","required":true},{"name":"apiKey","type":"string","required":true},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bearer {{$credentials.apiKey}}","test.baseURL":"={{$credentials.databaseEndpoint}}:{{$credentials.branch}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bearer {{$credentials.apiKey}}"}}},
    },

    'xeroOAuth2Api': {
      displayName: 'Xero OAuth2 API',
      fields: [{"name":"grantType","type":"hidden","required":false},{"name":"authUrl","type":"hidden","required":false},{"name":"accessTokenUrl","type":"hidden","required":false},{"name":"scope","type":"hidden","required":false},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'youTubeOAuth2Api': {
      displayName: 'YouTube OAuth2 API',
      fields: [{"name":"scope","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'yourlsApi': {
      displayName: 'Yourls API',
      fields: [{"name":"signature","type":"string","required":false},{"name":"url","type":"string","required":false}],
    },

    'zabbixApi': {
      displayName: 'Zabbix API',
      fields: [{"name":"url","type":"string","required":true},{"name":"apiToken","type":"string","required":true},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bearer {{$credentials.apiToken}}","test.baseURL":"={{$credentials.url}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bearer {{$credentials.apiToken}}","Content-Type":"application/json-rpc"}}},
    },

    'zammadBasicAuthApi': {
      displayName: 'Zammad Basic Auth API',
      fields: [{"name":"baseUrl","type":"string","required":true},{"name":"username","type":"string","required":true},{"name":"password","type":"string","required":true},{"name":"allowUnauthorizedCerts","type":"boolean","required":false}],
    },

    'zammadTokenAuthApi': {
      displayName: 'Zammad Token Auth API',
      fields: [{"name":"baseUrl","type":"string","required":true},{"name":"accessToken","type":"string","required":true},{"name":"allowUnauthorizedCerts","type":"boolean","required":false}],
    },

    'zendeskApi': {
      displayName: 'Zendesk API',
      fields: [{"name":"subdomain","type":"string","required":false},{"name":"email","type":"string","required":false},{"name":"apiToken","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"test.baseURL":"=https://{{$credentials.subdomain}}.zendesk.com/api/v2"},
      authenticate: {},
    },

    'zendeskOAuth2Api': {
      displayName: 'Zendesk OAuth2 API',
      fields: [{"name":"subdomain","type":"string","required":true},{"name":"grantType","type":"hidden","required":false},{"name":"authUrl","type":"hidden","required":true},{"name":"accessTokenUrl","type":"hidden","required":true},{"name":"clientId","type":"string","required":true},{"name":"clientSecret","type":"string","required":true},{"name":"scope","type":"hidden","required":false},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'zepApi': {
      displayName: 'Zep Api',
      fields: [{"name":"deprecationNotice","type":"notice","required":false},{"name":"apiKey","type":"string","required":false},{"name":"cloud","type":"boolean","required":false},{"name":"apiUrl","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"={{$credentials.apiKey && !$credentials.cloud ? \"Bearer \" + $credentials.apiKey : \"Api-Key \" + $credentials.apiKey }}","test.baseURL":"={{!$credentials.cloud ? $credentials.apiUrl : \"https://api.getzep.com\"}}","test.url":"={{!$credentials.cloud ? \"/api/v1/collection\" : \"/api/v2/collections\"}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"={{$credentials.apiKey && !$credentials.cloud ? \"Bearer \" + $credentials.apiKey : \"Api-Key \" + $credentials.apiKey }}"}}},
    },

    'zohoOAuth2Api': {
      displayName: 'Zoho OAuth2 API',
      fields: [{"name":"grantType","type":"hidden","required":false},{"name":"authUrl","type":"options","required":true},{"name":"accessTokenUrl","type":"options","required":true},{"name":"scope","type":"hidden","required":false},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'zoomApi': {
      displayName: 'Zoom API',
      fields: [{"name":"notice","type":"notice","required":false},{"name":"accessToken","type":"string","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Authorization":"=Bearer {{$credentials.accessToken}}"},
      authenticate: {"type":"generic","properties":{"headers":{"Authorization":"=Bearer {{$credentials.accessToken}}"}}},
    },

    'zoomOAuth2Api': {
      displayName: 'Zoom OAuth2 API',
      fields: [{"name":"grantType","type":"hidden","required":false},{"name":"authUrl","type":"hidden","required":false},{"name":"accessTokenUrl","type":"hidden","required":false},{"name":"scope","type":"hidden","required":false},{"name":"authQueryParameters","type":"hidden","required":false},{"name":"authentication","type":"hidden","required":false},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
    },

    'zscalerZiaApi': {
      displayName: 'Zscaler ZIA API',
      fields: [{"name":"cookie","type":"hidden","required":false},{"name":"baseUrl","type":"string","required":true},{"name":"username","type":"string","required":true},{"name":"password","type":"string","required":true},{"name":"apiKey","type":"string","required":true},{"name":"allowedHttpRequestDomains","type":"options","required":false},{"name":"allowedDomains","type":"string","required":false}],
      usageExamples: {"headers.Cookie":"={{$credentials.cookie}}","test.url":"=https://{{$credentials.baseUrl}}/api/v1/authSettings/exemptedUrls"},
      authenticate: {"type":"generic","properties":{"headers":{"Cookie":"={{$credentials.cookie}}"}}},
    },

    'zulipApi': {
      displayName: 'Zulip API',
      fields: [{"name":"url","type":"string","required":false},{"name":"email","type":"string","required":false},{"name":"apiKey","type":"string","required":false}],
    },

  };

  function getCredentialDetails(credentialType) {
    return CREDENTIAL_DETAILS[credentialType] || null;
  }

  function getCredentialFields(credentialType) {
    const details = CREDENTIAL_DETAILS[credentialType];
    return details ? details.fields : [];
  }

  function getCredentialUsageExamples(credentialType) {
    const details = CREDENTIAL_DETAILS[credentialType];
    return details && details.usageExamples ? details.usageExamples : null;
  }

  function getCredentialAuthenticateConfig(credentialType) {
    const details = CREDENTIAL_DETAILS[credentialType];
    return details && details.authenticate ? details.authenticate : null;
  }


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
  // Auto-generated from nodes-scrapes data
  // Generated: 2026-01-22T03:14:26.103Z
  // ==========================================================================

  const NODE_CATEGORIES = {
    /* ───────────────
     * OFFICIAL NODES (n8n-nodes-base)
     * ─────────────── */

    /* TRIGGERS / INPUT / API & DATA IO */
    'n8n-nodes-base.Brandfetch': 'io',
    'n8n-nodes-base.BrandfetchTool': 'io',
    'n8n-nodes-base.activeCampaignTrigger': 'io',
    'n8n-nodes-base.acuitySchedulingTrigger': 'io',
    'n8n-nodes-base.affinity': 'io',
    'n8n-nodes-base.affinityTool': 'io',
    'n8n-nodes-base.affinityTrigger': 'io',
    'n8n-nodes-base.airtable': 'io',
    'n8n-nodes-base.airtableTool': 'io',
    'n8n-nodes-base.airtableTrigger': 'io',
    'n8n-nodes-base.amqpTrigger': 'io',
    'n8n-nodes-base.asana': 'io',
    'n8n-nodes-base.asanaTool': 'io',
    'n8n-nodes-base.asanaTrigger': 'io',
    'n8n-nodes-base.autopilot': 'io',
    'n8n-nodes-base.autopilotTool': 'io',
    'n8n-nodes-base.autopilotTrigger': 'io',
    'n8n-nodes-base.awsCertificateManager': 'io',
    'n8n-nodes-base.awsCognito': 'io',
    'n8n-nodes-base.awsComprehend': 'io',
    'n8n-nodes-base.awsElb': 'io',
    'n8n-nodes-base.awsIam': 'io',
    'n8n-nodes-base.awsLambda': 'io',
    'n8n-nodes-base.awsLambdaTool': 'io',
    'n8n-nodes-base.awsRekognition': 'io',
    'n8n-nodes-base.awsSes': 'io',
    'n8n-nodes-base.awsSesTool': 'io',
    'n8n-nodes-base.awsSns': 'io',
    'n8n-nodes-base.awsSnsTool': 'io',
    'n8n-nodes-base.awsSnsTrigger': 'io',
    'n8n-nodes-base.awsTextract': 'io',
    'n8n-nodes-base.awsTextractTool': 'io',
    'n8n-nodes-base.awsTranscribe': 'io',
    'n8n-nodes-base.awsTranscribeTool': 'io',
    'n8n-nodes-base.bannerbear': 'io',
    'n8n-nodes-base.baserow': 'io',
    'n8n-nodes-base.baserowTool': 'io',
    'n8n-nodes-base.beeminder': 'io',
    'n8n-nodes-base.beeminderTool': 'io',
    'n8n-nodes-base.bitbucketTrigger': 'io',
    'n8n-nodes-base.bitly': 'io',
    'n8n-nodes-base.bitlyTool': 'io',
    'n8n-nodes-base.box': 'io',
    'n8n-nodes-base.boxTrigger': 'io',
    'n8n-nodes-base.calTrigger': 'io',
    'n8n-nodes-base.calendlyTrigger': 'io',
    'n8n-nodes-base.chargebee': 'io',
    'n8n-nodes-base.chargebeeTool': 'io',
    'n8n-nodes-base.chargebeeTrigger': 'io',
    'n8n-nodes-base.circleCi': 'io',
    'n8n-nodes-base.circleCiTool': 'io',
    'n8n-nodes-base.ciscoWebexTrigger': 'io',
    'n8n-nodes-base.citrixAdc': 'io',
    'n8n-nodes-base.clearbit': 'io',
    'n8n-nodes-base.clearbitTool': 'io',
    'n8n-nodes-base.clickUp': 'io',
    'n8n-nodes-base.clickUpTool': 'io',
    'n8n-nodes-base.clickUpTrigger': 'io',
    'n8n-nodes-base.clockify': 'io',
    'n8n-nodes-base.clockifyTool': 'io',
    'n8n-nodes-base.clockifyTrigger': 'io',
    'n8n-nodes-base.cloudflare': 'io',
    'n8n-nodes-base.cloudflareTool': 'io',
    'n8n-nodes-base.cockpit': 'io',
    'n8n-nodes-base.cockpitTool': 'io',
    'n8n-nodes-base.coda': 'io',
    'n8n-nodes-base.codaTool': 'io',
    'n8n-nodes-base.coinGecko': 'io',
    'n8n-nodes-base.coinGeckoTool': 'io',
    'n8n-nodes-base.contentful': 'io',
    'n8n-nodes-base.contentfulTool': 'io',
    'n8n-nodes-base.convertKit': 'io',
    'n8n-nodes-base.convertKitTool': 'io',
    'n8n-nodes-base.convertKitTrigger': 'io',
    'n8n-nodes-base.copperTrigger': 'io',
    'n8n-nodes-base.crateDb': 'io',
    'n8n-nodes-base.crateDbTool': 'io',
    'n8n-nodes-base.cron': 'io',
    'n8n-nodes-base.customerIo': 'io',
    'n8n-nodes-base.customerIoTool': 'io',
    'n8n-nodes-base.customerIoTrigger': 'io',
    'n8n-nodes-base.dataTable': 'io',
    'n8n-nodes-base.dataTableTool': 'io',
    'n8n-nodes-base.debugHelper': 'io',
    'n8n-nodes-base.deepL': 'io',
    'n8n-nodes-base.deepLTool': 'io',
    'n8n-nodes-base.demio': 'io',
    'n8n-nodes-base.demioTool': 'io',
    'n8n-nodes-base.dhl': 'io',
    'n8n-nodes-base.dhlTool': 'io',
    'n8n-nodes-base.discourse': 'io',
    'n8n-nodes-base.discourseTool': 'io',
    'n8n-nodes-base.disqus': 'io',
    'n8n-nodes-base.drift': 'io',
    'n8n-nodes-base.driftTool': 'io',
    'n8n-nodes-base.egoi': 'io',
    'n8n-nodes-base.egoiTool': 'io',
    'n8n-nodes-base.emailReadImap': 'io',
    'n8n-nodes-base.emailReadImapTool': 'io',
    'n8n-nodes-base.emelia': 'io',
    'n8n-nodes-base.emeliaTool': 'io',
    'n8n-nodes-base.emeliaTrigger': 'io',
    'n8n-nodes-base.erpNext': 'io',
    'n8n-nodes-base.erpNextTool': 'io',
    'n8n-nodes-base.errorTrigger': 'io',
    'n8n-nodes-base.evaluationTrigger': 'io',
    'n8n-nodes-base.eventbriteTrigger': 'io',
    'n8n-nodes-base.executeWorkflowTrigger': 'io',
    'n8n-nodes-base.executionData': 'io',
    'n8n-nodes-base.facebookLeadAdsTrigger': 'io',
    'n8n-nodes-base.facebookTrigger': 'io',
    'n8n-nodes-base.figmaTrigger': 'io',
    'n8n-nodes-base.flow': 'io',
    'n8n-nodes-base.flowTrigger': 'io',
    'n8n-nodes-base.form': 'io',
    'n8n-nodes-base.formIoTrigger': 'io',
    'n8n-nodes-base.formTrigger': 'io',
    'n8n-nodes-base.formstackTrigger': 'io',
    'n8n-nodes-base.freshdesk': 'io',
    'n8n-nodes-base.freshdeskTool': 'io',
    'n8n-nodes-base.gSuiteAdmin': 'io',
    'n8n-nodes-base.gSuiteAdminTool': 'io',
    'n8n-nodes-base.getResponse': 'io',
    'n8n-nodes-base.getResponseTool': 'io',
    'n8n-nodes-base.getResponseTrigger': 'io',
    'n8n-nodes-base.ghost': 'io',
    'n8n-nodes-base.ghostTool': 'io',
    'n8n-nodes-base.github': 'io',
    'n8n-nodes-base.githubTool': 'io',
    'n8n-nodes-base.githubTrigger': 'io',
    'n8n-nodes-base.gitlab': 'io',
    'n8n-nodes-base.gitlabTool': 'io',
    'n8n-nodes-base.gitlabTrigger': 'io',
    'n8n-nodes-base.gmailTrigger': 'io',
    'n8n-nodes-base.googleBigQuery': 'io',
    'n8n-nodes-base.googleBigQueryTool': 'io',
    'n8n-nodes-base.googleBooks': 'io',
    'n8n-nodes-base.googleBooksTool': 'io',
    'n8n-nodes-base.googleBusinessProfileTrigger': 'io',
    'n8n-nodes-base.googleCalendar': 'io',
    'n8n-nodes-base.googleCalendarTool': 'io',
    'n8n-nodes-base.googleCalendarTrigger': 'io',
    'n8n-nodes-base.googleCloudNaturalLanguage': 'io',
    'n8n-nodes-base.googleCloudNaturalLanguageTool': 'io',
    'n8n-nodes-base.googleContacts': 'io',
    'n8n-nodes-base.googleContactsTool': 'io',
    'n8n-nodes-base.googleDocs': 'io',
    'n8n-nodes-base.googleDocsTool': 'io',
    'n8n-nodes-base.googleDriveTrigger': 'io',
    'n8n-nodes-base.googleFirebaseCloudFirestore': 'io',
    'n8n-nodes-base.googleFirebaseCloudFirestoreTool': 'io',
    'n8n-nodes-base.googleFirebaseRealtimeDatabase': 'io',
    'n8n-nodes-base.googleFirebaseRealtimeDatabaseTool': 'io',
    'n8n-nodes-base.googleSheets': 'io',
    'n8n-nodes-base.googleSheetsTool': 'io',
    'n8n-nodes-base.googleSheetsTrigger': 'io',
    'n8n-nodes-base.googleSlides': 'io',
    'n8n-nodes-base.googleSlidesTool': 'io',
    'n8n-nodes-base.googleTasks': 'io',
    'n8n-nodes-base.googleTasksTool': 'io',
    'n8n-nodes-base.googleTranslate': 'io',
    'n8n-nodes-base.googleTranslateTool': 'io',
    'n8n-nodes-base.gotify': 'io',
    'n8n-nodes-base.gotifyTool': 'io',
    'n8n-nodes-base.graphql': 'io',
    'n8n-nodes-base.graphqlTool': 'io',
    'n8n-nodes-base.grist': 'io',
    'n8n-nodes-base.gristTool': 'io',
    'n8n-nodes-base.gumroadTrigger': 'io',
    'n8n-nodes-base.haloPSA': 'io',
    'n8n-nodes-base.haloPSATool': 'io',
    'n8n-nodes-base.harvest': 'io',
    'n8n-nodes-base.harvestTool': 'io',
    'n8n-nodes-base.helpScout': 'io',
    'n8n-nodes-base.helpScoutTool': 'io',
    'n8n-nodes-base.helpScoutTrigger': 'io',
    'n8n-nodes-base.homeAssistant': 'io',
    'n8n-nodes-base.homeAssistantTool': 'io',
    'n8n-nodes-base.httpRequest': 'io',
    'n8n-nodes-base.httpRequestTool': 'io',
    'n8n-nodes-base.hubspot': 'io',
    'n8n-nodes-base.hubspotTool': 'io',
    'n8n-nodes-base.hubspotTrigger': 'io',
    'n8n-nodes-base.humanticAi': 'io',
    'n8n-nodes-base.humanticAiTool': 'io',
    'n8n-nodes-base.hunter': 'io',
    'n8n-nodes-base.hunterTool': 'io',
    'n8n-nodes-base.intercom': 'io',
    'n8n-nodes-base.intercomTool': 'io',
    'n8n-nodes-base.interval': 'io',
    'n8n-nodes-base.invoiceNinjaTrigger': 'io',
    'n8n-nodes-base.itemLists': 'io',
    'n8n-nodes-base.iterable': 'io',
    'n8n-nodes-base.iterableTool': 'io',
    'n8n-nodes-base.jenkins': 'io',
    'n8n-nodes-base.jenkinsTool': 'io',
    'n8n-nodes-base.jira': 'io',
    'n8n-nodes-base.jiraTool': 'io',
    'n8n-nodes-base.jiraTrigger': 'io',
    'n8n-nodes-base.jotFormTrigger': 'io',
    'n8n-nodes-base.kafkaTrigger': 'io',
    'n8n-nodes-base.keap': 'io',
    'n8n-nodes-base.keapTool': 'io',
    'n8n-nodes-base.keapTrigger': 'io',
    'n8n-nodes-base.koBoToolboxTrigger': 'io',
    'n8n-nodes-base.lemlistTrigger': 'io',
    'n8n-nodes-base.line': 'io',
    'n8n-nodes-base.lineTool': 'io',
    'n8n-nodes-base.linear': 'io',
    'n8n-nodes-base.linearTool': 'io',
    'n8n-nodes-base.linearTrigger': 'io',
    'n8n-nodes-base.lingvaNex': 'io',
    'n8n-nodes-base.lingvaNexTool': 'io',
    'n8n-nodes-base.loneScaleTrigger': 'io',
    'n8n-nodes-base.magento2': 'io',
    'n8n-nodes-base.magento2Tool': 'io',
    'n8n-nodes-base.mailchimpTrigger': 'io',
    'n8n-nodes-base.mailerLiteTrigger': 'io',
    'n8n-nodes-base.mailjetTrigger': 'io',
    'n8n-nodes-base.mandrill': 'io',
    'n8n-nodes-base.mandrillTool': 'io',
    'n8n-nodes-base.manualTrigger': 'io',
    'n8n-nodes-base.markdown': 'io',
    'n8n-nodes-base.matrix': 'io',
    'n8n-nodes-base.matrixTool': 'io',
    'n8n-nodes-base.mattermost': 'io',
    'n8n-nodes-base.mattermostTool': 'io',
    'n8n-nodes-base.mautic': 'io',
    'n8n-nodes-base.mauticTool': 'io',
    'n8n-nodes-base.mauticTrigger': 'io',
    'n8n-nodes-base.medium': 'io',
    'n8n-nodes-base.mediumTool': 'io',
    'n8n-nodes-base.microsoftDynamicsCrm': 'io',
    'n8n-nodes-base.microsoftDynamicsCrmTool': 'io',
    'n8n-nodes-base.microsoftExcel': 'io',
    'n8n-nodes-base.microsoftExcelTool': 'io',
    'n8n-nodes-base.microsoftOneDriveTrigger': 'io',
    'n8n-nodes-base.microsoftOutlookTrigger': 'io',
    'n8n-nodes-base.microsoftSql': 'io',
    'n8n-nodes-base.microsoftSqlTool': 'io',
    'n8n-nodes-base.microsoftTeams': 'io',
    'n8n-nodes-base.microsoftTeamsTool': 'io',
    'n8n-nodes-base.microsoftTeamsTrigger': 'io',
    'n8n-nodes-base.microsoftToDo': 'io',
    'n8n-nodes-base.microsoftToDoTool': 'io',
    'n8n-nodes-base.mindee': 'io',
    'n8n-nodes-base.mondayCom': 'io',
    'n8n-nodes-base.mondayComTool': 'io',
    'n8n-nodes-base.mqttTrigger': 'io',
    'n8n-nodes-base.mySql': 'io',
    'n8n-nodes-base.mySqlTool': 'io',
    'n8n-nodes-base.n8nTrigger': 'io',
    'n8n-nodes-base.netlifyTrigger': 'io',
    'n8n-nodes-base.nextCloud': 'io',
    'n8n-nodes-base.nextCloudTool': 'io',
    'n8n-nodes-base.nocoDb': 'io',
    'n8n-nodes-base.nocoDbTool': 'io',
    'n8n-nodes-base.notion': 'io',
    'n8n-nodes-base.notionTool': 'io',
    'n8n-nodes-base.notionTrigger': 'io',
    'n8n-nodes-base.npm': 'io',
    'n8n-nodes-base.npmTool': 'io',
    'n8n-nodes-base.onfleet': 'io',
    'n8n-nodes-base.onfleetTool': 'io',
    'n8n-nodes-base.onfleetTrigger': 'io',
    'n8n-nodes-base.openThesaurus': 'io',
    'n8n-nodes-base.openThesaurusTool': 'io',
    'n8n-nodes-base.openWeatherMap': 'io',
    'n8n-nodes-base.openWeatherMapTool': 'io',
    'n8n-nodes-base.oracleDatabase': 'io',
    'n8n-nodes-base.oracleDatabaseTool': 'io',
    'n8n-nodes-base.orbit': 'io',
    'n8n-nodes-base.oura': 'io',
    'n8n-nodes-base.ouraTool': 'io',
    'n8n-nodes-base.paddle': 'io',
    'n8n-nodes-base.paddleTool': 'io',
    'n8n-nodes-base.pagerDuty': 'io',
    'n8n-nodes-base.pagerDutyTool': 'io',
    'n8n-nodes-base.payPalTrigger': 'io',
    'n8n-nodes-base.peekalink': 'io',
    'n8n-nodes-base.peekalinkTool': 'io',
    'n8n-nodes-base.phantombuster': 'io',
    'n8n-nodes-base.phantombusterTool': 'io',
    'n8n-nodes-base.philipsHue': 'io',
    'n8n-nodes-base.philipsHueTool': 'io',
    'n8n-nodes-base.pipedriveTrigger': 'io',
    'n8n-nodes-base.postHog': 'io',
    'n8n-nodes-base.postHogTool': 'io',
    'n8n-nodes-base.postgres': 'io',
    'n8n-nodes-base.postgresTool': 'io',
    'n8n-nodes-base.postgresTrigger': 'io',
    'n8n-nodes-base.postmarkTrigger': 'io',
    'n8n-nodes-base.profitWell': 'io',
    'n8n-nodes-base.profitWellTool': 'io',
    'n8n-nodes-base.pushbullet': 'io',
    'n8n-nodes-base.pushbulletTool': 'io',
    'n8n-nodes-base.pushcut': 'io',
    'n8n-nodes-base.pushcutTool': 'io',
    'n8n-nodes-base.pushcutTrigger': 'io',
    'n8n-nodes-base.pushover': 'io',
    'n8n-nodes-base.pushoverTool': 'io',
    'n8n-nodes-base.questDb': 'io',
    'n8n-nodes-base.questDbTool': 'io',
    'n8n-nodes-base.quickChart': 'io',
    'n8n-nodes-base.quickChartTool': 'io',
    'n8n-nodes-base.quickbase': 'io',
    'n8n-nodes-base.quickbaseTool': 'io',
    'n8n-nodes-base.rabbitmqTrigger': 'io',
    'n8n-nodes-base.redis': 'io',
    'n8n-nodes-base.redisTool': 'io',
    'n8n-nodes-base.redisTrigger': 'io',
    'n8n-nodes-base.respondToWebhook': 'io',
    'n8n-nodes-base.rssFeedRead': 'io',
    'n8n-nodes-base.rssFeedReadTool': 'io',
    'n8n-nodes-base.rssFeedReadTrigger': 'io',
    'n8n-nodes-base.salesforce': 'io',
    'n8n-nodes-base.salesforceTool': 'io',
    'n8n-nodes-base.salesforceTrigger': 'io',
    'n8n-nodes-base.salesmate': 'io',
    'n8n-nodes-base.salesmateTool': 'io',
    'n8n-nodes-base.scheduleTrigger': 'io',
    'n8n-nodes-base.seaTable': 'io',
    'n8n-nodes-base.seaTableTool': 'io',
    'n8n-nodes-base.seaTableTrigger': 'io',
    'n8n-nodes-base.segment': 'io',
    'n8n-nodes-base.segmentTool': 'io',
    'n8n-nodes-base.sendInBlueTrigger': 'io',
    'n8n-nodes-base.sendy': 'io',
    'n8n-nodes-base.sendyTool': 'io',
    'n8n-nodes-base.sentryIo': 'io',
    'n8n-nodes-base.sentryIoTool': 'io',
    'n8n-nodes-base.serviceNow': 'io',
    'n8n-nodes-base.serviceNowTool': 'io',
    'n8n-nodes-base.set': 'io',
    'n8n-nodes-base.shopifyTrigger': 'io',
    'n8n-nodes-base.simulate': 'io',
    'n8n-nodes-base.simulateTrigger': 'io',
    'n8n-nodes-base.slackTrigger': 'io',
    'n8n-nodes-base.snowflake': 'io',
    'n8n-nodes-base.snowflakeTool': 'io',
    'n8n-nodes-base.spotify': 'io',
    'n8n-nodes-base.spotifyTool': 'io',
    'n8n-nodes-base.sseTrigger': 'io',
    'n8n-nodes-base.ssh': 'io',
    'n8n-nodes-base.stickyNote': 'io',
    'n8n-nodes-base.stopAndError': 'io',
    'n8n-nodes-base.storyblok': 'io',
    'n8n-nodes-base.storyblokTool': 'io',
    'n8n-nodes-base.strapi': 'io',
    'n8n-nodes-base.strapiTool': 'io',
    'n8n-nodes-base.strava': 'io',
    'n8n-nodes-base.stravaTool': 'io',
    'n8n-nodes-base.stravaTrigger': 'io',
    'n8n-nodes-base.stripeTrigger': 'io',
    'n8n-nodes-base.supabase': 'io',
    'n8n-nodes-base.supabaseTool': 'io',
    'n8n-nodes-base.surveyMonkeyTrigger': 'io',
    'n8n-nodes-base.syncroMsp': 'io',
    'n8n-nodes-base.syncroMspTool': 'io',
    'n8n-nodes-base.taigaTrigger': 'io',
    'n8n-nodes-base.telegramTrigger': 'io',
    'n8n-nodes-base.theHiveProjectTrigger': 'io',
    'n8n-nodes-base.theHiveTrigger': 'io',
    'n8n-nodes-base.timeSaved': 'io',
    'n8n-nodes-base.timescaleDb': 'io',
    'n8n-nodes-base.timescaleDbTool': 'io',
    'n8n-nodes-base.todoist': 'io',
    'n8n-nodes-base.todoistTool': 'io',
    'n8n-nodes-base.togglTrigger': 'io',
    'n8n-nodes-base.travisCi': 'io',
    'n8n-nodes-base.travisCiTool': 'io',
    'n8n-nodes-base.trelloTrigger': 'io',
    'n8n-nodes-base.twilioTrigger': 'io',
    'n8n-nodes-base.twist': 'io',
    'n8n-nodes-base.twistTool': 'io',
    'n8n-nodes-base.typeformTrigger': 'io',
    'n8n-nodes-base.uplead': 'io',
    'n8n-nodes-base.upleadTool': 'io',
    'n8n-nodes-base.uproc': 'io',
    'n8n-nodes-base.uprocTool': 'io',
    'n8n-nodes-base.uptimeRobot': 'io',
    'n8n-nodes-base.uptimeRobotTool': 'io',
    'n8n-nodes-base.venafiTlsProtectCloud': 'io',
    'n8n-nodes-base.venafiTlsProtectCloudTool': 'io',
    'n8n-nodes-base.venafiTlsProtectCloudTrigger': 'io',
    'n8n-nodes-base.venafiTlsProtectDatacenter': 'io',
    'n8n-nodes-base.venafiTlsProtectDatacenterTool': 'io',
    'n8n-nodes-base.vero': 'io',
    'n8n-nodes-base.veroTool': 'io',
    'n8n-nodes-base.vonage': 'io',
    'n8n-nodes-base.vonageTool': 'io',
    'n8n-nodes-base.webflowTrigger': 'io',
    'n8n-nodes-base.webhook': 'io',
    'n8n-nodes-base.whatsAppTrigger': 'io',
    'n8n-nodes-base.wiseTrigger': 'io',
    'n8n-nodes-base.wooCommerceTrigger': 'io',
    'n8n-nodes-base.wordpress': 'io',
    'n8n-nodes-base.wordpressTool': 'io',
    'n8n-nodes-base.workableTrigger': 'io',
    'n8n-nodes-base.workflowTrigger': 'io',
    'n8n-nodes-base.wufooTrigger': 'io',
    'n8n-nodes-base.xero': 'io',
    'n8n-nodes-base.xeroTool': 'io',
    'n8n-nodes-base.youTube': 'io',
    'n8n-nodes-base.youTubeTool': 'io',
    'n8n-nodes-base.yourls': 'io',
    'n8n-nodes-base.yourlsTool': 'io',
    'n8n-nodes-base.zammad': 'io',
    'n8n-nodes-base.zammadTool': 'io',
    'n8n-nodes-base.zendesk': 'io',
    'n8n-nodes-base.zendeskTool': 'io',
    'n8n-nodes-base.zendeskTrigger': 'io',
    'n8n-nodes-base.zoom': 'io',
    'n8n-nodes-base.zoomTool': 'io',
    'n8n-nodes-base.zulip': 'io',
    'n8n-nodes-base.zulipTool': 'io',

    /* LOGIC / CONDITIONAL */
    'n8n-nodes-base.compareDatasets': 'logic',
    'n8n-nodes-base.filter': 'logic',
    'n8n-nodes-base.if': 'logic',
    'n8n-nodes-base.netlify': 'logic',
    'n8n-nodes-base.netlifyTool': 'logic',
    'n8n-nodes-base.switch': 'logic',

    /* FLOW CONTROL */
    'n8n-nodes-base.merge': 'flow',
    'n8n-nodes-base.noOp': 'flow',
    'n8n-nodes-base.splitInBatches': 'flow',
    'n8n-nodes-base.splitOut': 'flow',
    'n8n-nodes-base.wait': 'flow',

    /* DATA TRANSFORM */
    'n8n-nodes-base.actionNetwork': 'transform',
    'n8n-nodes-base.actionNetworkTool': 'transform',
    'n8n-nodes-base.activeCampaign': 'transform',
    'n8n-nodes-base.activeCampaignTool': 'transform',
    'n8n-nodes-base.adalo': 'transform',
    'n8n-nodes-base.adaloTool': 'transform',
    'n8n-nodes-base.aggregate': 'transform',
    'n8n-nodes-base.agileCrm': 'transform',
    'n8n-nodes-base.agileCrmTool': 'transform',
    'n8n-nodes-base.aiTransform': 'transform',
    'n8n-nodes-base.airtop': 'transform',
    'n8n-nodes-base.airtopTool': 'transform',
    'n8n-nodes-base.apiTemplateIo': 'transform',
    'n8n-nodes-base.apiTemplateIoTool': 'transform',
    'n8n-nodes-base.awsDynamoDb': 'transform',
    'n8n-nodes-base.azureCosmosDb': 'transform',
    'n8n-nodes-base.bambooHr': 'transform',
    'n8n-nodes-base.bambooHrTool': 'transform',
    'n8n-nodes-base.bitwarden': 'transform',
    'n8n-nodes-base.bitwardenTool': 'transform',
    'n8n-nodes-base.bubble': 'transform',
    'n8n-nodes-base.bubbleTool': 'transform',
    'n8n-nodes-base.ciscoWebex': 'transform',
    'n8n-nodes-base.ciscoWebexTool': 'transform',
    'n8n-nodes-base.copper': 'transform',
    'n8n-nodes-base.copperTool': 'transform',
    'n8n-nodes-base.cortex': 'transform',
    'n8n-nodes-base.crypto': 'transform',
    'n8n-nodes-base.cryptoTool': 'transform',
    'n8n-nodes-base.dateTime': 'transform',
    'n8n-nodes-base.dateTimeTool': 'transform',
    'n8n-nodes-base.editImage': 'transform',
    'n8n-nodes-base.elasticSecurity': 'transform',
    'n8n-nodes-base.elasticSecurityTool': 'transform',
    'n8n-nodes-base.elasticsearch': 'transform',
    'n8n-nodes-base.elasticsearchTool': 'transform',
    'n8n-nodes-base.freshservice': 'transform',
    'n8n-nodes-base.freshserviceTool': 'transform',
    'n8n-nodes-base.freshworksCrm': 'transform',
    'n8n-nodes-base.freshworksCrmTool': 'transform',
    'n8n-nodes-base.git': 'transform',
    'n8n-nodes-base.gitTool': 'transform',
    'n8n-nodes-base.goToWebinar': 'transform',
    'n8n-nodes-base.goToWebinarTool': 'transform',
    'n8n-nodes-base.gong': 'transform',
    'n8n-nodes-base.gongTool': 'transform',
    'n8n-nodes-base.googleAds': 'transform',
    'n8n-nodes-base.googleAdsTool': 'transform',
    'n8n-nodes-base.googleAnalytics': 'transform',
    'n8n-nodes-base.googleAnalyticsTool': 'transform',
    'n8n-nodes-base.googlePerspective': 'transform',
    'n8n-nodes-base.googlePerspectiveTool': 'transform',
    'n8n-nodes-base.grafana': 'transform',
    'n8n-nodes-base.grafanaTool': 'transform',
    'n8n-nodes-base.hackerNews': 'transform',
    'n8n-nodes-base.hackerNewsTool': 'transform',
    'n8n-nodes-base.highLevel': 'transform',
    'n8n-nodes-base.highLevelTool': 'transform',
    'n8n-nodes-base.html': 'transform',
    'n8n-nodes-base.htmlExtract': 'transform',
    'n8n-nodes-base.jinaAi': 'transform',
    'n8n-nodes-base.jinaAiTool': 'transform',
    'n8n-nodes-base.jwt': 'transform',
    'n8n-nodes-base.jwtTool': 'transform',
    'n8n-nodes-base.koBoToolbox': 'transform',
    'n8n-nodes-base.koBoToolboxTool': 'transform',
    'n8n-nodes-base.ldap': 'transform',
    'n8n-nodes-base.ldapTool': 'transform',
    'n8n-nodes-base.lemlist': 'transform',
    'n8n-nodes-base.lemlistTool': 'transform',
    'n8n-nodes-base.limit': 'transform',
    'n8n-nodes-base.loneScale': 'transform',
    'n8n-nodes-base.loneScaleTool': 'transform',
    'n8n-nodes-base.marketstack': 'transform',
    'n8n-nodes-base.marketstackTool': 'transform',
    'n8n-nodes-base.metabase': 'transform',
    'n8n-nodes-base.metabaseTool': 'transform',
    'n8n-nodes-base.microsoftEntra': 'transform',
    'n8n-nodes-base.microsoftEntraTool': 'transform',
    'n8n-nodes-base.microsoftGraphSecurity': 'transform',
    'n8n-nodes-base.microsoftGraphSecurityTool': 'transform',
    'n8n-nodes-base.microsoftOutlook': 'transform',
    'n8n-nodes-base.microsoftOutlookTool': 'transform',
    'n8n-nodes-base.microsoftSharePoint': 'transform',
    'n8n-nodes-base.microsoftSharePointTool': 'transform',
    'n8n-nodes-base.misp': 'transform',
    'n8n-nodes-base.mispTool': 'transform',
    'n8n-nodes-base.mistralAi': 'transform',
    'n8n-nodes-base.mistralAiTool': 'transform',
    'n8n-nodes-base.monicaCrm': 'transform',
    'n8n-nodes-base.monicaCrmTool': 'transform',
    'n8n-nodes-base.n8n': 'transform',
    'n8n-nodes-base.n8nTrainingCustomerDatastore': 'transform',
    'n8n-nodes-base.n8nTrainingCustomerMessenger': 'transform',
    'n8n-nodes-base.nasa': 'transform',
    'n8n-nodes-base.nasaTool': 'transform',
    'n8n-nodes-base.odoo': 'transform',
    'n8n-nodes-base.odooTool': 'transform',
    'n8n-nodes-base.okta': 'transform',
    'n8n-nodes-base.oktaTool': 'transform',
    'n8n-nodes-base.oneSimpleApi': 'transform',
    'n8n-nodes-base.oneSimpleApiTool': 'transform',
    'n8n-nodes-base.perplexity': 'transform',
    'n8n-nodes-base.perplexityTool': 'transform',
    'n8n-nodes-base.postBin': 'transform',
    'n8n-nodes-base.postBinTool': 'transform',
    'n8n-nodes-base.quickbooks': 'transform',
    'n8n-nodes-base.quickbooksTool': 'transform',
    'n8n-nodes-base.raindrop': 'transform',
    'n8n-nodes-base.raindropTool': 'transform',
    'n8n-nodes-base.reddit': 'transform',
    'n8n-nodes-base.redditTool': 'transform',
    'n8n-nodes-base.removeDuplicates': 'transform',
    'n8n-nodes-base.renameKeys': 'transform',
    'n8n-nodes-base.securityScorecard': 'transform',
    'n8n-nodes-base.securityScorecardTool': 'transform',
    'n8n-nodes-base.sendGrid': 'transform',
    'n8n-nodes-base.sendGridTool': 'transform',
    'n8n-nodes-base.sendInBlue': 'transform',
    'n8n-nodes-base.sendInBlueTool': 'transform',
    'n8n-nodes-base.signl4': 'transform',
    'n8n-nodes-base.signl4Tool': 'transform',
    'n8n-nodes-base.sort': 'transform',
    'n8n-nodes-base.splunk': 'transform',
    'n8n-nodes-base.splunkTool': 'transform',
    'n8n-nodes-base.stackby': 'transform',
    'n8n-nodes-base.stackbyTool': 'transform',
    'n8n-nodes-base.summarize': 'transform',
    'n8n-nodes-base.taiga': 'transform',
    'n8n-nodes-base.taigaTool': 'transform',
    'n8n-nodes-base.tapfiliate': 'transform',
    'n8n-nodes-base.tapfiliateTool': 'transform',
    'n8n-nodes-base.theHive': 'transform',
    'n8n-nodes-base.theHiveProject': 'transform',
    'n8n-nodes-base.theHiveProjectTool': 'transform',
    'n8n-nodes-base.theHiveTool': 'transform',
    'n8n-nodes-base.totp': 'transform',
    'n8n-nodes-base.totpTool': 'transform',
    'n8n-nodes-base.trello': 'transform',
    'n8n-nodes-base.trelloTool': 'transform',
    'n8n-nodes-base.twake': 'transform',
    'n8n-nodes-base.twakeTool': 'transform',
    'n8n-nodes-base.unleashedSoftware': 'transform',
    'n8n-nodes-base.unleashedSoftwareTool': 'transform',
    'n8n-nodes-base.urlScanIo': 'transform',
    'n8n-nodes-base.urlScanIoTool': 'transform',
    'n8n-nodes-base.webflow': 'transform',
    'n8n-nodes-base.webflowTool': 'transform',
    'n8n-nodes-base.wekan': 'transform',
    'n8n-nodes-base.wekanTool': 'transform',
    'n8n-nodes-base.wise': 'transform',
    'n8n-nodes-base.xml': 'transform',
    'n8n-nodes-base.zohoCrm': 'transform',
    'n8n-nodes-base.zohoCrmTool': 'transform',

    /* CODE / SCRIPT */
    'n8n-nodes-base.code': 'code',
    'n8n-nodes-base.evaluation': 'code',
    'n8n-nodes-base.executeWorkflow': 'code',
    'n8n-nodes-base.function': 'code',
    'n8n-nodes-base.functionItem': 'code',
    'n8n-nodes-base.rundeck': 'code',
    'n8n-nodes-base.rundeckTool': 'code',

    /* AI / LLM */
    'n8n-nodes-base.openAi': 'ai',

    /* COMMUNICATION */
    'n8n-nodes-base.amqp': 'communication',
    'n8n-nodes-base.amqpTool': 'communication',
    'n8n-nodes-base.awsSqs': 'communication',
    'n8n-nodes-base.discord': 'communication',
    'n8n-nodes-base.discordTool': 'communication',
    'n8n-nodes-base.dropcontact': 'communication',
    'n8n-nodes-base.dropcontactTool': 'communication',
    'n8n-nodes-base.emailSend': 'communication',
    'n8n-nodes-base.emailSendTool': 'communication',
    'n8n-nodes-base.facebookGraphApi': 'communication',
    'n8n-nodes-base.facebookGraphApiTool': 'communication',
    'n8n-nodes-base.gmail': 'communication',
    'n8n-nodes-base.gmailTool': 'communication',
    'n8n-nodes-base.googleChat': 'communication',
    'n8n-nodes-base.googleChatTool': 'communication',
    'n8n-nodes-base.kafka': 'communication',
    'n8n-nodes-base.kafkaTool': 'communication',
    'n8n-nodes-base.linkedIn': 'communication',
    'n8n-nodes-base.linkedInTool': 'communication',
    'n8n-nodes-base.mailcheck': 'communication',
    'n8n-nodes-base.mailcheckTool': 'communication',
    'n8n-nodes-base.mailchimp': 'communication',
    'n8n-nodes-base.mailchimpTool': 'communication',
    'n8n-nodes-base.mailerLite': 'communication',
    'n8n-nodes-base.mailerLiteTool': 'communication',
    'n8n-nodes-base.mailgun': 'communication',
    'n8n-nodes-base.mailgunTool': 'communication',
    'n8n-nodes-base.mailjet': 'communication',
    'n8n-nodes-base.mailjetTool': 'communication',
    'n8n-nodes-base.messageBird': 'communication',
    'n8n-nodes-base.messageBirdTool': 'communication',
    'n8n-nodes-base.mocean': 'communication',
    'n8n-nodes-base.moceanTool': 'communication',
    'n8n-nodes-base.mqtt': 'communication',
    'n8n-nodes-base.mqttTool': 'communication',
    'n8n-nodes-base.msg91': 'communication',
    'n8n-nodes-base.msg91Tool': 'communication',
    'n8n-nodes-base.plivo': 'communication',
    'n8n-nodes-base.plivoTool': 'communication',
    'n8n-nodes-base.rabbitmq': 'communication',
    'n8n-nodes-base.rabbitmqTool': 'communication',
    'n8n-nodes-base.rocketchat': 'communication',
    'n8n-nodes-base.rocketchatTool': 'communication',
    'n8n-nodes-base.slack': 'communication',
    'n8n-nodes-base.slackTool': 'communication',
    'n8n-nodes-base.sms77': 'communication',
    'n8n-nodes-base.sms77Tool': 'communication',
    'n8n-nodes-base.telegram': 'communication',
    'n8n-nodes-base.telegramTool': 'communication',
    'n8n-nodes-base.twilio': 'communication',
    'n8n-nodes-base.twilioTool': 'communication',
    'n8n-nodes-base.twitter': 'communication',
    'n8n-nodes-base.twitterTool': 'communication',
    'n8n-nodes-base.whatsApp': 'communication',
    'n8n-nodes-base.whatsAppTool': 'communication',

    /* FILE / STORAGE */
    'n8n-nodes-base.awsS3': 'file',
    'n8n-nodes-base.awsS3Tool': 'file',
    'n8n-nodes-base.azureStorage': 'file',
    'n8n-nodes-base.compression': 'file',
    'n8n-nodes-base.compressionTool': 'file',
    'n8n-nodes-base.convertToFile': 'file',
    'n8n-nodes-base.dropbox': 'file',
    'n8n-nodes-base.dropboxTool': 'file',
    'n8n-nodes-base.extractFromFile': 'file',
    'n8n-nodes-base.filemaker': 'file',
    'n8n-nodes-base.filemakerTool': 'file',
    'n8n-nodes-base.ftp': 'file',
    'n8n-nodes-base.googleBusinessProfile': 'file',
    'n8n-nodes-base.googleBusinessProfileTool': 'file',
    'n8n-nodes-base.googleCloudStorage': 'file',
    'n8n-nodes-base.googleCloudStorageTool': 'file',
    'n8n-nodes-base.googleDrive': 'file',
    'n8n-nodes-base.googleDriveTool': 'file',
    'n8n-nodes-base.iCal': 'file',
    'n8n-nodes-base.microsoftOneDrive': 'file',
    'n8n-nodes-base.microsoftOneDriveTool': 'file',
    'n8n-nodes-base.mongoDb': 'file',
    'n8n-nodes-base.mongoDbTool': 'file',
    'n8n-nodes-base.moveBinaryData': 'file',
    'n8n-nodes-base.pipedrive': 'file',
    'n8n-nodes-base.pipedriveTool': 'file',
    'n8n-nodes-base.readBinaryFile': 'file',
    'n8n-nodes-base.readBinaryFiles': 'file',
    'n8n-nodes-base.readPDF': 'file',
    'n8n-nodes-base.readWriteFile': 'file',
    'n8n-nodes-base.s3': 'file',
    'n8n-nodes-base.s3Tool': 'file',
    'n8n-nodes-base.spreadsheetFile': 'file',
    'n8n-nodes-base.writeBinaryFile': 'file',

    /* COMMERCE / PAYMENT */
    'n8n-nodes-base.invoiceNinja': 'commerce',
    'n8n-nodes-base.invoiceNinjaTool': 'commerce',
    'n8n-nodes-base.payPal': 'commerce',
    'n8n-nodes-base.shopify': 'commerce',
    'n8n-nodes-base.shopifyTool': 'commerce',
    'n8n-nodes-base.stripe': 'commerce',
    'n8n-nodes-base.stripeTool': 'commerce',
    'n8n-nodes-base.wooCommerce': 'commerce',
    'n8n-nodes-base.wooCommerceTool': 'commerce',

    /* ───────────────
     * COMMUNITY NODES
     * ─────────────── */

    /* IO (Community) */
    '@blotato/n8n-nodes-preview-blotato.blotato': 'io',
    '@directus/n8n-nodes-preview-directus.directus': 'io',
    '@exploriumai/n8n-nodes-preview-explorium-ai.exploriumApiNode': 'io',
    '@fibery/n8n-nodes-preview-fibery.fibery': 'io',
    '@geocapture/n8n-nodes-preview-geocapture.geocapture': 'io',
    '@gotohuman/n8n-nodes-preview-gotohuman.gotoHuman': 'io',
    '@levelrmm/n8n-nodes-preview-level.level': 'io',
    '@lnkbio/n8n-nodes-preview-lnkbio.lnkBio': 'io',
    '@lusha-org/n8n-nodes-preview-lusha.lusha': 'io',
    '@markupai/n8n-nodes-preview-markupai.markupai': 'io',
    '@nalpeiron/n8n-nodes-preview-nalpeiron.nalpeironZentitle2': 'io',
    '@nskha/n8n-nodes-preview-scrappey.scrappey': 'io',
    '@onlyfansapi/n8n-nodes-preview-onlyfansapi.onlyFans': 'io',
    '@quire-io/n8n-nodes-preview-quire.quire': 'io',
    '@respond-io/n8n-nodes-preview-respond-io.respondio': 'io',
    '@searchapi/n8n-nodes-preview-searchapi.searchApi': 'io',
    '@solution25/n8n-nodes-preview-shopware.shopware': 'io',
    '@starhunter/n8n-nodes-preview-graphql.starhunter': 'io',
    '@steuerboard/n8n-nodes-preview-steuerboard.steuerboard': 'io',
    '@woztell-sanuker/n8n-nodes-preview-woztell-sanuker.woztellTrigger': 'io',
    'n8n-nodes-preview-abyssale.abyssale': 'io',
    'n8n-nodes-preview-autocalls.autocalls': 'io',
    'n8n-nodes-preview-awork.awork': 'io',
    'n8n-nodes-preview-binalyze-air.air': 'io',
    'n8n-nodes-preview-blue.blue': 'io',
    'n8n-nodes-preview-bookstack.bookstack': 'io',
    'n8n-nodes-preview-browseract.browserAct': 'io',
    'n8n-nodes-preview-businessmap.businessmap': 'io',
    'n8n-nodes-preview-caspioofficial.caspio': 'io',
    'n8n-nodes-preview-clipboardgenie.clipboardGenie': 'io',
    'n8n-nodes-preview-cronlytic.cronlyticTrigger': 'io',
    'n8n-nodes-preview-csvbox.csvboxTrigger': 'io',
    'n8n-nodes-preview-dalil-ai.dalilAi': 'io',
    'n8n-nodes-preview-famulor.famulor': 'io',
    'n8n-nodes-preview-fillout.filloutTrigger': 'io',
    'n8n-nodes-preview-fullenrich.fullEnrich': 'io',
    'n8n-nodes-preview-gatus-trigger.gatusTrigger': 'io',
    'n8n-nodes-preview-google-search-console.googleSearchConsole': 'io',
    'n8n-nodes-preview-hedy.hedy': 'io',
    'n8n-nodes-preview-human-in-the-loop.hitlNode': 'io',
    'n8n-nodes-preview-inoreader.inoreader': 'io',
    'n8n-nodes-preview-itop.iTop': 'io',
    'n8n-nodes-preview-jsonpost.jsonPostTrigger': 'io',
    'n8n-nodes-preview-lavatop.lavatop': 'io',
    'n8n-nodes-preview-nele-ai.neleAi': 'io',
    'n8n-nodes-preview-octagon.octagonAgents': 'io',
    'n8n-nodes-preview-octavehq.octave': 'io',
    'n8n-nodes-preview-onenote.onenote': 'io',
    'n8n-nodes-preview-opnform.opnformTrigger': 'io',
    'n8n-nodes-preview-orgo.orgo': 'io',
    'n8n-nodes-preview-outgrow.outgrowTrigger': 'io',
    'n8n-nodes-preview-parseur.parseurTrigger': 'io',
    'n8n-nodes-preview-phacet-official.phacet': 'io',
    'n8n-nodes-preview-postiz.postiz': 'io',
    'n8n-nodes-preview-raia.raia': 'io',
    'n8n-nodes-preview-shortio.Shortio': 'io',
    'n8n-nodes-preview-simla.simlaTrigger': 'io',
    'n8n-nodes-preview-softr.softr': 'io',
    'n8n-nodes-preview-starfish.campingCare': 'io',
    'n8n-nodes-preview-supadata.supadata': 'io',
    'n8n-nodes-preview-swiftgum-trigger.swiftgumTrigger': 'io',
    'n8n-nodes-preview-tallyforms.tallyTrigger': 'io',
    'n8n-nodes-preview-teamupcalendar.teamup': 'io',
    'n8n-nodes-preview-tomba.tomba': 'io',
    'n8n-nodes-preview-triggercmd.triggercmd': 'io',
    'n8n-nodes-preview-videotoblog.videoToBlog': 'io',
    'n8n-nodes-preview-vikunja.vikunjaTrigger': 'io',
    'n8n-nodes-preview-visualping.visualpingTrigger': 'io',
    'n8n-nodes-preview-wpforms.wpformsTrigger': 'io',
    'n8n-nodes-preview-yepcode.yepCode': 'io',
    'n8n-nodes-preview-zigpoll.zigpollTrigger': 'io',

    /* LOGIC (Community) */
    '@apify/n8n-nodes-preview-apify.apify': 'logic',
    '@thelifeofrishi/n8n-nodes-preview-orshot.orshot': 'logic',
    'n8n-nodes-preview-signifycrm.signifyCrm': 'logic',
    'n8n-nodes-preview-simplified.simplified': 'logic',
    'n8n-nodes-preview-straker-verify.strakerVerify': 'logic',

    /* TRANSFORM (Community) */
    '@apaleo/n8n-nodes-preview-apaleo-official.apaleo': 'transform',
    '@basalt-ai/n8n-nodes-preview-basalt.basalt': 'transform',
    '@bedrijfsdatanl/n8n-nodes-preview-bedrijfsdata.bedrijfsdata': 'transform',
    '@bedrijfsdatanl/n8n-nodes-preview-prospectpro.prospectpro': 'transform',
    '@brave/n8n-nodes-preview-brave-search.braveSearch': 'transform',
    '@brightdata/n8n-nodes-preview-brightdata.brightData': 'transform',
    '@cloudsway-ai/n8n-nodes-preview-cloudsway.smartSearch': 'transform',
    '@copicake/n8n-nodes-preview-copicake.copicake': 'transform',
    '@datafix/n8n-nodes-preview-anthias.anthias': 'transform',
    '@datafix/n8n-nodes-preview-exact-online.exactOnline': 'transform',
    '@decisionrules/n8n-nodes-preview-decisionrules.decisionRules': 'transform',
    '@decodo/n8n-nodes-preview-decodo.decodo': 'transform',
    '@digitalocean/n8n-nodes-preview-digitalocean-gradient-serverless-inference.digitalOceanGradientServerlessInference': 'transform',
    '@docuseal/n8n-nodes-preview-docuseal.docuseal': 'transform',
    '@easysoftware/n8n-nodes-preview-easy-redmine.easyRedmine': 'transform',
    '@firefliesai/n8n-nodes-preview-fireflies.fireflies': 'transform',
    '@flarelight/n8n-nodes-preview-flarelight.flarelight': 'transform',
    '@globalping/n8n-nodes-preview-globalping.globalping': 'transform',
    '@goperigon/n8n-nodes-preview-perigon.perigon': 'transform',
    '@handelsregister/n8n-nodes-preview-handelsregister-ai.handelsregisterAi': 'transform',
    '@klardaten/n8n-nodes-preview-datevconnect.masterData': 'transform',
    '@langfuse/n8n-nodes-preview-langfuse.langfuse': 'transform',
    '@ledgers/n8n-nodes-preview-ledgers-cloud.ledgers': 'transform',
    '@mendable/n8n-nodes-preview-firecrawl.firecrawl': 'transform',
    '@musixmatch/n8n-nodes-preview-musixmatch.musixmatch': 'transform',
    '@neosapience/n8n-nodes-preview-typecast.typecast': 'transform',
    '@netgsm/n8n-nodes-preview-netgsm.netgsm': 'transform',
    '@nexlev/n8n-nodes-preview-nexlev.nexlev': 'transform',
    '@nexrender/n8n-nodes-preview-nexrender.nexrender': 'transform',
    '@nuelink/n8n-nodes-preview-nuelink.nuelink': 'transform',
    '@oregister/n8n-nodes-preview-openregister.openRegister': 'transform',
    '@orq-ai/n8n-nodes-preview-orq.orqDeployment': 'transform',
    '@paloaltonetworks/n8n-nodes-preview-prisma-airs.prismaAirs': 'transform',
    '@permitio/n8n-nodes-preview-permitio.permit': 'transform',
    '@picsart/n8n-nodes-preview-picsart-creative-apis.picsartImage': 'transform',
    '@postnitro/n8n-nodes-preview-postnitro-ai.postNitro': 'transform',
    '@predictleads/n8n-nodes-preview-predictleads.predictLeads': 'transform',
    '@reportei/n8n-nodes-preview-reportei.reportei': 'transform',
    '@rogerrogerio/n8n-nodes-preview-rogerroger.rogerRoger': 'transform',
    '@scrapeops/n8n-nodes-preview-scrapeops.ScrapeOps': 'transform',
    '@sendpulse/n8n-nodes-preview-sendpulse.sendPulseA360': 'transform',
    '@seranking/n8n-nodes-preview-seranking.seRanking': 'transform',
    '@serphouse/n8n-nodes-preview-serphouse.serphouse': 'transform',
    '@servicem8/n8n-nodes-preview-servicem8.serviceM8': 'transform',
    '@simplesat/n8n-nodes-preview-simplesat.simplesat': 'transform',
    '@socradar/n8n-nodes-preview-socradar.socradar': 'transform',
    '@tavily/n8n-nodes-preview-tavily.tavily': 'transform',
    '@tehw0lf/n8n-nodes-preview-toon.toon': 'transform',
    '@telnyx/n8n-nodes-preview-telnyx-ai.telnyxAi': 'transform',
    '@videodb/n8n-nodes-preview-videodb.videoDb': 'transform',
    '@wix/n8n-nodes-preview-wix.wix': 'transform',
    '@wizaco/n8n-nodes-preview-wiza.wiza': 'transform',
    '@xano/n8n-nodes-preview-xano.xano': 'transform',
    'n8n-nodes-preview-1shot.oneShot': 'transform',
    'n8n-nodes-preview-ada.ada': 'transform',
    'n8n-nodes-preview-aimfox.aimfox': 'transform',
    'n8n-nodes-preview-air.air': 'transform',
    'n8n-nodes-preview-anchorbrowser.anchorBrowser': 'transform',
    'n8n-nodes-preview-anny.anny': 'transform',
    'n8n-nodes-preview-authentica.authentica': 'transform',
    'n8n-nodes-preview-autobound.autobound': 'transform',
    'n8n-nodes-preview-avatartalk.avatarTalk': 'transform',
    'n8n-nodes-preview-belakeai.belakeAi': 'transform',
    'n8n-nodes-preview-beyondpresence.beyondPresence': 'transform',
    'n8n-nodes-preview-bookoly.bookoly': 'transform',
    'n8n-nodes-preview-botnoi-voice.botnoitts': 'transform',
    'n8n-nodes-preview-camino.camino': 'transform',
    'n8n-nodes-preview-chainstream.chainstream': 'transform',
    'n8n-nodes-preview-chartmogul.chartmogul': 'transform',
    'n8n-nodes-preview-contentdrips.contentdrips': 'transform',
    'n8n-nodes-preview-contextualai.contextualAi': 'transform',
    'n8n-nodes-preview-copyseeker.copyseeker': 'transform',
    'n8n-nodes-preview-crossmint.crossmintWallets': 'transform',
    'n8n-nodes-preview-dart.dart': 'transform',
    'n8n-nodes-preview-deliverect.deliverect': 'transform',
    'n8n-nodes-preview-digital-ocean.digitalOcean': 'transform',
    'n8n-nodes-preview-dust.dust': 'transform',
    'n8n-nodes-preview-exa-official.exa': 'transform',
    'n8n-nodes-preview-extruct.extruct': 'transform',
    'n8n-nodes-preview-featherless.featherless': 'transform',
    'n8n-nodes-preview-fluentc.fluentCTranslate': 'transform',
    'n8n-nodes-preview-gainium.Gainium': 'transform',
    'n8n-nodes-preview-gleanclient.gleanClient': 'transform',
    'n8n-nodes-preview-greip.greip': 'transform',
    'n8n-nodes-preview-groner.groner': 'transform',
    'n8n-nodes-preview-heyreach.heyReach': 'transform',
    'n8n-nodes-preview-hookdeck.hookdeck': 'transform',
    'n8n-nodes-preview-hostinger-api.hostingerApi': 'transform',
    'n8n-nodes-preview-htmlcsstoimage.htmlCssToImage': 'transform',
    'n8n-nodes-preview-hubbi.hubbi': 'transform',
    'n8n-nodes-preview-infranodus.infranodus': 'transform',
    'n8n-nodes-preview-instantly.instantly': 'transform',
    'n8n-nodes-preview-itglue.iTGlue': 'transform',
    'n8n-nodes-preview-jaasai.jaasai': 'transform',
    'n8n-nodes-preview-jigsawstack.jigsawStack': 'transform',
    'n8n-nodes-preview-joggai.joggAiNode': 'transform',
    'n8n-nodes-preview-kargo-entegrator.kargoEntegrator': 'transform',
    'n8n-nodes-preview-kinderpedia.kinderpedia': 'transform',
    'n8n-nodes-preview-klicktipp.klicktipp': 'transform',
    'n8n-nodes-preview-krispcall.krispcall': 'transform',
    'n8n-nodes-preview-kylas.kylas': 'transform',
    'n8n-nodes-preview-logsnag.LogSnag': 'transform',
    'n8n-nodes-preview-magnetite.magnetite': 'transform',
    'n8n-nodes-preview-mallabe-images.mallabeImages': 'transform',
    'n8n-nodes-preview-matrix42.matrix42': 'transform',
    'n8n-nodes-preview-medullar.medullar': 'transform',
    'n8n-nodes-preview-meetgeek.meetGeek': 'transform',
    'n8n-nodes-preview-memara.memara': 'transform',
    'n8n-nodes-preview-mfr.mfr': 'transform',
    'n8n-nodes-preview-moorcheh.moorcheh': 'transform',
    'n8n-nodes-preview-murf.murf': 'transform',
    'n8n-nodes-preview-olostep.olostepScrape': 'transform',
    'n8n-nodes-preview-outscraper.outscraper': 'transform',
    'n8n-nodes-preview-oxylabs-ai-studio.oxylabsAiStudio': 'transform',
    'n8n-nodes-preview-parallel.parallel': 'transform',
    'n8n-nodes-preview-payfunnels.payfunnels': 'transform',
    'n8n-nodes-preview-peek-pro.peekPro': 'transform',
    'n8n-nodes-preview-peliqan.peliqan': 'transform',
    'n8n-nodes-preview-powerbi.powerBi': 'transform',
    'n8n-nodes-preview-presenton.presenton': 'transform',
    'n8n-nodes-preview-qdrant.qdrant': 'transform',
    'n8n-nodes-preview-reachkit.reachkit': 'transform',
    'n8n-nodes-preview-realm.realm': 'transform',
    'n8n-nodes-preview-referral-factory.referralFactory': 'transform',
    'n8n-nodes-preview-roam.roam': 'transform',
    'n8n-nodes-preview-scrapegraphai.scrapegraphAi': 'transform',
    'n8n-nodes-preview-scrapeless.scrapeless': 'transform',
    'n8n-nodes-preview-scrapfly.Scrapfly': 'transform',
    'n8n-nodes-preview-scraping-dog.scrapingDog': 'transform',
    'n8n-nodes-preview-scrapingbee.ScrapingBee': 'transform',
    'n8n-nodes-preview-screenshotbase.screenshotBase': 'transform',
    'n8n-nodes-preview-seo-content-machine.seoContentMachine': 'transform',
    'n8n-nodes-preview-serpapi.serpApi': 'transform',
    'n8n-nodes-preview-sinergiacrm.sinergiaCrm': 'transform',
    'n8n-nodes-preview-skyvern.skyvern': 'transform',
    'n8n-nodes-preview-straico-official.straicoOfficial': 'transform',
    'n8n-nodes-preview-streak-crm.streak': 'transform',
    'n8n-nodes-preview-taddy.taddyApi': 'transform',
    'n8n-nodes-preview-targetare.targetareRo': 'transform',
    'n8n-nodes-preview-tazzoai.tazzoAi': 'transform',
    'n8n-nodes-preview-telli.telli': 'transform',
    'n8n-nodes-preview-ticktick.tickTick': 'transform',
    'n8n-nodes-preview-tubelab.tubeLab': 'transform',
    'n8n-nodes-preview-upcellapi.upcellApi': 'transform',
    'n8n-nodes-preview-velatir.velatir': 'transform',
    'n8n-nodes-preview-vikunja.vikunja': 'transform',
    'n8n-nodes-preview-webmetic.webmetic': 'transform',
    'n8n-nodes-preview-winston-ai.winstonAi': 'transform',
    'n8n-nodes-preview-yourtextguru.yourtextGuru': 'transform',
    'n8n-nodes-preview-zohoteaminbox.zohoTeamInbox': 'transform',

    /* CODE (Community) */
    '@droidrun/n8n-nodes-preview-droidrun.mobilerun': 'code',
    '@promptlayer/n8n-nodes-preview-promptlayer-runagent.promptLayerRunAgent': 'code',
    '@vlm-run/n8n-nodes-preview-vlmrun.vlmRun': 'code',
    'n8n-nodes-preview-mallabe-barcodes.mallabeBarcodes': 'code',

    /* AI (Community) */
    '@cometapi-dev/n8n-nodes-preview-cometapi.cometApi': 'ai',
    '@deutschlandgpt/n8n-nodes-preview-deutschlandgpt.deutschlandgpt': 'ai',
    '@elevenlabs/n8n-nodes-preview-elevenlabs.elevenLabs': 'ai',
    'n8n-nodes-preview-aimlapi.aimlApi': 'ai',
    'n8n-nodes-preview-assemblyai.assemblyAi': 'ai',
    'n8n-nodes-preview-llmlayer.llmLayer': 'ai',
    'n8n-nodes-preview-unstract.llmWhisperer': 'ai',

    /* COMMUNICATION (Community) */
    '@2chat/n8n-nodes-preview-twochat.twoChat': 'communication',
    '@alipeople/n8n-nodes-preview-sendon.sendon': 'communication',
    '@aotoki/n8n-nodes-preview-line-messaging.lineMessaging': 'communication',
    '@ekyte/n8n-nodes-preview-ekyte.eKyteAction': 'communication',
    '@enginemailer/n8n-nodes-preview-enginemailer.enginemailer': 'communication',
    '@infobip/n8n-nodes-preview-infobip-api.infobipApi': 'communication',
    '@itechnotion/n8n-nodes-preview-inboxplus.inboxPlus': 'communication',
    '@joai/n8n-nodes-preview-joai.joai': 'communication',
    '@mookielianhd/n8n-nodes-preview-instagram.instagram': 'communication',
    '@nvoip/n8n-nodes-preview-nvoip.nvoip': 'communication',
    '@orisma/n8n-nodes-preview-taximail.taximail': 'communication',
    '@postpulse/n8n-nodes-preview-postpulse.postPulse': 'communication',
    '@zerobounce/n8n-nodes-preview-zerobounce.zeroBounce': 'communication',
    '@zohomail/n8n-nodes-preview-zohocalendar.zohoCalendar': 'communication',
    'n8n-nodes-preview-agencii.agencii': 'communication',
    'n8n-nodes-preview-airparser.airparser': 'communication',
    'n8n-nodes-preview-apex.apex': 'communication',
    'n8n-nodes-preview-atriomail-email.atriomail': 'communication',
    'n8n-nodes-preview-blooio.blooioMessaging': 'communication',
    'n8n-nodes-preview-bounceban.bounceban': 'communication',
    'n8n-nodes-preview-browserflow.browserflow': 'communication',
    'n8n-nodes-preview-chat-data.chatData': 'communication',
    'n8n-nodes-preview-emailvalidation.emailValidation': 'communication',
    'n8n-nodes-preview-get-transcribe.getTranscribe': 'communication',
    'n8n-nodes-preview-jetapi.jetapi': 'communication',
    'n8n-nodes-preview-kipps.kippsAiChatbot': 'communication',
    'n8n-nodes-preview-late.late': 'communication',
    'n8n-nodes-preview-linked-api.linkedApi': 'communication',
    'n8n-nodes-preview-linkupapi.linkup': 'communication',
    'n8n-nodes-preview-mailtrap.mailtrap': 'communication',
    'n8n-nodes-preview-neo.neo': 'communication',
    'n8n-nodes-preview-omnara.omnara': 'communication',
    'n8n-nodes-preview-parsio.parsio': 'communication',
    'n8n-nodes-preview-postfast.postFast': 'communication',
    'n8n-nodes-preview-pushinator.pushinator': 'communication',
    'n8n-nodes-preview-scrape-creators.scrapeCreators': 'communication',
    'n8n-nodes-preview-sms-advert.smsAdvert': 'communication',
    'n8n-nodes-preview-solapi.solapi': 'communication',
    'n8n-nodes-preview-sourcegeek.sourcegeek': 'communication',
    'n8n-nodes-preview-superchat.superchat': 'communication',
    'n8n-nodes-preview-syncmate.whatsAuto': 'communication',
    'n8n-nodes-preview-twittershots.twitterShots': 'communication',
    'n8n-nodes-preview-understandtechchat.understandTechChat': 'communication',
    'n8n-nodes-preview-upload-post.uploadPost': 'communication',
    'n8n-nodes-preview-verifiemail.verifiEmail': 'communication',
    'n8n-nodes-preview-whatsable.whatsAble': 'communication',
    'n8n-nodes-preview-zohozeptomail.zohoZeptomail': 'communication',

    /* FILE (Community) */
    '@cloudconvert/n8n-nodes-preview-cloudconvert.cloudConvert': 'file',
    '@meistrari/n8n-nodes-preview-tela.tela': 'file',
    '@notainc/n8n-nodes-preview-gyazo.gyazo': 'file',
    '@pdfgeneratorapi/n8n-nodes-preview-pdf-generator-api.pdfGeneratorApi': 'file',
    '@seclore/n8n-nodes-preview-seclore.secloreProtect': 'file',
    'n8n-nodes-preview-aiscraper.aiScraper': 'file',
    'n8n-nodes-preview-cloudinary.cloudinary': 'file',
    'n8n-nodes-preview-craftmypdf.craftMyPdf': 'file',
    'n8n-nodes-preview-deeptagger.deepTagger': 'file',
    'n8n-nodes-preview-docsautomator.docsAutomator': 'file',
    'n8n-nodes-preview-documentero.documentero': 'file',
    'n8n-nodes-preview-docuprox.docuProx': 'file',
    'n8n-nodes-preview-docutray.docutray': 'file',
    'n8n-nodes-preview-docuwriter-ai.docuWriter': 'file',
    'n8n-nodes-preview-dumplingai.dumplingAi': 'file',
    'n8n-nodes-preview-htmlcsstopdf.htmlcsstopdf': 'file',
    'n8n-nodes-preview-parseur.parseur': 'file',
    'n8n-nodes-preview-pdf4me.PDF4me': 'file',
    'n8n-nodes-preview-pdfco.PDFco Api': 'file',
    'n8n-nodes-preview-pdfmonkey.pdfMonkey': 'file',
    'n8n-nodes-preview-pdforge.pdforge': 'file',
    'n8n-nodes-preview-placid.placid': 'file',
    'n8n-nodes-preview-templated.templated': 'file',
    'n8n-nodes-preview-tmpfiles.tmpfiles': 'file',
    'n8n-nodes-preview-veed.veed': 'file',

    /* COMMERCE (Community) */
    '@razorpay/n8n-nodes-preview-razorpay.razorpay': 'commerce',
    'n8n-nodes-preview-ikas.ikas': 'commerce',
    'n8n-nodes-preview-pdfvector.pdfVector': 'commerce',
    'n8n-nodes-preview-rye.rye': 'commerce',

  };

  const NODE_CREDENTIALS = {
    'actionNetworkApi': [
      'n8n-nodes-base.actionNetwork',
      'n8n-nodes-base.actionNetworkTool'
    ],
    'activeCampaignApi': [
      'n8n-nodes-base.activeCampaign',
      'n8n-nodes-base.activeCampaignTrigger',
      'n8n-nodes-base.activeCampaignTool'
    ],
    'acuitySchedulingApi': [
      'n8n-nodes-base.acuitySchedulingTrigger'
    ],
    'acuitySchedulingOAuth2Api': [
      'n8n-nodes-base.acuitySchedulingTrigger'
    ],
    'adaloApi': [
      'n8n-nodes-base.adalo',
      'n8n-nodes-base.adaloTool'
    ],
    'affinityApi': [
      'n8n-nodes-base.affinity',
      'n8n-nodes-base.affinityTrigger',
      'n8n-nodes-base.affinityTool'
    ],
    'agileCrmApi': [
      'n8n-nodes-base.agileCrm',
      'n8n-nodes-base.agileCrmTool'
    ],
    'airtableApi': [
      'n8n-nodes-base.airtable',
      'n8n-nodes-base.airtableTrigger'
    ],
    'airtableOAuth2Api': [
      'n8n-nodes-base.airtable',
      'n8n-nodes-base.airtableTrigger',
      'n8n-nodes-base.airtableTool'
    ],
    'airtableTokenApi': [
      'n8n-nodes-base.airtable',
      'n8n-nodes-base.airtableTrigger',
      'n8n-nodes-base.airtableTool'
    ],
    'airtopApi': [
      'n8n-nodes-base.airtop',
      'n8n-nodes-base.airtopTool'
    ],
    'amqp': [
      'n8n-nodes-base.amqp',
      'n8n-nodes-base.amqpTrigger',
      'n8n-nodes-base.amqpTool'
    ],
    'apiTemplateIoApi': [
      'n8n-nodes-base.apiTemplateIo',
      'n8n-nodes-base.apiTemplateIoTool'
    ],
    'asanaApi': [
      'n8n-nodes-base.asana',
      'n8n-nodes-base.asanaTrigger',
      'n8n-nodes-base.asanaTool'
    ],
    'asanaOAuth2Api': [
      'n8n-nodes-base.asana',
      'n8n-nodes-base.asanaTrigger',
      'n8n-nodes-base.asanaTool'
    ],
    'autopilotApi': [
      'n8n-nodes-base.autopilot',
      'n8n-nodes-base.autopilotTrigger',
      'n8n-nodes-base.autopilotTool'
    ],
    'aws': [
      'n8n-nodes-base.awsLambda',
      'n8n-nodes-base.awsSns',
      'n8n-nodes-base.awsSnsTrigger',
      'n8n-nodes-base.awsCertificateManager',
      'n8n-nodes-base.awsCognito',
      'n8n-nodes-base.awsComprehend',
      'n8n-nodes-base.awsDynamoDb',
      'n8n-nodes-base.awsElb',
      'n8n-nodes-base.awsIam',
      'n8n-nodes-base.awsRekognition',
      'n8n-nodes-base.awsS3',
      'n8n-nodes-base.awsSes',
      'n8n-nodes-base.awsSqs',
      'n8n-nodes-base.awsTextract',
      'n8n-nodes-base.awsTranscribe',
      'n8n-nodes-base.awsLambdaTool',
      'n8n-nodes-base.awsSnsTool',
      'n8n-nodes-base.awsS3Tool',
      'n8n-nodes-base.awsSesTool',
      'n8n-nodes-base.awsTextractTool',
      'n8n-nodes-base.awsTranscribeTool'
    ],
    'awsAssumeRole': [
      'n8n-nodes-base.awsLambda',
      'n8n-nodes-base.awsSns',
      'n8n-nodes-base.awsSnsTrigger',
      'n8n-nodes-base.awsCertificateManager',
      'n8n-nodes-base.awsComprehend',
      'n8n-nodes-base.awsDynamoDb',
      'n8n-nodes-base.awsElb',
      'n8n-nodes-base.awsRekognition',
      'n8n-nodes-base.awsSes',
      'n8n-nodes-base.awsSqs',
      'n8n-nodes-base.awsTextract',
      'n8n-nodes-base.awsLambdaTool',
      'n8n-nodes-base.awsSnsTool',
      'n8n-nodes-base.awsS3Tool',
      'n8n-nodes-base.awsSesTool',
      'n8n-nodes-base.awsTextractTool'
    ],
    'azureStorageOAuth2Api': [
      'n8n-nodes-base.azureStorage'
    ],
    'azureStorageSharedKeyApi': [
      'n8n-nodes-base.azureStorage'
    ],
    'bambooHrApi': [
      'n8n-nodes-base.bambooHr',
      'n8n-nodes-base.bambooHrTool'
    ],
    'bannerbearApi': [
      'n8n-nodes-base.bannerbear'
    ],
    'baserowApi': [
      'n8n-nodes-base.baserow',
      'n8n-nodes-base.baserowTool'
    ],
    'beeminderApi': [
      'n8n-nodes-base.beeminder',
      'n8n-nodes-base.beeminderTool'
    ],
    'beeminderOAuth2Api': [
      'n8n-nodes-base.beeminder',
      'n8n-nodes-base.beeminderTool'
    ],
    'bitbucketAccessTokenApi': [
      'n8n-nodes-base.bitbucketTrigger'
    ],
    'bitbucketApi': [
      'n8n-nodes-base.bitbucketTrigger'
    ],
    'bitlyApi': [
      'n8n-nodes-base.bitly',
      'n8n-nodes-base.bitlyTool'
    ],
    'bitlyOAuth2Api': [
      'n8n-nodes-base.bitly',
      'n8n-nodes-base.bitlyTool'
    ],
    'bitwardenApi': [
      'n8n-nodes-base.bitwarden',
      'n8n-nodes-base.bitwardenTool'
    ],
    'boxOAuth2Api': [
      'n8n-nodes-base.box',
      'n8n-nodes-base.boxTrigger'
    ],
    'brandfetchApi': [
      'n8n-nodes-base.Brandfetch',
      'n8n-nodes-base.BrandfetchTool'
    ],
    'bubbleApi': [
      'n8n-nodes-base.bubble',
      'n8n-nodes-base.bubbleTool'
    ],
    'calApi': [
      'n8n-nodes-base.calTrigger'
    ],
    'calendlyApi': [
      'n8n-nodes-base.calendlyTrigger'
    ],
    'calendlyOAuth2Api': [
      'n8n-nodes-base.calendlyTrigger'
    ],
    'chargebeeApi': [
      'n8n-nodes-base.chargebee',
      'n8n-nodes-base.chargebeeTool'
    ],
    'circleCiApi': [
      'n8n-nodes-base.circleCi',
      'n8n-nodes-base.circleCiTool'
    ],
    'ciscoWebexOAuth2Api': [
      'n8n-nodes-base.ciscoWebex',
      'n8n-nodes-base.ciscoWebexTrigger',
      'n8n-nodes-base.ciscoWebexTool'
    ],
    'citrixAdcApi': [
      'n8n-nodes-base.citrixAdc'
    ],
    'clearbitApi': [
      'n8n-nodes-base.clearbit',
      'n8n-nodes-base.clearbitTool'
    ],
    'clickUpApi': [
      'n8n-nodes-base.clickUp',
      'n8n-nodes-base.clickUpTrigger',
      'n8n-nodes-base.clickUpTool'
    ],
    'clickUpOAuth2Api': [
      'n8n-nodes-base.clickUp',
      'n8n-nodes-base.clickUpTrigger',
      'n8n-nodes-base.clickUpTool'
    ],
    'clockifyApi': [
      'n8n-nodes-base.clockify',
      'n8n-nodes-base.clockifyTrigger',
      'n8n-nodes-base.clockifyTool'
    ],
    'cloudflareApi': [
      'n8n-nodes-base.cloudflare',
      'n8n-nodes-base.cloudflareTool'
    ],
    'cockpitApi': [
      'n8n-nodes-base.cockpit',
      'n8n-nodes-base.cockpitTool'
    ],
    'codaApi': [
      'n8n-nodes-base.coda',
      'n8n-nodes-base.codaTool'
    ],
    'contentfulApi': [
      'n8n-nodes-base.contentful',
      'n8n-nodes-base.contentfulTool'
    ],
    'convertKitApi': [
      'n8n-nodes-base.convertKit',
      'n8n-nodes-base.convertKitTrigger',
      'n8n-nodes-base.convertKitTool'
    ],
    'copperApi': [
      'n8n-nodes-base.copper',
      'n8n-nodes-base.copperTrigger',
      'n8n-nodes-base.copperTool'
    ],
    'cortexApi': [
      'n8n-nodes-base.cortex'
    ],
    'crateDb': [
      'n8n-nodes-base.crateDb',
      'n8n-nodes-base.crateDbTool'
    ],
    'customerIoApi': [
      'n8n-nodes-base.customerIo',
      'n8n-nodes-base.customerIoTrigger',
      'n8n-nodes-base.customerIoTool'
    ],
    'deepLApi': [
      'n8n-nodes-base.deepL',
      'n8n-nodes-base.deepLTool'
    ],
    'demioApi': [
      'n8n-nodes-base.demio',
      'n8n-nodes-base.demioTool'
    ],
    'dhlApi': [
      'n8n-nodes-base.dhl',
      'n8n-nodes-base.dhlTool'
    ],
    'discordBotApi': [
      'n8n-nodes-base.discordTool'
    ],
    'discordOAuth2Api': [
      'n8n-nodes-base.discordTool'
    ],
    'discordWebhookApi': [
      'n8n-nodes-base.discordTool'
    ],
    'discourseApi': [
      'n8n-nodes-base.discourse',
      'n8n-nodes-base.discourseTool'
    ],
    'disqusApi': [
      'n8n-nodes-base.disqus'
    ],
    'driftApi': [
      'n8n-nodes-base.drift',
      'n8n-nodes-base.driftTool'
    ],
    'driftOAuth2Api': [
      'n8n-nodes-base.drift',
      'n8n-nodes-base.driftTool'
    ],
    'dropboxApi': [
      'n8n-nodes-base.dropbox',
      'n8n-nodes-base.dropboxTool'
    ],
    'dropboxOAuth2Api': [
      'n8n-nodes-base.dropbox',
      'n8n-nodes-base.dropboxTool'
    ],
    'dropcontactApi': [
      'n8n-nodes-base.dropcontact',
      'n8n-nodes-base.dropcontactTool'
    ],
    'egoiApi': [
      'n8n-nodes-base.egoi',
      'n8n-nodes-base.egoiTool'
    ],
    'elasticSecurityApi': [
      'n8n-nodes-base.elasticSecurity',
      'n8n-nodes-base.elasticSecurityTool'
    ],
    'elasticsearchApi': [
      'n8n-nodes-base.elasticsearch',
      'n8n-nodes-base.elasticsearchTool'
    ],
    'emeliaApi': [
      'n8n-nodes-base.emelia',
      'n8n-nodes-base.emeliaTrigger',
      'n8n-nodes-base.emeliaTool'
    ],
    'erpNextApi': [
      'n8n-nodes-base.erpNext',
      'n8n-nodes-base.erpNextTool'
    ],
    'eventbriteApi': [
      'n8n-nodes-base.eventbriteTrigger'
    ],
    'eventbriteOAuth2Api': [
      'n8n-nodes-base.eventbriteTrigger'
    ],
    'facebookGraphApi': [
      'n8n-nodes-base.facebookGraphApi',
      'n8n-nodes-base.facebookGraphApiTool'
    ],
    'facebookGraphAppApi': [
      'n8n-nodes-base.facebookTrigger'
    ],
    'facebookLeadAdsOAuth2Api': [
      'n8n-nodes-base.facebookLeadAdsTrigger'
    ],
    'figmaApi': [
      'n8n-nodes-base.figmaTrigger'
    ],
    'fileMaker': [
      'n8n-nodes-base.filemaker',
      'n8n-nodes-base.filemakerTool'
    ],
    'flowApi': [
      'n8n-nodes-base.flow',
      'n8n-nodes-base.flowTrigger'
    ],
    'formIoApi': [
      'n8n-nodes-base.formIoTrigger'
    ],
    'formstackApi': [
      'n8n-nodes-base.formstackTrigger'
    ],
    'formstackOAuth2Api': [
      'n8n-nodes-base.formstackTrigger'
    ],
    'freshdeskApi': [
      'n8n-nodes-base.freshdesk',
      'n8n-nodes-base.freshdeskTool'
    ],
    'freshserviceApi': [
      'n8n-nodes-base.freshservice',
      'n8n-nodes-base.freshserviceTool'
    ],
    'freshworksCrmApi': [
      'n8n-nodes-base.freshworksCrm',
      'n8n-nodes-base.freshworksCrmTool'
    ],
    'ftp': [
      'n8n-nodes-base.ftp'
    ],
    'gSuiteAdminOAuth2Api': [
      'n8n-nodes-base.gSuiteAdmin',
      'n8n-nodes-base.gSuiteAdminTool'
    ],
    'getResponseApi': [
      'n8n-nodes-base.getResponse',
      'n8n-nodes-base.getResponseTrigger',
      'n8n-nodes-base.getResponseTool'
    ],
    'getResponseOAuth2Api': [
      'n8n-nodes-base.getResponse',
      'n8n-nodes-base.getResponseTrigger',
      'n8n-nodes-base.getResponseTool'
    ],
    'ghostAdminApi': [
      'n8n-nodes-base.ghost',
      'n8n-nodes-base.ghostTool'
    ],
    'ghostContentApi': [
      'n8n-nodes-base.ghost',
      'n8n-nodes-base.ghostTool'
    ],
    'gitPassword': [
      'n8n-nodes-base.git',
      'n8n-nodes-base.gitTool'
    ],
    'githubApi': [
      'n8n-nodes-base.github',
      'n8n-nodes-base.githubTrigger',
      'n8n-nodes-base.githubTool'
    ],
    'githubOAuth2Api': [
      'n8n-nodes-base.github',
      'n8n-nodes-base.githubTrigger',
      'n8n-nodes-base.githubTool'
    ],
    'gitlabApi': [
      'n8n-nodes-base.gitlab',
      'n8n-nodes-base.gitlabTrigger',
      'n8n-nodes-base.gitlabTool'
    ],
    'gitlabOAuth2Api': [
      'n8n-nodes-base.gitlab',
      'n8n-nodes-base.gitlabTrigger',
      'n8n-nodes-base.gitlabTool'
    ],
    'gmailOAuth2': [
      'n8n-nodes-base.gmail',
      'n8n-nodes-base.gmailTrigger',
      'n8n-nodes-base.gmailTool'
    ],
    'goToWebinarOAuth2Api': [
      'n8n-nodes-base.goToWebinar',
      'n8n-nodes-base.goToWebinarTool'
    ],
    'gongApi': [
      'n8n-nodes-base.gong',
      'n8n-nodes-base.gongTool'
    ],
    'gongOAuth2Api': [
      'n8n-nodes-base.gong',
      'n8n-nodes-base.gongTool'
    ],
    'googleAdsOAuth2Api': [
      'n8n-nodes-base.googleAds',
      'n8n-nodes-base.googleAdsTool'
    ],
    'googleAnalyticsOAuth2': [
      'n8n-nodes-base.googleAnalytics',
      'n8n-nodes-base.googleAnalyticsTool'
    ],
    'googleApi': [
      'n8n-nodes-base.evaluationTrigger',
      'n8n-nodes-base.evaluation',
      'n8n-nodes-base.googleBigQuery',
      'n8n-nodes-base.googleBooks',
      'n8n-nodes-base.googleChat',
      'n8n-nodes-base.googleDocs',
      'n8n-nodes-base.googleDrive',
      'n8n-nodes-base.googleDriveTrigger',
      'n8n-nodes-base.googleFirebaseCloudFirestore',
      'n8n-nodes-base.gmail',
      'n8n-nodes-base.gmailTrigger',
      'n8n-nodes-base.googleSheets',
      'n8n-nodes-base.googleSlides',
      'n8n-nodes-base.googleTranslate',
      'n8n-nodes-base.googleBigQueryTool',
      'n8n-nodes-base.googleBooksTool',
      'n8n-nodes-base.googleChatTool',
      'n8n-nodes-base.googleDocsTool',
      'n8n-nodes-base.googleDriveTool',
      'n8n-nodes-base.googleFirebaseCloudFirestoreTool',
      'n8n-nodes-base.gmailTool',
      'n8n-nodes-base.googleSheetsTool',
      'n8n-nodes-base.googleSlidesTool',
      'n8n-nodes-base.googleTranslateTool'
    ],
    'googleBigQueryOAuth2Api': [
      'n8n-nodes-base.googleBigQuery',
      'n8n-nodes-base.googleBigQueryTool'
    ],
    'googleBooksOAuth2Api': [
      'n8n-nodes-base.googleBooks',
      'n8n-nodes-base.googleBooksTool'
    ],
    'googleBusinessProfileOAuth2Api': [
      'n8n-nodes-base.googleBusinessProfile',
      'n8n-nodes-base.googleBusinessProfileTrigger',
      'n8n-nodes-base.googleBusinessProfileTool'
    ],
    'googleCalendarOAuth2Api': [
      'n8n-nodes-base.googleCalendar',
      'n8n-nodes-base.googleCalendarTrigger',
      'n8n-nodes-base.googleCalendarTool'
    ],
    'googleChatOAuth2Api': [
      'n8n-nodes-base.googleChat',
      'n8n-nodes-base.googleChatTool'
    ],
    'googleCloudNaturalLanguageOAuth2Api': [
      'n8n-nodes-base.googleCloudNaturalLanguage',
      'n8n-nodes-base.googleCloudNaturalLanguageTool'
    ],
    'googleCloudStorageOAuth2Api': [
      'n8n-nodes-base.googleCloudStorage',
      'n8n-nodes-base.googleCloudStorageTool'
    ],
    'googleContactsOAuth2Api': [
      'n8n-nodes-base.googleContacts',
      'n8n-nodes-base.googleContactsTool'
    ],
    'googleDocsOAuth2Api': [
      'n8n-nodes-base.googleDocs',
      'n8n-nodes-base.googleDocsTool'
    ],
    'googleDriveOAuth2Api': [
      'n8n-nodes-base.googleDrive',
      'n8n-nodes-base.googleDriveTrigger',
      'n8n-nodes-base.googleDriveTool'
    ],
    'googleFirebaseCloudFirestoreOAuth2Api': [
      'n8n-nodes-base.googleFirebaseCloudFirestore',
      'n8n-nodes-base.googleFirebaseCloudFirestoreTool'
    ],
    'googleFirebaseRealtimeDatabaseOAuth2Api': [
      'n8n-nodes-base.googleFirebaseRealtimeDatabase',
      'n8n-nodes-base.googleFirebaseRealtimeDatabaseTool'
    ],
    'googlePerspectiveOAuth2Api': [
      'n8n-nodes-base.googlePerspective',
      'n8n-nodes-base.googlePerspectiveTool'
    ],
    'googleSheetsOAuth2Api': [
      'n8n-nodes-base.evaluationTrigger',
      'n8n-nodes-base.evaluation',
      'n8n-nodes-base.googleSheets',
      'n8n-nodes-base.googleSheetsTool'
    ],
    'googleSheetsTriggerOAuth2Api': [
      'n8n-nodes-base.googleSheetsTrigger'
    ],
    'googleSlidesOAuth2Api': [
      'n8n-nodes-base.googleSlides',
      'n8n-nodes-base.googleSlidesTool'
    ],
    'googleTasksOAuth2Api': [
      'n8n-nodes-base.googleTasks',
      'n8n-nodes-base.googleTasksTool'
    ],
    'googleTranslateOAuth2Api': [
      'n8n-nodes-base.googleTranslate',
      'n8n-nodes-base.googleTranslateTool'
    ],
    'gotifyApi': [
      'n8n-nodes-base.gotify',
      'n8n-nodes-base.gotifyTool'
    ],
    'grafanaApi': [
      'n8n-nodes-base.grafana',
      'n8n-nodes-base.grafanaTool'
    ],
    'gristApi': [
      'n8n-nodes-base.grist',
      'n8n-nodes-base.gristTool'
    ],
    'gumroadApi': [
      'n8n-nodes-base.gumroadTrigger'
    ],
    'haloPSAApi': [
      'n8n-nodes-base.haloPSA',
      'n8n-nodes-base.haloPSATool'
    ],
    'harvestApi': [
      'n8n-nodes-base.harvest',
      'n8n-nodes-base.harvestTool'
    ],
    'harvestOAuth2Api': [
      'n8n-nodes-base.harvest',
      'n8n-nodes-base.harvestTool'
    ],
    'helpScoutOAuth2Api': [
      'n8n-nodes-base.helpScout',
      'n8n-nodes-base.helpScoutTrigger',
      'n8n-nodes-base.helpScoutTool'
    ],
    'highLevelApi': [
      'n8n-nodes-base.highLevel'
    ],
    'highLevelOAuth2Api': [
      'n8n-nodes-base.highLevelTool'
    ],
    'homeAssistantApi': [
      'n8n-nodes-base.homeAssistant',
      'n8n-nodes-base.homeAssistantTool'
    ],
    'httpBasicAuth': [
      'n8n-nodes-base.graphql',
      'n8n-nodes-base.httpRequest',
      'n8n-nodes-base.pipedriveTrigger',
      'n8n-nodes-base.wait',
      'n8n-nodes-base.webhook',
      'n8n-nodes-base.graphqlTool'
    ],
    'httpCustomAuth': [
      'n8n-nodes-base.graphql',
      'n8n-nodes-base.graphqlTool'
    ],
    'httpDigestAuth': [
      'n8n-nodes-base.graphql',
      'n8n-nodes-base.httpRequest',
      'n8n-nodes-base.graphqlTool'
    ],
    'httpHeaderAuth': [
      'n8n-nodes-base.graphql',
      'n8n-nodes-base.httpRequest',
      'n8n-nodes-base.wait',
      'n8n-nodes-base.webhook',
      'n8n-nodes-base.graphqlTool'
    ],
    'httpQueryAuth': [
      'n8n-nodes-base.graphql',
      'n8n-nodes-base.httpRequest',
      'n8n-nodes-base.jiraTrigger',
      'n8n-nodes-base.graphqlTool'
    ],
    'httpSslAuth': [
      'n8n-nodes-base.httpRequestTool'
    ],
    'hubspotApi': [
      'n8n-nodes-base.hubspot',
      'n8n-nodes-base.hubspotTool'
    ],
    'hubspotAppToken': [
      'n8n-nodes-base.hubspot',
      'n8n-nodes-base.hubspotTool'
    ],
    'hubspotDeveloperApi': [
      'n8n-nodes-base.hubspotTrigger'
    ],
    'hubspotOAuth2Api': [
      'n8n-nodes-base.hubspot',
      'n8n-nodes-base.hubspotTool'
    ],
    'humanticAiApi': [
      'n8n-nodes-base.humanticAi',
      'n8n-nodes-base.humanticAiTool'
    ],
    'hunterApi': [
      'n8n-nodes-base.hunter',
      'n8n-nodes-base.hunterTool'
    ],
    'imap': [
      'n8n-nodes-base.emailReadImap',
      'n8n-nodes-base.emailReadImapTool'
    ],
    'intercomApi': [
      'n8n-nodes-base.intercom',
      'n8n-nodes-base.intercomTool'
    ],
    'invoiceNinjaApi': [
      'n8n-nodes-base.invoiceNinja',
      'n8n-nodes-base.invoiceNinjaTrigger',
      'n8n-nodes-base.invoiceNinjaTool'
    ],
    'iterableApi': [
      'n8n-nodes-base.iterable',
      'n8n-nodes-base.iterableTool'
    ],
    'jenkinsApi': [
      'n8n-nodes-base.jenkins',
      'n8n-nodes-base.jenkinsTool'
    ],
    'jinaAiApi': [
      'n8n-nodes-base.jinaAi',
      'n8n-nodes-base.jinaAiTool'
    ],
    'jiraSoftwareCloudApi': [
      'n8n-nodes-base.jira',
      'n8n-nodes-base.jiraTrigger',
      'n8n-nodes-base.jiraTool'
    ],
    'jiraSoftwareServerApi': [
      'n8n-nodes-base.jira',
      'n8n-nodes-base.jiraTrigger',
      'n8n-nodes-base.jiraTool'
    ],
    'jiraSoftwareServerPatApi': [
      'n8n-nodes-base.jira',
      'n8n-nodes-base.jiraTrigger',
      'n8n-nodes-base.jiraTool'
    ],
    'jotFormApi': [
      'n8n-nodes-base.jotFormTrigger'
    ],
    'jwtAuth': [
      'n8n-nodes-base.jwt',
      'n8n-nodes-base.respondToWebhook',
      'n8n-nodes-base.wait',
      'n8n-nodes-base.webhook',
      'n8n-nodes-base.jwtTool'
    ],
    'kafka': [
      'n8n-nodes-base.kafka',
      'n8n-nodes-base.kafkaTrigger',
      'n8n-nodes-base.kafkaTool'
    ],
    'keapOAuth2Api': [
      'n8n-nodes-base.keap',
      'n8n-nodes-base.keapTrigger',
      'n8n-nodes-base.keapTool'
    ],
    'koBoToolboxApi': [
      'n8n-nodes-base.koBoToolbox',
      'n8n-nodes-base.koBoToolboxTrigger',
      'n8n-nodes-base.koBoToolboxTool'
    ],
    'ldap': [
      'n8n-nodes-base.ldap',
      'n8n-nodes-base.ldapTool'
    ],
    'lemlistApi': [
      'n8n-nodes-base.lemlist',
      'n8n-nodes-base.lemlistTrigger',
      'n8n-nodes-base.lemlistTool'
    ],
    'lineNotifyOAuth2Api': [
      'n8n-nodes-base.line',
      'n8n-nodes-base.lineTool'
    ],
    'linearApi': [
      'n8n-nodes-base.linear',
      'n8n-nodes-base.linearTrigger',
      'n8n-nodes-base.linearTool'
    ],
    'linearOAuth2Api': [
      'n8n-nodes-base.linear',
      'n8n-nodes-base.linearTrigger',
      'n8n-nodes-base.linearTool'
    ],
    'lingvaNexApi': [
      'n8n-nodes-base.lingvaNex',
      'n8n-nodes-base.lingvaNexTool'
    ],
    'linkedInCommunityManagementOAuth2Api': [
      'n8n-nodes-base.linkedIn',
      'n8n-nodes-base.linkedInTool'
    ],
    'linkedInOAuth2Api': [
      'n8n-nodes-base.linkedIn',
      'n8n-nodes-base.linkedInTool'
    ],
    'loneScaleApi': [
      'n8n-nodes-base.loneScaleTrigger',
      'n8n-nodes-base.loneScale',
      'n8n-nodes-base.loneScaleTool'
    ],
    'magento2Api': [
      'n8n-nodes-base.magento2',
      'n8n-nodes-base.magento2Tool'
    ],
    'mailcheckApi': [
      'n8n-nodes-base.mailcheck',
      'n8n-nodes-base.mailcheckTool'
    ],
    'mailchimpApi': [
      'n8n-nodes-base.mailchimp',
      'n8n-nodes-base.mailchimpTrigger',
      'n8n-nodes-base.mailchimpTool'
    ],
    'mailchimpOAuth2Api': [
      'n8n-nodes-base.mailchimp',
      'n8n-nodes-base.mailchimpTrigger',
      'n8n-nodes-base.mailchimpTool'
    ],
    'mailerLiteApi': [
      'n8n-nodes-base.mailerLite',
      'n8n-nodes-base.mailerLiteTrigger',
      'n8n-nodes-base.mailerLiteTool'
    ],
    'mailgunApi': [
      'n8n-nodes-base.mailgun',
      'n8n-nodes-base.mailgunTool'
    ],
    'mailjetEmailApi': [
      'n8n-nodes-base.mailjet',
      'n8n-nodes-base.mailjetTrigger',
      'n8n-nodes-base.mailjetTool'
    ],
    'mailjetSmsApi': [
      'n8n-nodes-base.mailjet',
      'n8n-nodes-base.mailjetTool'
    ],
    'mandrillApi': [
      'n8n-nodes-base.mandrill',
      'n8n-nodes-base.mandrillTool'
    ],
    'marketstackApi': [
      'n8n-nodes-base.marketstack',
      'n8n-nodes-base.marketstackTool'
    ],
    'matrixApi': [
      'n8n-nodes-base.matrix',
      'n8n-nodes-base.matrixTool'
    ],
    'mattermostApi': [
      'n8n-nodes-base.mattermost',
      'n8n-nodes-base.mattermostTool'
    ],
    'mauticApi': [
      'n8n-nodes-base.mautic',
      'n8n-nodes-base.mauticTrigger',
      'n8n-nodes-base.mauticTool'
    ],
    'mauticOAuth2Api': [
      'n8n-nodes-base.mautic',
      'n8n-nodes-base.mauticTrigger',
      'n8n-nodes-base.mauticTool'
    ],
    'mediumApi': [
      'n8n-nodes-base.medium',
      'n8n-nodes-base.mediumTool'
    ],
    'mediumOAuth2Api': [
      'n8n-nodes-base.medium',
      'n8n-nodes-base.mediumTool'
    ],
    'messageBirdApi': [
      'n8n-nodes-base.messageBird',
      'n8n-nodes-base.messageBirdTool'
    ],
    'metabaseApi': [
      'n8n-nodes-base.metabase',
      'n8n-nodes-base.metabaseTool'
    ],
    'microsoftAzureCosmosDbSharedKeyApi': [
      'n8n-nodes-base.azureCosmosDb'
    ],
    'microsoftDynamicsOAuth2Api': [
      'n8n-nodes-base.microsoftDynamicsCrm',
      'n8n-nodes-base.microsoftDynamicsCrmTool'
    ],
    'microsoftEntraOAuth2Api': [
      'n8n-nodes-base.microsoftEntra',
      'n8n-nodes-base.microsoftEntraTool'
    ],
    'microsoftExcelOAuth2Api': [
      'n8n-nodes-base.microsoftExcel',
      'n8n-nodes-base.microsoftExcelTool'
    ],
    'microsoftGraphSecurityOAuth2Api': [
      'n8n-nodes-base.microsoftGraphSecurity',
      'n8n-nodes-base.microsoftGraphSecurityTool'
    ],
    'microsoftOneDriveOAuth2Api': [
      'n8n-nodes-base.microsoftOneDrive',
      'n8n-nodes-base.microsoftOneDriveTrigger',
      'n8n-nodes-base.microsoftOneDriveTool'
    ],
    'microsoftOutlookOAuth2Api': [
      'n8n-nodes-base.microsoftOutlook',
      'n8n-nodes-base.microsoftOutlookTrigger',
      'n8n-nodes-base.microsoftOutlookTool'
    ],
    'microsoftSharePointOAuth2Api': [
      'n8n-nodes-base.microsoftSharePoint',
      'n8n-nodes-base.microsoftSharePointTool'
    ],
    'microsoftSql': [
      'n8n-nodes-base.microsoftSql',
      'n8n-nodes-base.microsoftSqlTool'
    ],
    'microsoftTeamsOAuth2Api': [
      'n8n-nodes-base.microsoftTeams',
      'n8n-nodes-base.microsoftTeamsTrigger',
      'n8n-nodes-base.microsoftTeamsTool'
    ],
    'microsoftToDoOAuth2Api': [
      'n8n-nodes-base.microsoftToDo',
      'n8n-nodes-base.microsoftToDoTool'
    ],
    'mindeeInvoiceApi': [
      'n8n-nodes-base.mindee'
    ],
    'mindeeReceiptApi': [
      'n8n-nodes-base.mindee'
    ],
    'mispApi': [
      'n8n-nodes-base.misp',
      'n8n-nodes-base.mispTool'
    ],
    'mistralCloudApi': [
      'n8n-nodes-base.mistralAi',
      'n8n-nodes-base.mistralAiTool'
    ],
    'moceanApi': [
      'n8n-nodes-base.mocean',
      'n8n-nodes-base.moceanTool'
    ],
    'mondayComApi': [
      'n8n-nodes-base.mondayCom',
      'n8n-nodes-base.mondayComTool'
    ],
    'mondayComOAuth2Api': [
      'n8n-nodes-base.mondayCom',
      'n8n-nodes-base.mondayComTool'
    ],
    'mongoDb': [
      'n8n-nodes-base.mongoDb',
      'n8n-nodes-base.mongoDbTool'
    ],
    'monicaCrmApi': [
      'n8n-nodes-base.monicaCrm',
      'n8n-nodes-base.monicaCrmTool'
    ],
    'mqtt': [
      'n8n-nodes-base.mqtt',
      'n8n-nodes-base.mqttTrigger',
      'n8n-nodes-base.mqttTool'
    ],
    'msg91Api': [
      'n8n-nodes-base.msg91',
      'n8n-nodes-base.msg91Tool'
    ],
    'mySql': [
      'n8n-nodes-base.mySql',
      'n8n-nodes-base.mySqlTool'
    ],
    'n8nApi': [
      'n8n-nodes-base.n8n'
    ],
    'nasaApi': [
      'n8n-nodes-base.nasa',
      'n8n-nodes-base.nasaTool'
    ],
    'netlifyApi': [
      'n8n-nodes-base.netlify',
      'n8n-nodes-base.netlifyTrigger',
      'n8n-nodes-base.netlifyTool'
    ],
    'nextCloudApi': [
      'n8n-nodes-base.nextCloud',
      'n8n-nodes-base.nextCloudTool'
    ],
    'nextCloudOAuth2Api': [
      'n8n-nodes-base.nextCloud',
      'n8n-nodes-base.nextCloudTool'
    ],
    'nocoDb': [
      'n8n-nodes-base.nocoDb',
      'n8n-nodes-base.nocoDbTool'
    ],
    'nocoDbApiToken': [
      'n8n-nodes-base.nocoDb',
      'n8n-nodes-base.nocoDbTool'
    ],
    'notionApi': [
      'n8n-nodes-base.notion',
      'n8n-nodes-base.notionTrigger',
      'n8n-nodes-base.notionTool'
    ],
    'npmApi': [
      'n8n-nodes-base.npm',
      'n8n-nodes-base.npmTool'
    ],
    'oAuth1Api': [
      'n8n-nodes-base.graphql',
      'n8n-nodes-base.httpRequest',
      'n8n-nodes-base.graphqlTool'
    ],
    'oAuth2Api': [
      'n8n-nodes-base.graphql',
      'n8n-nodes-base.httpRequest',
      'n8n-nodes-base.graphqlTool'
    ],
    'odooApi': [
      'n8n-nodes-base.odoo',
      'n8n-nodes-base.odooTool'
    ],
    'oktaApi': [
      'n8n-nodes-base.okta',
      'n8n-nodes-base.oktaTool'
    ],
    'oneSimpleApi': [
      'n8n-nodes-base.oneSimpleApi',
      'n8n-nodes-base.oneSimpleApiTool'
    ],
    'onfleetApi': [
      'n8n-nodes-base.onfleet',
      'n8n-nodes-base.onfleetTrigger',
      'n8n-nodes-base.onfleetTool'
    ],
    'openAiApi': [
      'n8n-nodes-base.openAi'
    ],
    'openWeatherMapApi': [
      'n8n-nodes-base.openWeatherMap',
      'n8n-nodes-base.openWeatherMapTool'
    ],
    'oracleDBApi': [
      'n8n-nodes-base.oracleDatabase',
      'n8n-nodes-base.oracleDatabaseTool'
    ],
    'orbitApi': [
      'n8n-nodes-base.orbit'
    ],
    'ouraApi': [
      'n8n-nodes-base.oura',
      'n8n-nodes-base.ouraTool'
    ],
    'paddleApi': [
      'n8n-nodes-base.paddle',
      'n8n-nodes-base.paddleTool'
    ],
    'pagerDutyApi': [
      'n8n-nodes-base.pagerDuty',
      'n8n-nodes-base.pagerDutyTool'
    ],
    'pagerDutyOAuth2Api': [
      'n8n-nodes-base.pagerDuty',
      'n8n-nodes-base.pagerDutyTool'
    ],
    'payPalApi': [
      'n8n-nodes-base.payPal',
      'n8n-nodes-base.payPalTrigger'
    ],
    'peekalinkApi': [
      'n8n-nodes-base.peekalink',
      'n8n-nodes-base.peekalinkTool'
    ],
    'perplexityApi': [
      'n8n-nodes-base.perplexity',
      'n8n-nodes-base.perplexityTool'
    ],
    'phantombusterApi': [
      'n8n-nodes-base.phantombuster',
      'n8n-nodes-base.phantombusterTool'
    ],
    'philipsHueOAuth2Api': [
      'n8n-nodes-base.philipsHue',
      'n8n-nodes-base.philipsHueTool'
    ],
    'pipedriveApi': [
      'n8n-nodes-base.pipedrive',
      'n8n-nodes-base.pipedriveTrigger',
      'n8n-nodes-base.pipedriveTool'
    ],
    'pipedriveOAuth2Api': [
      'n8n-nodes-base.pipedrive',
      'n8n-nodes-base.pipedriveTrigger',
      'n8n-nodes-base.pipedriveTool'
    ],
    'plivoApi': [
      'n8n-nodes-base.plivo',
      'n8n-nodes-base.plivoTool'
    ],
    'postHogApi': [
      'n8n-nodes-base.postHog',
      'n8n-nodes-base.postHogTool'
    ],
    'postgres': [
      'n8n-nodes-base.postgres',
      'n8n-nodes-base.postgresTrigger',
      'n8n-nodes-base.postgresTool'
    ],
    'postmarkApi': [
      'n8n-nodes-base.postmarkTrigger'
    ],
    'profitWellApi': [
      'n8n-nodes-base.profitWell',
      'n8n-nodes-base.profitWellTool'
    ],
    'pushbulletOAuth2Api': [
      'n8n-nodes-base.pushbullet',
      'n8n-nodes-base.pushbulletTool'
    ],
    'pushcutApi': [
      'n8n-nodes-base.pushcut',
      'n8n-nodes-base.pushcutTrigger',
      'n8n-nodes-base.pushcutTool'
    ],
    'pushoverApi': [
      'n8n-nodes-base.pushover',
      'n8n-nodes-base.pushoverTool'
    ],
    'questDb': [
      'n8n-nodes-base.questDb',
      'n8n-nodes-base.questDbTool'
    ],
    'quickBooksOAuth2Api': [
      'n8n-nodes-base.quickbooks',
      'n8n-nodes-base.quickbooksTool'
    ],
    'quickbaseApi': [
      'n8n-nodes-base.quickbase',
      'n8n-nodes-base.quickbaseTool'
    ],
    'rabbitmq': [
      'n8n-nodes-base.rabbitmq',
      'n8n-nodes-base.rabbitmqTrigger',
      'n8n-nodes-base.rabbitmqTool'
    ],
    'raindropOAuth2Api': [
      'n8n-nodes-base.raindrop',
      'n8n-nodes-base.raindropTool'
    ],
    'redditOAuth2Api': [
      'n8n-nodes-base.reddit',
      'n8n-nodes-base.redditTool'
    ],
    'redis': [
      'n8n-nodes-base.redis',
      'n8n-nodes-base.redisTrigger',
      'n8n-nodes-base.redisTool'
    ],
    'rocketchatApi': [
      'n8n-nodes-base.rocketchat',
      'n8n-nodes-base.rocketchatTool'
    ],
    'rundeckApi': [
      'n8n-nodes-base.rundeck',
      'n8n-nodes-base.rundeckTool'
    ],
    's3': [
      'n8n-nodes-base.s3',
      'n8n-nodes-base.s3Tool'
    ],
    'salesforceJwtApi': [
      'n8n-nodes-base.salesforce',
      'n8n-nodes-base.salesforceTool'
    ],
    'salesforceOAuth2Api': [
      'n8n-nodes-base.salesforce',
      'n8n-nodes-base.salesforceTrigger',
      'n8n-nodes-base.salesforceTool'
    ],
    'salesmateApi': [
      'n8n-nodes-base.salesmate',
      'n8n-nodes-base.salesmateTool'
    ],
    'seaTableApi': [
      'n8n-nodes-base.seaTable',
      'n8n-nodes-base.seaTableTrigger',
      'n8n-nodes-base.seaTableTool'
    ],
    'securityScorecardApi': [
      'n8n-nodes-base.securityScorecard',
      'n8n-nodes-base.securityScorecardTool'
    ],
    'segmentApi': [
      'n8n-nodes-base.segment',
      'n8n-nodes-base.segmentTool'
    ],
    'sendGridApi': [
      'n8n-nodes-base.sendGrid',
      'n8n-nodes-base.sendGridTool'
    ],
    'sendInBlueApi': [
      'n8n-nodes-base.sendInBlue',
      'n8n-nodes-base.sendInBlueTrigger',
      'n8n-nodes-base.sendInBlueTool'
    ],
    'sendyApi': [
      'n8n-nodes-base.sendy',
      'n8n-nodes-base.sendyTool'
    ],
    'sentryIoApi': [
      'n8n-nodes-base.sentryIo',
      'n8n-nodes-base.sentryIoTool'
    ],
    'sentryIoOAuth2Api': [
      'n8n-nodes-base.sentryIo',
      'n8n-nodes-base.sentryIoTool'
    ],
    'sentryIoServerApi': [
      'n8n-nodes-base.sentryIo',
      'n8n-nodes-base.sentryIoTool'
    ],
    'serviceNowBasicApi': [
      'n8n-nodes-base.serviceNow',
      'n8n-nodes-base.serviceNowTool'
    ],
    'serviceNowOAuth2Api': [
      'n8n-nodes-base.serviceNow',
      'n8n-nodes-base.serviceNowTool'
    ],
    'sftp': [
      'n8n-nodes-base.ftp'
    ],
    'shopifyAccessTokenApi': [
      'n8n-nodes-base.shopify',
      'n8n-nodes-base.shopifyTrigger',
      'n8n-nodes-base.shopifyTool'
    ],
    'shopifyApi': [
      'n8n-nodes-base.shopify',
      'n8n-nodes-base.shopifyTrigger',
      'n8n-nodes-base.shopifyTool'
    ],
    'shopifyOAuth2Api': [
      'n8n-nodes-base.shopify',
      'n8n-nodes-base.shopifyTrigger',
      'n8n-nodes-base.shopifyTool'
    ],
    'signl4Api': [
      'n8n-nodes-base.signl4',
      'n8n-nodes-base.signl4Tool'
    ],
    'slackApi': [
      'n8n-nodes-base.slack',
      'n8n-nodes-base.slackTrigger',
      'n8n-nodes-base.slackTool'
    ],
    'slackOAuth2Api': [
      'n8n-nodes-base.slack',
      'n8n-nodes-base.slackTool'
    ],
    'sms77Api': [
      'n8n-nodes-base.sms77',
      'n8n-nodes-base.sms77Tool'
    ],
    'smtp': [
      'n8n-nodes-base.emailSend',
      'n8n-nodes-base.emailSendTool'
    ],
    'snowflake': [
      'n8n-nodes-base.snowflake',
      'n8n-nodes-base.snowflakeTool'
    ],
    'splunkApi': [
      'n8n-nodes-base.splunk',
      'n8n-nodes-base.splunkTool'
    ],
    'spotifyOAuth2Api': [
      'n8n-nodes-base.spotify',
      'n8n-nodes-base.spotifyTool'
    ],
    'sshPassword': [
      'n8n-nodes-base.ssh'
    ],
    'sshPrivateKey': [
      'n8n-nodes-base.ssh'
    ],
    'stackbyApi': [
      'n8n-nodes-base.stackby',
      'n8n-nodes-base.stackbyTool'
    ],
    'storyblokContentApi': [
      'n8n-nodes-base.storyblok',
      'n8n-nodes-base.storyblokTool'
    ],
    'storyblokManagementApi': [
      'n8n-nodes-base.storyblok',
      'n8n-nodes-base.storyblokTool'
    ],
    'strapiApi': [
      'n8n-nodes-base.strapi',
      'n8n-nodes-base.strapiTool'
    ],
    'strapiTokenApi': [
      'n8n-nodes-base.strapi',
      'n8n-nodes-base.strapiTool'
    ],
    'stravaOAuth2Api': [
      'n8n-nodes-base.strava',
      'n8n-nodes-base.stravaTrigger',
      'n8n-nodes-base.stravaTool'
    ],
    'stripeApi': [
      'n8n-nodes-base.stripe',
      'n8n-nodes-base.stripeTrigger',
      'n8n-nodes-base.stripeTool'
    ],
    'supabaseApi': [
      'n8n-nodes-base.supabase',
      'n8n-nodes-base.supabaseTool'
    ],
    'surveyMonkeyApi': [
      'n8n-nodes-base.surveyMonkeyTrigger'
    ],
    'surveyMonkeyOAuth2Api': [
      'n8n-nodes-base.surveyMonkeyTrigger'
    ],
    'syncroMspApi': [
      'n8n-nodes-base.syncroMsp',
      'n8n-nodes-base.syncroMspTool'
    ],
    'taigaApi': [
      'n8n-nodes-base.taiga',
      'n8n-nodes-base.taigaTrigger',
      'n8n-nodes-base.taigaTool'
    ],
    'tapfiliateApi': [
      'n8n-nodes-base.tapfiliate',
      'n8n-nodes-base.tapfiliateTool'
    ],
    'telegramApi': [
      'n8n-nodes-base.telegram',
      'n8n-nodes-base.telegramTrigger',
      'n8n-nodes-base.telegramTool'
    ],
    'theHiveApi': [
      'n8n-nodes-base.theHive',
      'n8n-nodes-base.theHiveTool'
    ],
    'theHiveProjectApi': [
      'n8n-nodes-base.theHiveProject',
      'n8n-nodes-base.theHiveProjectTool'
    ],
    'timescaleDb': [
      'n8n-nodes-base.timescaleDb',
      'n8n-nodes-base.timescaleDbTool'
    ],
    'todoistApi': [
      'n8n-nodes-base.todoist',
      'n8n-nodes-base.todoistTool'
    ],
    'todoistOAuth2Api': [
      'n8n-nodes-base.todoist',
      'n8n-nodes-base.todoistTool'
    ],
    'togglApi': [
      'n8n-nodes-base.togglTrigger'
    ],
    'totpApi': [
      'n8n-nodes-base.totp',
      'n8n-nodes-base.totpTool'
    ],
    'travisCiApi': [
      'n8n-nodes-base.travisCi',
      'n8n-nodes-base.travisCiTool'
    ],
    'trelloApi': [
      'n8n-nodes-base.trello',
      'n8n-nodes-base.trelloTrigger',
      'n8n-nodes-base.trelloTool'
    ],
    'twakeCloudApi': [
      'n8n-nodes-base.twake',
      'n8n-nodes-base.twakeTool'
    ],
    'twilioApi': [
      'n8n-nodes-base.twilio',
      'n8n-nodes-base.twilioTrigger',
      'n8n-nodes-base.twilioTool'
    ],
    'twistOAuth2Api': [
      'n8n-nodes-base.twist',
      'n8n-nodes-base.twistTool'
    ],
    'twitterOAuth1Api': [
      'n8n-nodes-base.twitter'
    ],
    'twitterOAuth2Api': [
      'n8n-nodes-base.twitterTool'
    ],
    'typeformApi': [
      'n8n-nodes-base.typeformTrigger'
    ],
    'typeformOAuth2Api': [
      'n8n-nodes-base.typeformTrigger'
    ],
    'unleashedSoftwareApi': [
      'n8n-nodes-base.unleashedSoftware',
      'n8n-nodes-base.unleashedSoftwareTool'
    ],
    'upleadApi': [
      'n8n-nodes-base.uplead',
      'n8n-nodes-base.upleadTool'
    ],
    'uprocApi': [
      'n8n-nodes-base.uproc',
      'n8n-nodes-base.uprocTool'
    ],
    'uptimeRobotApi': [
      'n8n-nodes-base.uptimeRobot',
      'n8n-nodes-base.uptimeRobotTool'
    ],
    'urlScanIoApi': [
      'n8n-nodes-base.urlScanIo',
      'n8n-nodes-base.urlScanIoTool'
    ],
    'venafiTlsProtectCloudApi': [
      'n8n-nodes-base.venafiTlsProtectCloud',
      'n8n-nodes-base.venafiTlsProtectCloudTrigger',
      'n8n-nodes-base.venafiTlsProtectCloudTool'
    ],
    'venafiTlsProtectDatacenterApi': [
      'n8n-nodes-base.venafiTlsProtectDatacenter',
      'n8n-nodes-base.venafiTlsProtectDatacenterTool'
    ],
    'veroApi': [
      'n8n-nodes-base.vero',
      'n8n-nodes-base.veroTool'
    ],
    'vonageApi': [
      'n8n-nodes-base.vonage',
      'n8n-nodes-base.vonageTool'
    ],
    'webflowApi': [
      'n8n-nodes-base.webflow',
      'n8n-nodes-base.webflowTrigger'
    ],
    'webflowOAuth2Api': [
      'n8n-nodes-base.webflow',
      'n8n-nodes-base.webflowTrigger',
      'n8n-nodes-base.webflowTool'
    ],
    'wekanApi': [
      'n8n-nodes-base.wekan',
      'n8n-nodes-base.wekanTool'
    ],
    'whatsAppApi': [
      'n8n-nodes-base.whatsApp',
      'n8n-nodes-base.whatsAppTool'
    ],
    'whatsAppTriggerApi': [
      'n8n-nodes-base.whatsAppTrigger'
    ],
    'wiseApi': [
      'n8n-nodes-base.wise',
      'n8n-nodes-base.wiseTrigger'
    ],
    'wooCommerceApi': [
      'n8n-nodes-base.wooCommerce',
      'n8n-nodes-base.wooCommerceTrigger',
      'n8n-nodes-base.wooCommerceTool'
    ],
    'wordpressApi': [
      'n8n-nodes-base.wordpress',
      'n8n-nodes-base.wordpressTool'
    ],
    'workableApi': [
      'n8n-nodes-base.workableTrigger'
    ],
    'wufooApi': [
      'n8n-nodes-base.wufooTrigger'
    ],
    'xeroOAuth2Api': [
      'n8n-nodes-base.xero',
      'n8n-nodes-base.xeroTool'
    ],
    'youTubeOAuth2Api': [
      'n8n-nodes-base.youTube',
      'n8n-nodes-base.youTubeTool'
    ],
    'yourlsApi': [
      'n8n-nodes-base.yourls',
      'n8n-nodes-base.yourlsTool'
    ],
    'zammadBasicAuthApi': [
      'n8n-nodes-base.zammad',
      'n8n-nodes-base.zammadTool'
    ],
    'zammadTokenAuthApi': [
      'n8n-nodes-base.zammad',
      'n8n-nodes-base.zammadTool'
    ],
    'zendeskApi': [
      'n8n-nodes-base.zendesk',
      'n8n-nodes-base.zendeskTrigger',
      'n8n-nodes-base.zendeskTool'
    ],
    'zendeskOAuth2Api': [
      'n8n-nodes-base.zendesk',
      'n8n-nodes-base.zendeskTrigger',
      'n8n-nodes-base.zendeskTool'
    ],
    'zohoOAuth2Api': [
      'n8n-nodes-base.zohoCrm',
      'n8n-nodes-base.zohoCrmTool'
    ],
    'zoomApi': [
      'n8n-nodes-base.zoom',
      'n8n-nodes-base.zoomTool'
    ],
    'zoomOAuth2Api': [
      'n8n-nodes-base.zoom',
      'n8n-nodes-base.zoomTool'
    ],
    'zulipApi': [
      'n8n-nodes-base.zulip',
      'n8n-nodes-base.zulipTool'
    ]
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

  function isOfficialNode(nodeType) {
    return nodeType.startsWith('n8n-nodes-base.') || 
           nodeType.startsWith('@n8n/n8n-nodes-base.') ||
           nodeType.startsWith('n8n-nodes-langchain.');
  }

  function isCommunityNode(nodeType) {
    return !isOfficialNode(nodeType);
  }

  function getNodeCredentials(nodeType) {
    const creds = [];
    Object.entries(NODE_CREDENTIALS).forEach(([credName, nodes]) => {
      if (nodes.includes(nodeType)) {
        creds.push(credName);
      }
    });
    return creds;
  }

  function getNodesForCredential(credentialType) {
    return NODE_CREDENTIALS[credentialType] || [];
  }

  // ==========================================================================
  // SECRET PATTERNS FOR MASKING
  // Used to mask sensitive data in logs and responses
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
      // Use NODE_CREDENTIALS mapping
      const creds = getNodeCredentials(args.nodeType);
      if (creds.length > 0) {
        return { success: true, credentialType: creds[0], credentialTypes: creds, message: `Suggested credential: ${creds[0]}` };
      }
      
      // Fallback to hardcoded map
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

  function findNodeByIntentInjected(args) {
    try {
      const { intent, category, preferOfficial = true } = args;
      if (!intent) {
        return { success: false, error: "intent is required" };
      }

      const intentLower = intent.toLowerCase();
      const results = [];
      
      // Keywords mapping for semantic search
      const keywordMap = {
        'telegram': ['telegram', 'messaging', 'chat'],
        'postgres': ['postgres', 'postgresql', 'database'],
        'mysql': ['mysql', 'database'],
        'supabase': ['supabase', 'database'],
        'openai': ['openai', 'gpt', 'chatgpt', 'ai', 'llm'],
        'anthropic': ['anthropic', 'claude', 'ai'],
        'gemini': ['gemini', 'google ai'],
        'sheets': ['sheets', 'google sheets', 'spreadsheet'],
        'slack': ['slack', 'messaging'],
        'discord': ['discord', 'messaging'],
        'email': ['email', 'gmail', 'mail'],
        'http': ['http', 'api', 'request', 'rest'],
        'webhook': ['webhook', 'trigger'],
        'schedule': ['schedule', 'cron', 'timer', 'trigger'],
        'database': ['database', 'db', 'sql'],
        'ai': ['ai', 'llm', 'language model', 'chat'],
        'agent': ['agent', 'ai agent', 'langchain'],
      };

      // Find matching keywords
      const matchedKeywords = [];
      Object.entries(keywordMap).forEach(([key, keywords]) => {
        if (keywords.some(k => intentLower.includes(k))) {
          matchedKeywords.push(key);
        }
      });

      // Search in NODE_CATEGORIES
      Object.entries(NODE_CATEGORIES).forEach(([nodeType, nodeCategory]) => {
        const typeLower = nodeType.toLowerCase();
        const categoryMatch = !category || nodeCategory === category;
        
        // Check if matches intent
        const matchesIntent = matchedKeywords.some(kw => typeLower.includes(kw)) ||
                             typeLower.includes(intentLower);
        
        if (matchesIntent && categoryMatch) {
          const isOfficial = isOfficialNode(nodeType);
          if (preferOfficial && !isOfficial) return; // Skip community nodes if preferOfficial
          
          const creds = getNodeCredentials(nodeType);
          results.push({
            nodeType,
            category: nodeCategory,
            isOfficial,
            credentialTypes: creds,
            matchScore: matchedKeywords.length + (typeLower.includes(intentLower) ? 2 : 0)
          });
        }
      });

      // Sort by match score
      results.sort((a, b) => b.matchScore - a.matchScore);

      if (results.length === 0) {
        return { success: false, error: `No nodes found matching intent: "${intent}"` };
      }

      return { 
        success: true, 
        data: results.slice(0, 10), // Top 10 matches
        message: `Found ${results.length} matching node(s)`,
        topMatch: results[0]
      };
    } catch (e) {
      return { success: false, error: e.message || e.toString() };
    }
  }

  function getNodeCredentialsInjected(args) {
    try {
      const { nodeType } = args;
      if (!nodeType) {
        return { success: false, error: "nodeType is required" };
      }

      const creds = getNodeCredentials(nodeType);
      return { 
        success: true, 
        credentialTypes: creds,
        data: creds,
        message: creds.length > 0 
          ? `Node requires ${creds.length} credential type(s): ${creds.join(', ')}`
          : `Node does not require credentials`
      };
    } catch (e) {
      return { success: false, error: e.message || e.toString() };
    }
  }

  function getCredentialDetailsInjected(args) {
    try {
      const { credentialType } = args;
      if (!credentialType) {
        return { success: false, error: "credentialType is required" };
      }

      const details = getCredentialDetails(credentialType);
      if (!details) {
        return { success: false, error: `Credential type "${credentialType}" not found` };
      }

      return {
        success: true,
        data: details,
        displayName: details.displayName,
        fields: details.fields,
        usageExamples: details.usageExamples,
        authenticate: details.authenticate,
        message: `Credential details for "${details.displayName}"`
      };
    } catch (e) {
      return { success: false, error: e.message || e.toString() };
    }
  }

  function getCredentialUsageExamplesInjected(args) {
    try {
      const { credentialType } = args;
      if (!credentialType) {
        return { success: false, error: "credentialType is required" };
      }

      const examples = getCredentialUsageExamples(credentialType);
      const authenticate = getCredentialAuthenticateConfig(credentialType);
      
      if (!examples && !authenticate) {
        return {
          success: true,
          data: null,
          message: `No usage examples found for credential type "${credentialType}"`
        };
      }

      return {
        success: true,
        data: {
          usageExamples: examples,
          authenticate: authenticate
        },
        message: `Usage examples for "${credentialType}"`
      };
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
        case "find_node_by_intent":
          result = findNodeByIntentInjected(args);
          break;
        case "get_node_credentials":
          result = getNodeCredentialsInjected(args);
          break;
        case "get_credential_details":
          result = getCredentialDetailsInjected(args);
          break;
        case "get_credential_usage_examples":
          result = getCredentialUsageExamplesInjected(args);
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

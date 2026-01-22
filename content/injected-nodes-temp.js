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

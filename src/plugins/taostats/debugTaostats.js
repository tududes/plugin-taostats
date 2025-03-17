// Debug script for Taostats plugin
import dotenv from 'dotenv';
import { TaostatsApiClient } from './api/client.ts';
import { DEFAULT_CONFIG } from './api/types.ts';

// Load environment variables
dotenv.config();

// Create a logger function
const logger = {
  info: (message) => console.log(`[${new Date().toISOString()}] INFO: ${message}`),
  error: (message) => console.error(`[${new Date().toISOString()}] ERROR: ${message}`),
  debug: (message) => console.log(`[${new Date().toISOString()}] DEBUG: ${message}`)
};

// Utility function to wait for a specified time
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Test the API client
async function testTaostatsAPI() {
  logger.info('Starting Taostats API test');
  
  // Check if API key is available
  const apiKey = process.env.TAOSTATS_API_KEY;
  if (!apiKey) {
    logger.error('No API key found. Please set TAOSTATS_API_KEY in your .env file');
    return;
  }
  
  logger.info(`API key format: ${apiKey.substring(0, 5)}...`);
  
  // Create API client with a longer timeout for testing
  const apiClient = new TaostatsApiClient({
    apiKey,
    baseUrl: DEFAULT_CONFIG.baseUrl,
    timeoutMs: 30000, // 30 seconds timeout for testing
  });
  
  logger.info(`API client created with base URL: ${DEFAULT_CONFIG.baseUrl}`);
  
  // Helper function to test an API endpoint
  async function testEndpoint(name, methodName, ...args) {
    logger.info(`Testing ${name} endpoint...`);
    try {
      if (typeof apiClient[methodName] !== 'function') {
        logger.error(`❌ ${name} - Method not found in API client: ${methodName}`);
        return false;
      }

      const timeoutId = setTimeout(() => {
        logger.error(`TIMEOUT: ${name} call is hanging!`);
      }, 20000); // 20 second timeout
      
      const response = await apiClient[methodName](...args);
      
      clearTimeout(timeoutId);
      
      if (response.success && response.data) {
        logger.info(`✅ ${name} - Success!`);
        logger.debug(`Response data preview: ${JSON.stringify(response.data).substring(0, 300)}...`);
        return true;
      } else {
        logger.error(`❌ ${name} - Failed: ${response.error || 'Unknown error'}`);
        return false;
      }
    } catch (error) {
      logger.error(`❌ ${name} - Exception: ${error.message}`);
      if (error.stack) {
        logger.debug(`Stack trace: ${error.stack}`);
      }
      // If rate limited, note this for the caller
      if (error.message && error.message.includes('Too Many Requests')) {
        return 'rate_limited';
      }
      return false;
    }
  }
  
  // Sample SS58 addresses for testing
  const sampleAddress = '5F59CakqH5RUmFVPuorGKTQ5SuhE2HiGQQFcXoyHwXP6sjbV';
  const sampleHotkey = '5F59CakqH5RUmFVPuorGKTQ5SuhE2HiGQQFcXoyHwXP6sjbV';
  const sampleColdkey = '5F59CakqH5RUmFVPuorGKTQ5SuhE2HiGQQFcXoyHwXP6sjbV';
  const sampleNetuid = 1; // Root subnet

  // Test classic endpoints as a baseline
  const classicTests = [
    { name: 'getPrice', methodName: 'getPrice', args: [] },
  ];
  
  // Test dTAO Endpoints (newly added)
  const dTAOTests = [
    { name: 'getDTAOPoolLatest', methodName: 'getDTAOPoolLatest', args: [sampleNetuid] },
    { name: 'getDTAOSubnetEmission', methodName: 'getDTAOSubnetEmission', args: [sampleNetuid] },
  ];
  
  // Test EVM Endpoints (newly added)
  const evmTests = [
    { name: 'getEVMAddressFromSS58', methodName: 'getEVMAddressFromSS58', args: [sampleAddress] },
  ];
  
  // Test Metagraph Endpoints (newly added)
  const metagraphTests = [
    { name: 'getMetagraphLatest', methodName: 'getMetagraphLatest', args: [sampleNetuid] },
    { name: 'getRootMetagraphLatest', methodName: 'getRootMetagraphLatest', args: [] },
  ];
  
  // Test Accounting Endpoints (newly added)
  const accountingTests = [
    { name: 'getColdkeyReport', methodName: 'getColdkeyReport', args: [sampleColdkey] },
  ];
  
  // Test API methods
  const apiCategories = [
    { name: 'Classic', tests: classicTests },
    { name: 'dTAO', tests: dTAOTests },
    { name: 'EVM', tests: evmTests },
    { name: 'Metagraph', tests: metagraphTests },
    { name: 'Accounting', tests: accountingTests },
  ];
  
  // Run only a random selection of tests - for this demo we're picking exactly one from each category
  const randomTests = [];
  
  for (const category of apiCategories) {
    const randomIndex = Math.floor(Math.random() * category.tests.length);
    const selectedTest = category.tests[randomIndex];
    randomTests.push({
      ...selectedTest,
      category: category.name
    });
  }
  
  logger.info('\n=== Selected Random Tests ===');
  randomTests.forEach(test => logger.info(`- ${test.category}: ${test.name}`));
  logger.info('');
  
  let passedTests = 0;
  let failedTests = 0;
  let totalTests = randomTests.length;
  let rateLimitedTests = 0;
  
  for (const test of randomTests) {
    logger.info(`\n=== Testing ${test.category} API endpoint: ${test.name} ===\n`);
    
    const args = test.args || [];
    const result = await testEndpoint(test.name, test.methodName, ...args);
    
    if (result === true) {
      passedTests++;
    } else if (result === 'rate_limited') {
      rateLimitedTests++;
      logger.info(`Endpoint ${test.name} was rate limited, will retry later`);
    } else {
      failedTests++;
    }
    
    // Add a delay between requests to avoid rate limiting
    await wait(2000);
  }
  
  logger.info(`\n=== Test summary ===`);
  logger.info(`✅ ${passedTests}/${totalTests} tests passed`);
  logger.info(`❌ ${failedTests}/${totalTests} tests failed`);
  logger.info(`⏱️ ${rateLimitedTests}/${totalTests} tests were rate limited`);
}

// Run the test
testTaostatsAPI().catch(error => {
  logger.error(`Unhandled error: ${error.message}`);
  process.exit(1);
}); 
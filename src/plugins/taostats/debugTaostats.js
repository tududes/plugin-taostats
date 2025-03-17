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
  
  logger.info(`API key format: ${apiKey.substring(0, 10)}...`);
  
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
  
  // Select a small subset of tests to run to avoid rate limiting
  // Test Price Endpoints
  const priceTests = [
    { name: 'getPrice', methodName: 'getPrice', args: [] },
  ];
  
  // Test Network/Block Endpoints
  const networkTests = [
    { name: 'getBlocks', methodName: 'getBlocks', args: [5] },
    { name: 'getNetworkStats', methodName: 'getNetworkStats', args: [] },
  ];
  
  // Test Subnet Endpoints
  const subnetTests = [
    { name: 'getSubnets', methodName: 'getSubnets', args: [] },
  ];
  
  // Test Validator Endpoints
  const validatorTests = [
    { name: 'getValidator', methodName: 'getValidator', args: ['5F59CakqH5RUmFVPuorGKTQ5SuhE2HiGQQFcXoyHwXP6sjbV'] },
  ];
  
  // Test Account Endpoints
  const accountTests = [
    { name: 'getAccount', methodName: 'getAccount', args: ['5F59CakqH5RUmFVPuorGKTQ5SuhE2HiGQQFcXoyHwXP6sjbV'] },
  ];
  
  // Test API methods
  const apiCategories = [
    { name: 'Price', tests: priceTests },
    { name: 'Network', tests: networkTests },
    { name: 'Subnet', tests: subnetTests },
    { name: 'Validator', tests: validatorTests },
    { name: 'Account', tests: accountTests },
  ];
  
  let passedTests = 0;
  let failedTests = 0;
  let totalTests = 0;
  let rateLimitedTests = 0;
  
  for (const category of apiCategories) {
    logger.info(`\n=== Testing ${category.name} API endpoints ===\n`);
    
    for (const test of category.tests) {
      totalTests++;
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
      await wait(1500);
    }
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
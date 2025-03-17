# Taostats API Plugin

This plugin provides a client for interacting with the [Taostats API](https://taostats.io/), which offers comprehensive data about the Bittensor network, including prices, validators, subnets, and more.

## Installation

```bash
npm install plugin-taostats
```

## Configuration

Set up your environment variables in a `.env` file:

```
TAOSTATS_API_KEY=your_api_key_here
```

## Usage

### Basic Usage

```javascript
import { TaostatsApiClient } from 'plugin-taostats';

// Create an API client
const taostatsClient = new TaostatsApiClient({
  apiKey: process.env.TAOSTATS_API_KEY,
  // Optional configuration
  // baseUrl: 'https://api.taostats.io/api',
  // timeoutMs: 10000,
  // rateLimitPerMinute: 60,
});

// Example: Get current price
const priceData = await taostatsClient.getPrice();
console.log(`Current TAO price: $${priceData.data.price}`);
```

### Response Format

All API responses follow a standard format:

```javascript
{
  success: boolean,
  data?: T,
  error?: string
}
```

## Available Endpoints

The client provides access to the following categories of endpoints:

### Price Endpoints

- `getPrice(asset = 'tao')`: Get the current price
- `getPriceHistory(interval = '1d', limit = 30)`: Get historical price data
- `getPriceOHLC(interval = '1d', limit = 30)`: Get OHLC price data
- `getTradingViewHistory(resolution = 'D', from?, to?)`: Get data for TradingView charts

### Network/Block Endpoints

- `getBlocks(limit = 10)`: Get recent blocks
- `getNetworkStats()`: Get network statistics
- `getStatus()`: Get API status
- `getBlockInterval()`: Get block interval information
- `getRuntimeVersionLatest()`: Get latest runtime version
- `getRuntimeVersionHistory(limit = 10)`: Get runtime version history

### Subnet Endpoints

- `getSubnets()`: Get all subnets
- `getSubnet(netuid)`: Get details for a specific subnet
- `getSubnetHistory(netuid, limit = 10)`: Get history for a specific subnet
- `getSubnetOwner(netuid)`: Get the owner of a subnet
- `getSubnetDescription(netuid)`: Get the description of a subnet
- `getSubnetRegistrationCostLatest()`: Get latest subnet registration cost
- `getSubnetRegistrationCostHistory(limit = 10)`: Get history of subnet registration costs
- `getSubnetIPDistribution(netuid)`: Get IP distribution for a subnet
- `getSubnetColdkeyDistribution(netuid)`: Get coldkey distribution for a subnet
- `getSubnetIncentiveDistribution(netuid)`: Get incentive distribution for a subnet
- `getSubnetRegistrations(limit = 10)`: Get recent subnet registrations
- `getSubnetNeuronRegistrations(netuid, limit = 10)`: Get neuron registrations for a subnet
- `getSubnetNeuronDeregistrations(netuid, limit = 10)`: Get neuron deregistrations for a subnet
- `getSubnetEmission(netuid)`: Get emission for a subnet

### Validator Endpoints

- `getValidator(hotkey)`: Get details for a specific validator
- `getValidatorHistory(hotkey, limit = 10)`: Get history for a specific validator
- `getValidatorsInSubnet(netuid, limit = 10)`: Get validators in a specific subnet
- `getValidatorWeightsLatest(hotkey)`: Get latest weights for a validator
- `getValidatorWeightsHistory(hotkey, limit = 10)`: Get weight history for a validator
- `getValidatorMetricsLatest(hotkey)`: Get latest metrics for a validator
- `getValidatorMetricsHistory(hotkey, limit = 10)`: Get metric history for a validator
- `getValidatorPerformance(hotkey)`: Get performance metrics for a validator
- `getValidatorIdentity(hotkey)`: Get identity information for a validator
- `getWeightCopiers(netuid, limit = 10)`: Get validators copying weights in a subnet
- `getHotkeyFamilyLatest(hotkey)`: Get parent/child relationships for a hotkey
- `getHotkeyFamilyHistory(hotkey, limit = 10)`: Get history of parent/child relationships
- `getValidatorAlphaSharesLatest(hotkey)`: Get alpha shares for a validator
- `getValidatorAlphaSharesHistory(hotkey, limit = 10)`: Get history of alpha shares

### dTAO Endpoints

- `getDTAOValidator(hotkey)`: Get dTAO validator details
- `getDTAOValidatorHistory(hotkey, limit = 10)`: Get dTAO validator history
- `getDTAOValidatorPerformanceLatest(hotkey)`: Get dTAO validator performance
- `getDTAOValidatorPerformanceHistory(hotkey, limit = 10)`: Get dTAO validator performance history
- `getDTAOStakeBalanceLatest(coldkey, hotkey)`: Get dTAO stake balance
- `getDTAOStakeBalanceHistory(coldkey, hotkey, limit = 10)`: Get dTAO stake balance history
- `getDTAOStakeBalanceAggregated(coldkey)`: Get aggregated dTAO stake balance
- `getDTAODelegationEvents(limit = 10)`: Get dTAO delegation events
- `getDTAOSlippage()`: Get dTAO slippage information
- `getDTAOPoolLatest(netuid)`: Get latest dTAO subnet pool information
- `getDTAOPoolHistory(netuid, limit = 10)`: Get dTAO subnet pool history
- `getDTAOSubnetEmission(netuid)`: Get dTAO subnet emission

### Account Endpoints

- `getAccount(address)`: Get account details
- `getAccountHistory(address, limit = 10)`: Get account history
- `getStakeBalanceLatest(coldkey, hotkey)`: Get latest stake balance
- `getStakeBalanceHistory(coldkey, hotkey, limit = 10, block_start?, block_end?, timestamp_start?, timestamp_end?)`: Get stake balance history

### Event and Extrinsic Endpoints

- `getEvents(module?, method?, limit = 10)`: Get event data
- `getExtrinsics(module?, method?, limit = 10)`: Get extrinsic data
- `getTransfers(address?, limit = 10)`: Get transfer data
- `getExchanges()`: Get exchange data
- `getChainCalls(limit = 10)`: Get chain calls
- `getProxyCalls(limit = 10)`: Get proxy calls

### Accounting Endpoints

- `getAccounting(address, startBlock?, endBlock?, startTimestamp?, endTimestamp?)`: Get accounting information
- `getColdkeyReport(coldkey, startTimestamp?, endTimestamp?)`: Get coldkey report
- `getColdkeyReportCSV(coldkey, startTimestamp?, endTimestamp?)`: Get coldkey report as CSV

### Delegation Endpoints

- `getDelegationEvents(limit = 10)`: Get delegation events

### Metagraph Endpoints

- `getMetagraphLatest(netuid)`: Get latest metagraph data
- `getMetagraphHistory(netuid, limit = 10)`: Get metagraph history
- `getRootMetagraphLatest()`: Get latest root metagraph data
- `getRootMetagraphHistory(limit = 10)`: Get root metagraph history

### EVM Endpoints

- `getEVMAddressFromSS58(address)`: Convert SS58 address to EVM address
- `getEVMBlock(blockNumber?, hash?, limit = 10)`: Get EVM blocks
- `getEVMTransaction(hash)`: Get EVM transaction
- `getEVMContract(address)`: Get EVM contract
- `getEVMLog(address?, topic0?, topic1?, topic2?, topic3?, limit = 10)`: Get EVM logs

## Debugging and Testing

To help verify that the API client is working properly, you can use the included debugging script that tests randomly selected endpoints from different categories:

```bash
# Make sure your API key is in the .env file
echo "TAOSTATS_API_KEY=your_api_key_here" > .env

# Run the debugging script
node --loader ts-node/esm src/plugins/taostats/debugTaostats.js
```

The script will:
1. Select one random endpoint from each of these categories: Classic, dTAO, EVM, Metagraph, and Accounting
2. Execute each selected endpoint with sample parameters
3. Display the results of each call, including success or error information
4. Provide a summary of which calls succeeded and which failed

This is helpful for:
- Verifying your API key is working
- Testing API connectivity 
- Validating that new endpoints are functioning correctly
- Checking if rate limiting is affecting your requests

## Rate Limiting

The Taostats API has rate limits in place. The client implements a basic rate limiter to help manage requests. If you encounter rate limiting errors, consider:

1. Reducing the frequency of your requests
2. Using a higher `rateLimitPerMinute` value in your configuration if your API key allows it
3. Implementing retry logic with exponential backoff

## License

MIT

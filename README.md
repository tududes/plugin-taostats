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

## Debugging

You can use the included debugger script to test the API connectivity:

```bash
node --loader ts-node/esm src/plugins/taostats/debugTaostats.js
```

## Rate Limiting

The Taostats API has rate limits in place. The client implements a basic rate limiter to help manage requests. If you encounter rate limiting errors, consider:

1. Reducing the frequency of your requests
2. Using a higher `rateLimitPerMinute` value in your configuration if your API key allows it
3. Implementing retry logic with exponential backoff

## License

MIT

# Taostats Plugin for Eliza

The Taostats plugin allows you to access data from the Bittensor network using the [Taostats API](https://docs.taostats.io/reference/welcome-to-the-taostats-api). This plugin provides a comprehensive set of actions to retrieve and display information about the Bittensor ecosystem.

## Features

The Taostats plugin provides the following features:

### Price Information
- Get current TAO price and market data
- View TAO price history with different time intervals

### Network Statistics
- Get information about recent blocks
- View network statistics (block height, accounts, transfers, etc.)

### Subnet Information
- List all available subnets
- Get detailed information about specific subnets

### Validator Information
- Look up validator details by hotkey
- View validators in a specific subnet

### Account Information
- Get account details by address
- View balance, stake, and recent transfers

## Setup

To use the Taostats plugin, you need to obtain an API key from [dash.taostats.io](https://dash.taostats.io) and add it to your `.env` file:

```
TAOSTATS_API_KEY=your_api_key_here
```

## Usage

### Running with the Taostats Character

The easiest way to use the Taostats plugin is to run Eliza with the provided Taostats character:

```bash
pnpm mock-eliza --characters=./characters/taostats.character.json
```

### Example Queries

Here are some example queries you can use with the Taostats plugin:

#### Price Information
- "What is the current price of TAO?"
- "Show me TAO market data"
- "What's the TAO price history for the past week?"

#### Network Statistics
- "Show me recent blocks on Bittensor"
- "What are the latest blocks?"
- "Show me Bittensor network statistics"

#### Subnet Information
- "List all available subnets"
- "Show me details for subnet 1"
- "Tell me about subnet 11"

#### Validator Information
- "Show me validator 5FTyhanfLEhLkbLLvR3asqwb5hKFhLzKpnpPLqNepyAF3Snn"
- "Show me validators in subnet 1"
- "Who are the validators in subnet 5?"

#### Account Information
- "Show me account 5FTyhanfLEhLkbLLvR3asqwb5hKFhLzKpnpPLqNepyAF3Snn"
- "Get information about wallet 5FTyhanfLEhLkbLLvR3asqwb5hKFhLzKpnpPLqNepyAF3Snn"
- "Tell me about coldkey 5FTyhanfLEhLkbLLvR3asqwb5hKFhLzKpnpPLqNepyAF3Snn"

## Implementation Details

The Taostats plugin is implemented with the following components:

- **API Client**: Handles communication with the Taostats API
- **Actions**: Define the different capabilities of the plugin
- **Formatting Utilities**: Format the API responses for display
- **Error Handling**: Handle API errors and validate user input

### API Client

The API client is responsible for making requests to the Taostats API. It handles authentication, rate limiting, and error handling.

### Actions

The plugin defines several actions that can be triggered by user queries:

- `TAOSTATS_PRICE_ACTION`: Get current TAO price
- `TAOSTATS_PRICE_HISTORY_ACTION`: Get TAO price history
- `TAOSTATS_BLOCKS_ACTION`: Get recent blocks
- `TAOSTATS_NETWORK_STATS_ACTION`: Get network statistics
- `TAOSTATS_SUBNETS_LIST_ACTION`: List available subnets
- `TAOSTATS_SUBNET_DETAILS_ACTION`: Get subnet details
- `TAOSTATS_VALIDATOR_ACTION`: Get validator details
- `TAOSTATS_VALIDATORS_IN_SUBNET_ACTION`: Get validators in a subnet
- `TAOSTATS_ACCOUNT_ACTION`: Get account details

Each action has a validation function that determines if it should be triggered based on the user's query, and a handler function that retrieves and formats the data.

## Extending the Plugin

You can extend the Taostats plugin by adding new actions or enhancing existing ones. Here are some ideas:

- Add support for more Taostats API endpoints
- Implement data visualization for price history
- Add support for comparing multiple validators or subnets
- Implement caching to reduce API calls

## Resources

- [Taostats API Documentation](https://docs.taostats.io/reference/welcome-to-the-taostats-api)
- [Taostats Dashboard](https://taostats.io/)
- [Bittensor Documentation](https://docs.bittensor.com/) 
# Taostats Plugin for Eliza

A plugin for the [Eliza](https://github.com/ai16z/eliza) AI agent framework that provides access to Bittensor network data using the [Taostats API](https://docs.taostats.io/).

## Features

The Taostats plugin offers comprehensive access to Bittensor network data:

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

## Prerequisites

- Node.js 23+
- pnpm
- Taostats API key (obtain from [dash.taostats.io](https://dash.taostats.io))

## Setup

1. Clone this repository:
```bash
git clone https://github.com/yourusername/plugin-taostats.git
cd plugin-taostats
```

2. Install dependencies:
```bash
pnpm install
```

3. Create a `.env` file in the root directory and add your Taostats API key:
```
TAOSTATS_API_KEY=your_api_key_here
```
You can use the provided `.env.example.taostats` file as a template.

4. Compile the TypeScript code:
```bash
pnpm tsc
```

## Usage

### Running with the Taostats Character

Run Eliza with the provided Taostats character:

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

## Project Structure

```
src/
  ├── plugins/
  │   └── taostats/            # Taostats plugin implementation
  │       ├── actions/         # Plugin actions (price, network, validator, etc.)
  │       ├── api/             # API client and type definitions
  │       └── utils/           # Formatting and error handling utilities
  ├── common/                  # Shared utilities and types
  └── index.ts                 # Main entry point
docs/
  └── TAOSTATS_PLUGIN.md       # Detailed plugin documentation
characters/
  └── taostats.character.json  # Taostats character definition
```

## Documentation

For more detailed information about the Taostats plugin, refer to the [documentation](docs/TAOSTATS_PLUGIN.md).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT

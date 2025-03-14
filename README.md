# Taostats Plugin for Eliza

This plugin integrates with the [Taostats API](https://docs.taostats.io/) to provide information about the Bittensor network, including price data, subnets, validators, and more.

## Features

- Get current TAO price and price history
- View available subnets (when API supports it)
- Get detailed subnet information (when API supports it)
- View validators in a subnet
- Check validator details
- Get account information

## Setup

1. Create a Taostats API key from [dash.taostats.io](https://dash.taostats.io/)
2. Add your API key to your `.env` file:

```
TAOSTATS_API_KEY=your-api-key
```

## Current Limitations

The Taostats API appears to be changing or may have access restrictions that prevent certain endpoints from working consistently. The plugin is designed to gracefully handle these limitations by:

1. Providing meaningful error messages when endpoints are unavailable
2. Implementing timeouts to prevent hanging on API requests
3. Offering fallback behavior for showing information to users

Some specific endpoints (particularly subnet-related ones) may return 404 errors. This plugin is designed to handle these errors gracefully and provide helpful responses to users.

## Debug Script

Use the debug script to test the API connectivity:

```
npm run debug:taostats
```

This script will:
1. Test the API connectivity by fetching the current TAO price
2. Try various subnet endpoints to find which ones work
3. Provide detailed logs for debugging

## Error Handling

The plugin implements robust error handling including:

- Connection timeouts to prevent hanging
- Detailed logging of API requests and responses
- User-friendly error messages

## Troubleshooting

If you encounter issues with the plugin:

1. Check your API key is correctly set in the `.env` file
2. Run the debug script to see detailed API responses
3. Check the Taostats API documentation for endpoint changes
4. Verify your API key permissions in the Taostats dashboard

## Prerequisites

- Node.js 23+
- pnpm

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

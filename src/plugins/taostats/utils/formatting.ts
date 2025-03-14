import {
  PriceData,
  PriceHistoryData,
  PriceOHLCData,
  BlockData,
  NetworkStatsData,
  SubnetData,
  ValidatorData,
  AccountData,
} from "../api/types.ts";

// Format price data
export const formatPriceData = (data: PriceData): string => {
  const formattedPrice = data.price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  
  const change24h = data.change24h >= 0 
    ? `+${data.change24h.toFixed(2)}%` 
    : `${data.change24h.toFixed(2)}%`;
  
  const change7d = data.change7d >= 0 
    ? `+${data.change7d.toFixed(2)}%` 
    : `${data.change7d.toFixed(2)}%`;
  
  const marketCap = data.marketCap.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  
  const volume24h = data.volume24h.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  
  const date = new Date(data.timestamp * 1000).toLocaleString();
  
  return `
TAO Price: ${formattedPrice}
24h Change: ${change24h}
7d Change: ${change7d}
Market Cap: ${marketCap}
24h Volume: ${volume24h}
Last Updated: ${date}
  `.trim();
};

// Format price history data
export const formatPriceHistoryData = (data: PriceHistoryData): string => {
  const prices = data.prices.map(p => {
    const date = new Date(p.timestamp * 1000).toLocaleDateString();
    const price = p.price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
    return `${date}: ${price}`;
  });
  
  return `
TAO Price History (${data.interval}):
${prices.join("\n")}
  `.trim();
};

// Format blocks data
export const formatBlocksData = (blocks: BlockData[]): string => {
  const formattedBlocks = blocks.map(block => {
    const date = new Date(block.timestamp * 1000).toLocaleString();
    return `Block #${block.blockNumber} | ${date} | Extrinsics: ${block.extrinsicsCount} | Events: ${block.eventsCount} | Validator: ${block.validator}`;
  });
  
  return `
Recent Blocks:
${formattedBlocks.join("\n")}
  `.trim();
};

// Format network stats data
export const formatNetworkStatsData = (data: NetworkStatsData): string => {
  return `
Network Statistics:
Block Height: ${data.blockHeight}
Finalized Block: ${data.finalizedBlockHeight}
Total Accounts: ${data.totalAccounts.toLocaleString()}
Total Transfers: ${data.totalTransfers.toLocaleString()}
Total Extrinsics: ${data.totalExtrinsics.toLocaleString()}
Total Events: ${data.totalEvents.toLocaleString()}
  `.trim();
};

// Format subnet data
export const formatSubnetData = (subnet: SubnetData): string => {
  const emission = subnet.emission.toLocaleString("en-US", {
    maximumFractionDigits: 6,
  });
  
  const registrationCost = subnet.registrationCost.toLocaleString("en-US", {
    maximumFractionDigits: 6,
  });
  
  return `
Subnet ${subnet.netuid}: ${subnet.name}
Description: ${subnet.description}
Owner: ${subnet.owner}
Emission: ${emission} τ
Registration Cost: ${registrationCost} τ
Total Stake: ${subnet.totalStake.toLocaleString()} τ
Validators: ${subnet.totalValidators}
Miners: ${subnet.totalMiners}
  `.trim();
};

// Format subnets list
export const formatSubnetsList = (subnets: SubnetData[]): string => {
  const formattedSubnets = subnets.map(subnet => {
    return `Subnet ${subnet.netuid}: ${subnet.name} | Emission: ${subnet.emission.toFixed(6)} τ | Validators: ${subnet.totalValidators} | Miners: ${subnet.totalMiners}`;
  });
  
  return `
Available Subnets:
${formattedSubnets.join("\n")}
  `.trim();
};

// Format validator data
export const formatValidatorData = (validator: ValidatorData): string => {
  const stake = validator.stake.toLocaleString("en-US", {
    maximumFractionDigits: 6,
  });
  
  const emission = validator.emission.toLocaleString("en-US", {
    maximumFractionDigits: 6,
  });
  
  return `
Validator: ${validator.hotkey}
Coldkey: ${validator.coldkey}
Stake: ${stake} τ
Rank: ${validator.rank}
Emission: ${emission} τ
Subnets: ${validator.subnets.join(", ")}
Trust: ${validator.trust.toFixed(6)}
Consensus: ${validator.consensus.toFixed(6)}
Incentive: ${validator.incentive.toFixed(6)}
Dividends: ${validator.dividends.toFixed(6)}
  `.trim();
};

// Format account data
export const formatAccountData = (account: AccountData): string => {
  const balance = account.balance.toLocaleString("en-US", {
    maximumFractionDigits: 6,
  });
  
  const totalStake = account.totalStake.toLocaleString("en-US", {
    maximumFractionDigits: 6,
  });
  
  const totalEmission = account.totalEmission.toLocaleString("en-US", {
    maximumFractionDigits: 6,
  });
  
  const recentTransfers = account.transfers.slice(0, 5).map(transfer => {
    const date = new Date(transfer.timestamp * 1000).toLocaleDateString();
    const amount = transfer.amount.toLocaleString("en-US", {
      maximumFractionDigits: 6,
    });
    return `${date}: ${transfer.from.substring(0, 10)}...→${transfer.to.substring(0, 10)}... | ${amount} τ`;
  });
  
  return `
Account: ${account.address}
Balance: ${balance} τ
Total Stake: ${totalStake} τ
Total Emission: ${totalEmission} τ
Validators: ${account.validators.length}
Recent Transfers:
${recentTransfers.join("\n")}
  `.trim();
}; 
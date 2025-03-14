import { ApiError } from "../../../common/utils.ts";

// Handle API errors and return a formatted error message
export const handleTaostatsApiError = (
  error: unknown
): { success: false; response: string } => {
  if (error instanceof ApiError) {
    return {
      success: false,
      response: `Taostats API Error: ${error.message}`,
    };
  }
  
  return {
    success: false,
    response: `An unexpected error occurred: ${(error as Error).message || "Unknown error"}`,
  };
};

// Validate that a string is a valid Bittensor address
export const validateBittensorAddress = (address: string): boolean => {
  // Bittensor addresses start with "5" and are 48 characters long
  return /^5[a-zA-Z0-9]{47}$/.test(address);
};

// Validate that a string is a valid subnet ID
export const validateSubnetId = (netuid: string): boolean => {
  // Subnet IDs are numeric
  return /^\d+$/.test(netuid);
};

// Validate that a string is a valid hotkey
export const validateHotkey = (hotkey: string): boolean => {
  // Hotkeys are similar to addresses but can have different prefixes
  return /^[a-zA-Z0-9]{48}$/.test(hotkey);
};

// Extract query from content
export const extractQuery = (content: any): string => {
  if (typeof content === "string") {
    return content.trim();
  }
  
  if (content && typeof content === "object" && "text" in content) {
    return (content.text as string).trim();
  }
  
  throw new ApiError("Invalid query format");
};

// Extract address from query
export const extractAddress = (query: string): string => {
  // Look for a Bittensor address pattern in the query
  const addressMatch = query.match(/5[a-zA-Z0-9]{47}/);
  if (addressMatch) {
    return addressMatch[0];
  }
  
  throw new ApiError("No valid Bittensor address found in the query");
};

// Extract subnet ID from query
export const extractSubnetId = (query: string): number => {
  // Look for a subnet ID pattern in the query
  const subnetMatch = query.match(/subnet\s+(\d+)|netuid\s+(\d+)|(\d+)/i);
  if (subnetMatch) {
    const id = subnetMatch[1] || subnetMatch[2] || subnetMatch[3];
    return parseInt(id, 10);
  }
  
  throw new ApiError("No valid subnet ID found in the query");
};

// Extract hotkey from query
export const extractHotkey = (query: string): string => {
  // Look for a hotkey pattern in the query
  const hotkeyMatch = query.match(/[a-zA-Z0-9]{48}/);
  if (hotkeyMatch) {
    return hotkeyMatch[0];
  }
  
  throw new ApiError("No valid hotkey found in the query");
}; 
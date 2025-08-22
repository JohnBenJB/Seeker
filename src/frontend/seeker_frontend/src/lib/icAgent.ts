import { HttpAgent } from "@dfinity/agent";

// Define the Resource type that your frontend expects
export interface Resource {
  title: string;
  description: string;
  category: string;
  url: string;
  timestamp: bigint;
  views: bigint;
  totalRating: bigint;
  ratingCount: bigint;
  submitter: string;
}

// Define CanisterInfo type based on the generated declarations
interface CanisterInfo {
  id: string;
  url: string;
  status: string;
  metadata: {
    tvl: string;
    twitter: string;
    users: string;
    launch_date: string;
    github: string;
    developer: string;
  };
  name: string;
  tags: string[];
  canister_id: string;
  description: string;
  category: string;
}

// Create agent
const agent = new HttpAgent({
  host:
    typeof window !== "undefined" && window.location.hostname === "localhost"
      ? "http://127.0.0.1:4943"
      : "https://ic0.app",
});

// Fetch root key for certificate validation during development
if (typeof window !== "undefined" && window.location.hostname === "localhost") {
  agent.fetchRootKey().catch((err) => {
    console.warn(
      "Unable to fetch root key. Check to ensure that your local replica is running"
    );
    console.error(err);
  });
}

// TODO: Once the backend is properly deployed, uncomment this:
// import {
//   idlFactory as seeker_idl,
//   canisterId as seeker_id,
// } from "../../declarations/Seeker_backend";

// Create actor (placeholder for now)
// const seekerActor = Actor.createActor(seeker_idl, {
//   agent,
//   canisterId: seeker_id,
// });

// Convert CanisterInfo to Resource format
function convertCanisterToResource(canister: CanisterInfo): Resource {
  return {
    title: canister.name,
    description: canister.description,
    category: canister.category,
    url: canister.url,
    timestamp: BigInt(Date.now() * 1000000), // Convert to nanoseconds
    views: BigInt(0),
    totalRating: BigInt(0),
    ratingCount: BigInt(0),
    submitter: "system",
  };
}

// Call search function
export async function searchResources(query: string): Promise<Resource[]> {
  try {
    console.log("Searching for:", query);

    // TODO: Once backend is deployed, uncomment this:
    // const results = await seekerActor.searchCanisters(query);
    // const resources = results.map(convertCanisterToResource);
    // return resources;

    // For now, return mock data for testing
    const mockResults: CanisterInfo[] = [
      {
        id: "icpswap",
        name: "ICPSwap",
        description:
          "The premier decentralized exchange (DEX) on the Internet Computer",
        category: "DeFi",
        url: "https://app.icpswap.com",
        status: "active",
        metadata: {
          tvl: "$5M+",
          twitter: "@ICPSwap",
          users: "10K+",
          launch_date: "2022-03-01",
          github: "https://github.com/ICPSwap-Labs",
          developer: "ICPSwap Team",
        },
        tags: ["dex", "trading", "swap"],
        canister_id: "ca6gz-lqaaa-aaaah-qby5q-cai",
      },
      {
        id: "sonic",
        name: "Sonic DEX",
        description:
          "Fast and efficient decentralized exchange with advanced trading features",
        category: "DeFi",
        url: "https://app.sonic.ooo",
        status: "active",
        metadata: {
          tvl: "$2M+",
          twitter: "@SonicDEX",
          users: "5K+",
          launch_date: "2023-01-15",
          github: "https://github.com/SonicDEX",
          developer: "Sonic Team",
        },
        tags: ["dex", "trading", "amm"],
        canister_id: "abc123-def456-ghi789",
      },
    ];

    // Filter mock results based on query
    const filteredResults = mockResults.filter(
      (item) =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase()) ||
        item.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()))
    );

    const resources = filteredResults.map(convertCanisterToResource);
    console.log("Mock results:", resources);

    return resources;
  } catch (err) {
    console.error("Search failed:", err);
    return [];
  }
}

// Additional backend functions for future use
export async function getAllResources(): Promise<Resource[]> {
  try {
    console.log("Getting all resources");
    // TODO: Implement when backend supports this
    return [];
  } catch (err) {
    console.error("Failed to get all resources:", err);
    return [];
  }
}

export async function getCategories(): Promise<string[]> {
  try {
    // TODO: Once backend is deployed, uncomment this:
    // const categories = await seekerActor.getCategories();
    // return categories;

    // Return mock categories for now
    return ["DeFi", "Gaming", "Social", "NFT", "DAO", "Infrastructure"];
  } catch (err) {
    console.error("Failed to get categories:", err);
    return [];
  }
}

import { createActor } from "../../../declarations/Seeker_backend";

const canisterId = import.meta.env.VITE_CANISTER_ID_SEEKER_BACKEND;

const seekerActor = createActor(canisterId);
export interface Resource {
  id: string;
  title: string;
  description?: string;
  category?: string;
  url?: string;
  tags?: string[];
  searchKeywords?: string[];
  popularity?: number;
  timestamp?: bigint;
  views?: bigint;
  totalRating?: bigint;
  ratingCount?: bigint;
  submitter?: string;
}

// Convert backend record to frontend Resource type
function convertCanisterToResource(record: any): Resource {
  return {
    id: record.id,
    title: record.name,
    description: record.description,
    category: record.category,
    url: record.url,
    tags: record.tags,
    searchKeywords: record.searchKeywords || [],
    popularity: record.popularity || 0,
    timestamp: BigInt(Date.now() * 1000000),
    views: BigInt(0),
    totalRating: BigInt(0),
    ratingCount: BigInt(0),
    submitter: "system",
  };
}

// Search full records by query
export async function searchResources(query: string): Promise<Resource[]> {
  try {
    const results = await seekerActor.searchCanisters(query);
    return results.map(convertCanisterToResource);
  } catch (err) {
    console.error("Search failed:", err);
    return [];
  }
}

// Get all resources
export async function getAllResources(): Promise<Resource[]> {
  try {
    const allRecords = await seekerActor.searchCanisters(""); // empty query returns all
    return allRecords.map(convertCanisterToResource);
  } catch (err) {
    console.error("Failed to fetch all resources:", err);
    return [];
  }
}

// Get all unique categories
export async function getCategories(): Promise<string[]> {
  try {
    return await seekerActor.getCategories();
  } catch (err) {
    console.error("Failed to fetch categories:", err);
    return [];
  }
}

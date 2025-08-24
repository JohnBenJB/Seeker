import { HttpAgent, Actor } from "@dfinity/agent";
import type { MetadataRecord } from "./backendTypes";
import { idlFactory as seeker_idl } from "../../../../declarations/Seeker_backend/Seeker_backend.did.js";

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  url: string;
  tags: string[];
  searchKeywords: string[];
  popularity: number;
  timestamp?: bigint;
  views?: bigint;
  totalRating?: bigint;
  ratingCount?: bigint;
  submitter?: string;
}

// Use the actual local canister ID
const seeker_id = "uxrrr-q7777-77774-qaaaq-cai";

const agent = new HttpAgent({ host: "http://127.0.0.1:4943" });
agent.fetchRootKey(); // only for local

// Fetch the root key only for local development
if (window?.location.hostname === "localhost") {
  agent.fetchRootKey().catch((err) => {
    console.warn(
      "Unable to fetch root key. Make sure your local replica is running."
    );
    console.error(err);
  });
}

// Create the Actor to interact with the backend
export const seekerActor = Actor.createActor(seeker_idl, {
  agent,
  canisterId: seeker_id,
});

// Convert a backend MetadataRecord to the frontend Resource type
function convertRecordToResource(record: MetadataRecord): Resource {
  return {
    id: record.id,
    title: record.title,
    description: record.description,
    category: record.category,
    url: record.url,
    tags: record.tags,
    searchKeywords: record.searchKeywords,
    popularity: record.popularity,
    timestamp: BigInt(Date.now() * 1000000),
    views: BigInt(0),
    totalRating: BigInt(0),
    ratingCount: BigInt(0),
    submitter: "system",
  };
}

// Fetch resources by search query
export async function searchResources(query: string): Promise<Resource[]> {
  try {
    const titles = (await seekerActor.search(query)) as string[];
    const allRecords = (await seekerActor.getAllRecords()) as MetadataRecord[];
    const filteredRecords = allRecords.filter((r) => titles.includes(r.title));
    return filteredRecords.map(convertRecordToResource);
  } catch (err) {
    console.error("Search failed:", err);
    return [];
  }
}

// Fetch all resources
export async function getAllResources(): Promise<Resource[]> {
  try {
    const allRecords = (await seekerActor.getAllRecords()) as MetadataRecord[];
    return allRecords.map(convertRecordToResource);
  } catch (err) {
    console.error("Failed to fetch all resources:", err);
    return [];
  }
}

// Fetch all unique categories
export async function getCategories(): Promise<string[]> {
  try {
    const allRecords = (await seekerActor.getAllRecords()) as MetadataRecord[];
    return Array.from(new Set(allRecords.map((r) => r.category)));
  } catch (err) {
    console.error("Failed to fetch categories:", err);
    return [];
  }
}

import { Actor, HttpAgent } from "@dfinity/agent";
// Import your candid IDL + canisterId (these are generated when you build Motoko)
import {
  idlFactory as seeker_idl,
  canisterId as seeker_id,
} from "../../declarations/seeker";

// Create agent
const agent = new HttpAgent({ host: "http://127.0.0.1:4943" }); // local replica
// For mainnet, use: https://ic0.app

// Create actor
const seekerActor = Actor.createActor(seeker_idl, {
  agent,
  canisterId: seeker_id,
});

// Call search function
export async function searchResources(query: string) {
  try {
    const results = await seekerActor.search({
      text: query,
      category: null,
      minPopularity: null,
      limit: null,
      offset: null,
      sortBy: null,
    });
    return results.records; // based on your backend type
  } catch (err) {
    console.error("Search failed:", err);
    return [];
  }
}

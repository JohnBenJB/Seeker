// export interface Metadata {
//   developer?: string;
//   launch_date?: string;
//   tvl?: string;
//   users?: string;
//   github?: string;
//   twitter?: string;
// }

// export interface CanisterJSON {
//   id: string;
//   name: string;
//   description: string;
//   category: string;
//   tags: string[];
//   url: string;
//   canister_id: string;
//   status: string;
//   metadata?: Metadata;
// }

// export interface Resource {
//   id: string;
//   title: string;
//   description: string;
//   category: string;
//   url: string;
//   tags: string[];
//   searchKeywords: string[];
//   popularity: number;
//   timestamp: bigint;
//   views: bigint;
//   totalRating: bigint;
//   ratingCount: bigint;
//   submitter: string;
//   metadata?: Metadata;
// }

// const DATA_URL = "/json/canisters.json";

// async function fetchData(): Promise<Resource[]> {
//   try {
//     const response = await fetch(DATA_URL);
//     if (!response.ok) throw new Error("Failed to load JSON data");

//     const json: { canisters: CanisterJSON[] } = await response.json();

//     return json.canisters.map((c) => ({
//       id: c.id,
//       title: c.name,
//       description: c.description,
//       category: c.category,
//       url: c.url,
//       tags: c.tags,
//       searchKeywords: [
//         c.name,
//         c.description,
//         ...c.tags,
//         c.metadata?.developer || "",
//         c.metadata?.github || "",
//         c.metadata?.twitter || "",
//         c.metadata?.tvl || "",
//         c.metadata?.users || "",
//       ].filter(Boolean),
//       popularity: parseInt(c.metadata?.users?.replace(/\D/g, "") || "0"),
//       timestamp: BigInt(Date.now() * 1000000),
//       views: BigInt(0),
//       totalRating: BigInt(0),
//       ratingCount: BigInt(0),
//       submitter: c.metadata?.developer || "system",
//       metadata: c.metadata,
//     }));
//   } catch (err) {
//     console.error("Error fetching mock JSON:", err);
//     return [];
//   }
// }

// export async function searchResources(query: string): Promise<Resource[]> {
//   const allRecords = await fetchData();
//   const lowerQuery = query.toLowerCase();

//   const filtered = allRecords.filter(
//     (r) =>
//       r.title.toLowerCase().includes(lowerQuery) ||
//       r.description.toLowerCase().includes(lowerQuery) ||
//       r.category.toLowerCase().includes(lowerQuery) ||
//       r.tags.some((t) => t.toLowerCase().includes(lowerQuery)) ||
//       r.submitter.toLowerCase().includes(lowerQuery) ||
//       r.searchKeywords.some((k) => k.toLowerCase().includes(lowerQuery))
//   );

//   return filtered;
// }

// export async function getAllResources(): Promise<Resource[]> {
//   return await fetchData();
// }

// export async function getCategories(): Promise<string[]> {
//   const allRecords = await fetchData();
//   return Array.from(new Set(allRecords.map((r) => r.category)));
// }

import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import type { Resource } from "../../lib/icAgent";
import { searchResources } from "../../lib/icAgent";

export default function SearchResults() {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get("q") || "";

  // Add generic type <Resource[]> for React Query
  const {
    data: results = [],
    isLoading,
    isError,
  } = useQuery<Resource[]>({
    queryKey: ["searchResources", query],
    queryFn: () => searchResources(query),
    enabled: !!query, // only run if query exists
    staleTime: 1000 * 60, // 1 minute
  });

  if (isLoading) return <p className="text-2xl">Loading...</p>;
  if (isError)
    return <p className="text-xl text-red-600">Error fetching results</p>;

  return (
    <div className="p-6 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">
        Search Results for: <span className="text-blue-600">{query}</span>
      </h2>

      {results.length === 0 && <p className="text-xl">No results found.</p>}

      <div className="grid gap-4">
        {results.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="p-4 rounded-xl bg-white shadow hover:shadow-md transition"
          >
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-black hover:underline"
            >
              {item.title}
            </a>
            <p className="text-neutral-600 mt-1">{item.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="text-sm bg-gray-200 px-2 py-1 rounded">
                {item.category}
              </span>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {item.tags?.map((tag: string, i: number) => (
                <span
                  key={i}
                  className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <p className="text-sm text-gray-500 mt-2">
              🔥 Popularity Score: {item.popularity}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

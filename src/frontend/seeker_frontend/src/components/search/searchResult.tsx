import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import type { Resource } from "../../lib/icAgent";
import { searchResources } from "../../lib/icAgent";

export default function SearchResults() {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get("q") || "";
  const [results, setResults] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;
    setLoading(true);

    searchResources(query).then((data) => {
      setResults(data || []);
      setLoading(false);
    });
  }, [query]);

  return (
    <div className="p-6 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">
        Search Results for: <span className="text-blue-600">{query}</span>
      </h2>

      {loading && <p className="text-2xl">Loading...</p>}

      {!loading && results.length === 0 && (
        <p className="text-xl">No results found.</p>
      )}

      <div className="grid gap-4">
        {results.map((item, index) => (
          <div
            key={`${item.title}-${index}`}
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
            <p className="text-sm text-gray-500 mt-2">
              ⭐ Views: {Number(item.views)} | Rating:{" "}
              {Number(item.totalRating)}/{Number(item.ratingCount)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

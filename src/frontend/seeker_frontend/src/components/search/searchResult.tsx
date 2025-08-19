import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { searchResources } from "@/lib/icAgent";

type MetadataRecord = {
  id: string;
  title: string;
  description: string;
  category: string;
  url: string;
  tags: string[];
  popularity: number;
};

export default function SearchResults() {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get("q") || "";
  const [results, setResults] = useState<MetadataRecord[]>([]);
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
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Search Results for: <span className="text-blue-600">{query}</span>
      </h2>

      {loading && <p className="text-gray-500">Loading...</p>}

      {!loading && results.length === 0 && (
        <p className="text-gray-500">No results found.</p>
      )}

      <div className="grid gap-4">
        {results.map((item) => (
          <div
            key={item.id}
            className="p-4 rounded-xl bg-white shadow hover:shadow-md transition"
          >
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-blue-600 hover:underline"
            >
              {item.title}
            </a>
            <p className="text-gray-600 mt-1">{item.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="text-sm bg-gray-200 px-2 py-1 rounded">
                {item.category}
              </span>
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-2">
              ⭐ Popularity: {item.popularity}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

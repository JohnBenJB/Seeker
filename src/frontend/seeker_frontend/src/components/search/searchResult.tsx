import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import { searchResources } from "@/lib/icAgent";

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
  const [results] = useState<MetadataRecord[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;
    setLoading(true);

    // searchResources(query).then((data) => {
    //   setResults(data || []);
    //   setLoading(false);
    // });
  }, [query]);

  return (
    <div className="p-6 min-h-screen">
      {/* Navbar */}
      <h2 className="text-2xl font-semibold mb-4">
        Search Results for: <span className="text-blue-600">{query}</span>
      </h2>

      {loading && <p className="text-2xl">Loading...</p>}

      {!loading && results.length === 0 && (
        <p className="text-xl">No results found.</p>
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
              className="text-lg font-semibold text-black hover:underline"
            >
              {item.title}
            </a>
            <p className="text-neutral-600 mt-1">{item.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="text-sm bg-gray-200 px-2 py-1 rounded">
                {item.category}
              </span>
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm font-medium bg-blue-100 text-black px-2 py-1 rounded"
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

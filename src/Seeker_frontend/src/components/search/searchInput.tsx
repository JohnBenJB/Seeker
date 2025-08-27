import { Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchInput() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex text-left gap-1 md:gap-20 w-full max-w-xl md:max-w-3xl bg-gradient-to-l from-neutral-900 via-neutral-600 to-neutral-500 border-2 rounded-full border-neutral-500 px-2 md:px-20 md:py-2"
    >
      <div className="flex">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="What do you seek?"
          className="text-left text sm md:text-lg flex-1 p-3 rounded-xl focus:outline-none"
        />
      </div>
      <button type="submit" className="py-2 hover:scale-x-95 transition">
        <Search className="md:w-10 md:h-10 -ml-7 md:ml-5" />
      </button>
    </form>
  );
}

import { Search } from "lucide-react";

export default function SearchInput() {
  return (
    <>
      <div className="w-full px-5 md:px-25 py-2 md:py-5 flex justify-between items-center gap-3 md:gap-10 bg-neutral-500 border-3 border-neutral-400 rounded-full opacity-90">
        <div className="flex justify-start items-center">
          <input
            type="text"
            placeholder="What do you seek?"
            className="w-full md:pr-100 py-1 outline-none text-sm md:text-xl text-white placeholder-white text-left"
          />
        </div>
        <button>
          <Search className="md:scale-250" />
        </button>
      </div>
    </>
  );
}

import { Search } from "lucide-react";

export default function SearchInput() {
  return (
    <>
      <div className="w-full px-25 py-5 flex justify-between items-center gap-10 bg-neutral-500 border-3 border-neutral-400 rounded-full opacity-90">
        <div className="flex justify-start items-center">
          <input
            type="text"
            placeholder="What do you seek?"
            className="w-full pr-100 py-1 outline-none text-xl text-white placeholder-white text-left"
          />
        </div>
        <Search size={50} />
      </div>
    </>
  );
}

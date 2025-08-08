import { Search } from "lucide-react";

export default function SearchInput() {
  return (
    <>
      <div className="max-w-md px-5 py-3 flex justify-between items-center gap-5 bg-neutral-300 rounded-full">
        <Search />
        <input type="text" placeholder="What do you seek?" />
      </div>
    </>
  );
}

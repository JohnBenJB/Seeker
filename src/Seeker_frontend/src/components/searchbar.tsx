export default function SearchBar() {
  return (
    <div className="mt-10 pb-5">
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search here..."
          className="w-full p-3 text-sm rounded-lg border border-neutral-700 bg-neutral-900 text-white placeholder-gray-400 focus:outline-none focus:border-transparent"
        />
        <button className="py-2 px-3 md:px-6 bg-white text-[15px] text-black rounded-lg shadow-md hover:bg-neutral-300 focus:outline-none transition duration-200">
          Search
        </button>
      </div>
    </div>
  );
}

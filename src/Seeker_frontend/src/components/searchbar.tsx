export default function SearchBar() {
  return (
    <div className="mt-10 max-w-lg mx-auto p-4">
      <div className="flex items-center gap-3">
        <input
          type="text"
          placeholder="Search here..."
          className="flex-grow p-3 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-200">
          Search
        </button>
      </div>
    </div>
  );
}

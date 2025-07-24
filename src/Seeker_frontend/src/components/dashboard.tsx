import { lists } from "./constants";
import Footer from "./footer";
import Navbar from "./navbar";
import SearchBar from "./searchbar";

export default function Dashboard() {
  return (
    <main>
      <Navbar />
      <div className="text-white/95 bg-black px-6 md:px-50 pt-10 md:pt-15">
        <SearchBar />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {lists.map((list) => {
            return (
              <div
                key={list.id}
                className="flex flex-col gap-4 bg-neutral-900 text-white/95 p-5 rounded-2xl"
              >
                <div className="font-semibold text-2xl">{list.title}</div>
                <div className="text-md text-neutral-400">
                  {list.description}
                </div>
                <div className="text-sm text-gray-300 underline">
                  <a href="/dashboard">{list.more}</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </main>
  );
}

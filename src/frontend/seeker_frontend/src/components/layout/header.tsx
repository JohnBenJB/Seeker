import SearchInput from "../search/searchInput";
import Navbar from "./navbar";

export default function Header() {
  return (
    <main className="relative w-screen h-screen">
      <img
        src="/images/bg-hero-image.png"
        alt="bg"
        className="absolute object-cover inset-0 w-full h-full pointer-events-none select-none"
      />
      <div className="relative z-10 flex flex-col">
        <Navbar />
        <div className="flex flex-col justify-between items-center text-center gap-4 pt-20">
          <h1 className="text-5xl">
            Discover Web3 Like <br /> Never Before
          </h1>
          <p className="text-lg">
            Search the decentralized world-DApps, DAOs, canisters and docs, all
            in one place. Powered by ICP
          </p>
          <div className="pt-8">
            <SearchInput />
          </div>
        </div>
      </div>
    </main>
  );
}

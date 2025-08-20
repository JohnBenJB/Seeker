import SearchInput from "../search/searchInput";

export default function Header() {
  return (
    <main className="relative w-screen h-200 md:h-290 md:overflow-hidden px-5">
      <img
        src="/images/bg-hero-image.png"
        alt="bg"
        className="absolute object-cover inset-0 z-0 w-full h-full pointer-events-none select-none"
        loading="eager"
        fetchPriority="high"
      />
      <div className="relative z-10 flex flex-col">
        <div className="flex flex-col justify-between items-center text-center gap-8 pt-30 md:pt-50">
          <h1 className="text-3xl md:text-6xl font-bold">
            Discover Web3 Like
            <br /> Never Before
          </h1>
          <p className="text-[15px] md:text-2xl">
            Search the decentralized world- dApps, DAOs, canisters and docs -
            <br /> all in one place. Powered by ICP
          </p>
          <div className="pt-17 md:pt-25">
            <SearchInput />
          </div>
        </div>
      </div>
    </main>
  );
}

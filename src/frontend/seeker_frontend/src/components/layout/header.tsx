import SearchInput from "../search/searchInput";

export default function Header() {
  return (
    <main className="relative w-screen h-290 overflow-hidden">
      <img
        src="/images/bg-hero-image.png"
        alt="bg"
        className="absolute object-cover inset-0 w-full h-full pointer-events-none select-none"
      />
      <div className="relative z-10 flex flex-col">
        <div className="flex flex-col justify-between items-center text-center gap-6 pt-30 md:pt-50">
          <h1 className="text-3xl md:text-6xl font-bold leading-10">
            Discover Web3 Like
            <br /> Never Before
          </h1>
          <p className="text-lg md:text-2xl">
            Search the decentralized world- dApps, DAOs, canisters and docs -{" "}
            <br /> all in one place. Powered by ICP
          </p>
          <div className="pt-25">
            <SearchInput />
          </div>
        </div>
      </div>
    </main>
  );
}

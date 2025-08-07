import Textwrapper from "./animate";
console.log("Textwrapper:", Textwrapper);

export default function HeroSection() {
  return (
    <main>
      <div className="pt-20 md:pt-30 flex flex-col justify-between gap-5 text-center items-center">
        <Textwrapper>
          <h1 className="text-3xl md:text-5xl font-semibold">
            Coming <span>Soon</span>
          </h1>
        </Textwrapper>
        <h2 className="pt-2 text-md md:text-2xl text-neutral-300">
          Web3 exploration just got effortless.
        </h2>
        <h3 className="pt-3 text-[13px] md:text-lg px-5 md:px-40 text-neutral-400 text-center">
          A decentralized search engine designed for the open internet. Seeker
          transforms raw on-chain data into real-time, searchable knowledge,
          enabling Web3 discovery like never before.
        </h3>
        <div className="pt-15 md:pt-5 px-5 text-[10px] md:text-sm flex flex-col items-center justify-center text-center gap-5">
          <div className="flex justify-between items-center gap-2 md:gap-20">
            <div className="grid grid-rows-2 gap-2 place-items-center">
              <p className="hero-card">Explore DAOs in one place</p>
              <p className="hero-card">Built on the Internet Computer</p>
            </div>
            <div className="grid grid-rows-2 gap-2 place-items-center">
              <p className="hero-card">Easily discover dApps</p>{" "}
              <p className="hero-card">AI-powered Interface</p>
            </div>
          </div>
          <p className="hero-card">Easily browse through canisters</p>
        </div>
      </div>
    </main>
  );
}

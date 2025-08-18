export default function About2() {
  return (
    <main className="relative mt-30 md:mt-80 overflow-hidden">
      <div className="">
        <img
          src="/images/about-logo.png"
          alt="logo"
          width={1000}
          height={1000}
          className="absolute inset-0 z-0 object-contain top-50 opacity-10 -ml-150"
        />
      </div>
      <div className="relative z-10 flex justify-center items-center text-center pb-10 md:pb-30">
        <h2 className="text-4xl font-semibold">Future Snippet</h2>
      </div>
      <div className="px-10 md:px-20 flex flex-col justify-between items-center md:items-start md:gap-0">
        <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-2 px-0 md:gap-0">
          <div className="md:max-w-xs flex flex-col justify-between items-center gap-3 md:gap-5 text-center card-color px-2 py-5 mx-0">
            <h4 className="text-lg md:text-xl font-semibold">
              Ai-Powered <br /> Summaries
            </h4>
            <p className="text-sm md:text-lg text-neutral-400 md:px-8">
              Caffeine Ai integration to provide smart summaries of technical
              content, dApp reviews, and documentation.
            </p>
          </div>
          <div className="pb-2 md:pb-0 ml-50 md:ml-0 md:mt-25">
            <img
              src="/images/curved-arrow.png"
              className="rotate-50 md:rotate-none h-10 md:h-full"
            />
          </div>
        </div>
        <div className="md:translate-x-2/3 flex flex-col md:flex-row justify-center md:justify-start items-center gap-2 md:gap-0">
          <div className="md:max-w-xs flex flex-col justify-between items-center gap-3 md:gap-5 text-center card-color px-2 py-5">
            <h4 className="text-lg md:text-xl font-semibold">
              Personalized <br /> Results
            </h4>
            <p className="text-sm md:text-lg text-neutral-400 md:px-8">
              Tailored Sugguestions based on your previous queries (opt-in-only)
            </p>
          </div>
          <div className="pb-2 md:pb-0 ml-50 md:ml-0 md:mt-25">
            <img
              src="/images/curved-arrow.png"
              className="rotate-50 md:rotate-none h-10 md:h-full"
            />
          </div>
        </div>
        <div className="md:translate-x-3/4 flex flex-col md:flex-row justify-center md:justify-start items-center gap-2 md:gap-0 md:ml-30">
          <div className="hidden md:flex mt-25 -mr-5">
            <img
              src="/images/curved-arrow.png"
              className="transform scale-x-[-1] -rotate-15 -mb-20"
            />
          </div>
          <div className="md:max-w-xs flex flex-col justify-between items-center gap-3 md:gap-5 text-center card-color px-2 py-5">
            <h4 className="text-lg md:text-xl font-semibold">
              Search
              <br /> Feeds
            </h4>
            <p className="text-sm md:text-lg text-neutral-400 px-8">
              Follow specific tags or topics and receive live updates on new
              resources as they're indexed.
            </p>
          </div>
          <div className="md:hidden pb-2 md:pb-0 ml-50 md:ml-0 md:mt-25">
            <img
              src="/images/curved-arrow.png"
              className="rotate-50 md:rotate-none h-10 md:h-full"
            />
          </div>
        </div>
        <div className="md:translate-x-1/4 md:pr-55 md:pt-18 flex flex-col md:flex-row justify-center md:justify-start items-center gap-2 md:gap-0">
          <div className="md:max-w-xs flex flex-col justify-between items-center gap-3 md:gap-5 text-center card-color px-2 py-5">
            <h4 className="text-lg md:text-xl font-semibold">
              On-Chain
              <br /> Analytics
            </h4>
            <p className="text-sm md:text-lg text-neutral-400 px-8">
              Visualize data around what’s trending in Web3, based on real-time
              query patterns and decentralized content flows.
            </p>
          </div>
          <div className="pb-2 md:pb-0 ml-50 md:ml-0 md:mt-25">
            <img
              src="/images/curved-arrow.png"
              className="rotate-50 md:rotate-none h-10 md:h-full md:transform md:scale-x-[-1] md:pl-120 md:-mt-25"
            />
          </div>
        </div>
        <div className="md:pl-40">
          <div className="md:max-w-xs flex flex-col justify-between items-center gap-3 md:gap-5 text-center card-color px-2 py-5">
            <h4 className="text-lg md:text-xl font-semibold">
              Multi-Chain
              <br /> Discovery
            </h4>
            <p className="text-sm md:text-lg text-neutral-400 px-8">
              Expanding indexing beyond ICP to other ecosystems like Ethereum,
              Solana, and Bitcoin for cross-chain learning.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

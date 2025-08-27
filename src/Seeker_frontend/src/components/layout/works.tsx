import Card1 from "./card1";

export default function Works() {
  return (
    <div>
      <Card1 />
      <div className="pt-20 md:pt-70 w-full flex flex-col justify-between items-center text-center gap-20 overflow-hidden">
        <div className="flex flex-col justify-between items-center gap-1">
          <p className="text-2xl font-semibold">How Seeker Works</p>
          <div className="hidden md:flex bg-neutral-500 w-20 h-1 rounded-3xl border-2 border-neutral-400"></div>
        </div>
        <div className="pr-20 pl-3 md:px-0 grid grid-cols-1 md:grid-cols-2 justify-between items-center text-center gap-15 md:gap-30">
          <div className="w-60 md:w-110 md:h-100 px-5 py-4 md:px-25 md:py-15 flex flex-row md:flex-col justify-between items-center gap-2 md:gap-5 bg-gradient-to-b from-neutral-400 to-neutral-800 rounded-4xl border-2 border-neutral-50">
            <img
              src="/images/works-icon-1.png"
              alt="icon"
              className="h-17 w-17 md:w-40 md:h-40 pointer-events-none select-none"
            />
            <p className="text-sm md:text-lg">
              Type What you <br />
              Seek.
            </p>
            <div className="mt-17 -mr-3 md:hidden h-6 w-6 bg-black rounded-full"></div>
          </div>
          <div className="ml-5 w-70 md:w-110 md:h-100 px-8 py-4 md:px-25 md:py-15 flex flex-row md:flex-col justify-between items-center gap-2 md:gap-5 bg-gradient-to-b from-neutral-400 to-neutral-800 rounded-4xl border-2 border-neutral-50">
            <img
              src="/images/works-icon-2.png"
              alt="icon"
              className="h-17 w-17 md:w-40 md:h-40 pointer-events-none select-none object-cover"
            />
            <p className="text-[12px] md:text-lg">
              Seeker crawls through the <br />
              web to find your search and <br />
              display relevant result
            </p>
            <div className="mt-17 -mr-5 md:hidden h-6 w-6 bg-black rounded-full"></div>
          </div>
          <div className="w-70 md:w-110 md:h-100 px-4 py-7 md:px-25 md:py-15 flex flex-row md:flex-col justify-between items-center gap-1 md:gap-5 bg-gradient-to-b from-neutral-400 to-neutral-800 rounded-4xl border-2 border-neutral-50">
            <img
              src="/images/works-icon-3.png"
              alt="icon"
              className="h-17 w-17 md:w-40 md:h-40 pointer-events-none select-none object-cover"
            />
            <p className="text-[12px] md:text-lg">
              Intelligent results are <br />
              displayed with AI summaries
            </p>
            <div className="-mb-18 -mr-2 md:hidden h-6 w-6 bg-black rounded-full"></div>
          </div>
          <div className="ml-12 w-60 md:w-110 md:h-100 px-2 py-10 md:px-25 md:py-15 flex flex-row md:flex-col justify-between items-center gap-1 md:gap-5 bg-gradient-to-b from-neutral-400 to-neutral-800 rounded-4xl border-2 border-neutral-50">
            <div className="-mt-24 md:hidden h-6 w-6 bg-black rounded-full"></div>
            <img
              src="/images/works-icon-4.png"
              alt="icon"
              className="h-17 w-17 md:w-40 md:h-40 pointer-events-none select-none object-cover"
            />
            <p className="text-sm md:text-lg">
              User clicks on a result <br />
              to see more
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

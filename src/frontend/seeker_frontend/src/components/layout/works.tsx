import Card1 from "./card1";

export default function Works() {
  return (
    <div>
      <Card1 />
      <div className="pt-70 w-full flex flex-col justify-between items-center text-center gap-20 overflow-hidden">
        <div className="flex flex-col justify-between items-center gap-1">
          <p className="text-2xl font-semibold">How Seeker Works</p>
          <div className="bg-neutral-500 w-20 h-1 rounded-3xl border-2 border-neutral-400"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center text-center gap-30">
          <div className="w-110 h-100 px-25 py-15 flex flex-col justify-between items-center gap-5 bg-gradient-to-b from-neutral-400 to-neutral-800 rounded-4xl border-2 border-neutral-50">
            <img
              src="/images/works-icon-1.png"
              alt="icon"
              className="w-40 h-40 pointer-events-none select-none"
            />
            <p className="text-lg">
              Type What you <br />
              Seek.
            </p>
          </div>
          <div className="w-110 h-100 px-25 py-15 flex flex-col justify-between items-center gap-5 bg-gradient-to-b from-neutral-400 to-neutral-800 rounded-2xl border-2 border-neutral-50">
            <img
              src="/images/works-icon-2.png"
              alt="icon"
              className="w-40 h-40 pointer-events-none select-none object-cover"
            />
            <p className="text-lg">
              Seeker crawls through the <br />
              web to find your search and <br />
              display relevant result
            </p>
          </div>
          <div className="w-110 h-100 px-25 py-15 flex flex-col justify-between items-center gap-5 bg-gradient-to-b from-neutral-400 to-neutral-800 rounded-2xl border-2 border-neutral-50">
            <img
              src="/images/works-icon-3.png"
              alt="icon"
              className="w-40 h-40 pointer-events-none select-none object-cover"
            />
            <p className="text-lg">
              Intelligent results are <br />
              displayed with AI summaries
            </p>
          </div>
          <div className="w-110 h-100 px-25 py-15 flex flex-col justify-between items-center gap-5 bg-gradient-to-b from-neutral-400 to-neutral-800 rounded-2xl border-2 border-neutral-50">
            <img
              src="/images/works-icon-4.png"
              alt="icon"
              className="w-40 h-40 pointer-events-none select-none object-cover"
            />
            <p className="text-lg">
              User clicks on a result <br />
              to see more
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

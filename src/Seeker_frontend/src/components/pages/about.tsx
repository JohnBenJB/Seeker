import About2 from "./about2";
import { bentCards, type Props } from "./constants";

export default function About() {
  return (
    <main className="mt-25 md:mt-60 md:-mb-20 overflow-hidden">
      <div className="px-5 md:px-20 flex flex-col items-center justify-center">
        <div className="pb-20 flex flex-row md:max-w-7xl w-full relative z-10 gap-20">
          <div className="flex-col justify-center items-center gap-12 md:pl-25 md:text-left">
            <h1 className="text-4xl pb-5 md:text-6xl font-bold text-white mb-6 -mr-70 md:mx-0 leading-12">
              Mission Of <br />
              The Seeker
            </h1>
            <p className="pb-10 text-md text-gray-300 md:pr-60 -mr-50 md:mx-0">
              To make decentralized information easily searchable and accesible
              to everyone - empowering discovery, learning, and inovation on the
              ICP ecosystem.
            </p>
            <p className="text-md text-gray-300 md:pr-60 -mr-50 md:mx-0">
              Seeker bridges the gap between the wealth of knowledge scattered
              across decentralized platforms and the curiosity of users by
              providing a smart, intuitive, and ICP-native search engine.
            </p>
          </div>
          <div className="relative flex-1 justify-center items-center text-center">
            <div className="hidden md:block">
              <img
                src="/images/group-circle.png"
                alt="logo"
                className="absolute inset-0 z-0 object-cover p-20"
                loading="eager"
                fetchPriority="high"
              />
            </div>
            <div className="relative z-10 top-10 w-140 h-160 justify-center items-center md:bg-neutral-600/40 md:backdrop-blur-xs md:border-3 md:border-neutral-500 md:rounded-2xl md:p-7">
              <img
                src="/images/about-logo.png"
                alt="logo"
                width={500}
                height={500}
                className="object-contain opacity-10 md:opacity-100"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
        <div className="mt-10 md:mt-50 flex flex-col justify-between items-center">
          <p className="text-4xl font-semibold mb-15 md:-mb-75">How it works</p>
          <div className="flex md:flex-row flex-col justify-between items-center gap-12 md:gap-35 textcenter px-3 md:px-50">
            {bentCards.map((bentCard: Props, index: number) => (
              <div
                key={bentCard.id}
                className={`md:w-100 md:h-130 card-color px-5 py-7 md:p-15 rotate-2 md:-mx-10 ${
                  index === 1 ? "md:mt-200" : ""
                }`}
              >
                <div className="flex flex-col justify-between items-center gap-10 -rotate-3">
                  <div className="text-lg md:text-2xl font-semibold">
                    {bentCard.title}
                  </div>
                  <img
                    src={bentCard.cardImage}
                    alt="card"
                    height={160}
                    width={160}
                  />
                  <div className="text-sm md:text-md">{bentCard.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <About2 />
      <div className="pt-30 md:mt-70 px-5 md:px-36">
        <div className="flex justify-between items-center text-center gap-5 md:gap-12 px-4 md:px-17 py-5 md:py-35 bg-gradient-to-br from-neutral-800 via-neutral-750 to-neutral-900 border-3 border-neutral-400 rounded-3xl">
          <p className="text-md md:text-4xl md:leading-11">
            Built on the internet Computer <br className="hidden md:block" />
            for decentralization and
            <br className="hidden md:block" />
            unstoppable Web3 access
          </p>
          <div className="w-1.5 h-10 md:h-14 bg-white border rounded-full"></div>
          <img
            src="/images/icp-logo.png"
            alt="img"
            className="w-10 h-7 md:w-40 md:h-30"
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>
    </main>
  );
}

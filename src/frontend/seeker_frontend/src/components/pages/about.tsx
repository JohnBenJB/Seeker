import About2 from "./about2";
import { bentCards, type Props } from "./constants";

export default function About() {
  return (
    <main className="mt-60 -mb-20 overflow-hidden">
      <div className="px-20 flex flex-col items-center justify-center">
        <div className="flex max-w-7xl w-full relative z-10 gap-8">
          <div className="flex-1 flex flex-col justify-center gap-12 pl-25 text-left">
            <h1 className="text-6xl font-bold text-white mb-6">
              Mission Of <br />
              The Seeker
            </h1>
            <p className="text-md text-gray-300 pr-60">
              To make decentralized information easily searchable and accesible
              to everyone - empowering discovery, learning, and inovation on the
              ICP ecosystem.
            </p>
            <p className="text-md text-gray-300 pr-60">
              Seeker bridges the gap between the wealth of knowledge scattered
              across decentralized platforms and the curiosity of users by
              providing a smart, intuitive, and ICP-native search engine.
            </p>
          </div>
          <div className="relative flex-1 justify-center items-center text-center">
            <div>
              <img
                src="/images/group-circle.png"
                alt="logo"
                className="absolute inset-0 z-0 object-cover p-20"
              />
            </div>
            <div className="relative z-10 w-140 h-160 flex justify-center items-center bg-neutral-600/40 backdrop-blur-xs border-3 border-neutral-500 rounded-2xl p-7">
              <img
                src="/images/about-logo.png"
                alt="logo"
                width={500}
                height={500}
                className="object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-50 flex flex-col justify-between items-center">
          <p className="text-4xl font-semibold -mb-75">How it works</p>
          <div className="flex md:flex-row flex-col justify-between items-center gap-35 textcenter px-50">
            {bentCards.map((bentCard: Props, index: number) => (
              <div
                key={bentCard.id}
                className={`w-100 h-130 card-color p-15 rotate-2 -mx-10 ${
                  index === 1 ? "mt-200" : ""
                }`}
              >
                <div className="flex flex-col justify-between items-center gap-10 -rotate-3">
                  <div className="text-2xl font-semibold">{bentCard.title}</div>
                  <img
                    src={bentCard.cardImage}
                    alt="card"
                    height={160}
                    width={160}
                  />
                  <div>{bentCard.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <About2 />
      <div className="mt-70 px-36">
        <div className="flex justify-between items-center text-center gap-12 px-17 py-35 bg-gradient-to-br from-neutral-800 via-neutral-750 to-neutral-900 border-3 border-neutral-400 rounded-3xl">
          <p className="text-4xl leading-11">
            Built on the internet Computer <br /> for decentralization and
            <br />
            unstoppable Web3 access
          </p>
          <div className="w-1.5 h-14 bg-white border rounded-full"></div>
          <img src="/images/icp-logo.png" alt="img" />
        </div>
      </div>
    </main>
  );
}

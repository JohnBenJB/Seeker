import { FaSearch } from "react-icons/fa";
import { FiBox } from "react-icons/fi";
import { HiUsers } from "react-icons/hi";

export default function Card1() {
  return (
    <main className="relative px-10 -mt-20 z-10">
      <div className="py-10 flex flex-col justify-between items-center gap-10 bg-gradient-to-b from-neutral-400/70 to-neutral-800 rounded-2xl border-2 border-neutral-50 backdrop-blur-xs">
        <div className="flex justify-between items-center gap-100">
          <p className="text-3xl font-semibold tracking-wide">
            The Web3 Discovery Layer - <br /> Powered by ICP
          </p>
          <p className="text-lg">Enjoy core benefits</p>
        </div>
        <div className="flex justify-between items-center gap-30 text-center">
          <div className="relative">
            <img
              src="/images/rectangle.png"
              alt="img"
              className="absolute w-full h-full scale-x-[-1] pointer-events-none select-none object-contain"
            />
            <div className="flex flex-col justify-between items-center gap-5 py-20 px-12">
              <FaSearch size={70} className="rotate-90" />
              <p className="text-2xl font-semibold tracking-wide">
                One Search <br />
                for All
              </p>
              <p className="text-lg">
                Find dApps, DAOs and <br />
                resources in seconds.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between items-center gap-5">
            <FiBox size={70} />
            <p className="text-2xl font-semibold tracking-wide">
              Decentralized by <br /> Design
            </p>
            <p className="text-lg">
              Data stored on-chain, <br /> no gatekeepers.
            </p>
          </div>
          <div className="relative">
            <img
              src="/images/rectangle.png"
              alt="img"
              className="absolute w-full h-full pointer-events-none select-none object-contain"
            />
            <div className="flex flex-col justify-between items-center gap-5 py-20 px-12">
              <HiUsers size={70} />
              <p className="text-2xl font-semibold tracking-wide">
                Community <br /> Driven
              </p>
              <p className="text-lg">
                Anyone can submit,
                <br /> everyone benefits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

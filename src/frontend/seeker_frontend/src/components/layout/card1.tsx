import { FaSearch } from "react-icons/fa";
import { FiBox } from "react-icons/fi";
import { HiUsers } from "react-icons/hi";

export default function Card1() {
  return (
    <main className="relative px-2 md:px-10 -mt-20 z-10">
      <div className="py-10 flex flex-col justify-between items-center gap-10 md:bg-gradient-to-b md:from-neutral-400/70 md:to-neutral-800 md:rounded-2xl md:border-2 md:border-neutral-50 md:backdrop-blur-xs">
        <div className="flex justify-between items-center gap-100">
          <div className="md:hidden bg-gradient-to-r from-neutral-900 via-neutral-900 to-neutral-500 border-2 rounded-full border-neutral-500 p-5">
            <p className="text-[12px] md:text-3xl font-semibold">
              The Web3 Discovery Layer - <br className="hidden md:block" />
              Powered by ICP
            </p>
          </div>
          <div className="hidden md:block">
            <p className="text-lg">Enjoy core benefits</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center px-5 gap-20 md:gap-30 text-center">
          <div className="max-w-sm relative">
            <img
              src="/images/rectangle.png"
              alt="img"
              className="hidden md:absolute w-full h-full scale-x-[-1] pointer-events-none select-none object-contain"
            />
            <div className="flex flex-col justify-between items-center gap-5 pt-20 md:py-20 md:px-12">
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
          <div className="md:hidden bg-neutral-500 h-2 w-30 border-2 border-neutral-400 rounded-full"></div>
          <div className="flex flex-col justify-between items-center gap-5">
            <FiBox size={70} />
            <p className="text-2xl font-semibold tracking-wide">
              Decentralized by <br /> Design
            </p>
            <p className="text-lg">
              Data stored on-chain, <br /> no gatekeepers.
            </p>
          </div>
          <div className="md:hidden bg-neutral-500 h-2 w-30 border-2 border-neutral-400 rounded-full"></div>
          <div className="relative">
            <img
              src="/images/rectangle.png"
              alt="img"
              className="hidden md:absolute w-full h-full pointer-events-none select-none object-contain"
            />
            <div className="flex flex-col justify-between items-center gap-5 md:py-20 md:px-12">
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
          <div className="md:hidden bg-neutral-500 h-1 w-70 border rounded-full"></div>
        </div>
      </div>
    </main>
  );
}

import { FaSearch } from "react-icons/fa";
import { FiBox } from "react-icons/fi";
import { HiUsers } from "react-icons/hi";

export default function Card1() {
  return (
    <main className="px-10">
      <div className="py-5 w-full flex flex-col justify-between items-center gap-10 bg-gradient-to-b from-neutral-300/80 to-neutral-800 rounded-2xl border-2 border-neutral-50">
        <div className="flex justify-between items-center gap-10">
          <p className="text-lg font-semibold tracking-wide">
            The Web3 Discovery Layer - <br /> Powered by ICP
          </p>
          <p className="text-sm">Enjoy our core benefits</p>
        </div>
        <div className="flex justify-between items-center gap-20 text-center">
          <div className="flex flex-col justify-between items-center gap-2">
            <FaSearch size={50} className="rotate-90" />
            <p className="text-md font-semibold tracking-wide">
              One Search <br />
              for All
            </p>
            <p className="text-sm">
              Find dApps, DAOs and <br />
              resources in seconds
            </p>
          </div>
          <div className="flex flex-col justify-between items-center gap-2">
            <FiBox size={50} />
            <p className="text-md font-semibold tracking-wide">
              Decentralized by <br /> Design
            </p>
            <p className="text-sm">
              Data stored on-chain, <br /> no gatekeepers
            </p>
          </div>
          <div className="flex flex-col justify-between items-center gap-2">
            <HiUsers size={50} />
            <p className="text-md font-semibold tracking-wide">
              Community <br /> Driven
            </p>
            <p className="text-sm">
              Anyone can submit,
              <br /> everyone benefits
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

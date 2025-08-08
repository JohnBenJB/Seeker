import { ArrowBigRight } from "lucide-react";
import Card1 from "./card1";

export default function Works() {
  return (
    <div>
      <Card1 />
      <div className="pt-30 w-full flex flex-col justify-between items-center text-center gap-6">
        <p className="text-2xl font-semibold">How Seeker Works</p>
        <div className="py-20 px-20 flex justify-between items-center gap-20 text-center bg-gradient-to-b from-neutral-300/80 to-neutral-800 rounded-2xl border-2 border-neutral-50">
          <div className="flex flex-col justify-between items-center gap-2">
            <div className="text-3xl">1</div>
            <p className="text-md">
              Type What you <br /> Seek.
            </p>
          </div>
          <ArrowBigRight size={70} />
          <div className="flex flex-col justify-between items-center gap-2">
            <div className="text-3xl">2</div>
            <p className="text-md">
              Explore Verified Web3 <br />
              Resources
            </p>
          </div>
          <ArrowBigRight size={70} />
          <div className="flex flex-col justify-between items-center gap-2">
            <div className="text-3xl">3</div>
            <p className="text-md">
              Submit and Share <br /> What You Know
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

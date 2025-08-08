import { FaGithub } from "react-icons/fa";

export default function Features() {
  return (
    <main className="pt-30">
      <div className="flex flex-col justify-between items-center text-center">
        <p className="text-2xl font-semibold">Features</p>
      </div>
      <div className="pt-30 px-10">
        <div className="py-9 px-5 flex flex-col justify-between items-center gap-5 text-center bg-gradient-to-br from-neutral-300 to-neutral-800 rounded-2xl border-2 border-neutral-50">
          <img
            src="/images/icp-logo.png"
            alt="icp-logo"
            width={50}
            height={50}
          />
          <p>Built on the Internet Computer for Unstoppable Web3 access</p>
          <button className="flex justify-between items-center gap-3 px-3 py-2 bg-gradient-to-r from-neutral-400 to-neutral-600 rounded-full border-3 border-neutral-500 text-center">
            <FaGithub className="fliter invert" size={30} />
            <p>Github</p>
          </button>
        </div>
      </div>
    </main>
  );
}

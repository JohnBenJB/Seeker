import { FaDiscord, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full pt-30 bottom-0 right-0 left-0 text-center">
      <div className="w-full px-30 py-5 flex items-center justify-between bg-gradient-to-r from-neutral-300/80 to-neutral-800">
        <div className="flex flex-col items-center justify-between gap-2">
          <img src="/images/seekerlogo.png" alt="logo" width={80} height={80} />
          <h3 className="text-2xl text-black">Seeker</h3>
          <p className="text-[7px]">unveil the hidden depths of Web3...</p>
        </div>
        <div className="flex flex-col justify-between items-center gap-5">
          <p className="text-lg font-semibold">Socials</p>
          <div className="flex justify-between items-center gap-5">
            <FaGithub size={30} />
            <FaXTwitter size={30} />
            <FaDiscord size={30} />
          </div>
        </div>
        <div className="flex flex-col justify-between items-center gap-2">
          <p className="text-lg font-semibold">Login with Internet Identity</p>
          <button className="bg-neutral-900 px-8 py-4 text-2xl rounded-full border-2 border-neutral-600">
            Sign in
          </button>
        </div>
      </div>
    </footer>
  );
}

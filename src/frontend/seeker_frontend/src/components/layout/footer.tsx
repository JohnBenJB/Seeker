import { FaDiscord, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full pt-70 bottom-0 right-0 left-0 text-center">
      <div className="w-full px-10 py-5 flex items-center justify-between bg-gradient-to-br from-neutral-200 via-neutral-700 to-neutral-800 border-t-3 border-white">
        <div className="flex flex-col items-center justify-between gap-1">
          <img
            src="/images/logo-footer.png"
            alt="logo"
            width={80}
            height={80}
            className="fill-black"
          />
          <h3 className="text-2xl text-black">Seeker</h3>
          <p className="text-[7px] text-black">
            unveil the hidden depths of Web3...
          </p>
        </div>
        <div className="flex justify-between items-center text-center gap-20">
          <div className="flex flex-col justify-between items-center gap-10">
            <p className="text-lg font-semibold">Socials</p>
            <div className="flex justify-between items-center gap-9">
              <FaTelegram size={30} />
              <FaXTwitter size={30} />
              <FaDiscord size={30} />
            </div>
          </div>
          <div className="flex flex-col justify-between items-center gap-6">
            <p className="text-lg font-semibold">
              Login with Internet Identity
            </p>
            <button className="bg-neutral-900 px-8 py-4 text-2xl rounded-full border-2 border-neutral-600">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

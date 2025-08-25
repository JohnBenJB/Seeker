import { FaDiscord, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import LogoutButton from "../auth/logout";

export default function Footer() {
  const navigate = useNavigate();

  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/signin");
  };

  return (
    <footer className="w-full pt-30 md:pt-70 bottom-0 text-center overflow-hidden">
      <div className="w-full px-3 md:px-10 py-3 md:py-5 flex items-center justify-between bg-gradient-to-br from-neutral-200 via-neutral-700 to-neutral-800 border-t-3 border-white">
        <div className="flex flex-col items-center justify-between md:gap-1">
          <img
            src="/images/logo-footer.png"
            alt="logo"
            className="fill-black w-13 h-13 md:w-20 md:h-20"
            loading="eager"
            fetchPriority="high"
          />
          <h3 className="text-md md:text-2xl text-black font-medium">Seeker</h3>
          <p className="text-[4px] md:text-[7px] text-black">
            unveil the hidden depths of Web3...
          </p>
        </div>
        <div className="flex justify-between items-center text-center gap-5 md:gap-20">
          <div className="flex flex-col justify-between items-center gap-4 md:gap-10">
            <p className="text-[11px] md:text-lg font-semibold">Socials</p>
            <div className="flex justify-between items-center gap-2 md:gap-9">
              <FaTelegram className="w-4 h-4 md:w-10 md:h-10" />
              <a
                href="https://x.com/SeekerICP"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter className="w-4 h-4 md:w-10 md:h-10" />{" "}
              </a>
              <FaDiscord className="w-4 h-4 md:w-10 md:h-10" />
            </div>
          </div>
          <div className="flex flex-col md:flex-rowjustify-center gap-2 items-center">
            <div className="flex flex-col justify-between items-center gap-3 md:gap-6">
              <p className="text-[8px] md:text-lg font-semibold">
                Login with Internet Identity
              </p>
              <form onSubmit={handleClick}>
                <button
                  type="submit"
                  className="bg-neutral-900 px-6 md:px-8 py-2 md:py-4 md:text-2xl rounded-full border-2 border-neutral-600"
                >
                  Sign In
                </button>
              </form>
            </div>
            <div className="flex justify-center items-center text-xs">
              <LogoutButton />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

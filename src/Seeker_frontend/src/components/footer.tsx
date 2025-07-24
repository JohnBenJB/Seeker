import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full text-white pt-30 md:pt-20 pb-3 flex-col items-center justify-between bottom-0 right-0 left-0 text-center">
      <div className="w-full px-5 pb-2 flex items-center justify-between border-b border-neutral-600">
        <div className="flex items-center justify-between gap-2">
          <img
            src="/images/seekerlogo.png"
            height={25}
            width={25}
            alt="seekerLogo"
          />
          <div className="text-1xl"> Seeker</div>
        </div>
        <div className="flex justify-between items-center gap-3">
          <a
            href="https://github.com/JohnBenJB/Seeker"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={17} />
          </a>
          <a
            href="https://x.com/SeekerICP"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter size={17} />
          </a>
        </div>
      </div>
      <div className="pt-5 flex items-center justify-center text-center gap-3 text-xs md:text-md">
        <p>&copy; 2025</p> <p> All Rights Reserved</p>
      </div>
    </footer>
  );
}

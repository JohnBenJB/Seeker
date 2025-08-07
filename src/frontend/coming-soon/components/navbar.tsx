import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 right-0 left-0 backdrop-blur-md">
      <div className="px-6 py-3 text-white">
        <div className="flex flex-row justify-between items-center">
          <div className="flex items-center justify-between gap-2">
            <Image
              src="/images/seekerlogo.png"
              height={35}
              width={35}
              alt="seekerLogo"
            />
            <div className="text-[20px] md:text-2xl tracking-wide font-semibold">
              {" "}
              Seeker
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

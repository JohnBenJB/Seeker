import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="relative h-20">
      <img
        src="/images/wave-nav.png"
        alt="wave-image"
        className="absolute inset-0 z-0 w-full h-full pointer-events-none select-none"
      />
      <div className="relative z-10 flex justify-between items-center py-3 px-10">
        <div className="flex flex-col justify-between items-center">
          <img src="/images/logo.png" alt="logo" width={60} height={60} />
          <h1 className="text-2xl">Seeker</h1>
        </div>
        <div className="flex justify-between items-end gap-4 -mt-6">
          <Link to="/about">About</Link>
          <Link to="/docs">Docs</Link>
          <Link to="/resources">Submit Resource</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

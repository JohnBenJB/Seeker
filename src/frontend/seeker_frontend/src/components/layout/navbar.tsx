"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState<boolean>(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 left-0 right-0 h-20 overflow-hidden pb-30 backdrop-blur-2xl">
      <img
        src="/images/wave-nav.png"
        alt="wave-image"
        className="absolute inset-0 z-0 w-full h-full pointer-events-none select-none"
      />
      <div className="relative z-10 flex justify-between items-center py-3 px-10">
        <div className="flex flex-col justify-between items-center">
          <Link to="/">
            <img src="/images/logo.png" alt="logo" width={60} height={60} />
          </Link>
          <h1 className="text-2xl">Seeker</h1>
        </div>
        <div className="hidden md:flex justify-between items-end gap-4">
          <Link to="/about">About</Link>
          <Link to="/docs">Docs</Link>
          <Link to="/resources">Submit Resource</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavbar}>
            {mobileDrawerOpen ? (
              <X className="!w-6 !h-6" />
            ) : (
              <Menu className="!w-6 !h-6" />
            )}
          </button>
        </div>
      </div>
      {mobileDrawerOpen && (
        <div className="fixed right-0 z-20 bg-white dark:bg-[#01152e] w-full px-6 mt-4 flex flex-col justify-center xl:hidden">
          <div className="py-5 pb-7 flex flex-col justify-start gap-6 text-md">
            <div className="text-gray-500 flex flex-col gap-6">
              <p className="text-sm">Customers</p>
              <p>Developers</p>
            </div>
            <div className="flex justify-start"></div>
          </div>
        </div>
      )}
    </nav>
  );
}

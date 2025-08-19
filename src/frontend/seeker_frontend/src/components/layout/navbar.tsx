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
    <nav className="bg-black sticky top-0 md:h-27 md:overflow-hidden md:pb-35 backdrop-blur-2xl">
      <div className="hidden md:flex">
        <img
          src="/images/wave-nav.png"
          alt="wave-image"
          className="absolute inset-0 z-0 w-full h-full"
        />
      </div>
      <div className="relative z-50 flex justify-between items-center py-8 md:py-3 px-7 md:px-10">
        <div className="flex flex-col justify-between items-center">
          <Link to="/home">
            <img
              src="/images/logo.png"
              alt="logo"
              className="w-15 h-15 md:w-20 md:h-20"
            />
          </Link>
          <h1 className="text-xl md:text-2xl font-semibold">Seeker</h1>
        </div>
        <div className="hidden md:flex justify-between items-end gap-8">
          <Link to="/about">About</Link>
          <Link to="/docs">Docs</Link>
          <Link to="/resources">Submit Resources</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="md:hidden flex flex-col justify-end">
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
        <div className="fixed right-0 top-0 z-50 bg-black w-[50%] h-full px-6 flex flex-col justify-center md:hidden border-l-2 border-b-2 border-neutral-500">
          <div className="py-5 pb-7 flex flex-col justify-start gap-6 text-md">
            <div className="flex flex-col justify-between gap-6">
              <Link to="/home" className="text-md">
                Home
              </Link>
              <Link to="/about" className="text-md">
                About
              </Link>
              <Link to="/docs" className="text-md">
                Docs
              </Link>
              <Link to="/resources" className="text-md">
                Submit Resource
              </Link>
              <Link to="/contact" className="text-md">
                Contact
              </Link>
            </div>
            <div>
              <button className="bg-white text-black font-semibold txt-md">
                Sign In
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

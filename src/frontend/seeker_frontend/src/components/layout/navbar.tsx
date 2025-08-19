"use client";

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState<boolean>(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const mobileLinks = [
    { path: "/home", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/docs", label: "Docs" },
    { path: "/resources", label: "Submit Resource" },
    { path: "/contact", label: "Contact" },
  ];

  const desktopLinks = [
    { path: "/about", label: "About" },
    { path: "/docs", label: "Docs" },
    { path: "/resources", label: "Submit Resource" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md">
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
            {desktopLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                {link.label}
              </Link>
            ))}
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
      </nav>

      {mobileDrawerOpen && (
        <div className="fixed inset-0 z-[9999] flex md:hidden">
          <div className="flex-1 bg-black/40" onClick={toggleNavbar} />
          <div className="w-[70%] bg-black h-full px-6 flex flex-col justify-start border-l-2 border-neutral-500 relative">
            <div className="flex justify-end py-6">
              <button onClick={toggleNavbar}>
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            <div className="flex flex-col gap-6 text-md mt-6 relative">
              {mobileLinks.map((link) => (
                <div
                  key={link.path}
                  className="relative inline-flex items-center"
                >
                  {location.pathname === link.path && (
                    <img
                      src="/images/rec-navbar.png"
                      alt="active background"
                      className="absolute inset-0 w-full h-full object-contain opacity-80"
                    />
                  )}
                  <Link
                    to={link.path}
                    onClick={toggleNavbar}
                    className={`relative z-10 px-4 py-2 ${
                      location.pathname === link.path
                        ? "text-white font-bold"
                        : "text-gray-300"
                    }`}
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
              <button className="bg-white text-black font-semibold text-md mt-6">
                Sign In
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="pt-32"></div>
    </>
  );
}

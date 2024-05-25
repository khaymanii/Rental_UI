import React, { useState } from "react";
import Image from "next/image";
import Button from "./Button";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function handleClick() {
    console.log("Function not implemented.");
  }

  return (
    <nav className="z-20 bg-white sticky top-0">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="md:flex md:items-center md:gap-12">
            <a className="block" href="#">
              <span className="sr-only">Home</span>
              <Image src="/logo.svg" alt="logo" width={35} height={35} />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a href="#"> Home </a>
              </li>

              <li>
                <a href="#"> Rentals </a>
              </li>

              <li>
                <a href="#"> Categories </a>
              </li>

              <li>
                <a href="#"> About Us </a>
              </li>

              <li>
                <a href="#"> Contact </a>
              </li>

              <li>
                <a href="#"> Blog </a>
              </li>
            </ul>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="block text-green-500 p-2 transition hover:text-green-700 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    mobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
            {mobileMenuOpen && (
              <div className="absolute top-16 right-4 bg-green-50 shadow-lg rounded-lg py-2 px-4 text-sm">
                <ul className="flex flex-col items-center gap-6 py-2 border-b-2">
                  <li className="">
                    <a href="#"> Home </a>
                  </li>
                  <li>
                    <a href="#"> Rentals </a>
                  </li>
                  <li>
                    <a href="#"> Categories </a>
                  </li>
                  <li>
                    <a href="#"> About Us </a>
                  </li>
                  <li>
                    <a href="#"> Contact </a>
                  </li>
                  <li>
                    <a href="#"> Blog </a>
                  </li>
                </ul>
                <div className="flex flex-col items-center mt-4">
                  <a
                    className="px-5 py-2.5 font-medium text-green-500 hover:text-green-700"
                    href="#"
                  >
                    Login
                  </a>
                  <div className="mt-2">
                    <Button className="px-8" onClick={handleClick}>
                      Post Listing
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Other Links */}
          <div className="hidden md:flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className="px-5 py-2.5 font-medium text-green-500 hover:text-green-700"
                href="#"
              >
                Login
              </a>
              <div className="hidden sm:flex">
                <Button className="px-8" onClick={handleClick}>
                  Post Listing
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

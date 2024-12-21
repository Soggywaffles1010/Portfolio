'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const Nav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full py-5 px-5 bg-gray-900 text-white">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <span className="text-2xl font-bold cursor-pointer">Allen</span>
          </Link>
        </div>

        {/* Hamburger Icon (Mobile Menu Toggle) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-10 items-center">
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="hover:underline">Projects</button>
            {isDropdownOpen && (
              <div className="absolute z-10 top-full w-48 bg-gray-800 text-white shadow-lg rounded text-left">
                <ul>
                  <li>
                    <Link
                      className="block px-4 py-2 hover:bg-gray-700 hover:text-[#00FF00]"
                      href="#projects"
                    >
                      UI/UX Designs
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block px-4 py-2 hover:bg-gray-700 hover:text-[#00FF00]"
                      href="#collaterals"
                    >
                      Graphic Designs
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block px-4 py-2 hover:bg-gray-700 hover:text-[#00FF00]"
                      href="#movies"
                    >
                      Videos
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <button className="hover:underline">Contact me</button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col mt-5 space-y-4">
          {/* Direct Dropdown (No Projects Button) */}
          <ul className="space-y-2">
            <li>
              <Link
                className="block text-gray-300 hover:text-[#00FF00]"
                href="#projects"
              >
                UI/UX Designs
              </Link>
            </li>
            <li>
              <Link
                className="block text-gray-300 hover:text-[#00FF00]"
                href="#collaterals"
              >
                Graphic Designs
              </Link>
            </li>
            <li>
              <Link
                className="block text-gray-300 hover:text-[#00FF00]"
                href="#movies"
              >
                Videos
              </Link>
            </li>
            <li>
              <Link
                className="block text-gray-300 hover:text-[#00FF00]"
                href="/contact"
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;

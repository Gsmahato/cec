'use client';

import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
  // मोबाइल मेनु खोल्न र बन्द गर्नका लागि स्टेट (State Function)
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav 
      className="bg-blue-900 text-white shadow-md sticky top-0 z-50"
      role="navigation"
      itemScope
      itemType="https://schema.org/SiteNavigationElement"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Brand Identity Area */}
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <Logo />
          <span className="text-xl font-bold group-hover:text-gray-200 transition">
            Centrist Economic Club
          </span>
        </Link>

        {/* Hamburger Menu Button (Mobile Only) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-200 hover:text-white focus:outline-none p-1 transition cursor-pointer"
          aria-label="Toggle Menu"
          type="button"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              // मेनु खुला हुँदा 'X' (Close) आइकन देखिने
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              // मेनु बन्द हुँदा 'Hamburger' (☰) आइकन देखिने
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation Links (Hidden on Mobile) */}
        <div className="hidden md:flex gap-6 font-medium text-base items-center">
          <Link href="/" className="hover:text-green-400 transition" itemProp="url">
            <span itemProp="name">गृहपृष्ठ</span>
          </Link>
          <Link href="#structure" className="hover:text-green-400 transition" itemProp="url">
            <span itemProp="name">संरचना</span>
          </Link>
          <Link href="#training" className="hover:text-green-400 transition" itemProp="url">
            <span itemProp="name">प्रशिक्षण</span>
          </Link>
          <Link href="#philosophy" className="hover:text-green-400 transition" itemProp="url">
            <span itemProp="name">दर्शन</span>
          </Link>
          <Link href="/gallery" className="hover:text-green-400 transition" itemProp="url">
            <span itemProp="name">ग्यालेरी</span>
          </Link>
          <Link href="/about" className="hover:text-green-400 transition" itemProp="url">
            <span itemProp="name">हाम्रो बारेमा</span>
          </Link>
        </div>
      </div>

      {/* Mobile Dropdown Drawer Menu (Hidden on Desktop) */}
      <div 
        className={`md:hidden bg-blue-950 border-t border-blue-800 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-1 px-4 py-3 font-medium text-sm">
          <Link 
            href="/" 
            onClick={() => setIsOpen(false)}
            className="hover:bg-blue-900 hover:text-green-400 px-3 py-2 rounded-lg transition"
            itemProp="url"
          >
            <span itemProp="name">गृहपृष्ठ</span>
          </Link>
          <Link 
            href="#structure" 
            onClick={() => setIsOpen(false)}
            className="hover:bg-blue-900 hover:text-green-400 px-3 py-2 rounded-lg transition"
            itemProp="url"
          >
            <span itemProp="name">संरचना</span>
          </Link>
          <Link 
            href="#training" 
            onClick={() => setIsOpen(false)}
            className="hover:bg-blue-900 hover:text-green-400 px-3 py-2 rounded-lg transition"
            itemProp="url"
          >
            <span itemProp="name">प्रशिक्षण</span>
          </Link>
          <Link 
            href="#philosophy" 
            onClick={() => setIsOpen(false)}
            className="hover:bg-blue-900 hover:text-green-400 px-3 py-2 rounded-lg transition"
            itemProp="url"
          >
            <span itemProp="name">दर्शन</span>
          </Link>
          <Link 
            href="/gallery" 
            onClick={() => setIsOpen(false)}
            className="hover:bg-blue-900 hover:text-green-400 px-3 py-2 rounded-lg transition"
            itemProp="url"
          >
            <span itemProp="name">ग्यालेरी</span>
          </Link>
          <Link 
            href="/about" 
            onClick={() => setIsOpen(false)}
            className="hover:bg-blue-900 hover:text-green-400 px-3 py-2 rounded-lg transition"
            itemProp="url"
          >
            <span itemProp="name">हाम्रो बारेमा</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
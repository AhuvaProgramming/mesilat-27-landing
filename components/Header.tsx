"use client";

import { useState } from "react";
import BrandLogo from "@/components/BrandLogo";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E5E1D9] bg-white">
      <div className="mx-auto flex h-[82px] max-w-[1440px] items-center px-6 lg:px-10">
        
        {/* Logo */}
        <div className="shrink-0">
          <a href="#">
            <BrandLogo />
          </a>
        </div>

        {/* Desktop navigation */}
        <nav className="mr-auto ml-auto hidden items-center gap-10 text-sm md:flex">
          <a href="#building" className="nav-link">
            הבניין
          </a>

          <a href="#apartments" className="nav-link">
            הדירות
          </a>

          <a href="#location" className="nav-link">
            המיקום
          </a>

          <a href="#contact" className="nav-link">
            צור קשר
          </a>
        </nav>

        {/* Desktop button */}
        <a
          href="#apartments"
          className="hidden shrink-0 border border-[#151514] px-6 py-3 text-sm transition-colors duration-300 hover:bg-[#151514] hover:text-white md:block"
        >
          בדיקת זמינות
        </a>

        {/* Mobile button */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="mr-auto flex h-10 w-10 items-center justify-center border border-[#151514] md:hidden"
          aria-label="פתיחת תפריט"
          aria-expanded={menuOpen}
        >
          <span className="text-xl leading-none">
            {menuOpen ? "×" : "☰"}
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-[#E5E1D9] bg-white px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-5 text-sm">
            <a href="#building" onClick={() => setMenuOpen(false)}>
              הבניין
            </a>

            <a href="#apartments" onClick={() => setMenuOpen(false)}>
              הדירות
            </a>

            <a href="#location" onClick={() => setMenuOpen(false)}>
              המיקום
            </a>

            <a href="#contact" onClick={() => setMenuOpen(false)}>
              צור קשר
            </a>

            <a
              href="#apartments"
              onClick={() => setMenuOpen(false)}
              className="mt-2 border border-[#B89B5E] px-5 py-3 text-center"
            >
              בדיקת זמינות
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
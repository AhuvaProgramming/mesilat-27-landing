'use client';

import { useState } from 'react';
import BrandLogo from '@/components/BrandLogo';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 text-white">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-6 lg:px-10">
        <a href="#">
          <BrandLogo />
        </a>

        <nav className="hidden items-center gap-10 text-sm md:flex">
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

        <a
          href="#apartments"
          className="hidden border border-white/60 px-6 py-3 text-sm transition-all duration-300 hover:bg-white hover:text-black md:block"
        >
          בדיקת זמינות
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center border border-white/50 md:hidden"
          aria-label="תפריט"
          aria-expanded={menuOpen}
        >
          {menuOpen ? '×' : '☰'}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/20 bg-charcoal/95 px-6 py-7 backdrop-blur-md md:hidden">
          <nav className="flex flex-col gap-6 text-sm">
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
              className="border border-gold px-5 py-3 text-center text-light-gold"
            >
              בדיקת זמינות
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* Code Tag Styled Brand Logo */}
        <a href="#home" className="group flex items-center font-mono text-base font-bold tracking-tight">
          <span className="text-violet-400 transition-transform duration-200 group-hover:-translate-x-0.5">&lt;</span>
          <span className="mx-1 text-white transition-colors duration-200 group-hover:text-violet-300">Rashi Shekhar</span>
          <span className="text-violet-400 transition-transform duration-200 group-hover:translate-x-0.5">/&gt;</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-1 md:flex">
          <div className="flex items-center rounded-full border border-slate-800/80 bg-slate-900/40 p-1 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="rounded-full px-4 py-1.5 text-xs font-medium text-slate-300 transition-all duration-200 hover:bg-slate-800/80 hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="ml-4 flex items-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-xl bg-violet-600 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-violet-600/20 transition-all duration-200 hover:bg-violet-500 hover:shadow-violet-600/30"
            >
              <span>Let's Talk</span>
              <span>→</span>
            </a>
          </div>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/60 text-slate-300 transition hover:border-slate-700 hover:text-white md:hidden"
        >
          {isOpen ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>

      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="border-b border-slate-800 bg-slate-950/95 px-6 py-5 backdrop-blur-2xl md:hidden">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-900 hover:text-violet-300"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 py-2.5 text-xs font-semibold text-white shadow-md shadow-violet-600/20 transition hover:bg-violet-500"
            >
              <span>Let's Talk</span>
              <span>→</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
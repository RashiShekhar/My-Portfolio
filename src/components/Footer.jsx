import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/rashi-shekhar-90b65b301/" },
  ];

  return (
    <footer className="relative border-t border-slate-800/80 bg-slate-950 text-slate-400">
      {/* Top subtle glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      <div className="mx-auto max-w-6xl px-6 pt-12 pb-8">
        {/* Main Section */}
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          
          {/* Brand & Tagline */}
          <div className="space-y-1">
            <h3 className="text-base font-semibold tracking-tight text-white">
              Rashi Shekhar
            </h3>
            <p className="text-xs text-slate-500">
              Building thoughtful web experiences & modern interfaces.
            </p>
          </div>

          {/* Quick Nav */}
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="transition-colors duration-200 hover:text-white"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Social Badges */}
          <div className="flex items-center gap-2">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-1.5 text-xs font-medium text-slate-300 transition-all hover:border-violet-500/50 hover:bg-violet-500/10 hover:text-violet-300"
              >
                {item.name}
              </a>
            ))}
          </div>

        </div>

        {/* Separator */}
        <div className="my-8 h-px w-full bg-slate-900" />

        {/* Bottom Sub-footer */}
        <div className="flex flex-col items-center justify-between gap-3 text-xs text-slate-500 sm:flex-row">
          <div className="flex items-center gap-1.5">
            <span>© {currentYear}</span>
            <span className="h-1 w-1 rounded-full bg-slate-700" />
            <span className="font-medium text-slate-400">Rashi Shekhar</span>
            <span className="h-1 w-1 rounded-full bg-slate-700" />
            <span>All rights reserved.</span>
          </div>

          <p className="text-slate-600">
            Designed & built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
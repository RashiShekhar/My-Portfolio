function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#0B1426]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* Logo / Name */}
        <a
          href="#home"
          className="font-zed-sans text-xl font-semibold text-white"
        >
          Rashi Shekhar
        </a>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <a
            href="#home"
            className="text-sm text-slate-300 transition hover:text-violet-400"
          >
            Home
          </a>

          <a
            href="#projects"
            className="text-sm text-slate-300 transition hover:text-violet-400"
          >
            Projects
          </a>

          <a
            href="#skills"
            className="text-sm text-slate-300 transition hover:text-violet-400"
          >
            Skills
          </a>

          <a
            href="#experience"
            className="text-sm text-slate-300 transition hover:text-violet-400"
          >
            Experience
          </a>

          <a
            href="#about"
            className="text-sm text-slate-300 transition hover:text-violet-400"
          >
            About
          </a>

          <a
            href="#contact"
            className="rounded-lg bg-violet-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-600"
          >
            Contact
          </a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
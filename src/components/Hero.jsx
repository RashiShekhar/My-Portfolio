function Hero() {
  return (
    <section id="home" className="py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-2">

        {/* Left Side */}
        <div>
          <p className="mb-4 font-zed-sans text-sm font-medium uppercase tracking-widest text-violet-400">
            Hello, I'm
          </p>

          <h1 className="font-zed-sans text-5xl font-bold leading-tight text-white md:text-6xl">
            Rashi Shekhar
          </h1>

          <h2 className="mt-4 font-zed-sans text-2xl font-semibold text-slate-300">
            Full-Stack Developer 💻
          </h2>

          <p className="mt-6 max-w-xl font-zed-sans text-lg leading-8 text-slate-400">
            I build modern, responsive, and user-friendly web experiences
            using React, Node.js, and modern web technologies.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-violet-500 px-6 py-3 font-medium text-white transition hover:bg-violet-600"
            >
              View Projects →
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-white/10 px-6 py-3 font-medium text-slate-300 transition hover:border-violet-400 hover:text-violet-400"
            >
              Contact Me
            </a>
          </div>

          {/* Tech Stack */}
          <div className="mt-10 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300">
              React.js
            </span>

            <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300">
              Node.js
            </span>

            <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300">
              MongoDB
            </span>

            <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300">
              Next.js
            </span>
          </div>
        </div>

        {/* Right Side - Code Editor */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111C32] shadow-2xl">

          {/* Editor Header */}
          <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
            <span className="h-3 w-3 rounded-full bg-red-400"></span>
            <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
            <span className="h-3 w-3 rounded-full bg-green-400"></span>

            <span className="ml-3 font-mono text-sm text-slate-400">
              about.ts
            </span>
          </div>

          {/* Code */}
          <div className="overflow-x-auto p-6 font-mono text-sm leading-8">
            <p>
              <span className="text-violet-400">const</span>{" "}
              <span className="text-sky-300">developer</span>{" "}
              <span className="text-slate-400">=</span>{" "}
              <span className="text-slate-300">{"{"}</span>
            </p>

            <p className="pl-6">
              <span className="text-sky-300">name</span>
              <span className="text-slate-400">:</span>{" "}
              <span className="text-green-300">"Rashi"</span>
              <span className="text-slate-400">,</span>
            </p>

            <p className="pl-6">
              <span className="text-sky-300">role</span>
              <span className="text-slate-400">:</span>{" "}
              <span className="text-green-300">
                "Full Stack Developer"
              </span>
              <span className="text-slate-400">,</span>
            </p>

            <p className="pl-6">
              <span className="text-sky-300">passion</span>
              <span className="text-slate-400">:</span>{" "}
              <span className="text-green-300">
                "Building things"
              </span>
              <span className="text-slate-400">,</span>
            </p>

            <p className="pl-6">
              <span className="text-sky-300">learning</span>
              <span className="text-slate-400">:</span>{" "}
              <span className="text-slate-300">[</span>
              <span className="text-green-300">"AI"</span>
              <span className="text-slate-400">, </span>
              <span className="text-green-300">"DL"</span>
              <span className="text-slate-300">]</span>
              <span className="text-slate-400">,</span>
            </p>

            <p className="text-slate-300">{"};"}</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
import React from 'react';

function Hero() {
  const quickSkills = ["React.js", "Node.js", "MongoDB", "TypeScript", "Tailwind CSS"];

  return (
    <section id="home" className="relative overflow-hidden py-16 sm:py-24 md:py-32">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-72 w-72 sm:h-96 sm:w-96 -translate-x-1/2 rounded-full bg-violet-600/15 blur-[100px] sm:blur-[120px]" />

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8">

        {/* Left Column */}
        <div className="lg:col-span-7">
          
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3.5 py-1 text-xs font-medium uppercase tracking-wider text-violet-300">
            <span className="h-2 w-2 rounded-full bg-violet-400 animate-pulse" />
            Software Engineer & Developer
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-white xs:text-4xl sm:text-5xl md:text-6xl">
            Hi, I’m <span className="bg-gradient-to-r from-violet-400 to-indigo-300 bg-clip-text text-transparent">Rashi Shekhar</span>
          </h1>

          <p className="mt-3 text-base font-medium text-slate-300 sm:text-xl">
            Full-Stack Developer & MCA Scholar
          </p>

          <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-400">
            <svg className="h-4 w-4 shrink-0 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="truncate">Rae Bareli, Uttar Pradesh, India</span>
          </div>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base sm:leading-7">
            I specialize in crafting high-performance, responsive web applications with the MERN stack, combining clean frontend interfaces with secure, scalable backend architectures.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <a
              href="#projects"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/25 transition-all duration-200 hover:bg-violet-500 hover:shadow-violet-600/35"
            >
              <span>Explore Projects</span>
              <span>→</span>
            </a>

            <a
              href="#contact"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-900/60 px-6 py-3 text-sm font-semibold text-slate-300 backdrop-blur-md transition-all duration-200 hover:border-slate-700 hover:bg-slate-900 hover:text-white"
            >
              <span>Get In Touch</span>
            </a>
          </div>

          {/* Tech Stack Pills */}
          <div className="mt-8 flex flex-wrap items-center gap-2 pt-6 border-t border-slate-800/60">
            <span className="mr-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Stack:
            </span>
            {quickSkills.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-slate-800 bg-slate-900/80 px-2.5 py-1 text-xs font-medium text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>

        {/* Right Column: Code Editor */}
        <div className="w-full min-w-0 lg:col-span-5">
          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80 shadow-2xl backdrop-blur-xl">
            
            <div className="flex items-center justify-between border-b border-slate-800/80 bg-slate-900/60 px-4 py-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="font-mono text-xs text-slate-400">developer.ts</span>
              <div className="h-2.5 w-2.5 opacity-0" />
            </div>

            <div className="p-4 sm:p-5 font-mono text-[11px] leading-5 sm:text-xs sm:leading-6">
              <div className="flex gap-3 sm:gap-4">
                <div className="select-none text-slate-600 text-right">
                  <p>1</p><p>2</p><p>3</p><p>4</p><p>5</p><p>6</p><p>7</p>
                </div>

                <div className="min-w-0 flex-1 overflow-x-auto whitespace-pre text-slate-300">
                  <p><span className="text-violet-400">const</span> <span className="text-sky-300">developer</span> = {"{"}</p>
                  <p className="pl-3 sm:pl-4">name: <span className="text-emerald-300">"Rashi Shekhar"</span>,</p>
                  <p className="pl-3 sm:pl-4">focus: <span className="text-emerald-300">"Full-Stack Dev"</span>,</p>
                  <p className="pl-3 sm:pl-4">stack: [<span className="text-emerald-300">"React"</span>, <span className="text-emerald-300">"Node"</span>, <span className="text-emerald-300">"MongoDB"</span>],</p>
                  <p className="pl-3 sm:pl-4">learning: [<span className="text-emerald-300">"AI"</span>, <span className="text-emerald-300">"Cloud"</span>],</p>
                  <p className="pl-3 sm:pl-4">status: <span className="text-amber-300">"Available"</span></p>
                  <p>{"};"}</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
import React from 'react';

function About() {
  const highlights = [
    {
      title: "Full-Stack Development",
      description: "Architecting end-to-end web applications with modern workflows",
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "React.js & UI Engineering",
      description: "Crafting modular, accessible, and responsive user interfaces",
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      ),
    },
    {
      title: "Backend & API Systems",
      description: "Designing RESTful services, database schemas, and micro-endpoints",
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "AI & Emerging Tech",
      description: "Exploring machine intelligence, automation, and modern web protocols",
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">

        {/* Section Header */}
        <div className="flex flex-col items-start gap-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3.5 py-1 text-xs font-medium uppercase tracking-wider text-violet-300">
            Get To Know Me
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            About Me
          </h2>
        </div>

        {/* Main Grid */}
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-12">

          {/* Left Column: Narrative & Quick Stats */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-base font-normal leading-relaxed text-slate-300 sm:text-lg sm:leading-8">
              I'm a <span className="font-semibold text-white">Full-Stack Developer</span> dedicated to engineering scalable, user-centric web applications and bridging clean design with robust server-side architecture.
            </p>

            <p className="text-sm leading-relaxed text-slate-400 sm:text-base sm:leading-7">
              Currently pursuing an Integrated MCA, my journey spans full-stack development with the MERN stack, database design, and cloud workflows. I am continually investigating advancements in AI, cloud-native tooling, and cybersecurity practices to deliver reliable digital solutions.
            </p>

            {/* Quick Badges */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 backdrop-blur-md">
                <p className="font-mono text-2xl font-bold text-violet-400">Integrated MCA</p>
                <p className="mt-1 text-xs text-slate-500 font-medium">CS & Applications</p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 backdrop-blur-md">
                <p className="font-mono text-2xl font-bold text-white">Full-Stack</p>
                <p className="mt-1 text-xs text-slate-500 font-medium">MERN & Modern Web</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Highlights Card */}
          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/70 p-6 shadow-xl backdrop-blur-xl sm:p-7">
              
              {/* Code-style Header */}
              <div className="mb-6 flex items-center justify-between border-b border-slate-800/80 pb-3 font-mono text-xs text-slate-500">
                <span>// core_focus_areas.ts</span>
                <span className="text-violet-400">4 items</span>
              </div>

              {/* Highlight Items */}
              <div className="space-y-4">
                {highlights.map((item) => (
                  <div
                    key={item.title}
                    className="group flex items-start gap-4 rounded-xl border border-transparent p-3 transition-all duration-200 hover:border-slate-800 hover:bg-slate-900/50"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10 text-violet-400 transition-colors duration-300 group-hover:bg-violet-500 group-hover:text-white">
                      {item.icon}
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold tracking-tight text-white group-hover:text-violet-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="mt-0.5 text-xs leading-relaxed text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
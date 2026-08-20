import React from 'react';

function Contact() {
  return (
    <section id="contact" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        
        <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-2xl backdrop-blur-xl sm:p-10 md:p-14">
          
          <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 sm:h-72 sm:w-72 rounded-full bg-violet-600/15 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 sm:h-72 sm:w-72 rounded-full bg-indigo-600/15 blur-[80px]" />

          <div className="relative text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3.5 py-1 text-xs font-medium tracking-wide text-violet-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for Opportunities
            </div>

            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              Let’s build something together
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-xs leading-relaxed text-slate-400 sm:text-base">
              Whether you have an exciting project, an internship opportunity, or just want to chat tech, feel free to reach out.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="relative mx-auto mt-8 grid max-w-2xl gap-3 sm:mt-10 sm:gap-4 sm:grid-cols-2">
            
            <a
              href="mailto:rashi1shekhar@gmail.com"
              className="group relative flex items-center gap-3.5 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-3.5 sm:p-4 transition-all duration-300 hover:border-violet-500/40 hover:bg-slate-900/80"
            >
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10 text-violet-400 transition-colors duration-300 group-hover:bg-violet-500 group-hover:text-white">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Email Me
                </p>
                <p className="truncate text-xs sm:text-sm font-medium text-slate-200 group-hover:text-violet-300">
                  rashi1shekhar@gmail.com
                </p>
              </div>
            </a>

            <a
              href="tel:+919005605010"
              className="group relative flex items-center gap-3.5 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-3.5 sm:p-4 transition-all duration-300 hover:border-violet-500/40 hover:bg-slate-900/80"
            >
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10 text-violet-400 transition-colors duration-300 group-hover:bg-violet-500 group-hover:text-white">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Call / WhatsApp
                </p>
                <p className="truncate text-xs sm:text-sm font-medium text-slate-200 group-hover:text-violet-300">
                  +91 9005600510
                </p>
              </div>
            </a>

          </div>

          {/* Social Links Row */}
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://www.linkedin.com/in/rashi-shekhar-90b65b301/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-800 bg-slate-900/40 px-4 py-2 text-xs font-medium text-slate-400 transition hover:border-slate-700 hover:bg-slate-900 hover:text-violet-300"
            >
              <span>LinkedIn</span>
              <span className="text-slate-600">↗</span>
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-800 bg-slate-900/40 px-4 py-2 text-xs font-medium text-slate-400 transition hover:border-slate-700 hover:bg-slate-900 hover:text-violet-300"
            >
              <span>GitHub</span>
              <span className="text-slate-600">↗</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
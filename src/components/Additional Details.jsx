import React from 'react';

function AdditionalDetails() {
  const languages = [
    { name: "English", level: "Professional" },
    { name: "Hindi", level: "Native / Fluent" },
    { name: "Malayalam", level: "Conversational" },
  ];

  return (
    <section id="additional" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">

        {/* Section Title */}
        <div className="flex flex-col items-start gap-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3.5 py-1 text-xs font-medium uppercase tracking-wider text-violet-300">
            More About Me
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Activities & Languages
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">

          {/* Activity / Bootcamp Card */}
          <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/60 p-7 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/40">
            <div className="flex items-start gap-5">
              
              {/* Icon Container */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10 text-violet-400 transition-colors duration-300 group-hover:bg-violet-500 group-hover:text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold tracking-tight text-white group-hover:text-violet-300 transition-colors">
                    Ethical Hacking Bootcamp
                  </h3>
                  <span className="rounded-md border border-slate-800 bg-slate-900 px-2.5 py-1 text-xs font-medium text-slate-400">
                    Feb 2024
                  </span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  Conducted by the Department of Computer Science & IT at Amrita Vishwa Vidyapeetham, Kochi Campus. Explored core fundamentals of network security, vulnerability assessment, and defensive practices.
                </p>

                <div className="mt-4 flex items-center gap-2 text-xs font-medium text-slate-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                  <span>Amrita Vishwa Vidyapeetham</span>
                </div>
              </div>

            </div>
          </div>

          {/* Languages Card */}
          <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/60 p-7 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/40">
            <div className="flex items-start gap-5">
              
              {/* Icon Container */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10 text-violet-400 transition-colors duration-300 group-hover:bg-violet-500 group-hover:text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-semibold tracking-tight text-white group-hover:text-violet-300 transition-colors">
                  Languages
                </h3>
                <p className="mt-1 text-sm text-slate-400">
                  Languages I communicate and collaborate in
                </p>

                <div className="mt-5 flex flex-wrap gap-2.5">
                  {languages.map((lang) => (
                    <div
                      key={lang.name}
                      className="group/tag inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/80 px-3.5 py-2 text-xs transition hover:border-violet-500/30 hover:bg-slate-800/80"
                    >
                      <span className="font-medium text-slate-200">{lang.name}</span>
                      <span className="h-1 w-1 rounded-full bg-slate-600 group-hover/tag:bg-violet-400" />
                      <span className="text-[11px] text-slate-500">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default AdditionalDetails;
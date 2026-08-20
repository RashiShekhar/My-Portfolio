import React from 'react';

function Education() {
  const educationData = [
    {
      degree: "Integrated MCA (Master of Computer Applications)",
      stream: "Computer Science & Applications",
      institution: "Amrita School of Arts & Sciences",
      university: "Amrita Vishwa Vidyapeetham",
      period: "2023 – 2028",
      status: "Pursuing",
    },
    {
      degree: "Senior Secondary (Class XII), CBSE",
      stream: "Science Stream (PCM)",
      institution: "Dayawati Modi Public School",
      university: "Raebareli, UP",
      period: "2023",
      status: "Completed",
    },
    {
      degree: "Secondary School Examination (Class X), CBSE",
      stream: "General Academics",
      institution: "Dayawati Modi Public School",
      university: "Raebareli, UP",
      period: "2021",
      status: "Completed",
    },
  ];

  return (
    <section id="education" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">

        <div className="flex flex-col items-start gap-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3.5 py-1 text-xs font-medium uppercase tracking-wider text-violet-300">
            Academic Background
          </span>
          <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-4xl">
            Education Journey
          </h2>
        </div>

        {/* Timeline with Safe Responsive Inset */}
        <div className="relative mt-10 sm:mt-12 pl-4 sm:pl-8">
          <div className="absolute bottom-4 left-1 sm:left-3 top-3 w-[2px] bg-gradient-to-b from-violet-500 via-slate-800 to-transparent" />

          <div className="space-y-6 sm:space-y-8">
            {educationData.map((item, idx) => (
              <div key={idx} className="group relative">
                
                {/* Timeline Node Icon */}
                <div className="absolute -left-[18px] sm:-left-[25px] top-5 flex h-3.5 w-3.5 sm:h-4 sm:w-4 items-center justify-center rounded-full border border-violet-400/30 bg-slate-950">
                  <span className={`h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full ${idx === 0 ? 'bg-violet-400 ring-2 sm:ring-4 ring-violet-500/20 animate-pulse' : 'bg-slate-500'}`} />
                </div>

                <div className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-5 sm:p-7 shadow-md backdrop-blur-md transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/40">
                  
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-lg border border-violet-500/20 bg-violet-500/10 px-2.5 py-1 text-[11px] sm:text-xs font-semibold text-violet-300">
                        {item.period}
                      </span>
                      {item.status === 'Pursuing' && (
                        <span className="rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-400">
                          Current
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] sm:text-xs font-medium text-slate-500">
                      {item.stream}
                    </span>
                  </div>

                  <h3 className="mt-3 sm:mt-4 text-base sm:text-xl font-semibold tracking-tight text-white group-hover:text-violet-300 transition-colors">
                    {item.degree}
                  </h3>

                  <div className="mt-2.5 sm:mt-3 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs sm:text-sm text-slate-400">
                    <span className="font-medium text-slate-300">{item.institution}</span>
                    <span className="h-1 w-1 rounded-full bg-slate-700" />
                    <span className="text-slate-500">{item.university}</span>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;
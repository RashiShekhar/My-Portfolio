import React from 'react';

function Experience() {
  const experiences = [
    {
      role: "MERN Stack Developer Intern",
      company: "Ada Technologies",
      location: "Ernakulam, Kerala",
      type: "Internship",
      period: "Dec 2024 – Jan 2025",
      description:
        "Contributed to full-stack web applications using the MERN stack. Designed and integrated dynamic, responsive frontend interfaces with React while building and testing RESTful backend services with Node.js and Express.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "Tailwind CSS"],
    },
  ];

  return (
    <section id="experience" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">

        <div className="flex flex-col items-start gap-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3.5 py-1 text-xs font-medium uppercase tracking-wider text-violet-300">
            Career Pathway
          </span>
          <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-4xl">
            Work Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative mt-10 sm:mt-12 pl-4 sm:pl-8">
          <div className="absolute bottom-4 left-1 sm:left-3 top-3 w-[2px] bg-gradient-to-b from-violet-500 via-slate-800 to-transparent" />

          <div className="space-y-8 sm:space-y-10">
            {experiences.map((exp, idx) => (
              <div key={idx} className="group relative">

                {/* Pin Node */}
                <div className="absolute -left-[18px] sm:-left-[25px] top-6 flex h-3.5 w-3.5 sm:h-4 sm:w-4 items-center justify-center rounded-full border border-violet-400/30 bg-slate-950">
                  <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-violet-400 ring-2 sm:ring-4 ring-violet-500/20 animate-pulse" />
                </div>

                <div className="overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/60 p-5 sm:p-8 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/40">
                  
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-lg border border-violet-500/20 bg-violet-500/10 px-2.5 py-1 text-[11px] sm:text-xs font-semibold text-violet-300">
                        {exp.period}
                      </span>
                      <span className="rounded-lg border border-slate-800 bg-slate-900 px-2 py-0.5 text-[10px] sm:text-[11px] font-medium text-slate-400">
                        {exp.type}
                      </span>
                    </div>
                    <span className="text-[11px] sm:text-xs font-medium text-slate-500">
                      {exp.location}
                    </span>
                  </div>

                  <div className="mt-3 sm:mt-4">
                    <h3 className="text-lg sm:text-2xl font-bold tracking-tight text-white group-hover:text-violet-300 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="mt-0.5 text-xs sm:text-sm font-medium text-slate-300">
                      {exp.company}
                    </p>
                  </div>

                  <p className="mt-3 sm:mt-4 text-xs leading-relaxed text-slate-400 sm:text-base">
                    {exp.description}
                  </p>

                  <div className="mt-5 sm:mt-6 flex flex-wrap gap-1.5 sm:gap-2 pt-4 border-t border-slate-800/60">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-lg border border-slate-800 bg-slate-900/80 px-2.5 py-1 text-[11px] sm:text-xs font-medium text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
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

export default Experience;
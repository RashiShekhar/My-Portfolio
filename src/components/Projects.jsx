import React from 'react';

function Projects() {
  const projects = [
    {
      number: "01",
      category: "Security",
      title: "CyberTron",
      subtitle: "Linux Security Dashboard",
      description:
        "A web-based security monitoring dashboard for Linux environments that provides real-time visibility into system health, network activity, and active vulnerabilities.",
      features: [
        "System health & core resource monitoring",
        "Network discovery and packet analysis",
        "Port and service scanning engine",
        "Automated process threat management",
      ],
      tech: ["React.js", "Node.js", "Express.js", "SQLite", "Prisma", "Tailwind CSS"],
      previewType: "cybertron",
    },
    {
      number: "02",
      category: "Healthcare",
      title: "Trusted Doctor",
      subtitle: "Healthcare Management Platform",
      description:
        "A full-stack medical practice management platform for clinics. Streamlines patient scheduling, doctor workflows, and confidential record sharing.",
      features: [
        "Doctor and patient self-service portals",
        "Real-time appointment scheduling",
        "Encrypted medical record sharing",
        "Integrated telehealth consultations",
      ],
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "AWS S3", "NextAuth.js"],
      previewType: "doctor",
    },
    {
      number: "03",
      category: "Web Application",
      title: "Menorah Mirielle",
      subtitle: "Home Care Service Platform",
      description:
        "A UK-based home care service platform offering tailored support plans, transparent service catalogs, and direct inquiry scheduling.",
      features: [
        "24/7 live-in support across mainland England",
        "Visiting care across Greater London",
        "Integrated care coordination booking",
        "Accessible, high-contrast client UI",
      ],
      tech: ["React.js", "Tailwind CSS", "Framer Motion", "Vite"],
      github: null,
      demo: "https://menorahmirielle.co.uk/",
      previewType: "menorah",
    },
  ];

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">

        {/* Section Header */}
        <div className="flex flex-col items-start gap-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3.5 py-1 text-xs font-medium uppercase tracking-wider text-violet-300">
            Selected Works
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
            Production-ready applications and software built with a focus on clean architecture, responsive design, and robust security.
          </p>
        </div>

        {/* Projects Stack */}
        <div className="mt-16 space-y-24">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 1;

            return (
              <div
                key={project.title}
                className="grid items-center gap-10 lg:grid-cols-12"
              >
                
                {/* Project Info Block */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-semibold text-violet-400">
                      {project.number}
                    </span>
                    <span className="h-px w-6 bg-slate-800" />
                    <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-violet-300/90">
                    {project.subtitle}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-slate-400">
                    {project.description}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="mt-5 space-y-2 text-xs text-slate-300">
                    {project.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2">
                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-violet-500/10 text-violet-400">
                          ✓
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack Pills */}
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-lg border border-slate-800 bg-slate-900/80 px-2.5 py-1 text-xs font-medium text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-7 flex items-center gap-3">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-violet-600/20 transition-all duration-200 hover:bg-violet-500 hover:shadow-violet-600/30"
                      >
                        <span>Live Demo</span>
                        <span>↗</span>
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-2 text-xs font-semibold text-slate-300 transition-all duration-200 hover:border-slate-700 hover:bg-slate-900 hover:text-white"
                      >
                        <span>GitHub</span>
                        <span className="text-slate-500">↗</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Preview Mockup */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80 p-1 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-slate-700">
                    
                    {/* Window Controls */}
                    <div className="flex items-center justify-between border-b border-slate-800/80 bg-slate-900/60 px-4 py-3">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="font-mono text-[11px] text-slate-500">
                        {project.title.toLowerCase().replace(/\s+/g, '-')}.app
                      </span>
                      <div className="h-2.5 w-2.5 opacity-0" />
                    </div>

                    {/* Window Inner Screen */}
                    <div className="p-5">

                      {/* Mockup 1: CyberTron */}
                      {project.previewType === "cybertron" && (
                        <div>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                                System Status
                              </p>
                              <p className="mt-0.5 text-base font-bold text-white">
                                All Systems Guarded
                              </p>
                            </div>
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-400">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              Secure
                            </span>
                          </div>

                          <div className="mt-4 grid grid-cols-3 gap-2.5">
                            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-3">
                              <p className="text-[10px] text-slate-500 uppercase font-semibold">CPU Usage</p>
                              <p className="mt-1 text-sm font-bold text-white">32%</p>
                            </div>
                            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-3">
                              <p className="text-[10px] text-slate-500 uppercase font-semibold">Network</p>
                              <p className="mt-1 text-sm font-bold text-white">18 Nodes</p>
                            </div>
                            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-3">
                              <p className="text-[10px] text-slate-500 uppercase font-semibold">Threats</p>
                              <p className="mt-1 text-sm font-bold text-violet-400">00 Detected</p>
                            </div>
                          </div>

                          <div className="mt-4 rounded-xl border border-slate-800/80 bg-slate-900/30 p-3.5">
                            <p className="text-[10px] uppercase font-semibold tracking-wider text-slate-500 mb-2">Live Traffic Flow</p>
                            <div className="flex h-20 items-end gap-1.5">
                              {[35, 55, 42, 70, 48, 80, 62, 90, 68, 75, 55, 85].map((val, i) => (
                                <div
                                  key={i}
                                  className="flex-1 rounded-t bg-gradient-to-t from-violet-600 to-violet-400 opacity-75 transition-all group-hover:opacity-100"
                                  style={{ height: `${val}%` }}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Mockup 2: Trusted Doctor */}
                      {project.previewType === "doctor" && (
                        <div className="space-y-3">
                          <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                            <div>
                              <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Upcoming Consultations</p>
                              <p className="text-sm font-bold text-white">Patient Schedule</p>
                            </div>
                            <span className="rounded-lg bg-violet-500/10 border border-violet-500/20 px-2.5 py-1 text-[11px] font-medium text-violet-300">
                              + Book Session
                            </span>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/50 p-3">
                              <div>
                                <p className="text-xs font-semibold text-slate-200">Patient Appointment</p>
                                <p className="text-[11px] text-slate-500">Today · 10:30 AM</p>
                              </div>
                              <span className="rounded-md border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-400">
                                Confirmed
                              </span>
                            </div>

                            <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/50 p-3">
                              <div>
                                <p className="text-xs font-semibold text-slate-200">Doctor Consultation</p>
                                <p className="text-[11px] text-slate-500">Today · 02:00 PM</p>
                              </div>
                              <span className="rounded-md border border-violet-500/20 bg-violet-500/10 px-2 py-0.5 text-[10px] font-medium text-violet-300">
                                Upcoming
                              </span>
                            </div>

                            <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/50 p-3">
                              <div>
                                <p className="text-xs font-semibold text-slate-200">Clinical Follow-up</p>
                                <p className="text-[11px] text-slate-500">Tomorrow · 11:00 AM</p>
                              </div>
                              <span className="rounded-md border border-slate-700 bg-slate-800 px-2 py-0.5 text-[10px] font-medium text-slate-400">
                                Pending
                              </span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Mockup 3: Menorah Mirielle */}
                      {project.previewType === "menorah" && (
                        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 text-center">
                          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-500/20 bg-violet-500/10 text-violet-400">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                          </div>

                          <h4 className="mt-3 text-base font-bold text-white">
                            Compassionate Home Care
                          </h4>
                          <p className="mt-1 text-xs text-slate-400">
                            Dignified support tailored around individual comfort and independence.
                          </p>

                          <div className="mt-4 grid grid-cols-2 gap-2 text-left">
                            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
                              <p className="text-xs font-semibold text-slate-200">24/7 Live-in</p>
                              <p className="text-[11px] text-slate-500">Continuous Support</p>
                            </div>
                            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
                              <p className="text-xs font-semibold text-slate-200">Home Visits</p>
                              <p className="text-[11px] text-slate-500">Flexible Scheduling</p>
                            </div>
                          </div>
                        </div>
                      )}

                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Projects;
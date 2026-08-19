function Projects() {
  return (
    <section id="projects">
      <div className="mx-auto max-w-6xl px-6 py-24">

        {/* Section Heading */}
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-violet-400">
          My Work
        </p>

        <h2 className="text-4xl font-bold text-white">
          Featured Projects
        </h2>

        <p className="mt-4 max-w-2xl text-slate-400">
          A collection of projects I've built using modern web technologies.
        </p>

        {/* Projects */}
        <div className="mt-16 space-y-20">

          {/* ================= CYBERTRON ================= */}
          <div className="grid items-center gap-10 md:grid-cols-2">

            {/* Project Info */}
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-violet-400">
                01 / Security
              </p>

              <h3 className="text-3xl font-bold text-white">
                CyberTron
              </h3>

              <h4 className="mt-2 text-lg font-medium text-slate-300">
                Linux Security Dashboard
              </h4>

              <p className="mt-5 leading-7 text-slate-400">
                A web-based security monitoring dashboard for Linux
                environments that provides real-time visibility into
                system health, network activity, and potential security
                threats.
              </p>

              {/* Features */}
              <ul className="mt-5 space-y-2 text-sm text-slate-400">
                <li>→ System health monitoring</li>
                <li>→ Network discovery and analysis</li>
                <li>→ Port and service scanning</li>
                <li>→ Process and threat management</li>
              </ul>

              {/* Tech Stack */}
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "React.js",
                  "Node.js",
                  "Express.js",
                  "SQLite",
                  "Prisma",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-7 flex gap-4">
                <a
                  href="#"
                  className="text-sm font-medium text-violet-400 transition hover:text-violet-300"
                >
                  GitHub →
                </a>

                <a
                  href="#"
                  className="text-sm font-medium text-slate-300 transition hover:text-white"
                >
                  Live Demo →
                </a>
              </div>
            </div>

            {/* Project Preview */}
            <div className="group overflow-hidden rounded-2xl border border-white/10 bg-[#111C32]">
              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />

                <span className="ml-2 text-xs text-slate-500">
                  cybertron-dashboard
                </span>
              </div>

              <div className="p-6">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-500">
                      SYSTEM STATUS
                    </p>
                    <p className="mt-1 text-xl font-semibold text-white">
                      Protected
                    </p>
                  </div>

                  <span className="rounded-full bg-green-400/10 px-3 py-1 text-xs text-green-400">
                    ● Secure
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-lg border border-white/5 bg-white/[0.03] p-4">
                    <p className="text-xs text-slate-500">CPU</p>
                    <p className="mt-2 text-lg font-semibold text-white">
                      32%
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/5 bg-white/[0.03] p-4">
                    <p className="text-xs text-slate-500">Network</p>
                    <p className="mt-2 text-lg font-semibold text-white">
                      18
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/5 bg-white/[0.03] p-4">
                    <p className="text-xs text-slate-500">Threats</p>
                    <p className="mt-2 text-lg font-semibold text-violet-400">
                      03
                    </p>
                  </div>
                </div>

                <div className="mt-4 h-28 rounded-lg border border-white/5 bg-white/[0.02] p-4">
                  <div className="flex h-full items-end gap-2">
                    {[35, 55, 42, 70, 48, 80, 62, 90, 68, 75, 55, 85].map(
                      (height, index) => (
                        <div
                          key={index}
                          className="flex-1 rounded-t bg-violet-500/60"
                          style={{ height: `${height}%` }}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* ================= TRUSTED DOCTOR ================= */}
          <div className="grid items-center gap-10 md:grid-cols-2">

            {/* Project Preview */}
            <div className="order-2 overflow-hidden rounded-2xl border border-white/10 bg-[#111C32] md:order-1">
              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />

                <span className="ml-2 text-xs text-slate-500">
                  trusted-doctor
                </span>
              </div>

              <div className="p-6">
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-500">
                        DASHBOARD
                      </p>
                      <p className="mt-1 text-lg font-semibold text-white">
                        Appointments
                      </p>
                    </div>

                    <span className="rounded-lg bg-violet-500/10 px-3 py-2 text-xs text-violet-400">
                      + New
                    </span>
                  </div>

                  <div className="mt-5 space-y-3">
                    <div className="flex items-center justify-between rounded-lg bg-white/[0.03] p-3">
                      <div>
                        <p className="text-sm text-white">
                          Patient Appointment
                        </p>
                        <p className="text-xs text-slate-500">
                          Today · 10:30 AM
                        </p>
                      </div>

                      <span className="text-xs text-green-400">
                        Confirmed
                      </span>
                    </div>

                    <div className="flex items-center justify-between rounded-lg bg-white/[0.03] p-3">
                      <div>
                        <p className="text-sm text-white">
                          Doctor Consultation
                        </p>
                        <p className="text-xs text-slate-500">
                          Today · 02:00 PM
                        </p>
                      </div>

                      <span className="text-xs text-violet-400">
                        Upcoming
                      </span>
                    </div>

                    <div className="flex items-center justify-between rounded-lg bg-white/[0.03] p-3">
                      <div>
                        <p className="text-sm text-white">
                          Follow-up
                        </p>
                        <p className="text-xs text-slate-500">
                          Tomorrow · 11:00 AM
                        </p>
                      </div>

                      <span className="text-xs text-slate-400">
                        Pending
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className="order-1 md:order-2">
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-violet-400">
                02 / Healthcare
              </p>

              <h3 className="text-3xl font-bold text-white">
                Trusted Doctor
              </h3>

              <h4 className="mt-2 text-lg font-medium text-slate-300">
                Healthcare Management Platform
              </h4>

              <p className="mt-5 leading-7 text-slate-400">
                A web-based medical practice management platform designed
                for small to mid-sized healthcare providers. It enables
                doctors and patients to manage profiles, schedule
                appointments, and securely share medical documents.
              </p>

              <ul className="mt-5 space-y-2 text-sm text-slate-400">
                <li>→ Doctor and patient dashboards</li>
                <li>→ Appointment scheduling</li>
                <li>→ Secure medical document sharing</li>
                <li>→ Telehealth integration</li>
                <li>→ AI-powered symptom checker</li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "TypeScript",
                  "PostgreSQL",
                  "Prisma",
                  "AWS S3",
                  "NextAuth.js",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex gap-4">
                <a
                  href="#"
                  className="text-sm font-medium text-violet-400 transition hover:text-violet-300"
                >
                  GitHub →
                </a>

                <a
                  href="#"
                  className="text-sm font-medium text-slate-300 transition hover:text-white"
                >
                  Live Demo →
                </a>
              </div>
            </div>
          </div>


          {/* ================= MENORAH MIRIELLE ================= */}
          <div className="grid items-center gap-10 md:grid-cols-2">

            {/* Project Info */}
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-violet-400">
                03 / Web Design
              </p>

              <h3 className="text-3xl font-bold text-white">
                Menorah Mirielle
              </h3>

              <h4 className="mt-2 text-lg font-medium text-slate-300">
                Home Care Service Website
              </h4>

              <p className="mt-5 leading-7 text-slate-400">
                A professional website for Menorah Mirielle Care Service,
                a UK-based home care provider offering personalized care
                and support services. The website presents their care
                services, service areas, and approach to providing
                safe, compassionate, and high-quality care at home.
              </p>

              <ul className="mt-5 space-y-2 text-sm text-slate-400">
                <li>→ 24/7 live-in care across mainland England</li>
                <li>→ Visiting care across Greater London</li>
                <li>→ Coordination with healthcare professionals</li>
                <li>→ Personalized care services</li>
              </ul>

              <p className="mt-5 text-sm leading-6 text-slate-500">
                The goal was to create a clear, professional, and
                trustworthy online presence that helps clients and
                families understand the available care services.
              </p>

              <div className="mt-7">
                <a
                  href="#"
                  className="text-sm font-medium text-violet-400 transition hover:text-violet-300"
                >
                  Live Website →
                </a>
              </div>
            </div>

            {/* Project Preview */}
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111C32]">
              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />

                <span className="ml-2 text-xs text-slate-500">
                  menorah-mirielle
                </span>
              </div>

              <div className="p-6">
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-violet-500/10">
                    <span className="text-2xl text-violet-400">
                      +
                    </span>
                  </div>

                  <h4 className="mt-5 text-xl font-semibold text-white">
                    Compassionate Care
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Professional home care services designed around
                    individual needs, comfort, safety, and independence.
                  </p>

                  <div className="mt-6 grid grid-cols-2 gap-3 text-left">
                    <div className="rounded-lg border border-white/5 bg-white/[0.03] p-4">
                      <p className="text-sm font-medium text-white">
                        24/7 Care
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        Live-in support
                      </p>
                    </div>

                    <div className="rounded-lg border border-white/5 bg-white/[0.03] p-4">
                      <p className="text-sm font-medium text-white">
                        Home Visits
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        Flexible support
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;
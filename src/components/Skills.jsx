function Skills() {
  const frontend = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
  ];

  const backend = [
    "Node.js",
    "Express.js",
    "PHP",
    "APIs",
    "Postman",
  ];

  const database = [
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "SQL",
    "NoSQL",
    "DBMS",
  ];

  const programming = [
    "Python",
    "C",
    "GitHub",
  ];

  return (
    <section id="skills">
      <div className="mx-auto max-w-6xl px-6 py-24">

        {/* Section Heading */}
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-violet-400">
          What I Know
        </p>

        <h2 className="text-4xl font-bold text-white">
          Skills & Technologies
        </h2>

        <p className="mt-4 max-w-2xl text-slate-400">
          Technologies and tools I use to build, develop, and manage
          modern web applications.
        </p>

        {/* Skills Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">

          {/* Frontend */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
                {"</>"}
              </div>

              <h3 className="text-xl font-semibold text-white">
                Frontend Development
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {frontend.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-[#111C32] px-4 py-2 text-sm text-slate-300 transition hover:border-violet-400/50 hover:text-violet-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
                {"{ }"}
              </div>

              <h3 className="text-xl font-semibold text-white">
                Backend Development
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {backend.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-[#111C32] px-4 py-2 text-sm text-slate-300 transition hover:border-violet-400/50 hover:text-violet-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Database */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
                {"DB"}
              </div>

              <h3 className="text-xl font-semibold text-white">
                Databases
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {database.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-[#111C32] px-4 py-2 text-sm text-slate-300 transition hover:border-violet-400/50 hover:text-violet-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Programming & Tools */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
                {"⚙"}
              </div>

              <h3 className="text-xl font-semibold text-white">
                Programming & Tools
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {programming.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-[#111C32] px-4 py-2 text-sm text-slate-300 transition hover:border-violet-400/50 hover:text-violet-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;
function Experience() {
  return (
    <section id="experience">
      <div className="mx-auto max-w-6xl px-6 py-24">

        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-violet-400">
          My Journey
        </p>

        <h2 className="text-4xl font-bold text-white">
          Work Experience
        </h2>

        <div className="mt-12 border-l border-white/10 pl-8">

          <div className="relative">
            <span className="absolute -left-[37px] top-1 h-3 w-3 rounded-full bg-violet-500 ring-4 ring-[#0B1426]" />

            <p className="text-sm text-violet-400">
              Dec 2024 – Jan 2025
            </p>

            <h3 className="mt-2 text-2xl font-semibold text-white">
              MERN Stack Developer
            </h3>

            <p className="mt-1 text-slate-400">
              Internship · Ada Technologies, Ernakulam
            </p>

            <p className="mt-5 max-w-2xl leading-7 text-slate-400">
              Worked on developing modern web applications using the MERN
              stack, building responsive user interfaces and working with
              frontend and backend technologies.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["MongoDB", "Express.js", "React", "Node.js"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Experience;
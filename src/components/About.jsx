function About() {
  return (
    <section id="about">
      <div className="mx-auto max-w-6xl px-6 py-24">

        {/* Section Heading */}
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-violet-400">
          Get to Know Me
        </p>

        <h2 className="text-4xl font-bold text-white">
          About Me
        </h2>

        {/* Content */}
        <div className="mt-12 grid items-center gap-12 md:grid-cols-2">

          {/* Left Side */}
          <div>
            <p className="text-lg leading-8 text-slate-300">
              I'm a passionate Full-Stack Developer who enjoys building
              responsive and user-friendly web applications while turning
              ideas into real-world projects.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              I'm interested in AI, blockchain, and continuously exploring
              modern technologies to grow as a software engineer.
            </p>
          </div>

          {/* Right Side */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">

            <p className="mb-6 font-mono text-sm text-slate-500">
              // What I enjoy working on
            </p>

            <div className="space-y-5">

              {/* Full Stack */}
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 text-lg">
                  💻
                </div>

                <div>
                  <h3 className="font-medium text-white">
                    Full-Stack Development
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Building complete web applications
                  </p>
                </div>
              </div>

              {/* Frontend */}
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 text-lg">
                  ⚛️
                </div>

                <div>
                  <h3 className="font-medium text-white">
                    React.js & Frontend Development
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Creating responsive user experiences
                  </p>
                </div>
              </div>

              {/* Backend */}
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 text-lg">
                  🚀
                </div>

                <div>
                  <h3 className="font-medium text-white">
                    Backend & API Development
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Designing reliable server-side systems
                  </p>
                </div>
              </div>

              {/* AI */}
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 text-lg">
                  🤖
                </div>

                <div>
                  <h3 className="font-medium text-white">
                    AI & Emerging Technologies
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Exploring new technologies and ideas
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
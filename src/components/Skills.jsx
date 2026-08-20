import React from 'react';

function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Crafting intuitive, responsive user interfaces",
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      title: "Backend Development",
      description: "Building scalable server logic and REST architectures",
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      skills: ["Node.js", "Express.js", "PHP", "RESTful APIs", "Postman"],
    },
    {
      title: "Databases & Storage",
      description: "Structuring schemas, relational tables, and document stores",
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      skills: ["MongoDB", "PostgreSQL", "MySQL", "SQL Queries", "Prisma ORM"],
    },
    {
      title: "Languages & Tooling",
      description: "Core programming paradigms, versioning, and environment tools",
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      skills: ["Python", "C Language", "Git & GitHub", "VS Code", "Linux Terminal"],
    },
  ];

  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">

        {/* Section Header */}
        <div className="flex flex-col items-start gap-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3.5 py-1 text-xs font-medium uppercase tracking-wider text-violet-300">
            Technical Stack
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Skills & Technologies
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
            A comprehensive set of tools, frameworks, and programming languages I use to bring ideas to life.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/60 p-7 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/40"
            >
              
              {/* Category Header */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10 text-violet-400 transition-colors duration-300 group-hover:bg-violet-500 group-hover:text-white">
                  {category.icon}
                </div>

                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-white transition-colors group-hover:text-violet-300">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills Tags */}
              <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-slate-800/60">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-slate-300 transition-all duration-200 hover:border-violet-500/30 hover:bg-slate-800 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
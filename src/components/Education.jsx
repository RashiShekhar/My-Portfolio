function Education() {
  return (
    <section id="education">
      <div className="mx-auto max-w-6xl px-6 py-24">

        {/* Heading */}
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-violet-400">
          My Background
        </p>

        <h2 className="text-4xl font-bold text-white">
          Education
        </h2>

        {/* Education Timeline */}
        <div className="mt-12 space-y-8">

          {/* BCA */}
          <div className="relative border-l border-white/10 pl-8">
            <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-violet-500 ring-4 ring-[#0B1426]" />

            <p className="text-sm text-violet-400">
              2023 – 2028
            </p>

            <h3 className="mt-2 text-xl font-semibold text-white">
              Integrated MCA (Master of Computer Applications)
            </h3>

            <p className="mt-1 text-slate-400">
              Amrita School of Arts & Sciences
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Amrita Vishwa Vidyapeetham
            </p>
          </div>

          {/* XII */}
          <div className="relative border-l border-white/10 pl-8">
            <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-violet-500 ring-4 ring-[#0B1426]" />

            <p className="text-sm text-violet-400">
              2023
            </p>

            <h3 className="mt-2 text-xl font-semibold text-white">
              Senior Secondary (XII), CBSE
            </h3>

            <p className="mt-1 text-slate-400">
              Science
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Dayawati Modi Public School, Raebareli
            </p>
          </div>

          {/* X */}
          <div className="relative border-l border-white/10 pl-8">
            <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-violet-500 ring-4 ring-[#0B1426]" />

            <p className="text-sm text-violet-400">
              2021
            </p>

            <h3 className="mt-2 text-xl font-semibold text-white">
              Secondary (X), CBSE
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Dayawati Modi Public School, Raebareli
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Education;
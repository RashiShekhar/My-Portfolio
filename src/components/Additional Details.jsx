function AdditionalDetails() {
  return (
    <section id="additional">
      <div className="mx-auto max-w-6xl px-6 py-20">

        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-violet-400">
          More About Me
        </p>

        <h2 className="text-3xl font-bold text-white">
          Activities & Languages
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">

          {/* Bootcamp */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 text-xl">
                🛡️
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">
                  Ethical Hacking Bootcamp
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Participated in the Ethical Hacking Bootcamp conducted by
                  the Department of Computer Science and IT at Amrita Vishwa
                  Vidyapeetham, Kochi Campus.
                </p>

                <p className="mt-3 text-sm text-slate-500">
                  6th – 8th February 2024
                </p>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-lg font-semibold text-white">
              Languages
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Languages I can communicate in
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {["English", "Hindi", "Malayalam"].map((language) => (
                <span
                  key={language}
                  className="rounded-full border border-white/10 bg-[#111C32] px-4 py-2 text-sm text-slate-300"
                >
                  {language}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AdditionalDetails;
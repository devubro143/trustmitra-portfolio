import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { buildLogs } from "@/data/buildLogs";

export default function BuildLogs() {
  const logs = [...buildLogs].sort((a, b) => b.day - a.day);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-100 text-slate-900 transition-colors duration-500 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-white">

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl animate-blob dark:bg-cyan-500/10" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-indigo-500/15 blur-3xl animate-blob animation-delay-2000 dark:bg-blue-500/10" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md transition-colors dark:border-slate-700/60 dark:bg-slate-900/80">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">
              Founder Log
            </p>
            <h1 className="text-2xl md:text-3xl font-bold">
              Build in Public
            </h1>
          </div>

          <Link href="/">
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0">
              Back to Home
            </Button>
          </Link>

        </div>
      </header>

      <main className="py-16">
        <div className="container max-w-6xl mx-auto px-4">

          <div className="mb-10">
            <p className="text-slate-300 max-w-3xl leading-relaxed">
              A transparent timeline of how I am building TrustMitra day by day — shipped updates, key learning loops, and public vlog notes.
            </p>
          </div>

          <div className="relative pl-0 md:pl-8">

            <div className="hidden md:block absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/40 via-cyan-400/20 to-transparent" />

            <div className="space-y-8">

              {logs.map((log) => (
                <article
                  id={`day-${log.day}`}
                  key={log.day}
                  className="relative scroll-mt-24 rounded-3xl border border-slate-700/80 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-950/80 p-6 md:p-8 shadow-[0_0_0_1px_rgba(56,189,248,0.08)] transition-all duration-300 hover:border-cyan-400/35 hover:shadow-[0_0_0_1px_rgba(56,189,248,0.22),0_16px_30px_-22px_rgba(56,189,248,0.65)]"
                >

                  <span className="hidden md:flex absolute -left-10 top-8 h-6 w-6 items-center justify-center rounded-full border border-cyan-400/50 bg-slate-900 text-xs font-semibold text-cyan-300">
                    {log.day}
                  </span>

                  <p className="text-sm font-medium text-cyan-300 mb-2">
                    Day {log.day}
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-2">
                    {log.title}
                  </h2>

                  <p className="text-sm text-slate-400 mb-4">
                    {log.date}
                  </p>

                  <p className="text-slate-300 leading-relaxed mb-7">
                    {log.summary}
                  </p>

                  <div className="grid gap-6 md:grid-cols-2 mb-8">

                    <div>
                      <h3 className="text-lg font-semibold mb-3">
                        What I Did Today
                      </h3>

                      <ul className="space-y-2 text-slate-300">
                        {log.actions.map((action) => (
                          <li key={action} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                            <span>{action}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">
                        Key Learnings
                      </h3>

                      <ul className="space-y-2 text-slate-300">
                        {log.learnings.map((learning) => (
                          <li key={learning} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                            <span>{learning}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      Day {log.day} Vlog
                    </h3>

                    <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-950/60">
                      <iframe
                        className="aspect-video w-full"
                        src={log.youtubeVideo}
                        title={`Day ${log.day} Build in Public Vlog`}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>
                  </div>

                </article>
              ))}

            </div>

          </div>

        </div>
      </main>

    </div>
  );
}
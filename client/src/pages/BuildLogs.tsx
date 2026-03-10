import HoverCard from "@/components/motion/HoverCard";
import MotionButton from "@/components/motion/MotionButton";
import { buildLogs } from "@/data/buildLogs";
import { cn } from "@/lib/utils";
import { motion, type Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "wouter";

function getYoutubeEmbed(url?: string) {
  if (!url) return "";

  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/);
  if (!match) return "";

  return `https://www.youtube.com/embed/${match[1]}`;
}

const timelineContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
} satisfies Variants;

const timelineCard = {
  hidden: (direction: number) => ({
    opacity: 0,
    x: 36 * direction,
    y: 18,
  }),
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
} satisfies Variants;

export default function BuildLogs() {
  const logs = [...buildLogs].sort((a, b) => b.day - a.day);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > 18;
      setIsScrolled(prev => (prev === next ? prev : next));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-100 text-slate-900 transition-colors duration-500 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-white">
      <div className="pointer-events-none fixed inset-0 -z-20 ambient-gradient" />
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl animate-blob dark:bg-cyan-500/10" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-indigo-500/15 blur-3xl animate-blob animation-delay-2000 dark:bg-blue-500/10" />
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 border-b transition-all duration-300",
          isScrolled
            ? "border-slate-200/80 bg-white/88 shadow-lg shadow-slate-900/10 backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/88 dark:shadow-black/30"
            : "border-slate-200/60 bg-white/65 backdrop-blur-sm dark:border-slate-700/40 dark:bg-slate-900/65"
        )}
      >
        <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">
              Founder Log
            </p>
            <h1 className="text-2xl md:text-3xl font-bold">Build in Public</h1>
          </div>

          <MotionButton
            asChild
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0"
          >
            <Link href="/">Back to Home</Link>
          </MotionButton>
        </div>
      </header>

      <main className="py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="mb-10">
            <p className="text-slate-300 max-w-3xl leading-relaxed">
              A transparent timeline of how I am building TrustMitra day by day
              â€” shipped updates, key learning loops, and public vlog notes.
            </p>
          </div>

          <div className="relative pl-0 md:pl-8">
            <div className="hidden md:block absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/40 via-cyan-400/20 to-transparent" />

            <motion.div
              variants={timelineContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="space-y-8"
            >
              {logs.map((log, index) => (
                <HoverCard
                  key={log.day}
                  hoverScale={1.015}
                  hoverY={-6}
                  className="rounded-3xl border border-slate-700/80 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-950/80 shadow-[0_0_0_1px_rgba(56,189,248,0.08)]"
                >
                  <motion.article
                    id={`day-${log.day}`}
                    custom={index % 2 === 0 ? -1 : 1}
                    variants={timelineCard}
                    className="relative scroll-mt-24 p-6 md:p-8"
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
                    <p className="text-sm text-slate-400 mb-4">{log.date}</p>

                    <p className="text-slate-300 leading-relaxed mb-7">
                      {log.summary}
                    </p>

                    <div className="grid gap-6 md:grid-cols-2 mb-8">
                      <div>
                        <h3 className="text-lg font-semibold mb-3">
                          What I Did Today
                        </h3>
                        <ul className="space-y-2 text-slate-300">
                          {log.actions.map(action => (
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
                          {log.learnings.map(learning => (
                            <li
                              key={learning}
                              className="flex items-start gap-2"
                            >
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
                          src={getYoutubeEmbed(log.youtubeVideo)}
                          className="w-full h-[420px] rounded-xl"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  </motion.article>
                </HoverCard>
              ))}
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}

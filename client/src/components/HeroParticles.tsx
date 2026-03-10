import { motion } from "framer-motion";
import { useMemo } from "react";

import { cn } from "@/lib/utils";

type HeroParticlesProps = {
  className?: string;
  count?: number;
};

type Particle = {
  id: number;
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
  driftX: number;
  driftY: number;
};

export default function HeroParticles({
  className,
  count = 18,
}: HeroParticlesProps) {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: count }, (_, id) => ({
      id,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 2 + Math.random() * 4,
      duration: 10 + Math.random() * 10,
      delay: Math.random() * 3,
      driftX: (Math.random() - 0.5) * 18,
      driftY: 12 + Math.random() * 18,
    }));
  }, [count]);

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none overflow-hidden", className)}
    >
      {particles.map(particle => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-cyan-300/25 blur-[1px]"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: particle.size,
            height: particle.size,
            willChange: "transform, opacity",
          }}
          animate={{
            y: [-particle.driftY, particle.driftY, -particle.driftY],
            x: [0, particle.driftX, 0],
            opacity: [0.08, 0.22, 0.08],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

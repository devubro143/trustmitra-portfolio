import {
  motion,
  type HTMLMotionProps,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import type { MouseEvent, ReactNode } from "react";

import { cn } from "@/lib/utils";

type HoverCardProps = HTMLMotionProps<"div"> & {
  hoverScale?: number;
  hoverY?: number;
  spotlight?: boolean;
};

export default function HoverCard({
  className,
  hoverScale = 1.03,
  hoverY = 0,
  spotlight = true,
  children,
  ...props
}: HoverCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlightBackground = useMotionTemplate`radial-gradient(280px circle at ${mouseX}px ${mouseY}px, rgba(56, 189, 248, 0.22), transparent 65%)`;

  const handlePointerMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  };

  return (
    <motion.div
      data-cursor="card"
      whileHover={{
        scale: hoverScale,
        y: hoverY,
        borderColor: "rgba(34, 211, 238, 0.45)",
        boxShadow:
          "0 0 0 1px rgba(34, 211, 238, 0.22), 0 18px 35px -20px rgba(34, 211, 238, 0.45)",
      }}
      transition={{ type: "spring", stiffness: 320, damping: 26, mass: 0.6 }}
      className={cn(
        "group relative overflow-hidden transform-gpu will-change-transform transition-[box-shadow,border-color] duration-300",
        className
      )}
      onMouseMove={handlePointerMove}
      {...props}
    >
      {spotlight && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: spotlightBackground }}
        />
      )}
      <div className="relative z-[1]">{children as ReactNode}</div>
    </motion.div>
  );
}

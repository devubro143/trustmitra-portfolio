import type { PropsWithChildren } from "react";
import { motion, type HTMLMotionProps, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

type FadeInSectionProps = PropsWithChildren<
  HTMLMotionProps<"div"> & {
    delay?: number;
    once?: boolean;
    amount?: number;
  }
>;

export default function FadeInSection({
  children,
  className,
  delay = 0,
  once = true,
  amount = 0.2,
  ...props
}: FadeInSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const animationProps = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once, amount },
        transition: {
          duration: 0.6,
          delay,
          ease: [0.22, 1, 0.36, 1] as const,
        },
      };

  return (
    <motion.div
      className={cn("transform-gpu will-change-transform", className)}
      {...animationProps}
      {...props}
    >
      {children}
    </motion.div>
  );
}

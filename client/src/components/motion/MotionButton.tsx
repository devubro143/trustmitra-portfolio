import { motion, useMotionValue, useSpring } from "framer-motion";
import type { ComponentProps, MouseEvent } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type MotionButtonProps = ComponentProps<typeof Button> & {
  containerClassName?: string;
  magnetic?: boolean;
  magneticStrength?: number;
};

export default function MotionButton({
  className,
  containerClassName,
  magnetic = true,
  magneticStrength = 8,
  children,
  ...props
}: MotionButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 320, damping: 24, mass: 0.45 });
  const springY = useSpring(y, { stiffness: 320, damping: 24, mass: 0.45 });

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!magnetic) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;
    const strength = magneticStrength / 24;

    x.set(offsetX * strength);
    y.set(offsetY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      data-cursor="button"
      whileHover={{ scale: 1.045 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 420, damping: 30, mass: 0.45 }}
      className={cn(
        "inline-flex transform-gpu will-change-transform",
        containerClassName
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
    >
      <Button
        className={cn(
          "transition-[box-shadow,background-color,border-color,color] duration-300 hover:shadow-[0_0_24px_rgba(34,211,238,0.22)]",
          className
        )}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  );
}

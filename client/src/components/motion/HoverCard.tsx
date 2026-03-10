import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import type { ComponentProps, MouseEvent, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

export type HoverCardProps = Omit<
  ComponentProps<typeof motion.div>,
  "children" | "onMouseMove" | "onMouseEnter" | "onMouseLeave"
> & {
  children: ReactNode;
  hoverScale?: number;
  hoverY?: number;
  tiltEnabled?: boolean;
  tiltMax?: number;
  spotlightEnabled?: boolean;
  spotlightSize?: number;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export default function HoverCard({
  className,
  children,
  hoverScale = 1.02,
  hoverY = -6,
  tiltEnabled = false,
  tiltMax = 10,
  spotlightEnabled = true,
  spotlightSize = 220,
  ...props
}: HoverCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const pointerXRef = useRef(0);
  const pointerYRef = useRef(0);
  const [canHover, setCanHover] = useState(false);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useMotionValue(1);
  const shadowAlpha = useMotionValue(0.18);

  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);
  const glowOpacity = useMotionValue(0);

  const smoothRotateX = useSpring(rotateX, {
    stiffness: 220,
    damping: 20,
    mass: 0.65,
  });
  const smoothRotateY = useSpring(rotateY, {
    stiffness: 220,
    damping: 20,
    mass: 0.65,
  });
  const smoothY = useSpring(y, { stiffness: 280, damping: 24, mass: 0.55 });
  const smoothScale = useSpring(scale, {
    stiffness: 300,
    damping: 24,
    mass: 0.55,
  });
  const smoothShadowAlpha = useSpring(shadowAlpha, {
    stiffness: 240,
    damping: 24,
    mass: 0.55,
  });

  const smoothGlowX = useSpring(glowX, {
    stiffness: 260,
    damping: 28,
    mass: 0.6,
  });
  const smoothGlowY = useSpring(glowY, {
    stiffness: 260,
    damping: 28,
    mass: 0.6,
  });
  const smoothGlowOpacity = useSpring(glowOpacity, {
    stiffness: 220,
    damping: 24,
    mass: 0.55,
  });

  const glowBackground = useMotionTemplate`radial-gradient(${spotlightSize}px circle at ${smoothGlowX}px ${smoothGlowY}px, rgba(34, 211, 238, 0.25), rgba(34, 211, 238, 0.12) 36%, transparent 70%)`;
  const cardShadow = useMotionTemplate`0 18px 44px -24px rgba(8, 145, 178, ${smoothShadowAlpha})`;

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const pointerQuery = window.matchMedia("(pointer: fine)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateCanHover = () => {
      setCanHover(pointerQuery.matches && !motionQuery.matches);
    };

    updateCanHover();
    pointerQuery.addEventListener("change", updateCanHover);
    motionQuery.addEventListener("change", updateCanHover);

    return () => {
      pointerQuery.removeEventListener("change", updateCanHover);
      motionQuery.removeEventListener("change", updateCanHover);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const updateFromPointer = () => {
    frameRef.current = null;

    const card = cardRef.current;
    if (!card) {
      return;
    }

    const rect = card.getBoundingClientRect();
    const localX = pointerXRef.current - rect.left;
    const localY = pointerYRef.current - rect.top;

    glowX.set(localX);
    glowY.set(localY);

    if (!tiltEnabled || !canHover) {
      return;
    }

    const offsetX = pointerXRef.current - (rect.left + rect.width / 2);
    const offsetY = pointerYRef.current - (rect.top + rect.height / 2);

    const nextRotateX = clamp(offsetY / 10, -tiltMax, tiltMax);
    const nextRotateY = clamp(-offsetX / 10, -tiltMax, tiltMax);

    rotateX.set(nextRotateX);
    rotateY.set(nextRotateY);
    shadowAlpha.set(0.34);
  };

  const scheduleFrame = () => {
    if (frameRef.current) {
      return;
    }

    frameRef.current = requestAnimationFrame(updateFromPointer);
  };

  const handleMouseEnter = (event: MouseEvent<HTMLDivElement>) => {
    if (!canHover) {
      return;
    }

    pointerXRef.current = event.clientX;
    pointerYRef.current = event.clientY;
    scale.set(hoverScale);
    y.set(hoverY);
    glowOpacity.set(spotlightEnabled ? 1 : 0);
    shadowAlpha.set(0.3);
    scheduleFrame();
  };

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!canHover) {
      return;
    }

    pointerXRef.current = event.clientX;
    pointerYRef.current = event.clientY;
    scheduleFrame();
  };

  const handleMouseLeave = () => {
    scale.set(1);
    y.set(0);
    rotateX.set(0);
    rotateY.set(0);
    shadowAlpha.set(0.18);
    glowOpacity.set(0);
  };

  return (
    <div className="transform-gpu [perspective:1200px]">
      <motion.div
        {...props}
        ref={cardRef}
        data-cursor="card"
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "relative overflow-hidden transform-gpu will-change-transform",
          className
        )}
        style={{
          rotateX: tiltEnabled && canHover ? smoothRotateX : 0,
          rotateY: tiltEnabled && canHover ? smoothRotateY : 0,
          y: smoothY,
          scale: smoothScale,
          boxShadow: cardShadow,
          transformStyle: "preserve-3d",
        }}
      >
        {spotlightEnabled ? (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-0"
            style={{
              backgroundImage: glowBackground,
              opacity: smoothGlowOpacity,
            }}
          />
        ) : null}

        <div className="relative z-10">{children}</div>
      </motion.div>
    </div>
  );
}

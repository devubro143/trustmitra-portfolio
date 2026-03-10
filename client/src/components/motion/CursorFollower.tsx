import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";

type HoverMode = "default" | "link" | "button" | "card";

function resolveHoverMode(target: EventTarget | null): HoverMode {
  if (!(target instanceof Element)) {
    return "default";
  }

  if (target.closest('[data-cursor="card"]')) {
    return "card";
  }

  if (target.closest('button,[role="button"],[data-cursor="button"]')) {
    return "button";
  }

  if (
    target.closest('a[href],[data-cursor="link"],[data-cursor="interactive"]')
  ) {
    return "link";
  }

  return "default";
}

export default function CursorFollower() {
  const [enabled, setEnabled] = useState(false);
  const [hoverMode, setHoverMode] = useState<HoverMode>("default");

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const scale = useMotionValue(1.1);
  const opacity = useMotionValue(0);
  const glowAlpha = useMotionValue(0.32);
  const ringScale = useMotionValue(1);
  const ringOpacity = useMotionValue(0.55);

  const smoothX = useSpring(x, { stiffness: 260, damping: 32, mass: 0.6 });
  const smoothY = useSpring(y, { stiffness: 260, damping: 32, mass: 0.6 });
  const smoothScale = useSpring(scale, {
    stiffness: 300,
    damping: 24,
    mass: 0.5,
  });
  const smoothOpacity = useSpring(opacity, {
    stiffness: 240,
    damping: 28,
    mass: 0.45,
  });
  const smoothGlowAlpha = useSpring(glowAlpha, {
    stiffness: 220,
    damping: 28,
    mass: 0.45,
  });
  const smoothRingScale = useSpring(ringScale, {
    stiffness: 280,
    damping: 28,
    mass: 0.45,
  });
  const smoothRingOpacity = useSpring(ringOpacity, {
    stiffness: 260,
    damping: 28,
    mass: 0.45,
  });

  const glowBackground = useMotionTemplate`radial-gradient(circle at center, rgba(34, 211, 238, ${smoothGlowAlpha}), rgba(34, 211, 238, 0.06) 38%, rgba(34, 211, 238, 0) 72%)`;

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const pointerQuery = window.matchMedia("(pointer: fine)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateEnabled = () => {
      setEnabled(pointerQuery.matches && !motionQuery.matches);
    };

    updateEnabled();

    pointerQuery.addEventListener("change", updateEnabled);
    motionQuery.addEventListener("change", updateEnabled);

    return () => {
      pointerQuery.removeEventListener("change", updateEnabled);
      motionQuery.removeEventListener("change", updateEnabled);
    };
  }, []);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    let frame = 0;

    const handlePointerMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        x.set(event.clientX - 18);
        y.set(event.clientY - 18);
      });

      const nextMode = resolveHoverMode(event.target);
      setHoverMode(current => (current === nextMode ? current : nextMode));
    };

    const handlePointerLeave = () => {
      setHoverMode("default");
      opacity.set(0);
    };

    const handlePointerEnter = () => {
      opacity.set(0.13);
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    window.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("pointerenter", handlePointerEnter);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("pointerenter", handlePointerEnter);
    };
  }, [enabled, opacity, x, y]);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    if (hoverMode === "card") {
      scale.set(2.2);
      opacity.set(0.3);
      glowAlpha.set(0.42);
      ringScale.set(1.15);
      ringOpacity.set(0.72);
      return;
    }

    if (hoverMode === "button") {
      scale.set(1.9);
      opacity.set(0.27);
      glowAlpha.set(0.38);
      ringScale.set(1.1);
      ringOpacity.set(0.68);
      return;
    }

    if (hoverMode === "link") {
      scale.set(1.55);
      opacity.set(0.23);
      glowAlpha.set(0.34);
      ringScale.set(1.05);
      ringOpacity.set(0.6);
      return;
    }

    scale.set(1.1);
    opacity.set(0.16);
    glowAlpha.set(0.32);
    ringScale.set(1);
    ringOpacity.set(0.55);
  }, [enabled, glowAlpha, hoverMode, opacity, ringOpacity, ringScale, scale]);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[90] h-12 w-12 rounded-full blur-xl transform-gpu will-change-transform"
        style={{
          x: smoothX,
          y: smoothY,
          scale: smoothScale,
          opacity: smoothOpacity,
          background: glowBackground,
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[91] h-3 w-3 rounded-full border border-cyan-200/70 bg-cyan-100/30 backdrop-blur-sm transform-gpu will-change-transform"
        style={{
          x: smoothX,
          y: smoothY,
          scale: smoothRingScale,
          opacity: smoothRingOpacity,
        }}
      />
    </>
  );
}

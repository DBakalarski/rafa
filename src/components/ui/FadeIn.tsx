"use client";

import { useRef, CSSProperties, ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type Direction = "up" | "down" | "left" | "right" | "none";

interface FadeInProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
}

const ANIMATION_MAP: Record<Direction, string> = {
  up: "animate-fade-in-up",
  down: "animate-[fadeInDown_600ms_cubic-bezier(0.16,1,0.3,1)_both]",
  left: "animate-fade-in-left",
  right: "animate-fade-in-right",
  none: "animate-fade-in",
};

export const FadeIn = ({
  children,
  direction = "up",
  delay = 0,
  duration,
  className = "",
}: FadeInProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const inView = useInView(ref);

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  const style: CSSProperties = {
    animationDelay: `${delay}ms`,
    ...(duration ? { animationDuration: `${duration}ms` } : {}),
  };

  return (
    <div
      ref={ref}
      className={`${inView ? ANIMATION_MAP[direction] : "opacity-0"} ${className}`}
      style={inView ? style : undefined}
    >
      {children}
    </div>
  );
};

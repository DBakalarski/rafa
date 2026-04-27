"use client";

import { Children, ReactNode } from "react";
import { FadeIn } from "./FadeIn";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface StaggerParentProps {
  children: ReactNode;
  staggerMs?: number;
  baseDelay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
}

export const StaggerParent = ({
  children,
  staggerMs = 80,
  baseDelay = 0,
  className = "",
  direction = "up",
}: StaggerParentProps) => {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className={className}>
      {Children.map(children, (child, i) => (
        <FadeIn key={i} direction={direction} delay={baseDelay + i * staggerMs}>
          {child}
        </FadeIn>
      ))}
    </div>
  );
};

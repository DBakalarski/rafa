"use client";

import React, { useRef, ElementType } from "react";
import { useInView } from "@/hooks/useInView";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface RevealTextProps {
  children: string;
  as?: ElementType;
  splitBy?: "word" | "char";
  className?: string;
  style?: React.CSSProperties;
  baseDelay?: number;
}

export const RevealText = ({
  children,
  as: Tag = "span",
  splitBy = "word",
  className = "",
  style,
  baseDelay = 0,
}: RevealTextProps) => {
  const ref = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();
  const inView = useInView(ref);

  if (prefersReduced) {
    return (
      <Tag className={className} style={style}>
        {children}
      </Tag>
    );
  }

  const staggerMs = splitBy === "word" ? 60 : 20;
  const units = splitBy === "word" ? children.split(" ") : children.split("");

  return (
    <Tag ref={ref as React.Ref<HTMLElement>} className={className} style={style} aria-label={children}>
      <span aria-hidden="true">
        {units.map((unit, i) => (
          <span
            key={i}
            className={inView ? "animate-fade-in-up inline-block" : "opacity-0 inline-block"}
            style={
              inView
                ? { animationDelay: `${baseDelay + i * staggerMs}ms` }
                : undefined
            }
          >
            {unit}
            {splitBy === "word" && i < units.length - 1 ? "\u00a0" : ""}
          </span>
        ))}
      </span>
    </Tag>
  );
};

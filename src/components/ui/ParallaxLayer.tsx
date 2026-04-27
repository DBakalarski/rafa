"use client";

import { useEffect, useRef, ReactNode, CSSProperties } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface ParallaxLayerProps {
  speed?: number;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const ParallaxLayer = ({
  speed = 0.2,
  children,
  className = "",
  style,
}: ParallaxLayerProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced || !ref.current) return;

    const el = ref.current;
    let raf: number;

    const onScroll = () => {
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const viewportCenter = window.innerHeight / 2;
        const elementCenter = rect.top + rect.height / 2;
        const offset = (viewportCenter - elementCenter) * speed * 0.4;
        el.style.transform = `translateY(${offset}px)`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [prefersReduced, speed]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
};

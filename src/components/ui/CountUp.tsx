"use client";

import { useRef, useState, useEffect } from "react";
import { useInView } from "@/hooks/useInView";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface CountUpProps {
  target: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const easeOutExpo = (t: number): number =>
  t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

export const CountUp = ({ target, duration = 1500, suffix = "", prefix = "" }: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const prefersReduced = useReducedMotion();
  const inView = useInView(ref);
  const [value, setValue] = useState(prefersReduced ? target : 0);
  const [done, setDone] = useState(prefersReduced);

  useEffect(() => {
    if (!inView || prefersReduced) return;

    const start = performance.now();
    let raf: number;

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutExpo(progress);
      setValue(Math.round(eased * target));

      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setValue(target);
        setDone(true);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, prefersReduced, target, duration]);

  return (
    <span ref={ref}>
      <span aria-hidden={!done ? "true" : undefined}>
        {prefix}{value}{suffix}
      </span>
      {done && <span className="sr-only">{prefix}{target}{suffix}</span>}
    </span>
  );
};

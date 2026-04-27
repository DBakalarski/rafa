"use client";

import { RefObject, useEffect, useState } from "react";
import { useReducedMotion } from "./useReducedMotion";

interface UseInViewOptions extends IntersectionObserverInit {
  triggerOnce?: boolean;
}

export function useInView(
  ref: RefObject<Element | null>,
  options: UseInViewOptions = {}
): boolean {
  const prefersReduced = useReducedMotion();
  const [inView, setInView] = useState(prefersReduced);

  useEffect(() => {
    if (prefersReduced || !ref.current) return;

    const { triggerOnce = true, threshold = 0.15, rootMargin = "0px 0px -40px 0px", ...rest } = options;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (triggerOnce) observer.disconnect();
        }
      },
      { threshold, rootMargin, ...rest }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, prefersReduced]);

  return inView;
}

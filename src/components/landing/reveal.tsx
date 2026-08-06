import { createElement, useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
};

export function Reveal({ children, className = "", as = "div" }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [state, setState] = useState<"idle" | "hidden" | "visible">("idle");

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    setState("hidden");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setState("visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setState("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return createElement(
    as,
    {
      ref,
      className: `motion-reveal ${className}`.trim(),
      "data-reveal-state": state === "idle" ? undefined : state,
    },
    children,
  );
}

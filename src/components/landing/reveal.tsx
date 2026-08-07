import {
  createElement,
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  delay?: number;
} & Omit<ComponentPropsWithoutRef<"div">, "children" | "className">;

export function Reveal({ children, className = "", as = "div", delay, ...rest }: RevealProps) {
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
      ...rest,
      ref,
      className: `motion-reveal ${className}`.trim(),
      style: delay
        ? ({ ...(rest.style ?? {}), "--reveal-delay": `${delay}ms` } as CSSProperties)
        : rest.style,
      "data-reveal-state": state === "idle" ? undefined : state,
    },
    children,
  );
}

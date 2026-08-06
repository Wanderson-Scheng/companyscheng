import { useEffect, useRef, useState } from "react";

type TypewriterProps = {
  text: string;
  speed?: number;
  className?: string;
};

export function Typewriter({ text, speed = 38, className = "" }: TypewriterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [started, setStarted] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStarted(true);
      setCount(text.length);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [text]);

  useEffect(() => {
    setCount(0);
  }, [text]);

  useEffect(() => {
    if (!started || count >= text.length) return;
    const id = window.setTimeout(() => setCount((c) => c + 1), speed);
    return () => window.clearTimeout(id);
  }, [started, count, text, speed]);

  const done = count >= text.length;

  return (
    <span ref={ref} className={className}>
      <span aria-hidden="true">{text.slice(0, count)}</span>
      {!done ? <span className="type-caret" aria-hidden="true" /> : null}
      <span className="sr-only">{text}</span>
    </span>
  );
}

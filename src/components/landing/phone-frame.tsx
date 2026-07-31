export function PhoneFrame({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`relative rounded-[2.4rem] border border-border bg-foreground/90 p-[0.45rem] shadow-[var(--shadow-lift)] ${className}`}
    >
      <div className="relative overflow-hidden rounded-[2rem] bg-card">
        <span
          className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-foreground"
          aria-hidden="true"
        />
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          width={884}
          height={1912}
          className="block w-full"
        />
      </div>
    </div>
  );
}

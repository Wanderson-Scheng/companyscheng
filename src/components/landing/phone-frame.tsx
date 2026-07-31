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
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          width={884}
          height={1912}
          className="block h-auto w-full object-contain"
        />
      </div>
    </div>
  );
}

import type { LucideIcon } from "lucide-react";
import { ArrowRight, Camera, Cpu, HardDrive, Sparkles, Thermometer } from "lucide-react";
import { LazyImage } from "@/components/ui/lazy-image";
import { use3DI18n } from "./i18n";

const heroShotUrl = "/3dscheng/dashboard-light.png";

const explodedFeatures: { icon: LucideIcon; label: string }[] = [
  { icon: Cpu, label: "MQTT" },
  { icon: Thermometer, label: "Temps" },
  { icon: Camera, label: "RTSP" },
  { icon: HardDrive, label: "Offline" },
];

export function Hero3D() {
  const { t } = use3DI18n();

  return (
    <section id="top" className="hero-motion" style={{ backgroundImage: "var(--gradient-hero)" }}>
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-14 pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:pb-20 lg:pt-14">
        <div className="hero-copy animate-rise">
          <p className="hero-badge inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold text-primary-deep">
            <Sparkles className="size-3.5" aria-hidden="true" />
            {t("hero.badge")}
          </p>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.25rem]">
            {t("hero.title")}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t("hero.subtitle")}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#download"
              className="hero-cta inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-lift)] transition-transform hover:-translate-y-0.5"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              {t("hero.cta")}
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-surface"
            >
              {t("hero.secondary")}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="grid size-8 place-items-center rounded-full bg-primary-soft">
                <HardDrive className="size-4 text-primary" aria-hidden="true" />
              </span>
              100% Offline
            </span>
            <span className="flex items-center gap-2">
              <span className="grid size-8 place-items-center rounded-full bg-primary-soft">
                <Cpu className="size-4 text-primary" aria-hidden="true" />
              </span>
              5 Brands
            </span>
            <span className="flex items-center gap-2">
              <span className="grid size-8 place-items-center rounded-full bg-primary-soft">
                <Camera className="size-4 text-primary" aria-hidden="true" />
              </span>
              RTSP Live
            </span>
          </div>
        </div>

        <div className="hero-visual relative flex flex-col items-center gap-5">
          <div
            className="hero-glow absolute inset-x-10 top-12 -z-10 h-72 rounded-full opacity-30 blur-3xl"
            style={{ backgroundImage: "var(--gradient-primary)" }}
            aria-hidden="true"
          />
          <div className="relative w-full max-w-lg">
            <LazyImage
              eager
              src={heroShotUrl}
              alt={t("hero.imageAlt")}
              decoding="async"
              width={1200}
              height={750}
              className="relative z-10 w-full animate-float-soft rounded-2xl shadow-2xl"
            />
            <div className="absolute -right-4 top-4 z-20 flex flex-col gap-2 sm:-right-8">
              {explodedFeatures.map(({ icon: Icon, label }, index) => (
                <span
                  key={label}
                  className="hero-stage-badge"
                  style={{ animationDelay: `${650 + index * 150}ms` }}
                >
                  <Icon className="size-3.5 text-primary" aria-hidden="true" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

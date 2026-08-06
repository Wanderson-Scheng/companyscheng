import { ArrowLeftRight, ArrowRight, Landmark, PiggyBank, ShieldCheck, Sparkles, WifiOff } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import heroShot from "@/assets/app-dash.png.asset.json";
import { appStoreUrl } from "@/lib/links";
import { useI18n } from "@/lib/i18n";

const explodedFeatures: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: ArrowLeftRight, title: "f.income.t", description: "f.income.d" },
  { icon: Landmark, title: "f.accounts.t", description: "f.accounts.d" },
  { icon: PiggyBank, title: "f.goals.t", description: "f.goals.d" },
  { icon: ShieldCheck, title: "f.pin.t", description: "f.pin.d" },
];

export function Hero() {
  const { t } = useI18n();

  return (
    <section id="top" className="hero-motion" style={{ backgroundImage: "var(--gradient-hero)" }}>
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-14 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:pb-20 lg:pt-14">
        <div className="hero-copy animate-rise">
          <p className="hero-badge inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold text-primary-deep">
            <Sparkles className="size-3.5" aria-hidden="true" />
            {t("hero.badge")}
          </p>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            {t("hero.title")}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t("hero.subtitle")}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={appStoreUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="hero-cta inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-lift)] transition-transform hover:-translate-y-0.5"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              {t("hero.cta")}
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-surface"
            >
              {t("hero.secondary")}
            </a>
          </div>

        </div>

        <div className="hero-visual relative flex flex-col items-center gap-5">
          <div
            className="hero-glow absolute inset-x-10 top-12 -z-10 h-72 rounded-full opacity-30 blur-3xl"
            style={{ backgroundImage: "var(--gradient-primary)" }}
            aria-hidden="true"
          />
          <div className="hero-exploded-stage">
            <img
              src={heroShot.url}
              alt={t("hero.imageAlt")}
              loading="eager"
              decoding="async"
              width={819}
              height={1652}
              className="hero-phone relative z-10 animate-float drop-shadow-2xl"
            />
            <div className="hero-feature-column">
              <div className="hero-stage-badges">
                <span className="hero-stage-badge">
                  <WifiOff className="size-3.5 text-primary" aria-hidden="true" />
                  Offline
                </span>
                <span className="hero-stage-badge">
                  <ShieldCheck className="size-3.5 text-primary" aria-hidden="true" />
                  PIN
                </span>
              </div>
              <div className="hero-feature-grid" aria-label={t("features.title")}>
              {explodedFeatures.map(({ icon: Icon, title, description }, index) => (
                <div
                  className="hero-feature-card"
                  style={{ animationDelay: `${650 + index * 180}ms` }}
                  key={title}
                >
                  <Icon className="size-4 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-bold leading-tight text-foreground">{t(title)}</p>
                    <p className="mt-1 text-[10px] leading-snug text-muted-foreground">{t(description)}</p>
                  </div>
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { ArrowLeftRight, ArrowRight, Landmark, PiggyBank, ShieldCheck, Sparkles, WifiOff } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import heroShot from "@/assets/app-dash.png.asset.json";
import { appStoreUrl } from "@/lib/links";
import { useI18n } from "@/lib/i18n";

const explodedFeatures: { icon: LucideIcon; title: string; description: string; side: "left" | "right" }[] = [
  { icon: ArrowLeftRight, title: "f.income.t", description: "f.income.d", side: "left" },
  { icon: Landmark, title: "f.accounts.t", description: "f.accounts.d", side: "right" },
  { icon: PiggyBank, title: "f.goals.t", description: "f.goals.d", side: "left" },
  { icon: ShieldCheck, title: "f.pin.t", description: "f.pin.d", side: "right" },
];

export function Hero() {
  const { t } = useI18n();

  return (
    <section id="top" className="hero-motion" style={{ backgroundImage: "var(--gradient-hero)" }}>
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28 lg:pt-20">
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

          <dl className="mt-10 grid max-w-md grid-cols-2 gap-6 border-t border-border pt-6">
            <div className="hero-stat">
              <dt className="text-xs text-muted-foreground">{t("hero.stat1")}</dt>
              <dd className="mt-1 text-2xl font-extrabold tracking-tight">4.9</dd>
            </div>
            <div className="hero-stat">
              <dt className="text-xs text-muted-foreground">{t("hero.stat3")}</dt>
              <dd className="mt-1 text-2xl font-extrabold tracking-tight">{t("hero.stat3v")}</dd>
            </div>
          </dl>
        </div>

        <div className="hero-visual relative flex justify-center">
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
              className="hero-phone relative z-10 w-[min(100%,20rem)] animate-float drop-shadow-2xl"
            />
            <div className="hero-feature-grid" aria-label={t("features.title")}>
              {explodedFeatures.map(({ icon: Icon, title, description, side }, index) => (
                <div
                  className={`hero-feature-card hero-feature-${side}`}
                  style={{ animationDelay: `${700 + index * 130}ms` }}
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
          <div className="hero-float-card absolute -left-2 bottom-16 hidden items-center gap-2 rounded-2xl border border-border bg-card px-3.5 py-2.5 text-xs font-semibold shadow-[var(--shadow-soft)] sm:flex">
            <WifiOff className="size-4 text-primary" aria-hidden="true" />
            Offline
          </div>
          <div className="hero-float-card hero-float-card-delay absolute -right-1 top-16 hidden items-center gap-2 rounded-2xl border border-border bg-card px-3.5 py-2.5 text-xs font-semibold shadow-[var(--shadow-soft)] sm:flex">
            <ShieldCheck className="size-4 text-primary" aria-hidden="true" />
            PIN
          </div>
        </div>
      </div>
    </section>
  );
}
import { ArrowRight, ShieldCheck, Sparkles, WifiOff } from "lucide-react";
import heroPhone from "@/assets/hero-phone.png";
import { useI18n } from "@/lib/i18n";

export function Hero() {
  const { t } = useI18n();

  return (
    <section id="top" style={{ backgroundImage: "var(--gradient-hero)" }}>
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28 lg:pt-20">
        <div className="animate-rise">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold text-primary-deep">
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
              href="#download"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-lift)] transition-transform hover:-translate-y-0.5"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              {t("hero.cta")}
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-surface"
            >
              {t("hero.secondary")}
            </a>
          </div>

          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-border pt-6">
            <div>
              <dt className="text-xs text-muted-foreground">{t("hero.stat1")}</dt>
              <dd className="mt-1 text-2xl font-extrabold tracking-tight">4.9</dd>
            </div>
            <div>
              <dt className="text-xs text-muted-foreground">{t("hero.stat2")}</dt>
              <dd className="mt-1 text-2xl font-extrabold tracking-tight">120k+</dd>
            </div>
            <div>
              <dt className="text-xs text-muted-foreground">{t("hero.stat3")}</dt>
              <dd className="mt-1 text-2xl font-extrabold tracking-tight">{t("hero.stat3v")}</dd>
            </div>
          </dl>
        </div>

        <div className="relative flex justify-center">
          <div
            className="absolute inset-x-10 top-12 -z-10 h-72 rounded-full opacity-30 blur-3xl"
            style={{ backgroundImage: "var(--gradient-primary)" }}
            aria-hidden="true"
          />
          <img
            src={heroPhone}
            alt={t("hero.imageAlt")}
            width={912}
            height={1408}
            className="w-[min(100%,22rem)] animate-float drop-shadow-2xl"
          />
          <div className="absolute -left-2 bottom-16 hidden items-center gap-2 rounded-2xl border border-border bg-card px-3.5 py-2.5 text-xs font-semibold shadow-[var(--shadow-soft)] sm:flex">
            <WifiOff className="size-4 text-primary" aria-hidden="true" />
            Offline
          </div>
          <div className="absolute -right-1 top-16 hidden items-center gap-2 rounded-2xl border border-border bg-card px-3.5 py-2.5 text-xs font-semibold shadow-[var(--shadow-soft)] sm:flex">
            <ShieldCheck className="size-4 text-primary" aria-hidden="true" />
            PIN
          </div>
        </div>
      </div>
    </section>
  );
}
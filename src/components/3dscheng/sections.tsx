import {
  Activity,
  Apple,
  BarChart3,
  Calculator,
  Camera,
  Check,
  ClipboardList,
  Cog,
  DollarSign,
  FileText,
  HardDrive,
  Key,
  type LucideIcon,
  Monitor,
  Palette,
  Printer,
  Shield,
  Video,
  Wrench,
} from "lucide-react";
import { type CSSProperties, useEffect, useState } from "react";
import { Reveal } from "@/components/landing/reveal";
import { Typewriter } from "@/components/landing/typewriter";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { use3DI18n } from "./i18n";

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{subtitle}</p>
      ) : null}
    </div>
  );
}

const brandLogos = [
  { name: "Bambu Lab", file: "bambulab" },
  { name: "Prusa", file: "prusa" },
  { name: "OctoPrint", file: "octoprint" },
  { name: "Moonraker", file: "moonraker" },
  { name: "Creality", file: "creality" },
];

export function Brands() {
  const { t } = use3DI18n();
  return (
    <section className="border-b border-border bg-surface py-10 sm:py-12">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal>
          <p className="text-center text-sm font-semibold text-muted-foreground">
            {t("brands.title")}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {brandLogos.map(({ name, file }) => (
              <div
                key={name}
                className="flex items-center gap-2.5 opacity-70 transition-opacity hover:opacity-100"
              >
                <img
                  src={`/3dscheng/brands/${file}.png`}
                  alt={name}
                  width={32}
                  height={32}
                  loading="lazy"
                  className="size-8 object-contain"
                />
                <span className="text-sm font-bold text-foreground">{name}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const featureItems: { icon: LucideIcon; k: string }[] = [
  { icon: Activity, k: "dashboard" },
  { icon: Printer, k: "printers" },
  { icon: Camera, k: "cameras" },
  { icon: Palette, k: "filaments" },
  { icon: Calculator, k: "calculator" },
  { icon: Wrench, k: "parts" },
  { icon: FileText, k: "history" },
  { icon: ClipboardList, k: "maintenance" },
  { icon: Monitor, k: "queue" },
  { icon: BarChart3, k: "stats" },
  { icon: DollarSign, k: "financial" },
  { icon: Cog, k: "settings" },
  { icon: Key, k: "licensing" },
];

export function Features3D() {
  const { t } = use3DI18n();
  return (
    <section id="features" className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow={t("features.eyebrow")}
          title={t("features.title")}
          subtitle={t("features.subtitle")}
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featureItems.map(({ icon: Icon, k }, index) => (
            <Reveal
              key={k}
              className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[var(--shadow-lift)]"
              style={{ "--reveal-delay": `${Math.min(index * 60, 420)}ms` } as CSSProperties}
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary-deep transition-all duration-300 group-hover:rotate-3 group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon
                  className="size-5 transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                />
              </span>
              <h3 className="mt-4 text-base font-bold tracking-tight">
                <Typewriter text={t(`feat.${k}.t`)} />
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t(`feat.${k}.d`)}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const screenShots: { k: string; file: string }[] = [
  { k: "dashboard-light", file: "dashboard-light.webp" },
  { k: "dashboard-dark", file: "dashboard-dark.webp" },
  { k: "printers", file: "printers.webp" },
  { k: "cameras", file: "cameras.webp" },
  { k: "filaments", file: "filaments.webp" },
  { k: "calculator", file: "calculator.webp" },
  { k: "parts", file: "parts.webp" },
  { k: "financial", file: "financial.webp" },
  { k: "settings", file: "settings.webp" },
];

export function Screenshots3D() {
  const { t } = use3DI18n();
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!api) return;
    const updateActiveIndex = () => setActiveIndex(api.selectedScrollSnap());
    updateActiveIndex();
    api.on("select", updateActiveIndex);
    return () => {
      api.off("select", updateActiveIndex);
    };
  }, [api]);

  useEffect(() => {
    if (!api || isPaused) return;
    const interval = window.setInterval(() => api.scrollNext(), 4500);
    return () => window.clearInterval(interval);
  }, [api, isPaused]);

  return (
    <section id="screenshots" className="bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeader
            eyebrow={t("screenshots.eyebrow")}
            title={t("screenshots.title")}
            subtitle={t("screenshots.subtitle")}
          />
        </Reveal>
        <Reveal
          className="relative mt-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true, duration: 28 }}
            aria-label={t("screenshots.title")}
          >
            <CarouselContent className="-ml-5">
              {screenShots.map(({ k, file }) => (
                <CarouselItem key={k} className="pl-5 sm:basis-1/2 lg:basis-1/2">
                  <article className="group h-full text-center">
                    <img
                      src={`/3dscheng/${file}`}
                      alt={t(`ss.${k}.t`)}
                      loading="lazy"
                      decoding="async"
                      width={1200}
                      height={750}
                      className="mx-auto w-full rounded-xl shadow-xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-[1.01]"
                    />
                    <div className="mt-5 min-h-[4rem]">
                      <h3 className="text-sm font-bold tracking-tight">{t(`ss.${k}.t`)}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {t(`ss.${k}.d`)}
                      </p>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              className="-left-1 flex size-11 border-border bg-card text-foreground shadow-[var(--shadow-soft)] lg:-left-12"
              aria-label="Previous"
            />
            <CarouselNext
              className="-right-1 flex size-11 border-border bg-card text-foreground shadow-[var(--shadow-soft)] lg:-right-12"
              aria-label="Next"
            />
          </Carousel>

          <div
            className="mt-8 flex items-center justify-center gap-2"
            role="tablist"
            aria-label={t("screenshots.title")}
          >
            {screenShots.map(({ k }, index) => (
              <Button
                key={k}
                type="button"
                variant="ghost"
                size="icon"
                className={`size-2.5 rounded-full p-0 transition-all ${
                  index === activeIndex ? "scale-125 bg-primary" : "bg-border hover:bg-primary/50"
                }`}
                onClick={() => api?.scrollTo(index)}
                role="tab"
                aria-selected={index === activeIndex}
                aria-label={`Screenshot ${index + 1}`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const whyItems: { icon: LucideIcon; k: string }[] = [
  { icon: HardDrive, k: "offline" },
  { icon: Activity, k: "realtime" },
  { icon: Video, k: "cameras" },
  { icon: DollarSign, k: "financial" },
  { icon: Monitor, k: "multiplatform" },
  { icon: Shield, k: "security" },
];

export function Why3DScheng() {
  const { t } = use3DI18n();
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeader eyebrow={t("why.eyebrow")} title={t("why.title")} />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyItems.map(({ icon: Icon, k }, index) => (
            <Reveal
              key={k}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/25"
              style={{ "--reveal-delay": `${index * 80}ms` } as CSSProperties}
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-primary-soft text-primary-deep transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-base font-bold tracking-tight">{t(`why.${k}.t`)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t(`why.${k}.d`)}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const checkoutLinks: Record<string, string> = {
  monthly:
    "https://companyscheng.lemonsqueezy.com/checkout/buy/98eaa919-360a-4ad1-9f8c-3fd5a65365e3",
  annual:
    "https://companyscheng.lemonsqueezy.com/checkout/buy/18c58db2-3f6a-467a-879a-ff1e88ccaa1f",
  lifetime:
    "https://companyscheng.lemonsqueezy.com/checkout/buy/adc8c3fc-56d2-4e31-93e8-d96441336699",
};

const plans = [
  { k: "monthly", features: 3, highlight: false },
  { k: "annual", features: 3, highlight: true },
  { k: "lifetime", features: 3, highlight: false },
];

export function Pricing3D() {
  const { t } = use3DI18n();
  return (
    <section id="pricing" className="bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeader
            eyebrow={t("pricing.eyebrow")}
            title={t("pricing.title")}
            subtitle={t("pricing.subtitle")}
          />
        </Reveal>
        <Reveal className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map(({ k, features, highlight }, index) => (
            <div
              key={k}
              className={`relative flex flex-col rounded-2xl border p-7 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 ${
                highlight
                  ? "border-primary bg-card shadow-[var(--shadow-lift)]"
                  : "border-border bg-card"
              }`}
              style={{ "--reveal-delay": `${index * 80}ms` } as CSSProperties}
            >
              {t(`pricing.${k}.save`) !== `pricing.${k}.save` && (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-bold text-primary-foreground"
                  style={{ backgroundImage: "var(--gradient-primary)" }}
                >
                  {t(`pricing.${k}.save`)}
                </span>
              )}
              <h3 className="text-lg font-bold">{t(`pricing.${k}.name`)}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-extrabold tracking-tight">
                  {t(`pricing.${k}.price`)}
                </span>
                <span className="text-sm text-muted-foreground">{t(`pricing.${k}.period`)}</span>
              </div>
              <ul className="mt-6 flex-1 space-y-3">
                {Array.from({ length: features }, (_, i) => `pricing.${k}.f${i + 1}`).map(
                  (fKey) => (
                    <li
                      key={fKey}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="size-4 shrink-0 text-primary" aria-hidden="true" />
                      {t(fKey)}
                    </li>
                  ),
                )}
              </ul>
              <a
                href={checkoutLinks[k] ?? "#download"}
                target={checkoutLinks[k] ? "_blank" : undefined}
                rel={checkoutLinks[k] ? "noopener noreferrer" : undefined}
                className={`mt-8 block rounded-full py-3 text-center text-sm font-semibold transition-transform hover:-translate-y-0.5 ${
                  highlight
                    ? "text-primary-foreground shadow-[var(--shadow-lift)]"
                    : "border border-border bg-card text-foreground hover:bg-surface"
                }`}
                style={highlight ? { backgroundImage: "var(--gradient-primary)" } : undefined}
              >
                {t(`pricing.${k}.cta`)}
              </a>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export function Downloads3D() {
  const { t } = use3DI18n();
  return (
    <section id="download" className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-5">
        <Reveal>
          <SectionHeader
            eyebrow={t("download.eyebrow")}
            title={t("download.title")}
            subtitle={t("download.subtitle")}
          />
        </Reveal>
        <Reveal className="mt-10 flex flex-col items-center gap-6">
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="https://apps.apple.com/app/3d-scheng/id6742187990"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 rounded-2xl border border-border bg-card px-8 py-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[var(--shadow-lift)]"
            >
              <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary-deep transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Apple className="size-7" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {t("download.availableOn")}
                </p>
                <p className="mt-1 text-lg font-bold">Mac App Store</p>
              </div>
            </a>
            <a
              href="https://github.com/Wanderson-Scheng/3D-Scheng-releases/releases/latest/download/3D-Scheng-Setup.exe"
              className="group flex items-center gap-5 rounded-2xl border border-border bg-card px-8 py-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[var(--shadow-lift)]"
            >
              <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary-deep transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Monitor className="size-7" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {t("download.directDownload")}
                </p>
                <p className="mt-1 text-lg font-bold">Windows</p>
              </div>
            </a>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            {t("download.version")}: <span className="font-semibold text-foreground">1.0.0</span>
            <span className="mx-2">·</span>
            macOS 11+ / Windows 10+
          </p>
          <p className="text-center text-xs text-muted-foreground">{t("download.trialInfo")}</p>
        </Reveal>
      </div>
    </section>
  );
}

const faqKeys = ["1", "2", "3", "4", "5", "6"];

export function Faq3D() {
  const { t } = use3DI18n();
  return (
    <section id="faq" className="bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-5">
        <Reveal>
          <SectionHeader eyebrow={t("faq.eyebrow")} title={t("faq.title")} />
        </Reveal>
        <Reveal className="mt-12 space-y-3">
          {faqKeys.map((k, index) => (
            <details
              key={k}
              className="group rounded-2xl border border-border bg-card px-5 py-4 shadow-[var(--shadow-soft)] transition-all duration-300 hover:border-primary/25 open:border-primary/30"
              style={{ "--reveal-delay": `${index * 60}ms` } as CSSProperties}
            >
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
                {t(`faq.q${k}`)}
                <span
                  className="grid size-9 shrink-0 place-items-center rounded-full bg-primary-soft text-primary-deep transition-transform group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(`faq.a${k}`)}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export function FinalCta3D() {
  const { t } = use3DI18n();
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal
          className="relative overflow-hidden rounded-[2rem] px-6 py-16 text-center sm:px-12"
          style={{ backgroundImage: "var(--gradient-primary)" }}
        >
          <div className="cta-shimmer" aria-hidden="true" />
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight text-primary-foreground sm:text-4xl">
            {t("cta.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/85 sm:text-base">
            {t("cta.subtitle")}
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="#download"
              className="inline-flex items-center gap-3 rounded-2xl bg-card px-8 py-4 text-base font-bold text-foreground shadow-[var(--shadow-lift)] transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02]"
            >
              {t("cta.button")}
            </a>
          </div>
          <p className="mt-6 text-xs font-medium text-primary-foreground/70">{t("cta.trust")}</p>
        </Reveal>
      </div>
    </section>
  );
}

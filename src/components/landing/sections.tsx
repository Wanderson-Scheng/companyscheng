import { useEffect, useState, type CSSProperties } from "react";
import { Reveal } from "@/components/landing/reveal";
import { appStoreUrl } from "@/lib/links";
import {
  ArrowLeftRight,
  BadgeCheck,
  Ban,
  CreditCard,
  HardDrive,
  Landmark,
  Lock,
  Minus,
  Moon,
  PiggyBank,
  Quote,
  Repeat,
  Star,
  WifiOff,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import shotDash from "@/assets/app-dash.png.asset.json";
import shotCurrency from "@/assets/app-overview.png.asset.json";
import shotAccounts from "@/assets/app-accounts.png.asset.json";
import shotCard from "@/assets/app-card.png.asset.json";
import shotInstall from "@/assets/app-install.png.asset.json";
import shotProfile from "@/assets/app-profile.png.asset.json";
import shotAnnual from "@/assets/app-annual.png.asset.json";
import shotGoal from "@/assets/app-goal.png.asset.json";
import shotMenu from "@/assets/app-menu.png.asset.json";
import shotPin from "@/assets/app-pin.png.asset.json";
import { useI18n } from "@/lib/i18n";

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

const featureItems: { icon: LucideIcon; k: string }[] = [
  { icon: ArrowLeftRight, k: "income" },
  { icon: Repeat, k: "install" },
  { icon: Landmark, k: "accounts" },
  { icon: CreditCard, k: "cards" },
  { icon: PiggyBank, k: "goals" },
  { icon: WifiOff, k: "offline" },
  { icon: Ban, k: "noads" },
  { icon: BadgeCheck, k: "nosub" },
  { icon: HardDrive, k: "local" },
  { icon: Lock, k: "pin" },
  { icon: Moon, k: "dark" },
];

export function Features() {
  const { t } = useI18n();
  return (
    <section id="features" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow={t("features.eyebrow")}
          title={t("features.title")}
          subtitle={t("features.subtitle")}
        />
        <Reveal as="ul" className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featureItems.map(({ icon: Icon, k }, index) => (
            <li
              key={k}
              className="group rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
              style={{ "--reveal-delay": `${Math.min(index * 55, 440)}ms` } as CSSProperties}
            >
              <span className="grid size-11 place-items-center rounded-2xl bg-primary-soft text-primary-deep transition-all duration-300 group-hover:rotate-3 group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="size-5 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-base font-bold tracking-tight">{t(`f.${k}.t`)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(`f.${k}.d`)}</p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

const comparisonRows = ["r1", "r2", "r3", "r4", "r5", "r6"];

export function WhyGuiaFin() {
  const { t } = useI18n();
  return (
    <section id="why" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal>
          <SectionHeader eyebrow={t("why.eyebrow")} title={t("why.title")} subtitle={t("why.subtitle")} />
        </Reveal>
        <Reveal className="mt-14 overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)]">
          <div className="comparison-sheen" aria-hidden="true" />
          <div className="grid grid-cols-[1.1fr_1fr_1fr] items-center gap-2 border-b border-border px-4 py-4 sm:px-6">
            <span className="sr-only">—</span>
            <span
              className="rounded-xl px-3 py-2 text-center text-sm font-bold text-primary-foreground"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              {t("why.guiafin")}
            </span>
            <span className="px-3 py-2 text-center text-sm font-semibold text-muted-foreground">
              {t("why.others")}
            </span>
          </div>
          <dl>
            {comparisonRows.map((r, i) => (
              <div
                key={r}
                className={`grid grid-cols-[1.1fr_1fr_1fr] items-center gap-2 px-4 py-4 sm:px-6 ${
                  i % 2 ? "bg-surface/60" : ""
                }`}
              >
                <dt className="text-sm font-semibold">{t(`why.${r}`)}</dt>
                <dd className="flex items-center justify-center gap-2 text-center text-sm font-semibold text-foreground">
                  <BadgeCheck className="size-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>{t(`why.${r}a`)}</span>
                </dd>
                <dd className="flex items-center justify-center gap-2 text-center text-sm text-muted-foreground">
                  <Minus className="size-4 shrink-0" aria-hidden="true" />
                  <span>{t(`why.${r}b`)}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

const screenShots: { k: string; url: string }[] = [
  { k: "pin", url: shotPin.url },
  { k: "currency", url: shotCurrency.url },
  { k: "accounts", url: shotAccounts.url },
  { k: "card", url: shotCard.url },
  { k: "install", url: shotInstall.url },
  { k: "goal", url: shotGoal.url },
  { k: "menu", url: shotMenu.url },
  { k: "profile", url: shotProfile.url },
  { k: "annual", url: shotAnnual.url },
];

export function Screens() {
  const { t } = useI18n();
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!api) {
      return;
    }

    const updateActiveIndex = () => setActiveIndex(api.selectedScrollSnap());
    updateActiveIndex();
    api.on("select", updateActiveIndex);

    return () => {
      api.off("select", updateActiveIndex);
    };
  }, [api]);

  useEffect(() => {
    if (!api || isPaused) {
      return;
    }

    const interval = window.setInterval(() => api.scrollNext(), 4500);
    return () => window.clearInterval(interval);
  }, [api, isPaused]);

  return (
    <section id="screens" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeader
            eyebrow={t("screens.eyebrow")}
            title={t("screens.title")}
            subtitle={t("screens.subtitle")}
          />
        </Reveal>
        <Reveal
          className="relative mt-14"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true, duration: 28 }}
            aria-label={t("screens.title")}
          >
            <CarouselContent className="-ml-5">
              {screenShots.map(({ k, url }) => (
                <CarouselItem key={k} className="pl-5 sm:basis-1/2 lg:basis-1/3">
                  <article className="group h-full text-center">
                    <img
                      src={url}
                      alt={t(`s.${k}.t`)}
                      loading="lazy"
                      decoding="async"
                       width={819}
                       height={1652}
                       className="screen-shot mx-auto w-[min(100%,15rem)] drop-shadow-xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02]"
                     />
                     <h3 className="mt-5 text-sm font-bold tracking-tight">{t(`s.${k}.t`)}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {t(`s.${k}.d`)}
                    </p>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              className="-left-2 hidden border-border bg-card text-foreground shadow-[var(--shadow-soft)] sm:flex lg:-left-12"
              aria-label={t("nav.screens")}
            />
            <CarouselNext
              className="-right-2 hidden border-border bg-card text-foreground shadow-[var(--shadow-soft)] sm:flex lg:-right-12"
              aria-label={t("nav.screens")}
            />
          </Carousel>

          <div className="mt-8 flex items-center justify-center gap-2" role="tablist" aria-label={t("screens.title")}>
            {screenShots.map(({ k }, index) => (
              <Button
                key={k}
                type="button"
                variant="ghost"
                size="icon"
                 className={`size-2 rounded-full p-0 transition-all ${
                   index === activeIndex ? "scale-125 bg-primary" : "bg-border hover:bg-primary/50"
                 }`}
                onClick={() => api?.scrollTo(index)}
                role="tab"
                aria-selected={index === activeIndex}
                aria-label={`${t("nav.screens")} ${index + 1}`}
              />
            ))}
           </div>
        </Reveal>
       </div>
    </section>
  );
}

const testimonials = ["t1", "t2", "t3"];

const appStoreReviews = [
  {
    title: "Super indico",
    body: "Ótimo para se organizar financeiramente",
    author: "Cabral—",
    date: "01.08.2026",
    version: "1.2.5 · Portugal",
  },
  {
    title: "Top",
    body: "Ótimo para manter as contas em ordem !!",
    author: "lucidioo",
    date: "21.07.2026",
    version: "1.2 · Portugal",
  },
];

export function AppStoreReviews() {
  const { t } = useI18n();
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeader eyebrow={t("reviews.eyebrow")} title={t("reviews.title")} />
        </Reveal>
        <Reveal className="mt-12 grid gap-5 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          <div className="flex flex-col items-center justify-center rounded-3xl border border-border bg-card p-8 text-center shadow-[var(--shadow-soft)]">
            <p className="text-6xl font-black tracking-tight text-foreground">5,0</p>
            <p className="mt-1 text-sm text-muted-foreground">{t("reviews.outOf")}</p>
            <span className="mt-4 flex gap-1" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((s) => (
                <Star key={s} className="size-5 fill-primary text-primary" />
              ))}
            </span>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {t("reviews.count")}
            </p>
          </div>
          <ul className="grid gap-5 sm:grid-cols-2">
            {appStoreReviews.map((r, index) => (
              <li
                key={r.title}
                className="flex flex-col rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/25"
                style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
              >
                <span className="flex gap-0.5" aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star key={s} className="size-4 fill-primary text-primary" />
                  ))}
                </span>
                <p className="mt-4 text-base font-bold">{r.title}</p>
                <blockquote className="mt-2 flex-1 text-sm leading-relaxed text-foreground">
                  {r.body}
                </blockquote>
                <p className="mt-5 border-t border-border pt-4 text-xs text-muted-foreground">
                  {r.date} · {r.author} · {r.version}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="mt-8 text-center">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
          >
            {t("reviews.link")}
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function Testimonials() {
  const { t } = useI18n();
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeader eyebrow={t("testimonials.eyebrow")} title={t("testimonials.title")} />
        </Reveal>
        <Reveal as="ul" className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((k, index) => (
            <li
              key={k}
              className="group flex flex-col rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/25"
              style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
            >
              <Quote className="size-6 text-primary" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                {t(`${k}.q`)}
              </blockquote>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary-soft text-sm font-bold text-primary-deep">
                  {t(`${k}.n`).charAt(0)}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold">{t(`${k}.n`)}</p>
                  <p className="truncate text-xs text-muted-foreground">{t(`${k}.r`)}</p>
                </div>
                <span className="ml-auto flex shrink-0 gap-0.5" aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star key={s} className="size-3.5 fill-primary text-primary" />
                  ))}
                </span>
              </div>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

const faqKeys = ["1", "2", "3", "4", "5", "6"];

export function Faq() {
  const { t } = useI18n();
  return (
    <section id="faq" className="bg-background py-20 sm:py-28">
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
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
                {t(`q${k}`)}
                <span
                  className="grid size-7 shrink-0 place-items-center rounded-full bg-primary-soft text-primary-deep transition-transform group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(`a${k}`)}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export function FinalCta() {
  const { t } = useI18n();
  return (
    <section id="download" className="bg-background pb-20 sm:pb-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="relative overflow-hidden rounded-[2rem] px-6 py-16 text-center sm:px-12" style={{ backgroundImage: "var(--gradient-primary)" }}>
          <div className="cta-shimmer" aria-hidden="true" />
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight text-primary-foreground sm:text-4xl">
            {t("cta.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/85 sm:text-base">
            {t("cta.subtitle")}
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href={appStoreUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-3 rounded-2xl bg-card px-6 py-3.5 text-left transition-transform hover:-translate-y-0.5"
            >
              <svg viewBox="0 0 24 24" className="size-7 fill-foreground" aria-hidden="true">
                <path d="M16.4 12.7c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.9-3.5.9-.7 0-1.8-.9-3-.8-1.5 0-2.9.9-3.7 2.3-1.6 2.7-.4 6.8 1.1 9 .8 1.1 1.7 2.3 2.9 2.3 1.2 0 1.6-.7 3-.7s1.8.7 3 .7c1.3 0 2-1.1 2.8-2.2.9-1.3 1.2-2.5 1.3-2.6-.1 0-2.5-1-2.5-3.6zM14.2 5.5c.6-.8 1-1.9.9-3-.9 0-2 .6-2.7 1.4-.6.7-1.1 1.8-.9 2.9 1 .1 2-.5 2.7-1.3z" />
              </svg>
              <span>
                <span className="block text-[0.65rem] font-medium text-muted-foreground">
                  {t("cta.appstoreSmall")}
                </span>
                <span className="block text-sm font-bold text-foreground">{t("cta.appstore")}</span>
              </span>
            </a>
            <span className="inline-flex cursor-default items-center gap-3 rounded-2xl border border-primary-foreground/40 px-6 py-3.5 text-left">
              <svg viewBox="0 0 24 24" className="size-7 fill-primary-foreground" aria-hidden="true">
                <path d="M3.6 2.3c-.3.3-.5.8-.5 1.4v16.6c0 .6.2 1.1.5 1.4l.1.1 9.3-9.3v-.2L3.7 2.2l-.1.1zm12.5 6.2L6.2 2.9l7.3 7.3 2.6-1.7zM6.2 21.1l9.9-5.6-2.6-2.6-7.3 8.2zM19.9 10.7l-2.4-1.4-2.8 2.7 2.8 2.8 2.4-1.4c.8-.5.8-2.2 0-2.7z" />
              </svg>
              <span>
                <span className="block text-[0.65rem] font-medium text-primary-foreground/75">
                  {t("cta.playSmall")}
                </span>
                <span className="block text-sm font-bold text-primary-foreground">{t("cta.play")}</span>
              </span>
            </span>
           </div>
        </Reveal>
       </div>
     </section>
   );
 }
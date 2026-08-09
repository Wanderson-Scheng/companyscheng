import { Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import {
  ArrowUpRight,
  Clock,
  Compass,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Moon,
  Phone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Sun,
} from "lucide-react";
import { type FormEvent, useState } from "react";
import { submitContact } from "@/lib/contact.functions";

const logoGoldUrl = "/logos/logo-gold.png";
const logoNavyUrl = "/logos/logo-navy.png";

import { Reveal } from "@/components/landing/reveal";
import { useScheng } from "@/components/scheng/context";
import { ventures } from "@/components/scheng/ventures";
import { LazyImage } from "@/components/ui/lazy-image";

const email = "Info@companyscheng.com";
const companyPhone = "+351 963614366";
const founderEmail = "Wanderson@companyscheng.com";
const phone = "+351 914293350";
const whatsappUrl = "https://wa.me/351914293350";
const instagramUrl = "https://www.instagram.com/guiafin_?igsh=bzV0NDAybnJmMmRs";
const linkedinUrl = "https://www.linkedin.com/in/wanderson-scheng-769b72379";

const tabs = [
  { to: "/scheng", key: "nav.home" },
  { to: "/scheng/grupo", key: "nav.group" },
  { to: "/scheng/empresas", key: "nav.companies" },
  { to: "/scheng/valores", key: "nav.values" },
  { to: "/scheng/contacto", key: "nav.contact" },
] as const;

function useBrandLogo() {
  const { theme } = useScheng();
  return theme === "dark" ? logoGoldUrl : logoNavyUrl;
}

function ThemeLangControls({ compact = false }: { compact?: boolean }) {
  const { themeMode, setThemeMode, lang, setLang, t } = useScheng();
  const cycleTheme = () => {
    const next = themeMode === "dark" ? "light" : themeMode === "light" ? "auto" : "dark";
    setThemeMode(next);
  };
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={cycleTheme}
        aria-label={t("nav.theme")}
        title={themeMode === "auto" ? "Auto (horário)" : themeMode === "dark" ? "Escuro" : "Claro"}
        className="grid size-9 place-items-center rounded-full border border-[var(--scheng-line)] text-[var(--scheng-muted)] transition-all duration-300 hover:scale-105 hover:text-[var(--scheng-gold)]"
      >
        {themeMode === "dark" ? (
          <Moon className="size-4" />
        ) : themeMode === "light" ? (
          <Sun className="size-4" />
        ) : (
          <Clock className="size-4" />
        )}
      </button>
      <div
        role="group"
        aria-label={t("nav.lang")}
        className="flex items-center rounded-full border border-[var(--scheng-line)] p-0.5"
      >
        {(["pt", "en"] as const).map((l) => (
          <button
            key={l}
            type="button"
            onClick={() => setLang(l)}
            aria-pressed={lang === l}
            className={`rounded-full px-2.5 py-1 text-[0.7rem] font-bold uppercase tracking-[0.1em] transition-colors ${
              lang === l
                ? "bg-[var(--scheng-gold)]/15 text-[var(--scheng-gold)]"
                : "text-[var(--scheng-muted)] hover:text-[var(--scheng-fg)]"
            }`}
          >
            {l}
          </button>
        ))}
      </div>
      {!compact && null}
    </div>
  );
}

export function SchengNav() {
  const { t, theme } = useScheng();
  const brand = useBrandLogo();
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--scheng-line)] bg-[var(--scheng-ink-deep)]/85 backdrop-blur-xl">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-5 md:flex md:justify-between">
        <Link to="/scheng" className="flex min-w-0 items-center gap-3">
          <LazyImage
            eager
            src={brand}
            alt="Scheng Holdings"
            className={`h-11 w-auto shrink-0 md:h-14 ${theme === "dark" ? "mix-blend-lighten" : ""}`}
            width={160}
            height={40}
          />
          <span className="sr-only">Scheng Holdings</span>
        </Link>
        <nav className="hidden items-center gap-1 text-sm text-[var(--scheng-muted)] lg:flex">
          {tabs.map((tab) => (
            <Link
              key={tab.to}
              to={tab.to}
              activeOptions={{ exact: tab.to === "/scheng" }}
              className="rounded-full px-3.5 py-2 transition-colors hover:text-[var(--scheng-gold)] data-[status=active]:bg-[var(--scheng-gold)]/12 data-[status=active]:font-semibold data-[status=active]:text-[var(--scheng-gold)]"
            >
              {t(tab.key)}
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <ThemeLangControls />
          <a
            href={`mailto:${email}`}
            className="hidden rounded-full border border-[var(--scheng-gold)]/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--scheng-gold)] transition-colors hover:bg-[var(--scheng-gold)]/10 sm:inline-block"
          >
            {t("nav.cta")}
          </a>
        </div>
      </div>
      <div className="border-t border-[var(--scheng-line)] lg:hidden">
        <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-3 py-2 text-sm [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {tabs.map((tab) => (
            <Link
              key={tab.to}
              to={tab.to}
              activeOptions={{ exact: tab.to === "/scheng" }}
              className="shrink-0 rounded-full px-3.5 py-1.5 text-[var(--scheng-muted)] transition-colors data-[status=active]:bg-[var(--scheng-gold)]/12 data-[status=active]:font-semibold data-[status=active]:text-[var(--scheng-gold)]"
            >
              {t(tab.key)}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

export function SchengHero() {
  const { t, theme } = useScheng();
  const brand = useBrandLogo();
  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-16 md:pb-24 md:pt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-18rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[var(--scheng-gold)]/12 blur-3xl scheng-float"
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <LazyImage
            eager
            src={brand}
            alt="Logótipo Scheng Holdings"
            className={`mx-auto h-40 w-auto sm:h-52 md:h-64 ${theme === "dark" ? "mix-blend-lighten" : ""}`}
            width={520}
            height={340}
          />
        </Reveal>
        <Reveal delay={200}>
          <h1 className="mt-6 text-[2rem] font-extrabold leading-[1.1] tracking-tight text-[var(--scheng-fg)] sm:text-4xl md:text-6xl">
            {t("hero.title")}
          </h1>
        </Reveal>
        <Reveal delay={280}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--scheng-muted)] md:text-lg">
            {t("hero.sub")}
          </p>
        </Reveal>
        <Reveal delay={360}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/scheng/empresas"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--scheng-gold-deep)] via-[var(--scheng-gold)] to-[var(--scheng-gold-deep)] px-7 py-3.5 text-sm font-bold text-[var(--scheng-ink-deep)] shadow-[0_18px_45px_-18px_var(--scheng-gold)] transition-transform duration-300 hover:-translate-y-0.5 scheng-sheen"
            >
              {t("hero.cta1")}
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              to="/scheng/contacto"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--scheng-line)] px-7 py-3.5 text-sm font-semibold text-[var(--scheng-fg)] transition-colors hover:border-[var(--scheng-gold)]/50"
            >
              {t("hero.cta2")}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const highlights = [
  { icon: Rocket, to: "/scheng/empresas", k: "h1" },
  { icon: Compass, to: "/scheng/grupo", k: "h2" },
  { icon: ShieldCheck, to: "/scheng/valores", k: "h3" },
  { icon: Mail, to: "/scheng/contacto", k: "h4" },
] as const;

function CompanyMarks() {
  return (
    <span className="flex items-center gap-2" aria-label="Scheng Holdings — quatro empresas">
      {ventures.map((venture) => {
        const logo = venture.logos?.[0];

        return logo ? (
          <span
            key={venture.slug}
            className={`grid size-10 shrink-0 place-items-center overflow-hidden rounded-xl p-1.5 ring-1 transition-transform duration-300 group-hover:-translate-y-0.5 ${
              logo.chip === "light"
                ? "bg-white ring-black/5"
                : logo.chip === "dark"
                  ? "bg-[#0b1220] ring-white/10"
                  : "bg-[var(--scheng-surface)] ring-[var(--scheng-line)]"
            }`}
          >
            <LazyImage
              src={logo.src}
              alt={logo.label}
              className={`size-full object-contain ${logo.zoom ? "scale-[1.45]" : ""}`}
              width={32}
              height={32}
            />
          </span>
        ) : (
          <span
            key={venture.slug}
            className="grid size-10 shrink-0 place-items-center rounded-xl bg-[var(--scheng-gold)]/12 text-[var(--scheng-gold)] transition-transform duration-300 group-hover:-translate-y-0.5"
          >
            <venture.icon className="size-5" aria-hidden="true" />
          </span>
        );
      })}
    </span>
  );
}

export function SchengHighlights() {
  const { t } = useScheng();
  return (
    <section className="border-t border-[var(--scheng-line)] bg-[var(--scheng-surface)] px-5 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-[var(--scheng-gold)]">
            {t("home.eyebrow")}
          </p>
          <h2 className="mt-4 max-w-2xl text-2xl font-bold tracking-tight text-[var(--scheng-fg)] sm:text-3xl md:text-4xl">
            {t("home.title")}
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {highlights.map((h, i) => (
            <Reveal key={h.k} delay={100 * i}>
              <Link
                to={h.to}
                className="group flex h-full flex-col rounded-3xl border border-[var(--scheng-line)] bg-[var(--scheng-ink)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--scheng-gold)]/45 hover:shadow-[0_30px_60px_-40px_var(--scheng-gold)] sm:p-7"
              >
                {h.k === "h1" ? (
                  <CompanyMarks />
                ) : (
                  <span className="grid size-11 place-items-center rounded-xl bg-[var(--scheng-gold)]/12 text-[var(--scheng-gold)]">
                    <h.icon className="size-5" />
                  </span>
                )}
                <h3 className="mt-5 text-lg font-bold text-[var(--scheng-fg)]">{t(`${h.k}.t`)}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--scheng-muted)]">
                  {t(`${h.k}.d`)}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--scheng-gold)]">
                  {t("home.more")}
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SchengFounder() {
  const { t } = useScheng();
  return (
    <section id="fundador" className="px-5 py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[minmax(0,1fr)_1.3fr] md:items-start">
        <Reveal>
          <div className="rounded-3xl border border-[var(--scheng-line)] bg-[var(--scheng-surface)] p-7">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-[var(--scheng-gold)]">
              {t("founder.eyebrow")}
            </p>
            <h3 className="mt-4 text-xl font-bold text-[var(--scheng-fg)]">Wanderson Scheng</h3>
            <p className="mt-1 text-sm text-[var(--scheng-muted)]">{t("founder.role")}</p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid size-10 place-items-center rounded-full border border-[var(--scheng-line)] text-[var(--scheng-muted)] transition-colors hover:text-[var(--scheng-gold)]"
              >
                <Linkedin className="size-4" />
              </a>
              <a
                href={`mailto:${founderEmail}`}
                aria-label={founderEmail}
                className="grid size-10 place-items-center rounded-full border border-[var(--scheng-line)] text-[var(--scheng-muted)] transition-colors hover:text-[var(--scheng-gold)]"
              >
                <Mail className="size-4" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`WhatsApp: ${phone}`}
                className="grid size-10 place-items-center rounded-full border border-[var(--scheng-line)] text-[var(--scheng-muted)] transition-colors hover:text-[var(--scheng-gold)]"
              >
                <MessageCircle className="size-4" />
              </a>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="text-2xl font-bold tracking-tight text-[var(--scheng-fg)] sm:text-3xl">
            {t("founder.title")}
          </h2>
          <p className="mt-4 text-[var(--scheng-muted)]">{t("founder.p1")}</p>
          <p className="mt-4 text-[var(--scheng-muted)]">{t("founder.p2")}</p>
          <blockquote className="mt-6 border-l-2 border-[var(--scheng-gold)] pl-5 text-lg italic text-[var(--scheng-fg)]">
            {t("founder.quote")}
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}

const pillars = [
  { icon: Compass, k: "p1" },
  { icon: ShieldCheck, k: "p2" },
  { icon: Sparkles, k: "p3" },
];

export function SchengAbout() {
  const { t } = useScheng();
  return (
    <section
      id="grupo"
      className="border-y border-[var(--scheng-line)] bg-[var(--scheng-surface)] px-5 py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-[var(--scheng-gold)]">
            {t("about.eyebrow")}
          </p>
          <h1 className="mt-4 max-w-2xl text-2xl font-bold tracking-tight text-[var(--scheng-fg)] sm:text-3xl md:text-4xl">
            {t("about.title")}
          </h1>
          <p className="mt-4 max-w-2xl text-[var(--scheng-muted)]">{t("about.text")}</p>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:mt-12 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.k} delay={120 * i}>
              <div className="group h-full rounded-2xl border border-[var(--scheng-line)] bg-[var(--scheng-surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--scheng-gold)]/40 hover:shadow-[0_24px_50px_-30px_var(--scheng-gold)]">
                <p.icon className="size-6 text-[var(--scheng-gold)] transition-transform duration-300 group-hover:scale-110" />
                <h3 className="mt-4 text-lg font-semibold text-[var(--scheng-fg)]">
                  {t(`${p.k}.t`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--scheng-muted)]">
                  {t(`${p.k}.d`)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SchengVentures() {
  const { t } = useScheng();
  return (
    <section id="empresas" className="px-5 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-[var(--scheng-gold)]">
            {t("vent.eyebrow")}
          </p>
          <h1 className="mt-4 text-2xl font-bold tracking-tight text-[var(--scheng-fg)] sm:text-3xl md:text-4xl">
            {t("vent.title")}
          </h1>
        </Reveal>
        <div className="mt-10 grid gap-5 md:mt-12 md:grid-cols-2">
          {ventures.map((v, i) => (
            <Reveal key={v.name} delay={100 * i}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--scheng-line)] bg-[var(--scheng-surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--scheng-gold)]/45 hover:shadow-[0_30px_60px_-40px_var(--scheng-gold)] sm:p-7">
                <div className="flex items-start justify-between gap-3">
                  {v.logos ? (
                    <span className="flex items-center gap-2">
                      {v.logos.map((l) => (
                        <span
                          key={l.label}
                          className={`grid size-12 shrink-0 place-items-center overflow-hidden rounded-xl p-1.5 transition-transform duration-500 group-hover:-translate-y-0.5 ${
                            l.chip === "light"
                              ? "bg-white ring-1 ring-black/5"
                              : l.chip === "dark"
                                ? "bg-[#0b1220] ring-1 ring-white/10"
                                : "bg-[var(--scheng-surface)]"
                          }`}
                        >
                          <LazyImage
                            src={l.src}
                            alt={l.label}
                            className={`block size-full object-contain ${l.zoom ? "scale-[1.65]" : ""}`}
                            width={40}
                            height={40}
                          />
                        </span>
                      ))}
                    </span>
                  ) : (
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[var(--scheng-gold)]/12 text-[var(--scheng-gold)]">
                      <v.icon className="size-5" />
                    </span>
                  )}
                  <span className="shrink-0 rounded-full border border-[var(--scheng-line)] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[var(--scheng-muted)]">
                    {t(`${v.k}.tag`)}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-[var(--scheng-fg)] sm:text-xl">
                  {v.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--scheng-muted)]">
                  {t(`${v.k}.d`)}
                </p>
                <Link
                  to="/scheng/empresas/$slug"
                  params={{ slug: v.slug }}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--scheng-gold)]"
                >
                  {t("vent.more")}
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const values = ["val1", "val2", "val3", "val4"];

export function SchengValues() {
  const { t } = useScheng();
  return (
    <section
      id="valores"
      className="border-y border-[var(--scheng-line)] bg-[var(--scheng-surface)] px-5 py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h1 className="text-2xl font-bold tracking-tight text-[var(--scheng-fg)] sm:text-3xl md:text-4xl">
            {t("val.title")}
          </h1>
        </Reveal>
        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-[var(--scheng-line)] bg-[var(--scheng-line)] sm:grid-cols-2 lg:grid-cols-4">
          {values.map((k, i) => (
            <Reveal key={k} delay={90 * i}>
              <div className="h-full bg-[var(--scheng-ink)] p-6 transition-colors duration-300 hover:bg-[var(--scheng-ink-deep)]">
                <span className="text-xs font-bold tracking-[0.2em] text-[var(--scheng-gold)]">
                  {`0${i + 1}`}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-[var(--scheng-fg)]">
                  {t(`${k}.t`)}
                </h3>
                <p className="mt-2 text-sm text-[var(--scheng-muted)]">{t(`${k}.d`)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SchengContact() {
  const { t, lang } = useScheng();
  const send = useServerFn(submitContact);
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error" | "invalid">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      company: String(fd.get("company") ?? "").trim(),
      subject: String(fd.get("subject") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim(),
      website: String(fd.get("website") ?? ""),
      locale: lang,
    };
    if (
      payload.name.length < 2 ||
      !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(payload.email) ||
      payload.message.length < 10
    ) {
      setStatus("invalid");
      return;
    }
    setStatus("sending");
    try {
      const res = await send({ data: payload });
      if (res.ok) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const fieldClass =
    "w-full rounded-xl border border-[var(--scheng-line)] bg-[var(--scheng-bg)]/60 px-4 py-3 text-sm text-[var(--scheng-fg)] outline-none transition-colors placeholder:text-[var(--scheng-muted)] focus:border-[var(--scheng-gold)]";

  return (
    <section id="contacto" className="px-5 py-20 md:py-24">
      <Reveal>
        <div className="mx-auto max-w-3xl rounded-3xl border border-[var(--scheng-gold)]/25 bg-gradient-to-b from-[var(--scheng-gold)]/10 to-transparent p-7 sm:p-10">
          <div className="text-center">
            <h1 className="text-2xl font-bold tracking-tight text-[var(--scheng-fg)] sm:text-3xl md:text-4xl">
              {t("contact.title")}
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-[var(--scheng-muted)]">{t("contact.text")}</p>
          </div>

          <form onSubmit={onSubmit} className="mx-auto mt-8 grid max-w-xl gap-3 text-left">
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="grid gap-1.5">
                <span className="text-xs font-medium text-[var(--scheng-muted)]">
                  {t("form.name")}
                </span>
                <input
                  name="name"
                  required
                  maxLength={100}
                  autoComplete="name"
                  className={fieldClass}
                />
              </label>
              <label className="grid gap-1.5">
                <span className="text-xs font-medium text-[var(--scheng-muted)]">
                  {t("form.email")}
                </span>
                <input
                  name="email"
                  type="email"
                  required
                  maxLength={255}
                  autoComplete="email"
                  className={fieldClass}
                />
              </label>
              <label className="grid gap-1.5">
                <span className="text-xs font-medium text-[var(--scheng-muted)]">
                  {t("form.company")}
                </span>
                <input
                  name="company"
                  maxLength={120}
                  autoComplete="organization"
                  className={fieldClass}
                />
              </label>
              <label className="grid gap-1.5">
                <span className="text-xs font-medium text-[var(--scheng-muted)]">
                  {t("form.subject")}
                </span>
                <input name="subject" maxLength={150} className={fieldClass} />
              </label>
            </div>
            <label className="grid gap-1.5">
              <span className="text-xs font-medium text-[var(--scheng-muted)]">
                {t("form.message")}
              </span>
              <textarea
                name="message"
                required
                rows={5}
                maxLength={2000}
                className={`${fieldClass} resize-y`}
              />
            </label>
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--scheng-gold-deep)] to-[var(--scheng-gold)] px-7 py-3.5 text-sm font-bold text-[var(--scheng-ink-deep)] transition-transform duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? t("form.sending") : t("form.send")}
            </button>
            <p aria-live="polite" className="min-h-5 text-center text-sm">
              {status === "ok" && <span className="text-[var(--scheng-gold)]">{t("form.ok")}</span>}
              {status === "error" && <span className="text-red-400">{t("form.error")}</span>}
              {status === "invalid" && <span className="text-red-400">{t("form.invalid")}</span>}
            </p>
          </form>

          <div className="mt-5 border-t border-[var(--scheng-line)] pt-5">
            <p className="text-center text-xs text-[var(--scheng-muted)]">{t("form.or")}</p>
            <div className="mt-3 flex items-center justify-center gap-3">
              <a
                href={`mailto:${email}`}
                title={email}
                aria-label={email}
                className="grid size-10 place-items-center rounded-full border border-[var(--scheng-line)] text-[var(--scheng-muted)] transition-colors hover:border-[var(--scheng-gold)] hover:text-[var(--scheng-gold)]"
              >
                <Mail className="size-4" />
              </a>
              <a
                href={`tel:${companyPhone.replaceAll(" ", "")}`}
                title={companyPhone}
                aria-label={companyPhone}
                className="grid size-10 place-items-center rounded-full border border-[var(--scheng-line)] text-[var(--scheng-muted)] transition-colors hover:border-[var(--scheng-gold)] hover:text-[var(--scheng-gold)]"
              >
                <Phone className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function SchengFooter() {
  const { t, theme } = useScheng();
  const brand = useBrandLogo();
  return (
    <footer className="border-t border-[var(--scheng-line)] px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <LazyImage
          src={brand}
          alt="Scheng Holdings"
          className={`h-16 w-auto ${theme === "dark" ? "mix-blend-lighten" : ""}`}
          width={180}
          height={48}
        />
        <p className="text-center text-xs text-[var(--scheng-muted)]">
          © {new Date().getFullYear()} Scheng Holdings. {t("footer.rights")}
        </p>
        <div className="flex items-center gap-3">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="grid size-10 place-items-center rounded-full border border-[var(--scheng-line)] text-[var(--scheng-muted)] transition-colors hover:text-[var(--scheng-gold)]"
          >
            <Instagram className="size-4" />
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid size-10 place-items-center rounded-full border border-[var(--scheng-line)] text-[var(--scheng-muted)] transition-colors hover:text-[var(--scheng-gold)]"
          >
            <Linkedin className="size-4" />
          </a>
          <a
            href={`mailto:${email}`}
            aria-label="Email"
            className="grid size-10 place-items-center rounded-full border border-[var(--scheng-line)] text-[var(--scheng-muted)] transition-colors hover:text-[var(--scheng-gold)]"
          >
            <Mail className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

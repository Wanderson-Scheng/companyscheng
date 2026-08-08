import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Building2,
  Boxes,
  Compass,
  Mail,
  Moon,
  Rocket,
  ShieldCheck,
  Sparkles,
  Sun,
  Linkedin,
  Instagram,
} from "lucide-react";
import logoGold from "@/assets/scheng-logo-dark-transparent.png.asset.json";
import logoNavy from "@/assets/scheng-logo-light-transparent.png.asset.json";
import orbitalColor from "@/assets/orbital-mark.png.asset.json";
import logo3d from "@/assets/scheng3d-logo-transparent.png.asset.json";
import logoGuiafin from "@/assets/guiafin-icon-transparent.png.asset.json";
import { Reveal } from "@/components/landing/reveal";
import { useScheng } from "@/components/scheng/context";

const email = "Info@companyscheng.com";
const instagramUrl = "https://www.instagram.com/guiafin_?igsh=bzV0NDAybnJmMmRs";
const linkedinUrl = "https://www.linkedin.com/in/wanderson-scheng-769b72379";

function useBrandLogo() {
  const { theme } = useScheng();
  return theme === "dark" ? logoGold.url : logoNavy.url;
}

function ThemeLangControls({ compact = false }: { compact?: boolean }) {
  const { theme, setTheme, lang, setLang, t } = useScheng();
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label={t("nav.theme")}
        className="grid size-9 place-items-center rounded-full border border-[var(--scheng-line)] text-[var(--scheng-muted)] transition-all duration-300 hover:scale-105 hover:text-[var(--scheng-gold)]"
      >
        {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
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
          <img
            src={brand}
            alt="Scheng Holdings"
            className={`h-9 w-auto shrink-0 transition-opacity duration-500 md:h-10 ${theme === "dark" ? "mix-blend-lighten" : ""}`}
            width={160}
            height={40}
          />
          <span className="sr-only">Scheng Holdings</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-[var(--scheng-muted)] lg:flex">
          <a className="transition-colors hover:text-[var(--scheng-gold)]" href="#grupo">
            {t("nav.group")}
          </a>
          <a className="transition-colors hover:text-[var(--scheng-gold)]" href="#empresas">
            {t("nav.companies")}
          </a>
          <a className="transition-colors hover:text-[var(--scheng-gold)]" href="#valores">
            {t("nav.values")}
          </a>
          <a className="transition-colors hover:text-[var(--scheng-gold)]" href="#contacto">
            {t("nav.contact")}
          </a>
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
          <img
            src={brand}
            alt="Logótipo Scheng Holdings"
            className={`mx-auto h-32 w-auto sm:h-40 md:h-52 ${theme === "dark" ? "mix-blend-lighten" : ""}`}
            width={520}
            height={340}
          />
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-2 text-[0.7rem] font-semibold uppercase tracking-[0.42em] text-[var(--scheng-gold)]">
            {t("hero.eyebrow")}
          </p>
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
            <a
              href="#empresas"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--scheng-gold-deep)] via-[var(--scheng-gold)] to-[var(--scheng-gold-deep)] px-7 py-3.5 text-sm font-bold text-[var(--scheng-ink-deep)] shadow-[0_18px_45px_-18px_var(--scheng-gold)] transition-transform duration-300 hover:-translate-y-0.5 scheng-sheen"
            >
              {t("hero.cta1")}
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--scheng-line)] px-7 py-3.5 text-sm font-semibold text-[var(--scheng-fg)] transition-colors hover:border-[var(--scheng-gold)]/50"
            >
              {t("hero.cta2")}
            </a>
          </div>
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
          <h2 className="mt-4 max-w-2xl text-2xl font-bold tracking-tight text-[var(--scheng-fg)] sm:text-3xl md:text-4xl">
            {t("about.title")}
          </h2>
          <p className="mt-4 max-w-2xl text-[var(--scheng-muted)]">
            {t("about.text")}
          </p>
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

type Venture = {
  icon: typeof Rocket;
  k: string;
  name: string;
  logos?: { src: string; label: string }[];
  to?: "/";
};

const ventures: Venture[] = [
  {
    icon: Rocket,
    k: "v1",
    name: "Schengen Orbital System",
    logos: [{ src: orbitalColor.url, label: "Schengen Orbital System" }],
  },
  { icon: Building2, k: "v2", name: "Scheng Imports" },
  {
    icon: Boxes,
    k: "v3",
    name: "Scheng Technology",
    logos: [
      { src: logo3d.url, label: "3D Scheng" },
      { src: logoGuiafin.url, label: "GuiaFin" },
    ],
    to: "/",
  },
  { icon: Sparkles, k: "v4", name: "Schengen Atelier" },
];

export function SchengVentures() {
  const { t } = useScheng();
  return (
    <section id="empresas" className="px-5 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-[var(--scheng-gold)]">
            {t("vent.eyebrow")}
          </p>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-[var(--scheng-fg)] sm:text-3xl md:text-4xl">
            {t("vent.title")}
          </h2>
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
                          className="grid size-12 shrink-0 place-items-center overflow-hidden rounded-xl bg-[var(--scheng-chip)] p-1 transition-transform duration-500 group-hover:-translate-y-0.5"
                        >
                          <img
                            src={l.src}
                            alt={l.label}
                            className="block size-full object-contain"
                            width={40}
                            height={40}
                            loading="lazy"
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
                {v.to ? (
                  <Link
                    to={v.to}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--scheng-gold)]"
                  >
                    {t("v3.cta")}
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                ) : (
                  <span className="mt-6 text-sm font-medium text-[var(--scheng-muted)]/70">
                    {t("vent.soon")}
                  </span>
                )}
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
          <h2 className="text-2xl font-bold tracking-tight text-[var(--scheng-fg)] sm:text-3xl md:text-4xl">
            {t("val.title")}
          </h2>
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
  const { t } = useScheng();
  return (
    <section id="contacto" className="px-5 py-20 md:py-24">
      <Reveal>
        <div className="mx-auto max-w-3xl rounded-3xl border border-[var(--scheng-gold)]/25 bg-gradient-to-b from-[var(--scheng-gold)]/10 to-transparent p-7 text-center sm:p-10">
          <h2 className="text-2xl font-bold tracking-tight text-[var(--scheng-fg)] sm:text-3xl md:text-4xl">
            {t("contact.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[var(--scheng-muted)]">
            {t("contact.text")}
          </p>
          <a
            href={`mailto:${email}`}
            className="mt-8 inline-flex max-w-full items-center gap-2 break-all rounded-full bg-gradient-to-r from-[var(--scheng-gold-deep)] to-[var(--scheng-gold)] px-6 py-3.5 text-sm font-bold text-[var(--scheng-ink-deep)] transition-transform duration-300 hover:-translate-y-0.5 sm:px-8"
          >
            <Mail className="size-4 shrink-0" />
            {email}
          </a>
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
        <img
          src={brand}
          alt="Scheng Holdings"
          className={`h-12 w-auto ${theme === "dark" ? "mix-blend-lighten" : ""}`}
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
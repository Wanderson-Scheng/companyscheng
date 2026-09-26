import { Link } from "@tanstack/react-router";
import { Moon, Sun } from "lucide-react";
import { type OrbLocale, orbLocales, useOrbital } from "@/components/orbital/i18n";

const links = [
  { href: "#tecnologia", k: "nav.tech" },
  { href: "#estado", k: "nav.status" },
  { href: "#equipa", k: "nav.team" },
];

export function OrbitalNav() {
  const { t, lang, setLang, theme, setTheme } = useOrbital();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--orb-line)] bg-[var(--orb-bg)]/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center gap-4 px-5 py-3.5">
        <a href="#top" className="flex min-w-0 shrink-0 items-center gap-2.5">
          <img
            src="/logos/orbital-mark.png"
            alt="Scheng Orbital System"
            width={32}
            height={32}
            className="size-8 shrink-0 rounded-md bg-white object-contain p-0.5"
          />
          <span className="hidden text-sm font-semibold tracking-tight text-[var(--orb-fg)] sm:block">
            Scheng Orbital System
          </span>
        </a>

        <ul className="ml-auto hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.k}>
              <a
                href={l.href}
                className="rounded-full px-3.5 py-2 text-sm text-[var(--orb-muted)] transition-colors hover:text-[var(--orb-fg)]"
              >
                {t(l.k)}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={t("nav.theme")}
            className="grid size-9 place-items-center rounded-full border border-[var(--orb-line)] text-[var(--orb-muted)] transition-colors hover:text-[var(--orb-fg)]"
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>

          {/* fieldset em vez de div com role="group": é o elemento nativo para
              um grupo de controlos, e evita o aviso de a11y do Biome. */}
          <fieldset
            className="flex min-w-0 items-center rounded-full border border-[var(--orb-line)] p-0.5"
            aria-label={t("nav.lang")}
          >
            {orbLocales.map((l: OrbLocale) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`rounded-full px-2.5 py-1 text-xs font-semibold uppercase transition-colors ${
                  lang === l
                    ? "bg-[var(--orb-accent-soft)] text-[var(--orb-accent)]"
                    : "text-[var(--orb-muted)] hover:text-[var(--orb-fg)]"
                }`}
              >
                {l}
              </button>
            ))}
          </fieldset>

          <Link
            to="/scheng/contacto"
            className="hidden rounded-full bg-[var(--orb-accent)] px-4 py-2 text-xs font-bold text-[var(--orb-deep)] transition-opacity hover:opacity-90 sm:block"
          >
            {t("nav.cta")}
          </Link>
        </div>
      </nav>
    </header>
  );
}

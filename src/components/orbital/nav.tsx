import { Link } from "@tanstack/react-router";
import { type OrbLocale, type OrbView, orbLocales, useOrbital } from "@/components/orbital/i18n";

const links: { view: OrbView; k: string }[] = [
  { view: "empresa", k: "nav.company" },
  { view: "tecnologia", k: "nav.tech" },
  { view: "projectos", k: "nav.projects" },
  { view: "estado", k: "nav.status" },
  { view: "equipa", k: "nav.team" },
];

export function OrbitalNav() {
  const { t, lang, setLang, setView } = useOrbital();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--orb-line)] bg-[var(--orb-deep)]/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center gap-6 px-5 py-4">
        {/* Bloco completo, com ORBITAL SYSTEM: "SCHENG" sozinho é ambíguo,
            porque a holding também se chama Scheng. O subtítulo só se lê a
            partir de uns 44px de altura, por isso é o cabeçalho que ganha
            altura, em vez de ser o logótipo a encolher. */}
        <a href="#top" className="shrink-0">
          <img
            src="/logos/orbital-lockup-light.png"
            alt="Scheng Orbital System"
            width={1370}
            height={215}
            className="h-11 w-auto"
          />
        </a>

        <ul className="ml-auto hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.k}>
              {/* Troca a aba e leva o ecrã ao separador, em vez de saltar para
                  uma âncora: as secções deixaram de estar todas montadas. */}
              <button
                type="button"
                onClick={() => {
                  setView(l.view);
                  document.getElementById("seccoes")?.scrollIntoView({ block: "start" });
                }}
                className="px-3.5 py-2 font-mono text-xs uppercase tracking-[0.14em] text-[var(--orb-muted)] transition-colors hover:text-[var(--orb-fg)]"
              >
                {t(l.k)}
              </button>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-3 md:ml-0">
          <fieldset className="flex min-w-0 items-center gap-0.5" aria-label={t("nav.lang")}>
            {orbLocales.map((l: OrbLocale) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`px-2 py-1 font-mono text-xs uppercase transition-colors ${
                  lang === l
                    ? "text-[var(--orb-accent)]"
                    : "text-[var(--orb-muted)] hover:text-[var(--orb-fg)]"
                }`}
              >
                {l}
              </button>
            ))}
          </fieldset>

          <Link
            to="/scheng/contacto"
            className="hidden border border-[var(--orb-accent)]/50 px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-[var(--orb-accent)] transition-colors hover:bg-[var(--orb-accent)] hover:text-black sm:block"
          >
            {t("nav.cta")}
          </Link>
        </div>
      </nav>
    </header>
  );
}

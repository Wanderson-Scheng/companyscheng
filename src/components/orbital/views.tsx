import { type OrbView, orbViews, useOrbital } from "@/components/orbital/i18n";
import {
  OrbitalCompany,
  OrbitalFounder,
  OrbitalGallery,
  OrbitalProjects,
  OrbitalStatus,
  OrbitalTech,
} from "@/components/orbital/sections";

/**
 * Separador de secções.
 *
 * Só a secção activa é montada. Numa página longa, ter tudo montado ao mesmo
 * tempo obriga o motor a manter e a repintar muito mais do que aquilo que
 * está à vista, e era parte do peso que travava máquinas mais modestas.
 *
 * O estado vive no contexto e não aqui, para a navegação do topo poder trocar
 * de secção sem que este componente tenha de saber dela.
 */

/** A galeria de CAD acompanha os projectos: é o que sai deles. */
function ProjectsPanel() {
  return (
    <>
      <OrbitalProjects />
      <OrbitalGallery />
    </>
  );
}

const panels: Record<OrbView, () => React.JSX.Element> = {
  empresa: OrbitalCompany,
  tecnologia: OrbitalTech,
  projectos: ProjectsPanel,
  estado: OrbitalStatus,
  equipa: OrbitalFounder,
};

const labels: Record<OrbView, string> = {
  empresa: "nav.company",
  tecnologia: "nav.tech",
  projectos: "nav.projects",
  estado: "nav.status",
  equipa: "nav.team",
};

export function OrbitalViews() {
  const { t, view, setView } = useOrbital();
  const Panel = panels[view];

  function go(index: number) {
    const next = orbViews[(index + orbViews.length) % orbViews.length] ?? orbViews[0];
    setView(next);
    document.getElementById(`orb-tab-${next}`)?.focus();
  }

  function onKeyDown(e: React.KeyboardEvent, index: number) {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      go(index + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(index - 1);
    } else if (e.key === "Home") {
      e.preventDefault();
      go(0);
    } else if (e.key === "End") {
      e.preventDefault();
      go(orbViews.length - 1);
    }
  }

  return (
    <div id="seccoes">
      <div className="sticky top-[76px] z-40 border-y border-[var(--orb-line)] bg-[var(--orb-deep)]/95 backdrop-blur">
        <div
          role="tablist"
          aria-label={t("views.label")}
          className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-5"
        >
          {orbViews.map((v, i) => (
            <button
              key={v}
              id={`orb-tab-${v}`}
              type="button"
              role="tab"
              aria-selected={view === v}
              aria-controls={`orb-panel-${v}`}
              tabIndex={view === v ? 0 : -1}
              onClick={() => setView(v)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className={`shrink-0 border-b-2 px-4 py-4 font-mono text-xs uppercase tracking-[0.14em] transition-colors ${
                view === v
                  ? "border-[var(--orb-accent)] text-[var(--orb-fg)]"
                  : "border-transparent text-[var(--orb-muted)] hover:text-[var(--orb-fg)]"
              }`}
            >
              <span className="mr-2 text-[var(--orb-accent)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              {t(labels[v])}
            </button>
          ))}
        </div>
      </div>

      <div
        role="tabpanel"
        id={`orb-panel-${view}`}
        aria-labelledby={`orb-tab-${view}`}
        // O padrão ARIA manda incluir o painel no percurso do Tab quando ele
        // não tem elementos focáveis lá dentro, que é o caso da maior parte
        // destas secções.
        // biome-ignore lint/a11y/noNoninteractiveTabindex: ver acima
        tabIndex={0}
        className="outline-none"
      >
        <Panel />
      </div>
    </div>
  );
}

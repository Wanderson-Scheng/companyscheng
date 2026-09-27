import { type KeyboardEvent, type ReactNode, useId, useRef, useState } from "react";

export type OrbTab = {
  id: string;
  label: string;
  panel: ReactNode;
};

/**
 * Abas segundo o padrão ARIA: setas percorrem os separadores, Home e End
 * saltam para as pontas, e só o separador activo fica no percurso do Tab —
 * a partir daí o Tab leva ao painel, não ao separador seguinte.
 */
export function OrbitalTabs({ tabs, label }: { tabs: OrbTab[]; label: string }) {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  function focusTab(index: number) {
    const next = (index + tabs.length) % tabs.length;
    setActive(next);
    refs.current[next]?.focus();
  }

  function onKeyDown(e: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      focusTab(index + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      focusTab(index - 1);
    } else if (e.key === "Home") {
      e.preventDefault();
      focusTab(0);
    } else if (e.key === "End") {
      e.preventDefault();
      focusTab(tabs.length - 1);
    }
  }

  return (
    <div>
      <div
        role="tablist"
        aria-label={label}
        className="flex flex-wrap gap-2 border-b border-[var(--orb-line)]"
      >
        {tabs.map((tab, i) => (
          <button
            key={tab.id}
            ref={(el) => {
              refs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`${baseId}-tab-${tab.id}`}
            aria-selected={active === i}
            aria-controls={`${baseId}-panel-${tab.id}`}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKeyDown(e, i)}
            className={`-mb-px border-b-2 px-4 py-3 text-sm font-medium transition-colors ${
              active === i
                ? "border-[var(--orb-accent)] text-[var(--orb-fg)]"
                : "border-transparent text-[var(--orb-muted)] hover:text-[var(--orb-fg)]"
            }`}
          >
            <span className="mr-2 font-mono text-xs text-[var(--orb-accent)]">
              {String(i + 1).padStart(2, "0")}
            </span>
            {tab.label}
          </button>
        ))}
      </div>

      {tabs.map((tab, i) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`${baseId}-panel-${tab.id}`}
          aria-labelledby={`${baseId}-tab-${tab.id}`}
          hidden={active !== i}
          // O padrão ARIA para abas manda incluir o painel no percurso do Tab
          // quando ele não tem elementos focáveis lá dentro, que é o caso aqui
          // — só texto e imagem. Sem isto, quem navega por teclado não alcança
          // o conteúdo do painel.
          // biome-ignore lint/a11y/noNoninteractiveTabindex: ver acima
          tabIndex={0}
          className="pt-10 outline-none"
        >
          {tab.panel}
        </div>
      ))}
    </div>
  );
}

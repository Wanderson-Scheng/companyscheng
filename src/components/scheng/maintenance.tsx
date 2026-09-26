import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Wrench } from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "@/components/landing/reveal";
import { useScheng } from "@/components/scheng/context";

/**
 * Página das empresas e produtos ainda em construção (`inProgress` em
 * ventures.ts). Mostra o nome, o aviso e o contacto, e mais nada: o conteúdo
 * que já existe fica escondido até a página estar pronta para ser vista.
 *
 * O texto está em inglês nas duas locales de propósito: foi pedido em inglês,
 * e passar pelo `t()` mantém a regra do projecto de não haver texto visível
 * fora do dicionário — traduzir mais tarde é mudar uma linha em `pt`.
 */
export function SchengMaintenancePage({
  back,
  badge,
  name,
}: {
  /** Ligação de regresso, que difere entre empresa e produto. */
  back: ReactNode;
  /** Logótipo e etiqueta da área, tal como na página completa. */
  badge: ReactNode;
  name: string;
}) {
  const { t } = useScheng();

  return (
    <section className="px-5 py-14 md:py-20">
      <div className="mx-auto max-w-5xl">
        <Reveal>{back}</Reveal>

        <Reveal delay={80}>
          <div className="group mt-8 flex flex-wrap items-center gap-3">{badge}</div>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-[var(--scheng-fg)] sm:text-4xl">
            {name}
          </h1>

          <div
            role="status"
            className="mt-8 flex max-w-2xl gap-4 rounded-2xl border border-[var(--scheng-gold)]/35 bg-[var(--scheng-gold)]/8 p-5"
          >
            <Wrench
              className="mt-0.5 size-5 shrink-0 text-[var(--scheng-gold)]"
              aria-hidden="true"
            />
            <div className="min-w-0">
              <p className="text-sm font-bold text-[var(--scheng-fg)]">{t("wip.title")}</p>
              <p className="mt-1 text-sm leading-relaxed text-[var(--scheng-muted)]">
                {t("wip.body")}
              </p>
            </div>
          </div>

          <Link
            to="/scheng/contacto"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-[var(--scheng-line)] px-6 py-3 text-sm font-semibold text-[var(--scheng-fg)] transition-colors hover:border-[var(--scheng-gold)]/50"
          >
            {t("detail.cta")}
            <ArrowUpRight className="size-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

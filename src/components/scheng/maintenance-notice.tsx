import { Wrench } from "lucide-react";
import { useScheng } from "@/components/scheng/context";

/**
 * Aviso para as páginas ainda em construção (`inProgress` em ventures.ts).
 *
 * O texto está em inglês nas duas locales de propósito: foi pedido em inglês,
 * e passar pelo `t()` mantém a regra do projecto de não haver texto visível
 * fora do dicionário — traduzir mais tarde é mudar uma linha em `pt`.
 */
export function MaintenanceNotice() {
  const { t } = useScheng();

  return (
    <div
      role="status"
      className="mt-8 flex gap-4 rounded-2xl border border-[var(--scheng-gold)]/35 bg-[var(--scheng-gold)]/8 p-5"
    >
      <Wrench className="mt-0.5 size-5 shrink-0 text-[var(--scheng-gold)]" aria-hidden="true" />
      <div className="min-w-0">
        <p className="text-sm font-bold text-[var(--scheng-fg)]">{t("wip.title")}</p>
        <p className="mt-1 text-sm leading-relaxed text-[var(--scheng-muted)]">{t("wip.body")}</p>
      </div>
    </div>
  );
}

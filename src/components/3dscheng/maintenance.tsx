import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Wrench } from "lucide-react";
import { use3DI18n } from "./i18n";

const logoText = "/logos/3dscheng-text.png";

/**
 * Ecrã de manutenção do 3D Scheng.
 *
 * O texto está em inglês nas três línguas de propósito: foi pedido em inglês
 * para as páginas em construção do grupo, e passar pelo `t()` mantém a regra
 * do projecto de não haver texto visível fora do dicionário.
 */
export function Maintenance3D() {
  const { t } = use3DI18n();

  return (
    <main className="mx-auto flex min-h-dvh max-w-xl flex-col justify-center px-5 py-16">
      <img
        src={logoText}
        alt="3D Scheng"
        width={400}
        height={133}
        className="h-10 w-auto self-start dark:invert"
      />

      <div
        role="status"
        className="mt-10 flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]"
      >
        <Wrench className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
        <div className="min-w-0">
          <h1 className="text-base font-bold">{t("maint.title")}</h1>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{t("maint.body")}</p>
        </div>
      </div>

      <Link
        to="/scheng/contacto"
        className="mt-6 inline-flex items-center gap-2 self-start rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-surface"
      >
        {t("maint.cta")}
        <ArrowUpRight className="size-4" aria-hidden="true" />
      </Link>
    </main>
  );
}

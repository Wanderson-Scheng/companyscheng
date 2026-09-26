import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { useOrbital } from "@/components/orbital/i18n";

export function OrbitalFooter() {
  const { t } = useOrbital();

  return (
    <footer className="border-t border-[var(--orb-line)] bg-[var(--orb-deep)] px-5 py-12">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <img
              src="/logos/orbital-mark.png"
              alt="Scheng Orbital System"
              width={32}
              height={32}
              className="size-8 rounded-md bg-white object-contain p-0.5"
            />
            <span className="text-sm font-semibold tracking-tight text-white">
              Scheng Orbital System
            </span>
          </div>
          {/* Morada física: numa empresa desta dimensão é sinal de seriedade,
              e a sua ausência é um dos sinais de amadorismo no sector. */}
          <p className="mt-4 inline-flex items-start gap-2 text-sm leading-relaxed text-white/60">
            <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            {t("hero.where")}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
            {t("nav.contact")}
          </p>
          <a
            href="mailto:Info@companyscheng.com"
            className="mt-4 inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-[var(--orb-accent)]"
          >
            <Mail className="size-4" aria-hidden="true" />
            Info@companyscheng.com
          </a>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
            {t("foot.group")}
          </p>
          <Link
            to="/scheng"
            className="mt-4 inline-flex items-center gap-1.5 text-sm text-white/70 transition-colors hover:text-[var(--orb-accent)]"
          >
            Scheng Holdings
            <ArrowUpRight className="size-3.5" />
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6">
        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} Scheng Holdings. {t("foot.rights")}
        </p>
      </div>
    </footer>
  );
}

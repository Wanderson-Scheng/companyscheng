import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Check, ImageIcon } from "lucide-react";
import { Reveal } from "@/components/landing/reveal";
import { useScheng } from "@/components/scheng/context";
import type { Venture, VentureLogo } from "@/components/scheng/ventures";

export function LogoChip({ logo }: { logo: VentureLogo }) {
  return (
    <span
      className={`grid size-12 shrink-0 place-items-center overflow-hidden rounded-xl p-1.5 transition-transform duration-500 group-hover:-translate-y-0.5 ${
        logo.chip === "light"
          ? "bg-white ring-1 ring-black/5"
          : logo.chip === "dark"
            ? "bg-[#0b1220] ring-1 ring-white/10"
            : "bg-[var(--scheng-surface)]"
      }`}
    >
      <img
        src={logo.src}
        alt={logo.label}
        className={`block size-full object-contain ${logo.zoom ? "scale-[1.65]" : ""}`}
        width={40}
        height={40}
        loading="lazy"
      />
    </span>
  );
}

export function SchengVentureDetail({ venture }: { venture: Venture }) {
  const { t } = useScheng();
  const features = Array.from({ length: venture.features }, (_, i) => `${venture.k}.f${i + 1}`);

  return (
    <section className="px-5 py-14 md:py-20">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <Link
            to="/scheng/empresas"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--scheng-muted)] transition-colors hover:text-[var(--scheng-gold)]"
          >
            <ArrowLeft className="size-4" />
            {t("vent.back")}
          </Link>
        </Reveal>

        <Reveal delay={80}>
          <div className="group mt-8 flex flex-wrap items-center gap-3">
            {venture.logos ? (
              venture.logos.map((l) => <LogoChip key={l.label} logo={l} />)
            ) : (
              <span className="grid size-12 place-items-center rounded-xl bg-[var(--scheng-gold)]/12 text-[var(--scheng-gold)]">
                <venture.icon className="size-5" />
              </span>
            )}
            <span className="rounded-full border border-[var(--scheng-line)] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[var(--scheng-muted)]">
              {t(`${venture.k}.tag`)}
            </span>
          </div>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-[var(--scheng-fg)] sm:text-4xl">
            {venture.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[var(--scheng-muted)]">
            {t(`${venture.k}.d`)}
          </p>
          <p className="mt-4 max-w-2xl leading-relaxed text-[var(--scheng-muted)]">
            {t(`${venture.k}.long`)}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f} delay={100 * i}>
              <div className="h-full rounded-2xl border border-[var(--scheng-line)] bg-[var(--scheng-surface)] p-5">
                <Check className="size-5 text-[var(--scheng-gold)]" />
                <p className="mt-3 text-sm leading-relaxed text-[var(--scheng-fg)]">{t(f)}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <h2 className="mt-14 text-xl font-bold tracking-tight text-[var(--scheng-fg)] sm:text-2xl">
            {t("detail.gallery")}
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="grid aspect-[4/3] place-items-center rounded-2xl border border-dashed border-[var(--scheng-line)] bg-[var(--scheng-surface)] text-[var(--scheng-muted)]"
              >
                <span className="flex flex-col items-center gap-2 text-xs">
                  <ImageIcon className="size-5" />
                  {t("detail.photosSoon")}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-14 flex flex-wrap items-center gap-3">
            <Link
              to="/scheng/contacto"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--scheng-gold)] px-6 py-3 text-sm font-semibold text-[var(--scheng-on-gold)] transition-transform hover:-translate-y-0.5"
            >
              {t("detail.cta")}
              <ArrowUpRight className="size-4" />
            </Link>
            {venture.external ? (
              <Link
                to={venture.external.to}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--scheng-line)] px-6 py-3 text-sm font-semibold text-[var(--scheng-fg)] transition-colors hover:border-[var(--scheng-gold)]/50"
              >
                {t(venture.external.labelKey)}
                <ArrowUpRight className="size-4" />
              </Link>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Check, ImageIcon } from "lucide-react";
import { Reveal } from "@/components/landing/reveal";
import { LazyImage } from "@/components/ui/lazy-image";
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
      <LazyImage
        src={logo.src}
        alt={logo.label}
        className={`block size-full object-contain ${logo.zoom ? "scale-[1.65]" : ""}`}
        width={40}
        height={40}
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
            {venture.logos?.length ? (
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

        {venture.products?.length ? null : (
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
        )}

        {venture.products?.length ? (
          <div className="mt-14">
            <Reveal>
              <h2 className="text-xl font-bold tracking-tight text-[var(--scheng-fg)] sm:text-2xl">
                {t("detail.products")}
              </h2>
            </Reveal>
            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {venture.products.map((p, i) => (
                <Reveal key={p.slug} delay={100 * i}>
                  <Link
                    to="/scheng/produtos/$slug"
                    params={{ slug: p.slug }}
                    className="group flex h-full flex-col rounded-3xl border border-[var(--scheng-line)] bg-[var(--scheng-surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--scheng-gold)]/45 hover:shadow-[0_30px_60px_-40px_var(--scheng-gold)]"
                  >
                    <LogoChip logo={p.logo} />
                    <h3 className="mt-5 text-lg font-bold text-[var(--scheng-fg)]">{p.name}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--scheng-muted)]">
                      {t(`${p.k}.d`)}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--scheng-gold)]">
                      {t("vent.more")}
                      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        ) : null}

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
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--scheng-gold-deep)] via-[var(--scheng-gold)] to-[var(--scheng-gold-deep)] px-6 py-3 text-sm font-bold text-[var(--scheng-ink-deep)] shadow-[0_18px_45px_-18px_var(--scheng-gold)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              {t("detail.cta")}
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
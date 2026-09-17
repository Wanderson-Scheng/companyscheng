import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Check, ImageIcon } from "lucide-react";
import { Reveal } from "@/components/landing/reveal";
import { useScheng } from "@/components/scheng/context";
import { MaintenanceNotice } from "@/components/scheng/maintenance-notice";
import { LogoChip } from "@/components/scheng/venture-detail";
import type { Product } from "@/components/scheng/ventures";
import { LazyImage } from "@/components/ui/lazy-image";

export function SchengProductDetail({ product }: { product: Product }) {
  const { t } = useScheng();
  const features = Array.from({ length: product.features }, (_, i) => `${product.k}.f${i + 1}`);

  return (
    <section className="px-5 py-14 md:py-20">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <Link
            to="/scheng/empresas/$slug"
            params={{ slug: product.parentSlug }}
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--scheng-muted)] transition-colors hover:text-[var(--scheng-gold)]"
          >
            <ArrowLeft className="size-4" />
            {product.parentName}
          </Link>
        </Reveal>

        <Reveal delay={80}>
          <div className="group mt-8 flex flex-wrap items-center gap-3">
            <LogoChip logo={product.logo} />
            <span className="rounded-full border border-[var(--scheng-line)] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[var(--scheng-muted)]">
              {t(`${product.k}.tag`)}
            </span>
          </div>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-[var(--scheng-fg)] sm:text-4xl">
            {product.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[var(--scheng-muted)]">{t(`${product.k}.d`)}</p>
          <p className="mt-4 max-w-2xl leading-relaxed text-[var(--scheng-muted)]">
            {t(`${product.k}.long`)}
          </p>
          {product.inProgress ? <MaintenanceNotice /> : null}
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

        {/* Numa página em construção o aviso já diz que faltam as fotografias,
            por isso as molduras tracejadas ficariam a repetir a mesma coisa. */}
        {product.inProgress ? null : (
          <Reveal delay={120}>
            <h2 className="mt-14 text-xl font-bold tracking-tight text-[var(--scheng-fg)] sm:text-2xl">
              {t("detail.gallery")}
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {product.gallery?.length
                ? product.gallery.map((img) => (
                    <div
                      key={img.src}
                      className="overflow-hidden rounded-2xl border border-[var(--scheng-line)] bg-[var(--scheng-surface)]"
                    >
                      <LazyImage
                        src={img.src}
                        alt={img.alt}
                        className="aspect-[4/3] w-full object-cover"
                        width={400}
                        height={300}
                      />
                    </div>
                  ))
                : [0, 1, 2].map((i) => (
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
        )}

        <Reveal delay={140}>
          <div className="mt-14 flex flex-wrap items-center gap-3">
            {product.externalTo ? (
              <Link
                to={product.externalTo}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--scheng-gold-deep)] via-[var(--scheng-gold)] to-[var(--scheng-gold-deep)] px-6 py-3 text-sm font-bold text-[var(--scheng-ink-deep)] shadow-[0_18px_45px_-18px_var(--scheng-gold)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                {t(`${product.k}.cta`)}
                <ArrowUpRight className="size-4" />
              </Link>
            ) : null}
            <Link
              to="/scheng/contacto"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--scheng-line)] px-6 py-3 text-sm font-semibold text-[var(--scheng-fg)] transition-colors hover:border-[var(--scheng-gold)]/50"
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

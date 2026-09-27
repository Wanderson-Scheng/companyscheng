import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Check, MapPin } from "lucide-react";
import { Reveal } from "@/components/landing/reveal";
import { useOrbital } from "@/components/orbital/i18n";
import { OrbitalTabs, type OrbTab } from "@/components/orbital/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { LazyImage } from "@/components/ui/lazy-image";

/**
 * Secções da Scheng Orbital System.
 *
 * As imagens são vistas gerais do módulo e do modelo de referência. Os
 * renders que mostram a geometria de engate da interface ficam de fora de
 * propósito, tal como materiais, dimensões, parâmetros de processo e
 * resultados de simulação: é o núcleo técnico da empresa.
 */

const method = ["m1", "m2", "m3"];
const context = ["c1", "c2", "c3"];
const team = ["t1", "t2"];
const envelope = ["env1", "env2", "env3"];

const gallery = [
  { src: "/landing/orbital-system/cad-mesh.webp", k: "demo.i1" },
  { src: "/landing/orbital-system/cad-plate.webp", k: "demo.i2" },
  { src: "/landing/orbital-system/cad-curvature.webp", k: "demo.i3" },
  { src: "/landing/orbital-system/module-detail.webp", k: "demo.i4" },
  { src: "/landing/orbital-system/cad-interior.webp", k: "demo.i5" },
];

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--orb-accent)]">
      {children}
    </p>
  );
}

function Title({ children }: { children: string }) {
  return (
    <h2 className="mt-4 max-w-2xl text-2xl font-medium leading-tight tracking-tight text-[var(--orb-fg)] sm:text-3xl md:text-4xl">
      {children}
    </h2>
  );
}

export function OrbitalHero() {
  const { t } = useOrbital();

  return (
    <section id="top" className="relative overflow-hidden bg-[var(--orb-deep)]">
      {/* Ordem das camadas: render, depois o véu que o assenta no preto, e só
          então as estrelas. Estando por baixo do véu, as estrelas eram
          apagadas por ele e o campo estelar não se via de todo. */}
      <div className="absolute inset-0" aria-hidden="true">
        <LazyImage
          src="/landing/orbital-system/module-hero.webp"
          alt=""
          className="size-full object-cover opacity-45"
          width={1920}
          height={1048}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/75 to-black" />
        <div className="orb-stars absolute inset-0" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-24 md:py-36">
        <Reveal>
          <h1 className="max-w-4xl text-3xl font-medium leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl">
            {t("hero.title")}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/70">{t("hero.sub")}</p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-[var(--orb-accent)]/45 bg-[var(--orb-accent)]/12 px-4 py-1.5 font-mono text-xs text-[var(--orb-accent)]">
              {t("hero.trl")}
            </span>
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-white/50">
              <MapPin className="size-3.5" aria-hidden="true" />
              {t("hero.where")}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function OrbitalProblem() {
  const { t } = useOrbital();

  return (
    <section className="bg-[var(--orb-bg)] px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Eyebrow>{t("problem.eyebrow")}</Eyebrow>
          <Title>{t("problem.title")}</Title>
        </Reveal>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <Reveal delay={80}>
            <p className="leading-relaxed text-[var(--orb-muted)]">{t("problem.p1")}</p>
          </Reveal>
          <Reveal delay={140}>
            <p className="leading-relaxed text-[var(--orb-muted)]">{t("problem.p2")}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function TabPanel({ k, image }: { k: string; image: string }) {
  const { t } = useOrbital();
  const bullets = [`${k}.b1`, `${k}.b2`, `${k}.b3`];

  return (
    <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_1fr]">
      <div>
        <h3 className="text-xl font-medium tracking-tight text-[var(--orb-fg)]">{t(`${k}.t`)}</h3>
        <p className="mt-4 leading-relaxed text-[var(--orb-muted)]">{t(`${k}.p`)}</p>
        <ul className="mt-6 grid gap-3">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-3">
              <Check className="mt-0.5 size-4 shrink-0 text-[var(--orb-accent)]" />
              <span className="text-sm text-[var(--orb-fg)]">{t(b)}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="overflow-hidden rounded-2xl border border-[var(--orb-line)] bg-[var(--orb-deep)]">
        <LazyImage
          src={image}
          alt={t(`${k}.t`)}
          className="aspect-[4/3] w-full object-cover"
          width={1400}
          height={1050}
        />
      </div>
    </div>
  );
}

export function OrbitalTech() {
  const { t } = useOrbital();

  const tabs: OrbTab[] = [
    {
      id: "interface",
      label: t("tab1.k"),
      panel: <TabPanel k="tab1" image="/landing/orbital-system/module-detail.webp" />,
    },
    {
      id: "modelo",
      label: t("tab2.k"),
      panel: <TabPanel k="tab2" image="/landing/orbital-system/cad-interior.webp" />,
    },
    {
      id: "verificacao",
      label: t("tab3.k"),
      panel: <TabPanel k="tab3" image="/landing/orbital-system/cad-mesh.webp" />,
    },
  ];

  return (
    <section
      id="tecnologia"
      className="border-y border-[var(--orb-line)] bg-[var(--orb-panel)] px-5 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Eyebrow>{t("tabs.eyebrow")}</Eyebrow>
          <Title>{t("tabs.title")}</Title>
        </Reveal>

        <Reveal delay={100} className="mt-12">
          <OrbitalTabs tabs={tabs} label={t("tabs.eyebrow")} />
        </Reveal>

        {/* Envelope de projecto. São requisitos externos — o que a peça tem de
            aguentar —, não resultados nossos, e a nota di-lo por escrito. */}
        <Reveal delay={160}>
          <div className="mt-14 rounded-2xl border border-[var(--orb-line)] bg-[var(--orb-bg)] p-7">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--orb-accent)]">
              {t("env.title")}
            </p>
            <dl className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-3">
              {envelope.map((e) => (
                <div key={e} className="border-l-2 border-[var(--orb-accent)]/40 pl-4">
                  <dt className="text-xs text-[var(--orb-muted)]">{t(`${e}.l`)}</dt>
                  <dd className="mt-1.5 font-mono text-lg text-[var(--orb-fg)]">{t(`${e}.v`)}</dd>
                  <dd className="mt-1 font-mono text-[0.65rem] uppercase tracking-wider text-[var(--orb-muted)]">
                    {t(`${e}.s`)}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-7 border-t border-[var(--orb-line)] pt-5 text-xs leading-relaxed text-[var(--orb-muted)]">
              {t("env.note")}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function OrbitalGallery() {
  const { t } = useOrbital();

  return (
    <section className="relative overflow-hidden bg-[var(--orb-deep)] px-5 py-20 md:py-28">
      <div className="orb-stars absolute inset-0 opacity-70" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <Eyebrow>{t("demo.eyebrow")}</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-2xl font-medium leading-tight tracking-tight text-white sm:text-3xl md:text-4xl">
            {t("demo.title")}
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-white/65">{t("demo.lead")}</p>
        </Reveal>

        <Reveal delay={100} className="relative mt-12">
          <Carousel opts={{ align: "start", loop: true }} aria-label={t("demo.title")}>
            <CarouselContent className="-ml-4">
              {gallery.map((g) => (
                <CarouselItem key={g.src} className="pl-4 sm:basis-1/2 lg:basis-1/2">
                  <figure>
                    <div className="overflow-hidden rounded-2xl border border-white/12 bg-black/30">
                      <LazyImage
                        src={g.src}
                        alt={t(g.k)}
                        className="aspect-[16/10] w-full object-cover"
                        width={1400}
                        height={875}
                      />
                    </div>
                    <figcaption className="mt-3 font-mono text-xs text-white/55">
                      {t(g.k)}
                    </figcaption>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              className="-left-1 flex size-10 border-white/20 bg-white/10 text-white hover:bg-white/20 lg:-left-12"
              aria-label={t("demo.prev")}
            />
            <CarouselNext
              className="-right-1 flex size-10 border-white/20 bg-white/10 text-white hover:bg-white/20 lg:-right-12"
              aria-label={t("demo.next")}
            />
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}

export function OrbitalMethod() {
  const { t } = useOrbital();

  return (
    <section className="bg-[var(--orb-bg)] px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Eyebrow>{t("method.eyebrow")}</Eyebrow>
          <Title>{t("method.title")}</Title>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {method.map((k, i) => (
            <Reveal key={k} delay={80 + i * 70}>
              <div className="h-full rounded-2xl border border-[var(--orb-line)] bg-[var(--orb-panel)] p-6">
                <span className="font-mono text-xs text-[var(--orb-accent)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-base font-semibold text-[var(--orb-fg)]">{t(`${k}.t`)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--orb-muted)]">
                  {t(`${k}.d`)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OrbitalStatus() {
  const { t } = useOrbital();

  return (
    <section
      id="estado"
      className="border-y border-[var(--orb-line)] bg-[var(--orb-panel)] px-5 py-20 md:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.15fr_1fr]">
        <Reveal>
          <div>
            <Eyebrow>{t("status.eyebrow")}</Eyebrow>
            <Title>{t("status.title")}</Title>
            <p className="mt-7 leading-relaxed text-[var(--orb-muted)]">{t("status.p1")}</p>
            <p className="mt-4 leading-relaxed text-[var(--orb-muted)]">{t("status.p2")}</p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-2xl border border-[var(--orb-accent)]/40 bg-[var(--orb-accent-soft)] p-6">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--orb-accent)]">
                {t("status.now")}
              </p>
              <p className="mt-3 font-mono text-3xl text-[var(--orb-fg)]">TRL 3</p>
              <p className="mt-2 text-sm text-[var(--orb-muted)]">{t("status.nowd")}</p>
            </div>
            <div className="rounded-2xl border border-dashed border-[var(--orb-line)] p-6">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--orb-muted)]">
                {t("status.next")}
              </p>
              <p className="mt-3 font-mono text-3xl text-[var(--orb-muted)]">TRL 5</p>
              <p className="mt-2 text-sm text-[var(--orb-muted)]">{t("status.nextd")}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function OrbitalContext() {
  const { t } = useOrbital();

  return (
    <section className="bg-[var(--orb-bg)] px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Eyebrow>{t("ctx.eyebrow")}</Eyebrow>
          <Title>{t("ctx.title")}</Title>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {context.map((k, i) => (
            <Reveal key={k} delay={80 + i * 70}>
              <div className="h-full rounded-2xl border border-[var(--orb-line)] bg-[var(--orb-panel)] p-6">
                <h3 className="text-base font-semibold text-[var(--orb-fg)]">{t(`${k}.t`)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--orb-muted)]">
                  {t(`${k}.d`)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OrbitalTeam() {
  const { t } = useOrbital();

  return (
    <section
      id="equipa"
      className="border-y border-[var(--orb-line)] bg-[var(--orb-panel)] px-5 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Eyebrow>{t("team.eyebrow")}</Eyebrow>
          <Title>{t("team.title")}</Title>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:max-w-2xl">
          {team.map((k, i) => (
            <Reveal key={k} delay={80 + i * 70}>
              <div className="h-full rounded-2xl border border-[var(--orb-line)] bg-[var(--orb-bg)] p-6">
                <p className="text-base font-semibold text-[var(--orb-fg)]">{t(`${k}.n`)}</p>
                <p className="mt-1 text-sm text-[var(--orb-muted)]">{t(`${k}.r`)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OrbitalCta() {
  const { t } = useOrbital();

  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-[var(--orb-deep)] px-5 py-24 md:py-32"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <LazyImage
          src="/landing/orbital-system/module-base.webp"
          alt=""
          className="size-full object-cover opacity-30"
          width={1600}
          height={873}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/60" />
        <div className="orb-stars absolute inset-0" />
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="text-2xl font-medium tracking-tight text-white sm:text-4xl">
            {t("talk.title")}
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-white/65">{t("talk.text")}</p>
          <Link
            to="/scheng/contacto"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-[var(--orb-accent)] px-7 py-3.5 text-sm font-bold text-[var(--orb-deep)] transition-transform duration-300 hover:-translate-y-0.5"
          >
            {t("talk.cta")}
            <ArrowUpRight className="size-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

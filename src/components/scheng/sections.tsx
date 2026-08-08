import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Building2,
  Boxes,
  Compass,
  Mail,
  Rocket,
  ShieldCheck,
  Sparkles,
  Linkedin,
  Instagram,
} from "lucide-react";
import logoGold from "@/assets/scheng-logo-dark-transparent.png.asset.json";
import logoOrbital from "@/assets/orbital-logo-transparent.png.asset.json";
import logo3d from "@/assets/scheng3d-logo-transparent.png.asset.json";
import logoGuiafin from "@/assets/guiafin-icon-transparent.png.asset.json";
import { Reveal } from "@/components/landing/reveal";

const email = "Info@companyscheng.com";
const instagramUrl = "https://www.instagram.com/guiafin_?igsh=bzV0NDAybnJmMmRs";
const linkedinUrl = "https://www.linkedin.com/in/wanderson-scheng-769b72379";

export function SchengNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--scheng-line)] bg-[var(--scheng-ink-deep)]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link to="/scheng" className="flex items-center gap-3">
          <img
            src={logoGold.url}
            alt="Scheng Holdings"
            className="h-10 w-auto mix-blend-lighten"
            width={160}
            height={40}
          />
          <span className="sr-only">Scheng Holdings</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-[var(--scheng-muted)] md:flex">
          <a className="transition-colors hover:text-[var(--scheng-gold)]" href="#grupo">
            Grupo
          </a>
          <a className="transition-colors hover:text-[var(--scheng-gold)]" href="#empresas">
            Empresas
          </a>
          <a className="transition-colors hover:text-[var(--scheng-gold)]" href="#valores">
            Valores
          </a>
          <a className="transition-colors hover:text-[var(--scheng-gold)]" href="#contacto">
            Contacto
          </a>
        </nav>
        <a
          href={`mailto:${email}`}
          className="rounded-full border border-[var(--scheng-gold)]/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--scheng-gold)] transition-colors hover:bg-[var(--scheng-gold)]/10"
        >
          Falar connosco
        </a>
      </div>
    </header>
  );
}

export function SchengHero() {
  return (
    <section className="relative overflow-hidden px-5 pb-24 pt-20 md:pt-28">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-18rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[var(--scheng-gold)]/12 blur-3xl"
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <img
            src={logoGold.url}
            alt="Logótipo Scheng Holdings"
            className="mx-auto h-40 w-auto mix-blend-lighten md:h-52"
            width={520}
            height={340}
          />
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-2 text-[0.7rem] font-semibold uppercase tracking-[0.42em] text-[var(--scheng-gold)]">
            Holding de tecnologia e design
          </p>
        </Reveal>
        <Reveal delay={200}>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white md:text-6xl">
            Construímos empresas que resolvem problemas reais
          </h1>
        </Reveal>
        <Reveal delay={280}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--scheng-muted)] md:text-lg">
            A Scheng Holdings reúne produtos digitais, engenharia e design sob uma única visão:
            criar soluções simples, privadas e duradouras para pessoas e negócios.
          </p>
        </Reveal>
        <Reveal delay={360}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#empresas"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--scheng-gold-deep)] to-[var(--scheng-gold)] px-7 py-3.5 text-sm font-bold text-[var(--scheng-ink-deep)] shadow-[0_18px_45px_-18px_var(--scheng-gold)] transition-transform hover:-translate-y-0.5"
            >
              Conhecer as empresas
              <ArrowUpRight className="size-4" />
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--scheng-line)] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-[var(--scheng-gold)]/50"
            >
              Contacto
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const pillars = [
  {
    icon: Compass,
    title: "Visão de longo prazo",
    text: "Cada empresa do grupo é construída para durar, não para seguir modas.",
  },
  {
    icon: ShieldCheck,
    title: "Privacidade primeiro",
    text: "Produtos que respeitam os dados de quem os usa, por princípio e por arquitetura.",
  },
  {
    icon: Sparkles,
    title: "Design com intenção",
    text: "Interfaces claras, rápidas e bonitas — sem ruído nem complexidade desnecessária.",
  },
];

export function SchengAbout() {
  return (
    <section id="grupo" className="border-y border-[var(--scheng-line)] bg-white/[0.02] px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-[var(--scheng-gold)]">
            O grupo
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-white md:text-4xl">
            Uma casa para produtos independentes
          </h2>
          <p className="mt-4 max-w-2xl text-[var(--scheng-muted)]">
            A holding organiza quatro braços independentes — aeroespacial, comercial, tecnológico e
            artesanal — com uma visão comum de engenharia, produto e qualidade a longo prazo.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={120 * i}>
              <div className="h-full rounded-2xl border border-[var(--scheng-line)] bg-white/[0.03] p-6 transition-colors hover:border-[var(--scheng-gold)]/40">
                <p.icon className="size-6 text-[var(--scheng-gold)]" />
                <h3 className="mt-4 text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--scheng-muted)]">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const ventures = [
  {
    icon: Rocket,
    logo: logoOrbital.url,
    name: "Schengen Orbital System",
    tag: "Braço aeroespacial",
    text: "Engenharia espacial profunda e sistemas criogénicos, com operação independente e foco em investigação e desenvolvimento avançado.",
  },
  {
    icon: Building2,
    name: "Scheng Imports",
    tag: "Braço comercial",
    text: "E-commerce e distribuição de hardware: impressoras 3D, filamentos, ferramentas e sílica em gel.",
  },
  {
    icon: Boxes,
    logos: [
      { src: logo3d.url, label: "3D Scheng" },
      { src: logoGuiafin.url, label: "GuiaFin" },
    ],
    name: "Scheng Technology",
    tag: "Braço tecnológico",
    text: "Detém a propriedade intelectual e gere as subscrições do 3D Scheng, software de farm 3D, e do GuiaFin, app de gestão financeira.",
    to: "/" as const,
    cta: "Conhecer o GuiaFin",
  },
  {
    icon: Sparkles,
    name: "Schengen Atelier",
    tag: "Braço artesanal",
    text: "Sabonetes e produtos personalizados feitos à mão, com cuidado artesanal e atenção a cada detalhe.",
  },
];

export function SchengVentures() {
  return (
    <section id="empresas" className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-[var(--scheng-gold)]">
            Empresas
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
            O que construímos
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {ventures.map((v, i) => (
            <Reveal key={v.name} delay={100 * i}>
              <article className="group relative flex h-full flex-col rounded-3xl border border-[var(--scheng-line)] bg-white/[0.03] p-7 transition-all hover:-translate-y-1 hover:border-[var(--scheng-gold)]/45">
                <div className="flex items-center justify-between">
                  {v.logo ? (
                    <img
                      src={v.logo}
                      alt={v.name}
                      className="size-12 rounded-xl object-contain p-0.5"
                      width={48}
                      height={48}
                      loading="lazy"
                    />
                  ) : v.logos ? (
                    <span className="flex items-center gap-2">
                      {v.logos.map((l) => (
                        <img
                          key={l.label}
                          src={l.src}
                          alt={l.label}
                          className="size-12 rounded-xl object-contain"
                          width={48}
                          height={48}
                          loading="lazy"
                        />
                      ))}
                    </span>
                  ) : (
                    <span className="grid size-11 place-items-center rounded-xl bg-[var(--scheng-gold)]/12 text-[var(--scheng-gold)]">
                      <v.icon className="size-5" />
                    </span>
                  )}
                  <span className="rounded-full border border-[var(--scheng-line)] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[var(--scheng-muted)]">
                    {v.tag}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-bold text-white">{v.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--scheng-muted)]">
                  {v.text}
                </p>
                {v.to ? (
                  <Link
                    to={v.to}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--scheng-gold)]"
                  >
                    {v.cta}
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                ) : (
                  <span className="mt-6 text-sm font-medium text-[var(--scheng-muted)]/70">
                    Em desenvolvimento
                  </span>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const values = [
  ["01", "Simplicidade", "Menos ecrãs, menos passos, menos fricção."],
  ["02", "Confiança", "Transparência no que fazemos e no que guardamos."],
  ["03", "Autonomia", "Produtos que funcionam sem depender de terceiros."],
  ["04", "Excelência", "Detalhe e acabamento em cada entrega."],
];

export function SchengValues() {
  return (
    <section
      id="valores"
      className="border-y border-[var(--scheng-line)] bg-white/[0.02] px-5 py-20"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Os nossos valores
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-[var(--scheng-line)] bg-[var(--scheng-line)] sm:grid-cols-2 lg:grid-cols-4">
          {values.map(([n, title, text], i) => (
            <Reveal key={n} delay={90 * i}>
              <div className="h-full bg-[var(--scheng-ink)] p-6">
                <span className="text-xs font-bold tracking-[0.2em] text-[var(--scheng-gold)]">
                  {n}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm text-[var(--scheng-muted)]">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SchengContact() {
  return (
    <section id="contacto" className="px-5 py-24">
      <Reveal>
        <div className="mx-auto max-w-3xl rounded-3xl border border-[var(--scheng-gold)]/25 bg-gradient-to-b from-[var(--scheng-gold)]/10 to-transparent p-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Vamos construir algo juntos
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[var(--scheng-muted)]">
            Parcerias, projetos ou dúvidas sobre as empresas do grupo — respondemos a todos os
            contactos.
          </p>
          <a
            href={`mailto:${email}`}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--scheng-gold-deep)] to-[var(--scheng-gold)] px-8 py-3.5 text-sm font-bold text-[var(--scheng-ink-deep)] transition-transform hover:-translate-y-0.5"
          >
            <Mail className="size-4" />
            {email}
          </a>
        </div>
      </Reveal>
    </section>
  );
}

export function SchengFooter() {
  return (
    <footer className="border-t border-[var(--scheng-line)] px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <img
          src={logoGold.url}
          alt="Scheng Holdings"
          className="h-12 w-auto mix-blend-lighten"
          width={180}
          height={48}
        />
        <p className="text-xs text-[var(--scheng-muted)]">
          © {new Date().getFullYear()} Scheng Holdings. Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-3">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="grid size-10 place-items-center rounded-full border border-[var(--scheng-line)] text-[var(--scheng-muted)] transition-colors hover:text-[var(--scheng-gold)]"
          >
            <Instagram className="size-4" />
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid size-10 place-items-center rounded-full border border-[var(--scheng-line)] text-[var(--scheng-muted)] transition-colors hover:text-[var(--scheng-gold)]"
          >
            <Linkedin className="size-4" />
          </a>
          <a
            href={`mailto:${email}`}
            aria-label="Email"
            className="grid size-10 place-items-center rounded-full border border-[var(--scheng-line)] text-[var(--scheng-muted)] transition-colors hover:text-[var(--scheng-gold)]"
          >
            <Mail className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
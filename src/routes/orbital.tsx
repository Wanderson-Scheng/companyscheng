import { createFileRoute } from "@tanstack/react-router";
import { OrbitalFooter } from "@/components/orbital/footer";
import { OrbitalProvider, useOrbital } from "@/components/orbital/i18n";
import { OrbitalNav } from "@/components/orbital/nav";
import {
  OrbitalContext,
  OrbitalCta,
  OrbitalGallery,
  OrbitalHero,
  OrbitalMethod,
  OrbitalProblem,
  OrbitalStatus,
  OrbitalTeam,
  OrbitalTech,
} from "@/components/orbital/sections";

const title = "Scheng Orbital System";
const description =
  "Interfaces criogénicas para transferência de propelente em órbita. Empresa incubada no ESA BIC Centro, em Vila de Rei, Portugal.";
const url = "https://www.companyscheng.com/orbital";
const image = "https://www.companyscheng.com/landing/orbital-system/module-detail.webp";

export const Route = createFileRoute("/orbital")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ],
    links: [
      { rel: "canonical", href: url },
      // Preload só aqui: a Inter e a JetBrains Mono são desta página, e
      // carregá-las no __root faria o GuiaFin e as páginas do grupo descarregar
      // fontes que não usam.
      {
        rel: "preload",
        href: "/fonts/inter-latin.woff2",
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
      {
        rel: "preload",
        href: "/fonts/jetbrains-mono-latin.woff2",
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Scheng Orbital System",
          url,
          description,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Vila de Rei",
            addressCountry: "PT",
          },
          parentOrganization: {
            "@type": "Organization",
            name: "Scheng Holdings",
            url: "https://www.companyscheng.com/scheng",
          },
        }),
      },
    ],
  }),
  component: OrbitalPage,
});

function OrbitalPage() {
  return (
    <OrbitalProvider>
      <OrbitalShell />
    </OrbitalProvider>
  );
}

/** Separado do provider para poder ler o tema escolhido e aplicá-lo à casca. */
function OrbitalShell() {
  const { theme } = useOrbital();

  return (
    <div
      className="orb min-h-dvh bg-[var(--orb-bg)] font-sans antialiased transition-colors duration-500"
      data-orb-theme={theme}
    >
      <OrbitalNav />
      <main>
        <OrbitalHero />
        <OrbitalProblem />
        <OrbitalTech />
        <OrbitalGallery />
        <OrbitalMethod />
        <OrbitalStatus />
        <OrbitalContext />
        <OrbitalTeam />
        <OrbitalCta />
      </main>
      <OrbitalFooter />
    </div>
  );
}

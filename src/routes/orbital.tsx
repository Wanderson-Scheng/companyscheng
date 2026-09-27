import { createFileRoute } from "@tanstack/react-router";
import { OrbitalFooter } from "@/components/orbital/footer";
import { OrbitalProvider } from "@/components/orbital/i18n";
import { OrbitalNav } from "@/components/orbital/nav";
import {
  OrbitalCompany,
  OrbitalContext,
  OrbitalCta,
  OrbitalFounder,
  OrbitalGallery,
  OrbitalHero,
  OrbitalProblem,
  OrbitalProjects,
  OrbitalStatus,
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

function OrbitalShell() {
  return (
    <div className="orb min-h-dvh bg-[var(--orb-bg)] antialiased">
      <OrbitalNav />
      <main>
        <OrbitalHero />
        <OrbitalProblem />
        <OrbitalCompany />
        <OrbitalTech />
        <OrbitalProjects />
        <OrbitalGallery />
        <OrbitalStatus />
        <OrbitalFounder />
        <OrbitalContext />
        <OrbitalCta />
      </main>
      <OrbitalFooter />
    </div>
  );
}

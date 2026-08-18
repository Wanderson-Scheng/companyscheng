import { createFileRoute } from "@tanstack/react-router";
import { Footer3D } from "@/components/3dscheng/footer";
import { Hero3D } from "@/components/3dscheng/hero";
import { I18nProvider3D } from "@/components/3dscheng/i18n";
import { Nav3D } from "@/components/3dscheng/nav";
import {
  Brands,
  Downloads3D,
  Faq3D,
  Features3D,
  FinalCta3D,
  Pricing3D,
  Screenshots3D,
  Why3DScheng,
} from "@/components/3dscheng/sections";

const title = "3D Scheng — Scheng Holdings";
const description =
  "Software profissional de gestão de farms de impressoras 3D. Monitoramento em tempo real, controlo de custos, manutenção preventiva. 100% offline, Mac e Windows.";

export const Route = createFileRoute("/3dscheng")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { property: "og:image", content: "https://www.companyscheng.com/logos/3dscheng-text.png" },
      { name: "twitter:image", content: "https://www.companyscheng.com/logos/3dscheng-text.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.companyscheng.com/3dscheng" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "3D Scheng",
          applicationCategory: "BusinessApplication",
          operatingSystem: "macOS, Windows",
          description,
          offers: {
            "@type": "AggregateOffer",
            lowPrice: "0",
            highPrice: "199.99",
            priceCurrency: "EUR",
            offerCount: "4",
          },
        }),
      },
    ],
  }),
  component: ThreeDSchengPage,
});

function ThreeDSchengPage() {
  return (
    <I18nProvider3D>
      <div className="min-h-dvh bg-background font-sans antialiased">
        <Nav3D />
        <main>
          <Hero3D />
          <Brands />
          <Features3D />
          <Screenshots3D />
          <Why3DScheng />
          <Pricing3D />
          <Downloads3D />
          <Faq3D />
          <FinalCta3D />
        </main>
        <Footer3D />
      </div>
    </I18nProvider3D>
  );
}

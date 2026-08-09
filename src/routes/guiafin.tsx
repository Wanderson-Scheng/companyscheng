import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { Nav } from "@/components/landing/nav";
import {
  AppStoreReviews,
  Faq,
  Features,
  FinalCta,
  Screens,
  Testimonials,
  WhyGuiaFin,
} from "@/components/landing/sections";
import { I18nProvider } from "@/lib/i18n";

const title = "GuiaFin — Finanças pessoais offline, privadas e sem assinatura";
const description =
  "Controle rendimentos, despesas, parcelamentos, contas, cartões e metas de poupança no seu telemóvel. Offline total, dados locais, proteção por PIN, sem anúncios.";

export const Route = createFileRoute("/guiafin")({
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
    ],
    links: [{ rel: "canonical", href: "/guiafin" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "GuiaFin",
          applicationCategory: "FinanceApplication",
          operatingSystem: "iOS",
          description,
          offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
        }),
      },
    ],
  }),
  component: GuiaFinPage,
});

function GuiaFinPage() {
  return (
    <I18nProvider>
      <div className="min-h-dvh bg-background font-sans antialiased">
        <Nav />
        <main>
          <Hero />
          <Features />
          <WhyGuiaFin />
          <Screens />
          <AppStoreReviews />
          <Testimonials />
          <Faq />
          <FinalCta />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}

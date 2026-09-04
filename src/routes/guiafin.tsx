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
  WhyGuiaFin,
} from "@/components/landing/sections";
import { I18nProvider } from "@/lib/i18n";

const title = "GuiaFin — Finanças Pessoais";
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
      // logo.webp nunca existiu em public/ — o ficheiro chama-se guiafin-logo.webp.
      // A partilha da página em WhatsApp, LinkedIn ou X vinha sem imagem nenhuma,
      // porque o og:image devolvia 404.
      { property: "og:image", content: "https://www.companyscheng.com/guiafin/guiafin-logo.webp" },
      {
        name: "twitter:image",
        content: "https://www.companyscheng.com/guiafin/guiafin-logo.webp",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.companyscheng.com/guiafin" }],
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
          // A app custa 4,99 €. Dizer "0" aqui é o que o Google lê para decidir
          // se mostra "Grátis" no resultado de pesquisa — e depois a pessoa
          // chega à App Store e encontra um preço.
          offers: { "@type": "Offer", price: "4.99", priceCurrency: "EUR" },
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
          <Faq />
          <FinalCta />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}

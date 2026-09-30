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
  "App gratuita de finanças pessoais para iPhone e iPad. Rendimentos, despesas, prestações, contas, cartões e metas no seu telemóvel. Funciona sem internet, protegida por PIN, sem anúncios e sem recolha de dados.";

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
      // O og:image era o icone quadrado da app. Quem partilhava a pagina no
      // WhatsApp ou no LinkedIn via um quadrado com o logotipo e mais nada — sem
      // titulo, sem preco, sem um unico ecra da aplicacao. Passa a ser um cartao
      // 1200x630 (o formato que estas redes recortam sem cortar nada) com o
      // nome, a frase, o preco e o ecra inicial.
      { property: "og:image", content: "https://www.companyscheng.com/guiafin/og-guiafin.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "GuiaFin — app gratuita de finanças pessoais para iPhone e iPad",
      },
      {
        name: "twitter:image",
        content: "https://www.companyscheng.com/guiafin/og-guiafin.png",
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
          // A app é gratuita na App Store. O Google lê este campo para decidir
          // se mostra "Grátis" no resultado de pesquisa, por isso tem de
          // acompanhar o preço real da app.
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
          <Faq />
          <FinalCta />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}

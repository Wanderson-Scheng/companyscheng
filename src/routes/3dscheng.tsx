import { createFileRoute } from "@tanstack/react-router";
import { Footer3D } from "@/components/3dscheng/footer";
import { Hero3D } from "@/components/3dscheng/hero";
import { I18nProvider3D } from "@/components/3dscheng/i18n";
import { Maintenance3D } from "@/components/3dscheng/maintenance";
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

/**
 * O 3D Scheng deixou de ser vendido, por isso a página está em manutenção:
 * mostra só o aviso, sai do sitemap e vai com `noindex`.
 *
 * O resto do conteúdo continua no código, atrás desta bandeira, para a página
 * poder voltar como vitrine. Se voltar:
 *  - rever o texto, que ainda fala de planos, trial de 30 dias, licenciamento
 *    e descarga, que já não se aplicam;
 *  - voltar a pôr `/3dscheng` em sitemap[.]xml.ts, onde esta rota é listada à
 *    mão e por isso não acompanha a bandeira;
 *  - tirar `inProgress` do produto 3d-scheng em ventures.ts.
 */
const IN_MAINTENANCE = true;

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
      ...(IN_MAINTENANCE ? [{ name: "robots", content: "noindex" }] : []),
    ],
    links: [{ rel: "canonical", href: "https://www.companyscheng.com/3dscheng" }],
    scripts: IN_MAINTENANCE
      ? []
      : [
          {
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "3D Scheng",
              applicationCategory: "BusinessApplication",
              operatingSystem: "macOS, Windows",
              description,
              // Sem `offers`: o produto não é vendido, e uma oferta de 0 a 199,99 EUR
              // é o que o Google leria para mostrar preço no resultado de pesquisa.
            }),
          },
        ],
  }),
  component: ThreeDSchengPage,
});

function ThreeDSchengPage() {
  if (IN_MAINTENANCE) {
    return (
      <I18nProvider3D>
        <div className="min-h-dvh bg-background font-sans antialiased">
          <Maintenance3D />
        </div>
      </I18nProvider3D>
    );
  }

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

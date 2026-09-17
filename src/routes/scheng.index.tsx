import { createFileRoute } from "@tanstack/react-router";
import { SchengHero, SchengHighlights } from "@/components/scheng/sections";

const title = "Scheng Holdings";
const description =
  "A Scheng Holdings detém e desenvolve três empresas independentes em Portugal: aeroespacial, comercial e tecnológica.";
const url = "https://www.companyscheng.com/scheng";

export const Route = createFileRoute("/scheng/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { property: "og:image", content: "https://www.companyscheng.com/logos/logo-gold.png" },
      { name: "twitter:image", content: "https://www.companyscheng.com/logos/logo-gold.png" },
    ],
    links: [{ rel: "canonical", href: url }],
  }),
  component: SchengHome,
});

function SchengHome() {
  return (
    <>
      <SchengHero />
      <SchengHighlights />
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { SchengHero, SchengHighlights } from "@/components/scheng/sections";

const title = "Scheng Holdings — Aeroespacial, comércio e tecnologia";
const description =
  "A Scheng Holdings detém e desenvolve quatro empresas independentes em Portugal: aeroespacial, comercial, tecnológica e artesanal.";
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

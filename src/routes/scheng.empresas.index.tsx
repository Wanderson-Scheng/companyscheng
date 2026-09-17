import { createFileRoute } from "@tanstack/react-router";
import { SchengVentures } from "@/components/scheng/sections";

const title = "Scheng Holdings";
const description =
  "Scheng Orbital System, Scheng Imports e Scheng Technology: as três empresas do grupo e o que cada uma faz.";
const url = "https://www.companyscheng.com/scheng/empresas";

export const Route = createFileRoute("/scheng/empresas/")({
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
  component: SchengVentures,
});

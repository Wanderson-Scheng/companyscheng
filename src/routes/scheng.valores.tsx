import { createFileRoute } from "@tanstack/react-router";
import { SchengValues } from "@/components/scheng/sections";

const title = "Valores — Scheng Holdings";
const description =
  "Simplicidade, confiança, autonomia e excelência: os princípios que orientam o trabalho de todas as empresas do grupo Scheng.";
const url = "https://www.companyscheng.com/scheng/valores";

export const Route = createFileRoute("/scheng/valores")({
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
  component: SchengValues,
});
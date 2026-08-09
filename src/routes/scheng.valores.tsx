import { createFileRoute } from "@tanstack/react-router";
import { SchengValues } from "@/components/scheng/sections";

const title = "Valores — Scheng Holdings";
const description =
  "Simplicidade, confiança, autonomia e excelência: os princípios que orientam o trabalho de todas as empresas do grupo Scheng.";

export const Route = createFileRoute("/scheng/valores")({
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
  }),
  component: SchengValues,
});
import { createFileRoute } from "@tanstack/react-router";
import { SchengVentures } from "@/components/scheng/sections";

const title = "Empresas — Scheng Holdings";
const description =
  "Scheng Orbital System, Scheng Imports, Scheng Technology e Scheng Atelier: as quatro empresas do grupo e o que cada uma faz.";

export const Route = createFileRoute("/scheng/empresas")({
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
  component: SchengVentures,
});
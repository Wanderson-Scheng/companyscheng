import { createFileRoute } from "@tanstack/react-router";
import { SchengAbout, SchengFounder } from "@/components/scheng/sections";

const title = "O grupo — Scheng Holdings";
const description =
  "Como a Scheng Holdings está organizada e quem a fundou: estratégia, propriedade intelectual e recursos partilhados entre quatro empresas autónomas.";
const url = "https://www.companyscheng.com/scheng/grupo";

export const Route = createFileRoute("/scheng/grupo")({
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
  component: () => (
    <>
      <SchengAbout />
      <SchengFounder />
    </>
  ),
});

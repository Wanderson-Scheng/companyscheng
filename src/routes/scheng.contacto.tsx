import { createFileRoute } from "@tanstack/react-router";
import { SchengContact } from "@/components/scheng/sections";

const title = "Contacto — Scheng Holdings";
const description =
  "Fale com a Scheng Holdings para parcerias, propostas ou perguntas sobre qualquer empresa do grupo. Respondemos a todos os contactos.";
const url = "https://www.companyscheng.com/scheng/contacto";

export const Route = createFileRoute("/scheng/contacto")({
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
  component: SchengContact,
});

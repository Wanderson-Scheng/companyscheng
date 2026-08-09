import { createFileRoute } from "@tanstack/react-router";
import { SchengContact } from "@/components/scheng/sections";

const title = "Contacto — Scheng Holdings";
const description =
  "Fale com a Scheng Holdings para parcerias, propostas ou perguntas sobre qualquer empresa do grupo. Respondemos a todos os contactos.";

export const Route = createFileRoute("/scheng/contacto")({
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
  component: SchengContact,
});
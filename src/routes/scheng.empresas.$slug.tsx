import { createFileRoute, notFound } from "@tanstack/react-router";
import { SchengVentureDetail } from "@/components/scheng/venture-detail";
import { getVenture } from "@/components/scheng/ventures";

export const Route = createFileRoute("/scheng/empresas/$slug")({
  loader: ({ params }) => {
    const venture = getVenture(params.slug);
    if (!venture) throw notFound();
    return { name: venture.name, slug: venture.slug };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Empresa não encontrada — Scheng Holdings" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.name} — Scheng Holdings`;
    const description = `${loaderData.name}, empresa do grupo Scheng Holdings: área de actuação, produtos e como falar connosco.`;
    return {
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
    };
  },
  component: VentureRoute,
  notFoundComponent: VentureNotFound,
});

function VentureRoute() {
  const { slug } = Route.useParams();
  const venture = getVenture(slug);
  if (!venture) return <VentureNotFound />;
  return <SchengVentureDetail venture={venture} />;
}

function VentureNotFound() {
  return (
    <section className="px-5 py-24 text-center">
      <h1 className="text-2xl font-bold text-[var(--scheng-fg)]">Empresa não encontrada</h1>
    </section>
  );
}
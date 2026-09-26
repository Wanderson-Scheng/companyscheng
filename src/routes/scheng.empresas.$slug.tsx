import { createFileRoute, notFound } from "@tanstack/react-router";
import { SchengVentureDetail } from "@/components/scheng/venture-detail";
import { getVenture } from "@/components/scheng/ventures";

export const Route = createFileRoute("/scheng/empresas/$slug")({
  loader: ({ params }) => {
    const venture = getVenture(params.slug);
    if (!venture) throw notFound();
    return { name: venture.name, slug: venture.slug, inProgress: venture.inProgress ?? false };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Scheng Holdings" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = "Scheng Holdings";
    const description = `${loaderData.name}, empresa do grupo Scheng Holdings: área de actuação, produtos e como falar connosco.`;
    const url = `https://www.companyscheng.com/scheng/empresas/${loaderData.slug}`;
    return {
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
        // Uma página em construção não deve ser indexada: quem chegasse por
        // pesquisa caía numa página que ainda não está pronta para ser vista.
        ...(loaderData.inProgress ? [{ name: "robots", content: "noindex" }] : []),
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: loaderData.name,
            url,
            description,
            parentOrganization: {
              "@type": "Organization",
              name: "Scheng Holdings",
              url: "https://www.companyscheng.com/scheng",
            },
          }),
        },
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

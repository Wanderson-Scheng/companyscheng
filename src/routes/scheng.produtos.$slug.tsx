import { createFileRoute, notFound } from "@tanstack/react-router";
import { SchengProductDetail } from "@/components/scheng/product-detail";
import { getProduct } from "@/components/scheng/ventures";

export const Route = createFileRoute("/scheng/produtos/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { name: product.name, parentName: product.parentName, slug: params.slug };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Produto não encontrado — Scheng Holdings" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `${loaderData.name} — ${loaderData.parentName}`;
    const description = `${loaderData.name}, produto da ${loaderData.parentName}, grupo Scheng Holdings: o que faz, principais características e contacto.`;
    const url = `https://www.companyscheng.com/scheng/produtos/${loaderData.slug}`;
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
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: loaderData.name,
            url,
            description,
            brand: { "@type": "Brand", name: loaderData.parentName },
          }),
        },
      ],
    };
  },
  component: ProductRoute,
  notFoundComponent: ProductNotFound,
});

function ProductRoute() {
  const { slug } = Route.useParams();
  const product = getProduct(slug);
  if (!product) return <ProductNotFound />;
  return <SchengProductDetail product={product} />;
}

function ProductNotFound() {
  return (
    <section className="px-5 py-24 text-center">
      <h1 className="text-2xl font-bold text-[var(--scheng-fg)]">Produto não encontrado</h1>
    </section>
  );
}

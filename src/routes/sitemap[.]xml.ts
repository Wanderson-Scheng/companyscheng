import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { ventures } from "@/components/scheng/ventures";

const BASE_URL = "https://www.companyscheng.com";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        // Fonte única do sitemap. Havia também um public/sitemap.xml escrito à
        // mão que, sendo ficheiro estático, era servido à frente desta rota e
        // deixava-a morta: as páginas do grupo nunca chegaram ao sitemap e as
        // /privacy e /terms iam lá listadas apesar de serem `noindex`.
        const entries: SitemapEntry[] = [
          { path: "/scheng", changefreq: "weekly", priority: "1.0" },
          { path: "/scheng/grupo", changefreq: "monthly", priority: "0.8" },
          { path: "/scheng/empresas", changefreq: "monthly", priority: "0.8" },
          { path: "/scheng/valores", changefreq: "yearly", priority: "0.5" },
          { path: "/scheng/contacto", changefreq: "yearly", priority: "0.7" },
          { path: "/guiafin", changefreq: "monthly", priority: "0.8" },
          { path: "/3dscheng", changefreq: "monthly", priority: "0.8" },
        ];

        // Páginas marcadas `inProgress` ficam fora do sitemap e vão com
        // `noindex`: enquanto estiverem em construção não são para ser
        // encontradas. Tirar a marca em ventures.ts solta-as nos dois sítios.
        for (const venture of ventures) {
          if (!venture.inProgress) {
            entries.push({
              path: `/scheng/empresas/${venture.slug}`,
              changefreq: "monthly",
              priority: "0.7",
            });
          }
          for (const product of venture.products ?? []) {
            if (product.inProgress) continue;
            entries.push({
              path: `/scheng/produtos/${product.slug}`,
              changefreq: "monthly",
              priority: "0.6",
            });
          }
        }

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});

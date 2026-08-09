import { createFileRoute, Outlet } from "@tanstack/react-router";
import { SchengFooter, SchengNav } from "@/components/scheng/sections";
import { SchengProvider, useScheng } from "@/components/scheng/context";

const title = "Scheng Holdings — Tecnologia, engenharia e produto";
const description =
  "A Scheng Holdings reúne quatro braços independentes: engenharia aeroespacial, comércio de hardware, tecnologia e produção artesanal.";
const url = "https://guiafin-landing-pages.lovable.app/scheng";

export const Route = createFileRoute("/scheng")({
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
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Scheng Holdings",
          url,
          email: "Info@companyscheng.com",
          description,
          sameAs: [
            "https://www.instagram.com/guiafin_",
            "https://www.linkedin.com/in/wanderson-scheng-769b72379",
          ],
        }),
      },
    ],
  }),
  component: SchengPage,
});

function SchengPage() {
  return (
    <SchengProvider>
      <SchengShell />
    </SchengProvider>
  );
}

function SchengShell() {
  const { theme } = useScheng();
  return (
    <div
      className="scheng min-h-dvh bg-[var(--scheng-ink)] font-sans antialiased transition-colors duration-500 selection:bg-[var(--scheng-gold)]/30"
      data-scheng-theme={theme}
    >
      <SchengNav />
      <main>
        <Outlet />
      </main>
      <SchengFooter />
    </div>
  );
}
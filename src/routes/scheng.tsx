import { createFileRoute, Outlet } from "@tanstack/react-router";
import { SchengFooter, SchengNav } from "@/components/scheng/sections";
import { SchengProvider, useScheng } from "@/components/scheng/context";

const description =
  "A Scheng Holdings reúne quatro braços independentes: engenharia aeroespacial, comércio de hardware, tecnologia e produção artesanal.";
const url = "https://www.companyscheng.com/scheng";

export const Route = createFileRoute("/scheng")({
  head: () => ({
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
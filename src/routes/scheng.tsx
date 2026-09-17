import { createFileRoute, Outlet, useMatches } from "@tanstack/react-router";
import { SchengProvider, useScheng } from "@/components/scheng/context";
import { SchengFooter, SchengNav } from "@/components/scheng/sections";

const description =
  "A Scheng Holdings reúne três braços independentes: engenharia aeroespacial, comércio de hardware e tecnologia.";
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
  const matches = useMatches();
  const routeKey = matches[matches.length - 1]?.id ?? "";
  return (
    <div
      className="scheng min-h-dvh bg-[var(--scheng-ink)] font-sans antialiased transition-colors duration-500 selection:bg-[var(--scheng-gold)]/30"
      data-scheng-theme={theme}
    >
      <SchengNav />
      <main key={routeKey} className="route-transition-enter">
        <Outlet />
      </main>
      <SchengFooter />
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";

/**
 * Página escondida do piloto DETRAVO (GPS para camiões): não está no menu nem no
 * sitemap e vai com `noindex`. Serve para partilhar o link com quem testa.
 *
 * O servidor corre num PC através de um túnel temporário do Cloudflare, cujo
 * endereço muda a cada arranque. Quando mudar, actualiza APP_URL.
 */
const APP_URL = "https://attempt-conclusion-asbestos-mileage.trycloudflare.com";

const title = "DETRAVO — piloto";

export const Route = createFileRoute("/detravo")({
  head: () => ({
    meta: [
      { title },
      { name: "robots", content: "noindex, nofollow" },
      { name: "referrer", content: "no-referrer" },
    ],
  }),
  component: DetravoPage,
});

function DetravoPage() {
  return (
    <div className="mx-auto flex min-h-[80vh] max-w-md flex-col justify-center px-5 py-16">
      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        Piloto privado
      </p>
      <h1 className="mt-2 text-3xl font-extrabold tracking-tight">DETRAVO</h1>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        Rotas para camiões com fechos de estrada em tempo real. Versão de teste: pode falhar ou
        estar desligada.
      </p>

      <a
        href={APP_URL}
        rel="noreferrer"
        className="mt-8 inline-flex h-12 items-center justify-center rounded-lg bg-foreground px-6 text-sm font-semibold text-background"
      >
        Abrir a aplicação
      </a>

      <div className="mt-10 space-y-2 text-sm leading-relaxed text-muted-foreground">
        <h2 className="font-bold text-foreground">No iPhone</h2>
        <ol className="list-decimal space-y-1 pl-5">
          <li>Abre esta página no Safari e carrega em «Abrir a aplicação».</li>
          <li>Carrega em Partilhar e depois em «Adicionar ao ecrã principal».</li>
          <li>Abre a DETRAVO pelo ícone e permite a localização.</li>
        </ol>
      </div>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";

const title = "Política de Privacidade — Scheng Holdings";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [{ title }, { name: "robots", content: "noindex" }],
    links: [{ rel: "canonical", href: "https://www.companyscheng.com/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="text-3xl font-extrabold tracking-tight">Política de Privacidade</h1>
      <p className="mt-2 text-sm text-muted-foreground">Última atualização: 7 de julho de 2026</p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
        <p>
          A Scheng Holdings e os seus produtos (GuiaFin, 3D Scheng) não recolhem, armazenam nem
          transmitem quaisquer dados pessoais. Toda a informação permanece exclusivamente no seu
          dispositivo.
        </p>

        <section>
          <h2 className="text-lg font-bold text-foreground">1. Dados recolhidos</h2>
          <p className="mt-2">
            Os nossos produtos não recolhem nenhum dado pessoal. As aplicações funcionam
            inteiramente offline, sem servidores externos, bases de dados, APIs de terceiros ou
            serviços de analytics.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">2. Armazenamento local</h2>
          <p className="mt-2">
            A informação inserida nas aplicações é guardada localmente no seu dispositivo. Os dados
            nunca saem do seu dispositivo, nunca são transmitidos externamente e nunca são
            partilhados com terceiros. Os dados são removidos ao desinstalar a aplicação.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">3. Serviços de terceiros</h2>
          <p className="mt-2">
            Não utilizamos integrações de terceiros, incluindo analytics, redes de publicidade,
            autenticação externa ou sincronização em cloud.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">4. Segurança</h2>
          <p className="mt-2">
            As aplicações utilizam proteção por PIN/palavra-passe para prevenir acessos não
            autorizados. As credenciais são armazenadas localmente e nunca transmitidas.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">5. Dados de crianças</h2>
          <p className="mt-2">
            Os nossos produtos não se destinam a crianças com idade inferior a 13 anos.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">6. Alterações a esta política</h2>
          <p className="mt-2">
            Quaisquer atualizações a esta política serão publicadas nesta página com a data revista.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">7. Contacto</h2>
          <p className="mt-2">
            Para questões sobre privacidade, contacte-nos em{" "}
            <a href="mailto:Wanderson@companyscheng.com" className="text-primary hover:underline">
              Wanderson@companyscheng.com
            </a>
          </p>
        </section>

        <p className="pt-4 text-xs">
          © {new Date().getFullYear()} Scheng Holdings. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
}

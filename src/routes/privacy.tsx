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
      <p className="mt-2 text-sm text-muted-foreground">
        Última atualização: 29 de setembro de 2026
      </p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
        <p>
          A Scheng Holdings e os seus produtos (GuiaFin, 3D Scheng) não recolhem, armazenam nem
          transmitem quaisquer dados pessoais para os nossos servidores — não temos servidores. Toda
          a informação permanece no seu dispositivo, exceto se ativar a sincronização iCloud do
          GuiaFin, descrita no ponto 3.
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
            A informação inserida nas aplicações é guardada localmente no seu dispositivo e nunca é
            partilhada connosco nem com terceiros. Ao desinstalar a aplicação, os dados guardados no
            dispositivo são removidos. Se tiver ativado a sincronização iCloud do GuiaFin, existe
            também uma cópia na sua conta iCloud, que não é apagada ao desinstalar — pode removê-la
            na própria aplicação, em «Recomeçar do zero».
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">3. Serviços de terceiros</h2>
          <p className="mt-2">
            Não utilizamos analytics, redes de publicidade nem autenticação externa. O GuiaFin
            oferece sincronização iCloud, desligada por omissão: se a ativar, os seus dados são
            guardados na sua própria conta iCloud, gerida pela Apple, para ficarem disponíveis nos
            seus dispositivos. Essa cópia é sua — nunca temos acesso a ela — e a funcionalidade pode
            ser desligada a qualquer momento.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">4. Segurança</h2>
          <p className="mt-2">
            As aplicações utilizam proteção por PIN e, opcionalmente, Face ID ou Touch ID, para
            prevenir acessos não autorizados. O PIN é guardado no dispositivo sob a forma de um
            resumo criptográfico, nunca é transmitido e nunca é incluído nas cópias de segurança nem
            na sincronização iCloud.
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

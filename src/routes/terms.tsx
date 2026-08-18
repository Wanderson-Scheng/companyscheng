import { createFileRoute } from "@tanstack/react-router";

const title = "Termos de Utilização — Scheng Holdings";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [{ title }, { name: "robots", content: "noindex" }],
    links: [{ rel: "canonical", href: "https://www.companyscheng.com/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="text-3xl font-extrabold tracking-tight">Termos de Utilização</h1>
      <p className="mt-2 text-sm text-muted-foreground">Última atualização: 7 de julho de 2026</p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-lg font-bold text-foreground">1. Aceitação dos termos</h2>
          <p className="mt-2">
            Ao utilizar os produtos da Scheng Holdings (incluindo GuiaFin e 3D Scheng), concorda com
            estes termos de utilização. Se não concordar, não utilize os nossos produtos.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">2. Licença de utilização</h2>
          <p className="mt-2">
            Concedemos-lhe uma licença pessoal, não exclusiva e intransmissível para utilizar os
            nossos produtos de acordo com o plano adquirido. A licença é válida para uso pessoal ou
            comercial conforme o plano selecionado.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">3. Período de teste</h2>
          <p className="mt-2">
            Os nossos produtos podem incluir um período de teste gratuito de 30 dias com acesso a
            todas as funcionalidades. Após o período de teste, é necessário adquirir uma licença
            para continuar a utilizar o produto.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">4. Pagamentos e reembolsos</h2>
          <p className="mt-2">
            Os pagamentos são processados através da plataforma LemonSqueezy. As subscrições podem
            ser canceladas a qualquer momento. Reembolsos são tratados caso a caso — contacte-nos
            dentro de 14 dias após a compra.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">5. Propriedade intelectual</h2>
          <p className="mt-2">
            Todo o conteúdo, código-fonte, design e marcas registadas são propriedade da Scheng
            Holdings. Não é permitido copiar, modificar, distribuir ou fazer engenharia reversa dos
            nossos produtos.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">6. Limitação de responsabilidade</h2>
          <p className="mt-2">
            Os nossos produtos são fornecidos &ldquo;tal como estão&rdquo;. Não garantimos que serão
            ininterruptos ou livres de erros. A Scheng Holdings não se responsabiliza por quaisquer
            danos diretos ou indiretos resultantes da utilização dos produtos.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">7. Alterações aos termos</h2>
          <p className="mt-2">
            Reservamo-nos o direito de alterar estes termos a qualquer momento. As alterações entram
            em vigor após publicação nesta página.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">8. Lei aplicável</h2>
          <p className="mt-2">
            Estes termos são regidos pela legislação portuguesa. Qualquer litígio será resolvido nos
            tribunais competentes de Portugal.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">9. Contacto</h2>
          <p className="mt-2">
            Para questões sobre estes termos, contacte-nos em{" "}
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

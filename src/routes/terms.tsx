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
      <p className="mt-2 text-sm text-muted-foreground">Última atualização: 8 de outubro de 2026</p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-lg font-bold text-foreground">1. Aceitação dos termos</h2>
          <p className="mt-2">
            Ao utilizar os produtos da Scheng Holdings (incluindo o GuiaFin), concorda com estes
            termos de utilização. Se não concordar, não utilize os nossos produtos.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">2. Licença de utilização</h2>
          <p className="mt-2">
            Concedemos-lhe uma licença pessoal, não exclusiva e intransmissível para utilizar os
            nossos produtos de acordo com o produto adquirido. A licença é válida para uso pessoal
            ou comercial conforme o produto adquirido.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">3. Pagamentos e reembolsos</h2>
          <p className="mt-2">
            Os produtos pagos são adquiridos através da loja onde estão disponíveis, por exemplo a
            App Store. O pagamento e os reembolsos seguem as regras dessa loja.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">4. Propriedade intelectual</h2>
          <p className="mt-2">
            Todo o conteúdo, código-fonte, design e marcas registadas são propriedade da Scheng
            Holdings. Não é permitido copiar, modificar, distribuir ou fazer engenharia reversa dos
            nossos produtos.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">5. Limitação de responsabilidade</h2>
          <p className="mt-2">
            Os nossos produtos são fornecidos &ldquo;tal como estão&rdquo;. Não garantimos que serão
            ininterruptos ou livres de erros. A Scheng Holdings não se responsabiliza por quaisquer
            danos diretos ou indiretos resultantes da utilização dos produtos.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">6. Alterações aos termos</h2>
          <p className="mt-2">
            Reservamo-nos o direito de alterar estes termos a qualquer momento. As alterações entram
            em vigor após publicação nesta página.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">7. Lei aplicável</h2>
          <p className="mt-2">
            Estes termos são regidos pela legislação portuguesa. Qualquer litígio será resolvido nos
            tribunais competentes de Portugal.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground">8. Contacto</h2>
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

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

/**
 * Dicionário da Scheng Orbital System.
 *
 * O que aqui está é o que a empresa pode dizer em público: o problema, a
 * abordagem ao nível do conceito, o método e o estádio de maturidade.
 * Materiais, dimensões, parâmetros de processo e resultados de simulação
 * ficam deliberadamente de fora — são o núcleo técnico da empresa e não têm
 * de estar num site.
 *
 * Duas línguas, como o site da holding. Inglês é a língua franca do sector,
 * por isso não é opcional aqui.
 */

export const orbLocales = ["pt", "en"] as const;
export type OrbLocale = (typeof orbLocales)[number];

type Dict = Record<string, string>;

const pt: Dict = {
  "nav.tech": "Tecnologia",
  "nav.status": "Estado",
  "nav.team": "Equipa",
  "nav.contact": "Contacto",
  "nav.cta": "Falar connosco",
  "nav.menu": "Abrir menu",
  "nav.lang": "Alternar idioma",
  "nav.theme": "Alternar tema",

  "hero.title": "Interfaces criogénicas para a próxima geração de infraestrutura orbital.",
  "hero.sub":
    "Desenvolvemos a ligação física por onde o propelente criogénico passa de um veículo para outro, em órbita.",
  "hero.trl": "TRL 3 · Prova de conceito",
  "hero.where": "Vila de Rei, Portugal",

  "problem.eyebrow": "O problema",
  "problem.title": "Um satélite sem propelente é um satélite perdido.",
  "problem.p1":
    "Quase todos os satélites em serviço foram construídos para nunca serem reabastecidos. Quando o propelente acaba, o veículo deixa de manter a órbita e a missão termina — mesmo com a eletrónica, os painéis e os instrumentos em pleno funcionamento.",
  "problem.p2":
    "Reabastecer em órbita muda essa equação. Mas para transferir propelente criogénico entre dois veículos é preciso uma ligação que aguente temperaturas extremas, que se acople sem intervenção humana e que não falhe em silêncio. É esse o componente em que trabalhamos.",

  "work.eyebrow": "O que fazemos",
  "work.title": "Um componente, levado a sério.",
  "w1.t": "Ligação sem adesivo",
  "w1.d":
    "A interface une materiais diferentes sem colas nem vedantes que envelheçam. A união é mecânica e mantém-se ao longo da gama térmica de operação.",
  "w2.t": "Comportamento em frio",
  "w2.d":
    "O conjunto é projectado para trabalhar em contacto com propelente criogénico, onde a maioria dos materiais e lubrificantes convencionais deixa de ser utilizável.",
  "w3.t": "Instrumentação integrada",
  "w3.d":
    "A interface leva sensores incorporados na própria estrutura, para que o estado da ligação possa ser lido durante a operação em vez de inferido depois.",

  "method.eyebrow": "Como trabalhamos",
  "method.title": "Projecto próprio, verificação própria.",
  "m1.t": "CAD paramétrico",
  "m1.d":
    "A geometria é gerada por código, não desenhada à mão. Mudar um requisito regenera o modelo inteiro e mantém o conjunto coerente.",
  "m2.t": "Simulação interna",
  "m2.d":
    "Corremos os nossos próprios modelos de elementos finitos para comparar soluções antes de haver peça física. Os resultados orientam o projecto; não substituem ensaio.",
  "m3.t": "Referencial ECSS",
  "m3.d":
    "O trabalho segue as normas do European Cooperation for Space Standardization, o referencial usado pelos programas espaciais europeus.",

  "status.eyebrow": "Onde estamos",
  "status.title": "TRL 3, a caminho de TRL 5.",
  "status.p1":
    "A tecnologia está em prova de conceito: a solução está definida e analisada, e os modelos apontam no sentido certo. Ainda não existe hardware fabricado nem campanha de ensaio físico — e, enquanto não existir, não apresentamos números como desempenho medido.",
  "status.p2":
    "O objectivo da fase em curso é chegar a validação em ambiente relevante, com peça real e ensaio criogénico.",
  "status.now": "Agora",
  "status.nowd": "Conceito formulado e analisado",
  "status.next": "A seguir",
  "status.nextd": "Fabrico e ensaio em ambiente relevante",

  "ctx.eyebrow": "Enquadramento",
  "ctx.title": "Onde este trabalho se insere.",
  "c1.t": "ESA BIC Centro",
  "c1.d": "Empresa incubada no Business Incubation Centre da Agência Espacial Europeia.",
  "c2.t": "InSPoC-1, Fase B2",
  "c2.d":
    "Participação no grupo de trabalho da ESA dedicado a interfaces de acoplamento e reabastecimento.",
  "c3.t": "ESA OSIP",
  "c3.d": "Ideia submetida ao Open Space Innovation Platform da Agência Espacial Europeia.",

  "team.eyebrow": "Equipa",
  "team.title": "Quem faz o trabalho.",
  "t1.n": "Wanderson Scheng",
  "t1.r": "Fundador · Arquitectura de sistema",
  "t2.n": "Beatriz Cabral",
  "t2.r": "Operações",
  "t3.n": "Alexander Serafim",
  "t3.r": "Engenharia mecânica",

  "talk.title": "Trabalha em transferência de propelente em órbita?",
  "talk.text":
    "Falamos com engenheiros, integradores e programas que trabalham em reabastecimento orbital. Escreva-nos e respondemos.",
  "talk.cta": "Falar com a equipa",

  "foot.group": "Uma empresa da Scheng Holdings",
  "foot.rights": "Todos os direitos reservados.",
};

const en: Dict = {
  "nav.tech": "Technology",
  "nav.status": "Status",
  "nav.team": "Team",
  "nav.contact": "Contact",
  "nav.cta": "Get in touch",
  "nav.menu": "Open menu",
  "nav.lang": "Switch language",
  "nav.theme": "Switch theme",

  "hero.title": "Cryogenic interfaces for the next generation of orbital infrastructure.",
  "hero.sub":
    "We develop the physical connection through which cryogenic propellant passes from one vehicle to another, in orbit.",
  "hero.trl": "TRL 3 · Proof of concept",
  "hero.where": "Vila de Rei, Portugal",

  "problem.eyebrow": "The problem",
  "problem.title": "A satellite out of propellant is a satellite lost.",
  "problem.p1":
    "Almost every satellite in service was built never to be refuelled. When the propellant runs out the vehicle can no longer hold its orbit and the mission ends — with the electronics, the arrays and the instruments still working perfectly.",
  "problem.p2":
    "Refuelling in orbit changes that equation. But transferring cryogenic propellant between two vehicles needs a connection that survives extreme temperatures, mates without a human present, and does not fail silently. That component is what we work on.",

  "work.eyebrow": "What we do",
  "work.title": "One component, taken seriously.",
  "w1.t": "Adhesive-free joint",
  "w1.d":
    "The interface joins dissimilar materials without glues or seals that age. The union is mechanical and holds across the operating temperature range.",
  "w2.t": "Behaviour in the cold",
  "w2.d":
    "The assembly is designed to work in contact with cryogenic propellant, where most conventional materials and lubricants stop being usable.",
  "w3.t": "Built-in instrumentation",
  "w3.d":
    "The interface carries sensors embedded in the structure itself, so the state of the joint can be read during operation rather than inferred afterwards.",

  "method.eyebrow": "How we work",
  "method.title": "Our own design, our own verification.",
  "m1.t": "Parametric CAD",
  "m1.d":
    "Geometry is generated from code, not drawn by hand. Changing one requirement regenerates the whole model and keeps the assembly consistent.",
  "m2.t": "In-house simulation",
  "m2.d":
    "We run our own finite-element models to compare options before any physical part exists. The results guide the design; they do not replace testing.",
  "m3.t": "ECSS framework",
  "m3.d":
    "The work follows the European Cooperation for Space Standardization, the framework used by European space programmes.",

  "status.eyebrow": "Where we are",
  "status.title": "TRL 3, working towards TRL 5.",
  "status.p1":
    "The technology is at proof of concept: the solution is defined and analysed, and the models point the right way. There is no manufactured hardware and no physical test campaign yet — and until there is, we do not present numbers as measured performance.",
  "status.p2":
    "The goal of the current phase is validation in a relevant environment, with a real part and cryogenic testing.",
  "status.now": "Now",
  "status.nowd": "Concept formulated and analysed",
  "status.next": "Next",
  "status.nextd": "Manufacture and test in a relevant environment",

  "ctx.eyebrow": "Context",
  "ctx.title": "Where this work sits.",
  "c1.t": "ESA BIC Centro",
  "c1.d": "Incubated at the European Space Agency's Business Incubation Centre.",
  "c2.t": "InSPoC-1, Phase B2",
  "c2.d": "Member of the ESA working group on docking and refilling interfaces.",
  "c3.t": "ESA OSIP",
  "c3.d": "Idea submitted to the European Space Agency's Open Space Innovation Platform.",

  "team.eyebrow": "Team",
  "team.title": "Who does the work.",
  "t1.n": "Wanderson Scheng",
  "t1.r": "Founder · System architecture",
  "t2.n": "Beatriz Cabral",
  "t2.r": "Operations",
  "t3.n": "Alexander Serafim",
  "t3.r": "Mechanical engineering",

  "talk.title": "Working on in-orbit propellant transfer?",
  "talk.text":
    "We talk to engineers, integrators and programmes working on orbital refuelling. Write to us and we will answer.",
  "talk.cta": "Talk to the team",

  "foot.group": "A Scheng Holdings company",
  "foot.rights": "All rights reserved.",
};

const dict: Record<OrbLocale, Dict> = { pt, en };

export type OrbTheme = "light" | "dark";

type Ctx = {
  lang: OrbLocale;
  setLang: (l: OrbLocale) => void;
  theme: OrbTheme;
  setTheme: (t: OrbTheme) => void;
  t: (key: string) => string;
};

const OrbContext = createContext<Ctx | null>(null);

export function OrbitalProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<OrbLocale>("pt");
  // Escuro por omissão: é o registo do sector e o que serve os renders.
  const [theme, setThemeState] = useState<OrbTheme>("dark");

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("orb-lang");
      if (savedLang === "pt" || savedLang === "en") setLangState(savedLang);
      const savedTheme = localStorage.getItem("orb-theme");
      if (savedTheme === "light" || savedTheme === "dark") setThemeState(savedTheme);
    } catch {
      // Janela privada ou dados de site bloqueados: fica pelos valores padrão.
    }
  }, []);

  const setLang = useCallback((l: OrbLocale) => {
    setLangState(l);
    try {
      localStorage.setItem("orb-lang", l);
    } catch {}
  }, []);

  const setTheme = useCallback((t: OrbTheme) => {
    setThemeState(t);
    try {
      localStorage.setItem("orb-theme", t);
    } catch {}
  }, []);

  const t = useCallback((key: string) => dict[lang][key] ?? dict.pt[key] ?? key, [lang]);

  const value = useMemo(
    () => ({ lang, setLang, theme, setTheme, t }),
    [lang, setLang, theme, setTheme, t],
  );

  return <OrbContext.Provider value={value}>{children}</OrbContext.Provider>;
}

export function useOrbital() {
  const ctx = useContext(OrbContext);
  if (!ctx) throw new Error("useOrbital must be used within OrbitalProvider");
  return ctx;
}

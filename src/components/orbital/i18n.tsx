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
 * ficam deliberadamente de fora por serem o núcleo técnico da empresa e não terem
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

  "hero.title": "Interfaces criogénicas para a próxima geração de infraestrutura orbital.",
  "hero.sub":
    "Desenvolvemos a ligação física por onde o propelente criogénico passa de um veículo para outro, em órbita.",
  "hero.trl": "TRL 3 · Prova de conceito",
  "hero.where": "Vila de Rei, Portugal",

  "problem.eyebrow": "O problema",
  "problem.title": "Um satélite sem propelente é um satélite perdido.",
  "problem.p1":
    "Quase todos os satélites em serviço foram construídos para nunca serem reabastecidos. Quando o propelente acaba, o veículo deixa de manter a órbita e a missão termina, com a eletrónica, os painéis e os instrumentos ainda em pleno funcionamento.",
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
    "A tecnologia está em prova de conceito: a solução está definida e analisada, e os modelos apontam no sentido certo. Ainda não existe hardware fabricado nem campanha de ensaio físico. Enquanto não existir, não apresentamos números como desempenho medido.",
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

  "tabs.eyebrow": "Tecnologia",
  "tabs.title": "Três frentes de trabalho.",
  "tab1.k": "A interface",
  "tab1.t": "O componente que liga os dois veículos",
  "tab1.p":
    "É a peça por onde o propelente atravessa. Une materiais diferentes sem colas nem vedantes que envelheçam, mantém-se ao longo de toda a gama térmica e leva sensores incorporados na própria estrutura, para que o estado da ligação seja lido durante a operação em vez de inferido depois.",
  "tab1.b1": "União mecânica, sem adesivo",
  "tab1.b2": "Acoplamento sem intervenção humana",
  "tab1.b3": "Leitura do estado em operação",
  "tab2.k": "Modelo de referência",
  "tab2.t": "O veículo onde a interface é validada",
  "tab2.p":
    "Para testar a interface é preciso um veículo que a use. Modelámos um módulo de referência completo, com estrutura, depósitos, aviónica e portas de transferência, que serve de banco de ensaio virtual e de caso de uso para dimensionar a interface contra requisitos reais.",
  "tab2.b1": "Estrutura e arranjo interno modelados",
  "tab2.b2": "Portas de transferência integradas",
  "tab2.b3": "Caso de uso para dimensionamento",
  "tab3.k": "Verificação",
  "tab3.t": "Como sabemos que o projecto fecha",
  "tab3.p":
    "A geometria é gerada por código, não desenhada à mão: mudar um requisito regenera o modelo inteiro. Sobre esse modelo corremos análise de superfície e elementos finitos próprios, para comparar soluções antes de existir peça física. Os resultados orientam o projecto; não substituem ensaio.",
  "tab3.b1": "CAD paramétrico gerado por código",
  "tab3.b2": "Elementos finitos internos",
  "tab3.b3": "Referencial ECSS",

  "demo.eyebrow": "O trabalho",
  "demo.title": "O que sai do nosso CAD.",
  "demo.lead":
    "Modelação paramétrica, análise de superfície e verificação por elementos finitos, feitas em casa. As imagens mostram o modelo de referência; o detalhe da interface fica de fora.",
  "demo.i1": "Malha do modelo de referência",
  "demo.i2": "Placa de acoplamento, vista sombreada",
  "demo.i3": "Análise de curvatura de superfície",
  "demo.i4": "Módulo de referência, vista geral",
  "demo.i5": "Arranjo interno do módulo",
  "demo.prev": "Imagem anterior",
  "demo.next": "Imagem seguinte",

  "env.title": "Envelope de projecto",
  // Requisitos externos, não resultados nossos: dizem o que a peça tem de
  // aguentar, não como lá chegamos. Os valores de carga e as propriedades dos
  // materiais ficam de fora por serem o núcleo técnico.
  "env.note":
    "Requisitos a que a interface tem de responder, não desempenho medido. A verificação feita até agora é por simulação.",
  "env1.l": "Gama de operação",
  "env1.v": "−200 °C a +150 °C",
  "env1.s": "ECSS-Q-ST-70",
  "env2.l": "Desalinhamento radial absorvido",
  "env2.v": "≤ 30 mm",
  "env2.s": "InSPoC-1 B2",
  "env3.l": "Desalinhamento angular",
  "env3.v": "≤ 5°",
  "env3.s": "InSPoC-1 B2",

  "team.eyebrow": "Equipa",
  "team.title": "Quem faz o trabalho.",
  "t1.n": "Wanderson Scheng",
  "t1.r": "Fundador · Arquitectura de sistema",
  "t2.n": "Beatriz Cabral",
  "t2.r": "Operações",

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

  "hero.title": "Cryogenic interfaces for the next generation of orbital infrastructure.",
  "hero.sub":
    "We develop the physical connection through which cryogenic propellant passes from one vehicle to another, in orbit.",
  "hero.trl": "TRL 3 · Proof of concept",
  "hero.where": "Vila de Rei, Portugal",

  "problem.eyebrow": "The problem",
  "problem.title": "A satellite out of propellant is a satellite lost.",
  "problem.p1":
    "Almost every satellite in service was built never to be refuelled. When the propellant runs out the vehicle can no longer hold its orbit and the mission ends, with the electronics, the arrays and the instruments still working perfectly.",
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
    "The technology is at proof of concept: the solution is defined and analysed, and the models point the right way. There is no manufactured hardware and no physical test campaign yet. Until there is, we do not present numbers as measured performance.",
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

  "tabs.eyebrow": "Technology",
  "tabs.title": "Three strands of work.",
  "tab1.k": "The interface",
  "tab1.t": "The component that joins the two vehicles",
  "tab1.p":
    "It is the part the propellant crosses. It joins dissimilar materials without glues or seals that age, holds across the full temperature range, and carries sensors embedded in the structure itself, so the state of the joint is read during operation rather than inferred afterwards.",
  "tab1.b1": "Mechanical union, no adhesive",
  "tab1.b2": "Mates without a human present",
  "tab1.b3": "Joint state read in operation",
  "tab2.k": "Reference model",
  "tab2.t": "The vehicle the interface is validated on",
  "tab2.p":
    "Testing the interface needs a vehicle that uses it. We modelled a complete reference module, with structure, tanks, avionics and transfer ports, that serves as a virtual test bench and as the use case for sizing the interface against real requirements.",
  "tab2.b1": "Structure and internal arrangement modelled",
  "tab2.b2": "Transfer ports integrated",
  "tab2.b3": "Use case for sizing",
  "tab3.k": "Verification",
  "tab3.t": "How we know the design closes",
  "tab3.p":
    "Geometry is generated from code, not drawn by hand: changing one requirement regenerates the whole model. On that model we run our own surface analysis and finite-element work, to compare options before any physical part exists. The results guide the design; they do not replace testing.",
  "tab3.b1": "Parametric CAD generated from code",
  "tab3.b2": "In-house finite elements",
  "tab3.b3": "ECSS framework",

  "demo.eyebrow": "The work",
  "demo.title": "What comes out of our CAD.",
  "demo.lead":
    "Parametric modelling, surface analysis and finite-element verification, done in house. The images show the reference model; the detail of the interface stays out.",
  "demo.i1": "Reference model mesh",
  "demo.i2": "Coupling plate, shaded view",
  "demo.i3": "Surface curvature analysis",
  "demo.i4": "Reference module, general view",
  "demo.i5": "Module internal arrangement",
  "demo.prev": "Previous image",
  "demo.next": "Next image",

  "env.title": "Design envelope",
  "env.note":
    "Requirements the interface has to meet, not measured performance. Verification so far is by simulation.",
  "env1.l": "Operating range",
  "env1.v": "−200 °C to +150 °C",
  "env1.s": "ECSS-Q-ST-70",
  "env2.l": "Radial misalignment absorbed",
  "env2.v": "≤ 30 mm",
  "env2.s": "InSPoC-1 B2",
  "env3.l": "Angular misalignment",
  "env3.v": "≤ 5°",
  "env3.s": "InSPoC-1 B2",

  "team.eyebrow": "Team",
  "team.title": "Who does the work.",
  "t1.n": "Wanderson Scheng",
  "t1.r": "Founder · System architecture",
  "t2.n": "Beatriz Cabral",
  "t2.r": "Operations",

  "talk.title": "Working on in-orbit propellant transfer?",
  "talk.text":
    "We talk to engineers, integrators and programmes working on orbital refuelling. Write to us and we will answer.",
  "talk.cta": "Talk to the team",

  "foot.group": "A Scheng Holdings company",
  "foot.rights": "All rights reserved.",
};

const dict: Record<OrbLocale, Dict> = { pt, en };

type Ctx = {
  lang: OrbLocale;
  setLang: (l: OrbLocale) => void;
  t: (key: string) => string;
};

const OrbContext = createContext<Ctx | null>(null);

export function OrbitalProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<OrbLocale>("pt");

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("orb-lang");
      if (savedLang === "pt" || savedLang === "en") setLangState(savedLang);
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

  const t = useCallback((key: string) => dict[lang][key] ?? dict.pt[key] ?? key, [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return <OrbContext.Provider value={value}>{children}</OrbContext.Provider>;
}

export function useOrbital() {
  const ctx = useContext(OrbContext);
  if (!ctx) throw new Error("useOrbital must be used within OrbitalProvider");
  return ctx;
}

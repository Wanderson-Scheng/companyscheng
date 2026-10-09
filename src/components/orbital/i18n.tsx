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

  "views.label": "Secções",
  "nav.company": "Empresa",
  "nav.projects": "Projectos",

  "problem.p1":
    "Quase todos os satélites em serviço foram construídos para nunca serem reabastecidos. Quando o propelente acaba, o veículo deixa de manter a órbita e a missão termina, com a eletrónica, os painéis e os instrumentos ainda em pleno funcionamento.",
  "problem.p2":
    "Reabastecer em órbita muda essa equação, mas a ligação por onde o propelente passa é o elo que falta. Três modos de falha conhecidos travam o problema, e a própria ESA identificou uma interface criogénica fiável e interoperável como peça em falta na arquitectura europeia de logística orbital.",
  "f1.t": "Soldadura a frio",
  "f1.d":
    "No vácuo, superfícies metálicas nuas colam-se umas às outras. Depois de acoplar, separar sem danificar deixa de ser possível.",
  "f2.t": "Desalinhamento residual",
  "f2.d":
    "Nenhum acoplamento fica perfeito. Um acoplador metálico rígido não absorve o desvio que sobra e transmite-o à estrutura.",
  "f3.t": "Adesivos no frio",
  "f3.d":
    "As colas usadas em montagens híbridas tornam-se quebradiças à temperatura criogénica e libertam gases no vácuo.",

  "company.eyebrow": "A empresa",
  "company.title": "Uma empresa de componente, não de plataforma.",
  "company.p1":
    "A Scheng Orbital System é um projecto português de engenharia, desenvolvido a partir de Vila de Rei. Trabalha a montante da cadeia espacial: não constrói satélites nem veículos, constrói a peça de que eles dependem para trocar propelente entre si.",
  "company.p2":
    "O modelo é B2B, com venda de hardware, serviços de engenharia e licenciamento de propriedade intelectual. O mercado principal são os veículos de transferência orbital e as missões de serviço em órbita, com a Europa primeiro. A mesma tecnologia de interface tem aplicação fora do espaço, na infraestrutura criogénica industrial.",
  "cf1.l": "Fundada em",
  "cf1.v": "Vila de Rei, Portugal",
  "cf2.l": "Posição na cadeia",
  "cf2.v": "Montante · subsistemas",
  "cf3.l": "Modelo",
  "cf3.v": "B2B · hardware, engenharia, licenciamento",

  "proj.eyebrow": "Projectos",
  "proj.title": "Em que estamos a trabalhar.",
  "p1.k": "Em curso",
  "p1.t": "The Interlock",
  "p1.d":
    "A interface criogénica instrumentada para logística orbital. É o produto da empresa e o objecto de toda a actividade de desenvolvimento. O caminho traçado leva-o de prova de conceito a validação em ambiente relevante, com modelos de engenharia fabricados e ensaiados.",
  "p2.k": "Apoio",
  "p2.t": "Módulo de referência",
  "p2.d":
    "Um veículo completo modelado em CAD paramétrico, com estrutura, depósitos, aviónica e portas de transferência. Serve de banco de ensaio virtual e de caso de uso para dimensionar a interface contra requisitos reais, em vez de contra requisitos supostos.",
  "p3.k": "Previsto",
  "p3.t": "Proteção industrial",
  "p3.d":
    "Pedido de patente europeia sobre a arquitectura da interface, acompanhado de uma base documental alinhada com as normas ECSS.",

  "founder.eyebrow": "Fundador",
  "founder.title": "Como esta empresa apareceu.",
  "founder.p1":
    "Wanderson Scheng é empresário na área aeroespacial, com trabalho em engenharia de materiais avançados e arquitectura de sistemas orbitais. O Interlock nasceu de investigação independente e continuada sobre infraestrutura criogénica, logística orbital e interfaces em órbita, feita antes de existir empresa para a suportar.",
  "founder.p2":
    "Esse trabalho entrou no ecossistema europeu por duas vias: as actividades OSIP e IDEA da Agência Espacial Europeia e, sobretudo, a participação no grupo de trabalho InSPoC-1, Fase B2, sobre normalização de interfaces passivas. É o fórum onde se está a definir a interface europeia comum, o que significa que os requisitos não são adivinhados a partir de fora.",
  "founder.p3":
    "Na empresa responde pelo desenvolvimento do produto, pela arquitectura de sistema, pela definição de interfaces e tolerâncias, pela especificação de materiais, pela coordenação de fabrico e pelas negociações técnicas com contratantes e integradores.",
  "founder.role": "Fundador · Arquitectura de sistema",

  "t2.r2": "Operações e administração",
  "t2.d":
    "Formação técnica em gestão. Responde pela gestão corrente, pelo acompanhamento financeiro e pela conformidade contratual e regulamentar, o que liberta a parte técnica para engenharia.",

  "talk.title": "Trabalha em transferência de propelente em órbita?",
  "talk.text":
    "Falamos com engenheiros, integradores e programas que trabalham em reabastecimento orbital. Escreva-nos e respondemos.",
  "talk.cta": "Falar com a equipa",

  "foot.group": "Um projecto da Scheng Holdings",
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

  "views.label": "Sections",
  "nav.company": "Company",
  "nav.projects": "Projects",

  "problem.p1":
    "Almost every satellite in service was built never to be refuelled. When the propellant runs out the vehicle can no longer hold its orbit and the mission ends, with the electronics, the arrays and the instruments still working perfectly.",
  "problem.p2":
    "Refuelling in orbit changes that equation, but the connection the propellant passes through is the missing link. Three known failure modes hold the problem back, and ESA itself has identified a reliable, interoperable cryogenic interface as a missing piece of European orbital logistics.",
  "f1.t": "Cold welding",
  "f1.d":
    "In vacuum, bare metal surfaces weld to each other. Once mated, separating without damage stops being possible.",
  "f2.t": "Residual misalignment",
  "f2.d":
    "No docking is perfect. A rigid metallic coupler cannot absorb the offset that is left over and passes it into the structure.",
  "f3.t": "Adhesives in the cold",
  "f3.d":
    "The glues used in hybrid assemblies turn brittle at cryogenic temperature and outgas in vacuum.",

  "company.eyebrow": "The company",
  "company.title": "A component company, not a platform company.",
  "company.p1":
    "Scheng Orbital System is a Portuguese engineering project, developed from Vila de Rei. It works upstream in the space supply chain: it does not build satellites or vehicles, it builds the part they depend on to pass propellant between them.",
  "company.p2":
    "The model is B2B, covering hardware sales, engineering services and intellectual property licensing. The primary market is orbital transfer vehicles and in-space servicing missions, Europe first. The same interface technology applies outside space, in industrial cryogenic infrastructure.",
  "cf1.l": "Based in",
  "cf1.v": "Vila de Rei, Portugal",
  "cf2.l": "Position in the chain",
  "cf2.v": "Upstream · subsystems",
  "cf3.l": "Model",
  "cf3.v": "B2B · hardware, engineering, licensing",

  "proj.eyebrow": "Projects",
  "proj.title": "What we are working on.",
  "p1.k": "Active",
  "p1.t": "The Interlock",
  "p1.d":
    "The instrumented cryogenic interface for orbital logistics. It is the company's product and the object of all development work. The path ahead takes it from proof of concept to validation in a relevant environment, with engineering models manufactured and tested.",
  "p2.k": "Supporting",
  "p2.t": "Reference module",
  "p2.d":
    "A complete vehicle modelled in parametric CAD, with structure, tanks, avionics and transfer ports. It serves as a virtual test bench and as the use case for sizing the interface against real requirements rather than assumed ones.",
  "p3.k": "Planned",
  "p3.t": "Industrial protection",
  "p3.d":
    "A European patent application covering the interface architecture, alongside a documented evidence base aligned with ECSS standards.",

  "founder.eyebrow": "Founder",
  "founder.title": "How this company came about.",
  "founder.p1":
    "Wanderson Scheng is an aerospace entrepreneur working in advanced-materials engineering and orbital system architecture. The Interlock came out of sustained independent research into cryogenic infrastructure, orbital logistics and in-space interfaces, done before there was a company to support it.",
  "founder.p2":
    "That work entered the European ecosystem through two routes: the European Space Agency's OSIP and IDEA activities and, above all, membership of the InSPoC-1 Phase B2 working group on passive interface standardisation. That is the forum where the common European interface is being defined, which means the requirements are not being guessed at from outside.",
  "founder.p3":
    "Within the company he leads product development, system architecture, interface and tolerance definition, material specification, manufacturing coordination, and the technical negotiations with contractors and integrators.",
  "founder.role": "Founder · System architecture",

  "t2.r2": "Operations and administration",
  "t2.d":
    "A technical background in business administration. She is responsible for day-to-day management, financial monitoring, and contractual and regulatory compliance, which keeps the technical side free for engineering.",

  "talk.title": "Working on in-orbit propellant transfer?",
  "talk.text":
    "We talk to engineers, integrators and programmes working on orbital refuelling. Write to us and we will answer.",
  "talk.cta": "Talk to the team",

  "foot.group": "A Scheng Holdings project",
  "foot.rights": "All rights reserved.",
};

const dict: Record<OrbLocale, Dict> = { pt, en };

/** Secções que vivem atrás das abas. */
export const orbViews = ["empresa", "tecnologia", "projectos", "estado", "equipa"] as const;
export type OrbView = (typeof orbViews)[number];

type Ctx = {
  lang: OrbLocale;
  setLang: (l: OrbLocale) => void;
  view: OrbView;
  setView: (v: OrbView) => void;
  t: (key: string) => string;
};

const OrbContext = createContext<Ctx | null>(null);

export function OrbitalProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<OrbLocale>("pt");
  const [view, setView] = useState<OrbView>("empresa");

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

  const value = useMemo(() => ({ lang, setLang, view, setView, t }), [lang, setLang, view, t]);

  return <OrbContext.Provider value={value}>{children}</OrbContext.Provider>;
}

export function useOrbital() {
  const ctx = useContext(OrbContext);
  if (!ctx) throw new Error("useOrbital must be used within OrbitalProvider");
  return ctx;
}

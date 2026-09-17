import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type SchengTheme = "light" | "dark";
export type SchengThemeMode = "light" | "dark" | "auto";
export type SchengLang = "pt" | "en";

type Ctx = {
  theme: SchengTheme;
  themeMode: SchengThemeMode;
  lang: SchengLang;
  setThemeMode: (m: SchengThemeMode) => void;
  setTheme: (t: SchengTheme) => void;
  setLang: (l: SchengLang) => void;
  t: (key: string) => string;
};

function resolveAutoTheme(): SchengTheme {
  const hour = new Date().getHours();
  return hour >= 6 && hour < 19 ? "light" : "dark";
}

const dict: Record<SchengLang, Record<string, string>> = {
  pt: {
    "nav.home": "Início",
    "nav.group": "Grupo",
    "nav.companies": "Empresas",
    "nav.values": "Valores",
    "nav.contact": "Contacto",
    "nav.cta": "Falar connosco",
    "nav.theme": "Alternar tema",
    "nav.lang": "Alternar idioma",

    "hero.eyebrow": "Holding · Portugal",
    // O   cola "A" a "mesma": sem ele a primeira linha acabava no artigo
    // sozinho ("Empresas autónomas. A") e a quebra caía a meio da frase.
    "hero.title": "Empresas autónomas. A mesma exigência.",
    "hero.sub":
      "A Scheng Holdings detém e desenvolve empresas nas áreas aeroespacial, comercial e tecnológica. Cada uma opera de forma autónoma, com engenharia própria e responsabilidade sobre o que entrega.",
    "hero.cta1": "Ver as empresas",
    "hero.cta2": "Contactar",

    "home.eyebrow": "Navegar",
    "home.title": "Por onde quer começar?",
    "home.more": "Ver mais",
    "h1.t": "Empresas",
    "h1.d": "As três empresas do grupo e a área em que cada uma trabalha.",
    "h2.t": "O grupo",
    "h2.d": "Como estamos organizados e quem fundou a holding.",
    "h3.t": "Valores",
    "h3.d": "Os princípios que orientam as decisões em todas as empresas.",
    "h4.t": "Contacto",
    "h4.d": "Parcerias, propostas ou perguntas: falamos consigo.",

    "founder.eyebrow": "Fundador",
    "founder.role": "Fundador e responsável pela estratégia do grupo",
    "founder.title": "Uma holding construída a partir de projectos reais",
    "founder.p1":
      "A Scheng Holdings nasceu da vontade de reunir, sob a mesma estrutura, projectos que já existiam de forma independente: engenharia, comércio de equipamento e software.",
    "founder.p2":
      "O grupo mantém equipas pequenas e decisões rápidas. Cada empresa responde pelo que entrega e a holding garante os recursos, a marca e a visão de longo prazo.",
    "founder.quote": "Preferimos fazer poucas coisas e fazê-las de forma que aguente o tempo.",

    "about.eyebrow": "O grupo",
    "about.title": "Como o grupo está organizado",
    "about.text":
      "Cada braço tem equipa, produto e contas próprias. À holding cabe a estratégia, a propriedade intelectual e os recursos partilhados.",
    "p1.t": "Longo prazo",
    "p1.d": "Investimos em produtos que continuam úteis anos depois do lançamento.",
    "p2.t": "Privacidade",
    "p2.d": "Os dados de quem usa os nossos produtos ficam com quem os usa.",
    "p3.t": "Rigor no detalhe",
    "p3.d": "Do código ao acabamento à mão, nada sai sem revisão.",

    "vent.eyebrow": "Empresas",
    "vent.title": "O que fazemos",
    "v1.tag": "Braço aeroespacial",
    "v1.d":
      "Engenharia espacial e sistemas criogénicos, com foco em investigação e desenvolvimento.",
    "v2.tag": "Braço comercial",
    "v2.d":
      "Importação e venda de hardware: impressoras 3D, filamentos, ferramentas e sílica em gel.",
    "v3.tag": "Braço tecnológico",
    "v3.d":
      "Detém o 3D Scheng, software de gestão de impressão 3D, e o GuiaFin, aplicação de finanças pessoais.",
    "v3.cta": "Conhecer o GuiaFin",
    "vent.soon": "Em desenvolvimento",
    "vent.more": "Saber mais",
    "vent.back": "Voltar às empresas",
    "detail.gallery": "Imagens",
    "detail.products": "Produtos",
    "pr1.tag": "Aplicação móvel",
    "pr1.d":
      "Aplicação de finanças pessoais que funciona sem ligação à Internet, sem publicidade e sem subscrição.",
    "pr1.long":
      "O GuiaFin permite controlar rendimentos, despesas, prestações, contas bancárias, cartões de crédito e metas de poupança. Todos os dados ficam guardados no telemóvel, protegidos por PIN.",
    "pr1.f1": "Funciona totalmente offline, com dados guardados no dispositivo.",
    "pr1.f2": "Contas, cartões, prestações e metas de poupança num só lugar.",
    "pr1.f3": "Protecção por PIN, modo escuro e sem publicidade.",
    "pr1.cta": "Visitar o site do GuiaFin",
    "pr2.tag": "Software de gestão",
    "pr2.d":
      "Plataforma de gestão e monitorização de impressão 3D para oficinas e produção em série.",
    "pr2.long":
      "O 3D Scheng organiza filas de impressão, acompanha o estado das máquinas e regista o consumo de material, dando visibilidade sobre cada trabalho do início ao fim.",
    "pr2.f1": "Gestão de filas e de vários equipamentos em simultâneo.",
    "pr2.f2": "Monitorização do estado das impressões em curso.",
    "pr2.f3": "Registo de consumos e histórico de produção.",
    "pr2.cta": "Conheça o 3D Scheng",
    "pr3.tag": "Telemetria",
    "pr3.d": "Sistema de telemetria para leitura e análise de dados em tempo real.",
    "pr3.long":
      "O Scheng Pro recolhe dados de sensores e apresenta-os em painéis claros, com registo histórico e alertas quando os valores saem dos limites definidos.",
    "pr3.f1": "Leitura de sensores em tempo real.",
    "pr3.f2": "Painéis de análise e histórico de medições.",
    "pr3.f3": "Alertas configuráveis por limites definidos.",
    "detail.photosSoon": "Fotografias em breve",
    "detail.cta": "Falar sobre esta empresa",
    // Em inglês também na locale pt: ver MaintenanceNotice.
    "wip.title": "Under maintenance",
    "wip.body":
      "This page is not ready yet. We are still building it and will publish it once it is complete. Get in touch and we will gladly answer any question in the meantime.",
    "v1.long":
      "A Scheng Orbital System dedica-se à engenharia de sistemas para o espaço, com trabalho em criogenia, propulsão e ensaio de componentes. A actividade está centrada em investigação e desenvolvimento próprios.",
    "v1.f1": "Sistemas criogénicos e ensaios em ambiente controlado.",
    "v1.f2": "Projecto e prototipagem de componentes de propulsão.",
    "v1.f3": "Investigação própria, com documentação técnica completa.",
    "v2.long":
      "A Scheng Imports importa e vende equipamento de fabrico digital e consumíveis. Trabalha com fornecedores seleccionados e assegura o apoio técnico depois da venda.",
    "v2.f1": "Impressoras 3D, filamentos e resinas.",
    "v2.f2": "Ferramentas, acessórios e sílica em gel.",
    "v2.f3": "Apoio técnico e acompanhamento pós-venda.",
    "v3.long":
      "A Scheng Technology desenvolve software próprio. Detém o 3D Scheng, plataforma de gestão de impressão 3D, o Scheng Pro, sistema de telemetria, e o GuiaFin, aplicação de finanças pessoais que funciona sem ligação à Internet.",
    "v3.f1": "3D Scheng: gestão e monitorização de impressão 3D.",
    "v3.f2": "Scheng Pro: telemetria e leitura de dados em tempo real.",
    "v3.f3": "GuiaFin: finanças pessoais, offline e sem publicidade.",

    "val.title": "Os nossos valores",
    "val1.t": "Simplicidade",
    "val1.d": "Resolver o problema com o menor número de passos possível.",
    "val2.t": "Confiança",
    "val2.d": "Dizemos o que fazemos e cumprimos os prazos combinados.",
    "val3.t": "Autonomia",
    "val3.d": "Produtos que funcionam sem depender de terceiros.",
    "val4.t": "Excelência",
    "val4.d": "Só entregamos aquilo que assinamos com o nosso nome.",

    "contact.title": "Falamos?",
    "contact.text":
      "Para parcerias, propostas ou perguntas sobre qualquer empresa do grupo, escreva-nos. Respondemos a todos os contactos.",
    "form.name": "Nome",
    "form.email": "E-mail",
    "form.company": "Empresa (opcional)",
    "form.subject": "Assunto (opcional)",
    "form.message": "Mensagem",
    "form.send": "Enviar mensagem",
    "form.sending": "A enviar...",
    "form.ok": "Mensagem recebida. Respondemos em breve.",
    "form.error": "Não foi possível enviar. Tente novamente ou escreva-nos por e-mail.",
    "form.invalid":
      "Verifique os campos: o nome, um e-mail válido e uma mensagem com pelo menos 10 caracteres.",
    "form.or": "Ou contacte-nos directamente",
    "form.whatsapp": "WhatsApp",
    "footer.rights": "Todos os direitos reservados.",
  },
  en: {
    "nav.home": "Home",
    "nav.group": "Group",
    "nav.companies": "Companies",
    "nav.values": "Values",
    "nav.contact": "Contact",
    "nav.cta": "Get in touch",
    "nav.theme": "Toggle theme",
    "nav.lang": "Switch language",

    "hero.eyebrow": "Holding · Portugal",
    "hero.title": "Independent companies. One standard.",
    "hero.sub":
      "Scheng Holdings owns and builds companies across aerospace, trade and technology. Each one runs independently, with its own engineering and full ownership of what it ships.",
    "hero.cta1": "See the companies",
    "hero.cta2": "Contact",

    "home.eyebrow": "Explore",
    "home.title": "Where would you like to start?",
    "home.more": "See more",
    "h1.t": "Companies",
    "h1.d": "The three companies in the group and what each one works on.",
    "h2.t": "The group",
    "h2.d": "How we are organised and who founded the holding.",
    "h3.t": "Values",
    "h3.d": "The principles behind decisions across every company.",
    "h4.t": "Contact",
    "h4.d": "Partnerships, proposals or questions: let's talk.",

    "founder.eyebrow": "Founder",
    "founder.role": "Founder, responsible for group strategy",
    "founder.title": "A holding built from real projects",
    "founder.p1":
      "Scheng Holdings was created to bring together, under one structure, projects that already existed independently: engineering, hardware trade and software.",
    "founder.p2":
      "The group keeps small teams and fast decisions. Each company owns what it ships, while the holding provides resources, the brand and the long-term view.",
    "founder.quote": "We would rather do a few things, and do them so they last.",

    "about.eyebrow": "The group",
    "about.title": "How the group is organised",
    "about.text":
      "Each arm has its own team, product and accounts. The holding handles strategy, intellectual property and shared resources.",
    "p1.t": "Long term",
    "p1.d": "We invest in products that stay useful years after launch.",
    "p2.t": "Privacy",
    "p2.d": "The data of the people who use our products stays with them.",
    "p3.t": "Attention to detail",
    "p3.d": "From code to hand finishing, nothing ships without review.",

    "vent.eyebrow": "Companies",
    "vent.title": "What we do",
    "v1.tag": "Aerospace arm",
    "v1.d": "Space engineering and cryogenic systems, focused on research and development.",
    "v2.tag": "Trade arm",
    "v2.d": "Import and sale of hardware: 3D printers, filaments, tools and silica gel.",
    "v3.tag": "Technology arm",
    "v3.d":
      "Owns 3D Scheng, software for managing 3D printing, and GuiaFin, a personal finance app.",
    "v3.cta": "Discover GuiaFin",
    "vent.soon": "In development",
    "vent.more": "Learn more",
    "vent.back": "Back to companies",
    "detail.gallery": "Images",
    "detail.products": "Products",
    "pr1.tag": "Mobile app",
    "pr1.d": "A personal finance app that works offline, with no ads and no subscription.",
    "pr1.long":
      "GuiaFin tracks income, expenses, instalments, bank accounts, credit cards and savings goals. All data stays on the phone, protected by a PIN.",
    "pr1.f1": "Fully offline, with data stored on the device.",
    "pr1.f2": "Accounts, cards, instalments and savings goals in one place.",
    "pr1.f3": "PIN protection, dark mode and no advertising.",
    "pr1.cta": "Visit the GuiaFin site",
    "pr2.tag": "Management software",
    "pr2.d":
      "A platform for managing and monitoring 3D printing in workshops and batch production.",
    "pr2.long":
      "3D Scheng organises print queues, tracks machine status and records material usage, giving full visibility over every job from start to finish.",
    "pr2.f1": "Queue management across several machines at once.",
    "pr2.f2": "Live monitoring of running prints.",
    "pr2.f3": "Material usage records and production history.",
    "pr2.cta": "Discover 3D Scheng",
    "pr3.tag": "Telemetry",
    "pr3.d": "A telemetry system for reading and analysing data in real time.",
    "pr3.long":
      "Scheng Pro collects sensor data and presents it in clear dashboards, with historical records and alerts when values fall outside the defined limits.",
    "pr3.f1": "Real-time sensor readings.",
    "pr3.f2": "Analysis dashboards and measurement history.",
    "pr3.f3": "Configurable alerts based on defined thresholds.",
    "detail.photosSoon": "Photos coming soon",
    "detail.cta": "Talk about this company",
    "wip.title": "Under maintenance",
    "wip.body":
      "This page is not ready yet. We are still building it and will publish it once it is complete. Get in touch and we will gladly answer any question in the meantime.",
    "v1.long":
      "Scheng Orbital System works on engineering systems for space, covering cryogenics, propulsion and component testing. The work is centred on in-house research and development.",
    "v1.f1": "Cryogenic systems and testing in controlled environments.",
    "v1.f2": "Design and prototyping of propulsion components.",
    "v1.f3": "In-house research with full technical documentation.",
    "v2.long":
      "Scheng Imports imports and sells digital fabrication equipment and consumables, working with selected suppliers and providing technical support after the sale.",
    "v2.f1": "3D printers, filaments and resins.",
    "v2.f2": "Tools, accessories and silica gel.",
    "v2.f3": "Technical support and after-sales follow-up.",
    "v3.long":
      "Scheng Technology builds its own software: 3D Scheng, a platform for managing 3D printing, Scheng Pro, a telemetry system, and GuiaFin, a personal finance app that works entirely offline.",
    "v3.f1": "3D Scheng: 3D printing management and monitoring.",
    "v3.f2": "Scheng Pro: telemetry and real-time data readings.",
    "v3.f3": "GuiaFin: personal finance, offline and ad-free.",

    "val.title": "Our values",
    "val1.t": "Simplicity",
    "val1.d": "Solve the problem in as few steps as possible.",
    "val2.t": "Trust",
    "val2.d": "We say what we do and we meet the dates we agree.",
    "val3.t": "Independence",
    "val3.d": "Products that work without relying on third parties.",
    "val4.t": "Craftsmanship",
    "val4.d": "We only ship what we would sign our name to.",

    "contact.title": "Shall we talk?",
    "contact.text":
      "For partnerships, proposals or questions about any company in the group, write to us. We answer every message.",
    "form.name": "Name",
    "form.email": "Email",
    "form.company": "Company (optional)",
    "form.subject": "Subject (optional)",
    "form.message": "Message",
    "form.send": "Send message",
    "form.sending": "Sending...",
    "form.ok": "Message received. We will get back to you shortly.",
    "form.error": "We could not send it. Please try again or email us.",
    "form.invalid":
      "Please check the fields: your name, a valid email and a message with at least 10 characters.",
    "form.or": "Or contact us directly",
    "form.whatsapp": "WhatsApp",
    "footer.rights": "All rights reserved.",
  },
};

const SchengContext = createContext<Ctx | null>(null);

export function SchengProvider({ children }: { children: ReactNode }) {
  const [themeMode, setThemeModeState] = useState<SchengThemeMode>("auto");
  const [resolvedTheme, setResolvedTheme] = useState<SchengTheme>("dark");
  const [lang, setLangState] = useState<SchengLang>("pt");

  useEffect(() => {
    const m = window.localStorage.getItem("scheng-theme-mode");
    const l = window.localStorage.getItem("scheng-lang");
    if (m === "light" || m === "dark" || m === "auto") {
      setThemeModeState(m);
      setResolvedTheme(m === "auto" ? resolveAutoTheme() : m);
    } else {
      const legacy = window.localStorage.getItem("scheng-theme");
      if (legacy === "light" || legacy === "dark") {
        setThemeModeState(legacy);
        setResolvedTheme(legacy);
      } else {
        setResolvedTheme(resolveAutoTheme());
      }
    }
    if (l === "pt" || l === "en") setLangState(l);
  }, []);

  useEffect(() => {
    if (themeMode !== "auto") return;
    setResolvedTheme(resolveAutoTheme());
    const interval = window.setInterval(() => {
      setResolvedTheme(resolveAutoTheme());
    }, 60_000);
    return () => window.clearInterval(interval);
  }, [themeMode]);

  const setThemeMode = useCallback((m: SchengThemeMode) => {
    setThemeModeState(m);
    window.localStorage.setItem("scheng-theme-mode", m);
    setResolvedTheme(m === "auto" ? resolveAutoTheme() : m);
  }, []);

  const value = useMemo<Ctx>(
    () => ({
      theme: resolvedTheme,
      themeMode,
      setThemeMode,
      setTheme: (t) => setThemeMode(t),
      lang,
      setLang: (l) => {
        setLangState(l);
        window.localStorage.setItem("scheng-lang", l);
      },
      t: (key) => dict[lang][key] ?? key,
    }),
    [resolvedTheme, themeMode, setThemeMode, lang],
  );

  return <SchengContext.Provider value={value}>{children}</SchengContext.Provider>;
}

export function useScheng() {
  const ctx = useContext(SchengContext);
  if (!ctx) throw new Error("useScheng must be used inside SchengProvider");
  return ctx;
}

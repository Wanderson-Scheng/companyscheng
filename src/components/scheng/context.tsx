import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type SchengTheme = "light" | "dark";
export type SchengLang = "pt" | "en";

type Ctx = {
  theme: SchengTheme;
  lang: SchengLang;
  setTheme: (t: SchengTheme) => void;
  setLang: (l: SchengLang) => void;
  t: (key: string) => string;
};

const dict: Record<SchengLang, Record<string, string>> = {
  pt: {
    "nav.group": "Grupo",
    "nav.companies": "Empresas",
    "nav.values": "Valores",
    "nav.contact": "Contacto",
    "nav.cta": "Falar connosco",
    "nav.theme": "Alternar tema",
    "nav.lang": "Alternar idioma",

    "hero.eyebrow": "Holding · Portugal",
    "hero.title": "Quatro empresas. Uma forma de trabalhar.",
    "hero.sub":
      "A Scheng Holdings detém e desenvolve empresas nas áreas aeroespacial, comercial, tecnológica e artesanal. Cada uma opera de forma autónoma, com engenharia própria e responsabilidade sobre o que entrega.",
    "hero.cta1": "Ver as empresas",
    "hero.cta2": "Contactar",

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
    "v1.d": "Engenharia espacial e sistemas criogénicos, com foco em investigação e desenvolvimento.",
    "v2.tag": "Braço comercial",
    "v2.d": "Importação e venda de hardware: impressoras 3D, filamentos, ferramentas e sílica em gel.",
    "v3.tag": "Braço tecnológico",
    "v3.d":
      "Detém o 3D Scheng, software de gestão de impressão 3D, e o GuiaFin, aplicação de finanças pessoais.",
    "v3.cta": "Conhecer o GuiaFin",
    "v4.tag": "Braço artesanal",
    "v4.d": "Sabonetes e artigos personalizados, feitos à mão em pequenas séries.",
    "vent.soon": "Em desenvolvimento",

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
    "footer.rights": "Todos os direitos reservados.",
  },
  en: {
    "nav.group": "Group",
    "nav.companies": "Companies",
    "nav.values": "Values",
    "nav.contact": "Contact",
    "nav.cta": "Get in touch",
    "nav.theme": "Toggle theme",
    "nav.lang": "Switch language",

    "hero.eyebrow": "Holding · Portugal",
    "hero.title": "Four companies. One way of working.",
    "hero.sub":
      "Scheng Holdings owns and builds companies across aerospace, trade, technology and craft. Each one runs independently, with its own engineering and full ownership of what it ships.",
    "hero.cta1": "See the companies",
    "hero.cta2": "Contact",

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
    "v4.tag": "Craft arm",
    "v4.d": "Handmade soaps and personalised goods, produced in small batches.",
    "vent.soon": "In development",

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
    "footer.rights": "All rights reserved.",
  },
};

const SchengContext = createContext<Ctx | null>(null);

export function SchengProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<SchengTheme>("dark");
  const [lang, setLangState] = useState<SchengLang>("pt");

  useEffect(() => {
    const t = window.localStorage.getItem("scheng-theme");
    const l = window.localStorage.getItem("scheng-lang");
    if (t === "light" || t === "dark") setThemeState(t);
    if (l === "pt" || l === "en") setLangState(l);
  }, []);

  const value = useMemo<Ctx>(
    () => ({
      theme,
      lang,
      setTheme: (t) => {
        setThemeState(t);
        window.localStorage.setItem("scheng-theme", t);
      },
      setLang: (l) => {
        setLangState(l);
        window.localStorage.setItem("scheng-lang", l);
      },
      t: (key) => dict[lang][key] ?? key,
    }),
    [theme, lang],
  );

  return <SchengContext.Provider value={value}>{children}</SchengContext.Provider>;
}

export function useScheng() {
  const ctx = useContext(SchengContext);
  if (!ctx) throw new Error("useScheng must be used inside SchengProvider");
  return ctx;
}
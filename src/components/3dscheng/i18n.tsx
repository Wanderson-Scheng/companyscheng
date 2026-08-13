import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export const locales = ["pt", "en", "es"] as const;
export type Locale = (typeof locales)[number];

export const localeMeta: Record<Locale, { label: string; short: string; htmlLang: string }> = {
  pt: { label: "Português", short: "PT", htmlLang: "pt-PT" },
  en: { label: "English", short: "EN", htmlLang: "en" },
  es: { label: "Español", short: "ES", htmlLang: "es" },
};

type Dict = Record<string, string>;

const pt: Dict = {
  "nav.features": "Funcionalidades",
  "nav.screenshots": "Capturas",
  "nav.pricing": "Preços",
  "nav.download": "Download",
  "nav.faq": "Perguntas",
  "nav.language": "Idioma",
  "nav.menu": "Abrir menu",
  "nav.tryfree": "Experimentar Grátis",

  "hero.badge": "Software Profissional para Impressão 3D",
  "hero.title": "Gira a sua farm de impressoras 3D como um profissional",
  "hero.subtitle":
    "Monitoramento em tempo real, controlo de custos, manutenção preventiva e gestão financeira. 100% offline, os seus dados nunca saem do seu computador.",
  "hero.cta": "Experimentar Grátis — 30 dias",
  "hero.secondary": "Ver Funcionalidades",
  "hero.imageAlt": "Dashboard do 3D Scheng mostrando monitoramento de farm de impressoras 3D",

  "brands.title": "Compatível com as principais marcas do mercado",

  "features.eyebrow": "Funcionalidades",
  "features.title": "13 módulos. Tudo o que a sua farm precisa.",
  "features.subtitle":
    "Do monitoramento em tempo real à gestão financeira completa, tudo num único software.",

  "feat.dashboard.t": "Dashboard",
  "feat.dashboard.d":
    "Visão geral da farm com cards de status ao vivo, relógio em tempo real e resumo de materiais.",
  "feat.printers.t": "Impressoras",
  "feat.printers.d":
    "Gestão completa com filtros por marca, status ao vivo via MQTT, temperaturas e progresso.",
  "feat.cameras.t": "Câmaras",
  "feat.cameras.d": "Monitoramento RTSP ao vivo com feed de vídeo integrado por impressora.",
  "feat.filaments.t": "Filamentos",
  "feat.filaments.d":
    "Inventário visual com cards coloridos, filtro por material, controlo de stock e preço/kg.",
  "feat.calculator.t": "Calculadora de Custos",
  "feat.calculator.d":
    "Cálculo detalhado com material, energia, depreciação e mão de obra. 3 margens de lucro.",
  "feat.parts.t": "Peças e Materiais",
  "feat.parts.d":
    "Inventário de peças de reposição com alertas de stock baixo e links para fornecedor.",
  "feat.history.t": "Histórico de Impressões",
  "feat.history.d":
    "Tabela com filtros por impressora, estado, material e data. Exportação CSV e PDF.",
  "feat.maintenance.t": "Manutenção Preventiva",
  "feat.maintenance.d":
    "Planos de manutenção por impressora com tracking de horas e exportação PDF.",
  "feat.queue.t": "Fila de Produção",
  "feat.queue.d":
    "Gestão de encomendas com prioridades, biblioteca de ficheiros 3D e atribuição a impressoras.",
  "feat.stats.t": "Estatísticas",
  "feat.stats.d":
    "Gráficos de impressões, uso de material, utilização por impressora e taxa de sucesso.",
  "feat.financial.t": "Visão Financeira",
  "feat.financial.d":
    "Receita, custos, lucro, investimentos, gráficos de receita e distribuição de custos.",
  "feat.settings.t": "Definições",
  "feat.settings.d":
    "Personalização da empresa, tema Claro/Escuro/Sistema e color picker para o banner.",
  "feat.licensing.t": "Licenciamento",
  "feat.licensing.d":
    "Trial gratuito de 30 dias, assinatura mensal/anual, chaves lifetime e verificação offline.",

  "screenshots.eyebrow": "Capturas de ecrã",
  "screenshots.title": "Veja o 3D Scheng em ação",
  "screenshots.subtitle": "Interface profissional com suporte completo a modo claro e escuro.",

  "ss.dashboard-light.t": "Dashboard — Modo Claro",
  "ss.dashboard-light.d": "Visão geral da farm com status de impressoras ao vivo.",
  "ss.dashboard-dark.t": "Dashboard — Modo Escuro",
  "ss.dashboard-dark.d": "A mesma interface poderosa, confortável para trabalhar à noite.",
  "ss.printers.t": "Gestão de Impressoras",
  "ss.printers.d": "Filtros por marca, status ao vivo e detalhes de cada impressora.",
  "ss.cameras.t": "Câmeras RTSP",
  "ss.cameras.d": "Feed de vídeo ao vivo diretamente no app.",
  "ss.filaments.t": "Inventário de Filamentos",
  "ss.filaments.d": "Cards coloridos com controlo de stock por material.",
  "ss.calculator.t": "Calculadora de Custos",
  "ss.calculator.d": "Calcule o preço de cada impressão com todas as variáveis.",
  "ss.parts.t": "Peças e Materiais",
  "ss.parts.d": "Inventário com alertas de stock baixo.",
  "ss.financial.t": "Visão Financeira",
  "ss.financial.d": "Gráficos de receita, custos e investimentos.",
  "ss.settings.t": "Definições",
  "ss.settings.d": "Tema, cor do banner e personalização da empresa.",

  "why.eyebrow": "Porquê o 3D Scheng",
  "why.title": "O que torna o 3D Scheng diferente",
  "why.offline.t": "100% Offline",
  "why.offline.d":
    "Os seus dados nunca saem do seu computador. Sem cloud, sem assinaturas de servidor, sem riscos.",
  "why.realtime.t": "Monitoramento em Tempo Real",
  "why.realtime.d": "Progresso ao vivo via MQTT. Temperaturas, camadas e tempo restante.",
  "why.cameras.t": "Câmeras Integradas",
  "why.cameras.d": "Feed RTSP ao vivo de cada impressora diretamente no app.",
  "why.financial.t": "Controlo Financeiro Completo",
  "why.financial.d":
    "Saiba quanto custa cada impressão: material, energia, depreciação e mão de obra.",
  "why.multiplatform.t": "Multi-plataforma",
  "why.multiplatform.d":
    "Mac (Apple Silicon + Intel) e Windows. Um software, todas as plataformas.",
  "why.security.t": "Segurança de Nível Empresarial",
  "why.security.d":
    "Criptografia scrypt para senhas, Ed25519 para licenças, sandbox Electron completa.",

  "pricing.eyebrow": "Planos",
  "pricing.title": "Comece grátis, escale quando precisar",
  "pricing.trial.name": "Trial Gratuito",
  "pricing.trial.price": "Grátis",
  "pricing.trial.period": "30 dias",
  "pricing.trial.f1": "Todas as funcionalidades",
  "pricing.trial.f2": "Sem cartão de crédito",
  "pricing.trial.f3": "Sem compromisso",
  "pricing.trial.cta": "Começar Grátis",
  "pricing.monthly.name": "Mensal",
  "pricing.monthly.price": "€9,99",
  "pricing.monthly.period": "/mês",
  "pricing.monthly.f1": "Todas as funcionalidades",
  "pricing.monthly.f2": "Atualizações automáticas",
  "pricing.monthly.f3": "Suporte prioritário",
  "pricing.monthly.cta": "Subscrever",
  "pricing.annual.name": "Anual",
  "pricing.annual.price": "€89,99",
  "pricing.annual.period": "/ano",
  "pricing.annual.save": "Poupe 25%",
  "pricing.annual.f1": "Todas as funcionalidades",
  "pricing.annual.f2": "Atualizações automáticas",
  "pricing.annual.f3": "Suporte prioritário",
  "pricing.annual.cta": "Subscrever",
  "pricing.lifetime.name": "Lifetime",
  "pricing.lifetime.price": "€199,99",
  "pricing.lifetime.period": "pagamento único",
  "pricing.lifetime.f1": "Todas as funcionalidades",
  "pricing.lifetime.f2": "Atualizações para sempre",
  "pricing.lifetime.f3": "Suporte vitalício",
  "pricing.lifetime.cta": "Comprar",

  "download.eyebrow": "Download",
  "download.title": "Transfira agora para o seu computador",
  "download.mac": "Download para Mac",
  "download.macDesc": "macOS 11+ (Apple Silicon ou Intel)",
  "download.win": "Download para Windows",
  "download.winDesc": "Windows 10+ (64-bit)",
  "download.version": "Versão atual",
  "download.requirements": "Requisitos do sistema",
  "download.macReq": "macOS 11 Big Sur ou superior, Apple Silicon ou Intel",
  "download.winReq": "Windows 10 ou superior, 64-bit",

  "faq.eyebrow": "Perguntas frequentes",
  "faq.title": "Ainda com dúvidas?",
  "faq.q1": "É seguro? Onde ficam os meus dados?",
  "faq.a1":
    "100% local. Os dados são guardados em SQLite no seu computador e nunca saem do seu PC.",
  "faq.q2": "Que impressoras são suportadas?",
  "faq.a2": "Bambu Lab, Prusa, OctoPrint, Moonraker e Creality — via MQTT e API local.",
  "faq.q3": "Funciona offline?",
  "faq.a3": "Sim, 100%. Só precisa de rede local para comunicar com as impressoras via MQTT/RTSP.",
  "faq.q4": "Posso usar em Mac e Windows?",
  "faq.a4": "Sim, a licença é válida para ambas as plataformas.",
  "faq.q5": "Como funciona o trial?",
  "faq.a5": "30 dias grátis com todas as funcionalidades. Sem cartão de crédito.",
  "faq.q6": "Posso exportar relatórios?",
  "faq.a6": "Sim, PDF e CSV para histórico, manutenção e financeiro.",

  "cta.title": "Comece a gerir a sua farm hoje",
  "cta.subtitle": "Download gratuito com 30 dias de trial. Sem cartão.",
  "cta.button": "Download Grátis — 30 Dias de Trial",
  "cta.trust": "Dados 100% locais · Sem cloud · Sem tracking",

  "footer.tagline": "Software profissional de gestão de farms de impressoras 3D.",
  "footer.privacy": "Política de privacidade",
  "footer.terms": "Termos de utilização",
  "footer.contact": "Contactos",
  "footer.legal": "Legal",
  "footer.company": "Empresa",
  "footer.social": "Redes sociais",
  "footer.rights": "Todos os direitos reservados.",
};

const en: Dict = {
  "nav.features": "Features",
  "nav.screenshots": "Screenshots",
  "nav.pricing": "Pricing",
  "nav.download": "Download",
  "nav.faq": "FAQ",
  "nav.language": "Language",
  "nav.menu": "Open menu",
  "nav.tryfree": "Try Free",

  "hero.badge": "Professional 3D Printing Software",
  "hero.title": "Manage your 3D printer farm like a pro",
  "hero.subtitle":
    "Real-time monitoring, cost control, preventive maintenance and financial management. 100% offline — your data never leaves your computer.",
  "hero.cta": "Try Free — 30 days",
  "hero.secondary": "See Features",
  "hero.imageAlt": "3D Scheng Dashboard showing 3D printer farm monitoring",

  "brands.title": "Compatible with the leading brands on the market",

  "features.eyebrow": "Features",
  "features.title": "13 modules. Everything your farm needs.",
  "features.subtitle":
    "From real-time monitoring to complete financial management, all in one software.",

  "feat.dashboard.t": "Dashboard",
  "feat.dashboard.d": "Farm overview with live status cards, real-time clock and material summary.",
  "feat.printers.t": "Printers",
  "feat.printers.d":
    "Complete management with brand filters, live MQTT status, temperatures and progress.",
  "feat.cameras.t": "Cameras",
  "feat.cameras.d": "Live RTSP monitoring with integrated video feed and per-printer status.",
  "feat.filaments.t": "Filaments",
  "feat.filaments.d":
    "Visual inventory with colour-coded cards, material filter, stock control and price/kg.",
  "feat.calculator.t": "Cost Calculator",
  "feat.calculator.d":
    "Detailed calculation with material, energy, depreciation and labour. 3 profit margins.",
  "feat.parts.t": "Parts & Materials",
  "feat.parts.d": "Spare parts inventory with low-stock alerts and supplier links.",
  "feat.history.t": "Print History",
  "feat.history.d":
    "Full table with printer, state, material and date filters. CSV and PDF export.",
  "feat.maintenance.t": "Preventive Maintenance",
  "feat.maintenance.d": "Maintenance plans per printer with hour tracking and PDF export.",
  "feat.queue.t": "Production Queue",
  "feat.queue.d": "Order management with priorities, 3D file library and printer assignment.",
  "feat.stats.t": "Statistics",
  "feat.stats.d": "Print charts, material usage, per-printer utilisation and success rate.",
  "feat.financial.t": "Financial Overview",
  "feat.financial.d": "Revenue, costs, profit, investments, revenue charts and cost breakdown.",
  "feat.settings.t": "Settings",
  "feat.settings.d": "Company customisation, Light/Dark/System theme and banner colour picker.",
  "feat.licensing.t": "Licensing",
  "feat.licensing.d":
    "30-day free trial, monthly/annual subscription, lifetime keys and offline verification.",

  "screenshots.eyebrow": "Screenshots",
  "screenshots.title": "See 3D Scheng in action",
  "screenshots.subtitle": "Professional interface with full light and dark mode support.",

  "ss.dashboard-light.t": "Dashboard — Light Mode",
  "ss.dashboard-light.d": "Farm overview with live printer status.",
  "ss.dashboard-dark.t": "Dashboard — Dark Mode",
  "ss.dashboard-dark.d": "The same powerful interface, comfortable for night work.",
  "ss.printers.t": "Printer Management",
  "ss.printers.d": "Brand filters, live status and per-printer details.",
  "ss.cameras.t": "RTSP Cameras",
  "ss.cameras.d": "Live video feed directly in the app.",
  "ss.filaments.t": "Filament Inventory",
  "ss.filaments.d": "Colour-coded cards with per-material stock control.",
  "ss.calculator.t": "Cost Calculator",
  "ss.calculator.d": "Calculate the price of each print with all variables.",
  "ss.parts.t": "Parts & Materials",
  "ss.parts.d": "Inventory with low-stock alerts.",
  "ss.financial.t": "Financial Overview",
  "ss.financial.d": "Revenue, cost and investment charts.",
  "ss.settings.t": "Settings",
  "ss.settings.d": "Theme, banner colour and company customisation.",

  "why.eyebrow": "Why 3D Scheng",
  "why.title": "What makes 3D Scheng different",
  "why.offline.t": "100% Offline",
  "why.offline.d":
    "Your data never leaves your computer. No cloud, no server subscriptions, no risks.",
  "why.realtime.t": "Real-Time Monitoring",
  "why.realtime.d": "Live progress via MQTT. Temperatures, layers and remaining time.",
  "why.cameras.t": "Integrated Cameras",
  "why.cameras.d": "Live RTSP feed from each printer directly in the app.",
  "why.financial.t": "Complete Financial Control",
  "why.financial.d":
    "Know exactly what each print costs: material, energy, depreciation and labour.",
  "why.multiplatform.t": "Multi-platform",
  "why.multiplatform.d": "Mac (Apple Silicon + Intel) and Windows. One software, every platform.",
  "why.security.t": "Enterprise-Grade Security",
  "why.security.d": "scrypt password hashing, Ed25519 licence verification, full Electron sandbox.",

  "pricing.eyebrow": "Pricing",
  "pricing.title": "Start free, scale when you need",
  "pricing.trial.name": "Free Trial",
  "pricing.trial.price": "Free",
  "pricing.trial.period": "30 days",
  "pricing.trial.f1": "All features",
  "pricing.trial.f2": "No credit card",
  "pricing.trial.f3": "No commitment",
  "pricing.trial.cta": "Start Free",
  "pricing.monthly.name": "Monthly",
  "pricing.monthly.price": "€9.99",
  "pricing.monthly.period": "/month",
  "pricing.monthly.f1": "All features",
  "pricing.monthly.f2": "Automatic updates",
  "pricing.monthly.f3": "Priority support",
  "pricing.monthly.cta": "Subscribe",
  "pricing.annual.name": "Annual",
  "pricing.annual.price": "€89.99",
  "pricing.annual.period": "/year",
  "pricing.annual.save": "Save 25%",
  "pricing.annual.f1": "All features",
  "pricing.annual.f2": "Automatic updates",
  "pricing.annual.f3": "Priority support",
  "pricing.annual.cta": "Subscribe",
  "pricing.lifetime.name": "Lifetime",
  "pricing.lifetime.price": "€199.99",
  "pricing.lifetime.period": "one-time payment",
  "pricing.lifetime.f1": "All features",
  "pricing.lifetime.f2": "Updates forever",
  "pricing.lifetime.f3": "Lifetime support",
  "pricing.lifetime.cta": "Buy",

  "download.eyebrow": "Download",
  "download.title": "Download now for your computer",
  "download.mac": "Download for Mac",
  "download.macDesc": "macOS 11+ (Apple Silicon or Intel)",
  "download.win": "Download for Windows",
  "download.winDesc": "Windows 10+ (64-bit)",
  "download.version": "Current version",
  "download.requirements": "System requirements",
  "download.macReq": "macOS 11 Big Sur or later, Apple Silicon or Intel",
  "download.winReq": "Windows 10 or later, 64-bit",

  "faq.eyebrow": "FAQ",
  "faq.title": "Still have questions?",
  "faq.q1": "Is it safe? Where is my data stored?",
  "faq.a1": "100% local. Data is stored in SQLite on your computer and never leaves your PC.",
  "faq.q2": "Which printers are supported?",
  "faq.a2": "Bambu Lab, Prusa, OctoPrint, Moonraker and Creality — via MQTT and local API.",
  "faq.q3": "Does it work offline?",
  "faq.a3": "Yes, 100%. You only need a local network to communicate with printers via MQTT/RTSP.",
  "faq.q4": "Can I use it on Mac and Windows?",
  "faq.a4": "Yes, the licence is valid for both platforms.",
  "faq.q5": "How does the trial work?",
  "faq.a5": "30 days free with all features. No credit card required.",
  "faq.q6": "Can I export reports?",
  "faq.a6": "Yes, PDF and CSV for history, maintenance and financials.",

  "cta.title": "Start managing your farm today",
  "cta.subtitle": "Free download with 30-day trial. No credit card required.",
  "cta.button": "Download Free — 30-Day Trial",
  "cta.trust": "100% local data · No cloud · No tracking",

  "footer.tagline": "Professional 3D printer farm management software.",
  "footer.privacy": "Privacy policy",
  "footer.terms": "Terms of use",
  "footer.contact": "Contact",
  "footer.legal": "Legal",
  "footer.company": "Company",
  "footer.social": "Social",
  "footer.rights": "All rights reserved.",
};

const es: Dict = {
  "nav.features": "Funciones",
  "nav.screenshots": "Capturas",
  "nav.pricing": "Precios",
  "nav.download": "Descargar",
  "nav.faq": "Preguntas",
  "nav.language": "Idioma",
  "nav.menu": "Abrir menú",
  "nav.tryfree": "Probar Gratis",

  "hero.badge": "Software Profesional para Impresión 3D",
  "hero.title": "Gestione su granja de impresoras 3D como un profesional",
  "hero.subtitle":
    "Monitoreo en tiempo real, control de costes, mantenimiento preventivo y gestión financiera. 100% offline, sus datos nunca salen de su ordenador.",
  "hero.cta": "Probar Gratis — 30 días",
  "hero.secondary": "Ver Funciones",
  "hero.imageAlt": "Dashboard del 3D Scheng mostrando monitoreo de granja de impresoras 3D",

  "brands.title": "Compatible con las principales marcas del mercado",

  "features.eyebrow": "Funciones",
  "features.title": "13 módulos. Todo lo que su granja necesita.",
  "features.subtitle":
    "Del monitoreo en tiempo real a la gestión financiera completa, todo en un solo software.",

  "feat.dashboard.t": "Dashboard",
  "feat.dashboard.d":
    "Vista general de la granja con tarjetas de estado en vivo, reloj y resumen de materiales.",
  "feat.printers.t": "Impresoras",
  "feat.printers.d":
    "Gestión completa con filtros por marca, estado MQTT en vivo, temperaturas y progreso.",
  "feat.cameras.t": "Cámaras",
  "feat.cameras.d": "Monitoreo RTSP en vivo con feed de vídeo integrado y estado por impresora.",
  "feat.filaments.t": "Filamentos",
  "feat.filaments.d":
    "Inventario visual con tarjetas por color, filtro por material, control de stock y precio/kg.",
  "feat.calculator.t": "Calculadora de Costes",
  "feat.calculator.d":
    "Cálculo detallado con material, energía, depreciación y mano de obra. 3 márgenes de ganancia.",
  "feat.parts.t": "Piezas y Materiales",
  "feat.parts.d": "Inventario de repuestos con alertas de stock bajo y enlaces a proveedores.",
  "feat.history.t": "Historial de Impresiones",
  "feat.history.d":
    "Tabla con filtros por impresora, estado, material y fecha. Exportación CSV y PDF.",
  "feat.maintenance.t": "Mantenimiento Preventivo",
  "feat.maintenance.d":
    "Planes de mantenimiento por impresora con seguimiento de horas y exportación PDF.",
  "feat.queue.t": "Cola de Producción",
  "feat.queue.d":
    "Gestión de pedidos con prioridades, biblioteca de archivos 3D y asignación a impresoras.",
  "feat.stats.t": "Estadísticas",
  "feat.stats.d":
    "Gráficos de impresiones, uso de material, utilización por impresora y tasa de éxito.",
  "feat.financial.t": "Visión Financiera",
  "feat.financial.d":
    "Ingresos, costes, ganancia, inversiones, gráficos de ingresos y distribución de costes.",
  "feat.settings.t": "Configuración",
  "feat.settings.d":
    "Personalización de empresa, tema Claro/Oscuro/Sistema y selector de color del banner.",
  "feat.licensing.t": "Licenciamiento",
  "feat.licensing.d":
    "Prueba gratuita de 30 días, suscripción mensual/anual, claves lifetime y verificación offline.",

  "screenshots.eyebrow": "Capturas",
  "screenshots.title": "Vea 3D Scheng en acción",
  "screenshots.subtitle": "Interfaz profesional con soporte completo de modo claro y oscuro.",

  "ss.dashboard-light.t": "Dashboard — Modo Claro",
  "ss.dashboard-light.d": "Vista general de la granja con estado de impresoras en vivo.",
  "ss.dashboard-dark.t": "Dashboard — Modo Oscuro",
  "ss.dashboard-dark.d": "La misma interfaz potente, cómoda para trabajar de noche.",
  "ss.printers.t": "Gestión de Impresoras",
  "ss.printers.d": "Filtros por marca, estado en vivo y detalles de cada impresora.",
  "ss.cameras.t": "Cámaras RTSP",
  "ss.cameras.d": "Feed de vídeo en vivo directamente en la app.",
  "ss.filaments.t": "Inventario de Filamentos",
  "ss.filaments.d": "Tarjetas por color con control de stock por material.",
  "ss.calculator.t": "Calculadora de Costes",
  "ss.calculator.d": "Calcule el precio de cada impresión con todas las variables.",
  "ss.parts.t": "Piezas y Materiales",
  "ss.parts.d": "Inventario con alertas de stock bajo.",
  "ss.financial.t": "Visión Financiera",
  "ss.financial.d": "Gráficos de ingresos, costes e inversiones.",
  "ss.settings.t": "Configuración",
  "ss.settings.d": "Tema, color del banner y personalización de empresa.",

  "why.eyebrow": "Por qué 3D Scheng",
  "why.title": "Qué hace diferente al 3D Scheng",
  "why.offline.t": "100% Offline",
  "why.offline.d":
    "Sus datos nunca salen de su ordenador. Sin nube, sin suscripciones de servidor, sin riesgos.",
  "why.realtime.t": "Monitoreo en Tiempo Real",
  "why.realtime.d": "Progreso en vivo vía MQTT. Temperaturas, capas y tiempo restante.",
  "why.cameras.t": "Cámaras Integradas",
  "why.cameras.d": "Feed RTSP en vivo de cada impresora directamente en la app.",
  "why.financial.t": "Control Financiero Completo",
  "why.financial.d":
    "Sepa cuánto cuesta cada impresión: material, energía, depreciación y mano de obra.",
  "why.multiplatform.t": "Multiplataforma",
  "why.multiplatform.d":
    "Mac (Apple Silicon + Intel) y Windows. Un software, todas las plataformas.",
  "why.security.t": "Seguridad de Nivel Empresarial",
  "why.security.d":
    "Hash de contraseñas scrypt, verificación de licencias Ed25519, sandbox Electron completa.",

  "pricing.eyebrow": "Precios",
  "pricing.title": "Empiece gratis, escale cuando necesite",
  "pricing.trial.name": "Prueba Gratuita",
  "pricing.trial.price": "Gratis",
  "pricing.trial.period": "30 días",
  "pricing.trial.f1": "Todas las funciones",
  "pricing.trial.f2": "Sin tarjeta de crédito",
  "pricing.trial.f3": "Sin compromiso",
  "pricing.trial.cta": "Comenzar Gratis",
  "pricing.monthly.name": "Mensual",
  "pricing.monthly.price": "€9,99",
  "pricing.monthly.period": "/mes",
  "pricing.monthly.f1": "Todas las funciones",
  "pricing.monthly.f2": "Actualizaciones automáticas",
  "pricing.monthly.f3": "Soporte prioritario",
  "pricing.monthly.cta": "Suscribirse",
  "pricing.annual.name": "Anual",
  "pricing.annual.price": "€89,99",
  "pricing.annual.period": "/año",
  "pricing.annual.save": "Ahorre 25%",
  "pricing.annual.f1": "Todas las funciones",
  "pricing.annual.f2": "Actualizaciones automáticas",
  "pricing.annual.f3": "Soporte prioritario",
  "pricing.annual.cta": "Suscribirse",
  "pricing.lifetime.name": "Lifetime",
  "pricing.lifetime.price": "€199,99",
  "pricing.lifetime.period": "pago único",
  "pricing.lifetime.f1": "Todas las funciones",
  "pricing.lifetime.f2": "Actualizaciones para siempre",
  "pricing.lifetime.f3": "Soporte vitalicio",
  "pricing.lifetime.cta": "Comprar",

  "download.eyebrow": "Descargar",
  "download.title": "Descargue ahora para su ordenador",
  "download.mac": "Descargar para Mac",
  "download.macDesc": "macOS 11+ (Apple Silicon o Intel)",
  "download.win": "Descargar para Windows",
  "download.winDesc": "Windows 10+ (64-bit)",
  "download.version": "Versión actual",
  "download.requirements": "Requisitos del sistema",
  "download.macReq": "macOS 11 Big Sur o superior, Apple Silicon o Intel",
  "download.winReq": "Windows 10 o superior, 64-bit",

  "faq.eyebrow": "Preguntas frecuentes",
  "faq.title": "¿Aún tiene dudas?",
  "faq.q1": "¿Es seguro? ¿Dónde se guardan mis datos?",
  "faq.a1": "100% local. Los datos se guardan en SQLite en su ordenador y nunca salen de su PC.",
  "faq.q2": "¿Qué impresoras son compatibles?",
  "faq.a2": "Bambu Lab, Prusa, OctoPrint, Moonraker y Creality — vía MQTT y API local.",
  "faq.q3": "¿Funciona offline?",
  "faq.a3": "Sí, 100%. Solo necesita red local para comunicarse con las impresoras vía MQTT/RTSP.",
  "faq.q4": "¿Puedo usarlo en Mac y Windows?",
  "faq.a4": "Sí, la licencia es válida para ambas plataformas.",
  "faq.q5": "¿Cómo funciona la prueba?",
  "faq.a5": "30 días gratis con todas las funciones. Sin tarjeta de crédito.",
  "faq.q6": "¿Puedo exportar informes?",
  "faq.a6": "Sí, PDF y CSV para historial, mantenimiento y finanzas.",

  "cta.title": "Empiece a gestionar su granja hoy",
  "cta.subtitle": "Descarga gratuita con 30 días de prueba. Sin tarjeta de crédito.",
  "cta.button": "Descarga Gratis — 30 Días de Prueba",
  "cta.trust": "Datos 100% locales · Sin nube · Sin rastreo",

  "footer.tagline": "Software profesional de gestión de granjas de impresoras 3D.",
  "footer.privacy": "Política de privacidad",
  "footer.terms": "Términos de uso",
  "footer.contact": "Contacto",
  "footer.legal": "Legal",
  "footer.company": "Empresa",
  "footer.social": "Redes sociales",
  "footer.rights": "Todos los derechos reservados.",
};

const dictionaries: Record<Locale, Dict> = { pt, en, es };

const STORAGE_KEY = "3dscheng.locale";

type I18nValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider3D({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("pt");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored && locales.includes(stored)) {
      setLocaleState(stored);
      return;
    }
    const nav = window.navigator.language.slice(0, 2).toLowerCase();
    if (locales.includes(nav as Locale)) setLocaleState(nav as Locale);
  }, []);

  useEffect(() => {
    document.documentElement.lang = localeMeta[locale].htmlLang;
  }, [locale]);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
  }, []);

  const t = useCallback(
    (key: string) => dictionaries[locale][key] ?? dictionaries.en[key] ?? key,
    [locale],
  );

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function use3DI18n() {
  // biome-ignore lint/correctness/useHookAtTopLevel: custom hook
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("use3DI18n must be used within I18nProvider3D");
  return ctx;
}

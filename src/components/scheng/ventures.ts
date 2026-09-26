import { Boxes, Building2, Rocket } from "lucide-react";

const orbitalColorUrl = "/logos/orbital-mark.png";
const importsLogoUrl = "/logos/scheng-imports.png";
const logoProUrl = "/logos/scheng-pro.png";
const techLogoUrl = "/logos/scheng-technology.png";
const logo3dUrl = "/logos/scheng-3d.png";
const logoGuiafinUrl = "/logos/guiafin-icon.png";

export type VentureLogo = {
  src: string;
  label: string;
  chip?: "light" | "dark";
  zoom?: boolean;
};

export type Venture = {
  slug: string;
  icon: typeof Rocket;
  k: string;
  name: string;
  logos?: VentureLogo[];
  /** Number of i18n feature bullets available (`${k}.f1`...). */
  features: number;
  products?: Product[];
  /**
   * Página ainda a ser construída. Mostra o aviso de manutenção, esconde a
   * galeria vazia, tira a página do sitemap e marca-a `noindex`. Apagar esta
   * linha é o que "solta" a página.
   */
  inProgress?: true;
};

export type Product = {
  slug: string;
  k: string;
  name: string;
  logo: VentureLogo;
  features: number;
  /** Set when the product already has a dedicated site inside this app. */
  externalTo?: string;
  /** Gallery images shown on the product detail page. */
  gallery?: { src: string; alt: string }[];
  parentSlug: string;
  parentName: string;
  /** Ver `Venture.inProgress`. */
  inProgress?: true;
};

export const products: Product[] = [
  {
    slug: "guiafin",
    k: "pr1",
    name: "GuiaFin",
    logo: { src: logoGuiafinUrl, label: "GuiaFin", chip: "dark" },
    features: 3,
    externalTo: "/guiafin",
    parentSlug: "scheng-technology",
    parentName: "Scheng Technology",
  },
  {
    slug: "3d-scheng",
    k: "pr2",
    name: "3D Scheng",
    logo: { src: logo3dUrl, label: "3D Scheng", chip: "dark" },
    features: 3,
    externalTo: "/3dscheng",
    gallery: [
      { src: "/3dscheng/dashboard-light.webp", alt: "Dashboard — Modo Claro" },
      { src: "/3dscheng/printers.webp", alt: "Gestão de Impressoras" },
      { src: "/3dscheng/cameras.webp", alt: "Câmaras RTSP" },
      { src: "/3dscheng/filaments.webp", alt: "Inventário de Filamentos" },
      { src: "/3dscheng/calculator.webp", alt: "Calculadora de Custos" },
      { src: "/3dscheng/financial.webp", alt: "Visão Financeira" },
    ],
    parentSlug: "scheng-technology",
    parentName: "Scheng Technology",
  },
  {
    slug: "scheng-pro",
    k: "pr3",
    name: "Scheng Pro",
    logo: { src: logoProUrl, label: "Scheng Pro", chip: "light", zoom: true },
    features: 3,
    parentSlug: "scheng-technology",
    parentName: "Scheng Technology",
    // Sem site próprio e sem fotografias, ao contrário do GuiaFin e do 3D Scheng.
    inProgress: true,
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export const ventures: Venture[] = [
  {
    slug: "scheng-orbital-system",
    icon: Rocket,
    k: "v1",
    name: "Scheng Orbital System",
    logos: [{ src: orbitalColorUrl, label: "Scheng Orbital System", chip: "light" }],
    features: 3,
    inProgress: true,
  },
  {
    slug: "scheng-imports",
    icon: Building2,
    k: "v2",
    name: "Scheng Imports",
    logos: [{ src: importsLogoUrl, label: "Scheng Imports", chip: "light", zoom: true }],
    features: 3,
    inProgress: true,
  },
  {
    slug: "scheng-technology",
    icon: Boxes,
    k: "v3",
    name: "Scheng Technology",
    logos: [{ src: techLogoUrl, label: "Scheng Technology", chip: "light" }],
    features: 3,
    products: products.filter((p) => p.parentSlug === "scheng-technology"),
  },
];

export function getVenture(slug: string) {
  return ventures.find((v) => v.slug === slug);
}

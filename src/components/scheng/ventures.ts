import { Building2, Boxes, Rocket, Sparkles } from "lucide-react";
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
};

export type Product = {
  slug: string;
  k: string;
  name: string;
  logo: VentureLogo;
  features: number;
  /** Set when the product already has a dedicated site inside this app. */
  externalTo?: string;
  parentSlug: string;
  parentName: string;
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
    logos: [
      { src: orbitalColorUrl, label: "Scheng Orbital System", chip: "light" },
    ],
    features: 3,
  },
  {
    slug: "scheng-imports",
    icon: Building2,
    k: "v2",
    name: "Scheng Imports",
    logos: [
      { src: importsLogoUrl, label: "Scheng Imports", chip: "light", zoom: true },
    ],
    features: 3,
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
  {
    slug: "scheng-atelier",
    icon: Sparkles,
    k: "v4",
    name: "Scheng Atelier",
    features: 3,
  },
];

export function getVenture(slug: string) {
  return ventures.find((v) => v.slug === slug);
}
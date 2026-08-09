import { Building2, Boxes, Rocket, Sparkles } from "lucide-react";
import orbitalColor from "@/assets/orbital-mark.png.asset.json";
import importsLogo from "@/assets/scheng-imports-logo.png.asset.json";
import logoPro from "@/assets/scheng-pro-logo.png.asset.json";
import techLogo from "@/assets/scheng-technology-logo.png.asset.json";
import logo3d from "@/assets/scheng3d-logo-transparent.png.asset.json";
import logoGuiafin from "@/assets/guiafin-icon-transparent.png.asset.json";

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
  externalTo?: "/";
  parentSlug: string;
  parentName: string;
};

export const products: Product[] = [
  {
    slug: "guiafin",
    k: "pr1",
    name: "GuiaFin",
    logo: { src: logoGuiafin.url, label: "GuiaFin", chip: "dark" },
    features: 3,
    externalTo: "/",
    parentSlug: "scheng-technology",
    parentName: "Scheng Technology",
  },
  {
    slug: "3d-scheng",
    k: "pr2",
    name: "3D Scheng",
    logo: { src: logo3d.url, label: "3D Scheng", chip: "dark" },
    features: 3,
    parentSlug: "scheng-technology",
    parentName: "Scheng Technology",
  },
  {
    slug: "scheng-pro",
    k: "pr3",
    name: "Scheng Pro",
    logo: { src: logoPro.url, label: "Scheng Pro", chip: "light", zoom: true },
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
      { src: orbitalColor.url, label: "Scheng Orbital System", chip: "light" },
    ],
    features: 3,
  },
  {
    slug: "scheng-imports",
    icon: Building2,
    k: "v2",
    name: "Scheng Imports",
    logos: [
      { src: importsLogo.url, label: "Scheng Imports", chip: "light", zoom: true },
    ],
    features: 3,
  },
  {
    slug: "scheng-technology",
    icon: Boxes,
    k: "v3",
    name: "Scheng Technology",
    logos: [{ src: techLogo.url, label: "Scheng Technology", chip: "light" }],
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
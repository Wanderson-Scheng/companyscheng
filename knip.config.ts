import type { KnipConfig } from "knip";

const config: KnipConfig = {
  entry: ["src/routes/__root.tsx", "src/routes/*.tsx", "src/router.tsx", "app.config.ts"],
  project: ["src/**/*.{ts,tsx}"],
  ignore: ["src/assets/**", "src/components/ui/**"],
  ignoreDependencies: [
    "@lovable.dev/vite-tanstack-config",
    "tw-animate-css",
    "@tailwindcss/vite",
    "nitro",
  ],
};

export default config;

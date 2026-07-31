import logoAsset from "@/assets/guiafin-logo.png.asset.json";
import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Globe, Menu, X } from "lucide-react";
import { locales, localeMeta, useI18n, type Locale } from "@/lib/i18n";

function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t("nav.language")}
        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        <Globe className="size-4 text-muted-foreground" aria-hidden="true" />
        {localeMeta[locale].short}
        <ChevronDown className="size-3.5 text-muted-foreground" aria-hidden="true" />
      </button>
      {open && (
        <ul
          role="listbox"
          aria-label={t("nav.language")}
          className="absolute right-0 z-50 mt-2 w-44 animate-rise overflow-hidden rounded-2xl border border-border bg-popover p-1 shadow-[var(--shadow-soft)]"
        >
          {locales.map((l: Locale) => (
            <li key={l}>
              <button
                type="button"
                role="option"
                aria-selected={l === locale}
                onClick={() => {
                  setLocale(l);
                  setOpen(false);
                }}
                className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm text-popover-foreground transition-colors hover:bg-surface"
              >
                <span>{localeMeta[l].label}</span>
                {l === locale ? <Check className="size-4 text-primary" aria-hidden="true" /> : null}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const links = [
  { href: "#features", key: "nav.features" },
  { href: "#why", key: "nav.why" },
  { href: "#screens", key: "nav.screens" },
  { href: "#faq", key: "nav.faq" },
];

export function Nav() {
  const { t } = useI18n();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 sm:flex sm:justify-between">
        <a href="#top" className="flex min-w-0 items-center gap-2.5">
          <img
            src={logoAsset.url}
            alt=""
            width={36}
            height={36}
            className="size-9 shrink-0 rounded-xl"
            aria-hidden="true"
          />
          <span className="truncate text-lg font-extrabold tracking-tight">GuiaFin</span>
        </a>

        <nav aria-label="GuiaFin" className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
            >
              {t(l.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <a
            href="#download"
            className="hidden rounded-full px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5 sm:inline-flex"
            style={{ backgroundImage: "var(--gradient-primary)" }}
          >
            {t("nav.download")}
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={t("nav.menu")}
            aria-expanded={mobileOpen}
            className="grid size-10 place-items-center rounded-full border border-border md:hidden"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          aria-label={t("nav.menu")}
          className="animate-rise border-t border-border bg-background px-5 py-3 md:hidden"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block rounded-xl px-3 py-3 text-sm font-medium text-foreground hover:bg-surface"
            >
              {t(l.key)}
            </a>
          ))}
          <a
            href="#download"
            onClick={() => setMobileOpen(false)}
            className="mt-2 block rounded-xl px-3 py-3 text-center text-sm font-semibold text-primary-foreground"
            style={{ backgroundImage: "var(--gradient-primary)" }}
          >
            {t("nav.download")}
          </a>
        </nav>
      )}
    </header>
  );
}
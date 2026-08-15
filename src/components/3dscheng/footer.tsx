import { Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import { use3DI18n } from "./i18n";

const logoText = "/logos/3dscheng-text.png";

export function Footer3D() {
  const { t } = use3DI18n();
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <img
            src={logoText}
            alt="3D Scheng"
            width={400}
            height={133}
            className="h-8 w-auto dark:invert"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {t("footer.tagline")}
          </p>
        </div>

        <nav aria-label={t("footer.legal")}>
          <h2 className="text-sm font-bold">{t("footer.legal")}</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li>
              <a href="/privacy" className="transition-colors hover:text-foreground">
                {t("footer.privacy")}
              </a>
            </li>
            <li>
              <a href="/terms" className="transition-colors hover:text-foreground">
                {t("footer.terms")}
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-bold">{t("footer.contact")}</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li>
              <a
                href="mailto:Info@companyscheng.com"
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Mail className="size-4" aria-hidden="true" />
                Info@companyscheng.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold">{t("footer.social")}</h2>
          <ul className="mt-4 flex gap-2">
            {[
              { Icon: Twitter, label: "X", href: "https://x.com/CompanyScheng" },
              {
                Icon: Instagram,
                label: "Instagram",
                href: "https://www.instagram.com/companyscheng",
              },
              {
                Icon: Linkedin,
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/wanderson-scheng-769b72379",
              },
            ].map(({ Icon, label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  rel="noreferrer noopener"
                  target="_blank"
                  className="grid size-10 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:text-primary"
                >
                  <Icon className="size-4" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border px-5 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} 3D Scheng — Scheng Technology. {t("footer.rights")}
      </div>
    </footer>
  );
}

import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { LOCALES, useI18n } from "@/i18n";

function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n();
  const [open, setOpen] = useState(false);
  const current = LOCALES.find((l) => l.code === locale);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t("nav.language")}
        className="flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
      >
        <span className="text-base leading-none">◍</span>
        {current?.label}
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute end-0 z-50 mt-2 w-44 overflow-hidden rounded-xl border border-border bg-popover p-1 shadow-lg"
        >
          {LOCALES.map((l) => (
            <li key={l.code}>
              <button
                type="button"
                role="option"
                aria-selected={l.code === locale}
                onClick={() => {
                  setLocale(l.code);
                  setOpen(false);
                }}
                className={`w-full rounded-lg px-3 py-2 text-start text-sm transition-colors hover:bg-accent ${
                  l.code === locale
                    ? "bg-accent font-semibold text-accent-foreground"
                    : "text-popover-foreground"
                }`}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function SiteHeader() {
  const { t } = useI18n();
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-xl bg-primary font-display text-lg font-bold text-primary-foreground">
            SE
          </span>
          <span className="leading-tight">
            <span className="block font-display text-sm font-semibold text-foreground sm:text-base">
              {t("brand.name")}
            </span>
            <span className="block text-xs italic text-secondary">{t("brand.slogan")}</span>
          </span>
        </Link>
        <nav className="ms-auto flex items-center gap-1 text-sm sm:gap-2">
          <Link
            to="/orientation"
            className="rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            activeProps={{ className: "rounded-lg px-3 py-2 font-semibold text-foreground" }}
          >
            {t("nav.home")}
          </Link>
          <Link
            to="/universities"
            className="rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            activeProps={{ className: "rounded-lg px-3 py-2 font-semibold text-foreground" }}
          >
            {t("nav.universities")}
          </Link>
          <Link
            to="/admissions"
            className="rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            activeProps={{ className: "rounded-lg px-3 py-2 font-semibold text-foreground" }}
          >
            {t("nav.admissions")}
          </Link>
          <Link
            to="/paper-work"
            className="rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            activeProps={{ className: "rounded-lg px-3 py-2 font-semibold text-foreground" }}
          >
            {t("nav.paperwork")}
          </Link>
          <Link
            to="/partners"
            className="rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            activeProps={{ className: "rounded-lg px-3 py-2 font-semibold text-foreground" }}
          >
            {t("nav.partners")}
          </Link>
          <Link
            to="/embassies"
            className="rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            activeProps={{ className: "rounded-lg px-3 py-2 font-semibold text-foreground" }}
          >
            {t("nav.embassies")}
          </Link>
          <Link
            to="/gpa-conversion"
            className="rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            activeProps={{ className: "rounded-lg px-3 py-2 font-semibold text-foreground" }}
          >
            {t("nav.gpa")}
          </Link>
          <Link
            to="/scholarships"
            className="rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            activeProps={{ className: "rounded-lg px-3 py-2 font-semibold text-foreground" }}
          >
            {t("nav.scholarships")}
          </Link>
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  const { t } = useI18n();
  return (
    <footer className="mt-20 border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <p className="font-display text-lg font-semibold text-foreground">{t("brand.name")}</p>
        <p className="mt-1 text-sm italic text-secondary">{t("brand.slogan")}</p>
        <p className="mt-4 max-w-xl text-sm text-muted-foreground">{t("footer.tagline")}</p>
        <p className="mt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {t("brand.name")}. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

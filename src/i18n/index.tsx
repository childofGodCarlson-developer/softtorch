import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { DICTS, LOCALES, type LocaleCode } from "./translations";
import type { Label } from "@/data/catalog";

const STORAGE_KEY = "sebc-locale";

interface I18nValue {
  locale: LocaleCode;
  dir: "ltr" | "rtl";
  setLocale: (l: LocaleCode) => void;
  t: (key: string) => string;
  /** Bilingual data label: French for fr, English otherwise. */
  d: (label: Label) => string;
}

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<LocaleCode>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as LocaleCode | null;
    if (stored && stored in DICTS) {
      setLocaleState(stored);
      return;
    }
    const nav = window.navigator.language.slice(0, 2) as LocaleCode;
    if (nav in DICTS) setLocaleState(nav);
  }, []);

  const dir = LOCALES.find((l) => l.code === locale)?.dir ?? "ltr";

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
  }, [locale, dir]);

  const setLocale = useCallback((l: LocaleCode) => {
    setLocaleState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
  }, []);

  const value = useMemo<I18nValue>(
    () => ({
      locale,
      dir,
      setLocale,
      t: (key: string) => DICTS[locale][key] ?? DICTS.en[key] ?? key,
      d: (label: Label) => (locale === "fr" ? label.fr : label.en),
    }),
    [locale, dir, setLocale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}

export { LOCALES };
export type { LocaleCode };

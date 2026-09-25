import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";
import { useI18n } from "@/i18n";
import { JOBS, SPECIALTIES } from "@/data/catalog";
import { UNIVERSITIES } from "@/data/universities";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "After A-Level, Baccalauréat or OSSD — University Orientation" },
      {
        name: "description",
        content:
          "Multilingual orientation for Cameroonian students: match your series and dream job to a university specialty, a destination, a budget and a full application guide.",
      },
      { property: "og:title", content: "After A-Level, Baccalauréat or OSSD — University Orientation" },
      {
        property: "og:description",
        content:
          "Find the career, specialty and university that fit your series, destination and family budget — in Cameroon, Africa or worldwide.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const { t } = useI18n();

  const steps = [
    { title: t("home.step1.title"), text: t("home.step1.text") },
    { title: t("home.step2.title"), text: t("home.step2.text") },
    { title: t("home.step3.title"), text: t("home.step3.text") },
    { title: t("home.step4.title"), text: t("home.step4.text") },
  ];

  const stats = [
    { value: `${UNIVERSITIES.length}+`, label: t("home.stat.universities") },
    { value: `${JOBS.length}+`, label: t("home.stat.jobs") },
    { value: `${SPECIALTIES.length}+`, label: t("home.stat.specialties") },
    { value: "5", label: t("home.stat.languages") },
  ];

  return (
    <PageShell>
      <section className="relative overflow-hidden border-b border-border bg-primary text-primary-foreground">
        <div className="pointer-events-none absolute -end-24 -top-24 size-80 rounded-full bg-secondary/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -start-16 size-80 rounded-full bg-secondary/15 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
          <p className="inline-flex rounded-full border border-primary-foreground/25 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-secondary">
            {t("home.eyebrow")}
          </p>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {t("home.title")}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/80">{t("home.lead")}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/orientation"
              className="inline-flex items-center justify-center rounded-full bg-secondary px-7 py-3.5 font-semibold text-secondary-foreground shadow-lg transition-transform hover:-translate-y-0.5"
            >
              {t("home.cta")}
            </Link>
            <a
              href="#how"
              className="inline-flex items-center justify-center rounded-full border border-primary-foreground/30 px-7 py-3.5 font-semibold transition-colors hover:bg-primary-foreground/10"
            >
              {t("home.cta2")}
            </a>
          </div>
          <dl className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-3xl font-bold text-secondary">{s.value}</dt>
                <dd className="mt-1 text-sm text-primary-foreground/70">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="how" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2">
          {steps.map((s, i) => (
            <article
              key={s.title}
              className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 font-display font-bold text-primary">
                {i + 1}
              </span>
              <h2 className="mt-4 font-display text-xl font-semibold text-card-foreground">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            to="/orientation"
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            {t("home.cta")}
          </Link>
        </div>
      </section>
    </PageShell>
  );
}

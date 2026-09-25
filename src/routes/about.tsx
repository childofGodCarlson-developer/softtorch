import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";
import { useI18n } from "@/i18n";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Soft Education Bilingual College Orientation" },
      {
        name: "description",
        content:
          "Learn how Soft Education Bilingual College guides A-Level, Baccalauréat and OSSD students towards the right career, specialty and university.",
      },
      { property: "og:title", content: "About the orientation platform — Soft Education Bilingual College" },
      {
        property: "og:description",
        content: "A guidance tool built on the college's university guide for Cameroonian students.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useI18n();
  return (
    <PageShell>
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h1 className="font-display text-3xl font-bold text-foreground sm:text-4xl">{t("about.title")}</h1>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>{t("about.p1")}</p>
          <p>{t("about.p2")}</p>
          <p className="rounded-xl border border-border bg-card p-5 text-foreground">{t("about.p3")}</p>
        </div>
      </section>
    </PageShell>
  );
}

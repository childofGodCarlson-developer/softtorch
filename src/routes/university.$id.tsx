import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";
import { useI18n } from "@/i18n";
import { universityOf } from "@/data/universities";
import { specialtyOf } from "@/data/catalog";
import { buildGuide } from "@/lib/guide";
import { jsPDF } from "jspdf";
import { useState } from "react";

export const Route = createFileRoute("/university/$id")({
  loader: ({ params }) => {
    const uni = universityOf(params.id);
    if (!uni) throw notFound();
    return { name: uni.name, city: uni.city };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Institution not found" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.name} — Application guide`;
    const description = `Eligibility, documents, application procedure and visa steps for Cameroonian A-Level, Baccalauréat and OSSD holders applying to ${loaderData.name}.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: GuidePage,
  errorComponent: ({ error }) => (
    <PageShell>
      <div className="mx-auto max-w-3xl px-4 py-20" role="alert">
        <p className="text-foreground">{error.message}</p>
      </div>
    </PageShell>
  ),
  notFoundComponent: NotFoundInstitution,
});

function NotFoundInstitution() {
  return (
    <PageShell>
      <div className="mx-auto max-w-3xl px-4 py-20">
        <h1 className="font-display text-2xl font-bold text-foreground">Institution not found</h1>
        <Link to="/orientation" className="mt-4 inline-flex text-primary underline">
          Back to orientation
        </Link>
      </div>
    </PageShell>
  );
}

function Section({ title, items }: { title: string; items: string[] }) {
  const { t } = useI18n();
  if (items.length === 0) return null;
  return (
    <section className="mt-10">
      <h2 className="font-display text-xl font-semibold text-foreground">{title}</h2>
      <ol className="mt-4 space-y-3">
        {items.map((key, i) => (
          <li key={key} className="flex gap-3 rounded-xl border border-border bg-card p-4">
            <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
              {i + 1}
            </span>
            <span className="text-sm leading-relaxed text-muted-foreground">{t(key)}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

function visaLocation(countryCode: string, country: string) {
  const locations: Record<string, string> = {
    DE: "From Cameroon: submit the national student-visa application through the German Embassy in Yaoundé (consular section); arrange the required blocked account with a provider accepted by the embassy before the appointment.",
    FR: "From Cameroon: create the Études en France file with Campus France Cameroun in Yaoundé, complete the interview, then submit the visa file at the France visa application centre indicated by France-Visas.",
    BE: "From Cameroon: apply through the Belgian diplomatic mission in Yaoundé and follow the appointment instructions on Belgium's official visa portal.",
    CA: "From Cameroon: submit the study-permit application online through IRCC, then attend biometrics at the Canada Visa Application Centre (VAC) in Yaoundé when instructed.",
    GB: "From Cameroon: complete the Student visa application on GOV.UK, pay online, then book biometrics at the UK visa application centre shown in the application.",
    US: "From Cameroon: complete DS-160, pay the SEVIS and visa fees, and attend the F-1 interview at the U.S. Embassy in Yaoundé.",
  };
  return locations[countryCode] ?? `From Cameroon: use the official ${country} immigration portal, then attend the destination country's embassy or authorised visa centre in Yaoundé; confirm the exact centre before paying.`;
}

function GuidePage() {
  const { id } = Route.useParams();
  const { t, d } = useI18n();
  const uni = universityOf(id);
  if (!uni) return <NotFoundInstitution />;
  const guide = buildGuide(uni);
  const [pdfOpen, setPdfOpen] = useState(false);
  const [pdfPassword, setPdfPassword] = useState("");
  const [pdfError, setPdfError] = useState("");

  const downloadPdf = () => {
    const expected = import.meta.env.VITE_GUIDE_PDF_PASSWORD;
    if (!expected || pdfPassword !== expected) {
      setPdfError("Incorrect password. Request a code if you do not have one.");
      return;
    }
    const pdf = new jsPDF();
    const lines = [
      uni.name,
      `${uni.city}, ${d(uni.country)} | ${t(`lang.${uni.instruction}`)}`,
      "",
      d(uni.notes),
      `Cost: ${d(uni.cost)}`,
      "",
      "Eligibility",
      ...guide.eligibility.map((key) => `- ${t(key)}`),
      "",
      "Documents",
      ...guide.documents.map((key) => `- ${t(key)}`),
      "",
      "Procedure",
      ...guide.procedure.map((key) => `- ${t(key)}`),
      "",
      "Visa",
      ...guide.visa.map((key) => `- ${t(key)}`),
    ];
    pdf.setFontSize(11);
    pdf.text(pdf.splitTextToSize(lines.join("\n"), 180), 15, 20);
    pdf.save(`${uni.id}-application-guide.pdf`);
    setPdfOpen(false);
    setPdfPassword("");
  };

  return (
    <PageShell>
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <Link to="/orientation" className="text-sm font-medium text-primary hover:underline">
          ← {t("guide.back")}
        </Link>

        <header className="mt-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-secondary">{t("guide.title")}</p>
          <h1 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">{uni.name}</h1>
          <p className="mt-2 text-muted-foreground">
            {uni.city}, {d(uni.country)} · {t(`lang.${uni.instruction}`)} · {t(`budget.${uni.budget}`)}
          </p>
          <p className="mt-4 rounded-xl border border-border bg-card p-4 text-sm text-muted-foreground">
            {t("guide.for")}
          </p>
        </header>

        <div className="mt-6 flex flex-wrap gap-2">
          {uni.specialties.slice(0, 10).map((s) => (
            <span key={s} className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground">
              {d(specialtyOf(s).label)}
            </span>
          ))}
        </div>

        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{d(uni.notes)}</p>
        <p className="mt-3 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">{t("results.cost")}: </span>
          {d(uni.cost)}
        </p>

        <p className="mt-3 rounded-xl border border-border bg-muted/40 p-4 text-sm leading-relaxed text-muted-foreground">
          <span className="font-medium text-foreground">{uni.concours ? "Admission route: entrance exam (concours)." : "Admission route: selection on application dossier."}</span>{" "}
          {uni.concours
            ? "Check the institution's current competition notice for the eligible diploma, subjects, date, fee and exam location."
            : "The institution normally evaluates the submitted application; some programmes may still request an interview, portfolio or test."}
        </p>

        <Section title={t("guide.eligibility")} items={guide.eligibility} />
        <Section title={t("guide.documents")} items={guide.documents} />
        <Section title={t("guide.procedure")} items={guide.procedure} />
        <Section title={t("guide.visa")} items={guide.visa} />

        {guide.visa.length > 0 && (
          <p className="mt-4 rounded-xl border border-secondary/40 bg-secondary/5 p-4 text-sm leading-relaxed text-muted-foreground">
            {visaLocation(uni.countryCode, d(uni.country))}
          </p>
        )}

        <p className="mt-10 rounded-xl border-2 border-secondary/40 bg-secondary/5 p-4 text-sm text-foreground">
          {t("guide.note")}
        </p>

        <button type="button" onClick={() => setPdfOpen(true)} className="mt-5 inline-flex rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary hover:bg-primary/10">
          {t("guide.download")}
        </button>

        <a
            href={uni.website ?? `https://www.google.com/search?q=${encodeURIComponent(`${uni.name} official admissions`)}`}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            {t("guide.website")} →
          </a>
      </article>
      {pdfOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4" role="dialog" aria-modal="true">
          <div className="w-full max-w-md rounded-2xl bg-card p-6 shadow-xl">
            <h2 className="font-display text-xl font-semibold text-foreground">{t("guide.download")}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{t("guide.pdfPasswordHint")}</p>
            <input type="password" value={pdfPassword} onChange={(event) => { setPdfPassword(event.target.value); setPdfError(""); }} placeholder={t("guide.pdfPassword")} className="mt-4 w-full rounded-xl border border-input bg-background px-3 py-2" />
            {pdfError && <p className="mt-2 text-sm text-destructive">{pdfError}</p>}
            <div className="mt-5 flex flex-wrap gap-2">
              <button type="button" onClick={downloadPdf} className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">{t("guide.downloadConfirm")}</button>
              <Link to="/request-code" className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground">{t("guide.requestCode")}</Link>
              <button type="button" onClick={() => setPdfOpen(false)} className="rounded-full px-4 py-2.5 text-sm text-muted-foreground">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </PageShell>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";
import { useI18n } from "@/i18n";

export const Route = createFileRoute("/admissions")({ component: AdmissionsPage });

function AdmissionsPage() {
  const { t } = useI18n();
  const steps = [
    [
      "1. Choose a country and programme",
      "Use the official university portal or an official discovery service. Check whether your GCE A'Level, Baccalauréat or OSSD is accepted and whether the route is selection, test or concours.",
    ],
    [
      "2. Prepare documents in Cameroon",
      "Request certificates and transcripts from your school/exam board; obtain civil documents from the relevant mairie; apply for a passport through DGSN; use a hospital, bank, certified translator and regulated insurer as required.",
    ],
    [
      "3. Prove language and finances",
      "Take the required IELTS/TOEFL, TCF/TEF or German test through an authorised test centre. Ask your bank for sponsor evidence and follow the exact financial threshold of the destination.",
    ],
    [
      "4. Apply for admission",
      "Submit through the university's official admissions page. Campus France/Études en France, uni-assist, OUAC, UCAS or Common App are conditional routes: use them only when the institution instructs you to.",
    ],
    [
      "5. Apply for the visa from Cameroon",
      "Use the destination country's official immigration portal, then attend the embassy, consulate or authorised visa centre in Yaoundé. Do not pay an unofficial agent for an appointment.",
    ],
    [
      "6. Travel and enrol",
      "After approval, confirm accommodation, insurance, travel and arrival registration. Carry originals and certified copies for enrolment.",
    ],
  ];
  return (
    <PageShell>
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
          {t("page.admissions")}
        </p>
        <h1 className="mt-2 font-display text-3xl font-bold text-foreground">
          {t("page.admissions.title")}
        </h1>
        <p className="mt-4 text-muted-foreground">
          {t("page.admissions.lead")} Requirements change, so always confirm the current official
          checklist.
        </p>
        <div className="mt-8 space-y-4">
          {steps.map(([title, body]) => (
            <section key={title} className="rounded-2xl border border-border bg-card p-5">
              <h2 className="font-display text-lg font-semibold text-foreground">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </section>
          ))}
        </div>
        <div className="mt-8 rounded-2xl border-2 border-secondary/40 bg-secondary/5 p-5 text-sm text-foreground">
          <strong>Official Cameroon starting points:</strong> Campus France Cameroun for France, the
          German Embassy Yaoundé for Germany, France-Visas, IRCC Canada, GOV.UK visas and the U.S.
          Embassy Yaoundé. Use their current websites and never submit false documents.
        </div>
      </section>
    </PageShell>
  );
}

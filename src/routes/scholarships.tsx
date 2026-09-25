import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageShell } from "@/components/site-chrome";

export const Route = createFileRoute("/scholarships")({ component: ScholarshipsPage });

type Scholarship = {
  name: string;
  country: string;
  provider: string;
  coverage: string;
  documents: string;
  procedure: string;
  website: string;
};
const scholarships: Scholarship[] = [
  {
    name: "MEXT Undergraduate Scholarship",
    country: "Japan",
    provider: "Government of Japan",
    coverage:
      "Fully funded undergraduate study, monthly allowance, tuition and travel support subject to the annual call.",
    documents:
      "BAC or GCE A'Level results, transcripts, birth certificate, passport/ID, medical form, recommendation and study plan.",
    procedure:
      "Apply through the Embassy of Japan in Cameroon during the annual embassy-recommendation window, then complete screening and interviews.",
    website: "https://www.studyinjapan.go.jp/en/smap-stopj-applications-undergraduate/",
  },
  {
    name: "MEXT College of Technology (KOSEN)",
    country: "Japan",
    provider: "Government of Japan",
    coverage:
      "Fully funded technical higher-education pathway with preparatory education where required.",
    documents:
      "BAC or GCE A'Level documents, transcripts, identity documents, medical form and recommendation.",
    procedure:
      "Submit the embassy application, sit the required examinations and follow the Japanese government placement process.",
    website: "https://www.studyinjapan.go.jp/en/smap-stopj-applications-technology/",
  },
  {
    name: "Türkiye Scholarships",
    country: "Türkiye",
    provider: "Government of Türkiye",
    coverage:
      "Major funding package commonly including tuition, accommodation, stipend, health insurance and placement.",
    documents:
      "Diploma or expected graduation proof, transcripts, passport/ID, motivation letter and supporting achievements.",
    procedure:
      "Create an account and apply online during the annual call; shortlisted candidates may complete tests and an interview.",
    website: "https://www.turkiyeburslari.gov.tr/",
  },
  {
    name: "African Leadership University Mastercard Foundation Scholars",
    country: "Rwanda",
    provider: "African Leadership University / Mastercard Foundation",
    coverage:
      "Full-ride undergraduate support for selected African students with strong leadership, need and community impact.",
    documents:
      "ALU admission application, academic records, English evidence, financial-need information and leadership/community evidence.",
    procedure:
      "Apply for ALU admission, select the scholarship route and complete the separate financial-aid assessment if invited.",
    website: "https://www.alueducation.com/mastercard-foundation-scholars-program/",
  },
  {
    name: "Ashesi University need-based financial aid",
    country: "Ghana",
    provider: "Ashesi University",
    coverage:
      "Need-based aid that can substantially reduce or cover tuition and associated costs for selected students.",
    documents:
      "Admission application, BAC/GCE/IB/Cambridge/Canadian records, family financial information and supporting documents.",
    procedure:
      "Apply for admission and complete the financial-aid forms before the university deadline.",
    website: "https://www.ashesi.edu.gh/admissions/financial-aid.html",
  },
  {
    name: "University of Buea academic scholarships",
    country: "Cameroon",
    provider: "University of Buea",
    coverage:
      "Academic and programme-specific support subject to institutional calls and available funding.",
    documents:
      "Admission evidence, examination results, transcripts, identity documents and the published scholarship form.",
    procedure:
      "Monitor the University of Buea announcements and apply through the institution when a call opens.",
    website: "https://www.ubuea.cm/",
  },
  {
    name: "French Government and Campus France scholarships",
    country: "France",
    provider: "French Government / Campus France",
    coverage:
      "Scholarships vary by programme and call and may cover tuition, living costs, travel or research support.",
    documents:
      "Diplomas, transcripts, CV, motivation letter, language evidence and scholarship-specific forms.",
    procedure:
      "Check Campus France Cameroon and the relevant French institution for the current call, then follow its application route.",
    website: "https://www.campusfrance.org/en",
  },
  {
    name: "University of Toronto International Scholar Award",
    country: "Canada",
    provider: "University of Toronto",
    coverage:
      "Competitive, substantial tuition support for exceptional international undergraduates.",
    documents:
      "Admission application, transcripts, school nomination where required, personal profile and references.",
    procedure:
      "Apply for admission by the published deadline and complete the university scholarship/award steps.",
    website: "https://future.utoronto.ca/finances/scholarships/",
  },
  {
    name: "McGill Entrance Scholarships",
    country: "Canada",
    provider: "McGill University",
    coverage: "Entrance awards and major renewable scholarships; conditions vary by faculty.",
    documents: "Admission application, academic records and scholarship profile when requested.",
    procedure:
      "Submit the undergraduate admission application and review the awards portal after applying.",
    website: "https://www.mcgill.ca/studentaid/scholarships/",
  },
  {
    name: "Chevening Scholarships",
    country: "United Kingdom",
    provider: "UK Government",
    coverage: "Fully funded one-year master's: tuition, living allowance, travel and allowances.",
    documents: "Degree certificates, references, essays, passport and qualifying work experience.",
    procedure:
      "Create an account, submit the online application before the annual deadline, then complete interviews if shortlisted.",
    website: "https://www.chevening.org/scholarships/",
  },
  {
    name: "DAAD Scholarships",
    country: "Germany",
    provider: "German Academic Exchange Service",
    coverage:
      "Monthly grant and possible travel, insurance and study allowances depending on the call.",
    documents:
      "Degree/transcripts, CV, motivation letter, study plan, references and language proof.",
    procedure:
      "Search the DAAD database, select an eligible call and submit exactly through its stated portal.",
    website: "https://www.daad.de/en/study-and-research-in-germany/scholarships/",
  },
  {
    name: "Erasmus Mundus Joint Masters",
    country: "European Union",
    provider: "European Commission",
    coverage: "Full scholarships may include tuition, travel, visa and living support.",
    documents:
      "Degree, transcript, CV, motivation letter, references, passport and language proof.",
    procedure:
      "Choose a consortium programme and apply directly to it during its annual application window.",
    website:
      "https://education.ec.europa.eu/education-levels/higher-education/erasmus-mundus-joint-masters",
  },
  {
    name: "Australia Awards Scholarships",
    country: "Australia",
    provider: "Australian Government",
    coverage: "Tuition, return travel, establishment allowance, living support and health cover.",
    documents: "Academic records, identity, English proof and programme-specific forms.",
    procedure:
      "Check Cameroon eligibility and submit through the official country portal during the annual call.",
    website: "https://www.dfat.gov.au/people-to-people/australia-awards",
  },
];

function ScholarshipsPage() {
  const { t } = useI18n();
  const [country, setCountry] = useState("All");
  const countries = useMemo(
    () => ["All", ...new Set(scholarships.map((item) => item.country))],
    [],
  );
  const shown =
    country === "All" ? scholarships : scholarships.filter((item) => item.country === country);
  return (
    <PageShell>
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
          {t("page.scholarships")}
        </p>
        <h1 className="mt-2 font-display text-3xl font-bold text-foreground">
          {t("page.scholarships.title")}
        </h1>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          Explore university, government and organisation scholarships. Always verify eligibility,
          deadlines and required documents on the official provider website.
        </p>
        <label className="mt-8 block max-w-sm text-sm font-medium">
          Filter by country
          <select
            value={country}
            onChange={(event) => setCountry(event.target.value)}
            className="mt-1 w-full rounded-xl border border-input bg-background px-3 py-2"
          >
            {countries.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {shown.map((item) => (
            <article key={item.name} className="rounded-2xl border border-border bg-card p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
                {item.country} · {item.provider}
              </p>
              <h2 className="mt-2 font-display text-xl font-semibold">{item.name}</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                <strong>Coverage:</strong> {item.coverage}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                <strong>Documents:</strong> {item.documents}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                <strong>Application:</strong> {item.procedure}
              </p>
              <a
                href={item.website}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                Official scholarship details →
              </a>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageShell } from "@/components/site-chrome";
import { JOBS, SPECIALTIES, SERIES, specialtyOf } from "@/data/catalog";
import {
  UNIVERSITIES,
  budgetFor,
  type Budget,
  type EducationType,
  type University,
} from "@/data/universities";
import { useI18n } from "@/i18n";

export const Route = createFileRoute("/universities")({ component: UniversitiesPage });

function UniversitiesPage() {
  const { d, t } = useI18n();
  const [country, setCountry] = useState("");
  const [budget, setBudget] = useState<Budget | "">("");
  const [instruction, setInstruction] = useState("");
  const [education, setEducation] = useState<EducationType | "">("");
  const [specialty, setSpecialty] = useState("");
  const [job, setJob] = useState("");
  const [series, setSeries] = useState("");

  const countries = useMemo(() => [...new Set(UNIVERSITIES.map((u) => d(u.country)))].sort(), [d]);
  const filtered = UNIVERSITIES.filter((u) => {
    if (country && d(u.country) !== country) return false;
    if (budget && budgetFor(u, specialty || undefined) !== budget) return false;
    if (instruction && u.instruction !== instruction && u.instruction !== "both") return false;
    if (education && u.educationTypes && !u.educationTypes.includes(education)) return false;
    if (specialty && !u.specialties.includes(specialty)) return false;
    if (job) {
      const selectedJob = JOBS.find((item) => item.id === job);
      if (!selectedJob || !selectedJob.specialties.some((id) => u.specialties.includes(id)))
        return false;
    }
    if (series) {
      const selectedSeries = SERIES.find((item) => item.id === series);
      const science = [
        "medicine",
        "engineering",
        "cs",
        "software",
        "physics",
        "maths",
        "chemeng",
        "envsci",
        "energy",
      ];
      const business = [
        "management",
        "accounting",
        "finance",
        "economics",
        "marketing",
        "logistics",
      ];
      const arts = [
        "law",
        "languages",
        "literature",
        "history",
        "journalism",
        "communication",
        "education",
      ];
      const relevant =
        selectedSeries?.track === "science"
          ? science
          : selectedSeries?.track === "commercial"
            ? business
            : selectedSeries?.track === "arts"
              ? arts
              : [...science, ...business];
      if (selectedSeries && !u.specialties.some((id) => relevant.includes(id))) return false;
    }
    return true;
  });

  return (
    <PageShell>
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
          {t("page.universities")}
        </p>
        <h1 className="mt-2 font-display text-3xl font-bold text-foreground">
          {t("page.universities.title")}
        </h1>
        <p className="mt-3 max-w-3xl text-muted-foreground">{t("page.universities.lead")}</p>
        <div className="mt-8 grid gap-3 rounded-2xl border border-border bg-card p-5 sm:grid-cols-2 lg:grid-cols-4">
          <Filter
            label="Country"
            value={country}
            onChange={setCountry}
            options={countries.map((value) => [value, value])}
          />
          <Filter
            label="Budget"
            value={budget}
            onChange={(value) => setBudget(value as Budget | "")}
            options={[
              ["low", t("budget.low")],
              ["average", t("budget.average")],
              ["high", t("budget.high")],
            ]}
          />
          <Filter
            label="Teaching language"
            value={instruction}
            onChange={setInstruction}
            options={[
              ["en", "English"],
              ["fr", "French"],
              ["both", "Bilingual"],
            ]}
          />
          <Filter
            label="Qualification"
            value={education}
            onChange={(value) => setEducation(value as EducationType | "")}
            options={[
              ["bac", "Baccalauréat"],
              ["gce", "GCE A'Level"],
              ["ossd", "OSSD"],
            ]}
          />
          <Filter
            label="Specialty"
            value={specialty}
            onChange={setSpecialty}
            options={SPECIALTIES.map((item) => [item.id, d(item.label)])}
          />
          <Filter
            label="Job"
            value={job}
            onChange={setJob}
            options={JOBS.map((item) => [item.id, d(item.label)])}
          />
          <Filter
            label="Series"
            value={series}
            onChange={setSeries}
            options={SERIES.map((item) => [item.id, `${item.code} — ${d(item.label)}`])}
          />
          <button
            type="button"
            onClick={() => {
              setCountry("");
              setBudget("");
              setInstruction("");
              setEducation("");
              setSpecialty("");
              setJob("");
              setSeries("");
            }}
            className="self-end rounded-xl border border-border px-4 py-2 text-sm font-semibold text-foreground hover:bg-accent"
          >
            Reset filters
          </button>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">{filtered.length} institutions</p>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((uni) => (
            <UniversityDirectoryCard key={uni.id} uni={uni} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}

function Filter({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[][];
}) {
  return (
    <label className="text-sm font-medium text-foreground">
      {label}
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-1 w-full rounded-xl border border-input bg-background px-3 py-2 font-normal"
      >
        <option value="">All</option>
        {options.map(([key, text]) => (
          <option key={key} value={key}>
            {text}
          </option>
        ))}
      </select>
    </label>
  );
}

function UniversityDirectoryCard({ uni }: { uni: University }) {
  const { d, t } = useI18n();
  return (
    <article className="min-w-0 rounded-2xl border border-border bg-card p-4 sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="break-words font-display text-lg font-semibold text-card-foreground">
            {uni.name}
          </h2>
          <p className="text-sm text-muted-foreground">
            {uni.city}, {d(uni.country)}
          </p>
        </div>
        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          {t(`budget.${uni.budget}`)}
        </span>
      </div>
      <p className="mt-3 break-words text-sm text-muted-foreground">{d(uni.notes)}</p>
      <p className="mt-3 text-xs font-semibold text-muted-foreground">
        {uni.concours ? "Entrance exam (concours)" : "Selection on application dossier"} ·{" "}
        {t(`lang.${uni.instruction}`)}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {uni.specialties.slice(0, 8).map((id) => (
          <span key={id} className="rounded-full bg-muted px-2.5 py-1 text-xs">
            {d(specialtyOf(id).label)}
          </span>
        ))}
      </div>
      <Link
        to="/university/$id"
        params={{ id: uni.id }}
        className="mt-5 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
      >
        Application guide →
      </Link>
    </article>
  );
}

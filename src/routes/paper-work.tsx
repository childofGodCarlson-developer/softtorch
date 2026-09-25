import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/site-chrome";
import { useI18n } from "@/i18n";

export const Route = createFileRoute("/paper-work")({ component: PaperWorkPage });

type LetterType = "motivation" | "application";
type FormState = {
  name: string;
  address: string;
  email: string;
  phone: string;
  university: string;
  programme: string;
  qualification: string;
  experience: string;
  reasons: string;
  goals: string;
};
const initial: FormState = {
  name: "",
  address: "",
  email: "",
  phone: "",
  university: "",
  programme: "",
  qualification: "",
  experience: "",
  reasons: "",
  goals: "",
};

function PaperWorkPage() {
  const { t } = useI18n();
  const [type, setType] = useState<LetterType>("motivation");
  const [form, setForm] = useState<FormState>(initial);
  const [letter, setLetter] = useState("");
  const update = (key: keyof FormState, value: string) =>
    setForm((current) => ({ ...current, [key]: value }));
  const generate = (event: React.FormEvent) => {
    event.preventDefault();
    const greeting =
      type === "motivation" ? "Dear Admissions Committee," : "Subject: Application for admission";
    setLetter(
      `${form.name}\n${form.address}\n${form.email} | ${form.phone}\n\n${new Date().toLocaleDateString()}\n\n${greeting}\n\nI am writing to ${type === "motivation" ? "express my strong motivation to join" : "formally apply for admission to"} ${form.programme} at ${form.university}. I hold ${form.qualification} and have developed my interest through ${form.experience || "my academic studies and personal projects"}.\n\nI am choosing this programme because ${form.reasons}. It matches my academic preparation and my goal to ${form.goals}. I am ready to work diligently, respect the institution's rules and contribute positively to its academic community.\n\nThank you for considering my application. I would welcome the opportunity to provide any additional information.\n\nYours faithfully,\n${form.name}`,
    );
  };
  return (
    <PageShell>
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
          {t("page.paperwork")}
        </p>
        <h1 className="mt-2 font-display text-3xl font-bold text-foreground">
          {t("page.paperwork.title")}
        </h1>
        <p className="mt-3 text-muted-foreground">
          {t("page.paperwork.lead")} Review it carefully and adapt it to the university's
          requirements before sending.
        </p>
        <form
          onSubmit={generate}
          className="mt-8 grid gap-4 rounded-2xl border border-border bg-card p-6 sm:grid-cols-2"
        >
          <label className="text-sm font-medium">
            Letter type
            <select
              value={type}
              onChange={(e) => setType(e.target.value as LetterType)}
              className="mt-1 w-full rounded-xl border border-input bg-background px-3 py-2"
            >
              <option value="motivation">Motivation letter</option>
              <option value="application">Application letter</option>
            </select>
          </label>
          {(
            [
              "name",
              "address",
              "email",
              "phone",
              "university",
              "programme",
              "qualification",
            ] as const
          ).map((key) => (
            <label key={key} className="text-sm font-medium capitalize">
              {key}
              <input
                required
                value={form[key]}
                onChange={(e) => update(key, e.target.value)}
                className="mt-1 w-full rounded-xl border border-input bg-background px-3 py-2"
              />
            </label>
          ))}
          <label className="text-sm font-medium sm:col-span-2">
            Academic experience
            <textarea
              value={form.experience}
              onChange={(e) => update("experience", e.target.value)}
              className="mt-1 min-h-20 w-full rounded-xl border border-input bg-background px-3 py-2"
            />
          </label>
          <label className="text-sm font-medium sm:col-span-2">
            Why this university/programme?
            <textarea
              required
              value={form.reasons}
              onChange={(e) => update("reasons", e.target.value)}
              className="mt-1 min-h-20 w-full rounded-xl border border-input bg-background px-3 py-2"
            />
          </label>
          <label className="text-sm font-medium sm:col-span-2">
            Career goals
            <textarea
              required
              value={form.goals}
              onChange={(e) => update("goals", e.target.value)}
              className="mt-1 min-h-20 w-full rounded-xl border border-input bg-background px-3 py-2"
            />
          </label>
          <button
            type="submit"
            className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground sm:col-span-2"
          >
            Generate letter
          </button>
        </form>
        {letter && (
          <section className="mt-8 rounded-2xl border border-secondary/40 bg-secondary/5 p-6">
            <h2 className="font-display text-xl font-semibold">Generated draft</h2>
            <pre className="mt-4 whitespace-pre-wrap font-sans text-sm leading-relaxed text-foreground">
              {letter}
            </pre>
            <button
              type="button"
              onClick={() => navigator.clipboard.writeText(letter)}
              className="mt-5 rounded-full border border-primary px-5 py-2 text-sm font-semibold text-primary"
            >
              Copy letter
            </button>
          </section>
        )}
      </section>
    </PageShell>
  );
}

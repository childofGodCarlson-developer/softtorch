import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageShell } from "@/components/site-chrome";
import { JOB_CATEGORIES, JOBS, SPECIALTIES, SERIES } from "@/data/catalog";
import { UNIVERSITIES } from "@/data/universities";

export const Route = createFileRoute("/admin")({ component: AdminPage });

type Collection =
  | "educationSystems"
  | "series"
  | "categories"
  | "jobs"
  | "specialties"
  | "universities"
  | "guides"
  | "scholarships"
  | "gpaRates"
  | "paperwork"
  | "partners"
  | "embassies";
type AdminItem = { id: string; name: string; content: string };
type SavedItem = AdminItem & { collection: Collection };
const ADMIN_EMAIL = "focalpoint@soft-education.com";
const ADMIN_PASSWORD = "SoftTorch2026!Admin";
const STORAGE_KEY = "softorch-admin-items";

function initialData(): Record<Collection, AdminItem[]> {
  return {
    educationSystems: [
      {
        id: "french",
        name: "French education / Baccalauréat",
        content: "System, certificate options and eligibility details.",
      },
      {
        id: "english",
        name: "English education / GCE A'Level",
        content: "System, certificate options and eligibility details.",
      },
      {
        id: "international",
        name: "International / French OSSD / English OSSD",
        content:
          "OSSD certificate options in French and English. IB and Cambridge are not currently offered.",
      },
    ],
    jobs: JOBS.map((item) => ({ id: item.id, name: item.label.en, content: item.label.en })),
    categories: JOB_CATEGORIES.map((item) => ({
      id: item.id,
      name: item.label.en,
      content: item.label.en,
    })),
    specialties: SPECIALTIES.map((item) => ({
      id: item.id,
      name: item.label.en,
      content: item.label.en,
    })),
    series: SERIES.map((item) => ({
      id: item.id,
      name: `${item.code} — ${item.label.en}`,
      content: item.label.en,
    })),
    universities: UNIVERSITIES.map((item) => ({
      id: item.id,
      name: item.name,
      content: `${item.city}, ${item.country.en}\n${item.notes.en}\n${item.website ?? ""}`,
    })),
    guides: UNIVERSITIES.map((item) => ({
      id: item.id,
      name: `${item.name} application guide`,
      content: `Update eligibility, documents, procedure and visa guidance for ${item.name}.`,
    })),
    scholarships: [
      {
        id: "scholarship-directory",
        name: "Scholarship directory",
        content:
          "Create, edit and maintain scholarship provider, country, coverage, documents, deadlines, procedure and official URL.",
      },
    ],
    gpaRates: [
      {
        id: "conversion-rates",
        name: "GPA conversion rates",
        content:
          "Maintain certificate, series, grade bands and conversion values for US, Canada, UK, Germany and ECTS.",
      },
    ],
    paperwork: [
      {
        id: "paperwork-form",
        name: "Paper Work form",
        content: "Maintain letter types, fields, prompts and generated-letter templates.",
      },
    ],
    partners: [
      {
        id: "partner-directory",
        name: "Partner directory",
        content: "Maintain partner categories, names, addresses, contacts and websites.",
      },
    ],
    embassies: [
      {
        id: "embassy-directory",
        name: "Embassy and consulate directory",
        content:
          "Maintain countries, missions in Cameroon, visa procedures, addresses and official URLs.",
      },
    ],
  };
}

function loadSaved(): SavedItem[] {
  if (typeof window === "undefined") return [];
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];
  try {
    const value: unknown = JSON.parse(raw);
    return Array.isArray(value) ? (value as SavedItem[]) : [];
  } catch {
    return [];
  }
}

function AdminPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [collection, setCollection] = useState<Collection>("universities");
  const [notice, setNotice] = useState("");
  const [saved, setSaved] = useState<SavedItem[]>(loadSaved);
  const source = useMemo(initialData, []);
  const items = [
    ...source[collection].map(
      (item) =>
        saved.find((entry) => entry.collection === collection && entry.id === item.id) ?? item,
    ),
    ...saved.filter(
      (item) =>
        item.collection === collection &&
        !source[collection].some((sourceItem) => sourceItem.id === item.id),
    ),
  ];

  if (!authenticated) {
    const configuredEmail = import.meta.env["VITE_ADMIN_EMAIL"] || ADMIN_EMAIL;
    const configuredPassword = import.meta.env["VITE_ADMIN_PASSWORD"] || ADMIN_PASSWORD;
    return (
      <PageShell>
        <section className="mx-auto max-w-md px-4 py-16">
          <h1 className="font-display text-3xl font-bold text-foreground">Softorch admin</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Sign in to create, edit and delete platform content. Production deployments should set
            VITE_ADMIN_EMAIL and VITE_ADMIN_PASSWORD.
          </p>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              if (email === configuredEmail && password === configuredPassword)
                setAuthenticated(true);
              else setNotice("Invalid credentials.");
            }}
            className="mt-8 space-y-4 rounded-2xl border border-border bg-card p-6"
          >
            <input
              required
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-xl border border-input bg-background px-3 py-2"
            />
            <input
              required
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-xl border border-input bg-background px-3 py-2"
            />
            {notice && <p className="text-sm text-destructive">{notice}</p>}
            <button className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
              Sign in
            </button>
          </form>
        </section>
      </PageShell>
    );
  }

  const persist = (next: SavedItem[]) => {
    setSaved(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };
  const saveItem = (item: AdminItem) => {
    const next = [
      ...saved.filter((entry) => !(entry.collection === collection && entry.id === item.id)),
      { ...item, collection },
    ];
    persist(next);
    setNotice(
      `${item.name} saved. Changes are stored in this browser until connected to a server database.`,
    );
  };
  const createItem = () =>
    saveItem({ id: `custom-${Date.now()}`, name: "New item", content: "Add content here." });
  const deleteItem = (id: string) => {
    persist(saved.filter((entry) => !(entry.collection === collection && entry.id === id)));
    setNotice("Item deleted from the local admin content store.");
  };

  return (
    <PageShell>
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
              Administration
            </p>
            <h1 className="mt-2 font-display text-3xl font-bold text-foreground">
              Full content dashboard
            </h1>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setAuthenticated(false)}
              className="text-sm text-primary underline"
            >
              Log out
            </button>
            <Link to="/" className="text-sm text-primary underline">
              Exit admin
            </Link>
          </div>
        </div>
        <p className="mt-3 rounded-xl border border-border bg-amber-50 p-4 text-sm text-amber-900">
          You can create, edit and delete items in every collection. This browser-only dashboard is
          ready for a database/API connection before production publishing.
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          {(Object.keys(source) as Collection[]).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setCollection(key)}
              className={`rounded-full px-4 py-2 text-sm font-semibold ${collection === key ? "bg-primary text-primary-foreground" : "border border-border text-foreground"}`}
            >
              {key}
            </button>
          ))}
          <button
            type="button"
            onClick={createItem}
            className="rounded-full border border-primary px-4 py-2 text-sm font-semibold text-primary"
          >
            + Create item
          </button>
        </div>
        {notice && <p className="mt-4 text-sm text-secondary">{notice}</p>}
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <EditableItem
              key={item.id}
              item={item}
              onSave={saveItem}
              onDelete={() => deleteItem(item.id)}
            />
          ))}
        </div>
      </section>
    </PageShell>
  );
}

function EditableItem({
  item,
  onSave,
  onDelete,
}: {
  item: AdminItem;
  onSave: (item: AdminItem) => void;
  onDelete: () => void;
}) {
  const [draft, setDraft] = useState(item);
  return (
    <article className="rounded-2xl border border-border bg-card p-5">
      <input
        value={draft.name}
        onChange={(event) => setDraft({ ...draft, name: event.target.value })}
        className="w-full rounded-xl border border-input bg-background px-3 py-2 font-semibold text-foreground"
      />
      <p className="mt-1 text-xs text-muted-foreground">{draft.id}</p>
      <textarea
        aria-label={`Edit ${draft.name}`}
        value={draft.content}
        onChange={(event) => setDraft({ ...draft, content: event.target.value })}
        className="mt-4 min-h-28 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm"
      />
      <div className="mt-3 flex gap-3">
        <button
          type="button"
          onClick={() => onSave(draft)}
          className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
        >
          Save changes
        </button>
        <button
          type="button"
          onClick={onDelete}
          className="rounded-full border border-destructive px-4 py-2 text-sm font-semibold text-destructive"
        >
          Delete
        </button>
      </div>
    </article>
  );
}

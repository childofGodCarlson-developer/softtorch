import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/site-chrome";
import { useI18n } from "@/i18n";

export const Route = createFileRoute("/partners")({ component: PartnersPage });

const partners = [
  {
    type: "Health insurance",
    name: "Partner directory coming soon",
    address: "Cameroon",
    contact: "Contact Soft Education for available health-insurance referrals.",
  },
  {
    type: "Banks",
    name: "Partner directory coming soon",
    address: "Cameroon",
    contact: "Contact Soft Education for bank-statement guidance.",
  },
  {
    type: "Immigration office",
    name: "Partner directory coming soon",
    address: "Cameroon",
    contact: "Contact Soft Education for visa and paperwork facilitation.",
  },
  {
    type: "International universities",
    name: "North York Academy",
    address: "Toronto, Ontario, Canada",
    contact: "Use the official contact page for current telephone and email details.",
    website: "https://northyorkacademy.com/",
  },
  {
    type: "National universities",
    name: "Partner directory coming soon",
    address: "Cameroon",
    contact: "National university partners will be listed here as partnerships are confirmed.",
  },
  {
    type: "Hospitals",
    name: "Partner directory coming soon",
    address: "Cameroon",
    contact: "Contact Soft Education for medical-record referrals.",
  },
  {
    type: "Language centers",
    name: "Partner directory coming soon",
    address: "Cameroon",
    contact: "Contact Soft Education for English, French and German language-centre referrals.",
  },
];

function PartnersPage() {
  const { t } = useI18n();
  const [type, setType] = useState("International universities");
  const shown = partners.filter((partner) => partner.type === type);
  const types = [...new Set(partners.map((partner) => partner.type))];
  return (
    <PageShell>
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
          {t("page.partners")}
        </p>
        <h1 className="mt-2 font-display text-3xl font-bold text-foreground">
          {t("page.partners.title")}
        </h1>
        <p className="mt-3 text-muted-foreground">
          {t("page.partners.lead")} Listings marked as coming soon are not yet confirmed
          partnerships.
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          {types.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setType(item)}
              className={`rounded-full px-4 py-2 text-sm font-semibold ${type === item ? "bg-primary text-primary-foreground" : "border border-border"}`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="mt-6 space-y-4">
          {shown.map((partner) => (
            <article
              key={`${partner.type}-${partner.name}`}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <h2 className="font-display text-xl font-semibold">{partner.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{partner.address}</p>
              <p className="mt-2 text-sm text-muted-foreground">{partner.contact}</p>
              {partner.website && (
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex text-sm font-semibold text-primary underline"
                >
                  Official website →
                </a>
              )}
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

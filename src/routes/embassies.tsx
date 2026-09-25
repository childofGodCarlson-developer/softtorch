import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageShell } from "@/components/site-chrome";
import { useI18n } from "@/i18n";

type Destination = { code: string; name: string; region: string; url: string; route: string };
const DESTINATION_ROWS = [
  [
    "AU",
    "Australia",
    "Oceania",
    "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500",
    "Student visa (subclass 500), online application, biometrics and health/financial evidence.",
  ],
  [
    "AT",
    "Austria",
    "Europe",
    "https://www.bmeia.gv.at/en/travel-stay/entry-and-residence-in-austria",
    "Apply for a residence permit/student visa through the Austrian mission serving Cameroon; obtain admission first.",
  ],
  [
    "BE",
    "Belgium",
    "Europe",
    "https://diplomatie.belgium.be/en/travel-belgium/visa-belgium",
    "Apply for the long-stay student visa after admission, with proof of funds, insurance and accommodation.",
  ],
  [
    "BW",
    "Botswana",
    "Africa",
    "https://www.gov.bw/immigration",
    "Confirm student permit requirements with Botswana Immigration after receiving an admission letter.",
  ],
  [
    "CA",
    "Canada",
    "North America",
    "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html",
    "Apply online for a study permit, provide the letter of acceptance and proof of funds, then complete biometrics.",
  ],
  [
    "CN",
    "China",
    "Asia",
    "https://www.visaforchina.cn/",
    "Obtain the JW201/JW202 and admission letter, complete the X visa application and follow the visa-centre instructions.",
  ],
  [
    "CY",
    "Cyprus",
    "Europe",
    "https://www.gov.cy/moi/en/",
    "Apply for entry permission and a student residence permit through the institution and Cypriot authorities.",
  ],
  [
    "DE",
    "Germany",
    "Europe",
    "https://www.auswaertiges-amt.de/en/visa-service",
    "Apply for a national student visa, show admission and a blocked-account/financial plan, then attend the embassy appointment.",
  ],
  [
    "DK",
    "Denmark",
    "Scandinavia",
    "https://www.nyidanmark.dk/en-GB/You-want-to-apply/Study",
    "Submit the residence permit application for higher education with admission, fee and biometric appointment.",
  ],
  [
    "EG",
    "Egypt",
    "Africa",
    "https://moi.gov.eg/",
    "Confirm student visa and residence procedures with the Egyptian diplomatic mission after admission.",
  ],
  [
    "ES",
    "Spain",
    "Europe",
    "https://www.exteriores.gob.es/en/ServiciosAlCiudadano/Paginas/Visados.aspx",
    "Apply for the national study visa with admission, insurance, funds, medical certificate and criminal-record documents where required.",
  ],
  [
    "FI",
    "Finland",
    "Scandinavia",
    "https://migri.fi/en/studying-in-finland",
    "Apply online for a residence permit for studies, prove funds and insurance, and complete identity verification.",
  ],
  [
    "FR",
    "France",
    "Europe",
    "https://france-visas.gouv.fr/en/web/france-visas/student",
    "Complete Études en France/Campus France where required, then submit the France-Visas student application and attend biometrics.",
  ],
  [
    "GH",
    "Ghana",
    "Africa",
    "https://www.mfa.gov.gh/",
    "Confirm entry and residence requirements with the Ghana mission and the admitting institution.",
  ],
  [
    "IE",
    "Ireland",
    "Europe",
    "https://www.irishimmigration.ie/coming-to-study-in-ireland/",
    "Secure an eligible offer, pay required fees, arrange insurance and apply for the long-stay study visa.",
  ],
  [
    "IN",
    "India",
    "Asia",
    "https://indianvisaonline.gov.in/",
    "Use the official student visa process with the university admission letter and financial documentation.",
  ],
  [
    "IT",
    "Italy",
    "Europe",
    "https://vistoperitalia.esteri.it/",
    "Pre-enrol through Universitaly where required, then submit the national study visa file.",
  ],
  [
    "JP",
    "Japan",
    "Asia",
    "https://www.mofa.go.jp/j_info/visit/visa/index.html",
    "The school obtains a Certificate of Eligibility; submit it with the student visa application.",
  ],
  [
    "KE",
    "Kenya",
    "Africa",
    "https://immigration.go.ke/",
    "Obtain admission and apply for the student pass through Kenya Immigration eFNS.",
  ],
  [
    "LU",
    "Luxembourg",
    "Europe",
    "https://guichet.public.lu/en/citoyens/immigration/plus-3-mois/ressortissant-pays-tiers/etudiant.html",
    "Request temporary authorisation to stay before travel, then apply for the student residence permit.",
  ],
  [
    "MA",
    "Morocco",
    "Africa",
    "https://www.acces-maroc.ma/",
    "Check entry formalities and student residence registration with the Moroccan mission and institution.",
  ],
  [
    "MY",
    "Malaysia",
    "Asia",
    "https://educationmalaysia.gov.my/",
    "The institution requests the Visa Approval Letter; complete the student pass process through EMGS.",
  ],
  [
    "NL",
    "Netherlands",
    "Europe",
    "https://ind.nl/en/study",
    "The recognised sponsor normally applies for the student residence permit; provide documents requested by the university.",
  ],
  [
    "NO",
    "Norway",
    "Scandinavia",
    "https://www.udi.no/en/want-to-apply/studies/",
    "Apply for a study permit, show admission and living funds, and attend the required identity appointment.",
  ],
  [
    "NZ",
    "New Zealand",
    "Oceania",
    "https://www.immigration.govt.nz/new-zealand-visas/visas/visa/student-visa",
    "Apply for the Fee Paying Student Visa with offer of place, funds, insurance and health evidence.",
  ],
  [
    "PT",
    "Portugal",
    "Europe",
    "https://vistos.mne.gov.pt/en/national-visas/general-information/type-of-visa",
    "Apply for the national study visa with admission, accommodation, funds, insurance and police documents.",
  ],
  [
    "RW",
    "Rwanda",
    "Africa",
    "https://www.migration.gov.rw/",
    "Confirm student permit requirements with Rwanda Directorate General of Immigration after admission.",
  ],
  [
    "SE",
    "Sweden",
    "Scandinavia",
    "https://www.migrationsverket.se/en/you-want-to-apply/study.html",
    "Apply online for a residence permit for studies, pay the fee and prove maintenance funds.",
  ],
  [
    "CH",
    "Switzerland",
    "Europe",
    "https://www.sem.admin.ch/sem/en/home/themen/einreise/visumantragsverfahren.html",
    "Apply for a national visa through the Swiss mission with admission, funds and accommodation evidence.",
  ],
  [
    "ZA",
    "South Africa",
    "Africa",
    "https://www.dha.gov.za/index.php/types-of-visas",
    "Apply for a study visa with admission, medical/radiological reports, funds and guardianship details where applicable.",
  ],
  [
    "TR",
    "Türkiye",
    "Asia",
    "https://www.evisa.gov.tr/",
    "Confirm student visa and residence steps with the Turkish mission after university admission.",
  ],
  [
    "UG",
    "Uganda",
    "Africa",
    "https://immigration.go.ug/",
    "Apply for the student pass through Uganda Immigration after obtaining the institution's admission letter.",
  ],
  [
    "AE",
    "United Arab Emirates",
    "Asia",
    "https://u.ae/en/information-and-services/visa-and-emirates-id",
    "The university or free-zone sponsor normally arranges the entry permit and residence visa.",
  ],
  [
    "GB",
    "United Kingdom",
    "Europe",
    "https://www.gov.uk/student-visa",
    "Obtain a CAS, complete the Student visa application, pay the health surcharge and book biometrics.",
  ],
  [
    "US",
    "United States",
    "North America",
    "https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html",
    "Obtain the I-20, pay SEVIS, complete DS-160 and attend the F-1 interview.",
  ],
] as const;
const DESTINATIONS: Destination[] = DESTINATION_ROWS.map(([code, name, region, url, route]) => ({
  code,
  name,
  region,
  url,
  route,
}));

export const Route = createFileRoute("/embassies")({ component: EmbassiesPage });

function EmbassiesPage() {
  const { t } = useI18n();
  const countries = useMemo(
    () => [...DESTINATIONS].sort((a, b) => a.name.localeCompare(b.name)),
    [],
  );
  const [region, setRegion] = useState("All");
  const [country, setCountry] = useState("CA");
  const regions = ["All", ...new Set(countries.map((item) => item.region))];
  const visible = region === "All" ? countries : countries.filter((item) => item.region === region);
  const selected = countries.find((item) => item.code === country) ?? countries[0];
  return (
    <PageShell>
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
          {t("page.embassies")}
        </p>
        <h1 className="mt-2 font-display text-3xl font-bold text-foreground">
          {t("page.embassies.title")}
        </h1>
        <p className="mt-3 max-w-4xl text-muted-foreground">
          Country procedures and official links for students applying from Cameroon. Addresses,
          fees, appointment systems and checklists change, so always confirm the current
          instructions on the official website.
        </p>
        <div className="mt-6 rounded-2xl border border-secondary/40 bg-secondary/5 p-5">
          <p className="font-display text-2xl font-bold">{countries.length} countries</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {regions.length - 1} regions covered, including{" "}
            {countries.filter((item) => item.region === "Africa").length} African and{" "}
            {countries.filter((item) => item.region === "Scandinavia").length} Scandinavian
            destinations.
          </p>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-[15rem_1fr]">
          <aside>
            <label className="text-sm font-medium">
              Filter by region
              <select
                value={region}
                onChange={(event) => setRegion(event.target.value)}
                className="mt-1 w-full rounded-xl border border-input bg-background px-3 py-2"
              >
                {regions.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
            <label className="mt-4 block text-sm font-medium">
              Country
              <select
                value={country}
                onChange={(event) => setCountry(event.target.value)}
                className="mt-1 w-full rounded-xl border border-input bg-background px-3 py-2"
              >
                {visible.map((item) => (
                  <option key={item.code} value={item.code}>
                    {item.name}
                  </option>
                ))}
              </select>
            </label>
          </aside>
          <article className="rounded-2xl border border-border bg-card p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
              {selected.region}
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold">{selected.name}</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{selected.route}</p>
            <ol className="mt-5 list-decimal space-y-2 ps-5 text-sm leading-relaxed text-muted-foreground">
              <li>Secure admission or the official pre-registration document.</li>
              <li>
                Open the official procedure below and identify the embassy, consulate or authorised
                visa centre serving Cameroon.
              </li>
              <li>
                Prepare the exact checklist, including passport, admission, funds, accommodation,
                insurance, records and translations where requested.
              </li>
              <li>
                Complete forms, pay only on official portals and attend biometrics/interview as
                instructed.
              </li>
              <li>Keep receipts and do not buy a non-refundable ticket before the decision.</li>
            </ol>
            <a
              href={selected.url}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              Open official procedure →
            </a>
          </article>
        </div>
      </section>
    </PageShell>
  );
}

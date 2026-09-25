import type { University } from "@/data/universities";

/** Builds the translated application-guide checklists for one institution. */
export function buildGuide(uni: University) {
  const abroad = uni.region !== "cameroon";
  const outOfAfrica = uni.region === "world";

  const eligibility = ["elig.diploma", "elig.grades", "elig.age"];
  if (uni.concours) eligibility.push("elig.concours");
  if (uni.languageTest === "ielts") eligibility.push("elig.ielts");
  if (uni.languageTest === "tcf") eligibility.push("elig.tcf");
  if (uni.languageTest === "both") eligibility.push("elig.both");

  const documents = ["doc.diploma", "doc.transcripts", "doc.birth", "doc.id", "doc.photos", "doc.cv"];
  if (abroad) {
    documents.push("doc.translation", "doc.funds", "doc.medical", "doc.insurance");
  } else {
    documents.push("doc.medical");
  }

  const procedure = [
    "proc.phase1",
    "proc.phase2",
    "proc.phase3",
    "proc.phase4",
    "proc.phase5",
    "proc.phase6",
    "proc.phase7",
    "proc.phase8",
    "proc.phase9",
    "proc.phase10",
  ];

  const visa = abroad
    ? [
        "visa.preinscription",
        ...(outOfAfrica ? ["visa.campusfrance", "visa.blocked"] : []),
        "visa.file",
        "visa.appointment",
        "visa.biometrics",
        "visa.travel",
      ]
    : [];

  return { eligibility, documents, procedure, visa };
}

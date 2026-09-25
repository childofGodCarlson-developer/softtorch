export type LocaleCode = "en" | "fr" | "es" | "de" | "ar";

export const LOCALES: { code: LocaleCode; label: string; dir: "ltr" | "rtl" }[] = [
  { code: "en", label: "English", dir: "ltr" },
  { code: "fr", label: "Français", dir: "ltr" },
  { code: "es", label: "Español", dir: "ltr" },
  { code: "de", label: "Deutsch", dir: "ltr" },
  { code: "ar", label: "العربية", dir: "rtl" },
];

export type Dict = Record<string, string>;

const en: Dict = {
  "brand.name": "Soft Education Bilingual College",
  "brand.slogan": "School Otherwise",
  "nav.home": "Home",
  "nav.start": "Start orientation",
  "nav.about": "About",
  "nav.universities": "Universities",
  "nav.admissions": "How to apply",
  "nav.paperwork": "Paper Work",
  "nav.partners": "Our partners",
  "nav.embassies": "Embassy / Consulate",
  "nav.gpa": "GPA conversion",
  "nav.scholarships": "Scholarships",
  "nav.language": "Language",
  "page.paperwork": "Documents",
  "page.paperwork.title": "Paper Work",
  "page.paperwork.lead": "Fill in your details to generate a personalised draft.",
  "page.partners": "Network",
  "page.partners.title": "Our partners",
  "page.partners.lead": "Choose a category to see organisations and their contact details.",
  "page.embassies": "Visa information",
  "page.embassies.title": "Embassy / Consulate",
  "page.gpa": "Academic equivalency",
  "page.gpa.title": "GPA conversion",
  "page.scholarships": "Funding directory",
  "page.scholarships.title": "Scholarships",

  "home.eyebrow": "Career & university orientation",
  "home.title": "After the A-Level, the Baccalauréat or the OSSD — what next?",
  "home.lead":
    "Find the career, the university specialty and the institution that fit your series, your destination and your family budget — in Cameroon, in Africa or anywhere in the world.",
  "home.cta": "Begin my orientation",
  "home.cta2": "How it works",
  "home.step1.title": "Your school system",
  "home.step1.text":
    "French education, English education (GCE) or international OSSD in French or English.",
  "home.step2.title": "Your series and your dream job",
  "home.step2.text":
    "Still choosing a series? We work backwards from the job. Already in final year? We start from your series.",
  "home.step3.title": "Destination and budget",
  "home.step3.text":
    "Cameroon, Africa or the rest of the world, with low, average or high budget bands.",
  "home.step4.title": "Your shortlist and application guide",
  "home.step4.text":
    "Matching institutions with entry requirements, documents, procedure and visa steps.",
  "home.stat.universities": "institutions",
  "home.stat.jobs": "careers",
  "home.stat.specialties": "university specialties",
  "home.stat.languages": "languages",

  "wizard.title": "Orientation pathway",
  "wizard.step": "Step",
  "wizard.of": "of",
  "wizard.back": "Back",
  "wizard.restart": "Start over",
  "wizard.q.system": "Which education system are you following?",
  "wizard.q.internationalVariant": "Which OSSD language pathway do you want?",
  "wizard.q.stage": "Where are you in high school?",
  "wizard.q.track": "Which series family do you want to choose?",
  "wizard.q.series": "Which series are you doing?",
  "wizard.q.category": "Choose a job area",
  "wizard.q.job": "Choose the job you are aiming for",
  "wizard.q.specialty": "Choose the university specialty",
  "wizard.q.region": "Where would you like to study?",
  "wizard.q.budget": "What is your family budget?",
  "wizard.q.results": "Your recommended institutions",

  "stage.early.french": "I am in Seconde",
  "stage.early.english": "I am in Lower Sixth",
  "stage.early.international": "I am in Grade 10 / 11",
  "stage.final.french": "I am in Terminale",
  "stage.final.english": "I am in Upper Sixth",
  "stage.final.international": "I am in Grade 12 / final year",
  "stage.seconde.french": "I am in Seconde",
  "stage.terminale.french": "I am in Terminale",
  "stage.seconde.hint": "The common foundation year before choosing a commercial option.",
  "stage.terminale.hint": "Your final-year series is fixed — we start from it.",
  "stage.early.hint": "Your series is not chosen yet — we start from the job you dream of.",
  "stage.final.hint": "Your series is fixed — we start from it.",

  "region.cameroon": "In Cameroon",
  "region.africa": "In Africa (outside Cameroon)",
  "region.world": "Outside Africa (rest of the world)",
  "budget.low": "Low budget · up to 1,000,000 FCFA/year",
  "budget.average": "Average budget · 1,000,000–5,000,000 FCFA/year",
  "budget.high": "High budget · above 5,000,000 FCFA/year",
  "budget.low.desc":
    "Public institution fees or low-cost destinations; plan up to 1,000,000 FCFA/year for tuition, excluding living costs.",
  "budget.average.desc":
    "Professional programmes or moderate private fees; plan 1,000,000–5,000,000 FCFA/year for tuition, excluding living costs.",
  "budget.high.desc":
    "Private, grandes écoles or international tuition; plan above 5,000,000 FCFA/year for tuition, excluding living costs.",
  "budget.cameroon.low": "Low budget · up to 500,000 FCFA/year",
  "budget.cameroon.low.desc":
    "Public universities and affordable local programmes: up to 500,000 FCFA/year in tuition, excluding living costs.",
  "budget.cameroon.average": "Average budget · 500,000–2,000,000 FCFA/year",
  "budget.cameroon.average.desc":
    "Professional institutes and moderate private programmes: 500,000–2,000,000 FCFA/year in tuition, excluding living costs.",
  "budget.cameroon.high": "High budget · above 2,000,000 FCFA/year",
  "budget.cameroon.high.desc":
    "Private institutions, grandes écoles and premium programmes: above 2,000,000 FCFA/year in tuition.",
  "budget.africa.low": "Low budget · up to 1,500,000 FCFA/year",
  "budget.africa.low.desc":
    "Affordable African public institutions: up to 1,500,000 FCFA/year in tuition, excluding living costs.",
  "budget.africa.average": "Average budget · 1,500,000–5,000,000 FCFA/year",
  "budget.africa.average.desc":
    "Regional private universities and professional schools: 1,500,000–5,000,000 FCFA/year in tuition.",
  "budget.africa.high": "High budget · above 5,000,000 FCFA/year",
  "budget.africa.high.desc":
    "Premium African universities and private professional schools: above 5,000,000 FCFA/year in tuition.",
  "budget.world.low": "Low budget · up to 3,000,000 FCFA/year",
  "budget.world.low.desc":
    "Low-tuition destinations and public universities: up to 3,000,000 FCFA/year in tuition, excluding living costs.",
  "budget.world.average": "Average budget · 3,000,000–10,000,000 FCFA/year",
  "budget.world.average.desc":
    "Moderate international tuition: 3,000,000–10,000,000 FCFA/year, excluding living costs.",
  "budget.world.high": "High budget · above 10,000,000 FCFA/year",
  "budget.world.high.desc":
    "Private or high-cost international institutions: above 10,000,000 FCFA/year in tuition.",

  "advice.title": "The series that suit this career",
  "advice.lead": "To become",
  "advice.lead2": "these are the series to choose in high school:",
  "advice.subjects": "Subjects",
  "advice.continue": "Continue to universities",
  "advice.specialties": "University specialties leading to this job",

  "results.count": "institutions match your choices",
  "results.none": "No institution matches this exact combination yet.",
  "results.alternatives": "Close alternatives in other budget bands",
  "results.summary": "Your criteria",
  "results.language": "Language of instruction",
  "results.levels": "Levels offered",
  "results.cost": "Indicative cost",
  "results.guide": "Application guide",
  "results.concours": "Entrance exam (concours) required",
  "results.selection": "Selection on application dossier (no concours listed)",
  "results.website": "University website / admissions",

  "lang.en": "English-taught",
  "lang.fr": "French-taught",
  "lang.both": "Bilingual (English & French)",

  "guide.title": "Application guide",
  "guide.for":
    "For a Cameroonian student holding a GCE A-Level, a Baccalauréat or an OSSD diploma.",
  "guide.eligibility": "Eligibility & prerequisites",
  "guide.documents": "Documents to prepare",
  "guide.procedure": "Application procedure step by step",
  "guide.visa": "Admission abroad & visa procedure",
  "guide.note":
    "Always confirm deadlines and fees on the institution's official website before paying anything.",
  "guide.website": "Official website",
  "guide.download": "Download PDF",
  "guide.pdfPassword": "Enter the download password",
  "guide.pdfPasswordHint": "If you do not have the password, request a code.",
  "guide.downloadConfirm": "Download",
  "guide.requestCode": "Request a code",
  "guide.back": "Back to results",

  "elig.diploma":
    "A completed GCE A-Level, Baccalauréat or OSSD diploma with passes in the subjects required by the chosen specialty.",
  "elig.grades":
    "Good grades in the core subjects of the specialty (sciences for health and engineering, economics/mathematics for business, languages/history for law and arts).",
  "elig.age": "Be at least 17 years old and hold a valid national identity card.",
  "elig.concours":
    "Pass the competitive entrance examination (concours) organised by the institution — registration usually opens several months before the exam.",
  "elig.ielts":
    "Prove your English level with IELTS, TOEFL or an official English-medium schooling certificate.",
  "elig.tcf":
    "Prove your French level with TCF, TEF or DELF/DALF B2, unless your whole schooling was in French.",
  "elig.both":
    "Prove your level in the language of the programme (IELTS/TOEFL for English, TCF/TEF or DELF B2 for French).",

  "doc.diploma":
    "Diploma or provisional results slip (GCE A-Level, Baccalauréat, OSSD transcript): request it from your school/exam board; certify copies at your local sous-préfecture or mairie.",
  "doc.transcripts": "Transcripts of the last two or three years of high school.",
  "doc.birth":
    "Recent birth certificate: obtain a certified copy from the mairie/council that holds the birth register.",
  "doc.id":
    "National identity card and, for studies abroad, a passport valid for at least 18 months: apply for the passport through DGSN passport services in Cameroon.",
  "doc.photos":
    "Recent passport photographs: take them at a professional photo studio and follow the destination's dimensions.",
  "doc.cv":
    "CV and motivation letter: prepare them with a school guidance office, a professional writer or a recognised career service, then proofread them yourself.",
  "doc.medical":
    "Medical certificate and vaccination record: use a hospital or clinic authorised for international travel (for example a public/regional hospital); confirm the destination's form.",
  "doc.translation":
    "Sworn translation of the diploma and transcripts: use a court-certified translator in Cameroon or the translator list supplied by the embassy/university.",
  "doc.funds":
    "Proof of funds or a sponsor's bank attestation: request it from the sponsor's commercial bank; do not pay an intermediary to manufacture evidence.",
  "doc.insurance":
    "International health insurance: purchase it from a regulated insurer accepted by the university/embassy after checking the required coverage.",

  "proc.choose":
    "Choose the exact programme and check its specific requirements on the institution's website.",
  "proc.file": "Create the online application account and upload the scanned documents.",
  "proc.fee": "Pay the application or concours fee and keep the receipt.",
  "proc.concours":
    "Sit the entrance examination on the scheduled date and follow the results publication.",
  "proc.admission":
    "Receive the admission decision, then confirm your place and pay the registration fees.",
  "proc.register": "Complete registration on campus with the original documents.",
  "proc.phase1":
    "Decide the destination before the university: confirm your qualification, subjects, language of instruction, total budget (tuition, living costs, immigration fees and flights) and whether the programme is regulated.",
  "proc.phase2":
    "Open the document file 12–18 months before entry: apply for the passport, obtain a recent birth certificate, collect certificates and transcripts, get the yellow-fever vaccination and scan everything into a physical and digital folder. Do not legalise documents yet.",
  "proc.phase3":
    "Book tests 10–14 months before entry: take the exact accepted language test (IELTS, TOEFL, TCF, TEF, DELF, TestDaF, etc.) and any admission test or concours. Keep time for one retake.",
  "proc.phase4":
    "Build the shortlist from the official admissions page: check accepted qualification, subjects, grades, language score, deadline, fee, intake, accreditation and whether the application is direct or through a platform such as Campus France, UCAS or uni-assist.",
  "proc.phase5":
    "Apply 6–12 months before entry in the student's own name exactly as written in the passport; upload the requested scans or certified copies, write a programme-specific motivation letter, pay the official fee and save the reference number.",
  "proc.phase6":
    "Handle the offer: read every condition, send missing proof before the deadline, accept formally, pay any required deposit and obtain the immigration document (for example CAS, I-20, PAL/CAQ, CoE, EMGS VAL or Campus France attestation).",
  "proc.phase7":
    "Legalise, translate and assemble the immigration file only after the institution or embassy asks: issuing authority, MINREX, then the destination mission; Cameroon does not issue apostilles. Add sworn translations, police clearance, panel medical exam and the exact proof of funds.",
  "proc.phase8":
    "Apply for the visa, permit or pass on the official government platform; pay the official fee, book biometrics at the designated centre or mission and attend any interview. Do not buy a non-refundable ticket before the decision.",
  "proc.phase9":
    "Prepare travel 1–2 months before entry: arrange accommodation, compulsory insurance, flight and transit visas. Carry the passport, admission and immigration documents, original certificates, yellow-fever card, funds and insurance in hand luggage.",
  "proc.phase10":
    "After arrival, complete the destination's registration or residence step, enrol at the institution with originals, obtain the student card and local bank/phone services, and record the permit-renewal date.",

  "visa.preinscription":
    "Obtain the official admission or pre-registration letter directly from the institution's admissions portal; do not rely on an agent's screenshot.",
  "visa.campusfrance":
    "For France, Belgium and Quebec: complete the Campus France / Études en France or provincial procedure and attend the interview.",
  "visa.blocked":
    "Open a blocked account or provide proof of funds at the level required by the destination country.",
  "visa.file":
    "Assemble the visa file in Cameroon: passport, admission letter, proof of funds, accommodation, insurance, diplomas and translations, using the destination's official checklist.",
  "visa.appointment":
    "Book the appointment only on the embassy, immigration portal or authorised visa-centre website; most Cameroon appointments are in Yaoundé, and you pay the fee there.",
  "visa.biometrics":
    "Attend the biometrics and interview appointment in Yaoundé (or the centre assigned by the official portal); carry originals and copies.",
  "visa.travel":
    "Once the visa is issued, book the flight, confirm accommodation and prepare the arrival and enrolment formalities.",

  "about.title": "About this platform",
  "about.p1":
    'This orientation platform is sponsored and designed by Soft Education Bilingual College, whose motto is "School Otherwise". It guides Cameroonian students from their final high-school year to a university programme that matches their series, their career dream, their destination and their family budget.',
  "about.p2":
    'The content is based on the college\'s guide "After the GCE Advanced Level, Baccalauréat or OSSD Diploma": series and subject combinations, job areas, university specialties, levels of study, budget bands and institutions in Cameroon, Africa and the rest of the world.',
  "about.p3":
    "The information is a guidance tool, not an admission promise. Entry requirements, fees and deadlines change every year — always confirm them with the institution before making a decision.",
  "footer.rights": "All rights reserved.",
  "footer.tagline":
    "Career and university orientation for A-Level, Baccalauréat and OSSD students.",
};

const fr: Dict = {
  "brand.name": "Soft Education Bilingual College",
  "brand.slogan": "School Otherwise",
  "nav.home": "Accueil",
  "nav.start": "Commencer l'orientation",
  "nav.about": "À propos",
  "nav.universities": "Universités",
  "nav.admissions": "Comment candidater",
  "nav.paperwork": "Dossiers",
  "nav.partners": "Nos partenaires",
  "nav.embassies": "Ambassade / Consulat",
  "nav.gpa": "Conversion GPA",
  "nav.scholarships": "Bourses",
  "nav.language": "Langue",
  "page.paperwork": "Documents",
  "page.paperwork.title": "Dossiers",
  "page.paperwork.lead": "Remplissez vos informations pour générer un brouillon personnalisé.",
  "page.partners": "Réseau",
  "page.partners.title": "Nos partenaires",
  "page.partners.lead":
    "Choisissez une catégorie pour voir les organisations et leurs coordonnées.",
  "page.embassies": "Informations sur les visas",
  "page.embassies.title": "Ambassade / Consulat",
  "page.gpa": "Équivalence académique",
  "page.gpa.title": "Conversion GPA",
  "page.scholarships": "Répertoire des financements",
  "page.scholarships.title": "Bourses",

  "home.eyebrow": "Orientation carrière et universités",
  "home.title": "Après le A-Level, le Baccalauréat ou l'OSSD — et maintenant ?",
  "home.lead":
    "Trouvez le métier, la spécialité universitaire et l'établissement qui correspondent à votre série, à votre destination et au budget de votre famille — au Cameroun, en Afrique ou partout dans le monde.",
  "home.cta": "Commencer mon orientation",
  "home.cta2": "Comment ça marche",
  "home.step1.title": "Votre système scolaire",
  "home.step1.text":
    "Enseignement francophone, anglophone (GCE) ou OSSD international en français ou en anglais.",
  "home.step2.title": "Votre série et votre métier rêvé",
  "home.step2.text":
    "Vous n'avez pas encore choisi de série ? On part du métier. Vous êtes en classe d'examen ? On part de votre série.",
  "home.step3.title": "Destination et budget",
  "home.step3.text":
    "Cameroun, Afrique ou reste du monde, avec des budgets faible, moyen ou élevé.",
  "home.step4.title": "Votre liste et le guide de candidature",
  "home.step4.text":
    "Établissements correspondants avec conditions d'admission, documents, procédure et démarches de visa.",
  "home.stat.universities": "établissements",
  "home.stat.jobs": "métiers",
  "home.stat.specialties": "spécialités universitaires",
  "home.stat.languages": "langues",

  "wizard.title": "Parcours d'orientation",
  "wizard.step": "Étape",
  "wizard.of": "sur",
  "wizard.back": "Retour",
  "wizard.restart": "Recommencer",
  "wizard.q.system": "Quel système d'enseignement suivez-vous ?",
  "wizard.q.internationalVariant": "Quelle voie OSSD souhaitez-vous suivre ?",
  "wizard.q.stage": "Où en êtes-vous au lycée ?",
  "wizard.q.track": "Quelle famille de séries souhaitez-vous choisir ?",
  "wizard.q.series": "Quelle série faites-vous ?",
  "wizard.q.category": "Choisissez un domaine de métiers",
  "wizard.q.job": "Choisissez le métier visé",
  "wizard.q.specialty": "Choisissez la spécialité universitaire",
  "wizard.q.region": "Où souhaitez-vous étudier ?",
  "wizard.q.budget": "Quel est le budget de votre famille ?",
  "wizard.q.results": "Les établissements recommandés",

  "stage.early.french": "Je suis en Seconde",
  "stage.early.english": "Je suis en Lower Sixth",
  "stage.early.international": "Je suis en Grade 10 / 11",
  "stage.final.french": "Je suis en Terminale",
  "stage.final.english": "Je suis en Upper Sixth",
  "stage.final.international": "Je suis en Grade 12 / année finale",
  "stage.seconde.french": "Je suis en Seconde",
  "stage.terminale.french": "Je suis en Terminale",
  "stage.seconde.hint": "L'année de tronc commun avant le choix d'une option commerciale.",
  "stage.terminale.hint": "Votre série de terminale est fixée — on part d'elle.",
  "stage.early.hint": "Votre série n'est pas encore choisie — on part du métier dont vous rêvez.",
  "stage.final.hint": "Votre série est fixée — on part d'elle.",

  "region.cameroon": "Au Cameroun",
  "region.africa": "En Afrique (hors Cameroun)",
  "region.world": "Hors d'Afrique (reste du monde)",
  "budget.low": "Budget faible · jusqu'à 1 000 000 FCFA/an",
  "budget.average": "Budget moyen · 1 000 000–5 000 000 FCFA/an",
  "budget.high": "Budget élevé · plus de 5 000 000 FCFA/an",
  "budget.low.desc":
    "Établissement public ou destination peu coûteuse : jusqu'à 1 000 000 FCFA/an de scolarité, hors vie.",
  "budget.average.desc":
    "Filière professionnelle ou privé modéré : 1 000 000–5 000 000 FCFA/an de scolarité, hors vie.",
  "budget.high.desc":
    "Privé, grande école ou international : plus de 5 000 000 FCFA/an de scolarité, hors vie.",
  "budget.cameroon.low": "Budget faible · jusqu'à 500 000 FCFA/an",
  "budget.cameroon.low.desc":
    "Universités publiques et formations locales abordables : jusqu'à 500 000 FCFA/an de scolarité, hors vie.",
  "budget.cameroon.average": "Budget moyen · 500 000–2 000 000 FCFA/an",
  "budget.cameroon.average.desc":
    "Instituts professionnels et privé modéré : 500 000–2 000 000 FCFA/an de scolarité.",
  "budget.cameroon.high": "Budget élevé · plus de 2 000 000 FCFA/an",
  "budget.cameroon.high.desc":
    "Établissements privés, grandes écoles et formations premium : plus de 2 000 000 FCFA/an.",
  "budget.africa.low": "Budget faible · jusqu'à 1 500 000 FCFA/an",
  "budget.africa.low.desc":
    "Établissements publics africains abordables : jusqu'à 1 500 000 FCFA/an de scolarité.",
  "budget.africa.average": "Budget moyen · 1 500 000–5 000 000 FCFA/an",
  "budget.africa.average.desc":
    "Universités privées et écoles professionnelles régionales : 1 500 000–5 000 000 FCFA/an.",
  "budget.africa.high": "Budget élevé · plus de 5 000 000 FCFA/an",
  "budget.africa.high.desc":
    "Universités africaines premium et écoles privées : plus de 5 000 000 FCFA/an.",
  "budget.world.low": "Budget faible · jusqu'à 3 000 000 FCFA/an",
  "budget.world.low.desc":
    "Destinations à frais réduits et universités publiques : jusqu'à 3 000 000 FCFA/an de scolarité.",
  "budget.world.average": "Budget moyen · 3 000 000–10 000 000 FCFA/an",
  "budget.world.average.desc":
    "Frais internationaux modérés : 3 000 000–10 000 000 FCFA/an de scolarité.",
  "budget.world.high": "Budget élevé · plus de 10 000 000 FCFA/an",
  "budget.world.high.desc":
    "Établissements privés ou destinations internationales coûteuses : plus de 10 000 000 FCFA/an.",

  "advice.title": "Les séries adaptées à ce métier",
  "advice.lead": "Pour devenir",
  "advice.lead2": "voici les séries à choisir au lycée :",
  "advice.subjects": "Matières",
  "advice.continue": "Continuer vers les universités",
  "advice.specialties": "Spécialités universitaires menant à ce métier",

  "results.count": "établissements correspondent à vos choix",
  "results.none": "Aucun établissement ne correspond encore à cette combinaison exacte.",
  "results.alternatives": "Alternatives proches dans d'autres budgets",
  "results.summary": "Vos critères",
  "results.language": "Langue d'enseignement",
  "results.levels": "Niveaux proposés",
  "results.cost": "Coût indicatif",
  "results.guide": "Guide de candidature",
  "results.concours": "Concours d'entrée obligatoire",
  "results.selection": "Sélection sur dossier (aucun concours indiqué)",
  "results.website": "Site / admissions de l'université",

  "lang.en": "Cours en anglais",
  "lang.fr": "Cours en français",
  "lang.both": "Bilingue (anglais et français)",

  "guide.title": "Guide de candidature",
  "guide.for":
    "Pour un étudiant camerounais titulaire du GCE A-Level, du Baccalauréat ou du diplôme OSSD.",
  "guide.eligibility": "Conditions et prérequis",
  "guide.documents": "Documents à préparer",
  "guide.procedure": "Procédure de candidature étape par étape",
  "guide.visa": "Admission à l'étranger et procédure de visa",
  "guide.note":
    "Vérifiez toujours les délais et les frais sur le site officiel de l'établissement avant tout paiement.",
  "guide.website": "Site officiel",
  "guide.back": "Retour aux résultats",

  "elig.diploma":
    "Être titulaire du GCE A-Level, du Baccalauréat ou du diplôme OSSD avec les matières exigées par la spécialité choisie.",
  "elig.grades":
    "De bonnes notes dans les matières clés de la spécialité (sciences pour la santé et l'ingénierie, économie/mathématiques pour la gestion, langues/histoire pour le droit et les lettres).",
  "elig.age": "Avoir au moins 17 ans et posséder une carte nationale d'identité valide.",
  "elig.concours":
    "Réussir le concours d'entrée organisé par l'établissement — les inscriptions ouvrent généralement plusieurs mois avant l'épreuve.",
  "elig.ielts":
    "Justifier son niveau d'anglais (IELTS, TOEFL ou attestation de scolarité en anglais).",
  "elig.tcf":
    "Justifier son niveau de français (TCF, TEF ou DELF/DALF B2), sauf si toute la scolarité s'est faite en français.",
  "elig.both":
    "Justifier son niveau dans la langue du programme (IELTS/TOEFL en anglais, TCF/TEF ou DELF B2 en français).",

  "doc.diploma":
    "Diplôme ou relevé provisoire (GCE A-Level, Baccalauréat, OSSD) : le demander à l'établissement scolaire/office d'examen et faire certifier les copies à la sous-préfecture ou à la mairie.",
  "doc.transcripts": "Relevés de notes des deux ou trois dernières années du lycée.",
  "doc.birth":
    "Acte de naissance récent : obtenir une copie certifiée à la mairie qui conserve le registre.",
  "doc.id":
    "CNI et, pour l'étranger, passeport valable au moins 18 mois : faire la demande auprès des services passeport de la DGSN.",
  "doc.photos":
    "Photos d'identité récentes : les faire chez un photographe professionnel selon le format demandé.",
  "doc.cv":
    "CV et lettre de motivation : les préparer avec le service d'orientation de l'école ou un conseiller professionnel, puis les relire.",
  "doc.medical":
    "Certificat médical et carnet de vaccination : consulter un hôpital/centre de santé habilité et vérifier le formulaire demandé.",
  "doc.translation":
    "Traduction assermentée : utiliser un traducteur agréé près d'un tribunal au Cameroun ou la liste fournie par l'ambassade.",
  "doc.funds":
    "Preuve de fonds/attestation bancaire : la demander à la banque commerciale du garant, sans intermédiaire.",
  "doc.insurance":
    "Assurance internationale : l'acheter auprès d'un assureur agréé accepté par l'université ou l'ambassade.",

  "proc.choose":
    "Choisir le programme exact et vérifier ses exigences sur le site de l'établissement.",
  "proc.file": "Créer le compte de candidature en ligne et téléverser les documents scannés.",
  "proc.fee": "Payer les frais de dossier ou de concours et conserver le reçu.",
  "proc.concours": "Composer au concours à la date prévue et suivre la publication des résultats.",
  "proc.admission":
    "Recevoir la décision d'admission, confirmer sa place et payer les frais d'inscription.",
  "proc.register": "Finaliser l'inscription sur le campus avec les documents originaux.",
  "proc.phase1":
    "Choisir le pays avant l'université : confirmer le diplôme, les matières, la langue, le budget total (scolarité, vie, immigration et voyage) et le caractère réglementé de la formation.",
  "proc.phase2":
    "Ouvrir le dossier 12 à 18 mois avant la rentrée : demander le passeport, obtenir l'acte de naissance récent, rassembler diplômes et relevés, faire le vaccin contre la fièvre jaune et scanner le tout. Ne pas légaliser maintenant.",
  "proc.phase3":
    "Réserver les tests 10 à 14 mois avant : passer le test de langue accepté et tout test d'admission ou concours, en gardant une possibilité de reprise.",
  "proc.phase4":
    "Établir la liste depuis les pages officielles : vérifier diplôme, matières, notes, langue, délai, frais, accréditation et candidature directe ou plateforme (Campus France, UCAS, uni-assist, etc.).",
  "proc.phase5":
    "Candidater 6 à 12 mois avant dans les mêmes noms que le passeport ; téléverser les documents demandés, rédiger une lettre adaptée, payer les frais officiels et conserver la référence.",
  "proc.phase6":
    "Traiter l'offre : lire les conditions, envoyer les preuves, accepter, payer le dépôt éventuel et obtenir le document d'immigration exigé (CAS, I-20, PAL/CAQ, CoE, VAL EMGS ou attestation Campus France).",
  "proc.phase7":
    "Légaliser, traduire et assembler le dossier seulement après demande : autorité émettrice, MINREX, puis mission étrangère. Le Cameroun ne délivre pas d'apostille. Ajouter traduction, casier, visite médicale et preuve financière.",
  "proc.phase8":
    "Demander le visa ou permis sur le portail officiel, payer, prendre rendez-vous pour biométrie et entretien. Ne pas acheter de billet non remboursable avant la décision.",
  "proc.phase9":
    "Préparer le voyage : logement, assurance obligatoire, vol et éventuel visa de transit. Garder passeport, admission, originaux, carnet jaune, fonds et assurance en cabine.",
  "proc.phase10":
    "Après l'arrivée, faire l'enregistrement ou titre de séjour, l'inscription avec les originaux, obtenir carte étudiante et services locaux, puis noter la date de renouvellement.",

  "visa.preinscription":
    "Obtenir la lettre officielle directement dans le portail d'admission de l'établissement.",
  "visa.campusfrance":
    "Pour la France, la Belgique et le Québec : suivre la procédure Campus France / Études en France ou provinciale et passer l'entretien.",
  "visa.blocked":
    "Ouvrir un compte bloqué ou fournir la preuve de fonds exigée par le pays de destination.",
  "visa.file":
    "Au Cameroun, constituer le dossier selon la checklist officielle : passeport, admission, fonds, logement, assurance, diplômes et traductions.",
  "visa.appointment":
    "Prendre rendez-vous uniquement sur le portail officiel de l'ambassade ou du centre agréé (souvent à Yaoundé) et payer les frais.",
  "visa.biometrics":
    "Se présenter à Yaoundé (ou au centre indiqué par le portail) avec originaux et copies pour biométrie et entretien.",
  "visa.travel":
    "Une fois le visa obtenu, réserver le vol, confirmer le logement et préparer les formalités d'arrivée et d'inscription.",

  "about.title": "À propos de la plateforme",
  "about.p1":
    "Cette plateforme d'orientation est parrainée et conçue par Soft Education Bilingual College, dont la devise est « School Otherwise ». Elle accompagne les élèves camerounais de la classe d'examen jusqu'à un programme universitaire adapté à leur série, à leur rêve professionnel, à leur destination et au budget familial.",
  "about.p2":
    "Le contenu s'appuie sur le guide du collège « After the GCE Advanced Level, Baccalauréat or OSSD Diploma » : séries et combinaisons de matières, domaines de métiers, spécialités universitaires, niveaux d'études, budgets et établissements au Cameroun, en Afrique et dans le monde.",
  "about.p3":
    "Ces informations sont un outil d'orientation et non une promesse d'admission. Les conditions, frais et délais changent chaque année — confirmez-les toujours auprès de l'établissement.",
  "footer.rights": "Tous droits réservés.",
  "footer.tagline":
    "Orientation carrière et universitaire pour les élèves du A-Level, du Baccalauréat et de l'OSSD.",
};

const es: Dict = {
  "brand.name": "Soft Education Bilingual College",
  "brand.slogan": "School Otherwise",
  "nav.home": "Inicio",
  "nav.start": "Comenzar orientación",
  "nav.about": "Acerca de",
  "nav.universities": "Universidades",
  "nav.admissions": "Cómo solicitar",
  "nav.paperwork": "Documentos",
  "nav.partners": "Nuestros socios",
  "nav.embassies": "Embajada / Consulado",
  "nav.gpa": "Conversión GPA",
  "nav.scholarships": "Becas",
  "nav.language": "Idioma",
  "page.paperwork": "Documentos",
  "page.paperwork.title": "Documentos",
  "page.paperwork.lead": "Completa tus datos para generar un borrador personalizado.",
  "page.partners": "Red",
  "page.partners.title": "Nuestros socios",
  "page.partners.lead": "Elige una categoría para ver organizaciones y sus datos de contacto.",
  "page.embassies": "Información de visados",
  "page.embassies.title": "Embajada / Consulado",
  "page.gpa": "Equivalencia académica",
  "page.gpa.title": "Conversión GPA",
  "page.scholarships": "Directorio de financiación",
  "page.scholarships.title": "Becas",

  "home.eyebrow": "Orientación profesional y universitaria",
  "home.title": "Después del A-Level, el Bachillerato o el OSSD, ¿qué sigue?",
  "home.lead":
    "Encuentra la profesión, la especialidad universitaria y la institución que corresponden a tu serie, tu destino y el presupuesto de tu familia — en Camerún, en África o en cualquier parte del mundo.",
  "home.cta": "Comenzar mi orientación",
  "home.cta2": "Cómo funciona",
  "home.step1.title": "Tu sistema escolar",
  "home.step1.text": "Educación francesa, inglesa (GCE) o internacional (OSSD, IB, Cambridge).",
  "home.step2.title": "Tu serie y tu profesión soñada",
  "home.step2.text":
    "¿Aún no eliges serie? Partimos de la profesión. ¿Estás en el último año? Partimos de tu serie.",
  "home.step3.title": "Destino y presupuesto",
  "home.step3.text": "Camerún, África o el resto del mundo, con presupuestos bajo, medio o alto.",
  "home.step4.title": "Tu lista y la guía de solicitud",
  "home.step4.text":
    "Instituciones compatibles con requisitos, documentos, procedimiento y trámites de visado.",
  "home.stat.universities": "instituciones",
  "home.stat.jobs": "profesiones",
  "home.stat.specialties": "especialidades universitarias",
  "home.stat.languages": "idiomas",

  "wizard.title": "Ruta de orientación",
  "wizard.step": "Paso",
  "wizard.of": "de",
  "wizard.back": "Atrás",
  "wizard.restart": "Empezar de nuevo",
  "wizard.q.system": "¿Qué sistema educativo sigues?",
  "wizard.q.stage": "¿En qué punto del bachillerato estás?",
  "wizard.q.track": "¿Qué familia de series quieres elegir?",
  "wizard.q.series": "¿Qué serie cursas?",
  "wizard.q.category": "Elige un área profesional",
  "wizard.q.job": "Elige la profesión que deseas",
  "wizard.q.specialty": "Elige la especialidad universitaria",
  "wizard.q.region": "¿Dónde te gustaría estudiar?",
  "wizard.q.budget": "¿Cuál es el presupuesto de tu familia?",
  "wizard.q.results": "Instituciones recomendadas",

  "stage.early.french": "Estoy en Seconde",
  "stage.early.english": "Estoy en Lower Sixth",
  "stage.early.international": "Estoy en Grado 10 / 11",
  "stage.final.french": "Estoy en Terminale",
  "stage.final.english": "Estoy en Upper Sixth",
  "stage.final.international": "Estoy en Grado 12 / último año",
  "stage.early.hint": "Tu serie aún no está elegida: partimos de la profesión que sueñas.",
  "stage.final.hint": "Tu serie ya está fijada: partimos de ella.",

  "region.cameroon": "En Camerún",
  "region.africa": "En África (fuera de Camerún)",
  "region.world": "Fuera de África (resto del mundo)",
  "budget.low": "Presupuesto bajo",
  "budget.average": "Presupuesto medio",
  "budget.high": "Presupuesto alto",
  "budget.low.desc": "Tasas de institución pública, presupuesto familiar modesto.",
  "budget.average.desc": "Programas profesionales públicos o privados de coste moderado.",
  "budget.high.desc": "Privado, grandes escuelas o tasas internacionales.",

  "advice.title": "Las series adecuadas para esta profesión",
  "advice.lead": "Para ser",
  "advice.lead2": "estas son las series que debes elegir:",
  "advice.subjects": "Asignaturas",
  "advice.continue": "Continuar a las universidades",
  "advice.specialties": "Especialidades universitarias que llevan a esta profesión",

  "results.count": "instituciones coinciden con tus elecciones",
  "results.none": "Todavía no hay instituciones para esta combinación exacta.",
  "results.alternatives": "Alternativas cercanas en otros presupuestos",
  "results.summary": "Tus criterios",
  "results.language": "Idioma de enseñanza",
  "results.levels": "Niveles ofrecidos",
  "results.cost": "Coste indicativo",
  "results.guide": "Guía de solicitud",
  "results.concours": "Examen de ingreso obligatorio",

  "lang.en": "Enseñanza en inglés",
  "lang.fr": "Enseñanza en francés",
  "lang.both": "Bilingüe (inglés y francés)",

  "guide.title": "Guía de solicitud",
  "guide.for": "Para un estudiante camerunés con GCE A-Level, Bachillerato u OSSD.",
  "guide.eligibility": "Requisitos y condiciones",
  "guide.documents": "Documentos a preparar",
  "guide.procedure": "Procedimiento de solicitud paso a paso",
  "guide.visa": "Admisión en el extranjero y trámite de visado",
  "guide.note":
    "Confirma siempre plazos y tasas en la web oficial de la institución antes de pagar.",
  "guide.website": "Sitio oficial",
  "guide.back": "Volver a los resultados",

  "elig.diploma":
    "Tener el GCE A-Level, el Bachillerato o el diploma OSSD con las asignaturas exigidas por la especialidad.",
  "elig.grades":
    "Buenas notas en las asignaturas clave de la especialidad (ciencias para salud e ingeniería, economía/matemáticas para gestión, lenguas/historia para derecho y letras).",
  "elig.age": "Tener al menos 17 años y una cédula de identidad válida.",
  "elig.concours":
    "Aprobar el examen de ingreso (concours) de la institución; la inscripción abre meses antes.",
  "elig.ielts":
    "Acreditar el nivel de inglés con IELTS, TOEFL o un certificado de escolaridad en inglés.",
  "elig.tcf":
    "Acreditar el nivel de francés con TCF, TEF o DELF/DALF B2, salvo escolaridad íntegra en francés.",
  "elig.both":
    "Acreditar el nivel en el idioma del programa (IELTS/TOEFL en inglés, TCF/TEF o DELF B2 en francés).",

  "doc.diploma":
    "Diploma o certificado provisional de notas (A-Level, Bachillerato, expediente OSSD).",
  "doc.transcripts": "Expedientes de los dos o tres últimos años de bachillerato.",
  "doc.birth": "Partida de nacimiento (copia reciente).",
  "doc.id": "Cédula de identidad y, para el extranjero, pasaporte válido al menos 18 meses.",
  "doc.photos": "Fotografías tipo pasaporte recientes.",
  "doc.cv":
    "CV y carta de motivación (exigidos por casi todas las instituciones privadas y extranjeras).",
  "doc.medical": "Certificado médico y cartilla de vacunación.",
  "doc.translation":
    "Traducción jurada del diploma y los expedientes si el idioma del programa es distinto.",
  "doc.funds":
    "Prueba de fondos o certificado bancario del patrocinador para matrícula y manutención.",
  "doc.insurance": "Seguro médico internacional durante todos los estudios.",

  "proc.choose": "Elegir el programa exacto y revisar sus requisitos en la web de la institución.",
  "proc.file": "Crear la cuenta de solicitud en línea y subir los documentos escaneados.",
  "proc.fee": "Pagar la tasa de solicitud o del concurso y guardar el recibo.",
  "proc.concours": "Presentarse al examen de ingreso en la fecha prevista y seguir los resultados.",
  "proc.admission": "Recibir la decisión de admisión, confirmar la plaza y pagar la matrícula.",
  "proc.register": "Completar la inscripción en el campus con los documentos originales.",

  "visa.preinscription": "Obtener la carta oficial de admisión o preinscripción.",
  "visa.campusfrance":
    "Para Francia, Bélgica y Quebec: completar el trámite Campus France / Études en France o provincial y asistir a la entrevista.",
  "visa.blocked": "Abrir una cuenta bloqueada o presentar la prueba de fondos exigida por el país.",
  "visa.file":
    "Preparar el expediente del visado: pasaporte, carta de admisión, fondos, alojamiento, seguro, diplomas y traducciones.",
  "visa.appointment":
    "Pedir cita en la embajada, el consulado o el centro de visados y pagar la tasa.",
  "visa.biometrics": "Acudir a la cita de biometría y entrevista.",
  "visa.travel":
    "Con el visado concedido, reservar el vuelo, confirmar alojamiento y preparar la llegada y la matrícula.",

  "about.title": "Acerca de esta plataforma",
  "about.p1":
    "Esta plataforma de orientación está patrocinada y diseñada por Soft Education Bilingual College, cuyo lema es «School Otherwise». Acompaña a los estudiantes cameruneses desde el último año de bachillerato hasta un programa universitario acorde con su serie, su vocación, su destino y el presupuesto familiar.",
  "about.p2":
    "El contenido se basa en la guía del colegio «After the GCE Advanced Level, Baccalauréat or OSSD Diploma»: series y combinaciones de asignaturas, áreas profesionales, especialidades universitarias, niveles de estudio, presupuestos e instituciones en Camerún, África y el mundo.",
  "about.p3":
    "La información es una herramienta de orientación, no una promesa de admisión. Requisitos, tasas y plazos cambian cada año: confírmalos con la institución.",
  "footer.rights": "Todos los derechos reservados.",
  "footer.tagline":
    "Orientación profesional y universitaria para estudiantes de A-Level, Bachillerato y OSSD.",
};

const de: Dict = {
  "brand.name": "Soft Education Bilingual College",
  "brand.slogan": "School Otherwise",
  "nav.home": "Startseite",
  "nav.start": "Orientierung starten",
  "nav.about": "Über uns",
  "nav.universities": "Hochschulen",
  "nav.admissions": "Bewerbung",
  "nav.paperwork": "Dokumente",
  "nav.partners": "Unsere Partner",
  "nav.embassies": "Botschaft / Konsulat",
  "nav.gpa": "GPA-Umrechnung",
  "nav.scholarships": "Stipendien",
  "nav.language": "Sprache",
  "page.paperwork": "Dokumente",
  "page.paperwork.title": "Dokumente",
  "page.paperwork.lead":
    "Füllen Sie Ihre Angaben aus, um einen personalisierten Entwurf zu erstellen.",
  "page.partners": "Netzwerk",
  "page.partners.title": "Unsere Partner",
  "page.partners.lead": "Wählen Sie eine Kategorie für Organisationen und Kontaktdaten.",
  "page.embassies": "Visa-Informationen",
  "page.embassies.title": "Botschaft / Konsulat",
  "page.gpa": "Akademische Gleichwertigkeit",
  "page.gpa.title": "GPA-Umrechnung",
  "page.scholarships": "Förderverzeichnis",
  "page.scholarships.title": "Stipendien",

  "home.eyebrow": "Berufs- und Studienorientierung",
  "home.title": "Nach dem A-Level, dem Baccalauréat oder dem OSSD — was nun?",
  "home.lead":
    "Finde den Beruf, das Studienfach und die Hochschule, die zu deiner Fachrichtung, deinem Wunschland und dem Budget deiner Familie passen — in Kamerun, in Afrika oder weltweit.",
  "home.cta": "Orientierung beginnen",
  "home.cta2": "So funktioniert es",
  "home.step1.title": "Dein Schulsystem",
  "home.step1.text":
    "Französisches, englisches (GCE) oder internationales System (OSSD, IB, Cambridge).",
  "home.step2.title": "Deine Fachrichtung und dein Traumberuf",
  "home.step2.text":
    "Noch keine Fachrichtung gewählt? Wir starten beim Beruf. Im Abschlussjahr? Wir starten bei deiner Fachrichtung.",
  "home.step3.title": "Zielland und Budget",
  "home.step3.text": "Kamerun, Afrika oder weltweit, mit niedrigem, mittlerem oder hohem Budget.",
  "home.step4.title": "Deine Liste und der Bewerbungsleitfaden",
  "home.step4.text":
    "Passende Hochschulen mit Zugangsvoraussetzungen, Unterlagen, Ablauf und Visumsschritten.",
  "home.stat.universities": "Hochschulen",
  "home.stat.jobs": "Berufe",
  "home.stat.specialties": "Studienfächer",
  "home.stat.languages": "Sprachen",

  "wizard.title": "Orientierungspfad",
  "wizard.step": "Schritt",
  "wizard.of": "von",
  "wizard.back": "Zurück",
  "wizard.restart": "Neu beginnen",
  "wizard.q.system": "Welchem Schulsystem folgst du?",
  "wizard.q.stage": "Wo stehst du in der Oberstufe?",
  "wizard.q.track": "Welche Fachrichtungsfamilie möchtest du wählen?",
  "wizard.q.series": "Welche Fachrichtung besuchst du?",
  "wizard.q.category": "Wähle ein Berufsfeld",
  "wizard.q.job": "Wähle deinen Wunschberuf",
  "wizard.q.specialty": "Wähle das Studienfach",
  "wizard.q.region": "Wo möchtest du studieren?",
  "wizard.q.budget": "Wie hoch ist euer Familienbudget?",
  "wizard.q.results": "Empfohlene Hochschulen",

  "stage.early.french": "Ich bin in der Seconde",
  "stage.early.english": "Ich bin in Lower Sixth",
  "stage.early.international": "Ich bin in Klasse 10 / 11",
  "stage.final.french": "Ich bin in der Terminale",
  "stage.final.english": "Ich bin in Upper Sixth",
  "stage.final.international": "Ich bin in Klasse 12 / im Abschlussjahr",
  "stage.early.hint": "Deine Fachrichtung steht noch nicht fest — wir starten beim Traumberuf.",
  "stage.final.hint": "Deine Fachrichtung steht fest — wir starten dort.",

  "region.cameroon": "In Kamerun",
  "region.africa": "In Afrika (außerhalb Kameruns)",
  "region.world": "Außerhalb Afrikas (weltweit)",
  "budget.low": "Niedriges Budget",
  "budget.average": "Mittleres Budget",
  "budget.high": "Hohes Budget",
  "budget.low.desc": "Gebühren staatlicher Hochschulen, bescheidenes Familienbudget.",
  "budget.average.desc":
    "Staatliche Fachprogramme oder private Hochschulen mit moderaten Gebühren.",
  "budget.high.desc": "Private Hochschulen, Grandes Écoles oder internationale Gebühren.",

  "advice.title": "Passende Fachrichtungen für diesen Beruf",
  "advice.lead": "Um",
  "advice.lead2": "zu werden, eignen sich diese Fachrichtungen:",
  "advice.subjects": "Fächer",
  "advice.continue": "Weiter zu den Hochschulen",
  "advice.specialties": "Studienfächer, die zu diesem Beruf führen",

  "results.count": "Hochschulen passen zu deiner Auswahl",
  "results.none": "Für diese genaue Kombination gibt es noch keine Hochschule.",
  "results.alternatives": "Ähnliche Optionen in anderen Budgetstufen",
  "results.summary": "Deine Kriterien",
  "results.language": "Unterrichtssprache",
  "results.levels": "Angebotene Abschlüsse",
  "results.cost": "Richtwert der Kosten",
  "results.guide": "Bewerbungsleitfaden",
  "results.concours": "Aufnahmeprüfung erforderlich",

  "lang.en": "Unterricht auf Englisch",
  "lang.fr": "Unterricht auf Französisch",
  "lang.both": "Zweisprachig (Englisch und Französisch)",

  "guide.title": "Bewerbungsleitfaden",
  "guide.for": "Für kamerunische Studierende mit GCE A-Level, Baccalauréat oder OSSD.",
  "guide.eligibility": "Voraussetzungen",
  "guide.documents": "Benötigte Unterlagen",
  "guide.procedure": "Bewerbung Schritt für Schritt",
  "guide.visa": "Zulassung im Ausland und Visumsverfahren",
  "guide.note":
    "Prüfe Fristen und Gebühren immer auf der offiziellen Webseite der Hochschule, bevor du zahlst.",
  "guide.website": "Offizielle Webseite",
  "guide.back": "Zurück zu den Ergebnissen",

  "elig.diploma":
    "Abgeschlossenes GCE A-Level, Baccalauréat oder OSSD mit den vom Studienfach geforderten Fächern.",
  "elig.grades":
    "Gute Noten in den Kernfächern (Naturwissenschaften für Medizin und Technik, Wirtschaft/Mathematik für Management, Sprachen/Geschichte für Jura und Geisteswissenschaften).",
  "elig.age": "Mindestens 17 Jahre alt sein und einen gültigen Personalausweis besitzen.",
  "elig.concours":
    "Die Aufnahmeprüfung (Concours) der Hochschule bestehen — Anmeldung meist mehrere Monate vorher.",
  "elig.ielts":
    "Englischkenntnisse mit IELTS, TOEFL oder einem englischsprachigen Schulzeugnis nachweisen.",
  "elig.tcf":
    "Französischkenntnisse mit TCF, TEF oder DELF/DALF B2 nachweisen, außer bei durchgehend französischer Schulbildung.",
  "elig.both":
    "Sprachkenntnisse in der Programmsprache nachweisen (IELTS/TOEFL für Englisch, TCF/TEF oder DELF B2 für Französisch).",

  "doc.diploma":
    "Zeugnis oder vorläufige Ergebnisbescheinigung (A-Level, Baccalauréat, OSSD-Transcript).",
  "doc.transcripts": "Notenübersichten der letzten zwei bis drei Schuljahre.",
  "doc.birth": "Geburtsurkunde (aktuelle Kopie).",
  "doc.id": "Personalausweis und für das Ausland ein mindestens 18 Monate gültiger Reisepass.",
  "doc.photos": "Aktuelle Passfotos.",
  "doc.cv":
    "Lebenslauf und Motivationsschreiben (bei privaten und ausländischen Hochschulen üblich).",
  "doc.medical": "Ärztliches Attest und Impfpass.",
  "doc.translation":
    "Beglaubigte Übersetzung von Zeugnis und Notenübersichten, wenn die Programmsprache abweicht.",
  "doc.funds":
    "Finanzierungsnachweis oder Bankbestätigung des Sponsors für Studien- und Lebenshaltungskosten.",
  "doc.insurance": "Internationale Krankenversicherung für die gesamte Studiendauer.",

  "proc.choose": "Das genaue Programm wählen und dessen Anforderungen auf der Webseite prüfen.",
  "proc.file": "Online-Bewerbungskonto anlegen und die gescannten Unterlagen hochladen.",
  "proc.fee": "Bewerbungs- oder Prüfungsgebühr zahlen und die Quittung aufbewahren.",
  "proc.concours": "Zum Prüfungstermin antreten und die Ergebnisveröffentlichung verfolgen.",
  "proc.admission": "Zulassungsbescheid erhalten, Platz bestätigen und Einschreibegebühren zahlen.",
  "proc.register": "Die Einschreibung auf dem Campus mit den Originaldokumenten abschließen.",

  "visa.preinscription":
    "Das offizielle Zulassungs- oder Voreinschreibungsschreiben der Hochschule erhalten.",
  "visa.campusfrance":
    "Für Frankreich, Belgien und Quebec: Campus France / Études en France bzw. das Provinzverfahren durchlaufen und zum Interview gehen.",
  "visa.blocked":
    "Sperrkonto eröffnen oder den vom Zielland geforderten Finanzierungsnachweis erbringen.",
  "visa.file":
    "Visumsunterlagen zusammenstellen: Pass, Zulassung, Finanzierungsnachweis, Unterkunft, Versicherung, Zeugnisse und Übersetzungen.",
  "visa.appointment":
    "Termin bei Botschaft, Konsulat oder Visazentrum buchen und die Gebühr zahlen.",
  "visa.biometrics": "Zum Biometrie- und Interviewtermin erscheinen.",
  "visa.travel":
    "Nach Visumserteilung Flug buchen, Unterkunft bestätigen und Ankunft sowie Einschreibung vorbereiten.",

  "about.title": "Über diese Plattform",
  "about.p1":
    'Diese Orientierungsplattform wird vom Soft Education Bilingual College mit dem Leitspruch „School Otherwise" gefördert und gestaltet. Sie begleitet kamerunische Schülerinnen und Schüler vom Abschlussjahr bis zu einem Studium, das zu Fachrichtung, Berufswunsch, Zielland und Familienbudget passt.',
  "about.p2":
    'Die Inhalte beruhen auf dem Leitfaden der Schule „After the GCE Advanced Level, Baccalauréat or OSSD Diploma": Fachrichtungen, Berufsfelder, Studienfächer, Abschlussarten, Budgetstufen und Hochschulen in Kamerun, Afrika und weltweit.',
  "about.p3":
    "Die Angaben sind eine Orientierungshilfe, keine Zulassungszusage. Voraussetzungen, Gebühren und Fristen ändern sich jährlich — bitte bei der Hochschule bestätigen lassen.",
  "footer.rights": "Alle Rechte vorbehalten.",
  "footer.tagline": "Berufs- und Studienorientierung für A-Level-, Baccalauréat- und OSSD-Schüler.",
};

const ar: Dict = {
  "brand.name": "Soft Education Bilingual College",
  "brand.slogan": "School Otherwise",
  "nav.home": "الرئيسية",
  "nav.start": "ابدأ التوجيه",
  "nav.about": "من نحن",
  "nav.universities": "الجامعات",
  "nav.admissions": "طريقة التقديم",
  "nav.paperwork": "الوثائق",
  "nav.partners": "شركاؤنا",
  "nav.embassies": "السفارة / القنصلية",
  "nav.gpa": "تحويل المعدل",
  "nav.scholarships": "المنح الدراسية",
  "nav.language": "اللغة",
  "page.paperwork": "الوثائق",
  "page.paperwork.title": "الوثائق",
  "page.paperwork.lead": "أدخل معلوماتك لإنشاء مسودة شخصية.",
  "page.partners": "الشبكة",
  "page.partners.title": "شركاؤنا",
  "page.partners.lead": "اختر فئة لعرض المؤسسات وبيانات الاتصال.",
  "page.embassies": "معلومات التأشيرات",
  "page.embassies.title": "السفارة / القنصلية",
  "page.gpa": "المعادلة الأكاديمية",
  "page.gpa.title": "تحويل المعدل",
  "page.scholarships": "دليل التمويل",
  "page.scholarships.title": "المنح الدراسية",

  "home.eyebrow": "التوجيه المهني والجامعي",
  "home.title": "بعد شهادة A-Level أو البكالوريا أو OSSD… ما الخطوة التالية؟",
  "home.lead":
    "اكتشف المهنة والتخصص الجامعي والمؤسسة التي تناسب شعبتك ووجهتك وميزانية أسرتك — في الكاميرون أو أفريقيا أو أي مكان في العالم.",
  "home.cta": "ابدأ توجيهي",
  "home.cta2": "كيف يعمل",
  "home.step1.title": "نظامك الدراسي",
  "home.step1.text": "التعليم الفرنسي أو الإنجليزي (GCE) أو الدولي (OSSD، IB، كامبريدج).",
  "home.step2.title": "شعبتك ومهنة أحلامك",
  "home.step2.text": "لم تختر شعبتك بعد؟ نبدأ من المهنة. في السنة النهائية؟ نبدأ من شعبتك.",
  "home.step3.title": "الوجهة والميزانية",
  "home.step3.text": "الكاميرون أو أفريقيا أو بقية العالم، بميزانية منخفضة أو متوسطة أو مرتفعة.",
  "home.step4.title": "قائمتك ودليل التقديم",
  "home.step4.text": "مؤسسات مناسبة مع الشروط والوثائق والإجراءات وخطوات التأشيرة.",
  "home.stat.universities": "مؤسسة",
  "home.stat.jobs": "مهنة",
  "home.stat.specialties": "تخصصاً جامعياً",
  "home.stat.languages": "لغات",

  "wizard.title": "مسار التوجيه",
  "wizard.step": "الخطوة",
  "wizard.of": "من",
  "wizard.back": "رجوع",
  "wizard.restart": "البدء من جديد",
  "wizard.q.system": "ما النظام التعليمي الذي تتبعه؟",
  "wizard.q.stage": "في أي مرحلة أنت من الثانوية؟",
  "wizard.q.track": "ما عائلة الشعب التي تريد اختيارها؟",
  "wizard.q.series": "ما الشعبة التي تدرسها؟",
  "wizard.q.category": "اختر مجالاً مهنياً",
  "wizard.q.job": "اختر المهنة التي تطمح إليها",
  "wizard.q.specialty": "اختر التخصص الجامعي",
  "wizard.q.region": "أين ترغب في الدراسة؟",
  "wizard.q.budget": "ما ميزانية أسرتك؟",
  "wizard.q.results": "المؤسسات الموصى بها",

  "stage.early.french": "أنا في الصف Seconde",
  "stage.early.english": "أنا في Lower Sixth",
  "stage.early.international": "أنا في الصف 10 / 11",
  "stage.final.french": "أنا في الصف Terminale",
  "stage.final.english": "أنا في Upper Sixth",
  "stage.final.international": "أنا في الصف 12 / السنة النهائية",
  "stage.early.hint": "لم تُحدَّد شعبتك بعد — نبدأ من المهنة التي تحلم بها.",
  "stage.final.hint": "شعبتك محددة — نبدأ منها.",

  "region.cameroon": "في الكاميرون",
  "region.africa": "في أفريقيا (خارج الكاميرون)",
  "region.world": "خارج أفريقيا (بقية العالم)",
  "budget.low": "ميزانية منخفضة",
  "budget.average": "ميزانية متوسطة",
  "budget.high": "ميزانية مرتفعة",
  "budget.low.desc": "رسوم المؤسسات العمومية، ميزانية عائلية متواضعة.",
  "budget.average.desc": "برامج مهنية عمومية أو مؤسسات خاصة برسوم معتدلة.",
  "budget.high.desc": "مؤسسات خاصة أو مدارس عليا أو رسوم دولية.",

  "advice.title": "الشعب المناسبة لهذه المهنة",
  "advice.lead": "لكي تصبح",
  "advice.lead2": "هذه هي الشعب التي ينبغي اختيارها:",
  "advice.subjects": "المواد",
  "advice.continue": "المتابعة إلى الجامعات",
  "advice.specialties": "التخصصات الجامعية المؤدية إلى هذه المهنة",

  "results.count": "مؤسسة تطابق اختياراتك",
  "results.none": "لا توجد بعد مؤسسة تطابق هذا المزيج بالضبط.",
  "results.alternatives": "بدائل قريبة بميزانيات أخرى",
  "results.summary": "معاييرك",
  "results.language": "لغة التدريس",
  "results.levels": "المستويات المتاحة",
  "results.cost": "التكلفة التقريبية",
  "results.guide": "دليل التقديم",
  "results.concours": "مباراة دخول إلزامية",

  "lang.en": "التدريس بالإنجليزية",
  "lang.fr": "التدريس بالفرنسية",
  "lang.both": "ثنائي اللغة (إنجليزية وفرنسية)",

  "guide.title": "دليل التقديم",
  "guide.for": "للطالب الكاميروني الحامل لشهادة A-Level أو البكالوريا أو OSSD.",
  "guide.eligibility": "الشروط والمتطلبات",
  "guide.documents": "الوثائق المطلوبة",
  "guide.procedure": "إجراءات التقديم خطوة بخطوة",
  "guide.visa": "القبول في الخارج وإجراءات التأشيرة",
  "guide.note": "تأكد دائماً من المواعيد والرسوم على الموقع الرسمي للمؤسسة قبل أي دفع.",
  "guide.website": "الموقع الرسمي",
  "guide.back": "العودة إلى النتائج",

  "elig.diploma": "الحصول على شهادة A-Level أو البكالوريا أو OSSD بالمواد التي يشترطها التخصص.",
  "elig.grades":
    "درجات جيدة في المواد الأساسية للتخصص (العلوم للصحة والهندسة، الاقتصاد والرياضيات للتسيير، اللغات والتاريخ للحقوق والآداب).",
  "elig.age": "أن يبلغ الطالب 17 سنة على الأقل ويملك بطاقة هوية سارية.",
  "elig.concours": "النجاح في مباراة الدخول التي تنظمها المؤسسة؛ يفتح التسجيل عادة قبل أشهر.",
  "elig.ielts": "إثبات مستوى الإنجليزية بشهادة IELTS أو TOEFL أو شهادة دراسة بالإنجليزية.",
  "elig.tcf":
    "إثبات مستوى الفرنسية بشهادة TCF أو TEF أو DELF/DALF B2، إلا إذا كانت الدراسة كلها بالفرنسية.",
  "elig.both":
    "إثبات المستوى في لغة البرنامج (IELTS/TOEFL للإنجليزية، TCF/TEF أو DELF B2 للفرنسية).",

  "doc.diploma": "الشهادة أو كشف النقاط المؤقت (A-Level، البكالوريا، كشف OSSD).",
  "doc.transcripts": "كشوف نقاط السنتين أو السنوات الثلاث الأخيرة.",
  "doc.birth": "شهادة الميلاد (نسخة حديثة).",
  "doc.id": "بطاقة الهوية الوطنية، وللدراسة بالخارج جواز سفر صالح 18 شهراً على الأقل.",
  "doc.photos": "صور شمسية حديثة.",
  "doc.cv": "السيرة الذاتية ورسالة الدوافع (مطلوبة في أغلب المؤسسات الخاصة والأجنبية).",
  "doc.medical": "شهادة طبية ودفتر التلقيح.",
  "doc.translation": "ترجمة محلفة للشهادة وكشوف النقاط إذا اختلفت لغة البرنامج.",
  "doc.funds": "إثبات الموارد المالية أو شهادة بنكية للكفيل تغطي الرسوم والمعيشة.",
  "doc.insurance": "تأمين صحي دولي طوال مدة الدراسة.",

  "proc.choose": "اختيار البرنامج بدقة والتحقق من شروطه على موقع المؤسسة.",
  "proc.file": "إنشاء حساب التقديم الإلكتروني ورفع الوثائق الممسوحة.",
  "proc.fee": "دفع رسوم الملف أو المباراة والاحتفاظ بالوصل.",
  "proc.concours": "اجتياز مباراة الدخول في موعدها ومتابعة إعلان النتائج.",
  "proc.admission": "تلقي قرار القبول وتأكيد المقعد ودفع رسوم التسجيل.",
  "proc.register": "إتمام التسجيل في الحرم الجامعي بالوثائق الأصلية.",

  "visa.preinscription": "الحصول على رسالة القبول أو التسجيل الأولي الرسمية من المؤسسة.",
  "visa.campusfrance":
    "بالنسبة لفرنسا وبلجيكا وكيبيك: إتمام مسطرة Campus France / Études en France أو المسطرة الإقليمية وحضور المقابلة.",
  "visa.blocked": "فتح حساب مجمّد أو تقديم إثبات الموارد الذي يشترطه بلد الوجهة.",
  "visa.file":
    "تجهيز ملف التأشيرة: جواز السفر، رسالة القبول، إثبات الموارد، السكن، التأمين، الشهادات والترجمات.",
  "visa.appointment": "حجز موعد في السفارة أو القنصلية أو مركز التأشيرات ودفع الرسوم.",
  "visa.biometrics": "حضور موعد البصمات والمقابلة.",
  "visa.travel": "بعد الحصول على التأشيرة: حجز الرحلة وتأكيد السكن وتحضير إجراءات الوصول والتسجيل.",

  "about.title": "حول هذه المنصة",
  "about.p1":
    "هذه المنصة برعاية وتصميم Soft Education Bilingual College، وشعارها «School Otherwise». ترافق الطلاب الكاميرونيين من السنة النهائية إلى برنامج جامعي يناسب شعبتهم وطموحهم ووجهتهم وميزانية أسرتهم.",
  "about.p2":
    "يستند المحتوى إلى دليل المدرسة «After the GCE Advanced Level, Baccalauréat or OSSD Diploma»: الشعب والمواد والمجالات المهنية والتخصصات الجامعية ومستويات الدراسة والميزانيات والمؤسسات في الكاميرون وأفريقيا والعالم.",
  "about.p3":
    "هذه المعلومات أداة توجيه وليست وعداً بالقبول. تتغير الشروط والرسوم والمواعيد سنوياً، لذا تأكد منها لدى المؤسسة.",
  "footer.rights": "جميع الحقوق محفوظة.",
  "footer.tagline": "التوجيه المهني والجامعي لطلاب A-Level والبكالوريا وOSSD.",
};

const pageText: Record<LocaleCode, Dict> = {
  en: {
    "page.admissions": "Cameroon applicant guide",
    "page.admissions.title": "How to apply abroad",
    "page.admissions.lead":
      "A practical route for Cameroonian graduates with GCE A'Level, Baccalauréat or OSSD.",
    "page.universities": "Directory",
    "page.universities.title": "Universities and professional schools",
    "page.universities.lead":
      "Browse institutions and narrow them by destination, budget, language, qualification, career and specialty.",
  },
  fr: {
    "page.admissions": "Guide du candidat camerounais",
    "page.admissions.title": "Comment candidater à l'étranger",
    "page.admissions.lead":
      "Un parcours pratique pour les diplômés camerounais du GCE A'Level, du Baccalauréat ou de l'OSSD.",
    "page.universities": "Répertoire",
    "page.universities.title": "Universités et écoles professionnelles",
    "page.universities.lead":
      "Parcourez les établissements selon la destination, le budget, la langue, le diplôme, le métier et la spécialité.",
  },
  es: {
    "page.admissions": "Guía para candidatos cameruneses",
    "page.admissions.title": "Cómo solicitar estudios en el extranjero",
    "page.admissions.lead":
      "Una ruta práctica para graduados cameruneses con GCE A'Level, Bachillerato u OSSD.",
    "page.universities": "Directorio",
    "page.universities.title": "Universidades y escuelas profesionales",
    "page.universities.lead":
      "Explora instituciones por destino, presupuesto, idioma, título, profesión y especialidad.",
  },
  de: {
    "page.admissions": "Leitfaden für kamerunische Bewerber",
    "page.admissions.title": "So bewirbst du dich im Ausland",
    "page.admissions.lead":
      "Ein praktischer Weg für kamerunische Absolventen mit GCE A'Level, Baccalauréat oder OSSD.",
    "page.universities": "Verzeichnis",
    "page.universities.title": "Hochschulen und Berufsschulen",
    "page.universities.lead":
      "Finde Hochschulen nach Ziel, Budget, Sprache, Abschluss, Beruf und Fachrichtung.",
  },
  ar: {
    "page.admissions": "دليل الطالب الكاميروني",
    "page.admissions.title": "كيفية التقديم للدراسة بالخارج",
    "page.admissions.lead":
      "مسار عملي للخريجين الكاميرونيين الحاصلين على GCE أو البكالوريا أو OSSD.",
    "page.universities": "الدليل",
    "page.universities.title": "الجامعات والمدارس المهنية",
    "page.universities.lead": "تصفح المؤسسات حسب الوجهة والميزانية واللغة والمؤهل والمهنة والتخصص.",
  },
};

export const DICTS: Record<LocaleCode, Dict> = {
  en: { ...en, ...pageText.en },
  fr: { ...fr, ...pageText.fr },
  es: { ...es, ...pageText.es },
  de: { ...de, ...pageText.de },
  ar: { ...ar, ...pageText.ar },
};

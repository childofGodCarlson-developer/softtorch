// Career & university orientation catalogue.
// Source: "After the GCE Advanced Level, Baccalauréat or OSSD Diploma" guide
// (Soft Education Bilingual College).

export type SystemId = "french" | "english" | "international";
export type Track = "science" | "arts" | "commercial" | "technical";
export type Region = "cameroon" | "africa" | "world";
export type Budget = "low" | "average" | "high";
export type Lang = "en" | "fr" | "es" | "de" | "ar";

/** Bilingual label. Other UI languages fall back to English. */
export interface Label {
  en: string;
  fr: string;
}

export interface Series {
  id: string;
  system: SystemId;
  track: Track;
  code: string;
  label: Label;
  subjects: Label;
}

export interface JobCategory {
  id: string;
  tracks: Track[];
  label: Label;
}

export interface Job {
  id: string;
  categoryId: string;
  tracks: Track[];
  label: Label;
  /** Specialty ids that lead to this job. */
  specialties: string[];
  /** Series codes that are the best preparation for this job. */
  seriesCodes: string[];
}

export interface Specialty {
  id: string;
  label: Label;
}

export const SYSTEMS: { id: SystemId; label: Label }[] = [
  { id: "french", label: { en: "French education", fr: "Enseignement francophone" } },
  { id: "english", label: { en: "English education (GCE)", fr: "Enseignement anglophone (GCE)" } },
  {
    id: "international",
    label: { en: "International (OSSD)", fr: "International (OSSD)" },
  },
];

export const TRACKS: { id: Track; label: Label }[] = [
  { id: "science", label: { en: "Science series", fr: "Série scientifique" } },
  { id: "arts", label: { en: "Arts series", fr: "Série littéraire" } },
  { id: "commercial", label: { en: "Commercial series", fr: "Série commerciale / gestion" } },
  { id: "technical", label: { en: "Technical series", fr: "Série industrielle / technique" } },
];

export const SPECIALTIES: Specialty[] = [
  { id: "medicine", label: { en: "Medicine", fr: "Médecine" } },
  { id: "pharmacy", label: { en: "Pharmacy", fr: "Pharmacie" } },
  { id: "dentistry", label: { en: "Dentistry", fr: "Odontostomatologie" } },
  { id: "nursing", label: { en: "Nursing", fr: "Soins infirmiers" } },
  { id: "biomedical", label: { en: "Biomedical Sciences", fr: "Sciences biomédicales" } },
  { id: "publichealth", label: { en: "Public Health", fr: "Santé publique" } },
  { id: "civileng", label: { en: "Civil Engineering", fr: "Génie civil" } },
  { id: "mecheng", label: { en: "Mechanical Engineering", fr: "Génie mécanique" } },
  { id: "eleceng", label: { en: "Electrical Engineering", fr: "Génie électrique" } },
  { id: "chemeng", label: { en: "Chemical Engineering", fr: "Génie chimique" } },
  { id: "telecom", label: { en: "Telecommunications", fr: "Télécommunications" } },
  { id: "architecture", label: { en: "Architecture", fr: "Architecture" } },
  { id: "cs", label: { en: "Computer Science", fr: "Informatique" } },
  { id: "software", label: { en: "Software Engineering", fr: "Génie logiciel" } },
  { id: "cyber", label: { en: "Cybersecurity", fr: "Cybersécurité" } },
  { id: "datascience", label: { en: "Data Science", fr: "Science des données" } },
  { id: "ai", label: { en: "Artificial Intelligence", fr: "Intelligence artificielle" } },
  { id: "networks", label: { en: "Networks & Systems", fr: "Réseaux et systèmes" } },
  { id: "physics", label: { en: "Physics", fr: "Physique" } },
  { id: "maths", label: { en: "Mathematics", fr: "Mathématiques" } },
  { id: "statistics", label: { en: "Statistics", fr: "Statistique" } },
  { id: "agronomy", label: { en: "Agronomy & Agriculture", fr: "Agronomie et agriculture" } },
  { id: "veterinary", label: { en: "Veterinary Medicine", fr: "Médecine vétérinaire" } },
  { id: "envsci", label: { en: "Environmental Science", fr: "Sciences de l'environnement" } },
  { id: "geology", label: { en: "Geology & Mining", fr: "Géologie et mines" } },
  { id: "petroleum", label: { en: "Petroleum Engineering", fr: "Génie pétrolier" } },
  { id: "foodsci", label: { en: "Food Science", fr: "Sciences alimentaires" } },
  { id: "law", label: { en: "Law", fr: "Droit" } },
  { id: "polsci", label: { en: "Political Science", fr: "Science politique" } },
  { id: "ir", label: { en: "International Relations", fr: "Relations internationales" } },
  { id: "pubadmin", label: { en: "Public Administration", fr: "Administration publique" } },
  { id: "history", label: { en: "History", fr: "Histoire" } },
  { id: "philosophy", label: { en: "Philosophy", fr: "Philosophie" } },
  { id: "literature", label: { en: "Literature", fr: "Lettres modernes" } },
  { id: "languages", label: { en: "Modern Languages", fr: "Langues vivantes" } },
  {
    id: "translation",
    label: { en: "Translation & Interpretation", fr: "Traduction et interprétariat" },
  },
  { id: "journalism", label: { en: "Journalism", fr: "Journalisme" } },
  { id: "communication", label: { en: "Communication", fr: "Communication" } },
  { id: "education", label: { en: "Education & Teaching", fr: "Sciences de l'éducation" } },
  { id: "psychology", label: { en: "Psychology", fr: "Psychologie" } },
  { id: "sociology", label: { en: "Sociology", fr: "Sociologie" } },
  { id: "socialwork", label: { en: "Social Work", fr: "Travail social" } },
  { id: "economics", label: { en: "Economics", fr: "Sciences économiques" } },
  { id: "accounting", label: { en: "Accounting", fr: "Comptabilité" } },
  { id: "finance", label: { en: "Banking & Finance", fr: "Banque et finance" } },
  { id: "management", label: { en: "Business Administration", fr: "Gestion des entreprises" } },
  { id: "marketing", label: { en: "Marketing", fr: "Marketing" } },
  { id: "logistics", label: { en: "Logistics & Supply Chain", fr: "Logistique et transport" } },
  { id: "actuarial", label: { en: "Actuarial Science", fr: "Actuariat" } },
  { id: "tourism", label: { en: "Tourism & Hospitality", fr: "Tourisme et hôtellerie" } },
  { id: "finearts", label: { en: "Fine Arts", fr: "Arts plastiques" } },
  { id: "graphic", label: { en: "Graphic & Digital Design", fr: "Design graphique et numérique" } },
  { id: "film", label: { en: "Film & Cinematography", fr: "Cinéma et audiovisuel" } },
  { id: "animation", label: { en: "Animation & Multimedia", fr: "Animation et multimédia" } },
  { id: "music", label: { en: "Music & Performing Arts", fr: "Musique et arts du spectacle" } },
  { id: "fashion", label: { en: "Fashion & Textile Design", fr: "Mode et design textile" } },
  { id: "urban", label: { en: "Urban Planning", fr: "Aménagement urbain" } },
  {
    id: "sustainability",
    label: { en: "Sustainability Management", fr: "Management de la durabilité" },
  },
  {
    id: "buildtech",
    label: { en: "Building & Construction Technology", fr: "Technologie du bâtiment" },
  },
  { id: "autotech", label: { en: "Automotive Technology", fr: "Technologie automobile" } },
  {
    id: "electech",
    label: { en: "Electrical Technology / Electronics", fr: "Électrotechnique et électronique" },
  },
  { id: "industrial", label: { en: "Industrial Maintenance", fr: "Maintenance industrielle" } },
  { id: "surveying", label: { en: "Quantity Surveying & Topography", fr: "Métré et topographie" } },
  {
    id: "energy",
    label: { en: "Renewable Energy Engineering", fr: "Génie des énergies renouvelables" },
  },
];

const SPECIALTY_MAP = Object.fromEntries(SPECIALTIES.map((s) => [s.id, s])) as Record<
  string,
  Specialty
>;

export function specialtyOf(id: string): Specialty {
  return SPECIALTY_MAP[id] ?? { id, label: { en: id, fr: id } };
}

export const JOB_CATEGORIES: JobCategory[] = [
  {
    id: "health",
    tracks: ["science"],
    label: { en: "Health & Medicine", fr: "Santé et médecine" },
  },
  {
    id: "engineering",
    tracks: ["science", "technical"],
    label: { en: "Engineering & Construction", fr: "Ingénierie et construction" },
  },
  {
    id: "tech",
    tracks: ["science", "technical", "commercial"],
    label: { en: "Technology & Digital", fr: "Technologie et numérique" },
  },
  {
    id: "sciences",
    tracks: ["science"],
    label: { en: "Pure & Applied Sciences", fr: "Sciences fondamentales et appliquées" },
  },
  {
    id: "agri",
    tracks: ["science", "technical"],
    label: { en: "Agriculture & Environment", fr: "Agriculture et environnement" },
  },
  {
    id: "law",
    tracks: ["arts", "commercial"],
    label: { en: "Law & Government", fr: "Droit et administration" },
  },
  {
    id: "business",
    tracks: ["commercial", "arts", "science"],
    label: { en: "Business, Finance & Management", fr: "Commerce, finance et gestion" },
  },
  {
    id: "media",
    tracks: ["arts", "commercial"],
    label: { en: "Media & Communication", fr: "Médias et communication" },
  },
  {
    id: "languages",
    tracks: ["arts"],
    label: { en: "Languages & International Careers", fr: "Langues et carrières internationales" },
  },
  {
    id: "social",
    tracks: ["arts", "science"],
    label: { en: "Education & Social Sciences", fr: "Éducation et sciences sociales" },
  },
  {
    id: "creative",
    tracks: ["arts", "technical"],
    label: { en: "Creative Arts & Design", fr: "Arts créatifs et design" },
  },
  {
    id: "trades",
    tracks: ["technical"],
    label: { en: "Technical Trades & Industry", fr: "Métiers techniques et industrie" },
  },
];

export const JOBS: Job[] = [
  // Health
  {
    id: "doctor",
    categoryId: "health",
    tracks: ["science"],
    label: { en: "Medical Doctor", fr: "Médecin" },
    specialties: ["medicine", "biomedical", "publichealth"],
    seriesCodes: ["S2", "S3", "D", "IB-MED", "CAM-MED", "OSSD-MED"],
  },
  {
    id: "pharmacist",
    categoryId: "health",
    tracks: ["science"],
    label: { en: "Pharmacist", fr: "Pharmacien" },
    specialties: ["pharmacy", "biomedical"],
    seriesCodes: ["S2", "S3", "D", "IB-MED", "CAM-MED", "OSSD-MED"],
  },
  {
    id: "dentist",
    categoryId: "health",
    tracks: ["science"],
    label: { en: "Dentist", fr: "Chirurgien-dentiste" },
    specialties: ["dentistry", "medicine"],
    seriesCodes: ["S2", "S3", "D", "IB-MED", "CAM-MED"],
  },
  {
    id: "nurse",
    categoryId: "health",
    tracks: ["science"],
    label: { en: "Nurse", fr: "Infirmier(ère)" },
    specialties: ["nursing", "publichealth"],
    seriesCodes: ["S2", "S3", "D", "OSSD-MED"],
  },
  {
    id: "labscientist",
    categoryId: "health",
    tracks: ["science"],
    label: { en: "Medical Laboratory Scientist", fr: "Technicien de laboratoire médical" },
    specialties: ["biomedical", "publichealth"],
    seriesCodes: ["S2", "S3", "D"],
  },
  {
    id: "physio",
    categoryId: "health",
    tracks: ["science"],
    label: { en: "Physiotherapist", fr: "Kinésithérapeute" },
    specialties: ["nursing", "biomedical"],
    seriesCodes: ["S2", "S3", "D"],
  },
  {
    id: "vet",
    categoryId: "health",
    tracks: ["science"],
    label: { en: "Veterinarian", fr: "Vétérinaire" },
    specialties: ["veterinary", "agronomy"],
    seriesCodes: ["S3", "D", "CAM-MED"],
  },

  // Engineering
  {
    id: "civileng",
    categoryId: "engineering",
    tracks: ["science", "technical"],
    label: { en: "Civil Engineer", fr: "Ingénieur génie civil" },
    specialties: ["civileng", "surveying", "buildtech"],
    seriesCodes: ["S1", "C", "TI", "IB-SCI", "CAM-SCI", "OSSD-SCI"],
  },
  {
    id: "mecheng",
    categoryId: "engineering",
    tracks: ["science", "technical"],
    label: { en: "Mechanical Engineer", fr: "Ingénieur mécanicien" },
    specialties: ["mecheng", "industrial"],
    seriesCodes: ["S1", "C", "TI", "IB-SCI", "CAM-SCI", "OSSD-SCI"],
  },
  {
    id: "eleceng",
    categoryId: "engineering",
    tracks: ["science", "technical"],
    label: { en: "Electrical Engineer", fr: "Ingénieur électricien" },
    specialties: ["eleceng", "electech", "energy"],
    seriesCodes: ["S1", "C", "TI", "IB-SCI", "CAM-SCI"],
  },
  {
    id: "chemeng",
    categoryId: "engineering",
    tracks: ["science"],
    label: { en: "Chemical Engineer", fr: "Ingénieur chimiste" },
    specialties: ["chemeng", "foodsci"],
    seriesCodes: ["S1", "C", "IB-SCI", "CAM-SCI"],
  },
  {
    id: "architect",
    categoryId: "engineering",
    tracks: ["science", "technical", "arts"],
    label: { en: "Architect", fr: "Architecte" },
    specialties: ["architecture", "buildtech"],
    seriesCodes: ["S1", "C", "IB-SCI", "OSSD-SCI"],
  },
  {
    id: "telecomeng",
    categoryId: "engineering",
    tracks: ["science", "technical"],
    label: { en: "Telecommunications Engineer", fr: "Ingénieur télécoms" },
    specialties: ["telecom", "networks", "eleceng"],
    seriesCodes: ["S1", "C", "TI", "CAM-SCI"],
  },
  {
    id: "energyeng",
    categoryId: "engineering",
    tracks: ["science", "technical"],
    label: { en: "Renewable Energy Engineer", fr: "Ingénieur énergies renouvelables" },
    specialties: ["energy", "eleceng", "envsci"],
    seriesCodes: ["S1", "C", "TI"],
  },
  {
    id: "surveyor",
    categoryId: "engineering",
    tracks: ["science", "technical"],
    label: { en: "Quantity Surveyor", fr: "Métreur / Ingénieur topographe" },
    specialties: ["surveying", "civileng"],
    seriesCodes: ["S1", "C", "TI", "A4"],
  },

  // Tech
  {
    id: "softwaredev",
    categoryId: "tech",
    tracks: ["science", "technical"],
    label: { en: "Software Developer", fr: "Développeur logiciel" },
    specialties: ["software", "cs"],
    seriesCodes: ["S1", "C", "TI", "A7", "IB-CS", "CAM-CS", "OSSD-CS"],
  },
  {
    id: "software-engineer",
    categoryId: "tech",
    tracks: ["science", "technical"],
    label: { en: "Software Engineer", fr: "Ingénieur logiciel" },
    specialties: ["software", "cs"],
    seriesCodes: ["S1", "C", "TI", "CG", "ACC", "IB-CS", "CAM-CS", "OSSD-CS"],
  },
  {
    id: "datascientist",
    categoryId: "tech",
    tracks: ["science", "commercial"],
    label: { en: "Data Scientist", fr: "Data scientist" },
    specialties: ["datascience", "statistics", "maths"],
    seriesCodes: ["S1", "C", "TI", "A4", "IB-CS", "CAM-CS2", "OSSD-CS"],
  },
  {
    id: "cyberanalyst",
    categoryId: "tech",
    tracks: ["science", "technical"],
    label: { en: "Cybersecurity Analyst", fr: "Analyste en cybersécurité" },
    specialties: ["cyber", "networks", "cs"],
    seriesCodes: ["S1", "C", "TI", "IB-CS", "CAM-CS"],
  },
  {
    id: "networkeng",
    categoryId: "tech",
    tracks: ["science", "technical"],
    label: { en: "Network Engineer", fr: "Ingénieur réseaux" },
    specialties: ["networks", "telecom"],
    seriesCodes: ["S1", "C", "TI", "OSSD-TECH"],
  },
  {
    id: "aieng",
    categoryId: "tech",
    tracks: ["science"],
    label: { en: "AI / Machine Learning Engineer", fr: "Ingénieur IA" },
    specialties: ["ai", "datascience", "cs"],
    seriesCodes: ["S1", "C", "TI", "IB-CS", "CAM-CS"],
  },
  {
    id: "webdev",
    categoryId: "tech",
    tracks: ["technical", "commercial", "arts"],
    label: { en: "Web & Mobile Developer", fr: "Développeur web et mobile" },
    specialties: ["software", "cs", "graphic"],
    seriesCodes: ["TI", "A7", "OSSD-TECH", "OSSD-CS"],
  },
  {
    id: "itmanager",
    categoryId: "tech",
    tracks: ["commercial", "science"],
    label: { en: "IT Project Manager", fr: "Chef de projet informatique" },
    specialties: ["cs", "management", "networks"],
    seriesCodes: ["TI", "C", "CAM-CS2", "OSSD-BUS"],
  },

  // Sciences
  {
    id: "physicist",
    categoryId: "sciences",
    tracks: ["science"],
    label: { en: "Physicist", fr: "Physicien" },
    specialties: ["physics", "maths"],
    seriesCodes: ["S1", "C", "IB-SCI", "CAM-SCI"],
  },
  {
    id: "mathematician",
    categoryId: "sciences",
    tracks: ["science"],
    label: { en: "Mathematician", fr: "Mathématicien" },
    specialties: ["maths", "statistics"],
    seriesCodes: ["S1", "C", "A5", "IB-SCI"],
  },
  {
    id: "statistician",
    categoryId: "sciences",
    tracks: ["science", "commercial"],
    label: { en: "Statistician", fr: "Statisticien" },
    specialties: ["statistics", "datascience", "actuarial"],
    seriesCodes: ["S1", "C", "A4", "CAM-FIN"],
  },
  {
    id: "biochemist",
    categoryId: "sciences",
    tracks: ["science"],
    label: { en: "Biochemist / Biotechnologist", fr: "Biochimiste / Biotechnologue" },
    specialties: ["biomedical", "foodsci"],
    seriesCodes: ["S2", "S3", "D", "IB-MED"],
  },
  {
    id: "geologist",
    categoryId: "sciences",
    tracks: ["science"],
    label: { en: "Geologist / Mining Professional", fr: "Géologue / Ingénieur des mines" },
    specialties: ["geology", "petroleum", "envsci"],
    seriesCodes: ["S4", "C", "D"],
  },

  // Agriculture & environment
  {
    id: "agronomist",
    categoryId: "agri",
    tracks: ["science", "technical"],
    label: { en: "Agronomist", fr: "Agronome" },
    specialties: ["agronomy", "foodsci", "envsci"],
    seriesCodes: ["S3", "S4", "D", "IB-ENV", "OSSD-BIO"],
  },
  {
    id: "robotics-engineer",
    categoryId: "engineering",
    tracks: ["science", "technical"],
    label: { en: "Robotics Engineer", fr: "Ingénieur en robotique" },
    specialties: ["mecheng", "eleceng", "cs", "ai"],
    seriesCodes: ["S1", "C", "TI", "IB-SCI", "CAM-SCI"],
  },
  {
    id: "biomedical-engineer",
    categoryId: "engineering",
    tracks: ["science"],
    label: { en: "Biomedical Engineer", fr: "Ingénieur biomédical" },
    specialties: ["biomedical", "eleceng", "mecheng"],
    seriesCodes: ["S1", "S2", "C", "D"],
  },
  {
    id: "cloud-engineer",
    categoryId: "tech",
    tracks: ["science", "technical"],
    label: { en: "Cloud Engineer", fr: "Ingénieur cloud" },
    specialties: ["cs", "networks", "software"],
    seriesCodes: ["S1", "C", "TI", "IB-CS", "OSSD-TECH"],
  },
  {
    id: "ux-designer",
    categoryId: "tech",
    tracks: ["arts", "technical", "commercial"],
    label: { en: "UX/UI Designer", fr: "Designer UX/UI" },
    specialties: ["graphic", "cs", "communication"],
    seriesCodes: ["A1", "A4", "TI", "OSSD-ART"],
  },
  {
    id: "data-analyst",
    categoryId: "tech",
    tracks: ["science", "commercial"],
    label: { en: "Data Analyst", fr: "Analyste de données" },
    specialties: ["datascience", "statistics", "maths", "economics"],
    seriesCodes: ["S1", "C", "A4", "G", "IB-CS"],
  },
  {
    id: "midwife",
    categoryId: "health",
    tracks: ["science"],
    label: { en: "Midwife", fr: "Sage-femme" },
    specialties: ["nursing", "publichealth", "medicine"],
    seriesCodes: ["S2", "S3", "D", "OSSD-MED"],
  },
  {
    id: "radiographer",
    categoryId: "health",
    tracks: ["science"],
    label: { en: "Radiographer", fr: "Radiographe" },
    specialties: ["biomedical", "physics", "publichealth"],
    seriesCodes: ["S1", "S2", "D"],
  },
  {
    id: "public-health-officer",
    categoryId: "health",
    tracks: ["science"],
    label: { en: "Public Health Officer", fr: "Agent de santé publique" },
    specialties: ["publichealth", "nursing", "statistics"],
    seriesCodes: ["S2", "D", "IB-MED"],
  },
  {
    id: "chemist",
    categoryId: "sciences",
    tracks: ["science"],
    label: { en: "Chemist", fr: "Chimiste" },
    specialties: ["chemeng", "foodsci", "physics"],
    seriesCodes: ["S1", "S2", "C", "D"],
  },
  {
    id: "environmental-scientist",
    categoryId: "agri",
    tracks: ["science", "technical"],
    label: { en: "Environmental Scientist", fr: "Scientifique de l'environnement" },
    specialties: ["envsci", "geology", "sustainability"],
    seriesCodes: ["S3", "S4", "D", "IB-ENV"],
  },
  {
    id: "urban-planner",
    categoryId: "engineering",
    tracks: ["arts", "science", "technical"],
    label: { en: "Urban Planner", fr: "Urbaniste" },
    specialties: ["urban", "architecture", "civileng"],
    seriesCodes: ["S1", "C", "A1", "TI"],
  },
  {
    id: "construction-manager",
    categoryId: "engineering",
    tracks: ["science", "technical"],
    label: { en: "Construction Manager", fr: "Conducteur de travaux" },
    specialties: ["buildtech", "civileng", "surveying"],
    seriesCodes: ["S1", "C", "TI"],
  },
  {
    id: "entrepreneur",
    categoryId: "business",
    tracks: ["commercial", "arts", "science"],
    label: { en: "Entrepreneur", fr: "Entrepreneur" },
    specialties: ["management", "marketing", "finance"],
    seriesCodes: ["G", "A4", "A1", "CG", "ACC", "OSSD-BUS"],
  },
  {
    id: "project-manager",
    categoryId: "business",
    tracks: ["commercial", "arts", "science"],
    label: { en: "Project Manager", fr: "Chef de projet" },
    specialties: ["management", "logistics", "economics"],
    seriesCodes: ["G", "A4", "A1", "CG", "ACC", "OSSD-BUS"],
  },
  {
    id: "human-resources-manager",
    categoryId: "business",
    tracks: ["commercial", "arts"],
    label: { en: "Human Resources Manager", fr: "Responsable des ressources humaines" },
    specialties: ["management", "psychology", "law"],
    seriesCodes: ["G", "A1", "A4", "CG", "ACC"],
  },
  {
    id: "auditor",
    categoryId: "business",
    tracks: ["commercial"],
    label: { en: "Auditor", fr: "Auditeur" },
    specialties: ["accounting", "finance", "management"],
    seriesCodes: ["G", "A4", "CG", "OSSD-BUS"],
  },
  {
    id: "financial-analyst",
    categoryId: "business",
    tracks: ["commercial", "science"],
    label: { en: "Financial Analyst", fr: "Analyste financier" },
    specialties: ["finance", "economics", "statistics"],
    seriesCodes: ["G", "A4", "CG", "ACC", "C"],
  },
  {
    id: "diplomat",
    categoryId: "languages",
    tracks: ["arts", "commercial"],
    label: { en: "Diplomat", fr: "Diplomate" },
    specialties: ["ir", "polsci", "languages"],
    seriesCodes: ["A1", "A4", "G"],
  },
  {
    id: "journalist",
    categoryId: "media",
    tracks: ["arts", "commercial"],
    label: { en: "Journalist", fr: "Journaliste" },
    specialties: ["journalism", "communication", "languages"],
    seriesCodes: ["A1", "A4", "G"],
  },
  {
    id: "teacher",
    categoryId: "social",
    tracks: ["arts", "science", "commercial"],
    label: { en: "Teacher", fr: "Enseignant" },
    specialties: ["education", "languages", "maths", "physics"],
    seriesCodes: ["A1", "S1", "G", "OSSD-ART"],
  },
  {
    id: "graphic-designer",
    categoryId: "creative",
    tracks: ["arts", "technical"],
    label: { en: "Graphic Designer", fr: "Designer graphique" },
    specialties: ["graphic", "finearts", "animation"],
    seriesCodes: ["A1", "A4", "TI", "OSSD-ART"],
  },
  {
    id: "envscientist",
    categoryId: "agri",
    tracks: ["science"],
    label: { en: "Environmental Scientist", fr: "Spécialiste de l'environnement" },
    specialties: ["envsci", "geology", "agronomy"],
    seriesCodes: ["S4", "D", "IB-ENV", "CAM-ENV", "OSSD-BIO"],
  },
  {
    id: "foodtech",
    categoryId: "agri",
    tracks: ["science", "technical"],
    label: { en: "Food Scientist / Agro-industry", fr: "Ingénieur agroalimentaire" },
    specialties: ["foodsci", "chemeng", "agronomy"],
    seriesCodes: ["S2", "S3", "D"],
  },
  {
    id: "agribusiness",
    categoryId: "agri",
    tracks: ["commercial", "science"],
    label: { en: "Agribusiness Manager", fr: "Gestionnaire agro-business" },
    specialties: ["agronomy", "management", "logistics"],
    seriesCodes: ["A2", "A4", "CG", "ACC", "D", "OSSD-BUS"],
  },

  // Law & government
  {
    id: "lawyer",
    categoryId: "law",
    tracks: ["arts", "commercial"],
    label: { en: "Lawyer / Magistrate", fr: "Avocat / Magistrat" },
    specialties: ["law", "polsci"],
    seriesCodes: ["A1", "A3", "A5", "IB-LAW", "CAM-LAW", "OSSD-LAW"],
  },
  {
    id: "diplomat",
    categoryId: "law",
    tracks: ["arts"],
    label: { en: "Diplomat", fr: "Diplomate" },
    specialties: ["ir", "polsci", "languages"],
    seriesCodes: ["A1", "A6", "A5", "BIL", "IB-LAW"],
  },
  {
    id: "civilservant",
    categoryId: "law",
    tracks: ["arts", "commercial"],
    label: { en: "Senior Civil Servant", fr: "Administrateur civil" },
    specialties: ["pubadmin", "polsci", "law"],
    seriesCodes: ["A1", "A2", "A3", "OSSD-LAW"],
  },
  {
    id: "policyanalyst",
    categoryId: "law",
    tracks: ["arts", "commercial"],
    label: { en: "Policy Analyst", fr: "Analyste des politiques publiques" },
    specialties: ["polsci", "economics", "pubadmin"],
    seriesCodes: ["A2", "A3", "IB-LAW"],
  },
  {
    id: "notary",
    categoryId: "law",
    tracks: ["arts", "commercial"],
    label: { en: "Notary / Legal Officer", fr: "Notaire / Juriste d'entreprise" },
    specialties: ["law", "management"],
    seriesCodes: ["A1", "A3", "CAM-LAW"],
  },

  // Business
  {
    id: "accountant",
    categoryId: "business",
    tracks: ["commercial"],
    label: { en: "Accountant / Auditor", fr: "Comptable / Auditeur" },
    specialties: ["accounting", "finance"],
    seriesCodes: ["A4", "CG", "CAM-BUS", "OSSD-BUS"],
  },
  {
    id: "banker",
    categoryId: "business",
    tracks: ["commercial", "arts"],
    label: { en: "Banker / Financial Analyst", fr: "Banquier / Analyste financier" },
    specialties: ["finance", "economics", "accounting"],
    seriesCodes: ["A2", "A4", "CG", "CAM-FIN", "IB-BUS"],
  },
  {
    id: "economist",
    categoryId: "business",
    tracks: ["commercial", "arts", "science"],
    label: { en: "Economist", fr: "Économiste" },
    specialties: ["economics", "statistics"],
    seriesCodes: ["A2", "A4", "CG", "ACC", "IB-BUS", "CAM-FIN"],
  },
  {
    id: "manager",
    categoryId: "business",
    tracks: ["commercial"],
    label: { en: "Business Manager / Entrepreneur", fr: "Gestionnaire / Entrepreneur" },
    specialties: ["management", "marketing"],
    seriesCodes: ["A2", "A4", "CG", "ACC", "CAM-BUS", "OSSD-BUS"],
  },
  {
    id: "marketer",
    categoryId: "business",
    tracks: ["commercial", "arts"],
    label: {
      en: "Marketing & Digital Marketing Specialist",
      fr: "Spécialiste marketing et marketing digital",
    },
    specialties: ["marketing", "communication"],
    seriesCodes: ["A2", "A7", "ACC", "CAM-BUS"],
  },
  {
    id: "logistician",
    categoryId: "business",
    tracks: ["commercial", "technical"],
    label: { en: "Logistics & Supply Chain Manager", fr: "Responsable logistique et transport" },
    specialties: ["logistics", "management"],
    seriesCodes: ["A2", "A4", "CG", "ACC", "OSSD-BUS"],
  },
  {
    id: "actuary",
    categoryId: "business",
    tracks: ["science", "commercial"],
    label: { en: "Actuary", fr: "Actuaire" },
    specialties: ["actuarial", "statistics", "maths"],
    seriesCodes: ["A4", "C", "S1", "CAM-FIN"],
  },
  {
    id: "hotelmanager",
    categoryId: "business",
    tracks: ["commercial", "arts"],
    label: { en: "Hospitality & Tourism Manager", fr: "Responsable hôtellerie et tourisme" },
    specialties: ["tourism", "management"],
    seriesCodes: ["A2", "A6", "A5", "ACC"],
  },
  {
    id: "sustainabilitymanager",
    categoryId: "business",
    tracks: ["commercial", "science"],
    label: { en: "Sustainability Manager", fr: "Responsable développement durable" },
    specialties: ["sustainability", "envsci", "management"],
    seriesCodes: ["A2", "A4", "S4", "IB-ENV", "OSSD-BUS"],
  },

  // Media
  {
    id: "journalist",
    categoryId: "media",
    tracks: ["arts"],
    label: { en: "Journalist", fr: "Journaliste" },
    specialties: ["journalism", "communication"],
    seriesCodes: ["A1", "A3", "AC", "CAM-MEDIA", "OSSD-ARTS"],
  },
  {
    id: "commsofficer",
    categoryId: "media",
    tracks: ["arts", "commercial"],
    label: { en: "Communication Officer / PR", fr: "Chargé de communication / RP" },
    specialties: ["communication", "marketing"],
    seriesCodes: ["A1", "A2", "BIL", "CAM-MEDIA"],
  },
  {
    id: "contentcreator",
    categoryId: "media",
    tracks: ["arts", "technical"],
    label: { en: "Content Creator / Producer", fr: "Créateur de contenu / Producteur" },
    specialties: ["film", "animation", "communication"],
    seriesCodes: ["A7", "AC", "OSSD-ARTS"],
  },

  // Languages
  {
    id: "translator",
    categoryId: "languages",
    tracks: ["arts"],
    label: { en: "Translator / Interpreter", fr: "Traducteur / Interprète" },
    specialties: ["translation", "languages"],
    seriesCodes: ["A6", "A5", "A2", "BIL", "CAM-LANG"],
  },
  {
    id: "langteacher",
    categoryId: "languages",
    tracks: ["arts"],
    label: { en: "Language Teacher", fr: "Professeur de langues" },
    specialties: ["languages", "education", "literature"],
    seriesCodes: ["A1", "A6", "A5", "BIL"],
  },
  {
    id: "intlofficer",
    categoryId: "languages",
    tracks: ["arts", "commercial"],
    label: { en: "International Organisation Officer", fr: "Cadre d'organisation internationale" },
    specialties: ["ir", "pubadmin", "languages"],
    seriesCodes: ["A6", "BIL", "IB-LAW"],
  },

  // Education & social
  {
    id: "teacher",
    categoryId: "social",
    tracks: ["arts", "science", "commercial"],
    label: { en: "Secondary School Teacher", fr: "Enseignant du secondaire" },
    specialties: ["education", "literature", "maths"],
    seriesCodes: ["A1", "A3", "S1", "C", "D"],
  },
  {
    id: "psychologist",
    categoryId: "social",
    tracks: ["arts", "science"],
    label: { en: "Psychologist / Counsellor", fr: "Psychologue / Conseiller d'orientation" },
    specialties: ["psychology", "education", "socialwork"],
    seriesCodes: ["A4", "D", "IB-PSY"],
  },
  {
    id: "socialworker",
    categoryId: "social",
    tracks: ["arts"],
    label: { en: "Social Worker / NGO Officer", fr: "Travailleur social / Cadre d'ONG" },
    specialties: ["socialwork", "sociology", "pubadmin"],
    seriesCodes: ["A1", "A2", "A4"],
  },
  {
    id: "researcher",
    categoryId: "social",
    tracks: ["arts", "science"],
    label: { en: "Researcher / Lecturer", fr: "Chercheur / Enseignant-chercheur" },
    specialties: ["history", "philosophy", "sociology"],
    seriesCodes: ["A1", "A3", "A5", "C", "D"],
  },
  {
    id: "urbanplanner",
    categoryId: "engineering",
    tracks: ["science", "technical", "arts"],
    label: { en: "Urban Planner", fr: "Urbaniste" },
    specialties: ["urban", "architecture", "civileng", "envsci"],
    seriesCodes: ["S1", "C", "TI", "A5", "IB-SCI"],
  },
  {
    id: "renewableconsultant",
    categoryId: "agri",
    tracks: ["science", "technical"],
    label: { en: "Renewable Energy Consultant", fr: "Consultant en énergies renouvelables" },
    specialties: ["energy", "envsci", "eleceng"],
    seriesCodes: ["S1", "C", "TI", "IB-ENV"],
  },

  // Creative
  {
    id: "graphicdesigner",
    categoryId: "creative",
    tracks: ["arts", "technical"],
    label: { en: "Graphic / UI-UX Designer", fr: "Designer graphique / UI-UX" },
    specialties: ["graphic", "animation"],
    seriesCodes: ["A7", "A8", "CAM-ART", "OSSD-ARTS"],
  },
  {
    id: "filmmaker",
    categoryId: "creative",
    tracks: ["arts"],
    label: { en: "Film Director / Cinematographer", fr: "Réalisateur / Chef opérateur" },
    specialties: ["film", "animation"],
    seriesCodes: ["AC", "A7", "IB-ARTS"],
  },
  {
    id: "fashiondesigner",
    categoryId: "creative",
    tracks: ["arts", "technical"],
    label: { en: "Fashion Designer", fr: "Styliste-modéliste" },
    specialties: ["fashion", "finearts"],
    seriesCodes: ["A8", "IB-ARTS"],
  },
  {
    id: "musician",
    categoryId: "creative",
    tracks: ["arts"],
    label: { en: "Musician / Performing Artist", fr: "Musicien / Artiste de scène" },
    specialties: ["music", "finearts"],
    seriesCodes: ["A8", "AC", "IB-ARTS"],
  },
  {
    id: "animator",
    categoryId: "creative",
    tracks: ["arts", "technical"],
    label: { en: "Animator / Multimedia Designer", fr: "Animateur 3D / Designer multimédia" },
    specialties: ["animation", "graphic", "film"],
    seriesCodes: ["A7", "AC", "OSSD-ARTS"],
  },

  // Technical trades
  {
    id: "buildtech",
    categoryId: "trades",
    tracks: ["technical"],
    label: { en: "Building & Construction Technician", fr: "Technicien du bâtiment" },
    specialties: ["buildtech", "civileng", "surveying"],
    seriesCodes: ["TI", "OSSD-TECH"],
  },
  {
    id: "electrician",
    categoryId: "trades",
    tracks: ["technical"],
    label: { en: "Electrical Technician", fr: "Technicien électrotechnicien" },
    specialties: ["electech", "eleceng", "energy"],
    seriesCodes: ["TI", "OSSD-TECH"],
  },
  {
    id: "autotech",
    categoryId: "trades",
    tracks: ["technical"],
    label: { en: "Automotive Technician", fr: "Technicien automobile" },
    specialties: ["autotech", "mecheng"],
    seriesCodes: ["TI", "OSSD-TECH"],
  },
  {
    id: "maintenance",
    categoryId: "trades",
    tracks: ["technical"],
    label: {
      en: "Industrial Maintenance Technician",
      fr: "Technicien de maintenance industrielle",
    },
    specialties: ["industrial", "mecheng", "electech"],
    seriesCodes: ["TI", "OSSD-TECH"],
  },
];

export const SERIES: Series[] = [
  // GCE Arts
  {
    id: "gce-a1",
    system: "english",
    track: "arts",
    code: "A1",
    label: { en: "A1 — Arts", fr: "A1 — Lettres" },
    subjects: {
      en: "French + Literature in English + History",
      fr: "Français + Littérature anglaise + Histoire",
    },
  },
  {
    id: "gce-a2",
    system: "english",
    track: "commercial",
    code: "A2",
    label: { en: "A2 — Arts / Economics", fr: "A2 — Économie" },
    subjects: { en: "Geography + Economics + History", fr: "Géographie + Économie + Histoire" },
  },
  {
    id: "gce-a3",
    system: "english",
    track: "arts",
    code: "A3",
    label: { en: "A3 — Arts", fr: "A3 — Lettres" },
    subjects: {
      en: "Literature in English + History + Economics",
      fr: "Littérature anglaise + Histoire + Économie",
    },
  },
  {
    id: "gce-a4",
    system: "english",
    track: "commercial",
    code: "A4",
    label: { en: "A4 — Economics & Mathematics", fr: "A4 — Économie et mathématiques" },
    subjects: {
      en: "Geography + Economics + Mathematics",
      fr: "Géographie + Économie + Mathématiques",
    },
  },
  {
    id: "gce-a5",
    system: "english",
    track: "arts",
    code: "A5",
    label: { en: "A5 — Arts & Philosophy", fr: "A5 — Lettres et philosophie" },
    subjects: {
      en: "Literature in English + Philosophy + Mathematics",
      fr: "Littérature anglaise + Philosophie + Mathématiques",
    },
  },
  {
    id: "gce-a6",
    system: "english",
    track: "arts",
    code: "A6",
    label: { en: "A6 — Languages", fr: "A6 — Langues" },
    subjects: {
      en: "Literature in English + French + one Foreign Language",
      fr: "Littérature anglaise + Français + une langue étrangère",
    },
  },
  {
    id: "gce-a7",
    system: "english",
    track: "technical",
    code: "A7",
    label: { en: "A7 — Media & Computing", fr: "A7 — Médias et informatique" },
    subjects: {
      en: "Literature in English + Cinematography + Computer Science",
      fr: "Littérature anglaise + Cinématographie + Informatique",
    },
  },
  {
    id: "gce-a8",
    system: "english",
    track: "arts",
    code: "A8",
    label: { en: "A8 — Arts & Craft", fr: "A8 — Arts appliqués" },
    subjects: {
      en: "Arts & Craft + National Language & Culture",
      fr: "Arts et artisanat + Langue et culture nationales",
    },
  },
  // GCE Science
  {
    id: "gce-s1",
    system: "english",
    track: "science",
    code: "S1",
    label: { en: "S1 — Physical Sciences", fr: "S1 — Sciences physiques" },
    subjects: { en: "Chemistry + Physics + Mathematics", fr: "Chimie + Physique + Mathématiques" },
  },
  {
    id: "gce-s2",
    system: "english",
    track: "science",
    code: "S2",
    label: { en: "S2 — Life & Physical Sciences", fr: "S2 — Sciences de la vie" },
    subjects: { en: "Chemistry + Physics + Biology", fr: "Chimie + Physique + Biologie" },
  },
  {
    id: "gce-s3",
    system: "english",
    track: "science",
    code: "S3",
    label: { en: "S3 — Life Sciences", fr: "S3 — Sciences de la vie" },
    subjects: { en: "Biology + Chemistry + Physics", fr: "Biologie + Chimie + Physique" },
  },
  {
    id: "gce-s4",
    system: "english",
    track: "science",
    code: "S4",
    label: { en: "S4 — Earth Sciences", fr: "S4 — Sciences de la terre" },
    subjects: {
      en: "Biology + Chemistry + Geology / Geography",
      fr: "Biologie + Chimie + Géologie / Géographie",
    },
  },
  // Cameroon Baccalauréat
  {
    id: "bac-a1",
    system: "french",
    track: "arts",
    code: "A1",
    label: { en: "A1 — Littéraire", fr: "A1 — Littéraire" },
    subjects: { en: "Lettres + Latin + Grec", fr: "Lettres + Latin + Grec" },
  },
  {
    id: "bac-a2",
    system: "french",
    track: "arts",
    code: "A2",
    label: { en: "A2 — Littéraire", fr: "A2 — Littéraire" },
    subjects: {
      en: "Lettres + Latin + Langue Vivante II",
      fr: "Lettres + Latin + Langue Vivante II",
    },
  },
  {
    id: "bac-a3",
    system: "french",
    track: "arts",
    code: "A3",
    label: { en: "A3 — Littéraire", fr: "A3 — Littéraire" },
    subjects: { en: "Lettres + Latin", fr: "Lettres + Latin" },
  },
  {
    id: "bac-a4",
    system: "french",
    track: "arts",
    code: "A4",
    label: { en: "A4 — Lettres & Philosophie", fr: "A4 — Lettres et philosophie" },
    subjects: {
      en: "Lettres + Langue Vivante II + Philosophie",
      fr: "Lettres + Langue Vivante II + Philosophie",
    },
  },
  {
    id: "bac-a5",
    system: "french",
    track: "arts",
    code: "A5",
    label: { en: "A5 — Langues", fr: "A5 — Langues vivantes" },
    subjects: { en: "Langues Vivantes II + III", fr: "Langues Vivantes II + III" },
  },
  {
    id: "bac-ac",
    system: "french",
    track: "arts",
    code: "AC",
    label: { en: "AC — Art Cinématographique", fr: "AC — Art cinématographique" },
    subjects: { en: "Art Cinématographique", fr: "Art cinématographique" },
  },
  {
    id: "bac-c",
    system: "french",
    track: "science",
    code: "C",
    label: { en: "C — Mathematics & Physics", fr: "C — Mathématiques et physique" },
    subjects: { en: "Mathematics + Physics", fr: "Mathématiques + Physique" },
  },
  {
    id: "bac-d",
    system: "french",
    track: "science",
    code: "D",
    label: { en: "D — Life & Earth Sciences", fr: "D — Sciences de la vie et de la terre" },
    subjects: { en: "SVT + Mathematics", fr: "SVT + Mathématiques" },
  },
  {
    id: "bac-ti",
    system: "french",
    track: "technical",
    code: "TI",
    label: { en: "TI — Information Technology", fr: "TI — Technologie de l'information" },
    subjects: {
      en: "Information Technology + mathematics/science subjects",
      fr: "Technologie de l'information + mathématiques et sciences",
    },
  },
  {
    id: "bac-2nde-stt",
    system: "french",
    track: "commercial",
    code: "2nde STT",
    label: { en: "2nde STT — Commercial foundation", fr: "2nde STT — Tronc commun commercial" },
    subjects: {
      en: "All compulsory commercial subjects; no CG or ACC choice yet",
      fr: "Toutes les matières commerciales obligatoires ; pas encore de choix CG ou ACC",
    },
  },
  {
    id: "bac-cg",
    system: "french",
    track: "commercial",
    code: "CG",
    label: { en: "CG — Commerce & Gestion", fr: "CG — Commerce et Gestion" },
    subjects: {
      en: "Commerce, accounting, economics and business management",
      fr: "Commerce, comptabilité, économie et gestion",
    },
  },
  {
    id: "bac-acc",
    system: "french",
    track: "commercial",
    code: "ACC",
    label: { en: "ACC — Action Commerciale", fr: "ACC — Action Commerciale" },
    subjects: {
      en: "Commercial action, sales, marketing and business practice",
      fr: "Action commerciale, vente, marketing et pratique des affaires",
    },
  },
  {
    id: "bac-bil",
    system: "french",
    track: "arts",
    code: "BIL",
    label: { en: "BIL — Bilingual", fr: "BIL — Bilingue" },
    subjects: {
      en: "French + English / English + French",
      fr: "Français + Anglais / Anglais + Français",
    },
  },
  // International
  {
    id: "ib-sci",
    system: "international",
    track: "science",
    code: "IB-SCI",
    label: { en: "IB — Science pathway", fr: "IB — Filière scientifique" },
    subjects: {
      en: "Physics HL + Mathematics AA HL + Chemistry / Computer Science",
      fr: "Physique HL + Mathématiques AA HL + Chimie / Informatique",
    },
  },
  {
    id: "ib-med",
    system: "international",
    track: "science",
    code: "IB-MED",
    label: { en: "IB — Medicine pathway", fr: "IB — Filière médicale" },
    subjects: {
      en: "Biology HL + Chemistry HL + Mathematics",
      fr: "Biologie HL + Chimie HL + Mathématiques",
    },
  },
  {
    id: "ib-cs",
    system: "international",
    track: "science",
    code: "IB-CS",
    label: { en: "IB — Computing pathway", fr: "IB — Filière informatique" },
    subjects: {
      en: "Computer Science HL + Mathematics AA HL + Physics / Design Technology",
      fr: "Informatique HL + Mathématiques AA HL + Physique / Design",
    },
  },
  {
    id: "ib-bus",
    system: "international",
    track: "commercial",
    code: "IB-BUS",
    label: { en: "IB — Business pathway", fr: "IB — Filière gestion" },
    subjects: {
      en: "Economics HL + Business Management HL + Mathematics",
      fr: "Économie HL + Management HL + Mathématiques",
    },
  },
  {
    id: "ib-law",
    system: "international",
    track: "arts",
    code: "IB-LAW",
    label: { en: "IB — Law & Politics pathway", fr: "IB — Filière droit et politique" },
    subjects: {
      en: "History HL + Global Politics HL + Economics",
      fr: "Histoire HL + Politique mondiale HL + Économie",
    },
  },
  {
    id: "ib-psy",
    system: "international",
    track: "arts",
    code: "IB-PSY",
    label: { en: "IB — Psychology pathway", fr: "IB — Filière psychologie" },
    subjects: {
      en: "Psychology HL + Biology + Mathematics",
      fr: "Psychologie HL + Biologie + Mathématiques",
    },
  },
  {
    id: "ib-env",
    system: "international",
    track: "science",
    code: "IB-ENV",
    label: { en: "IB — Environment pathway", fr: "IB — Filière environnement" },
    subjects: {
      en: "Environmental Systems & Societies + Biology + Geography",
      fr: "Systèmes environnementaux + Biologie + Géographie",
    },
  },
  {
    id: "ib-arts",
    system: "international",
    track: "arts",
    code: "IB-ARTS",
    label: { en: "IB — Arts pathway", fr: "IB — Filière artistique" },
    subjects: {
      en: "Visual Arts / Film / Theatre / Music HL + Humanities",
      fr: "Arts visuels / Cinéma / Théâtre / Musique HL + Humanités",
    },
  },
  {
    id: "cam-sci",
    system: "international",
    track: "science",
    code: "CAM-SCI",
    label: { en: "Cambridge — Science", fr: "Cambridge — Sciences" },
    subjects: { en: "Mathematics + Physics + Chemistry", fr: "Mathématiques + Physique + Chimie" },
  },
  {
    id: "cam-med",
    system: "international",
    track: "science",
    code: "CAM-MED",
    label: { en: "Cambridge — Medicine", fr: "Cambridge — Médecine" },
    subjects: { en: "Biology + Chemistry + Mathematics", fr: "Biologie + Chimie + Mathématiques" },
  },
  {
    id: "cam-cs",
    system: "international",
    track: "science",
    code: "CAM-CS",
    label: { en: "Cambridge — Computer Science", fr: "Cambridge — Informatique" },
    subjects: {
      en: "Computer Science + Mathematics + Physics",
      fr: "Informatique + Mathématiques + Physique",
    },
  },
  {
    id: "cam-cs2",
    system: "international",
    track: "commercial",
    code: "CAM-CS2",
    label: { en: "Cambridge — Computing & Economics", fr: "Cambridge — Informatique et économie" },
    subjects: {
      en: "Computer Science + Mathematics + Economics",
      fr: "Informatique + Mathématiques + Économie",
    },
  },
  {
    id: "cam-bus",
    system: "international",
    track: "commercial",
    code: "CAM-BUS",
    label: { en: "Cambridge — Business", fr: "Cambridge — Gestion" },
    subjects: { en: "Business + Economics + Accounting", fr: "Gestion + Économie + Comptabilité" },
  },
  {
    id: "cam-fin",
    system: "international",
    track: "commercial",
    code: "CAM-FIN",
    label: { en: "Cambridge — Finance", fr: "Cambridge — Finance" },
    subjects: {
      en: "Mathematics + Economics + Accounting / Business",
      fr: "Mathématiques + Économie + Comptabilité / Gestion",
    },
  },
  {
    id: "cam-law",
    system: "international",
    track: "arts",
    code: "CAM-LAW",
    label: { en: "Cambridge — Law", fr: "Cambridge — Droit" },
    subjects: {
      en: "Law + History + Literature / English",
      fr: "Droit + Histoire + Littérature / Anglais",
    },
  },
  {
    id: "cam-lang",
    system: "international",
    track: "arts",
    code: "CAM-LANG",
    label: { en: "Cambridge — Languages", fr: "Cambridge — Langues" },
    subjects: {
      en: "English + French + another language / History",
      fr: "Anglais + Français + autre langue / Histoire",
    },
  },
  {
    id: "cam-media",
    system: "international",
    track: "arts",
    code: "CAM-MEDIA",
    label: { en: "Cambridge — Media", fr: "Cambridge — Médias" },
    subjects: {
      en: "Media Studies + Literature + Art & Design",
      fr: "Médias + Littérature + Arts appliqués",
    },
  },
  {
    id: "cam-art",
    system: "international",
    track: "arts",
    code: "CAM-ART",
    label: { en: "Cambridge — Art & Design", fr: "Cambridge — Arts et design" },
    subjects: {
      en: "Art & Design + Digital Media & Design + Business",
      fr: "Arts et design + Médias numériques + Gestion",
    },
  },
  {
    id: "cam-env",
    system: "international",
    track: "science",
    code: "CAM-ENV",
    label: { en: "Cambridge — Environment", fr: "Cambridge — Environnement" },
    subjects: {
      en: "Biology + Chemistry + Geography / Environmental Management",
      fr: "Biologie + Chimie + Géographie / Environnement",
    },
  },
  {
    id: "ossd-sci",
    system: "international",
    track: "science",
    code: "OSSD-SCI",
    label: { en: "OSSD — Science pathway", fr: "OSSD — Filière scientifique" },
    subjects: {
      en: "English + Advanced Functions + Calculus & Vectors + Physics + Chemistry",
      fr: "Anglais + Fonctions avancées + Calcul différentiel + Physique + Chimie",
    },
  },
  {
    id: "ossd-med",
    system: "international",
    track: "science",
    code: "OSSD-MED",
    label: { en: "OSSD — Health pathway", fr: "OSSD — Filière santé" },
    subjects: {
      en: "English + Calculus + Biology + Chemistry + Physics",
      fr: "Anglais + Calcul + Biologie + Chimie + Physique",
    },
  },
  {
    id: "ossd-cs",
    system: "international",
    track: "science",
    code: "OSSD-CS",
    label: { en: "OSSD — Computing pathway", fr: "OSSD — Filière informatique" },
    subjects: {
      en: "English + Advanced Functions + Computer Science + Physics / Data Management",
      fr: "Anglais + Fonctions avancées + Informatique + Physique / Gestion des données",
    },
  },
  {
    id: "ossd-bus",
    system: "international",
    track: "commercial",
    code: "OSSD-BUS",
    label: { en: "OSSD — Business pathway", fr: "OSSD — Filière gestion" },
    subjects: {
      en: "English + Data Management + Economics + Business Leadership + Accounting",
      fr: "Anglais + Gestion des données + Économie + Leadership + Comptabilité",
    },
  },
  {
    id: "ossd-law",
    system: "international",
    track: "arts",
    code: "OSSD-LAW",
    label: { en: "OSSD — Law pathway", fr: "OSSD — Filière droit" },
    subjects: {
      en: "English + History + Law + Politics + Economics",
      fr: "Anglais + Histoire + Droit + Politique + Économie",
    },
  },
  {
    id: "ossd-arts",
    system: "international",
    track: "arts",
    code: "OSSD-ARTS",
    label: { en: "OSSD — Arts pathway", fr: "OSSD — Filière artistique" },
    subjects: {
      en: "English + Visual Arts + Drama / Music / Media Arts",
      fr: "Anglais + Arts visuels + Théâtre / Musique / Arts médiatiques",
    },
  },
  {
    id: "ossd-tech",
    system: "international",
    track: "technical",
    code: "OSSD-TECH",
    label: { en: "OSSD — Technology pathway", fr: "OSSD — Filière technologique" },
    subjects: {
      en: "English + Mathematics + Computer Studies + Technological Education",
      fr: "Anglais + Mathématiques + Informatique + Éducation technologique",
    },
  },
  {
    id: "ossd-bio",
    system: "international",
    track: "science",
    code: "OSSD-BIO",
    label: { en: "OSSD — Life & Environment pathway", fr: "OSSD — Filière vie et environnement" },
    subjects: {
      en: "English + Biology + Chemistry + Mathematics + Geography",
      fr: "Anglais + Biologie + Chimie + Mathématiques + Géographie",
    },
  },
];

export function seriesForSystem(system: SystemId, track?: Track) {
  return SERIES.filter((s) => s.system === system && (!track || s.track === track));
}

export function categoriesForTrack(track: Track) {
  return JOB_CATEGORIES.filter((c) => c.tracks.includes(track));
}

export function jobsForCategory(categoryId: string, track?: Track) {
  return JOBS.filter((j) => j.categoryId === categoryId && (!track || j.tracks.includes(track)));
}

export function jobsForSeries(seriesCode: string, categoryId?: string) {
  return JOBS.filter(
    (j) => j.seriesCodes.includes(seriesCode) && (!categoryId || j.categoryId === categoryId),
  );
}

export function categoriesForSeries(seriesCode: string) {
  const ids = new Set(jobsForSeries(seriesCode).map((j) => j.categoryId));
  return JOB_CATEGORIES.filter((c) => ids.has(c.id));
}

export function suggestedSeries(jobId: string, system: SystemId) {
  const job = JOBS.find((j) => j.id === jobId);
  if (!job) return [];
  const pool = SERIES.filter((s) => s.system === system);
  const direct = pool.filter((s) => job.seriesCodes.includes(s.code));
  if (direct.length) return direct;
  return pool.filter((s) => job.tracks.includes(s.track));
}

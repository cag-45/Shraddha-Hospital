import { DoctorProfile, SpecialtyCategory, Review, HospitalFacility, InsurancePartner } from '../types/hospital';

export const HOSPITAL_METADATA = {
  name: "SHRADDHA HOSPITAL",
  subName: "Laser & Laparoscopic Surgical Center",
  tagline: "Multispecialty Surgical & Laser Hospital • Yamnampet, Ghatkesar",
  leadSurgeon: "Dr. B. Raghuram Reddy",
  leadSurgeonTitle: "MBBS, MS • Senior Laser & Laparoscopic Surgeon",
  phone: "+91 99895 13630",
  phoneClean: "+919989513630",
  whatsappUrl: "https://wa.me/919989513630?text=Hello%20Shraddha%20Hospital,%20I%20would%20like%20to%20consult%20Dr.%20B.%20Raghuram%20Reddy%20regarding",
  domain: "shraddhahospitals.co.in",
  domainUrl: "https://www.shraddhahospitals.co.in/",
  rating: 4.9,
  totalReviews: "100+",
  hours: "Mon – Sun: 7:30 AM – 11:00 PM",
  emergencyStatus: "24/7 Inpatient & Surgical Care",
  address: {
    line1: "Near Bridge, Yamnampet, Rampally",
    city: "Secunderabad",
    district: "Rangareddy / Medchal–Malkajgiri",
    state: "Telangana",
    pincode: "501302",
    full: "Near Bridge, Yamnampet, Rampally, Secunderabad, Telangana 501302 (Near Ismailkhanguda)",
    coordinates: {
      lat: 17.4764,
      lng: 78.6341,
    },
    googleMapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Shraddha+Hospital+Yamnampet+Secunderabad"
  }
};

// 4K Ultra-HD, authentic, non-copyright hospital & clinical photography
export const HOSPITAL_IMAGES = {
  heroBg: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=2400&q=90", // Sunlit modern hospital corridor
  hospitalExterior: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=2400&q=90", // Modern clean hospital building
  operationTheatre: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=2400&q=90", // Sterile modular surgical theater
  recoverySuite: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=2400&q=90", // Bright private inpatient recovery suite
  doctorConsult: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1800&q=90", // Senior surgeon clinical portrait
  nurseCare: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=2000&q=90", // Compassionate bedside nursing care
  reception: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=2000&q=90", // Modern hospital lobby & reception
  laserSurgery: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=2400&q=90", // Precision surgical technology suite
  diagnostics: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=2000&q=90", // In-house diagnostic lab testing
  wardCorridor: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=2400&q=90", // Bright modern hospital wing
  medicalTeam: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=2400&q=90", // Surgeons & clinical staff in OT
  pharmacyCare: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=2000&q=90", // Clean clinical pharmacy & medicines
};

export const CHIEF_SURGEON: DoctorProfile = {
  name: "Dr. B. Raghuram Reddy",
  title: "Chief Surgeon & Medical Director",
  qualifications: "MBBS, MS (General Surgery), FMAS, Certified Laser Proctologist",
  specialization: [
    "Painless Laser Proctology (Piles, Fissure, Fistula)",
    "Laparoscopic Keyhole Surgery (Gallbladder, Hernia, Appendix)",
    "General Daycare & Family Planning Surgery",
    "24/7 Surgical Emergency Care"
  ],
  experienceYears: 16,
  consultationFee: "Transparent Fixed Packages",
  bio: "Trusted across Secunderabad for gentle bedside manner, accurate diagnosis, and painless zero-cut surgeries that let patients walk home the same day.",
  achievements: [
    "10,000+ Successful Surgeries",
    "16+ Years Clinical Experience",
    "4.9★ Rated (100+ Verified Reviews)",
    "100% Transparent Fixed Pricing"
  ],
  opdSchedule: {
    days: "Monday – Sunday (Daily)",
    hours: "Morning: 8:30 AM – 2:00 PM | Evening: 5:30 PM – 9:30 PM"
  }
};

// Concise Patient-First Symptom Navigator Schema
export interface SymptomNavigatorItem {
  id: string;
  symptomName: string;
  category: 'laser' | 'laparoscopic' | 'general' | 'diagnostics';
  image: string;
  commonSymptoms: string[];
  probableCondition: string;
  recommendedTreatment: string;
  doctorApproach: string;
  recoveryTimeline: string;
  surgicalType: 'Laser Daycare' | 'Laparoscopic Keyhole' | 'Minor Daycare' | 'Outpatient';
  isPainless: boolean;
  hospitalStay: string;
}

export const SYMPTOM_NAVIGATOR_DATA: SymptomNavigatorItem[] = [
  {
    id: "piles-symptom",
    symptomName: "Pain or Bleeding During Stool (Piles)",
    category: "laser",
    image: HOSPITAL_IMAGES.laserSurgery,
    commonSymptoms: ["Bright red bleeding", "Swollen anal lumps", "Discomfort sitting"],
    probableCondition: "Hemorrhoids / Piles (Grades 1–4)",
    recommendedTreatment: "Laser Hemorrhoidoplasty (LHP)",
    doctorApproach: "German radial diode laser shrinks piles from within — zero cuts, zero stitches.",
    recoveryTimeline: "24-Hour Routine Return",
    surgicalType: "Laser Daycare",
    isPainless: true,
    hospitalStay: "4–6 Hrs Daycare"
  },
  {
    id: "fissure-symptom",
    symptomName: "Sharp Burning Pain (Anal Fissure)",
    category: "laser",
    image: HOSPITAL_IMAGES.operationTheatre,
    commonSymptoms: ["Cutting pain during stool", "Spasm lasting hours", "Blood streaks"],
    probableCondition: "Acute / Chronic Anal Fissure",
    recommendedTreatment: "Laser Sphincterotomy",
    doctorApproach: "Gentle laser relaxes muscle spasm instantly with zero incontinence risk.",
    recoveryTimeline: "24-Hour Pain Relief",
    surgicalType: "Laser Daycare",
    isPainless: true,
    hospitalStay: "4 Hrs Daycare"
  },
  {
    id: "fistula-symptom",
    symptomName: "Pus Discharge & Swelling (Fistula)",
    category: "laser",
    image: HOSPITAL_IMAGES.medicalTeam,
    commonSymptoms: ["Recurrent pus discharge", "Painful perianal boil", "Tailbone sinus swelling"],
    probableCondition: "Anal Fistula / Pilonidal Sinus",
    recommendedTreatment: "FiLaC / SiLaC Laser Closure",
    doctorApproach: "360° radial laser seals the tract cleanly without cutting sphincter muscles.",
    recoveryTimeline: "24–48 Hr Recovery",
    surgicalType: "Laser Daycare",
    isPainless: true,
    hospitalStay: "Same-Day Discharge"
  },
  {
    id: "gallbladder-symptom",
    symptomName: "Upper Right Stomach Pain (Gallstones)",
    category: "laparoscopic",
    image: HOSPITAL_IMAGES.operationTheatre,
    commonSymptoms: ["Pain after fatty meals", "Nausea & indigestion", "Ultrasound stones"],
    probableCondition: "Gallbladder Stones (Cholelithiasis)",
    recommendedTreatment: "Laparoscopic Cholecystectomy",
    doctorApproach: "Safe gallbladder removal via three 5mm keyhole ports with minimal scarring.",
    recoveryTimeline: "Walk Same Evening",
    surgicalType: "Laparoscopic Keyhole",
    isPainless: false,
    hospitalStay: "24 Hrs Stay"
  },
  {
    id: "hernia-symptom",
    symptomName: "Groin or Navel Bulge (Hernia)",
    category: "laparoscopic",
    image: HOSPITAL_IMAGES.recoverySuite,
    commonSymptoms: ["Bulge when coughing", "Groin heaviness", "Pain on lifting"],
    probableCondition: "Inguinal / Umbilical Hernia",
    recommendedTreatment: "Laparoscopic 3D Mesh Repair",
    doctorApproach: "Tension-free biocompatible mesh placed via keyhole ports for fast healing.",
    recoveryTimeline: "3–5 Days Routine",
    surgicalType: "Laparoscopic Keyhole",
    isPainless: false,
    hospitalStay: "24 Hrs Daycare"
  },
  {
    id: "appendix-symptom",
    symptomName: "Sudden Lower Right Pain (Appendix)",
    category: "laparoscopic",
    image: HOSPITAL_IMAGES.wardCorridor,
    commonSymptoms: ["Sharp right-side pain", "Sudden fever & nausea", "Pain walking upright"],
    probableCondition: "Acute Appendicitis (Urgent)",
    recommendedTreatment: "Emergency Laparoscopic Appendectomy",
    doctorApproach: "24/7 emergency keyhole removal preventing rupture and long hospital stays.",
    recoveryTimeline: "24–36 Hr Discharge",
    surgicalType: "Laparoscopic Keyhole",
    isPainless: false,
    hospitalStay: "24 Hrs Stay"
  },
  {
    id: "general-symptom",
    symptomName: "Lumps, Cysts & Family Planning",
    category: "general",
    image: HOSPITAL_IMAGES.reception,
    commonSymptoms: ["Lipoma / sebaceous cyst", "Hydrocele swelling", "Vasectomy / Tubectomy"],
    probableCondition: "Minor Daycare & Family Surgery",
    recommendedTreatment: "Cosmetic Local Daycare Procedure",
    doctorApproach: "Quick 30-minute painless procedure with fine cosmetic closure.",
    recoveryTimeline: "Same Afternoon",
    surgicalType: "Minor Daycare",
    isPainless: true,
    hospitalStay: "2 Hrs Observation"
  },
  {
    id: "diagnostics-symptom",
    symptomName: "Acidity, Gastric & Health Checkups",
    category: "diagnostics",
    image: HOSPITAL_IMAGES.diagnostics,
    commonSymptoms: ["Chronic GERD & acidity", "Irregular digestion", "Blood sugar & BP check"],
    probableCondition: "Digestive & Preventive Medicine",
    recommendedTreatment: "OPD Consultation + In-House Lab",
    doctorApproach: "Root-cause clinical diagnosis with same-day in-house diagnostic reports.",
    recoveryTimeline: "Same-Day Reports",
    surgicalType: "Outpatient",
    isPainless: true,
    hospitalStay: "OPD Visit Only"
  }
];

// Ultra-scannable Clinical Comparison
export interface ComparisonItem {
  parameter: string;
  traditional: string;
  laser: string;
  isShraddhaAdvantage: boolean;
}

export const SURGERY_COMPARISON_DATA: ComparisonItem[] = [
  {
    parameter: "Surgical Cuts",
    traditional: "Open scalpel incisions",
    laser: "Zero cuts (German diode laser)",
    isShraddhaAdvantage: true
  },
  {
    parameter: "Post-Op Pain",
    traditional: "High pain for 2–3 weeks",
    laser: "Virtually painless",
    isShraddhaAdvantage: true
  },
  {
    parameter: "Bleeding & Stitches",
    traditional: "Stitches + daily gauze packing",
    laser: "Zero stitches, near-zero bleeding",
    isShraddhaAdvantage: true
  },
  {
    parameter: "Hospital Stay",
    traditional: "3 to 5 days admission",
    laser: "4 to 8 hours daycare discharge",
    isShraddhaAdvantage: true
  },
  {
    parameter: "Back to Work",
    traditional: "2 to 4 weeks bed rest",
    laser: "24 to 48 hours",
    isShraddhaAdvantage: true
  },
  {
    parameter: "Insurance Cover",
    traditional: "Covered",
    laser: "100% Cashless TPA Approved",
    isShraddhaAdvantage: true
  }
];

export const SPECIALTY_CATEGORIES: SpecialtyCategory[] = [
  {
    id: "laser",
    title: "Laser Proctology",
    tagline: "Zero-cut German diode laser with same-day discharge.",
    iconName: "Zap",
    procedures: [
      {
        id: "piles",
        name: "Laser Piles (Hemorrhoidoplasty)",
        shortDesc: "Painless radial laser shrinkage without open cuts.",
        fullDesc: "Targeted laser energy shrinks internal & external piles safely without stitches.",
        recoveryTime: "24 Hrs",
        isPainless: true,
        benefits: ["Zero stitches", "Virtually painless", "Same-day discharge"],
        category: "laser"
      },
      {
        id: "fissure",
        name: "Laser Anal Fissure Care",
        shortDesc: "Instant sphincter spasm relief and rapid healing.",
        fullDesc: "Gentle laser relaxes tight muscle spasm while preserving 100% continence.",
        recoveryTime: "24 Hrs",
        isPainless: true,
        benefits: ["Immediate relief", "No blade cuts", "Local/short sedation"],
        category: "laser"
      },
      {
        id: "fistula",
        name: "FiLaC (Laser Fistula Closure)",
        shortDesc: "360° sphincter-saving closure of complex fistula tracts.",
        fullDesc: "Seals the fistula tract from within — no painful daily wound dressing.",
        recoveryTime: "48 Hrs",
        isPainless: true,
        benefits: ["100% continence safe", "No open wounds", "Daycare discharge"],
        category: "laser"
      },
      {
        id: "pilonidal",
        name: "SiLaC (Pilonidal Sinus Laser)",
        shortDesc: "Minimally invasive sinus ablation with quick healing.",
        fullDesc: "Cleans and seals tailbone sinus cavity without wide tissue excavation.",
        recoveryTime: "24–48 Hrs",
        isPainless: true,
        benefits: ["Zero deep wounds", "Fast desk return", "High cure rate"],
        category: "laser"
      }
    ]
  },
  {
    id: "laparoscopic",
    title: "Laparoscopy",
    tagline: "5mm HD keyhole surgeries with minimal scarring.",
    iconName: "Activity",
    procedures: [
      {
        id: "gallbladder",
        name: "Gallbladder Stone Removal",
        shortDesc: "Gold-standard 5mm keyhole cholecystectomy.",
        fullDesc: "HD camera-guided stone & gallbladder removal for quick digestive recovery.",
        recoveryTime: "24–36 Hrs",
        isPainless: false,
        benefits: ["5mm tiny ports", "Walk same evening", "Minimal scars"],
        category: "laparoscopic"
      },
      {
        id: "appendix",
        name: "Laparoscopic Appendectomy",
        shortDesc: "24/7 emergency & elective appendix removal.",
        fullDesc: "Rapid keyhole intervention preventing rupture and lengthy hospital stays.",
        recoveryTime: "24 Hrs",
        isPainless: false,
        benefits: ["Low infection risk", "24/7 emergency ready", "Rapid recovery"],
        category: "laparoscopic"
      },
      {
        id: "hernia",
        name: "Keyhole 3D Mesh Hernia Repair",
        shortDesc: "Tension-free TEP / TAPP mesh reinforcement.",
        fullDesc: "Biocompatible mesh supports abdominal wall cleanly without muscle tension.",
        recoveryTime: "3–5 Days",
        isPainless: false,
        benefits: ["Tension-free mesh", "Minimal stiffness", "Low recurrence"],
        category: "laparoscopic"
      }
    ]
  },
  {
    id: "general",
    title: "General & Family",
    tagline: "Safe daycare excisions and confidential family planning.",
    iconName: "ShieldCheck",
    procedures: [
      {
        id: "hydrocele",
        name: "Hydrocele & Varicocele Care",
        shortDesc: "Precision daycare correction with cosmetic closure.",
        fullDesc: "Safe regional-anesthesia surgical relief with same-day or overnight discharge.",
        recoveryTime: "24 Hrs",
        isPainless: false,
        benefits: ["Sterile modular OT", "Quick healing", "Fixed pricing"],
        category: "general"
      },
      {
        id: "lipoma",
        name: "Lipoma & Cyst Excision",
        shortDesc: "30-minute painless removal under local anesthesia.",
        fullDesc: "Cosmetic sub-cuticular sutures for fatty lumps and sebaceous cysts.",
        recoveryTime: "Same Day",
        isPainless: true,
        benefits: ["Cosmetic line", "30-min procedure", "Immediate home"],
        category: "general"
      },
      {
        id: "family-planning",
        name: "Vasectomy & Tubectomy",
        shortDesc: "Confidential, accredited permanent family planning.",
        fullDesc: "No-scalpel vasectomy and safe tubectomy with compassionate counseling.",
        recoveryTime: "Same Day",
        isPainless: true,
        benefits: ["100% confidential", "Minimal downtime", "Accredited care"],
        category: "general"
      }
    ]
  },
  {
    id: "diagnostics",
    title: "Medicine & Lab",
    tagline: "Gastric care, health checkups, and rapid in-house lab.",
    iconName: "Stethoscope",
    procedures: [
      {
        id: "digestive",
        name: "Digestive & Gastric Clinic",
        shortDesc: "Root-cause treatment for GERD, acidity & IBS.",
        fullDesc: "Personalized medical and dietary plan for lasting stomach comfort.",
        recoveryTime: "OPD Care",
        isPainless: true,
        benefits: ["Accurate diagnosis", "Diet counseling", "Preventive care"],
        category: "diagnostics"
      },
      {
        id: "preventive",
        name: "In-House Lab & Screening",
        shortDesc: "Diabetic, lipid, BP & organ health blood panels.",
        fullDesc: "Rapid same-day diagnostic testing reviewed directly by Dr. Reddy.",
        recoveryTime: "Same Day",
        isPainless: true,
        benefits: ["Fast lab reports", "Doctor review", "Affordable tests"],
        category: "diagnostics"
      }
    ]
  }
];

export const HOSPITAL_FACILITIES: HospitalFacility[] = [
  {
    id: "ot",
    title: "Modular HEPA Operation Theatre",
    description: "Positive-pressure sterile theatre for laser & keyhole surgery.",
    icon: "ShieldAlert",
    badge: "HEPA Clean Air"
  },
  {
    id: "inpatient",
    title: "AC Inpatient Recovery Suites",
    description: "Bright private rooms with 24/7 vital monitoring.",
    icon: "Bed",
    badge: "24/7 Inpatient"
  },
  {
    id: "nursing",
    title: "Dedicated 1:1 Nursing Care",
    description: "Gentle, responsive nursing support throughout recovery.",
    icon: "Clock",
    badge: "Compassionate Staff"
  },
  {
    id: "diagnostics",
    title: "In-House Diagnostic Lab",
    description: "Fast blood panels and pre-op screening under one roof.",
    icon: "CreditCard",
    badge: "Same-Day Reports"
  },
  {
    id: "wheelchair",
    title: "Wheelchair Ramp & Free Parking",
    description: "Barrier-free entrance, seating, on-site & street parking.",
    icon: "Accessibility",
    badge: "Barrier-Free"
  },
  {
    id: "pharmacy",
    title: "Pharmacy & Safe Drug Disposal",
    description: "Genuine medicines with certified biomedical disposal.",
    icon: "Pill",
    badge: "Certified Safety"
  }
];

export const INSURANCE_PARTNERS: InsurancePartner[] = [
  { name: "Star Health Insurance", category: "Health Insurance", cashlessSupport: true },
  { name: "HDFC ERGO", category: "Health Insurance", cashlessSupport: true },
  { name: "ICICI Lombard", category: "Health Insurance", cashlessSupport: true },
  { name: "Medi Assist TPA", category: "TPA", cashlessSupport: true },
  { name: "Bajaj Allianz", category: "Health Insurance", cashlessSupport: true },
  { name: "Care Health (Religare)", category: "Health Insurance", cashlessSupport: true },
  { name: "MDIndia TPA", category: "TPA", cashlessSupport: true },
  { name: "Vidal Health TPA", category: "TPA", cashlessSupport: true },
  { name: "Aditya Birla Health", category: "Health Insurance", cashlessSupport: true },
  { name: "Heritage Health TPA", category: "TPA", cashlessSupport: true },
  { name: "Universal Sompo", category: "Health Insurance", cashlessSupport: true },
  { name: "Paramount Health TPA", category: "TPA", cashlessSupport: true }
];

export const VERIFIED_REVIEWS: Review[] = [
  {
    id: "rev-1",
    author: "K. Venkatesh",
    verifiedSource: "Google",
    rating: 5,
    date: "1 month ago",
    procedureTaken: "Laser Piles Surgery",
    comment: "Dr. Raghuram Reddy explained everything patiently. Morning laser surgery, evening discharge, virtually zero pain — back to office in 2 days.",
    highlight: "Back to office in 2 days"
  },
  {
    id: "rev-2",
    author: "Ramesh Goud",
    verifiedSource: "Google",
    rating: 5,
    date: "2 months ago",
    procedureTaken: "Laparoscopic Gallbladder Surgery",
    comment: "My mother walked comfortably the same evening after keyhole gallbladder surgery. Spotless hospital and 100% transparent billing.",
    highlight: "Walked same evening • Transparent billing"
  },
  {
    id: "rev-3",
    author: "P. Sreedhar Rao",
    verifiedSource: "Justdial",
    rating: 5,
    date: "3 months ago",
    procedureTaken: "Laser Anal Fissure Treatment",
    comment: "Complete relief from months of unbearable pain within 24 hours. Humble doctor, very clean rooms, and supportive front desk.",
    highlight: "Pain-free in 24 hours"
  },
  {
    id: "rev-4",
    author: "Sunita M.",
    verifiedSource: "Google",
    rating: 5,
    date: "4 months ago",
    procedureTaken: "Laparoscopic Hernia Repair",
    comment: "Cashless insurance pre-approval was handled seamlessly by reception. Excellent 3D mesh laparoscopic repair and caring nurses.",
    highlight: "Seamless cashless TPA approval"
  }
];

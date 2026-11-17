export interface DoctorProfile {
  name: string;
  title: string;
  qualifications: string;
  specialization: string[];
  experienceYears: number;
  consultationFee: string;
  bio: string;
  achievements: string[];
  opdSchedule: {
    days: string;
    hours: string;
  };
}

export interface Procedure {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  recoveryTime: string;
  isPainless: boolean;
  benefits: string[];
  category: 'laser' | 'laparoscopic' | 'general' | 'diagnostics';
}

export interface SpecialtyCategory {
  id: 'laser' | 'laparoscopic' | 'general' | 'diagnostics';
  title: string;
  tagline: string;
  iconName: string;
  procedures: Procedure[];
}

export interface Review {
  id: string;
  author: string;
  verifiedSource: 'Google' | 'Justdial';
  rating: number;
  date: string;
  procedureTaken: string;
  comment: string;
  highlight: string;
}

export interface HospitalFacility {
  id: string;
  title: string;
  description: string;
  icon: string;
  badge: string;
}

export interface InsurancePartner {
  name: string;
  category: 'Health Insurance' | 'TPA';
  cashlessSupport: boolean;
}

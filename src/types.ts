export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'networking' | 'qa' | 'software' | 'certification';
  categoryLabel: string;
  description: string;
  fullOverview: string;
  highlights: string[];
  techStack: string[];
  metrics?: { label: string; value: string }[];
  certificateDetails?: {
    issuer: string;
    credentialId?: string;
    dateIssued?: string;
    skillsCovered: string[];
    verificationUrl?: string;
  };
  githubUrl?: string;
  demoUrl?: string;
  status: 'Completed' | 'Verified' | 'Active';
}

export interface NetworkCertification {
  id: string;
  title: string;
  issuer: string;
  code: string;
  level: string;
  issueDate: string;
  description: string;
  coreDomains: string[];
  verifiedStatus: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    highlight: string;
  }[];
}

export interface QuickFact {
  label: string;
  value: string;
  detail?: string;
}

export interface LeadFormData {
  fullName: string;
  phoneNumber: string;
  contactMethod: 'Phone Call' | 'WhatsApp' | 'SMS';
  hairConcern: string;
  message: string;
  photos: {
    front: File | null;
    top: File | null;
    back: File | null;
  };
  submittedAt?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  iconName: string;
  tags: string[];
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  category: string;
  area: string;
  duration: string;
  description: string;
  beforeImg: string;
  afterImg: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'General' | 'Consultation' | 'Process' | 'About Us';
}

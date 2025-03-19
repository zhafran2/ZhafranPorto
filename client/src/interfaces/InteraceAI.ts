export interface IAI {
  userInput: string;
  type?: 'swot' | 'chat';
}

export interface SWOT {
  strength: string[];
  weakness: string[];
  opportunity: string[];
  threat: string[];
  imageUrl?: string;
  quadrantData?: {
    labels: string[];
    values: number[];
  };
}

export interface ContactInfo {
  email: string;
  instagram: string;
  tiktok: string;
}

export interface ChatResponse {
  message: string;
  isZhafranInfo?: boolean;
  contactInfo?: ContactInfo;
}
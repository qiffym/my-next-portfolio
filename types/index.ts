// Shared domain types — expand as Supabase schema is defined

export type Project = {
  id: string;
  title: string;
  description: string;
  url?: string;
  image_url?: string;
  tags: string[];
  created_at: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  icon?: string;
};

export type Testimonial = {
  id: string;
  author: string;
  role: string;
  company?: string;
  avatar_url?: string;
  content: string;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

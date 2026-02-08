
export interface ToolBenefit {
  text: string;
}

export interface SalesTool {
  id: string;
  name: string;
  title: string;
  hook: string;
  benefits: string[];
  iconName: string;
  ctaText: string;
  category: string;
}
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: BlogSection[];
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  publishedAt: string;
  readTime: string;
  category: string;
  tags: string[];
  coverImage?: string;
}

export interface BlogSection {
  type: 'paragraph' | 'heading' | 'subheading' | 'list' | 'quote' | 'image';
  content?: string;
  items?: string[];
  level?: number;
}

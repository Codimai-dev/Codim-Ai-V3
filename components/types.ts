
export interface BlogSection {
    type: 'heading' | 'subheading' | 'paragraph' | 'list' | 'quote';
    content?: string;
    items?: string[];
}

export interface Author {
    name: string;
    role: string;
}

export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    author: Author;
    publishedAt: string;
    readTime: string;
    tags: string[];
    content: BlogSection[];
}

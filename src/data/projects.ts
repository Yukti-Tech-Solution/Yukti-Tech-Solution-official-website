/**
 * Project data and type definitions for Yukti Tech Solutions portfolio
 * 
 * This file contains all project information, including metadata, technologies,
 * features, and links. Use the utility functions to filter and query projects.
 */

export type ProjectCategory = 'web-app' | 'ai-ml' | 'educational' | 'business';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription?: string;
  category: ProjectCategory;
  technologies: string[];
  features: string[];
  liveUrl: string;
  githubUrl: string;
  images: {
    thumbnail: string;
    screenshots?: string[];
  };
  client?: string;
  duration?: string;
  teamSize?: number;
  highlights?: string[];
  technicalDetails?: {
    architecture?: string;
    database?: string;
    embedding?: string;
    llm?: string;
    authentication?: string;
    pdfGeneration?: string;
    deployment?: string;
  };
  status?: string;
  year?: string;
  isCustomizable?: boolean;
  contactRequired?: boolean;
  ctaText?: string;
  ctaDescription?: string;
}

/**
 * All projects in the portfolio
 */
export const projects: Project[] = [
  {
    id: 'bytefest-2k25',
    title: 'ByteFest 2K25',
    tagline: 'College Tech Festival Website',
    description: 'Official website for M.B.E. Society\'s College of Engineering tech festival featuring event registrations, real-time updates, and comprehensive event management system.',
    longDescription: 'ByteFest 2K25 is the official tech festival website for M.B.E. Society\'s College of Engineering, Ambajogai. The platform handles event registrations, participant management, live updates, schedules, and provides complete information about technical competitions, workshops, and cultural events.',
    category: 'web-app',
    technologies: ['Vite', 'React', 'Tailwind CSS', 'JavaScript'],
    features: [
      'Event registration system with form validation',
      'Real-time event schedule and updates',
      'Responsive design for all devices',
      'Interactive event cards with details',
      'Gallery and highlights section',
      'Contact and location information'
    ],
    liveUrl: 'https://bytefest2k25.netlify.app/',
    githubUrl: 'https://github.com/Vaibhav-Waghalkar/ByteFest2K25-Official_Website',
    images: {
      thumbnail: '/projects/bytefest/homepage.png',
      screenshots: [
        '/projects/bytefest/homepage.png',
        '/projects/bytefest/events.png',
        '/projects/bytefest/registration.png'
      ]
    },
    client: 'M.B.E. Society\'s College of Engineering, Ambajogai',
    highlights: [
      'Successfully handles multiple concurrent registrations',
      'Modern, engaging UI with smooth animations',
      'Optimized for performance and SEO'
    ],
    year: '2024-2025'
  },
  {
    id: 'mcs-chatbot',
    title: 'MCS Act Legal Chatbot',
    tagline: 'AI-Powered Legal Assistance',
    description: 'RAG-based intelligent chatbot helping Maharashtra Cooperative Society members understand legal procedures through context-aware AI responses with source citations.',
    longDescription: 'Advanced RAG (Retrieval-Augmented Generation) chatbot that provides accurate legal information about Maharashtra Cooperative Societies Act. Uses vector database for semantic search and dual LLM support for reliable responses.',
    category: 'ai-ml',
    technologies: [
      'React',
      'FastAPI',
      'Python',
      'Groq API',
      'Google Gemini',
      'Supabase',
      'pgvector',
      'Sentence Transformers',
      'Vite',
      'Tailwind CSS'
    ],
    features: [
      'ChatGPT-like dark-themed interface',
      'Context-aware responses with legal citations',
      'Vector search with semantic understanding',
      'Dual LLM support (Groq + Gemini fallback)',
      'Automatic PDF document processing',
      'Fast response times (<2 seconds)',
      'Source document references for transparency'
    ],
    liveUrl: 'https://mcs-chatbot.netlify.app/',
    githubUrl: 'https://github.com/Yukti-Tech-Solution/MCS-Chatbot',
    images: {
      thumbnail: '/projects/mcs-chatbot/homepage.png',
      screenshots: [
        '/projects/mcs-chatbot/chat-interface.png',
        '/projects/mcs-chatbot/response-example.png'
      ]
    },
    highlights: [
      'Advanced RAG implementation with 384-dim embeddings',
      'Production-ready architecture with error handling',
      'Scalable vector database with pgvector',
      'Real-world legal application'
    ],
    technicalDetails: {
      architecture: 'RAG (Retrieval-Augmented Generation)',
      database: 'Supabase with pgvector extension',
      embedding: 'Sentence Transformers (384 dimensions)',
      llm: 'Groq API (primary), Google Gemini (fallback)'
    },
    year: '2024'
  },
  {
    id: 'global-science-academy',
    title: 'Global Science Academy',
    tagline: 'Excellence in Science Education',
    description: 'Comprehensive educational platform providing quality science education with modern learning tools, course catalog, and student enrollment system.',
    longDescription: 'Modern educational website for Global Science Academy offering detailed information about courses, faculty, facilities, and admission procedures. Features an intuitive interface for prospective students and parents.',
    category: 'educational',
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'shadcn-ui'
    ],
    features: [
      'Modern, responsive design',
      'Interactive course catalog with filtering',
      'Student enrollment information system',
      'Faculty profiles and qualifications',
      'Facility showcase with image gallery',
      'Contact and inquiry forms',
      'Mobile-friendly navigation'
    ],
    liveUrl: 'https://global-science-academy.netlify.app/',
    githubUrl: 'https://github.com/Yukti-Tech-Solution/Global-Science-Academy-Official-Website',
    images: {
      thumbnail: '/projects/global-science-academy/homepage.png',
      screenshots: [
        '/projects/global-science-academy/homepage.png',
        '/projects/global-science-academy/courses.png',
        '/projects/global-science-academy/about.png'
      ]
    },
    highlights: [
      'Professional educational website design',
      'Easy-to-navigate course information',
      'Built with modern tech stack'
    ],
    year: '2024'
  },
  {
    id: 'navakruti-visions',
    title: 'Navakruti Consulting Engineers',
    tagline: 'Structural Design Experts',
    description: 'Professional consulting website showcasing structural engineering services, project portfolio, and expertise in design and construction management.',
    longDescription: 'Corporate website for Navakruti Consulting Engineers highlighting their structural design expertise, completed projects, and professional services. Features a clean, business-focused design.',
    category: 'business',
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Lovable.dev'
    ],
    features: [
      'Professional portfolio showcase',
      'Service catalog with detailed descriptions',
      'Project gallery with case studies',
      'Team profiles and qualifications',
      'Contact and inquiry system',
      'Responsive business design'
    ],
    liveUrl: 'https://navakruti-visions.lovable.app/',
    githubUrl: 'https://github.com/Yukti-Tech-Solution/Navakruti-Visions',
    images: {
      thumbnail: '/projects/navakruti/homepage.png',
      screenshots: [
        '/projects/navakruti/homepage.png',
        '/projects/navakruti/services.png',
        '/projects/navakruti/projects.png'
      ]
    },
    highlights: [
      'Professional corporate design',
      'Showcases engineering expertise',
      'Client-focused presentation'
    ],
    year: '2024'
  },
  {
    id: 'custom-billing-software',
    title: 'Custom Billing Software',
    tagline: 'Smart Invoice Management System',
    description: 'Comprehensive billing and invoice management software featuring automated calculations, GST compliance, customer management, and detailed reporting for businesses.',
    longDescription: 'Full-featured billing software designed for small to medium businesses. This is a customizable solution that can be tailored to your specific business requirements. Contact us for a demo and custom implementation.',
    category: 'business',
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Tailwind CSS',
      'shadcn-ui',
      'PDF Generation'
    ],
    features: [
      'Automated invoice generation with templates',
      'GST-compliant tax calculations',
      'Customer and vendor management',
      'Inventory tracking and stock alerts',
      'Payment tracking (paid/pending/overdue)',
      'Detailed financial reports and analytics',
      'Multi-user access with role-based permissions',
      'PDF invoice export and email integration',
      'Dashboard with business insights',
      'Fully customizable to your business needs'
    ],
    liveUrl: '',
    githubUrl: '',
    isCustomizable: true,
    contactRequired: true,
    images: {
      thumbnail: '/projects/billing-software/homepage.png',
      screenshots: [
        '/projects/billing-software/homepage.png',
        '/projects/billing-software/invoice.png',
        '/projects/billing-software/reports.png'
      ]
    },
    highlights: [
      'Reduces invoice processing time by 70%',
      'Fully GST compliant for Indian businesses',
      'Automated reminders for pending payments',
      'Real-time business analytics',
      'Customizable to your specific requirements'
    ],
    technicalDetails: {
      authentication: 'JWT-based secure authentication',
      database: 'MongoDB with aggregation pipelines',
      pdfGeneration: 'jsPDF with custom templates',
      deployment: 'Cloud-hosted with automated backups'
    },
    status: 'Available for Custom Implementation',
    year: '2024',
    ctaText: 'Contact Us for Custom Implementation',
    ctaDescription: 'This is a customizable billing software. We can tailor it to your specific business requirements.'
  }
];

/**
 * Get a project by its ID
 */
export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}

/**
 * Get projects filtered by category
 */
export function getProjectsByCategory(category: ProjectCategory | 'all'): Project[] {
  if (category === 'all') {
    return projects;
  }
  return projects.filter(project => project.category === category);
}

/**
 * Get all unique categories from projects
 */
export function getAllCategories(): ProjectCategory[] {
  const categories = new Set<ProjectCategory>();
  projects.forEach(project => categories.add(project.category));
  return Array.from(categories);
}

/**
 * Get all unique technologies used across projects
 */
export function getAllTechnologies(): string[] {
  const technologies = new Set<string>();
  projects.forEach(project => {
    project.technologies.forEach(tech => technologies.add(tech));
  });
  return Array.from(technologies).sort();
}

/**
 * Search projects by title, tagline, or description
 */
export function searchProjects(query: string): Project[] {
  const lowerQuery = query.toLowerCase();
  return projects.filter(project =>
    project.title.toLowerCase().includes(lowerQuery) ||
    project.tagline.toLowerCase().includes(lowerQuery) ||
    project.description.toLowerCase().includes(lowerQuery) ||
    project.technologies.some(tech => tech.toLowerCase().includes(lowerQuery))
  );
}

/**
 * Sort projects by various criteria
 */
export type SortOption = 'newest' | 'oldest' | 'alphabetical';

export function sortProjects(projects: Project[], sortBy: SortOption): Project[] {
  const sorted = [...projects];
  
  switch (sortBy) {
    case 'alphabetical':
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    case 'newest':
      // Assuming projects are added in chronological order
      // If you have a date field, sort by that instead
      return sorted.reverse();
    case 'oldest':
      return sorted;
    default:
      return sorted;
  }
}

/**
 * Get related projects based on category or technologies
 */
export function getRelatedProjects(projectId: string, limit: number = 3): Project[] {
  const project = getProjectById(projectId);
  if (!project) return [];

  const related = projects
    .filter(p => p.id !== projectId)
    .filter(p => 
      p.category === project.category ||
      p.technologies.some(tech => project.technologies.includes(tech))
    )
    .slice(0, limit);

  return related;
}

/**
 * Category definitions for filtering projects
 */
export const categories = {
  all: 'All Projects',
  'web-app': 'Web Applications',
  'ai-ml': 'AI & Machine Learning',
  'educational': 'Educational',
  'business': 'Business Solutions'
};


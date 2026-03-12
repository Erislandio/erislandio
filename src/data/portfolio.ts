import {
  Cloud,
  Code2,
  Layers,
  Server,
  ShoppingCart,
  Users,
} from "lucide-react";

export const personalInfo = {
  name: "Erislandio Soares",
  title: "Senior Full-Stack Engineer & Tech Lead",
  headline:
    "Senior Full-Stack Engineer building scalable e-commerce and digital platforms",
  subheadline:
    "5+ years crafting high-performance web applications, leading engineering teams, and architecting end-to-end solutions across frontend, backend, and cloud infrastructure.",
  location: "Brazil",
  email: "erislandiosoares21@gmail.com",
  github: "https://github.com/erislandio",
  linkedin: "https://linkedin.com/in/erislandio",
  profileImage: "/portifolio/profile.jpeg",
  whatsapp: "https://wa.me/5511942676399",
  phone: "+55 11 942676399",
};

export const aboutText = [
  "I'm a Senior Full-Stack Engineer and Tech Lead with over 5 years of hands-on experience designing, building, and scaling digital products. My expertise spans the entire stack — from sleek, accessible frontends in React and Next.js to robust backend services with Node.js, Java, Python, and Golang.",
  "I have deep domain expertise in e-commerce, having led complex projects for global brands on VTEX and VTEX IO — including custom storefronts, checkout flows, and API integrations. I thrive in environments that demand technical leadership, cross-functional collaboration, and a product-driven mindset.",
  "Beyond code, I bring a strong sense of ownership, mentoring junior developers through code reviews, championing best practices in architecture and DevOps, and driving teams to deliver impact at scale.",
];

export const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "React Native",
      "Redux",
      "Angular",
      "HTML5 / CSS3",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      "Node.js",
      "Java",
      "Python",
      "Golang",
      "Django",
      "Express",
      "REST APIs",
      "Microservices",
    ],
  },
  {
    title: "APIs & Data",
    icon: Layers,
    skills: [
      "GraphQL",
      "REST",
      "MySQL",
      "MongoDB",
      "Redis",
      "PostgreSQL",
      "Elasticsearch",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      "Docker",
      "GCP",
      "AWS",
      "Linux",
      "CI/CD",
      "GitHub Actions",
      "Grafana",
      "Kubernetes",
    ],
  },
  {
    title: "E-commerce",
    icon: ShoppingCart,
    skills: [
      "VTEX IO",
      "VTEX CMS",
      "Checkout Customization",
      "Storefront Dev",
      "Payment Integrations",
      "PIM / Catalog",
    ],
  },
  {
    title: "Leadership",
    icon: Users,
    skills: [
      "Tech Leadership",
      "Code Review",
      "Agile / Scrum",
      "Mentoring",
      "Cross-functional Teams",
      "Architecture Design",
    ],
  },
];

export const experiences = [
  {
    company: "VTEX",
    role: "Tech Lead",
    period: "2023 — Present",
    description:
      "Leading the NCR Angola project — an innovative solution tackling address delivery challenges in African markets with an interactive map-based system. Driving architecture decisions, conducting code reviews, and mentoring a cross-functional engineering team.",
    highlights: [
      "Designed interactive map solving addressing problems for the Angolan market",
      "Led a distributed engineering team across multiple time zones",
      "Established coding standards and CI/CD pipelines for the project",
    ],
    tech: ["React", "Node.js", "TypeScript", "GraphQL", "Docker"],
  },
  {
    company: "VTEX",
    role: "Fullstack Developer",
    period: "2022 — 2023",
    description:
      "Built custom APIs with Node.js and GraphQL for barcode-based sales and digital product experiences. Developed scalable backend services handling thousands of transactions per day for major e-commerce operations.",
    highlights: [
      "Engineered custom GraphQL APIs for barcode sales workflows",
      "Built digital product delivery systems serving 10K+ daily transactions",
      "Reduced API response times by 40% through caching and query optimization",
    ],
    tech: ["Node.js", "GraphQL", "TypeScript", "React", "VTEX IO"],
  },
  {
    company: "VTEX IO",
    role: "Fullstack Developer",
    period: "2021 — 2022",
    description:
      "Developed frontend customizations in React and backend integrations for enterprise e-commerce platforms. Specialized in creating high-performance storefront experiences with seamless checkout flows.",
    highlights: [
      "Built custom storefront components for enterprise clients",
      "Integrated third-party services for payment and logistics",
      "Improved page load times by 35% through code splitting and lazy loading",
    ],
    tech: ["React", "Node.js", "GraphQL", "VTEX IO", "TypeScript"],
  },
  {
    company: "Fullstack Labs",
    role: "Software Developer",
    period: "2020 — 2021",
    description:
      "Delivered e-commerce solutions for Corsair, one of the world's leading gaming hardware brands. Built performant frontends with React and Next.js, integrated with GraphQL backends for global-scale product catalogs.",
    highlights: [
      "Built Corsair's e-commerce frontend serving millions of monthly users",
      "Implemented SSR with Next.js for optimal SEO and performance",
      "Developed reusable component library adopted across 3 projects",
    ],
    tech: ["React", "Next.js", "GraphQL", "TypeScript", "Node.js"],
  },
  {
    company: "LuizaLabs",
    role: "Backend Developer",
    period: "2019 — 2020",
    description:
      "Engineered backend services for freight calculation and delivery logistics at Magazine Luiza — one of Brazil's largest retailers. Built high-throughput microservices handling millions of shipping calculations daily.",
    highlights: [
      "Built freight calculation engine processing 5M+ daily requests",
      "Developed microservices with Java, Python, and Golang",
      "Reduced delivery cost estimation errors by 25%",
    ],
    tech: ["Java", "Python", "Golang", "Docker", "MySQL"],
  },
  {
    company: "ACCT Global",
    role: "Full Stack Web Developer",
    period: "2018 — 2019",
    description:
      "Built end-to-end e-commerce storefronts using VTEX IO, React, GraphQL, and Node.js. Delivered custom virtual stores for major Brazilian brands with focus on performance and conversion optimization.",
    highlights: [
      "Delivered 4+ custom e-commerce storefronts from scratch",
      "Integrated payment gateways and logistics providers",
      "Increased client conversion rates by up to 20% through UX optimizations",
    ],
    tech: ["React", "Node.js", "GraphQL", "VTEX IO", "CSS3"],
  },
];

export const projects = [
  {
    title: "NCR Angola — Interactive Address System",
    description:
      "Led the development of an innovative map-based addressing solution for the Angolan market, where traditional address systems are unreliable. Built an interactive platform enabling precise delivery locations for e-commerce.",
    tech: ["React", "Node.js", "TypeScript", "Maps API", "GraphQL"],
    role: "Tech Lead",
    impact: "Enabled reliable deliveries in regions without formal addresses",
  },
  {
    title: "HunterDouglas — E-commerce Platform",
    description:
      "Developed a complete e-commerce experience on VTEX IO for HunterDouglas, featuring custom product configurators, real-time inventory sync, and a streamlined B2B checkout flow.",
    tech: ["React", "VTEX IO", "GraphQL", "Node.js", "TypeScript"],
    role: "Fullstack Developer",
    impact: "Reduced purchase flow time by 40% for B2B customers",
  },
  {
    title: "GSL — GraphQL Service Layer",
    description:
      "Architected and built a unified GraphQL service layer that consolidated multiple REST APIs into a single, performant gateway — reducing frontend complexity and improving developer experience.",
    tech: ["Node.js", "GraphQL", "TypeScript", "Redis", "Docker"],
    role: "Backend Engineer",
    impact: "Cut API integration time by 60% for frontend teams",
  },
  {
    title: "Corsair — Global E-commerce",
    description:
      "Built the frontend for Corsair's global e-commerce platform using React and Next.js, serving millions of monthly visitors with lightning-fast page loads and seamless shopping experiences.",
    tech: ["React", "Next.js", "GraphQL", "TypeScript", "Styled Components"],
    role: "Frontend Developer",
    impact: "Achieved 95+ Lighthouse score for Core Web Vitals",
  },
  {
    title: "Freight Engine — LuizaLabs",
    description:
      "Engineered a high-throughput freight calculation engine for Magazine Luiza, processing millions of daily shipping requests with sub-100ms response times across a microservices architecture.",
    tech: ["Java", "Python", "Golang", "Docker", "MySQL"],
    role: "Backend Developer",
    impact: "Processing 5M+ daily requests with 99.9% uptime",
  },
  {
    title: "Smart Barber — Scheduling App",
    description:
      "Designed and built a modern scheduling platform for barbershops, featuring real-time availability, push notifications, and a sleek mobile-first interface for both clients and business owners.",
    tech: ["React Native", "Node.js", "MongoDB", "TypeScript", "Push API"],
    role: "Creator & Full-Stack Developer",
    impact: "Side project — Full-stack mobile application",
  },
];

export const differentials = [
  {
    title: "Technical Leadership",
    description:
      "Leading distributed teams, making architecture decisions, and driving projects from ideation to production with a focus on quality and scalability.",
  },
  {
    title: "Code Review & Quality",
    description:
      "Championing code quality through thorough reviews, establishing coding standards, and mentoring developers to write maintainable, tested code.",
  },
  {
    title: "API Architecture",
    description:
      "Designing robust, scalable APIs with GraphQL and REST — building unified service layers that simplify frontend development and improve performance.",
  },
  {
    title: "Scalable Systems",
    description:
      "Building high-throughput backend services that handle millions of requests daily, with focus on reliability, monitoring, and graceful degradation.",
  },
  {
    title: "E-commerce Expertise",
    description:
      "Deep domain knowledge in e-commerce platforms, from checkout customization and payment integrations to catalog management and logistics.",
  },
  {
    title: "Cross-functional Collaboration",
    description:
      "Bridging the gap between engineering, product, and design — translating business requirements into technical solutions with an agile mindset.",
  },
];

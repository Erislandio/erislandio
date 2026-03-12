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
    company: "Weonne | Artiq",
    role: "Tech Lead",
    period: "2023 — Present",
    description:
      "Technical Lead responsible for the NCR Angola project, an innovative platform designed to solve addressing and delivery challenges in regions with non-standardized addresses. Led the architecture and development of an interactive map-based system enabling more reliable location identification for logistics and delivery operations.",
    highlights: [
      "Architected a map-based addressing system to improve delivery accuracy in Angola",
      "Led the technical direction of the project, defining system architecture and engineering standards",
      "Mentored developers and conducted code reviews to maintain high code quality",
      "Collaborated with product and design teams to deliver scalable logistics solutions",
      "Implemented backend APIs and frontend interfaces supporting geolocation-based workflows",
    ],
    tech: ["React", "Node.js", "TypeScript", "GraphQL", "Docker", "Maps APIs"],
  },
  {
    company: "Quality Digital",
    role: "Senior Full-Stack Developer",
    period: "2023 — Present",
    description:
      "Worked on large-scale e-commerce solutions using VTEX IO, building modern frontend applications and scalable backend services. Developed custom APIs with Node.js and GraphQL to support complex commerce flows, including barcode-based sales and digital product operations.",
    highlights: [
      "Developed custom GraphQL APIs supporting barcode sales and digital product workflows",
      "Built scalable backend services integrated with VTEX IO for high-volume e-commerce operations",
      "Implemented advanced React storefront customizations improving UX and product configuration flows",
      "Collaborated with cross-functional teams delivering enterprise commerce solutions",
      "Contributed to architecture decisions and code quality through reviews and technical discussions",
    ],
    tech: [
      "React",
      "Node.js",
      "GraphQL",
      "TypeScript",
      "VTEX IO",
      "Apollo",
      "REST APIs",
    ],
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
      "Backend developer working on logistics and freight systems for Magazine Luiza, one of the largest retail platforms in Brazil. Developed microservices responsible for freight calculation, delivery workflows, and logistics integrations supporting large-scale e-commerce operations.",
    highlights: [
      "Developed backend microservices supporting freight calculation and delivery workflows",
      "Built scalable services using Java, Python and Golang in a distributed architecture",
      "Integrated logistics services with internal e-commerce systems",
      "Improved reliability and maintainability of backend services through clean architecture practices",
    ],
    tech: ["Java", "Python", "Golang", "Docker", "MySQL", "Microservices"],
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
    title: "Fastshop — High-Performance E-commerce",
    description:
      "Developed a modern, lightning-fast e-commerce storefront for Fastshop using VTEX FastStore. Leveraging Next.js, GraphQL, and Node.js to achieve exceptional performance and SEO rankings.",
    tech: ["Next.js", "FastStore", "GraphQL", "Node.js", "TypeScript"],
    role: "Full-Stack Developer",
    impact: "Achieved sub-second page loads and significant conversion lift",
  },
  {
    title: "Obramax — Professional Marketplace",
    description:
      "Engineered robust e-commerce solutions for Obramax using VTEX IO technology. Built custom React components and high-performance Node.js/GraphQL backends for a complex building materials marketplace.",
    tech: ["React", "VTEX IO", "Node.js", "TypeScript", "GraphQL"],
    role: "Full-Stack Developer",
    impact:
      "Scalable architecture supporting massive product catalogs and B2B workflows",
  },
  {
    title: "Americanas — Multi-channel Integration",
    description:
      "Architected and implemented complex integrations for orders, products, and user data using the Jitterbit orchestration platform, ensuring seamless synchronization between legacy systems and digital channels.",
    tech: ["Jitterbit", "REST APIs", "Node.js", "Integration Architecture"],
    role: "Integration Engineer",
    impact: "Automated critical data flows, reducing manual sync errors by 90%",
  },
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

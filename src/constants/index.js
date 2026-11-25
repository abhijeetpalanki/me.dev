import sponsorRadarImage from "../assets/projects/Sponsor Radar.webp";
import sumdayImage from "../assets/projects/Sumday.webp";
import game2048Image from "../assets/projects/2048.webp";
import shirtyImage from "../assets/projects/Shirty.webp";

// Keep this file in step with the resume (A:/Personal/linkedin/resume) and LinkedIn.

// Matches the LinkedIn headline: "Lead Technology Architect | AI & Generative AI | Enterprise Solutions |
// Web & Frontend | Mobile Applications | Kiosk Development | Digital Transformation".
export const HEADLINE_TITLE = "Lead Technology Architect";
export const HEADLINE_AREAS = [
  "AI & Generative AI",
  "Enterprise Solutions",
  "Web & Frontend",
  "Mobile Applications",
  "Kiosk Development",
  "Digital Transformation",
];

export const HERO_CONTENT = `I co-lead frontend development for Tropical Smoothie Cafe's online ordering platform: a Next.js site, its React component library, and a shared TypeScript core that the React Native app runs on too. Nearly ten years of React, Next.js and TypeScript, from Walmart and Tyler Technologies to today. Most of my work is making sure an order goes through on the first tap. The rest is finding out why it didn't.`;

export const EXPERIENCES = [
  {
    year: "Feb 2026 - Present",
    role: "Tech Lead (Frontend)",
    company: "Tropical Smoothie Cafe",
    description: `Co-lead 17 engineers (5 onshore, 12 offshore) on the new web ordering platform: a Next.js app, a React component library and a shared TypeScript core used by the React Native app. Took on the mobile apps in Oct 2026. Lead delivery across menu customization, cart, checkout, rewards, reorder, favorites, delivery and group ordering. Set the team's quality standard of 100% test coverage on changed code, review pull requests daily (about 1,900 merged so far), run releases across dev, stage and production, and lead root-cause analysis of production issues with Datadog RUM, AWS CloudWatch and Quantum Metric. Built Frond, the team's Claude Code plugin for code review, test coverage checks, QA test cases and WCAG 2.2 accessibility testing, with approval gates on commits and deploys.`,
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "React Native",
      "Node.js",
      "Tailwind CSS",
      "SonarCloud",
      "Datadog",
      "Claude Code",
    ],
  },
  {
    year: "Jul 2024 - Jan 2026",
    role: "UI Developer (React / React Native)",
    company: "Sam's Club (Walmart)",
    description: `Improved rendering performance for 1M+ daily active users using Suspense, concurrent rendering, virtualization and memoization. Cut regression run time by 40% by running Playwright, Cypress and Detox suites in parallel while keeping coverage above 85%. Built a generative-AI catalog maintenance tool on OpenAI embeddings and Pinecone vector search, with inference latency traced through OpenTelemetry. Delivered embedding-based UI personalization, a Redux Toolkit and RTK Query data layer, React Native native modules (iOS and Android, Hermes) for faster startup, and Module Federation micro-frontends that let teams deploy independently.`,
    technologies: [
      "React",
      "React Native",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "Module Federation",
      "Playwright",
      "OpenAI",
      "Pinecone",
    ],
  },
  {
    year: "Dec 2020 - Apr 2024",
    role: "React JS Developer",
    company: "Tyler Technologies",
    description: `Improved First Contentful Paint by 25% and SEO on public-facing portals by moving them to Next.js server-side rendering and incremental static regeneration. Cut deployment time by 30% by containerizing frontends on Docker and Kubernetes with coverage-gated test pipelines. Built enterprise React applications on a micro-frontend architecture with dynamic Module Federation, designed the shared API layer (token refresh, retries with backoff, centralized error handling), and mentored junior engineers on testing, architecture and accessibility.`,
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Module Federation",
      "Docker",
      "Kubernetes",
      "Jest",
      "React Testing Library",
    ],
  },
  {
    year: "Aug 2018 - Dec 2020",
    role: "React JS Developer, Dept. of Finance and Administration (2020); Frontend Developer, Dept. of Education (2018 - 2020)",
    company: "State of Arkansas",
    description: `Reduced Time to Interactive by 30% through Lighthouse and React Profiler audits, and added offline support with service workers and push notifications. Cut manual QA cycles by 25% with Jest and Enzyme tests, and delivered responsive, WCAG-aligned interfaces. Implemented SAML single sign-on for the MySped and MyAdmin applications.`,
    technologies: ["React", "Redux", "Jest", "Enzyme", "Service Workers", "SAML SSO"],
  },
  {
    year: "Jan 2017 - Jun 2018",
    role: "Programmer Analyst",
    company: "Walmart",
    description: `Built Angular and TypeScript applications with RxJS and Angular Material, using ahead-of-time compilation, lazy loading and Jasmine and Karma coverage gates in CI.`,
    technologies: ["Angular", "TypeScript", "RxJS", "Angular Material", "Jasmine", "Karma"],
  },
];

export const PROJECTS = [
  {
    title: "Sponsor Radar - H-1B Sponsor Job Search",
    image: sponsorRadarImage,
    description:
      "Matches open frontend and fullstack roles at 56 companies to each employer's certified H-1B filings in U.S. Department of Labor data. A Node.js GraphQL API batches lookups with DataLoader and pages with cursors, and a GitHub Action refreshes the job boards every night.",
    technologies: ["Next.js", "TypeScript", "Node.js", "GraphQL Yoga", "DataLoader", "Vitest", "GitHub Actions"],
    live: "https://abhijeetpalanki-sponsor-radar.netlify.app",
    repo: "https://github.com/abhijeetpalanki/sponsor-radar",
  },
  {
    title: "Sumday - Daily Number Puzzle",
    image: sumdayImage,
    description:
      "A daily number puzzle app for iOS and Android: five tiles, one target, combine them with + − × ÷ until a tile hits the target. A pure TypeScript engine turns the date into a seed, generates and exhaustively solves each day's puzzles, grades their difficulty, and warns you the moment the target can no longer be reached. No backend, no accounts, no network calls.",
    technologies: ["React Native", "Expo", "TypeScript", "Reanimated", "AsyncStorage"],
    repo: "https://github.com/abhijeetpalanki/Sumday",
  },
  {
    title: "2048, animated with zero animation libraries",
    image: game2048Image,
    description:
      "Two nested Sass @for loops generate a @keyframes rule for every row and column move: 24 animations written at build time. React only picks the class name, and CSS plays the animation. 44 KB of JavaScript, gzipped.",
    technologies: ["React", "JavaScript (ES6+)", "Sass", "CSS keyframes"],
    live: "https://abhijeetpalanki-2048.netlify.app/",
    repo: "https://github.com/abhijeetpalanki/2048",
  },
  {
    title: "Shirty - 3D Shirt Customizer",
    image: shirtyImage,
    description:
      "Pick a color, drop in a logo, or print a design across the whole shirt, and watch it update on a lit 3D model. The shirt color eases toward the selected value every frame instead of snapping to it.",
    technologies: ["React", "React Three Fiber", "Three.js", "valtio", "Framer Motion"],
    live: "https://abhijeetpalanki-shirty.netlify.app/",
    repo: "https://github.com/abhijeetpalanki/Shirty",
  },
];

export const GITHUB_URL = "https://github.com/abhijeetpalanki";

export const EDUCATION = [
  { degree: "M.S., Computer Science", school: "University of Bridgeport", year: "2016" },
  { degree: "B.Tech., Electronics and Communication", school: "SRM University", year: "2015" },
];

export const CERTIFICATIONS = [
  {
    name: "Claude Certified Architect - Professional (CCAR-P)",
    issuer: "Anthropic",
    date: "Nov 2026",
    url: "https://www.credly.com/badges/6058fd10-ee80-4837-be5c-43c1f97aa718/public_url",
  },
];

export const CONTACT = {
  address: "Atlanta, GA",
  phoneNo: "+1 (203) 385-2663",
  email: "ajpalanki@gmail.com",
};

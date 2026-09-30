import project1 from "../assets/projects/Shirty.png";
import project2 from "../assets/projects/Live Docs.png";
import project3 from "../assets/projects/Whiz.png";
import project4 from "../assets/projects/Insights.png";
import project5 from "../assets/projects/2048.png";

export const HERO_CONTENT = `I lead frontend development for Tropical Smoothie Cafe's online ordering platform: a Next.js site, its React component library, and a shared TypeScript core that the React Native app runs on too. Nearly ten years of React, Next.js and TypeScript, from Walmart and Tyler Technologies to today. Most of my work is making sure an order goes through on the first tap. The rest is finding out why it didn't.`;

export const ABOUT_TEXT = `I am a dedicated and versatile UI developer with a passion for creating efficient and user-friendly web applications. With 10 years of professional experience, I have worked with a variety of technologies, including React, React Native, Next.js, and Node.js. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Feb 2026 - Present",
    role: "Lead Frontend Developer",
    company: "Tropical Smoothie Cafe",
    description: `Co-lead frontend development for the new tropicalsmoothiecafe.com ordering platform with a second lead, guiding 17 developers (5 onshore, 12 offshore) across a Next.js app, a React component library and a shared TypeScript core also used by the React Native app. Built and launched ordering features across menu customization, cart, checkout, rewards, reorder, favorites, delivery and group ordering. Review pull requests daily, run releases across dev, stage and production, and triage production issues with Datadog RUM, AWS CloudWatch and Quantum Metric.`,
    technologies: [
      "Next.js",
      "React.js",
      "TypeScript",
      "React Native",
      "Tailwind CSS",
      "Datadog",
    ],
  },
  {
    year: "Jul 2024 - Jan 2026",
    role: "UI (React/React Native) Developer",
    company: "Sam's Club",
    description: `Built React and React Native applications for 1M+ daily users, including cross-platform React Native modules with native iOS/Android bridges on the Hermes engine, a Gen-AI item catalog tool on OpenAI embeddings and Pinecone vector search, and an AI personalization engine driven by vector similarity. Responsible for leading frontend architecture decisions, improving rendering performance, implementing scalable state management patterns, and driving UI modernization across teams. Worked closely with architects, backend engineers, and product stakeholders to deliver reliable, performant, and maintainable React and React Native applications at enterprise scale.`,
    technologies: [
      "React.js",
      "React Native",
      "TypeScript",
      "JavaScript (ES6+)",
      "Redux",
    ],
  },
  {
    year: "Dec 2020 - Apr 2024",
    role: "React JS Developer",
    company: "Tyler Technologies",
    description: `Worked in a large enterprise product team, owning the design and development of complex React applications built on micro-frontend and modular architectures. Led frontend modernization efforts, improved CI/CD reliability, and established testing standards across multiple teams. Collaborated with cross-functional groups to deliver mission-critical features for government and public-sector clients.`,
    technologies: [
      "React.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Redux",
      "React Testing Library",
    ],
  },
  {
    year: "Jul 2020 - Dec 2020",
    role: "React JS Developer",
    company: "Arkansas Department of Education",
    description: `Contributed to the development of multi-screen, high-traffic React applications supporting statewide digital services. Responsible for building reusable components, improving accessibility and performance, and integrating frontend workflows with backend APIs. Played a key role in reducing QA overhead through automated testing and improving overall application reliability.`,
    technologies: [
      "React.js",
      "React Router",
      "TypeScript",
      "Redux",
      "Enzyme",
    ],
  },
  {
    year: "Aug 2018 - Jul 2020",
    role: "Frontend Developer",
    company: "Arkansas Department of Education",
    description: `Worked on modernizing legacy systems by building React-based applications with shared ES6 codebases supporting both SSR and CSR. Implemented performance enhancements, PWA capabilities, and custom middleware for monitoring and debugging. Supported multiple teams by delivering reusable UI modules and improving application stability across browsers and devices.`,
    technologies: ["React.js", "JavaScript (ES6+)", "Redux", "PWA"],
  },
  {
    year: "Jan 2017 - Jun 2018",
    role: "Programmer Analyst",
    company: "Walmart Stores Inc.",
    description: `Developed Angular-based internal applications used across Walmart's enterprise operations. Responsible for building responsive UI components, optimizing performance through modern Angular tooling, and improving developer workflows with automated testing and CI integration. Contributed to authentication flows, design system components, and performance-focused enhancements across multiple internal tools.`,
    technologies: [
      "Angular 4",
      "TypeScript",
      "RxJS",
      "Angular Material",
      "Jasmine",
      "Karma",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Shirty - 3D Shirt Customizer",
    image: project1,
    description:
      "Pick a color, drop in a logo, or print a design across the whole shirt, and watch it update on a lit 3D model. The shirt color eases toward the selected value every frame instead of snapping to it.",
    technologies: ["React", "React Three Fiber", "Three.js", "valtio", "Framer Motion"],
  },
  {
    title: "LiveDocs - Collaborative Document Editor",
    image: project2,
    description:
      "A real-time collaborative document editor built on the Lexical editor, with Liveblocks keeping every open copy in sync and Clerk for sign-in.",
    technologies: ["Next.js", "TypeScript", "Lexical", "Liveblocks", "Clerk", "Sentry"],
  },
  {
    title: "Whiz - Video Conferencing App",
    image: project3,
    description:
      "A video conferencing app built with Next.js on the Stream Video SDK, with Clerk for sign-in.",
    technologies: ["Next.js", "TypeScript", "Stream Video SDK", "Clerk", "Tailwind CSS"],
  },
  {
    title: "Gen-AI Item Catalog Maintenance (Sam's Club)",
    image: project4,
    description:
      "An AI-driven catalog enrichment system using embeddings and vector search to automate product classification and semantic retrieval.",
    technologies: ["OpenAI", "Node.js"],
  },
  {
    title: "2048, animated with zero animation libraries",
    image: project5,
    description:
      "Two nested Sass @for loops generate a @keyframes rule for every row and column move: 24 animations written at build time. React only picks the class name, and CSS plays the animation. 44 KB of JavaScript, gzipped.",
    technologies: ["React", "JavaScript (ES6+)", "Sass", "CSS keyframes"],
  },
];

export const CONTACT = {
  address: "Atlanta, GA",
  phoneNo: "+1 (203) 385-2663 ",
  email: "ajpalanki@gmail.com",
};

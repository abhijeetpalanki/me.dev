import project1 from "../assets/projects/Shirty.png";
import project2 from "../assets/projects/Live Docs.png";
import project3 from "../assets/projects/Whiz.png";
import project4 from "../assets/projects/Insights.png";
import project5 from "../assets/projects/2048.png";

export const HERO_CONTENT = `I am a passionate UI developer with a knack for crafting robust and scalable web applications. With 10+ years of hands-on experience, I have honed my skills in front-end technologies like React and React Native, as well as back-end technologies like Node.js. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile UI developer with a passion for creating efficient and user-friendly web applications. With 10 years of professional experience, I have worked with a variety of technologies, including React, React Native, Next.js, and Node.js. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Jul 2024 - Jan 2026",
    role: "Senior UI (React/React Native) Developer",
    company: "Walmart / Sam's Club",
    description: `A senior engineering role focused on building and optimizing high-performance internal applications used by over a million daily associates. Responsible for leading frontend architecture decisions, improving rendering performance, implementing scalable state management patterns, and driving UI modernization across teams. Worked closely with architects, backend engineers, and product stakeholders to deliver reliable, performant, and maintainable React and React Native applications at enterprise scale.`,
    technologies: [
      "React.js",
      "React Native",
      "TypeScript",
      "JavaScript (ES6+)",
      "Redux",
    ],
  },
  {
    year: "Dec 2020 -  Apr 2024",
    role: "Senior React Developer",
    company: "Tyler Technologies",
    description: `Served as a senior engineer within a large enterprise product team, owning the design and development of complex React applications built on micro-frontend and modular architectures. Led frontend modernization efforts, improved CI/CD reliability, and established testing standards across multiple teams. Collaborated with cross-functional groups to deliver mission-critical features for government and public-sector clients.`,
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
    company: "State of Arkansas",
    description: `Contributed to the development of multi-screen, high-traffic React applications supporting statewide digital services. Responsible for building reusable components, improving accessibility and performance, and integrating frontend workflows with backend APIs. Played a key role in reducing QA overhead through automated testing and improving overall application reliability.`,
    technologies: [
      "React.js",
      "React Router v6",
      "TypeScript",
      "Redux",
      "Enzyme",
    ],
  },
  {
    year: "Aug 2018 - Nov 2020",
    role: "Frontend Developer",
    company: "State of Arkansas",
    description: `Worked on modernizing legacy systems by building React-based applications with shared ES6 codebases supporting both SSR and CSR. Implemented performance enhancements, PWA capabilities, and custom middleware for monitoring and debugging. Supported multiple teams by delivering reusable UI modules and improving application stability across browsers and devices.`,
    technologies: ["React.js", "JavaScript (ES6+)", "Redux", "PWA"],
  },
  {
    year: "Jan 2016 - Jun 2018",
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
    title: "Shirty - 3D T-Shirt Customizer",
    image: project1,
    description:
      "A GPU-accelerated 3D apparel customization platform enabling real-time model rendering and texture manipulation.",
    technologies: ["Three.js", "WebGL", "GLSL", "React", "TypeScript"],
  },
  {
    title: "LiveDocs - Collaborative Document Editor",
    image: project2,
    description:
      "A real-time collaborative document editor powered by CRDTs, WebSockets, and SSR/ISR rendering for low-latency multi-user editing.",
    technologies: ["WebSockets", "Next.js", "Node.js", "Sentry"],
  },
  {
    title: "Whiz - Video Conferencing App",
    image: project3,
    description:
      "A scalable video conferencing platform built with WebRTC, adaptive bitrate streaming, and TURN/STUN signaling for reliable real-time communication.",
    technologies: ["WebRTC", "TURN", "STUN", "Next.js", "React", "Node.js"],
  },
  {
    title: "Gen-AI Item Catalog Maintenance",
    image: project4,
    description:
      "An AI-driven catalog enrichment system using embeddings and vector search to automate product classification and semantic retrieval.",
    technologies: ["OpenAI", "Node.js"],
  },
  {
    title: "AI Personalization Engine (2048 Animated Web Game)",
    image: project5,
    description:
      "A fully animated web-based version of the 2048 game featuring smooth tile transitions, dynamic motion effects, and optimized rendering for responsive gameplay across devices.",
    technologies: [
      "React",
      "TypeScript",
      "JavaScript (ES6+)",
      "CSS Animations",
      "HTML5 Canvas",
    ],
  },
];

export const CONTACT = {
  address: "Bentonville, AR 72713 ",
  phoneNo: "+1 (203) 385-2663 ",
  email: "ajpalanki@gmail.com",
};

import React from "react";
import { FaAws, FaDocker, FaNodeJs } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { RiNextjsLine, RiReactjsLine } from "react-icons/ri";
import {
  SiClaude,
  SiCypress,
  SiDatadog,
  SiGithubactions,
  SiJest,
  SiKubernetes,
  SiStorybook,
  SiTailwindcss,
  SiTestinglibrary,
} from "react-icons/si";
import {
  TbBrandReactNative,
  TbBrandRedux,
  TbBrandTypescript,
} from "react-icons/tb";
import { motion } from "framer-motion";

// Matches the Skills section of the resume. Colors keep at least 3:1 contrast on the black background.
const TECHNOLOGIES = [
  { name: "React", Icon: RiReactjsLine, color: "text-cyan-400", duration: 2.5 },
  { name: "Next.js", Icon: RiNextjsLine, color: "text-white", duration: 6 },
  { name: "React Native", Icon: TbBrandReactNative, color: "text-sky-400", duration: 3.5 },
  { name: "TypeScript", Icon: TbBrandTypescript, color: "text-blue-500", duration: 5 },
  { name: "Node.js", Icon: FaNodeJs, color: "text-green-500", duration: 3 },
  { name: "Redux Toolkit", Icon: TbBrandRedux, color: "text-violet-400", duration: 2 },
  { name: "GraphQL", Icon: GrGraphQl, color: "text-pink-500", duration: 7.5 },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "text-teal-400", duration: 4 },
  { name: "Jest", Icon: SiJest, color: "text-red-400", duration: 5.5 },
  { name: "Testing Library", Icon: SiTestinglibrary, color: "text-rose-400", duration: 2.5 },
  { name: "Cypress", Icon: SiCypress, color: "text-stone-200", duration: 4.5 },
  { name: "Storybook", Icon: SiStorybook, color: "text-pink-400", duration: 3 },
  { name: "Docker", Icon: FaDocker, color: "text-cyan-500", duration: 1.5 },
  { name: "Kubernetes", Icon: SiKubernetes, color: "text-blue-500", duration: 2 },
  { name: "GitHub Actions", Icon: SiGithubactions, color: "text-blue-400", duration: 6 },
  { name: "Datadog", Icon: SiDatadog, color: "text-violet-400", duration: 3.5 },
  { name: "AWS", Icon: FaAws, color: "text-amber-500", duration: 5 },
  { name: "Claude Code", Icon: SiClaude, color: "text-orange-400", duration: 2 },
];

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <section id="technologies" aria-labelledby="technologies-heading" className="pb-24">
      <motion.h2
        id="technologies-heading"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -40 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="my-20 text-center text-4xl"
      >
        Skills
      </motion.h2>
      <motion.ul
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -40 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap items-start justify-center gap-4"
      >
        {TECHNOLOGIES.map((tech) => {
          const { name, Icon, color, duration } = tech;
          return (
            <li key={name} className="flex w-24 flex-col items-center gap-2 p-2">
              <motion.div initial="initial" animate="animate" variants={iconVariants(duration)}>
                <Icon aria-hidden="true" className={`text-7xl ${color}`} />
              </motion.div>
              <span className="text-xs text-stone-400">{name}</span>
            </li>
          );
        })}
      </motion.ul>
    </section>
  );
};

export default Technologies;

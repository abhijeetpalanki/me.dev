import React from "react";
import { GITHUB_URL, PROJECTS } from "../constants";
import { motion } from "framer-motion";

const linkClass =
  "text-purple-300 underline underline-offset-4 decoration-purple-300/40 transition-colors hover:text-purple-200 hover:decoration-purple-200";

// Short name for labels: "Sponsor Radar - H-1B..." -> "Sponsor Radar", "2048, animated..." -> "2048".
const shortName = (title) => title.split(/ - |, /)[0];

const Projects = () => {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="pb-4">
      <motion.h2
        id="projects-heading"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -40 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <ul>
        {PROJECTS.map((project) => (
          <li key={project.title} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                width={480}
                height={216}
                loading="lazy"
                decoding="async"
                alt={`Screenshot of ${shortName(project.title)}`}
                className="mb-6 w-full max-w-sm rounded lg:max-w-62"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h3 className="mb-2 text-2xl font-semibold text-balance">{project.title}</h3>
              {(project.live || project.repo) && (
                <p className="mb-3 flex gap-4 text-sm">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${shortName(project.title)} live site (opens in a new tab)`}
                      className={linkClass}
                    >
                      Live site
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${shortName(project.title)} code on GitHub (opens in a new tab)`}
                      className={linkClass}
                    >
                      Code on GitHub
                    </a>
                  )}
                </p>
              )}
              <p className="mb-4 text-stone-400">{project.description}</p>
              <ul
                aria-label={`Technologies used in ${shortName(project.title)}`}
                className="flex flex-wrap items-center justify-start gap-1"
              >
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          </li>
        ))}
      </ul>
      <p className="mb-8 text-center">
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          More projects on GitHub<span className="sr-only"> (opens in a new tab)</span>
        </a>
      </p>
    </section>
  );
};

export default Projects;

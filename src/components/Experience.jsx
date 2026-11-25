import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="pb-4">
      <motion.h2
        id="experience-heading"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -40 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h2>
      <ol>
        {EXPERIENCES.map((experience) => (
          <li
            key={`${experience.company}-${experience.year}`}
            className="mb-8 flex flex-wrap lg:justify-center"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-stone-400">{experience.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h3 className="mb-2 font-semibold">
                {experience.role}{" "}
                <span className="text-sm font-normal text-stone-400">
                  · {experience.company}
                </span>
              </h3>
              <p className="mb-3 text-stone-400">{experience.description}</p>
              <ul aria-label={`Technologies used at ${experience.company}`} className="flex flex-wrap items-center justify-start gap-1">
                {experience.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="mr-2 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Experience;

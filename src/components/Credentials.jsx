import React from "react";
import { CERTIFICATIONS, EDUCATION } from "../constants";
import { motion } from "framer-motion";

const Credentials = () => {
  return (
    <section id="credentials" aria-labelledby="credentials-heading" className="pb-24">
      <motion.h2
        id="credentials-heading"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -40 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Education &amp; Certification
      </motion.h2>
      <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-2">
        <div>
          <h3 className="mb-4 text-sm font-semibold tracking-widest text-stone-400 uppercase">
            Certification
          </h3>
          <ul className="space-y-4">
            {CERTIFICATIONS.map((cert) => (
              <li key={cert.name}>
                <p className="font-semibold text-stone-200">{cert.name}</p>
                <p className="text-sm text-stone-400">
                  {cert.issuer} · {cert.date}
                </p>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-purple-300 underline decoration-purple-300/40 underline-offset-4 transition-colors hover:text-purple-200 hover:decoration-purple-200"
                >
                  Verify on Credly<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold tracking-widest text-stone-400 uppercase">
            Education
          </h3>
          <ul className="space-y-4">
            {EDUCATION.map((item) => (
              <li key={item.degree}>
                <p className="font-semibold text-stone-200">{item.degree}</p>
                <p className="text-sm text-stone-400">
                  {item.school} · {item.year}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Credentials;

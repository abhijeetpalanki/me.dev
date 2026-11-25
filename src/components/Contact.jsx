import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const linkClass =
  "border-b border-stone-500 transition-colors hover:border-white hover:text-white";

const Contact = () => {
  return (
    <footer id="contact" aria-labelledby="contact-heading" className="scroll-mt-8 border-t border-stone-900 pb-20">
      <h2 id="contact-heading" className="my-10 text-center text-4xl">
        Get in Touch
      </h2>
      <motion.address
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-4 text-center not-italic tracking-tighter"
      >
        <p>{CONTACT.address}</p>
        <a href={`tel:${CONTACT.phoneNo.replace(/[^+\d]/g, "")}`} className={linkClass}>
          {CONTACT.phoneNo}
        </a>
        <a href={`mailto:${CONTACT.email}`} className={linkClass}>
          {CONTACT.email}
        </a>
      </motion.address>
    </footer>
  );
};

export default Contact;

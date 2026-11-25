import React from "react";
import profileCircle from "../assets/profile-circle.webp";
import profilePortrait from "../assets/profile-portrait.webp";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      staggerChildren: 0.12,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

const Hero = () => {
  return (
    <section aria-labelledby="hero-name" className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            {/* The photo is the largest thing on screen, so it shows right away instead of fading in late.
                Phones and tablets get the round headshot above the text; desktops get the tall portrait beside it. */}
            <motion.picture
              initial={{ x: 40 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.6 }}
              className="block"
            >
              <source
                media="(min-width: 1024px)"
                srcSet={profilePortrait}
                width={686}
                height={1024}
              />
              <img
                src={profileCircle}
                alt="Abhijeet Palanki"
                width={512}
                height={512}
                fetchPriority="high"
                className="h-auto w-56 sm:w-64 lg:w-full lg:max-w-110 lg:rounded-3xl lg:border lg:border-stone-800"
              />
            </motion.picture>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="mt-10 flex flex-col items-center lg:items-start"
          >
            <motion.h1
              id="hero-name"
              variants={childVariants}
              className="pb-2 text-4xl tracking-tighter text-balance lg:text-8xl"
            >
              Abhijeet Palanki
            </motion.h1>
            <motion.p
              variants={childVariants}
              className="bg-linear-to-r from-stone-200 to-stone-400 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Senior Frontend Engineer · Tech Lead
            </motion.p>
            <motion.p
              variants={childVariants}
              className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter text-pretty"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              variants={childVariants}
              href="/resume.pdf"
              download="Abhijeet Palanki Resume.pdf"
              className="mb-10 rounded-full bg-white p-4 text-sm font-medium text-stone-900 transition-colors hover:bg-stone-200"
            >
              Download Resume (PDF)
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

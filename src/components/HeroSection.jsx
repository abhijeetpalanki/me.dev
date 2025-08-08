/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col-reverse items-center justify-between h-screen px-10 overflow-hidden bg-gradient-to-b from-violet-900 to-black xl:flex-row lg:px-24"
    >
      <div className="z-40 xl:mb-0 mb-[20%]">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.3,
            duration: 1.5,
          }}
          className="z-10 mb-6 text-5xl font-bold md:text-7xl lg:text-8xl"
        >
          Building Fast <br /> Reliable Results
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.8,
            duration: 1.5,
          }}
          className="max-w-2xl text-xl text-purple-200 lg:text-2xl"
        >
          I specialize in building fast, responsive, and accessible web
          applications using modern technologies like JavaScript, React, Redux,
          and Tailwind CSS. With nearly a decade in the industry, I turn complex
          problems into elegant, user-centered solutions that scale.
        </motion.p>
      </div>

      <Spline
        scene="https://prod.spline.design/ryPrp3DZK-fd7e4Z/scene.splinecode"
        className="absolute xl:right-[-28%] right-0 top-[-20%] lg:top-0"
      />
    </section>
  );
};

export default HeroSection;

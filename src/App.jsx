import React from "react";
import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Credentials from "./components/Credentials";
import Contact from "./components/Contact";
import watermark from "./assets/ap-mark-watermark.webp";

const App = () => {
  return (
    // reducedMotion="user" turns off movement for people who ask their OS for less motion.
    <MotionConfig reducedMotion="user">
      <div className="overflow-x-hidden text-stone-300 antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:text-stone-900"
        >
          Skip to main content
        </a>

        {/* Brand background, matching the LinkedIn banner: near-black, a faint dot grid,
            a soft light near the top, and the AP mark large and faint in the corner. */}
        <div className="fixed inset-0 -z-10 overflow-hidden bg-[#111111]" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.045)_1.2px,transparent_1.2px)] bg-size-[22px_22px]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_50%_0%,rgba(255,255,255,0.06),transparent_70%)]"></div>
          <img
            src={watermark}
            alt=""
            width={982}
            height={900}
            className="absolute -right-24 -bottom-40 h-[70vh] w-auto opacity-[0.05] select-none"
          />
        </div>

        <div className="container mx-auto px-8">
          <Navbar />
          <main id="main" tabIndex={-1} className="outline-none">
            <Hero />
            <Experience />
            <Projects />
            <Technologies />
            <Credentials />
          </main>
          <Contact />
        </div>
      </div>
    </MotionConfig>
  );
};

export default App;

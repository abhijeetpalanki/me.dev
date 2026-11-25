import React from "react";
import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Credentials from "./components/Credentials";
import Contact from "./components/Contact";

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

        <div className="fixed inset-0 -z-10" aria-hidden="true">
          <div className="relative h-full w-full bg-black">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]"></div>
            <div className="absolute left-0 right-0 top-[-10%] h-250 w-250 rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
          </div>
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

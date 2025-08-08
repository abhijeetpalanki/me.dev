import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ContactSection = () => {
  const sectionRef = useRef(null);
  const circleRef = useRef(null);
  const initialTextRef = useRef(null);
  const finalTextRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cleanup = () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger === sectionRef.current) {
          st.kill(true);
        }
      });
    };

    cleanup();

    gsap.set(circleRef.current, { scale: 1, backgroundColor: "white" });
    gsap.set(initialTextRef.current, { opacity: 1 });
    gsap.set(finalTextRef.current, { opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=200%",
        pin: true,
        scrub: 0.5,
        anticipatePin: 1,
        fastScrollEnd: true,
        preventOverlaps: true,
        invalidateOnRefresh: true,
      },
    });

    tl.to(
      circleRef.current,
      {
        scale: 5,
        backgroundColor: "#9333ea",
        ease: "power1.inOut",
        duration: 0.5,
      },
      0
    );

    tl.to(
      initialTextRef.current,
      {
        opacity: 0,
        ease: "power1.out",
        duration: 0.2,
      },
      0.1
    );

    tl.to(
      circleRef.current,
      {
        scale: 17,
        backgroundColor: "#e9d5ff",
        boxShadow: "0 0 50px 20px rgba(233, 213, 255, 0.3)",
        ease: "power2.inOut",
        duration: 0.5,
      },
      0.5
    );

    tl.to(
      finalTextRef.current,
      {
        opacity: 1,
        ease: "power2.in",
        duration: 0.2,
      },
      0.7
    );

    return cleanup;
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative flex items-center justify-center bg-black"
      style={{ overscrollBehavior: "none" }}
    >
      <div
        ref={circleRef}
        className="relative flex items-center justify-center w-24 h-24 transition-shadow duration-1000 rounded-full shadow-lg sm:w-28 md:w-32 sm:h-28 md:h-32 shadow-violet-300/50 bg-gradient-to-r from-violet-400 to-pink-100"
      >
        <p
          ref={initialTextRef}
          className="absolute inset-0 flex items-center text-base font-bold text-center text-black sm:text-lg md:text-xl"
        >
          SCROLL DOWN
        </p>

        <div
          ref={finalTextRef}
          className="relative flex flex-col items-center justify-center text-center opacity-0"
        >
          <h1 className="text-black md:w-[10rem] w-[20rem] lg:scale-[0.4] sm:scale-[0.25] scale-[0.07] md:font-bold text-sm sm:text-base leading-none mb-5">
            Step into the Future with Abhijeet Palanki
          </h1>

          <p className="text-black lg:w-[40rem] w-[20rem] absolute sm:mt-3 mt-1 md:scale-[0.1] scale-[0.068]">
            Front-end developer specialized in crafting modern, responsive web
            interfaces using React, Tailwind CSS, and advanced UI animation
            techniques. Focused on clean code, and pixel-perfect design that
            design out.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

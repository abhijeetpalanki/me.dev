import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SlShareAlt } from "react-icons/sl";

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const titleLineRef = useRef(null);
  const triggerRef = useRef(null);
  const horizontalRef = useRef(null);

  const projectImages = [
    {
      id: 1,
      title: "2048 Animated Game",
      imageSrc: "/images/2048.png",
      liveLink: "https://abhijeetpalanki-2048.netlify.app/",
    },
    {
      id: 2,
      title: "Shirt Customizer",
      imageSrc: "/images/Shirty.png",
      liveLink: "https://abhijeetpalanki-shirty.netlify.app/",
    },
    {
      id: 3,
      title: "Insights",
      imageSrc: "/images/Insights.png",
      liveLink: "https://abhijeetpalanki-insights.netlify.app/",
    },
    {
      id: 4,
      title: "Whiz",
      imageSrc: "/images/Whiz.png",
      liveLink: "https://abhijeetpalanki-whiz.netlify.app/",
    },
    {
      id: 5,
      title: "Live Docs",
      imageSrc: "/images/Live Docs.png",
      liveLink: "https://abhijeetpalanki-livedocs.netlify.app/",
    },
    {
      id: 6,
      title: "Calendar",
      imageSrc: "/images/Calendar.png",
      liveLink: "https://abhijeetpalanki-calendar.netlify.app/",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      titleRef.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      titleLineRef.current,
      {
        width: "0%",
        opacity: 0,
      },
      {
        width: "100%",
        opacity: 1,
        duration: 1.5,
        ease: "power3.inOut",
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      triggerRef.current,
      {
        y: 100,
        rotationX: 20,
        opacity: 0,
      },
      {
        y: 0,
        rotationX: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      sectionRef.current,
      {
        backgroundPosition: "50% 0%",
      },
      {
        backgroundPosition: "50% 100%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    const horizontalScroll = gsap.to(".panel", {
      xPercent: -100 * (projectImages.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: () => `+=${horizontalRef.current.offsetWidth}`,
        pin: true,
        scrub: 1,
        snap: {
          snapTo: 1 / (projectImages.length - 1),
          duration: { main: 0.2, max: 0.3 },
          delay: 0.1,
        },
        invalidateOnRefresh: true,
      },
    });

    const panels = gsap.utils.toArray(".panel");
    panels.forEach((panel) => {
      const image = panel.querySelector(".project-image");
      const imageTitle = panel.querySelector(".project-title");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          containerAnimation: horizontalScroll,
          start: "left right",
          end: "right left",
          scrub: true,
        },
      });

      tl.fromTo(
        image,
        { scale: 0, rotate: -20 },
        { scale: 1, rotate: 1, duration: 0.5 }
      );

      if (imageTitle) {
        tl.fromTo(imageTitle, { y: 30 }, { y: -100, duration: 0.3 }, 0.2);
      }
    });
  }, [projectImages.length]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-20 bg-[#f6f6f6] overflow-hidden"
    >
      <div className="container relative z-10 px-4 mx-auto mb-16">
        <h2
          ref={titleRef}
          className="mb-4 text-4xl font-bold text-center text-black opacity-0 md:text-5xl lg:text-6xl"
        >
          Featured Projects
        </h2>

        <div
          ref={titleLineRef}
          className="w-0 h-1 mx-auto opacity-0 bg-gradient-to-r from-purple-500 to-pink-500"
        ></div>
      </div>

      <div ref={triggerRef} className="overflow-hidden opacity-0">
        <div
          ref={horizontalRef}
          className="horizontal-section flex md:w-[400%] w-[420%]"
        >
          {projectImages.map((project) => (
            <div
              className="relative flex items-center justify-center panel"
              key={project.id}
            >
              <div className="relative flex flex-col items-center justify-center w-full h-full p-4 md:p-8 lg:p-12">
                <img
                  className="object-cover max-h-full project-image rounded-2xl"
                  src={project.imageSrc}
                  alt="project image"
                />

                <h2 className="z-50 flex items-center gap-3 mt-6 text-sm text-black transition-colors duration-300 cursor-pointer project-title md:text-3xl md:font-bold text-nowrap hover:text-gray-400">
                  {project.title}
                  <a href={project.liveLink} target="_blank">
                    <SlShareAlt />
                  </a>
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

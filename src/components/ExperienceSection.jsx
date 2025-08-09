import { Fragment } from "react";
import {
  FaArrowRight,
  FaConfluence,
  FaCss3,
  FaHtml5,
  FaJira,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs, SiRedux, SiTypescript } from "react-icons/si";

const ExperienceInfo = ({ number, text }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-6xl font-bold text-purple-600">{number}</p>
      <p className="-mt-4 text-xl font-bold text-gray-300 uppercase">{text}</p>
    </div>
  );
};

const SingleExperience = ({ experience }) => {
  return (
    <div className="md:h-[600px] md:w-[340px] sm:h-auto sm:w-full border-2 border-violet-400 border-dashed rounded-2xl mt-12 p-4 scale-100 hover:scale-105 transition-all duration-500">
      <p className="text-xl font-bold text-purple-500">{experience.job}</p>
      <p className="text-pink-300">{experience.company}</p>
      <p className="text-[#978580]">{experience.date}</p>
      <ul className="pl-4 mt-4 text-white list-disc">
        {experience.responsibilities.map((resp, index) => (
          <li className="" key={index}>
            {resp}
          </li>
        ))}
      </ul>
    </div>
  );
};

const experiences = [
  {
    job: "React.js Developer",
    company: "Sams Club",
    date: "2024 - present",
    responsibilities: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Maintaining parent and child elements by using state and props in React JS.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Used JIRA as the bug tracking system to track and maintain the history of bugs/issues on everyday basis.",
    ],
  },
  {
    job: "Full Stack .NET Developer",
    company: "Tyler Technologies",
    date: "2020 - 2023",
    responsibilities: [
      "Design, develop and test JavaScript, jQuery and React.js that meets accessibility and web browser standards for website.",
      "Implemented the Drag and Drop functionality using React-Draggable.",
      "Extensive experience in web-based page and site designs using HTML, CSS, JavaScript, Kendo UI, and React JS.",
      "Created Stored Procedures, Views, Triggers and Complex T-SQL queries in SQL Server.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    job: "Full Stack React Developer",
    company: "State of Arkansas",
    date: "2018 - 2020",
    responsibilities: [
      "Worked on React JS Virtual Dom and React views, rendering using components which contains additional components called custom HTML tags.",
      "Implemented various screens for the front end using React.js and used various predefined components from NPM (Node Package Manager).",
      "Responsible for React UI and architecture. Building components library, including Tree, Slide-View and Table Grid.",
      "Responsible for UI developments and custom views using MVC Razor, HTML, jQuery and CSS which interacts with Business layer objects and contents from external source.",
      "Developed core functionality with the ASP.NET MVC Framework (C#.NET, Entity Framework 6.0)",
    ],
  },
];

const SingleSkill = ({ imgSvg }) => {
  return (
    <div className="transition-all duration-500 hover:-translate-y-10">
      <div className="relative flex flex-col items-center gap-2">
        <div className="text-purple-400 bg-white h-[100px] w-[100px] flex items-center justify-center rounded-full hover:text-gray-700 hover:scale-105 transform transition-all duration-500 text-6xl border-4 border-purple-400">
          {imgSvg}
        </div>
      </div>
    </div>
  );
};

const skills = [
  {
    icon: FaHtml5,
  },
  {
    icon: FaCss3,
  },
  {
    icon: IoLogoJavascript,
  },
  {
    icon: SiTypescript,
  },
  {
    icon: FaReact,
  },
  {
    icon: SiRedux,
  },
  {
    icon: SiNextdotjs,
  },
  {
    icon: FaNodeJs,
  },
  {
    icon: RiTailwindCssFill,
  },
  {
    icon: FaJira,
  },
  {
    icon: FaConfluence,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="max-w-[1200px] mx-auto px-4 py-20">
      <div className="flex flex-col items-center">
        <h2 className="mb-4 text-4xl font-bold text-center text-white md:text-5xl lg:text-6xl">
          Experience
        </h2>
      </div>

      <div className="flex items-center justify-center gap-4 lg:flex-row sm:flex-col">
        <div className="flex flex-col gap-6 w-[300px]">
          <p className="text-3xl font-bold text-center text-white uppercase">
            Since 2018
          </p>
          <div className="flex items-center justify-center gap-4">
            <ExperienceInfo number={8} text={"years"} />
            <p className="text-6xl font-bold text-gray-300">-</p>
            <ExperienceInfo number={23} text={"websites"} />
          </div>
          <p className="text-center text-white">
            With 8 years of experience building dynamic and user-friendly web
            applications.
          </p>
          <ExperienceInfo number={"$100k"} text={"min budget"} />
        </div>

        <div className="lg:w-[35%] md:w-[50%] sm:w-[80%]">
          <img src="/images/experience.png" alt="experience image" />
        </div>

        <div className="xl:w-[25%] lg:w-[30%] border border-pink-400 p-4 rounded-xl">
          <p className="text-lg text-center text-[#978580]">
            I specialize in{" "}
            <span className="font-bold text-white">
              React and modern JavaScript
            </span>
            , leveraging best practices to create scalable and maintainable
            solutions. My experience spans working on diverse projects, from
            small business websites to{" "}
            <span className="font-bold text-white">
              complex front-end systems
            </span>
            , always aiming for clean code and exceptional user experiences.
          </p>
        </div>
      </div>

      <div className="w-full h-1 my-3 bg-gradient-to-r from-purple-500 to-pink-500 lg:block sm:hidden" />

      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto p-4">
        {skills.map((item, index) => (
          <SingleSkill key={index} imgSvg={<item.icon />} />
        ))}
      </div>

      <div className="w-full h-1 my-3 bg-gradient-to-r from-purple-500 to-pink-500 lg:block sm:hidden" />

      <div className="flex flex-col items-center justify-between md:flex-row">
        {experiences.map((experience, index) => (
          <Fragment key={index}>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <FaArrowRight className="hidden text-4xl text-purple-500 lg:block" />
            ) : null}
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;

import React from "react";
import logo from "../assets/ap-logo.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const sectionLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#technologies", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  return (
    <header className="flex items-center justify-between py-6">
      <a href="/" aria-label="Abhijeet Palanki, home" className="flex shrink-0 items-center">
        <img src={logo} alt="" className="mx-2 h-10 w-auto" width={44} height={40} />
      </a>
      <nav aria-label="Main" className="flex items-center gap-6">
        <ul className="hidden items-center gap-6 text-sm sm:flex">
          {sectionLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-stone-300 underline-offset-4 transition-colors hover:text-white hover:underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex items-center gap-4 text-2xl">
          <li>
            <a
              href="https://www.linkedin.com/in/abhijeetpalanki/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn (opens in a new tab)"
              className="block text-stone-300 transition-colors hover:text-white"
            >
              <FaLinkedin aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/abhijeetpalanki"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub (opens in a new tab)"
              className="block text-stone-300 transition-colors hover:text-white"
            >
              <FaGithub aria-hidden="true" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

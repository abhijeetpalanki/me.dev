import React from "react";
import logo from "../assets/logo.webp";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-6">
      <div className="flex shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} alt="logo" className="mx-2" width={80} height={33} />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/abhijeetpalanki/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/abhijeetpalanki"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default Navbar;

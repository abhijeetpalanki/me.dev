/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiTwitter, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
import emailjs from "@emailjs/browser";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const [contactFormOpen, setContactFormOpen] = useState(false);
  const openContactForm = () => setContactFormOpen(true);
  const closeContactForm = () => setContactFormOpen(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }
      );

      setFormData({ name: "", email: "", message: "" });
      closeContactForm();
    } catch (error) {
      console.log(error);
      closeContactForm();
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300 bg-black">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto sm:px-6 lg:px-8 md:h-20">
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 0.3,
            duration: 1.2,
          }}
        >
          <div className="flex items-center justify-center w-10 h-10 mr-3 text-xl font-bold text-purple-600 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100">
            AP
          </div>
          <span className="text-xl font-bold text-transparent bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text">
            Abhijeet Palanki
          </span>
        </motion.div>

        <nav className="hidden space-x-8 lg:flex">
          {["Home", "About", "Projects", "Experience", "Contact"].map(
            (item, index) => (
              <motion.a
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.7 + index * 0.2,
                }}
                key={item}
                className="relative font-medium text-gray-800 transition-colors duration-300 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 group"
                href={`#${item.toLowerCase()}`}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            )
          )}
        </nav>

        <div className="items-center hidden space-x-4 md:flex">
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.3,
              duration: 0.8,
            }}
            className="text-gray-700 transition-colors duration-300 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400"
            href="https://github.com/abhijeetpalanki"
            target="_blank"
          >
            <FiGithub className="w-5 h-5" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.3,
              duration: 0.8,
            }}
            className="text-gray-700 transition-colors duration-300 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400"
            href="https://twitter.com/abhijeetpalanki"
            target="_blank"
          >
            <FiTwitter className="w-5 h-5" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.3,
              duration: 0.8,
            }}
            className="text-gray-700 transition-colors duration-300 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400"
            href="https://www.linkedin.com/in/abhijeetpalanki/"
            target="_blank"
          >
            <FiLinkedin className="w-5 h-5" />
          </motion.a>

          <motion.button
            onClick={openContactForm}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.6,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
            className="px-4 py-2 ml-4 font-bold transition-all duration-500 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700 hover:from-violet-700 hover:to-purple-700 hover:text-white"
          >
            Contact Me
          </motion.button>
        </div>

        <div className="flex items-center md:hidden">
          <motion.button
            whileTap={{ scale: 0.7 }}
            className="text-gray-300"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </motion.button>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.5 }}
        className="px-4 py-5 space-y-5 overflow-hidden bg-white shadow-lg md:hidden dark:bg-gray-900"
      >
        <nav className="flex flex-col space-y-3">
          {["Home", "About", "Projects", "Experience", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="py-2 font-medium text-gray-300"
                onClick={toggleMenu}
              >
                {item}
              </a>
            )
          )}
        </nav>

        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex space-x-5">
            <a href="https://github.com/abhijeetpalanki" target="_blank">
              <FiGithub className="w-5 h-5 text-gray-300" />
            </a>
            <a href="https://twitter.com/abhijeetpalanki" target="_blank">
              <FiTwitter className="w-5 h-5 text-gray-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/abhijeetpalanki/"
              target="_blank"
            >
              <FiLinkedin className="w-5 h-5 text-gray-300" />
            </a>
          </div>

          <button
            className="block px-4 py-2 mt-4 font-bold rounded-lg bg-gradient-to-r from-violet-600 to-violet-400"
            onClick={() => {
              toggleMenu();
              openContactForm();
            }}
          >
            Contact Me
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {contactFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 30 }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 200,
                duration: 0.8,
              }}
              className="w-full max-w-md p-6 bg-white shadow-xl dark:bg-gray-800 rounded-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold text-gray-300">
                  Get In Touch
                </h1>
                <button onClick={closeContactForm}>
                  <FiX className="w-5 h-5 font-extrabold text-gray-300" />
                </button>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-1 text-sm font-medium text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-1 text-sm font-medium text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block mb-1 text-sm font-medium text-gray-300"
                  >
                    Message
                  </label>
                  <textarea
                    rows={4}
                    id="message"
                    name="message"
                    placeholder="How can I help you?"
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="w-full px-4 py-2 transition-all duration-300 rounded-lg shadow-md bg-gradient-to-r from-violet-600 to-violet-400 hover:from-violet-700 hover:to-purple-700 hover:shadow-lg hover:shadow-violet-600/50"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

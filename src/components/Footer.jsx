import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="px-6 py-16 mt-40 text-white bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text">
            Abhijeet Palanki
          </h2>

          <div>
            <h3 className="mb-4 text-xl font-semibold text-purple-200">
              Connect
            </h3>
            <div className="flex space-x-4">
              <a
                className="text-gray-700 transition-colors hover:text-violet-400"
                href="https://github.com/abhijeetpalanki"
              >
                <FiGithub className="w-5 h-5" />
              </a>
              <a
                className="text-gray-700 transition-colors hover:text-violet-400"
                href="https://twitter.com/abhijeetpalanki"
              >
                <FiTwitter className="w-5 h-5" />
              </a>
              <a
                className="text-gray-700 transition-colors hover:text-violet-400"
                href="https://www.linkedin.com/in/abhijeetpalanki/"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between pt-8 mt-12 border-t border-gray-700 md:flex-row">
          <p className="text-sm text-gray-500">
            &copy; 2025 Abhijeet Palanki. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

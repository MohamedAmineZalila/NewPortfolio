import { Github, Linkedin } from "lucide-react";
import React from "react";

function Footer({ isDarkMode }) {
  return (
    <footer
      className={`w-full py-6 px-8 flex justify-center items-center transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900 text-gray-300" : "bg-gray-50 text-gray-700"
      }`}
    >
      <div className="flex items-center justify-center gap-12">
        <p className="text-sm">Developed by Mohamed Amine Zalila</p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/MohamedAmineZalila"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors duration-300 cursor-pointer"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/medamine-zalila/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors duration-300 cursor-pointer"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

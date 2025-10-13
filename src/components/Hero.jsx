import {
  Calendar,
  Moon,
  Sun,
  Download,
  Github,
  Linkedin,
  Code,
  Briefcase,
  Star,
  Rocket,
} from "lucide-react";
import Me from "../assets/Me.jpeg";
import React from "react";

function Hero({ isDarkMode, toggleTheme, isVisible }) {
  return (
    <div
      className={`relative overflow-hidden transition-all duration-300 ${
        isDarkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      {/* Conditional rendering */}
      {isDarkMode && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black"></div>
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 opacity-5 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 opacity-5 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>
        </>
      )}

      {/* Conditional rendering  */}
      {!isDarkMode && (
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-100 opacity-30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-100 opacity-30 rounded-full blur-3xl"></div>
        </div>
      )}

      {/* Toggle Theme */}
      <button
        className={`absolute top-6 right-6 z-20 p-3 rounded-xl transition-all duration-300 transform hover:scale-110 cursor-pointer ${
          isDarkMode
            ? "bg-gray-800 text-gray-100 hover:bg-gray-700 border-gray-700"
            : "bg-white-200 text-gray-700 border border-gray-200 shadow-md"
        }`}
        onClick={toggleTheme}
      >
        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        <div
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
        >
          <div
            className={`space-y-8 ${
              isDarkMode ? "text-gray-100" : "text-gray-900"
            }`}
          >
            <div className="space-y-4">
              <div
                className={`flex items-center space-x-2 mb-4 ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <Calendar size={16} />
                <span className="text-sm">Available for new projects.</span>
              </div>
              <h1 className="text-5xl md:text-5xl font-bold leading-tight">
                Hi, I'm{" "}
                <span
                  className={`bg-clip-text text-transparent font-extrabold transition-all duration-300 ${
                    isDarkMode
                      ? "bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500"
                      : "bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400"
                  }`}
                >
                  Mohamed Amine Zalila
                </span>
              </h1>
              <p
                className={`text-xl md:text-2xl leading-relaxed ${
                  isDarkMode ? "text-gray-200" : "text-gray-700"
                }`}
              >
                {" "}
                Junior Software Engineer passionate about crafting seamless web
                experiences.
              </p>
              <p
                className={`text-base md:text-lg leading-relaxed ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                I craft modern, scalable web applications using cutting-edge
                technologies. From concept to deployment, I bring ideas to life
                with clean, efficient code and a keen eye for design.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="/Mohamed_Amine_Zalila_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 ${
                  isDarkMode
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                <Download size={16} />
                <span>Download CV</span>
              </a>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/MohamedAmineZalila"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-xl transition-all duration-300 transform hover:scale-110 ${
                    isDarkMode
                      ? "bg-gray-800 text-gray-100 hover:bg-gray-700 border border-gray-700"
                      : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 shadow-md"
                  }`}
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/medamine-zalila/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-xl transition-all duration-300 transform hover:scale-110 ${
                    isDarkMode
                      ? "bg-gray-800 text-gray-100 hover:bg-gray-700 border border-gray-700"
                      : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 shadow-md"
                  }`}
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
            <div
              className={`grid grid-cols-3 gap-8 pt-8 border-t ${
                isDarkMode ? "text-gray-700" : "text-gray-200"
              }`}
            >
              <div className="text-center">
                <div
                  className={`text-3xl font-bold ${
                    isDarkMode ? "text-blue-400" : "text-blue-600"
                  }`}
                >
                  20+
                </div>
                <div
                  className={`text-sm font-bold ${
                    isDarkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Projects Completed
                </div>
              </div>
              <div className="text-center">
                <div
                  className={`text-3xl font-bold ${
                    isDarkMode ? "text-blue-400" : "text-blue-600"
                  }`}
                >
                  4+
                </div>
                <div
                  className={`text-sm font-bold ${
                    isDarkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div
                  className={`text-3xl font-bold ${
                    isDarkMode ? "text-blue-400" : "text-blue-600"
                  }`}
                >
                  15+
                </div>
                <div
                  className={`text-sm font-bold ${
                    isDarkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Clients Satisfied
                </div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="relative transform rotate-6 hover:rotate-0 transition-all duration-700 hover:scale-105">
              <div
                className={`p-8 rounded-3xl border transition-all duration-300`}
              >
                <div
                  className={`w-80 h-96 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden ${
                    isDarkMode ? "text-gray-700" : "text-gray-100"
                  }`}
                >
                  {/* my profile image container */}
                  <div className="relative w-full h-full">
                    <div className="absolute inset-4 rounded-xl overflow-hidden">
                      <img
                        src={Me}
                        alt="My photo"
                        className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent"></div>
                      <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
                      <div
                        className="absolute bottom-8 left-6 w-2 h-1 bg-purple-400 rounded-full animate-ping opacity-40"
                        style={{ animationDelay: "1s" }}
                      ></div>
                      <div
                        className="absolute top-12 left-8 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce opacity-50"
                        style={{ animationDelay: "2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
                {/* Profile details */}
                <div
                  className={`text-center space-y-2 ${
                    isDarkMode ? "text-gray-100" : "text-gray-900"
                  }`}
                >
                  <h3 className={`text-xl font-bold`}>
                    Junior Software Engineer
                  </h3>
                  <p>Specialized in React and Node JS</p>
                  <div className="flex justify-center items-center space-x-2 pt-4">
                    <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                    <span
                      className={`text-sm ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Available for hire. 👋
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`absolute -top-6 -left-6 p-4 rounded-2xl transform rotate-12 animate-bounce hover:animate-none hover:scale-125 transition-all duration-300 ${
                isDarkMode ? "bg-blue-600" : "bg-blue-500"
              }`}
            >
              <Code size={24} className="text-white" />
            </div>
            <div
              className={`absolute -bottom-6 -right-6 p-4 rounded-2xl transform -rotate-12 animate-bounce hover:animate-none hover:scale-125 transition-all duration-300 ${
                isDarkMode ? "bg-purple-600" : "bg-purple-500"
              }`}
              style={{ animationDelay: "1s" }}
            >
              <Briefcase size={24} className="text-white" />
            </div>
            <div
              className={`absolute top-1/4 -right-4 p-3 rounded-xl transform rotate-45 animate-pulse ${
                isDarkMode ? "bg-green-600" : "bg-gray-500"
              }`}
            >
              <Star size={16} className="text-white" />
            </div>
            <div
              className={`absolute bottom-1/4 -left-4 p-3 rounded-xl transform -rotate-45 animate-pulse ${
                isDarkMode ? "bg-pink-600" : "bg-pink-500"
              }`}
            >
              <Rocket size={16} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

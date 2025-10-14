import { Award, Briefcase, Code, Rocket, Star, User } from "lucide-react";
import GitHubCalendar from "react-github-calendar";
import Testimonials from "./Testimonials";
import "../styles/About.css";
import React from "react";

function About({ themeClasses, isDarkMode, isVisible }) {
  return (
    <div className={`space-y-8`}>
      <div className="grid md:grid-cols-3 gap-6">
        <div
          className={`${themeClasses.cardBg} rounded-2xl p-6 shadow-lg ${themeClasses.border} border transform hover:scale-105 transition-all duration-300`}
          style={{ animationDelay: "0.1s" }}
        >
          <div className="text-center">
            <Rocket
              size={32}
              className={`mx-auto mb-3 ${
                isDarkMode ? "text-blue-400" : "text-blue-500"
              }`}
            />
            <h3 className={`text-xl font-bold mb-2 ${themeClasses.text}`}>
              Experience
            </h3>
            <p className="text-3xl font-bold text-blue-500 mb-1">4+</p>
            <p className={`text-sm ${themeClasses.textMuted}`}>
              Years of Development
            </p>
          </div>
        </div>

        <div
          className={`rounded-2xl p-6 shadow-lg border transform hover:scale-105 transition-all duration-300 ${themeClasses.cardBg} ${themeClasses.border}`}
          style={{ animationDelay: "0.2s" }}
        >
          <div className="text-center">
            <Briefcase
              size={32}
              className={`mx-auto mb-3 ${
                isDarkMode ? "text-green-400" : "text-green-500"
              }`}
            />
            <h3 className={`text-xl font-bold mb-2 ${themeClasses.text}`}>
              Projects
            </h3>
            <p className="text-3xl font-bold text-blue-500 mb-1">20+</p>
            <p className={`text-sm ${themeClasses.textMuted}`}>
              Completed Successfully
            </p>
          </div>
        </div>

        <div
          className={` ${themeClasses.cardBg} ${themeClasses.border} rounded-2xl p-6 shadow-lg border transform hover:scale-105 transition-all duration-300`}
          style={{ animationDelay: "0.2s" }}
        >
          <div className="text-center">
            <Star
              size={32}
              className={`mx-auto mb-3 ${
                isDarkMode ? "text-yellow-400" : "text-yellow-500"
              }`}
            />
            <h3 className={`text-xl font-bold mb-2 ${themeClasses.text}`}>
              Rating
            </h3>
            <p className="text-3xl font-bold text-blue-500 mb-1">4.9</p>
            <p className={`text-sm ${themeClasses.textMuted}`}>
              Client Satisfaction
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div
          className={`rounded-2xl p-8 shadow-lg border transform hover:scale-105 transition-all duration-500 hover:shadow-2xl ${themeClasses.cardBg} ${themeClasses.border}`}
        >
          <h3
            className={`text-2xl font-bold mb-6 flex items-center ${themeClasses.text}`}
          >
            <User className="mr-3 text-blue-500" size={24} />
            About Me
          </h3>
          <div
            className={`space-y-4 leading-relaxed ${themeClasses.textSecondary}`}
          >
            <p className="transform hover:translate-x-2 transition-all duration-300">
              {" "}
              I'm a passionate full-stack developer with over 4 years of
              experience crafting digital experiences that make a difference. My
              journey began with curiosity about how the web works, and it has
              evolved into a love affair with creating elegant, efficient
              solutions to complex problems.
            </p>
            <p className="transform hover:translate-x-2 transition-all duration-300">
              I specialize in modern web technologies and have a keen eye for
              user experience. Whether it's building scalable backend systems or
              crafting pixel-perfect frontends, I approach every project with
              enthusiasm and attention to details.
            </p>
          </div>
        </div>
        <div
          className={`rounded-2xl p-8 shadow-lg border transform hover:scale-105 transition-all duration-500 hover:shadow-2xl ${themeClasses.cardBg} ${themeClasses.border}`}
        >
          <h3
            className={`text-2xl font-bold mb-6 flex items-center ${themeClasses.text}`}
          >
            <Rocket
              className="mr-3 text-purple-500 animate-pulse"
              size={24}
              style={{ animationDelay: "0.5s" }}
            />
            What I Do
          </h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3 transform hover:translate-x-2 transition-all duration-300">
              <div
                className={`p-2 rounded-lg hover:scale-110 transition-all duration-300 ${
                  isDarkMode ? "bg-blue-900" : "bg-blue-100"
                }`}
              >
                <Code
                  className={`${
                    isDarkMode ? "text-blue-400" : "text-blue-600"
                  }`}
                  size={16}
                />
              </div>
              <div>
                <h4 className={`font-semibold ${themeClasses.text}`}>
                  Full Stack Development
                </h4>
                <p className={`text-sm ${themeClasses.textMuted}`}>
                  End-to-end web application development.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3 transform hover:translate-x-2 transition-all duration-300">
              <div
                className={`p-2 rounded-lg hover:scale-110 transition-all duration-300
                ${isDarkMode ? "bg-green-900" : "bg-green-100"}`}
                style={{ transitionDelay: "0.1s" }}
              >
                <Star
                  className={`${
                    isDarkMode ? "text-green-400" : "text-green-600"
                  }`}
                  size={16}
                />
              </div>
              <div>
                <h4 className={`font-semibold ${themeClasses.text}`}>
                  UI/UX Design
                </h4>
                <p className={`text-sm ${themeClasses.textMuted}`}>
                  Creating intuitive user interfaces.
                </p>
              </div>
            </div>
            <div
              className="flex items-start space-x-3 transform hover:translate-x-2 transition-all duration-300"
              style={{ transitionDelay: "0.2s" }}
            >
              <div
                className={`p-2 rounded-lg hover:scale-110 transition-all duration-300
                ${isDarkMode ? "bg-purple-900" : "bg-purple-100"}`}
              >
                <Award
                  className={`${
                    isDarkMode ? "text-purple-400" : "text-purple-600"
                  }`}
                  size={16}
                />
              </div>

              <div>
                <h4 className={`font-semibold ${themeClasses.text}`}>
                  Freelancing
                </h4>
                <p className={`text-sm ${themeClasses.textMuted}`}>
                  Delivering tailored software solutions for clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimonials themeClasses={themeClasses} isDarkMode={isDarkMode} />
      <div
        className={`rounded-2xl p-4 shadow-lg border transform hover:scale-105 transition-all duration-500 hover:shadow-2xl ${themeClasses.cardBg} ${themeClasses.border}`}
      >
        <h3
          className={`text-2xl font-bold mb-6 flex items-center ${themeClasses.text}`}
        >
          <Code className="mr-3 text-blue-500 animate-pulse" size={24} />
          My Coding Adventure
        </h3>

        <a
          href="https://github.com/MohamedAmineZalila"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={isDarkMode ? "dark-mode" : ""}>
            <GitHubCalendar
              username="MohamedAmineZalila"
              blockSize={15}
              blockMargin={4}
              fontSize={16}
              colorScheme={isDarkMode ? "dark" : "light"}
              theme={{
                light: ["#d1fae5", "#10b981", "#059669", "#047857", "#065f46"],
                dark: ["#064e3b", "#065f46", "#047857", "#059669", "#10b981"],
              }}
            />
          </div>
        </a>
      </div>
    </div>
  );
}

export default About;

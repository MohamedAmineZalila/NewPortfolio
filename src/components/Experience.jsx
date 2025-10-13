import React from "react";
import { experience } from "../data/data";

function Experience({ themeClasses, isDarkMode }) {
  const getBadgeClasses = () =>
    isDarkMode ? "bg-blue-900 text-blue-200" : "bg-blue-100 text-blue-800";

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className={`text-3xl font-bold mb-4 ${themeClasses.text}`}>
          Experience
        </h2>
        <p className={`text-lg ${themeClasses.textSecondary}`}>
          My professional journey
        </p>
      </div>
      <div className="space-y-4">
        {experience.map((exp, index) => {
          const ExpIcon = exp.icon;
          return (
            <div
              key={index}
              className={`rounded-2xl p-8 shadow-lg border ${themeClasses.cardBg} ${themeClasses.border}`}
            >
              <div className="flex flex-col lg:flex-row gap-6 items-center">
                {/* Left side: details */}
                <div className="flex-1">
                  <div className="flex items-start mb-4">
                    <ExpIcon
                      size={32}
                      className={`mr-4 mt-1 ${
                        isDarkMode ? "text-blue-400" : "text-blue-500"
                      }`}
                    />
                  </div>
                  <h3 className={`text-xl font-bold mb-1 ${themeClasses.text}`}>
                    {exp.role}
                  </h3>
                  <p className="font-semibold text-blue-500 mb-2">
                    {exp.company}
                  </p>
                  <p className={`text-sm mb-2 ${themeClasses.textSecondary}`}>
                    {exp.year} · {exp.location}
                  </p>
                  <p
                    className={`leading-relaxed mb-4 ${themeClasses.textSecondary}`}
                  >
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills?.map((skill, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${getBadgeClasses()}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right side: company logo with hover animation */}
                {exp.logo && (
                  <div className="lg:w-48 flex justify-center items-center">
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-32 h-32 object-contain rounded-xl transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2"
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Experience;

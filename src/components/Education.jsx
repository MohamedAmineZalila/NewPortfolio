import { Award } from "lucide-react";
import React from "react";
import { education } from "../data/data";

function Education({ themeClasses, isDarkMode }) {
  const getBadgeClasses = (type) => {
    switch (type) {
      case "year":
        return isDarkMode
          ? "bg-gradient-to-r from-blue-600 to-purple-700 text-white"
          : "bg-gradient-to-r from-blue-400 to-purple-500 text-white";
      case "gpa":
        return isDarkMode
          ? "bg-green-900 text-green-200"
          : "bg-green-100 text-green-800";
      case "certificate":
        return isDarkMode
          ? "bg-blue-900 text-blue-200"
          : "bg-blue-100 text-blue-800";
      case "status":
        return isDarkMode
          ? "bg-purple-900 text-purple-200"
          : "bg-purple-100 text-purple-800";
      case "achievement":
        return isDarkMode
          ? "bg-yellow-900 text-yellow-200"
          : "bg-yellow-100 text-yellow-800";
      default:
        return "";
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className={`text-3xl font-bold mb-4 ${themeClasses.text}`}>
          Education & Certifications
        </h2>
        <p className={`text-lg ${themeClasses.textSecondary}`}>
          My academic journey and achievements
        </p>
      </div>

      <div className="space-y-4">
        {education.map((edu, index) => {
          const EduIcon = edu.icon;
          return (
            <div
              key={`edu-${index}-${edu.institution}`} // fix i added a unique key
              className={`rounded-2xl p-8 shadow-lg border ${themeClasses.cardBg} ${themeClasses.border}`}
            >
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-start mb-4">
                    <EduIcon
                      size={32}
                      className={`mr-4 mt-1 ${
                        isDarkMode ? "text-blue-400" : "text-blue-500"
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`text-xl font-bold mb-2 ${themeClasses.text}`}
                    >
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-blue-500 font-semibold mb-2">
                      {edu.institution}
                    </p>
                    <p
                      className={`leading-relaxed mb-4 ${themeClasses.textSecondary}`}
                    >
                      {edu.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4
                      className={`font-semibold flex items-center ${themeClasses.text}`}
                    >
                      <Award size={18} className="mr-2 text-yellow-500" />
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achiev, i) => (
                        <span
                          key={`achiev-${index}-${i}-${achiev}`} // fix i added a unique key for achievements
                          className={`px-3 py-1 rounded-full text-sm font-medium ${getBadgeClasses(
                            "achievement"
                          )}`}
                        >
                          {achiev}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:w-48 space-y-3">
                  <div
                    className={`px-4 py-2 rounded-full text-center font-medium ${getBadgeClasses(
                      "year"
                    )}`}
                  >
                    {edu.year}
                  </div>

                  {edu.gpa && (
                    <div
                      key={`gpa-${index}`}
                      className={`px-4 py-2 rounded-full text-center font-medium ${getBadgeClasses(
                        "gpa"
                      )}`}
                    >
                      GPA: {edu.gpa}
                    </div>
                  )}

                  {edu.certificate && (
                    <div
                      key={`cert-${index}`}
                      className={`px-4 py-2 rounded-full text-center font-medium text-sm ${getBadgeClasses(
                        "certificate"
                      )}`}
                    >
                      {edu.certificate}
                    </div>
                  )}

                  <div
                    key={`status-${index}`}
                    className={`px-4 py-2 rounded-full text-center font-medium text-sm ${getBadgeClasses(
                      "status"
                    )}`}
                  >
                    {edu.status}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Education;

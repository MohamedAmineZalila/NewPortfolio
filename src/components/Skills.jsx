import React from "react";
import { skills } from "../data/data";

function Skills({ themeClasses, isDarkMode }) {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className={`text-3xl font-bold ${themeClasses.text}`}>
          Technical Skills
        </h2>
        <p className={`text-lg ${themeClasses.textSecondary}`}>
          Technologies and Tools I work with
        </p>
      </div>

      <div className="space-y-8">
        {skills.map((skillGroup, index) => {
          const SkillIcon = skillGroup.icon;
          return (
            <div
              key={`group-${index}-${skillGroup.category}`} // ✅ unique key for each group
              className={`rounded-2xl p-8 shadow-lg border ${themeClasses.cardBg} ${themeClasses.border}`}
            >
              <div className="flex items-center mb-4">
                <SkillIcon
                  size={32}
                  className={`mr-4 ${
                    isDarkMode ? "text-blue-400" : "text-blue-500"
                  }`}
                />
                <h3 className={`text-2xl font-bold ${themeClasses.text}`}>
                  {skillGroup.category}
                </h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillGroup.items.map((skill, skillIndex) => {
                  const SkillItemIcon = skill.icon;
                  return (
                    <div
                      key={`skill-${index}-${skillIndex}-${skill.name}`} // ✅ unique key for each skill
                      className={`p-4 rounded-xl transition-all duration-300 ${themeClasses.hover}`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <SkillItemIcon
                            size={20}
                            className={`${
                              isDarkMode ? "text-blue-400" : "text-blue-500"
                            }`}
                          />
                          <span
                            className={`font-semibold ${themeClasses.text}`}
                          >
                            {skill.name}
                          </span>
                        </div>
                        <span
                          className={`text-sm font-medium ${themeClasses.textMuted}`}
                        >
                          {skill.level}%
                        </span>
                      </div>

                      <div
                        className={`w-full rounded-full h-2 ${themeClasses.progressBg}`}
                      >
                        <div
                          className={`bg-gradient-to-r h-2 rounded-full transition-all duration-1000 ${skillGroup.color}`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;

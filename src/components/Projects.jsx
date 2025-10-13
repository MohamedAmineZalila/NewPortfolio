import { ExternalLink, Github } from "lucide-react";
import React from "react";
import { projects } from "../data/data";

function Projects({ themeClasses, isDarkMode }) {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className={`text-3xl font-bold mb-4 ${themeClasses.text}`}>
          Featured Projects
        </h2>
        <p className={`text-lg ${themeClasses.textSecondary}`}>
          {" "}
          Some of my recent work and contributions
        </p>
      </div>

      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project, index) => {
          const ProjectIcon = project.icon;
          return (
            <div
              key={project.title}
              className={`rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border overflow-hidden group ${themeClasses.cardBg} ${themeClasses.border}`}
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
                />

                <div className="absolute top-4 right-4 flex space-x-2">
                  <ProjectIcon
                    size={32}
                    className="text-white drop-shadow-lg"
                  />
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end z-10">
                  <div className="flex flex-col space-y-2">
                    <span className="bg-gray-800/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                        project.status === "Live"
                          ? "bg-green-500/90 text-white"
                          : project.status === "Completed"
                          ? "bg-amber-400/90 text-white" // completed
                          : "bg-teal-400/90 text-white" // in dev
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <div className="flex space-x-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 backdroup-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                    >
                      <ExternalLink size={16} />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 backdroup-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 ${themeClasses.text}`}>
                  {project.title}
                </h3>
                <p
                  className={`mb-4 leading-relaxed text-sm ${themeClasses.textSecondary}`}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => {
                    return (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 ${
                          isDarkMode
                            ? "bg-gray-700 text-gray-300"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;

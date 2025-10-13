import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "./components/Hero";
import TabNavigation from "./components/TabNavigation";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

function App() {
  const [activeTab, setActiveTab] = useState("about");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useState(() => {
    setIsVisible(true);
    setIsDarkMode(true);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const themeClasses = {
    background: isDarkMode ? "bg-gray-900" : "bg-gray-50",
    cardBg: isDarkMode ? "bg-gray-800" : "bg-white",
    text: isDarkMode ? "text-gray-100" : "text-gray-900",
    textSecondary: isDarkMode ? "text-gray-300" : "text-gray-600",
    textMuted: isDarkMode ? "text-gray-400" : "text-gray-500",
    border: isDarkMode ? "border-gray-700" : "border-gray-200",
    hover: isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-50",
    progressBg: isDarkMode ? "bg-gray-800" : "bg-gray-200",
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <About
            themeClasses={themeClasses}
            isDarkMode={isDarkMode}
            isVisible={isVisible}
          />
        );
      case "experience":
        return (
          <Experience themeClasses={themeClasses} isDarkMode={isDarkMode} />
        );
      case "skills":
        return <Skills themeClasses={themeClasses} isDarkMode={isDarkMode} />;
      case "education":
        return (
          <Education themeClasses={themeClasses} isDarkMode={isDarkMode} />
        );
      case "projects":
        return <Projects themeClasses={themeClasses} isDarkMode={isDarkMode} />;
      case "contact":
        return <Contact themeClasses={themeClasses} />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${themeClasses.background}`}
    >
      {/* <Hero / showcase */}
      <Hero
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        isVisible={isVisible}
      />
      <TabNavigation
        themeClasses={themeClasses}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div
          className={`${themeClasses.cardBg}/60 backdrop-blur-sm rounded-3xl shadow-xl border transition-colors duration-300 p-10 ${themeClasses.border}`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {renderTabContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;

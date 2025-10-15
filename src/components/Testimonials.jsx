import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import Avatar1 from "../assets/Avatar1.png";
import Avatar2 from "../assets/Avatar2.png";
import Avatar3 from "../assets/Avatar3.png";

function Testimonials({ themeClasses, isDarkMode }) {
  const testimonials = [
    {
      name: "C M Nafi",
      role: "Analyst at Dasseti",
      text: "Amine is exceptional—collaborative, easy to work with, and an incredibly talented professional with a passion for development. He consistently brought discipline, focus, and outstanding results to his internship projects, even when faced with tight deadlines, handling each challenge with grace and confidence.",
      image: Avatar2,
    },
    {
      name: "Hamdi Jdidi",
      role: "IT Project Manager at DevIt",
      text: "Mohamed Amine is extremely punctual, organized, and demonstrates remarkable talent in his field. His ability to manage tasks efficiently and solve problems makes him a valuable asset. I am confident that he will excel in any role he takes on.",
      image: Avatar1,
    },
    {
      name: "Eya Tekaya",
      role: "My Fiancée",
      text: "Writes code smoother than my love letters (and that’s saying something)… and still somehow remembers my birthday. Absolute legend. Hire him at your own risk!",
      image: Avatar3,
    },
  ];

  const [index, setIndex] = useState(0);
  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const { name, role, text, image } = testimonials[index];

  return (
    <div className="text-center mb-20 px-4 md:px-0">
      <h2 className={`text-3xl font-bold mb-8 ${themeClasses.text}`}>
        Testimonials
      </h2>

      <div className="grid md:grid-cols-2 gap-8 justify-center">
        <div className={`md:col-span-2`}>
          <div
            className={`relative w-full p-8 rounded-2xl shadow-lg ${themeClasses.cardBg} ${themeClasses.border} transition-all duration-300`}
          >
            <Quote
              className={`absolute top-4 left-4 ${
                isDarkMode ? "text-gray-500" : "text-gray-400"
              }`}
              size={24}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={image}
                  alt={name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-gray-200 dark:border-gray-700"
                />
                <p
                  className={`text-lg italic mb-4 ${themeClasses.textSecondary}`}
                >
                  "{text}"
                </p>
                <h3 className={`font-semibold text-xl ${themeClasses.text}`}>
                  {name}
                </h3>
                <p className={`text-gray-500 dark:text-gray-400`}>{role}</p>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center mt-6 space-x-4">
              <button
                onClick={prev}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  isDarkMode
                    ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                ‹
              </button>
              <button
                onClick={next}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  isDarkMode
                    ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

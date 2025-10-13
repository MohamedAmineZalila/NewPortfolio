import { Linkedin, Mail, MapPin } from "lucide-react";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

function Contact({ themeClasses, isDarkMode }) {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_af11gxb",
        "template_dactace",
        form.current,
        "esU_Umk83-qcT4DWB"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true);
          setIsSending(false);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setIsSending(false);
        }
      );
  };
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className={`text-3xl font-bold mb-4 ${themeClasses.text}`}>
          Let's Work Together.
        </h2>
        <p className={`${themeClasses.textSecondary} text-lg `}>
          Ready to start your next project? Get in touch!
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div
            className={`rounded-2xl p-6 shadow-lg border group hover:shadow-xl transition-all duration-300 ${themeClasses.cardBg} ${themeClasses.border}`}
          >
            <div className="flex items-center space-x-4">
              <div
                className={`p-3 rounded-xl group-hover:scale-110 transition-all duration-300 ${
                  isDarkMode ? "bg-blue-900/40" : "bg-blue-50"
                }`}
              >
                <Mail
                  size={24}
                  className={`${
                    isDarkMode ? "text-blue-400" : "text-blue-500"
                  }`}
                />
              </div>

              <div>
                <h3 className={`font-bold ${themeClasses.text}`}>Email</h3>
                <p className={`${themeClasses.textSecondary}`}>
                  medamine.zalila@gmail.com
                </p>
                <p className={`text-sm ${themeClasses.textMuted}`}>
                  I'll respond within 24 hours.
                </p>
              </div>
            </div>
          </div>
          <div
            className={`rounded-2xl p-6 shadow-lg border group hover:shadow-xl transition-all duration-300 ${themeClasses.cardBg} ${themeClasses.border}`}
          >
            <div className="flex items-center space-x-4">
              <div
                className={`p-3 rounded-xl group-hover:scale-110 transition-all duration-300 ${
                  isDarkMode ? "bg-green-900/40" : "bg-green-50"
                }`}
              >
                <Linkedin
                  size={24}
                  className={`${
                    isDarkMode ? "text-green-400" : "text-green-500"
                  }`}
                />
              </div>
              <div>
                <h3 className={`font-bold ${themeClasses.text}`}>LinkedIn</h3>
                <p className={`${themeClasses.textSecondary}`}>
                  in/medamine-zalila/
                </p>
                <p className={`text-sm ${themeClasses.textMuted}`}>
                  Let's connect!
                </p>
              </div>
            </div>
          </div>
          <div
            className={`rounded-2xl p-6 shadow-lg border group hover:shadow-xl transition-all duration-300 ${themeClasses.cardBg} ${themeClasses.border}`}
          >
            <div className="flex items-center space-x-4">
              <div
                className={`p-3 rounded-xl group-hover:scale-110 transition-all duration-300 ${
                  isDarkMode ? "bg-purple-900/40" : "bg-purple-50"
                }`}
              >
                <MapPin
                  size={24}
                  className={`${
                    isDarkMode ? "text-purple-400" : "text-purple-500"
                  }`}
                />
              </div>
              <div>
                <h3 className={`font-bold ${themeClasses.text}`}>Location</h3>
                <p className={`${themeClasses.textSecondary}`}>Tunis, Sousse</p>
                <p className={`text-sm ${themeClasses.textMuted}`}>
                  Available for remote work.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`rounded-2xl shadow-lg p-8 border ${themeClasses.cardBg} ${themeClasses.border}`}
        >
          <h3 className={`text-xl font-bold mb-6 ${themeClasses.text}`}>
            Send a Message
          </h3>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label
                className={`block text-sm font-semibold mb-2 ${themeClasses.text}`}
              >
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${themeClasses.text} ${themeClasses.cardBg} ${themeClasses.border}`}
              />
            </div>

            <div>
              <label
                className={`block text-sm font-semibold mb-2 ${themeClasses.text}`}
              >
                Your Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="you.email@example.com"
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${themeClasses.text} ${themeClasses.cardBg} ${themeClasses.border}`}
              />
            </div>

            <div>
              <label
                className={`block text-sm font-semibold mb-2 ${themeClasses.text}`}
              >
                Your Message
              </label>
              <textarea
                name="message"
                required
                placeholder="Tell me about your project..."
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${themeClasses.text} ${themeClasses.cardBg} ${themeClasses.border}`}
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold transform hover:scale-105 shadow-lg"
            >
              {isSending
                ? "Sending..."
                : isSent
                ? "Message Sent ✅"
                : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

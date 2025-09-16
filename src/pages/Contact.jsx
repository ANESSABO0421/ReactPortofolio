import React, { useContext, useRef, useState } from "react";
import { ThemeContext } from "../App";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const Contact = () => {
  const { darkMode } = useContext(ThemeContext);
  const formRef = useRef();
  const [success, setSuccess] = useState(false);

  const sentEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1ujloms",
        "template_vw9xwq5",
        formRef.current,
        "dtWkdo4Xe4hk2mNM4"
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setSuccess(true);
          formRef.current.reset();
          setTimeout(() => setSuccess(false), 5000);
        },
        (error) => {
          console.error("Email error:", error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className={`min-h-[calc(100vh-4rem)] md:min-h-screen flex flex-col justify-start items-center py-8 sm:py-8 px-4 ${
        darkMode ? "bg-[#151E30] text-white" : "bg-[#E6F2FF] text-gray-900"
      }`}
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8 sm:mb-10"
      >
        Contact Me
      </motion.h1>

      <motion.form
        ref={formRef}
        onSubmit={sentEmail}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className={`w-full max-w-lg md:max-w-xl p-6 sm:p-8 rounded-3xl shadow-2xl backdrop-blur-md ${
          darkMode ? "bg-gray-800/80" : "bg-white/70"
        }`}
        autoComplete="off"
      >
        {/* Name */}
        <input
          type="text"
          name="name"
          id="name"
          required
          placeholder="Your Name"
          autoComplete="off"
          className={`w-full mb-4 sm:mb-6 px-3 sm:px-4 py-2 sm:py-3 rounded-xl border-2 text-base outline-none transition-all duration-300 ${
            darkMode
              ? "bg-gray-900 border-gray-600 text-white focus:border-yellow-400"
              : "bg-white border-gray-300 text-gray-900 focus:border-purple-500"
          }`}
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="Your Email"
          autoComplete="off"
          className={`w-full mb-4 sm:mb-6 px-3 sm:px-4 py-2 sm:py-3 rounded-xl border-2 text-base outline-none transition-all duration-300 ${
            darkMode
              ? "bg-gray-900 border-gray-600 text-white focus:border-yellow-400"
              : "bg-white border-gray-300 text-gray-900 focus:border-purple-500"
          }`}
        />

        {/* Message */}
        <textarea
          name="message"
          id="message"
          required
          placeholder="Your Message"
          rows={5}
          autoComplete="off"
          className={`w-full mb-4 sm:mb-6 px-3 sm:px-4 py-2 sm:py-3 rounded-xl border-2 text-base resize-none outline-none transition-all duration-300 ${
            darkMode
              ? "bg-gray-900 border-gray-600 text-white focus:border-yellow-400"
              : "bg-white border-gray-300 text-gray-900 focus:border-purple-500"
          }`}
        ></textarea>

        {/* Submit button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-2 sm:py-3 rounded-xl shadow-lg transition-all"
        >
          Send Message
        </motion.button>

        {success && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-green-500 font-medium text-center"
          >
            ✔ Message sent successfully!
          </motion.p>
        )}
      </motion.form>
    </section>
  );
};

export default Contact;
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
    <div
      className={`min-h-screen flex flex-col justify-center items-center py-10 px-4 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-r from-blue-100 to-purple-200 text-gray-900"
      }`}
    >
      <section id="contact">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-center mb-10"
        >
          Contact Me
        </motion.h1>

        <motion.form
          ref={formRef}
          onSubmit={sentEmail}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className={`w-full max-w-xl p-8 rounded-3xl shadow-2xl backdrop-blur-md ${
            darkMode ? "bg-gray-800/80" : "bg-white/70"
          }`}
        >
          <div className="relative mb-6">
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder=" "
              className={`peer w-full px-4 py-3 rounded-xl border-2 ${
                darkMode
                  ? "border-gray-600 bg-gray-900 text-white focus:border-blue-400"
                  : "border-gray-300 bg-white text-gray-900 focus:border-purple-500"
              } outline-none transition`}
            />
            <label
              htmlFor="name"
              className={`absolute left-4 top-3 text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm transition-all`}
            >
              Your Name
            </label>
          </div>

          <div className="relative mb-6">
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder=" "
              className={`peer w-full px-4 py-3 rounded-xl border-2 ${
                darkMode
                  ? "border-gray-600 bg-gray-900 text-white focus:border-blue-400"
                  : "border-gray-300 bg-white text-gray-900 focus:border-purple-500"
              } outline-none transition`}
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-3 text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm transition-all"
            >
              Your Email
            </label>
          </div>

          <div className="relative mb-6">
            <textarea
              name="message"
              id="message"
              required
              placeholder=" "
              rows={5}
              className={`peer w-full px-4 py-3 rounded-xl border-2 resize-none ${
                darkMode
                  ? "border-gray-600 bg-gray-900 text-white focus:border-blue-400"
                  : "border-gray-300 bg-white text-gray-900 focus:border-purple-500"
              } outline-none transition`}
            ></textarea>
            <label
              htmlFor="message"
              className="absolute left-4 top-3 text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm transition-all"
            >
              Your Message
            </label>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-3 rounded-xl shadow-lg transition-all"
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
    </div>
  );
};

export default Contact;

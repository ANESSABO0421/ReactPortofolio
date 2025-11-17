import React, { useContext, useRef, useState, useEffect } from "react";
import { ThemeContext } from "../App";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const { darkMode } = useContext(ThemeContext);
  const formRef = useRef();
  const [success, setSuccess] = useState(false);
  const [stars, setStars] = useState([]);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_1ujloms",
        "template_vw9xwq5",
        formRef.current,
        "dtWkdo4Xe4hk2mNM4"
      )
      .then(
        () => {
          setSuccess(true);
          formRef.current.reset();
        },
        (error) => {
          console.error("Email error:", error.text);
        }
      );
  };

  // ⭐ Floating Stars
  useEffect(() => {
    const newStars = Array.from({ length: 35 }, (_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      opacity: Math.random() * 0.8 + 0.2,
      duration: Math.random() * 6 + 4,
    }));
    setStars(newStars);
  }, []);

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col justify-center items-center 
                 overflow-hidden bg-[#0d0d0d] py-20 px-4 sm:px-8 md:px-16"
    >
      {/* 🌐 EXACT HOME GRID BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 w-[250vw] h-[250vh]
                     -translate-x-1/2 -translate-y-1/2 -rotate-[15deg] opacity-[0.13]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)
            `,
            backgroundSize: "3rem 3rem",
            animation: "gridMovement 200s linear infinite",
          }}
        ></div>

        <style>
          {`
            @keyframes gridMovement {
              0% {
                transform: translate(-50%, -50%) rotate(-15deg) translate(0, 0);
              }
              100% {
                transform: translate(-50%, -50%) rotate(-15deg) translate(-100rem, 100rem);
              }
            }

            @keyframes starFloat {
              0% { transform: translateY(0px); opacity: 0.4; }
              50% { transform: translateY(-10px); opacity: 1; }
              100% { transform: translateY(0px); opacity: 0.4; }
            }
          `}
        </style>
      </div>

      {/* ⭐ Floating Stars */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {stars.map((star) => (
          <motion.span
            key={star.id}
            className="absolute bg-white rounded-full"
            style={{
              width: star.size,
              height: star.size,
              top: star.top,
              left: star.left,
              opacity: star.opacity,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* HEADER */}
      <motion.div
        className="text-center relative z-10 mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold 
                       bg-gradient-to-b from-gray-100 to-gray-400 bg-clip-text 
                       text-transparent drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]">
          CONTACT
        </h1>
        <p className="mt-3 text-gray-400 text-xs sm:text-sm tracking-[0.3em] uppercase">
          Let’s Create Something Cosmic
        </p>
      </motion.div>

      {/* FORM */}
      <motion.form
        ref={formRef}
        onSubmit={sendEmail}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl 
                   p-8 rounded-2xl backdrop-blur-lg border border-white/20 bg-black/70 
                   shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)] 
                   transition-all"
      >
        <label className="block text-gray-300 mb-2 text-sm font-medium">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          className="w-full mb-4 px-4 py-2 rounded-lg bg-transparent border border-gray-700 text-white 
                     placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-all"
          required
        />

        <label className="block text-gray-300 mb-2 text-sm font-medium">Email</label>
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          className="w-full mb-4 px-4 py-2 rounded-lg bg-transparent border border-gray-700 text-white 
                     placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-all"
          required
        />

        <label className="block text-gray-300 mb-2 text-sm font-medium">Message</label>
        <textarea
          name="message"
          placeholder="Write your message..."
          className="w-full h-32 mb-6 px-4 py-2 rounded-lg bg-transparent border border-gray-700 
                     text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 
                     transition-all resize-none"
          required
        ></textarea>

        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0,255,255,0.7)" }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full py-3 font-semibold text-lg text-black 
                     bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 rounded-xl 
                     shadow-[0_0_25px_rgba(0,255,255,0.5)] hover:shadow-[0_0_40px_rgba(0,255,255,0.8)] 
                     transition-all"
        >
          Send Message
        </motion.button>

        {success && (
          <p className="mt-4 text-center font-medium text-green-400">
            ✔ Message sent successfully!
          </p>
        )}
      </motion.form>
    </section>
  );
};

export default Contact;

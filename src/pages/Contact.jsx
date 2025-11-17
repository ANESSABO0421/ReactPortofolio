import React, { useRef, useState, useMemo, useCallback } from "react";
import emailjs from "@emailjs/browser";
import { motion, useReducedMotion } from "framer-motion";

const Contact = () => {
  const formRef = useRef();
  const prefersReducedMotion = useReducedMotion();
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const stars = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        size: Math.random() * 2 + 1,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        opacity: Math.random() * 0.8 + 0.2,
        duration: Math.random() * 6 + 4,
      })),
    []
  );

  const sendEmail = useCallback(
    (event) => {
      event.preventDefault();
      if (isSubmitting) return;

      setIsSubmitting(true);
      setStatus({ type: "idle", message: "" });

      emailjs
        .sendForm(
          "service_1ujloms",
          "template_vw9xwq5",
          formRef.current,
          "dtWkdo4Xe4hk2mNM4"
        )
        .then(() => {
          setStatus({
            type: "success",
            message: "Message sent successfully! I’ll get back shortly.",
          });
          formRef.current?.reset();
        })
        .catch((error) => {
          console.error("Email error:", error);
          setStatus({
            type: "error",
            message: "Something went wrong. Please try again later.",
          });
        })
        .finally(() => setIsSubmitting(false));
    },
    [isSubmitting]
  );

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="
        relative min-h-screen 
        flex flex-col justify-center items-center 
        overflow-hidden bg-[#0d0d0d] 
        py-20 px-4 sm:px-6 md:px-12 lg:px-20
      "
    >
      {/* 🌐 Background Grid */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="
            absolute top-1/2 left-1/2 
            w-[250vw] h-[250vh] 
            -translate-x-1/2 -translate-y-1/2 
            -rotate-[15deg] opacity-[0.13]
          "
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)
            `,
            backgroundSize: "3rem 3rem",
            animation: prefersReducedMotion ? "none" : "gridMovement 200s linear infinite",
          }}
        />

        <style>
          {`
            @keyframes gridMovement {
              0% { transform: translate(-50%, -50%) rotate(-15deg) translate(0, 0); }
              100% { transform: translate(-50%, -50%) rotate(-15deg) translate(-100rem, 100rem); }
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
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
        {stars.map((star) => (
          <span
            key={star.id}
            className="absolute bg-white rounded-full star-float"
            style={{
              width: star.size,
              height: star.size,
              top: star.top,
              left: star.left,
              opacity: star.opacity,
              animation: prefersReducedMotion ? "none" : `starFloat ${star.duration}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* HEADER */}
      <motion.div
        className="text-center relative z-10 mb-10 sm:mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h1
          id="contact-heading"
          className="
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold
            bg-gradient-to-b from-gray-100 to-gray-400 bg-clip-text 
            text-transparent drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]
          "
        >
          CONTACT
        </h1>

        <p
          className="
            mt-3 text-gray-400 
            text-[10px] sm:text-xs md:text-sm 
            tracking-[0.3em] uppercase
          "
        >
          Let’s Create Something Cosmic
        </p>
      </motion.div>

      {/* FORM */}
      <motion.form
        ref={formRef}
        onSubmit={sendEmail}
        aria-busy={isSubmitting}
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="
          relative z-10 w-full
          max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl
          p-6 sm:p-8 
          rounded-2xl backdrop-blur-lg border border-white/20 bg-black/70 
          shadow-[0_0_40px_rgba(255,255,255,0.1)]
          hover:shadow-[0_0_60px_rgba(255,255,255,0.2)] transition-all
        "
      >
        {/* NAME */}
        <label className="block text-gray-300 mb-2 text-sm" htmlFor="contact-name">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="contact-name"
          placeholder="Your name"
          className="
            w-full mb-4 px-4 py-2 text-sm sm:text-base 
            rounded-lg bg-transparent border border-gray-700 text-white 
            placeholder-gray-500 focus:outline-none focus:border-cyan-400 
            transition-all
          "
          autoComplete="name"
          required
        />

        {/* EMAIL */}
        <label className="block text-gray-300 mb-2 text-sm" htmlFor="contact-email">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="contact-email"
          placeholder="you@example.com"
          className="
            w-full mb-4 px-4 py-2 text-sm sm:text-base 
            rounded-lg bg-transparent border border-gray-700 text-white 
            placeholder-gray-500 focus:outline-none focus:border-cyan-400 
            transition-all
          "
          autoComplete="email"
          required
        />

        {/* MESSAGE */}
        <label className="block text-gray-300 mb-2 text-sm" htmlFor="contact-message">
          Message
        </label>
        <textarea
          name="message"
          id="contact-message"
          placeholder="Write your message..."
          className="
            w-full h-28 sm:h-32 md:h-40
            mb-6 px-4 py-2 text-sm sm:text-base
            rounded-lg bg-transparent border border-gray-700 text-white 
            placeholder-gray-500 focus:outline-none focus:border-cyan-400 
            transition-all resize-none
          "
          required
        ></textarea>

        {/* BUTTON */}
        <motion.button
          whileHover={
            prefersReducedMotion
              ? undefined
              : { scale: 1.02 }
          }
          whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
          type="submit"
          className="
            w-full py-2 sm:py-3 text-sm sm:text-lg font-semibold text-black 
            bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 rounded-xl 
            shadow-[0_0_25px_rgba(0,255,255,0.5)]
            hover:shadow-[0_0_40px_rgba(0,255,255,0.8)] transition-all
          "
          disabled={isSubmitting}
          aria-disabled={isSubmitting}
        >
          {isSubmitting ? "Sending…" : "Send Message"}
        </motion.button>

        {/* SUCCESS MESSAGE */}
        <p
          className={`mt-4 text-center text-sm sm:text-base font-medium ${
            status.type === "error"
              ? "text-red-400"
              : status.type === "success"
              ? "text-green-400"
              : "text-gray-400"
          }`}
          role="status"
          aria-live="polite"
        >
          {status.message || (isSubmitting ? "Sending your message…" : "\u00A0")}
        </p>
      </motion.form>
    </section>
  );
};

export default Contact;

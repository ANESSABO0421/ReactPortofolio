import React, { useRef, useState, useMemo, useCallback } from "react";
import emailjs from "@emailjs/browser";
import { motion, useReducedMotion } from "framer-motion";

const generateStars = () =>
  Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 2 + 1,
    top: Math.random() * 100,
    left: Math.random() * 100,
    opacity: Math.random() * 0.7 + 0.3,
    duration: Math.random() * 6 + 4,
  }));

const Contact = () => {
  const formRef = useRef();
  const prefersReducedMotion = useReducedMotion();
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const stars = useMemo(() => generateStars(), []);

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
            message: "Message sent successfully! I'll get back shortly.",
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
      className="relative min-h-screen bg-[#0d0d0d] text-white overflow-hidden flex items-center justify-center py-20"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* 🌐 GRID BACKGROUND - Same as Other Sections */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-[-50%] moving-grid"></div>
      </div>

      {/* 🌟 Floating Stars - Same as Other Sections */}
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
        {stars.map((star) => (
          <span
            key={star.id}
            className="absolute bg-white rounded-full star-float"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              top: `${star.top}%`,
              left: `${star.left}%`,
              opacity: star.opacity,
              animation: prefersReducedMotion ? "none" : `starFloat ${star.duration}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl px-6">
        {/* HEADER - Matching Home Section Style */}
        <motion.div
          className="relative z-10 mb-16 text-center"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h1
            id="contact-heading"
            className="text-white font-display mb-2 uppercase tracking-tighter leading-none text-7xl sm:text-7xl md:text-8xl lg:text-[8rem] xl:text-[10rem]"
            style={{ fontFamily: "Anton, sans-serif" }}
          >
            CONTACT
          </h1>
          <p className="mt-3 text-gray-400 uppercase text-xs tracking-[0.3em]">
            LET'S CREATE SOMETHING COSMIC
          </p>
        </motion.div>

        {/* PREMIUM FORM CONTAINER */}
        <div className="flex justify-center">
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            aria-busy={isSubmitting}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="
              w-full max-w-2xl
              bg-gradient-to-br from-[#111] to-[#0a0a0a]
              rounded-3xl
              border border-white/10
              p-8
              hover:border-white/20
              hover:shadow-2xl
              hover:shadow-cyan-500/10
              transition-all
              duration-500
              group
              relative
              overflow-hidden
            "
          >
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />

            <div className="relative z-10 space-y-6">
              {/* NAME FIELD */}
              <div className="space-y-2">
                <label
                  className="block text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300"
                  htmlFor="contact-name"
                >
                  Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  type="text"
                  name="name"
                  id="contact-name"
                  placeholder="Your name"
                  className="
                    w-full px-4 py-3
                    rounded-2xl
                    bg-gradient-to-br from-white/5 to-white/2
                    border border-white/10
                    text-white placeholder-gray-400
                    focus:outline-none focus:border-cyan-500/50
                    focus:bg-white/10
                    focus:shadow-lg
                    focus:shadow-cyan-500/20
                    transition-all
                    duration-300
                    backdrop-blur-sm
                  "
                  autoComplete="name"
                  required
                />
              </div>

              {/* EMAIL FIELD */}
              <div className="space-y-2">
                <label
                  className="block text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300"
                  htmlFor="contact-email"
                >
                  Email
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  type="email"
                  name="email"
                  id="contact-email"
                  placeholder="you@example.com"
                  className="
                    w-full px-4 py-3
                    rounded-2xl
                    bg-gradient-to-br from-white/5 to-white/2
                    border border-white/10
                    text-white placeholder-gray-400
                    focus:outline-none focus:border-cyan-500/50
                    focus:bg-white/10
                    focus:shadow-lg
                    focus:shadow-cyan-500/20
                    transition-all
                    duration-300
                    backdrop-blur-sm
                  "
                  autoComplete="email"
                  required
                />
              </div>

              {/* MESSAGE FIELD */}
              <div className="space-y-2">
                <label
                  className="block text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300"
                  htmlFor="contact-message"
                >
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  name="message"
                  id="contact-message"
                  placeholder="Tell me about your project..."
                  rows="6"
                  className="
                    w-full px-4 py-3
                    rounded-2xl
                    bg-gradient-to-br from-white/5 to-white/2
                    border border-white/10
                    text-white placeholder-gray-400
                    focus:outline-none focus:border-cyan-500/50
                    focus:bg-white/10
                    focus:shadow-lg
                    focus:shadow-cyan-500/20
                    transition-all
                    duration-300
                    backdrop-blur-sm
                    resize-none
                  "
                  required
                />
              </div>

              {/* SUBMIT BUTTON */}
              <motion.button
                type="submit"
                whileHover={prefersReducedMotion ? undefined : { scale: 1.05, y: -2 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                disabled={isSubmitting}
                aria-disabled={isSubmitting}
                className="
                  w-full py-4
                  rounded-2xl
                  bg-gradient-to-r from-cyan-500 to-blue-600
                  text-white font-semibold text-lg
                  border border-cyan-400/50
                  shadow-[0_0_30px_rgba(0,255,255,0.3)]
                  hover:shadow-[0_0_50px_rgba(0,255,255,0.5)]
                  hover:from-cyan-400 hover:to-blue-500
                  disabled:opacity-50 disabled:cursor-not-allowed
                  transition-all
                  duration-300
                  relative
                  overflow-hidden
                  group/btn
                "
              >
                {/* Button Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000" />

                <span className="relative z-10">
                  {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                </span>
              </motion.button>

              {/* STATUS MESSAGE */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`
                  text-center text-sm font-medium
                  ${status.type === "error"
                    ? "text-red-400"
                    : status.type === "success"
                      ? "text-green-400"
                      : "text-gray-400"
                  }
                `}
                role="status"
                aria-live="polite"
              >
                {status.message || (isSubmitting ? "Sending your message..." : "\u00A0")}
              </motion.p>
            </div>
          </motion.form>
        </div>
      </div>

      {/* CSS STYLES */}
      <style jsx>{`
        .moving-grid {
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px);
          background-size: 30px 30px;
          transform: rotate(-20deg) scale(1.5);
          animation: ${prefersReducedMotion ? 'none' : 'gridMove 20s linear infinite'};
        }
        
        @keyframes gridMove {
          0% {
            transform: rotate(-20deg) scale(1.5) translateX(0px) translateY(0px);
          }
          100% {
            transform: rotate(-20deg) scale(1.5) translateX(30px) translateY(30px);
          }
        }
        
        @keyframes starFloat {
          0% { transform: translateY(0px); opacity: 0.5; }
          50% { opacity: 1; transform: translateY(-10px); }
          100% { opacity: 0.5; transform: translateY(0px); }
        }
      `}</style>
    </section>
  );
};

export default Contact;
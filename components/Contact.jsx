"use client";

import { useRef, useState } from "react";
import AnimatedText from "./AnimatedText";
import MagneticButton from "./MagneticButton";
import { profile, emailjsConfig } from "@/lib/siteData";

export default function Contact() {
  const formRef = useRef(null);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setStatus({ type: "idle", message: "" });

    import("@emailjs/browser")
      .then(({ default: emailjs }) =>
        emailjs.sendForm(
          emailjsConfig.serviceId,
          emailjsConfig.templateId,
          formRef.current,
          emailjsConfig.publicKey
        )
      )
      .then(() => {
        setStatus({ type: "ok", message: "Message sent — I'll get back to you soon." });
        formRef.current?.reset();
      })
      .catch(() => {
        setStatus({ type: "err", message: "Something went wrong. Please try again." });
      })
      .finally(() => setSubmitting(false));
  };

  return (
    <footer className="contact" id="contact">
      <div className="container">
        <div className="contact__top">
          <div>
            <p className="eyebrow" style={{ color: "rgba(255,255,255,0.5)" }}>
              Let&apos;s work together
            </p>
            <AnimatedText as="h2" className="contact__title" text="Get in touch" />
            <p className="contact__lead">
              Have a product idea, a portfolio refresh, or a full-stack build in mind?
              Drop a message and let&apos;s make it real.
            </p>
          </div>

          <form className="contact__form" ref={formRef} onSubmit={onSubmit}>
            <div className="field">
              <label htmlFor="name">Your name</label>
              <input id="name" type="text" name="name" placeholder="Jane Doe" required />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" placeholder="you@example.com" required />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={4} placeholder="Tell me about your project..." required />
            </div>
            <p className={`contact__status ${status.type === "ok" ? "ok" : status.type === "err" ? "err" : ""}`}>
              {status.message}
            </p>
            <MagneticButton as="button" type="submit" className="pill pill--solid" disabled={submitting}>
              {submitting ? "Sending..." : "Send message"}
            </MagneticButton>
          </form>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
          <div className="socials">
            {profile.socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

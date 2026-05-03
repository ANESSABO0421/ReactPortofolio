import React, { memo, useCallback, useRef, useState } from "react";

const Contact = () => {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const sendEmail = useCallback(
    (event) => {
      event.preventDefault();
      if (isSubmitting) return;

      setIsSubmitting(true);
      setStatus({ type: "idle", message: "" });

      import("@emailjs/browser")
        .then(({ default: emailjs }) =>
          emailjs.sendForm(
            "service_1ujloms",
            "template_vw9xwq5",
            formRef.current,
            "dtWkdo4Xe4hk2mNM4"
          )
        )
        .then(() => {
          setStatus({
            type: "success",
            message: "Message sent successfully. I will get back to you soon.",
          });
          formRef.current?.reset();
        })
        .catch(() => {
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
    <section className="portfolio-section section-anchor-offset">
      <div className="portfolio-container grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="surface-card rounded-[1.5rem] p-5 sm:rounded-[2rem] sm:p-8">
          <p className="section-kicker">Let&apos;s Work Together</p>
          <h2 className="section-title text-[clamp(3rem,7vw,5.8rem)]">Contact</h2>
          <p className="section-lead mt-5">
            Ready to bring a new product idea, portfolio refresh, or frontend build
            to life. This section now matches the softer premium style across the site.
          </p>
          <div className="mt-8 grid gap-4">
            <div className="metric-card">
              <p className="muted-label mb-2">Email</p>
              <p className="text-base font-bold text-[var(--text)]">aneesaboo123@gmail.com</p>
            </div>
            <div className="metric-card">
              <p className="muted-label mb-2">Location</p>
              <p className="text-base font-bold text-[var(--text)]">Kerala, India</p>
            </div>
            <div className="metric-card">
              <p className="muted-label mb-2">Availability</p>
              <p className="text-base font-bold text-[var(--text)]">Open for collaborations</p>
            </div>
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="surface-card rounded-[1.5rem] p-5 sm:rounded-[2rem] sm:p-8"
          aria-busy={isSubmitting}
        >
          <div className="grid gap-5">
            <label className="grid gap-2">
              <span className="muted-label">Name</span>
              <input
                type="text"
                name="name"
                required
                autoComplete="name"
                placeholder="Your name"
                className="rounded-[1.2rem] border border-[var(--line)] bg-[rgba(18,25,34,0.82)] px-4 py-4 text-[var(--text)] outline-none transition focus:border-[var(--line-strong)]"
              />
            </label>

            <label className="grid gap-2">
              <span className="muted-label">Email</span>
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                className="rounded-[1.2rem] border border-[var(--line)] bg-[rgba(18,25,34,0.82)] px-4 py-4 text-[var(--text)] outline-none transition focus:border-[var(--line-strong)]"
              />
            </label>

            <label className="grid gap-2">
              <span className="muted-label">Message</span>
              <textarea
                name="message"
                required
                rows="7"
                placeholder="Tell me about your project..."
                className="rounded-[1.2rem] border border-[var(--line)] bg-[rgba(18,25,34,0.82)] px-4 py-4 text-[var(--text)] outline-none transition focus:border-[var(--line-strong)]"
              />
            </label>

            <button type="submit" disabled={isSubmitting} className="soft-button primary w-full">
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            <p
              role="status"
              aria-live="polite"
              className={`text-sm ${
                status.type === "error"
                  ? "text-red-600"
                  : status.type === "success"
                    ? "text-green-700"
                    : "text-[var(--muted)]"
              }`}
            >
              {status.message || "Your message goes directly through the contact form."}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default memo(Contact);

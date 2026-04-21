import React, { memo, useMemo } from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Footer = () => {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="pb-10 pt-4">
      <div className="portfolio-container">
        <div className="section-divider mb-8" />
        <div className="flex flex-col gap-6 rounded-[2rem] border border-[var(--line)] bg-[rgba(13,18,25,0.78)] px-6 py-8 shadow-[var(--shadow)] md:flex-row md:items-center md:justify-between">
          <div>
            <p className="muted-label mb-2">Portfolio</p>
            <p className="text-sm text-[var(--muted)]">
              © {year} Anees Aboobacker. Crafted with a cleaner studio-style interface.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/ANESSABO0421"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-[var(--line)] p-3 text-[var(--text)] transition-transform hover:-translate-y-0.5"
            >
              <FiGithub />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-[var(--line)] p-3 text-[var(--text)] transition-transform hover:-translate-y-0.5"
            >
              <FiLinkedin />
            </a>
            <a
              href="mailto:hello@aneesaboobacker.com"
              aria-label="Email"
              className="rounded-full border border-[var(--line)] p-3 text-[var(--text)] transition-transform hover:-translate-y-0.5"
            >
              <FiMail />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);

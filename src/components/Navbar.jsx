import React, { memo, useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const links = [
  { name: "Home", href: "#home", id: "home" },
  { name: "About", href: "#about", id: "about" },
  { name: "Works", href: "#projects", id: "projects" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Contact", href: "#contact", id: "contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [active, setActive] = useState("home");

  const handleLinkClick = useCallback((sectionId) => {
    setActive(sectionId);
  }, []);

  useEffect(() => {
    const hashTarget = location.hash.replace("#", "").toLowerCase();
    const pathTarget = location.pathname.replace("/", "").toLowerCase();

    if (hashTarget && links.some((link) => link.id === hashTarget)) {
      setActive(hashTarget);
      return;
    }

    if (pathTarget && links.some((link) => link.id === pathTarget)) {
      setActive(pathTarget);
      return;
    }

    setActive("home");
  }, [location.hash, location.pathname]);

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActive(visible.target.id);
        }
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.2, 0.45, 0.7] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-4 sm:px-6 sm:pt-5">
      <nav
        aria-label="Primary"
        className="portfolio-nav-shell mx-auto max-w-full rounded-full border border-[rgba(255,255,255,0.18)] bg-[rgba(18,22,28,0.82)] px-2 py-2 shadow-[0_0_20px_rgba(255,255,255,0.08)] sm:w-fit"
      >
        <ul className="portfolio-nav-list flex items-center gap-1 sm:gap-2">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                onClick={() => handleLinkClick(link.id)}
                className={`portfolio-nav-link rounded-full px-3 py-2 text-[0.65rem] font-extrabold uppercase tracking-[0.08em] transition-colors sm:px-5 sm:text-sm ${
                  active === link.id
                    ? "bg-[rgba(255,255,255,0.16)] text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.22)]"
                    : "text-[rgba(255,255,255,0.56)] hover:text-[var(--text)]"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default memo(Navbar);

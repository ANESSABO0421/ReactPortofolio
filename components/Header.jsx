"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/lib/siteData";

export default function Header({ onMenuToggle, menuOpen }) {
  const [showToggle, setShowToggle] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowToggle(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (!el) return;
    if (window.__lenis) window.__lenis.scrollTo(el, { offset: 0 });
    else el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className="header">
        <a className="header__logo" href="#top" onClick={(e) => go(e, "#top")}>
          © Code by {profile.firstName}
        </a>
        <nav className="header__nav">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={(e) => go(e, link.href)}>
              {link.name}
            </a>
          ))}
        </nav>
      </header>

      <button
        type="button"
        aria-label="Toggle menu"
        className={`menu-toggle ${showToggle || menuOpen ? "is-visible" : ""} ${
          menuOpen ? "is-open" : ""
        }`}
        onClick={onMenuToggle}
        data-hover
      >
        <span />
        <span />
      </button>
    </>
  );
}

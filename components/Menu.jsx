"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { navLinks, profile } from "@/lib/siteData";

export default function Menu({ open, onClose }) {
  const ref = useRef(null);

  useGSAP(
    () => {
      const el = ref.current;
      const links = el.querySelectorAll(".overlay__links a");
      const meta = el.querySelectorAll(".overlay__meta > div");
      if (open) {
        gsap.set(el, { visibility: "visible" });
        gsap.to(el, {
          clipPath: "circle(150% at calc(100% - 56px) 56px)",
          duration: 0.9,
          ease: "power4.inOut",
        });
        gsap.fromTo(
          links,
          { yPercent: 120 },
          { yPercent: 0, duration: 0.7, ease: "power4.out", stagger: 0.07, delay: 0.25 }
        );
        gsap.fromTo(
          meta,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, delay: 0.5 }
        );
      } else {
        gsap.to(el, {
          clipPath: "circle(0% at calc(100% - 56px) 56px)",
          duration: 0.7,
          ease: "power4.inOut",
          onComplete: () => gsap.set(el, { visibility: "hidden" }),
        });
      }
    },
    { dependencies: [open], scope: ref }
  );

  const go = (e, href) => {
    e.preventDefault();
    onClose();
    setTimeout(() => {
      const target = document.querySelector(href);
      if (!target) return;
      if (window.__lenis) window.__lenis.scrollTo(target, { offset: 0 });
      else target.scrollIntoView({ behavior: "smooth" });
    }, 400);
  };

  return (
    <div className="overlay" ref={ref}>
      <div className="overlay__inner">
        <div className="overlay__links">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={(e) => go(e, link.href)}>
              {link.name}
            </a>
          ))}
        </div>
        <div className="overlay__meta">
          <div>
            <h4>Get in touch</h4>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
          <div>
            <h4>Socials</h4>
            <div className="overlay__socials">
              {profile.socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4>Based in</h4>
            <p>{profile.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

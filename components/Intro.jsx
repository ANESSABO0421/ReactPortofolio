"use client";

import AnimatedText from "./AnimatedText";
import MagneticButton from "./MagneticButton";
import { profile } from "@/lib/siteData";

export default function Intro() {
  const scrollToAbout = (e) => {
    e.preventDefault();
    const el = document.querySelector("#about");
    if (!el) return;
    if (window.__lenis) window.__lenis.scrollTo(el);
    else el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section intro container">
      <div className="intro__grid">
        <AnimatedText
          as="h2"
          className="intro__statement"
          text={profile.introStatement}
          stagger={0.02}
        />
        <div className="intro__aside">
          <p>{profile.introSub}</p>
          <MagneticButton
            as="button"
            className="about-btn"
            onClick={scrollToAbout}
            strength={0.5}
          >
            About me
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { skillGroups } from "@/lib/siteData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Skills() {
  const ref = useRef(null);

  useGSAP(
    () => {
      gsap.from(".skills__card", {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: ".skills__grid", start: "top 85%" },
      });
    },
    { scope: ref }
  );

  return (
    <section className="section skills" ref={ref}>
      <div className="container">
        <p className="eyebrow">Tech Stack &amp; Toolkit</p>
        <h2 className="about__title" style={{ fontSize: "clamp(2.6rem,7vw,6rem)" }}>
          Skills
        </h2>
        <div className="skills__grid">
          {skillGroups.map((group) => (
            <article className="skills__card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="skills__tags">
                {group.skills.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

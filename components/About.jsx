"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import AnimatedText from "./AnimatedText";
import { profile, aboutHighlights, timeline } from "@/lib/siteData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const ref = useRef(null);

  useGSAP(
    () => {
      gsap.from(".about__highlights li", {
        opacity: 0,
        y: 24,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".about__highlights", start: "top 85%" },
      });
      gsap.from(".timeline__row", {
        opacity: 0,
        y: 24,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".timeline", start: "top 85%" },
      });
      gsap.to(".about__portrait img", {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: ".about__portrait",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: ref }
  );

  return (
    <section className="section about" id="about" ref={ref}>
      <div className="container">
        <div className="about__grid">
          <div>
            <p className="eyebrow" style={{ color: "rgba(255,255,255,0.5)" }}>
              About
            </p>
            <AnimatedText as="h2" className="about__title" text="The Journey So Far" />
            <AnimatedText
              as="p"
              className="about__lead"
              text={`I'm ${profile.name}, a MERN stack developer from ${profile.location}. I build REST APIs, real-time systems, and full-stack web & mobile apps — with a focus on clean architecture and shipping production-ready code.`}
              stagger={0.015}
            />
            <ul className="about__highlights">
              {aboutHighlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>

          <div className="about__portrait">
            <Image
              src={profile.portrait}
              alt={`${profile.name} portrait`}
              width={800}
              height={1000}
            />
          </div>
        </div>

        <div className="timeline">
          {timeline.map((row) => (
            <div className="timeline__row" key={row.title + row.period}>
              <span className="timeline__period">{row.period}</span>
              <div>
                <p className="timeline__title">{row.title}</p>
                <p className="timeline__org">{row.org}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

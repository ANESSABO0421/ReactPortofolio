"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { projects } from "@/lib/projects";

const extra = [
  "/project1/proj1_3.webp",
  "/project2/proj2_3.webp",
  "/project6/proj6_4.webp",
  "/project4/proj2_5.webp",
  "/project3/proj3_2.webp",
];

export default function Marquee() {
  const trackRef = useRef(null);

  const images = [...projects.map((p) => p.coverImage), ...extra];
  const loop = [...images, ...images];

  useGSAP(
    () => {
      const anim = gsap.to(trackRef.current, {
        xPercent: -50,
        duration: 28,
        ease: "none",
        repeat: -1,
      });
      return () => anim.kill();
    },
    { scope: trackRef }
  );

  return (
    <section className="marquee">
      <div className="marquee__track" ref={trackRef}>
        {loop.map((src, i) => (
          <div className="marquee__card" key={i}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt="" loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}

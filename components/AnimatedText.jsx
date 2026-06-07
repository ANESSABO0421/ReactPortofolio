"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function AnimatedText({
  text,
  as: Tag = "p",
  className = "",
  stagger = 0.04,
  delay = 0,
  start = "top 85%",
}) {
  const ref = useRef(null);

  useGSAP(
    () => {
      const words = ref.current.querySelectorAll(".word > span");
      gsap.from(words, {
        yPercent: 110,
        duration: 0.9,
        ease: "power4.out",
        stagger,
        delay,
        scrollTrigger: {
          trigger: ref.current,
          start,
        },
      });
    },
    { scope: ref }
  );

  const words = text.split(" ");

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, i) => (
        <span className="word" key={`${word}-${i}`}>
          <span>{word}{i < words.length - 1 ? "\u00A0" : ""}</span>
        </span>
      ))}
    </Tag>
  );
}

"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Loader() {
  const ref = useRef(null);
  const countRef = useRef(null);
  const [done, setDone] = useState(false);

  useGSAP(
    () => {
      const counter = { value: 0 };
      const tl = gsap.timeline();
      tl.to(counter, {
        value: 100,
        duration: 1.8,
        ease: "power2.inOut",
        onUpdate: () => {
          if (countRef.current) {
            countRef.current.textContent = Math.round(counter.value)
              .toString()
              .padStart(2, "0");
          }
        },
      })
        .to(countRef.current, { yPercent: -120, duration: 0.6, ease: "power3.in" })
        .to(
          ref.current,
          {
            yPercent: -100,
            duration: 0.9,
            ease: "power4.inOut",
            onComplete: () => setDone(true),
          },
          "-=0.1"
        );
    },
    { scope: ref }
  );

  if (done) return null;

  return (
    <div ref={ref} className="loader">
      <div style={{ overflow: "hidden" }}>
        <span ref={countRef} className="loader__count" style={{ display: "block" }}>
          00
        </span>
      </div>
    </div>
  );
}

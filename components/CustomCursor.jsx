"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const dotRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    const xTo = gsap.quickTo(dot, "x", { duration: 0.5, ease: "power3" });
    const yTo = gsap.quickTo(dot, "y", { duration: 0.5, ease: "power3" });

    const move = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const over = (e) => {
      if (e.target.closest("a, button, [data-hover]")) {
        dot.classList.add("is-hover");
      }
    };
    const out = (e) => {
      if (e.target.closest("a, button, [data-hover]")) {
        dot.classList.remove("is-hover");
      }
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
    };
  }, []);

  return <div ref={dotRef} className="cursor" aria-hidden="true" />;
}

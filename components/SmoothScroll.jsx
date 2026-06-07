"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    window.__lenis = lenis;

    const refresh = () => ScrollTrigger.refresh();
    const onLoad = () => refresh();
    window.addEventListener("load", onLoad);
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(refresh);
    }
    // Re-measure after layout settles (loader, images, fonts).
    const t1 = setTimeout(refresh, 800);
    const t2 = setTimeout(refresh, 3200);

    return () => {
      window.removeEventListener("load", onLoad);
      clearTimeout(t1);
      clearTimeout(t2);
      gsap.ticker.remove(raf);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return children;
}

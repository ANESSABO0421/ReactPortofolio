"use client";

import { useState } from "react";
import SmoothScroll from "./SmoothScroll";
import CustomCursor from "./CustomCursor";
import Loader from "./Loader";
import Header from "./Header";
import Menu from "./Menu";
import Hero from "./Hero";
import Intro from "./Intro";
import Work from "./Work";
import Marquee from "./Marquee";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <SmoothScroll>
      <Loader />
      <CustomCursor />
      <Header menuOpen={menuOpen} onMenuToggle={() => setMenuOpen((v) => !v)} />
      <Menu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main>
        <Hero />
        <Intro />
        <Work />
        <Marquee />
        <About />
        <Skills />
        <Contact />
      </main>
    </SmoothScroll>
  );
}

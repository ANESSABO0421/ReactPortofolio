"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FiGlobe } from "react-icons/fi";
import { profile } from "@/lib/siteData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const ref = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 2.6 });
      tl.from(".hero__name .line span", {
        yPercent: 110,
        duration: 1.1,
        ease: "power4.out",
        stagger: 0.12,
      })
        .from(
          ".hero__role span",
          { yPercent: 110, duration: 0.9, ease: "power4.out", stagger: 0.1 },
          "-=0.7"
        )
        .from(
          ".hero__located",
          { x: "-110%", duration: 0.9, ease: "power4.out" },
          "-=0.7"
        )
        .from(".hero__arrow", { opacity: 0, duration: 0.6 }, "-=0.4");

      gsap.to(".hero__image img", {
        yPercent: 18,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(".hero__name", {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: ref }
  );

  return (
    <section className="hero" ref={ref} id="top">
      <div className="hero__image">
        <Image
          src={profile.portrait}
          alt={`${profile.name} portrait`}
          width={900}
          height={1200}
          priority
        />
      </div>

      <div className="hero__located">
        <p>
          Located
          <br />
          in {profile.location}
        </p>
        <span className="globe">
          <FiGlobe />
        </span>
      </div>

      <div className="hero__role">
        <span>{profile.role.split(" ")[0]}</span>
        <span>{profile.role.split(" ").slice(1).join(" ")}</span>
      </div>

      <div className="hero__arrow">↘</div>

      <div className="hero__name">
        <h1>
          <span className="line">
            <span>{profile.name}</span>
          </span>
        </h1>
      </div>
    </section>
  );
}

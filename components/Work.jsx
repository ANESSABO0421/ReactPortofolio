"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import AnimatedText from "./AnimatedText";
import MagneticButton from "./MagneticButton";
import { projects } from "@/lib/projects";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Work() {
  const sectionRef = useRef(null);
  const listRef = useRef(null);
  const previewRef = useRef(null);
  const imgRef = useRef(null);
  const xTo = useRef(null);
  const yTo = useRef(null);

  useGSAP(
    () => {
      xTo.current = gsap.quickTo(previewRef.current, "x", {
        duration: 0.6,
        ease: "power3",
      });
      yTo.current = gsap.quickTo(previewRef.current, "y", {
        duration: 0.6,
        ease: "power3",
      });

      gsap.from(".work__item", {
        yPercent: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: { trigger: listRef.current, start: "top 80%" },
      });
    },
    { scope: sectionRef }
  );

  const onMove = (e) => {
    if (xTo.current) xTo.current(e.clientX);
    if (yTo.current) yTo.current(e.clientY);
  };

  const onEnterItem = (project, e) => {
    if (imgRef.current) imgRef.current.src = project.coverImage;
    listRef.current.classList.add("has-hover");
    if (e && e.currentTarget) {
      listRef.current
        .querySelectorAll(".work__item.active")
        .forEach((el) => el.classList.remove("active"));
      e.currentTarget.classList.add("active");
    }
    gsap.to(previewRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.45,
      ease: "power3.out",
    });
  };

  const onLeaveList = () => {
    listRef.current.classList.remove("has-hover");
    listRef.current
      .querySelectorAll(".work__item.active")
      .forEach((el) => el.classList.remove("active"));
    gsap.to(previewRef.current, {
      opacity: 0,
      scale: 0.85,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  return (
    <section className="section container" id="work" ref={sectionRef}>
      <div className="work__head">
        <p className="eyebrow">Recent Work</p>
        <p className="eyebrow">{projects.length.toString().padStart(2, "0")} / Selected</p>
      </div>

      <div
        className="work__list"
        ref={listRef}
        onMouseMove={onMove}
        onMouseLeave={onLeaveList}
      >
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="work__item"
            onMouseEnter={(e) => onEnterItem(project, e)}
            onFocus={(e) => onEnterItem(project, e)}
          >
            <span className="work__title">{project.title}</span>
            <span className="work__meta">
              <span className="work__cat">{project.category}</span>
              <span className="work__year">{project.year}</span>
            </span>
          </a>
        ))}
      </div>

      <div className="work__preview" ref={previewRef} aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img ref={imgRef} src={projects[0].coverImage} alt="" />
        <span className="work__preview-btn">View</span>
      </div>

      <div className="work__more">
        <MagneticButton
          as="a"
          href="https://github.com/ANESSABO0421"
          target="_blank"
          rel="noreferrer"
          className="pill"
        >
          More work on GitHub
        </MagneticButton>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { gsap } from "gsap";

export default function MagneticButton({
  as = "a",
  className = "",
  children,
  strength = 0.4,
  ...rest
}) {
  const ref = useRef(null);
  const Tag = as;

  const onMove = (e) => {
    const el = ref.current;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    gsap.to(el, { x: x * strength, y: y * strength, duration: 0.5, ease: "power3" });
  };

  const onLeave = () => {
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
  };

  return (
    <Tag
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      data-hover
      {...rest}
    >
      {children}
    </Tag>
  );
}

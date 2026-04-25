import React, { memo, useEffect, useRef } from "react";

const CustomCursor = () => {
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const outerPosRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);
  const isAnimatingRef = useRef(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!mediaQuery.matches || reduceMotionQuery.matches) {
      return undefined;
    }

    document.body.classList.add("custom-cursor-enabled");

    const setHoverState = (hovering) => {
      document.body.classList.toggle("cursor-hover", hovering);
    };

    const onMove = (event) => {
      mouseRef.current.x = event.clientX;
      mouseRef.current.y = event.clientY;

      if (innerRef.current) {
        innerRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      }

      if (!isAnimatingRef.current) {
        isAnimatingRef.current = true;
        rafRef.current = window.requestAnimationFrame(animate);
      }
    };

    const animate = () => {
      outerPosRef.current.x += (mouseRef.current.x - outerPosRef.current.x) * 0.16;
      outerPosRef.current.y += (mouseRef.current.y - outerPosRef.current.y) * 0.16;

      if (outerRef.current) {
        outerRef.current.style.transform = `translate3d(${outerPosRef.current.x}px, ${outerPosRef.current.y}px, 0)`;
      }

      const deltaX = Math.abs(mouseRef.current.x - outerPosRef.current.x);
      const deltaY = Math.abs(mouseRef.current.y - outerPosRef.current.y);

      if (deltaX > 0.2 || deltaY > 0.2) {
        rafRef.current = window.requestAnimationFrame(animate);
      } else {
        isAnimatingRef.current = false;
        rafRef.current = null;
      }
    };

    const interactiveSelector = "a, button, input, textarea, select, [role='button']";

    const onOver = (event) => {
      setHoverState(Boolean(event.target.closest(interactiveSelector)));
    };

    const onOut = (event) => {
      if (event.target.closest(interactiveSelector)) {
        setHoverState(false);
      }
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      document.body.classList.remove("custom-cursor-enabled", "cursor-hover");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <>
      <div ref={outerRef} className="custom-cursor custom-cursor-outer" aria-hidden="true" />
      <div ref={innerRef} className="custom-cursor custom-cursor-inner" aria-hidden="true" />
    </>
  );
};

export default memo(CustomCursor);

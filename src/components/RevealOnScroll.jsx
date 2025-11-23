import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, useReducedMotion } from "motion/react";

/**
 * RevealOnScroll
 * 
 * A wrapper component that triggers high-quality reveal animations when elements enter the viewport.
 * Supports direction, blur, scale, and custom delays.
 */
export const RevealOnScroll = ({
    children,
    width = "fit-content",
    delay = 0,
    duration = 0.8,
    direction = "up", // up, down, left, right, none
    blur = true,
    scale = false,
    className = "",
    once = true, // Trigger only once by default
    threshold = 0.1
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount: threshold });
    const controls = useAnimation();
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        } else if (!once) {
            controls.start("hidden");
        }
    }, [isInView, controls, once]);

    const getVariants = () => {
        if (shouldReduceMotion) {
            return {
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.5 } }
            };
        }

        const variants = {
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: {
                    duration,
                    delay,
                    ease: [0.25, 0.1, 0.25, 1.0], // Cubic bezier for smooth "apple-like" ease
                }
            }
        };

        // Directional offsets
        if (direction === "up") variants.hidden.y = 75;
        if (direction === "down") variants.hidden.y = -75;
        if (direction === "left") variants.hidden.x = 75;
        if (direction === "right") variants.hidden.x = -75;

        // Blur effect
        if (blur) {
            variants.hidden.filter = "blur(10px)";
            variants.visible.filter = "blur(0px)";
        }

        // Scale effect
        if (scale) {
            variants.hidden.scale = 0.8;
            variants.visible.scale = 1;
        }

        return variants;
    };

    return (
        <div ref={ref} style={{ width, overflow: "hidden" }} className={className}>
            <motion.div
                variants={getVariants()}
                initial="hidden"
                animate={controls}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default RevealOnScroll;

/**
 * AntiGravityLoader.jsx
 * 
 * A polished, production-ready loading animation component.
 * Features:
 * - Full-screen overlay with glassmorphism
 * - Floating particles with organic movement
 * - Central morphing orb
 * - Click-to-dismiss functionality
 * - Respects prefers-reduced-motion
 */

import React, { useEffect, useMemo } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import styles from './AntiGravityLoader.module.css';

const AntiGravityLoader = ({
    isOpen = true,
    onFinish,
    duration = 1200,
    particles = 12,
    logo,
    respectReducedMotion = true,
}) => {
    const shouldReduceMotion = useReducedMotion();
    const isReduced = respectReducedMotion && shouldReduceMotion;

    // Handle auto-dismiss if onFinish is provided, but usually controlled by parent
    // We'll use a timeout to call onFinish if it's passed, to ensure flow continues
    useEffect(() => {
        if (isOpen && onFinish) {
            const timer = setTimeout(() => {
                onFinish();
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [isOpen, onFinish, duration]);

    // Generate random particles
    const particleArray = useMemo(() => {
        return Array.from({ length: particles }).map((_, i) => ({
            id: i,
            size: Math.random() * 4 + 2, // 2px to 6px
            x: Math.random() * 100 - 50, // -50% to 50% relative to center
            y: Math.random() * 100 - 50,
            duration: Math.random() * 2 + 2, // 2s to 4s
            delay: Math.random() * 0.5,
        }));
    }, [particles]);

    const starArray = useMemo(() => {
        return Array.from({ length: 22 }).map((_, i) => ({
            id: i,
            top: Math.random() * 100,
            left: Math.random() * 100,
            size: Math.random() * 2.6 + 1,
            opacity: Math.random() * 0.7 + 0.2,
            duration: Math.random() * 5 + 4,
            delay: Math.random() * 2,
        }));
    }, []);

    // Animation variants
    const overlayVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0, transition: { duration: 0.5 } },
    };

    const orbVariants = {
        initial: { scale: 0.8, opacity: 0 },
        animate: {
            scale: [0.8, 1.1, 1],
            opacity: 1,
            rotate: [0, 180, 360],
            transition: {
                duration: duration / 1000,
                ease: "easeInOut",
                times: [0, 0.6, 1]
            }
        },
        exit: { scale: 1.5, opacity: 0, transition: { duration: 0.3 } },
    };

    const particleVariants = (p) => ({
        initial: {
            x: 0,
            y: 0,
            opacity: 0,
            scale: 0
        },
        animate: {
            x: [0, p.x * 5, p.x * 8], // Drift outward
            y: [0, p.y * 5, p.y * 8],
            opacity: [0, 1, 0.5, 0],
            scale: [0, 1, 0.5],
            transition: {
                duration: duration / 1000,
                ease: "easeOut",
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 0.2
            }
        },
        exit: {
            x: p.x * 15, // Burst outward on exit
            y: p.y * 15,
            opacity: 0,
            transition: { duration: 0.4 }
        }
    });

    if (!isOpen) return null;

    return (
        <AnimatePresence mode="wait">
            {isOpen && (
                <motion.div
                    className={styles.loaderOverlay}
                    variants={overlayVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    onClick={onFinish} // Click to dismiss
                    role="alert"
                    aria-live="assertive"
                    aria-label="Loading content"
                >
                    <div className={styles.scene}>
                        <div className={styles.spaceBackdrop} aria-hidden="true">
                            <div className={styles.vignette} />
                            <div className={styles.nebula} />
                            <div className={styles.orbitRing} />
                            <div className={styles.orbitRingSecondary} />

                            {!isReduced && starArray.map((star) => (
                                <motion.span
                                    key={star.id}
                                    className={styles.star}
                                    style={{
                                        top: `${star.top}%`,
                                        left: `${star.left}%`,
                                        width: `${star.size}px`,
                                        height: `${star.size}px`,
                                        opacity: star.opacity,
                                    }}
                                    animate={{
                                        opacity: [star.opacity * 0.5, star.opacity, star.opacity * 0.6],
                                        scale: [1, 1.4, 1],
                                    }}
                                    transition={{
                                        duration: star.duration,
                                        delay: star.delay,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                />
                            ))}
                        </div>

                        {/* Central Orb */}
                        <motion.div
                            className={styles.orbContainer}
                            variants={isReduced ? {} : orbVariants}
                        >
                            <div className={styles.orbGlow} />
                            {logo ? (
                                logo
                            ) : (
                                <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <motion.circle
                                        cx="36" cy="36" r="31"
                                        stroke="url(#paint0_linear)"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        initial={{ pathLength: 0, rotate: -90 }}
                                        animate={{ pathLength: 1, rotate: 270 }}
                                        transition={{ duration: duration / 1000, ease: "easeInOut" }}
                                    />
                                    <motion.circle
                                        cx="36"
                                        cy="36"
                                        r="14"
                                        fill="url(#paint1_radial)"
                                        animate={isReduced ? undefined : {
                                            scale: [0.92, 1.08, 0.96],
                                            opacity: [0.65, 1, 0.8],
                                        }}
                                        transition={{
                                            duration: duration / 900,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                    />
                                    <defs>
                                        <linearGradient id="paint0_linear" x1="0" y1="0" x2="72" y2="72" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#F8FBFF" />
                                            <stop offset="0.5" stopColor="#7DD3FC" />
                                            <stop offset="1" stopColor="#8B5CF6" />
                                        </linearGradient>
                                        <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(36 36) rotate(90) scale(14)">
                                            <stop stopColor="#FFFFFF" />
                                            <stop offset="0.45" stopColor="#93C5FD" />
                                            <stop offset="1" stopColor="#020409" stopOpacity="0" />
                                        </radialGradient>
                                    </defs>
                                </svg>
                            )}
                        </motion.div>

                        <motion.div
                            className={styles.loaderCopy}
                            initial={isReduced ? false : { opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 6 }}
                            transition={{ delay: 0.15, duration: 0.45 }}
                        >
                            <p className={styles.loaderEyebrow}>Entering Orbit</p>
                            <h2 className={styles.loaderTitle}>Anees Aboobacker</h2>
                            <p className={styles.loaderText}>Loading a premium portfolio experience</p>
                        </motion.div>

                        {/* Floating Particles */}
                        {!isReduced && particleArray.map((p) => (
                            <motion.div
                                key={p.id}
                                className={styles.particle}
                                style={{
                                    width: p.size,
                                    height: p.size,
                                    left: `calc(50% + ${p.x}px)`,
                                    top: `calc(50% + ${p.y}px)`,
                                }}
                                variants={particleVariants(p)}
                            />
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default AntiGravityLoader;

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
                        {/* Central Orb */}
                        <motion.div
                            className={styles.orbContainer}
                            variants={isReduced ? {} : orbVariants}
                        >
                            <div className={styles.orbGlow} />
                            {logo ? (
                                logo
                            ) : (
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <motion.circle
                                        cx="30" cy="30" r="28"
                                        stroke="url(#paint0_linear)"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        initial={{ pathLength: 0, rotate: -90 }}
                                        animate={{ pathLength: 1, rotate: 270 }}
                                        transition={{ duration: duration / 1000, ease: "easeInOut" }}
                                    />
                                    <defs>
                                        <linearGradient id="paint0_linear" x1="0" y1="0" x2="60" y2="60" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#00FFFF" />
                                            <stop offset="1" stopColor="#FF00FF" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            )}
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

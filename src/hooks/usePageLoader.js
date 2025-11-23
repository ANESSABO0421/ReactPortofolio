/**
 * usePageLoader.js
 * 
 * A hook to manage the loading state for the AntiGravityLoader.
 * It listens to route changes via react-router-dom and triggers the loader.
 * 
 * Usage:
 * const { showLoader, start, done } = usePageLoader({ duration: 1000 });
 */

import { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

export const usePageLoader = ({
    duration = 900,
    autoHide = true
} = {}) => {
    const [showLoader, setShowLoader] = useState(true); // Show on initial mount
    const location = useLocation();

    // Function to manually start the loader
    const start = useCallback(() => {
        setShowLoader(true);
    }, []);

    // Function to manually stop the loader
    const done = useCallback(() => {
        setShowLoader(false);
    }, []);

    // Automatically trigger on route change
    useEffect(() => {
        start();

        // If autoHide is true, we can rely on the component's internal timer 
        // or we can explicitly hide it here after a timeout if the component doesn't handle it.
        // However, the AntiGravityLoader component typically handles the "duration" and calls onFinish.
        // But for route changes, we want to ensure it shows *then* hides.

        // In this specific requirement, the user asked:
        // "On click-based navigation, the loader appears, plays 700–1200ms animation, then the route change finishes"
        // Since we are detecting the route change *after* it happened (useEffect on location), 
        // we are in the "show on navigation" phase.

        // We'll let the loader run for its minimum duration then hide.
        const timer = setTimeout(() => {
            if (autoHide) done();
        }, duration);

        return () => clearTimeout(timer);
    }, [location, start, done, duration, autoHide]);

    // Initial mount handling is covered by default useState(true)
    // and the useEffect will trigger again on mount if location is present, 
    // but we want to ensure we don't double-trigger or get stuck.

    // Actually, on initial mount, useEffect runs once. 
    // If we want to ensure it clears after the first load:
    useEffect(() => {
        const timer = setTimeout(() => {
            if (autoHide) done();
        }, duration);
        return () => clearTimeout(timer);
    }, []); // Run once on mount

    return { showLoader, start, done };
};

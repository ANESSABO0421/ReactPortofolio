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

    // Automatically trigger on route change - REMOVED
    // We only want the loader on initial load, which is handled by the initial state.


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

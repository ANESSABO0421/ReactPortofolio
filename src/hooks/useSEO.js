import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SEO_CONFIG, DEFAULT_SEO } from "../seoConfig";

export const useSEO = () => {
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        const seoData = SEO_CONFIG[path] || DEFAULT_SEO;

        // Update Title
        document.title = seoData.title;

        // Update Meta Tags
        const updateMeta = (name, content) => {
            let element = document.querySelector(`meta[name="${name}"]`);
            if (!element) {
                element = document.createElement("meta");
                element.setAttribute("name", name);
                document.head.appendChild(element);
            }
            element.setAttribute("content", content);
        };

        const updateOG = (property, content) => {
            let element = document.querySelector(`meta[property="${property}"]`);
            if (!element) {
                element = document.createElement("meta");
                element.setAttribute("property", property);
                document.head.appendChild(element);
            }
            element.setAttribute("content", content);
        };

        updateMeta("description", seoData.description);
        updateMeta("keywords", seoData.keywords);

        // Update OG Tags
        updateOG("og:title", seoData.title);
        updateOG("og:description", seoData.description);
        updateOG("og:url", window.location.href);

        // Update Twitter Tags
        updateMeta("twitter:title", seoData.title);
        updateMeta("twitter:description", seoData.description);

        // Update Canonical URL
        let canonical = document.querySelector("link[rel='canonical']");
        if (canonical) {
            canonical.setAttribute("href", window.location.href);
        }

    }, [location]);
};

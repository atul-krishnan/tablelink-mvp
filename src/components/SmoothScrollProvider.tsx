"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        // Initialize Lenis with optimized settings
        lenisRef.current = new Lenis({
            duration: 0.8, // Reduced from 1.2 for snappier feel
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            touchMultiplier: 2,
            wheelMultiplier: 1,
            infinite: false,
        });

        // Optimized animation frame loop
        let rafId: number;
        function raf(time: number) {
            lenisRef.current?.raf(time);
            rafId = requestAnimationFrame(raf);
        }

        rafId = requestAnimationFrame(raf);

        // Handle anchor links for smooth scroll
        const handleAnchorClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const anchor = target.closest('a[href^="#"]');
            if (anchor) {
                e.preventDefault();
                const href = anchor.getAttribute("href");
                if (href && href !== "#") {
                    const element = document.querySelector(href);
                    if (element) {
                        lenisRef.current?.scrollTo(element as HTMLElement, {
                            offset: -80, // Account for sticky nav
                            duration: 1.5,
                        });
                    }
                }
            }
        };

        document.addEventListener("click", handleAnchorClick);

        return () => {
            if (rafId) cancelAnimationFrame(rafId);
            lenisRef.current?.destroy();
            document.removeEventListener("click", handleAnchorClick);
        };
    }, []);

    return <>{children}</>;
}

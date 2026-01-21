"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/sections/Container";
import { Reveal } from "@/components/sections/Reveal";

// Safety features with associated images
const safetyFeatures = [
    {
        title: "Public, well-lit venues",
        description: "Curated for comfort and safety",
        icon: "🛡️",
        image: "/images/safety-public-venues.jpg",
        alt: "Beautiful, well-lit restaurant interior with warm ambient lighting"
    },
    {
        title: "Women-first pilot tables",
        description: "Safe, supportive environment",
        icon: "👥",
        image: "/images/safety-women-only.jpg",
        alt: "Diverse group of women friends laughing and enjoying dinner together"
    },
    {
        title: "Profile-checked",
        description: "LinkedIn/Instagram required",
        icon: "✓",
        image: "/images/safety-verified-profiles.jpg",
        alt: "Hands holding phone showing verified LinkedIn profile"
    },
    {
        title: "Clear code of conduct",
        description: "Respectful interactions only",
        icon: "📋",
        image: "/images/safety-code-of-conduct.jpg",
        alt: "Elegant table setting with community guidelines cards"
    },
    {
        title: "Zero tolerance",
        description: "For boundary violations",
        icon: "🚫",
        image: "/images/safety-zero-tolerance.jpg",
        alt: "Protective shield concept in warm restaurant setting"
    }
];

export function SafetyTrust() {
    const { safety } = siteConfig;
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [isPaused, setIsPaused] = React.useState(false);

    // Auto-rotate every 4 seconds
    React.useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % safetyFeatures.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [isPaused]);

    const currentFeature = safetyFeatures[currentIndex];

    return (
        <section id="safety" className="py-20 sm:py-24">
            <Container>
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                    {/* Content */}
                    <div>
                        <Reveal>
                            <h2 className="headline-underline font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                                {safety.title}
                            </h2>
                        </Reveal>

                        <Reveal className="mt-8">
                            <ul className="space-y-4">
                                {safety.bullets.map((bullet, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-3 text-foreground"
                                    >
                                        <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-success/10 text-success text-sm">
                                            ✓
                                        </span>
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                        </Reveal>

                        <Reveal className="mt-8">
                            <p className="text-sm text-muted-foreground italic border-l-2 border-accent/30 pl-4">
                                {safety.privacyLine}
                            </p>
                        </Reveal>
                    </div>

                    {/* Auto-rotating Image Carousel */}
                    <Reveal>
                        <div
                            className="relative hidden lg:block"
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                        >
                            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-glow">
                                {/* Animated Images */}
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentIndex}
                                        initial={{ opacity: 0, scale: 1.1 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.7, ease: "easeInOut" }}
                                        className="absolute inset-0"
                                    >
                                        <Image
                                            src={currentFeature.image}
                                            alt={currentFeature.alt}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                        />

                                        {/* Subtle overlay for blend */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />

                                        {/* Border overlay */}
                                        <div className="absolute inset-0 rounded-2xl border border-white/10" />
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Animated Caption */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`caption-${currentIndex}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute bottom-4 left-4 right-4 glass-card rounded-xl p-4"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-lg">
                                            {currentFeature.icon}
                                        </div>
                                        <div>
                                            <p className="font-medium text-sm text-foreground">
                                                {currentFeature.title}
                                            </p>
                                            <p className="text-xs text-muted-foreground">
                                                {currentFeature.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Progress Indicators */}
                            <div className="absolute top-4 left-4 right-4 flex gap-2">
                                {safetyFeatures.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className="flex-1 h-1 rounded-full bg-white/20 overflow-hidden cursor-pointer hover:bg-white/30 transition"
                                        aria-label={`Go to slide ${index + 1}`}
                                    >
                                        <motion.div
                                            className="h-full bg-accent"
                                            initial={{ width: "0%" }}
                                            animate={{
                                                width: index === currentIndex ? "100%" : "0%"
                                            }}
                                            transition={{
                                                duration: index === currentIndex ? 4 : 0.3,
                                                ease: "linear"
                                            }}
                                        />
                                    </button>
                                ))}
                            </div>

                            {/* Navigation Arrows */}
                            <button
                                onClick={() => setCurrentIndex((prev) => (prev - 1 + safetyFeatures.length) % safetyFeatures.length)}
                                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-card transition opacity-0 hover:opacity-100 group-hover:opacity-100"
                                aria-label="Previous slide"
                            >
                                ←
                            </button>
                            <button
                                onClick={() => setCurrentIndex((prev) => (prev + 1) % safetyFeatures.length)}
                                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-card transition opacity-0 hover:opacity-100 group-hover:opacity-100"
                                aria-label="Next slide"
                            >
                                →
                            </button>

                            {/* Decorative elements */}
                            <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full border border-border bg-card/80 shadow-soft" />
                            <div className="absolute -bottom-4 -left-4 h-14 w-14 rounded-full border border-accent/20 bg-accent/5" />
                        </div>
                    </Reveal>
                </div>
            </Container>
        </section>
    );
}

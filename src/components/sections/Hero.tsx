"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/sections/Container";
import { ButtonLink } from "@/components/ui/button";

export function Hero() {
    const { hero } = siteConfig;

    return (
        <section className="relative overflow-hidden min-h-[90vh] flex items-center">
            {/* Background effects */}
            <div className="absolute inset-0 gradient-sheen" aria-hidden="true" />
            <div className="noise" aria-hidden="true" />

            {/* Decorative blob shapes */}
            <div
                className="absolute top-20 right-0 w-96 h-96 blob-shape animate-pulse-glow opacity-40 hidden lg:block"
                aria-hidden="true"
            />
            <div
                className="absolute -bottom-20 -left-20 w-72 h-72 blob-shape animate-float-slow opacity-30 hidden lg:block"
                aria-hidden="true"
            />

            {/* Subtle grid pattern */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, rgba(251, 101, 30, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(251, 101, 30, 0.04) 1px, transparent 1px)",
                    backgroundSize: "60px 60px"
                }}
            />

            <Container className="relative py-20 sm:py-28 lg:py-32">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* Badge */}
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
                            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                            {hero.badge}
                        </div>

                        {/* Headline */}
                        <h1 className="headline-underline font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl leading-[1.1]">
                            {hero.headline}
                        </h1>

                        {/* Subheadline */}
                        <p className="mt-6 text-base text-muted-foreground sm:text-lg max-w-xl leading-relaxed">
                            {hero.subheadline}
                        </p>

                        {/* Expectation line */}
                        <p className="mt-4 text-sm text-muted-foreground/90 max-w-lg">
                            {hero.expectation}
                        </p>

                        {/* Hold line */}
                        <p className="mt-3 text-sm text-muted-foreground/80 max-w-lg">
                            {hero.holdLine}
                        </p>

                        {/* CTAs */}
                        <div className="mt-10 flex flex-wrap items-center gap-4">
                            <ButtonLink href={hero.primaryCta.href} variant="primary" className="px-8 py-4 text-base">
                                {hero.primaryCta.label}
                            </ButtonLink>
                            <ButtonLink href={hero.secondaryCta.href} variant="secondary">
                                {hero.secondaryCta.label}
                            </ButtonLink>
                        </div>

                        {/* Trust indicators */}
                        <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Profile-checked</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-success">✓</span>
                                <span>Women-first pilot</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-success">✓</span>
                                <span>Safe venues</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Visual side - Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="relative hidden lg:block"
                    >
                        {/* Main image */}
                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden image-reveal shadow-glow">
                            <Image
                                src="/images/hero-women-dining.jpg"
                                alt="Women friends laughing together at a dinner table"
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />

                            {/* Subtle overlay for blend */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />

                            {/* Border overlay */}
                            <div className="absolute inset-0 rounded-2xl border border-white/20" />
                        </div>

                        {/* Floating accent cards */}
                        <motion.div
                            className="absolute -left-8 top-1/4 glass-card rounded-xl p-4 shadow-lg"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-lg">
                                    👋
                                </div>
                                <div>
                                    <p className="font-medium text-sm">New connections</p>
                                    <p className="text-xs text-muted-foreground">Every week</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 2: Profile-checked */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="absolute -right-4 top-1/3 w-40 rounded-xl border border-border bg-card/95 p-4 shadow-glow backdrop-blur-sm"
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                                    <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-medium text-sm">Profile-checked</p>
                                    <p className="text-xs text-muted-foreground">LinkedIn/IG</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}

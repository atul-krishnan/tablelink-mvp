"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/sections/Container";
import { ButtonLink } from "@/components/ui/button";

export function StickyNav() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on escape
    React.useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsMobileMenuOpen(false);
        };
        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-background/95 backdrop-blur-sm border-b border-border/50 shadow-sm"
                    : "bg-transparent"
                }`}
        >
            <Container className="flex items-center justify-between py-4">
                {/* Logo */}
                <Link
                    href="/"
                    className="font-display text-xl font-semibold tracking-tight"
                >
                    {siteConfig.name}
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
                    {siteConfig.navigation.map((item) => (
                        <Link
                            key={item.title}
                            href={item.href}
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition"
                        >
                            {item.title}
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden md:block">
                    <ButtonLink href="#join" variant="primary">
                        Join
                    </ButtonLink>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden flex flex-col items-center justify-center w-10 h-10 rounded-lg hover:bg-muted transition"
                    aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMobileMenuOpen}
                >
                    <span
                        className={`block h-0.5 w-5 bg-foreground transition-transform duration-200 ${isMobileMenuOpen ? "rotate-45 translate-y-1" : ""
                            }`}
                    />
                    <span
                        className={`block h-0.5 w-5 bg-foreground mt-1 transition-opacity duration-200 ${isMobileMenuOpen ? "opacity-0" : ""
                            }`}
                    />
                    <span
                        className={`block h-0.5 w-5 bg-foreground mt-1 transition-transform duration-200 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                            }`}
                    />
                </button>
            </Container>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden border-t border-border/50 bg-background"
                    >
                        <Container className="py-4 space-y-3">
                            {siteConfig.navigation.map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block py-2 text-base font-medium text-muted-foreground hover:text-foreground transition"
                                >
                                    {item.title}
                                </Link>
                            ))}
                            <div className="pt-2">
                                <ButtonLink
                                    href="#join"
                                    variant="primary"
                                    className="w-full justify-center"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Join
                                </ButtonLink>
                            </div>
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

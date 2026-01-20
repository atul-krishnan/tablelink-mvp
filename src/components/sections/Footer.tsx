import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/sections/Container";

export function Footer() {
    const { footer } = siteConfig;

    return (
        <footer className="mt-auto border-t border-border bg-muted/30">
            <Container className="py-12">
                <div className="flex flex-col items-center text-center gap-6">
                    {/* Logo */}
                    <Link href="/" className="font-display text-xl font-semibold tracking-tight">
                        {siteConfig.name}
                    </Link>

                    {/* Tagline */}
                    <p className="text-muted-foreground text-sm max-w-md">
                        {footer.tagline}
                    </p>

                    {/* Contact */}
                    <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                        <a
                            href={`mailto:${footer.contact}`}
                            className="hover:text-foreground transition"
                        >
                            {footer.contact}
                        </a>
                        <span className="hidden sm:inline">|</span>
                        <a
                            href={`https://instagram.com/${footer.instagram.replace("@", "")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-foreground transition"
                        >
                            Instagram: {footer.instagram}
                        </a>
                    </div>

                    {/* Legal links */}
                    <div className="flex gap-6 text-sm text-muted-foreground">
                        {footer.legal.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="hover:text-foreground transition"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* Copyright */}
                    <p className="text-xs text-muted-foreground/60 mt-4">
                        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
                    </p>
                </div>
            </Container>
        </footer>
    );
}

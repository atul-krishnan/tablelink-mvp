import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/sections/Container";
import { Reveal } from "@/components/sections/Reveal";

export function SafetyTrust() {
    const { safety } = siteConfig;

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

                    {/* Venue Image */}
                    <Reveal>
                        <div className="relative hidden lg:block">
                            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden image-reveal shadow-glow">
                                <Image
                                    src="/images/safety-venue.jpg"
                                    alt="Beautiful, well-lit restaurant interior with warm ambient lighting"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />

                                {/* Subtle overlay for blend */}
                                <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />

                                {/* Border overlay */}
                                <div className="absolute inset-0 rounded-2xl border border-white/10" />
                            </div>

                            {/* Caption overlay */}
                            <div className="absolute bottom-4 left-4 right-4 glass-card rounded-xl p-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center text-lg">
                                        🛡️
                                    </div>
                                    <div>
                                        <p className="font-medium text-sm text-foreground">Public, well-lit venues</p>
                                        <p className="text-xs text-muted-foreground">Curated for comfort and safety</p>
                                    </div>
                                </div>
                            </div>

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

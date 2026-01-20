"use client";

import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/sections/Container";
import { Reveal } from "@/components/sections/Reveal";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface LocationsProps {
    onSelectNeighborhood?: (value: string) => void;
}

export function Locations({ onSelectNeighborhood }: LocationsProps) {
    const { locations } = siteConfig;

    const handleCardClick = (value: string) => {
        // Scroll to form
        const formSection = document.getElementById("join");
        if (formSection) {
            formSection.scrollIntoView({ behavior: "smooth" });
        }

        // Set neighborhood after a short delay to allow scroll
        if (onSelectNeighborhood) {
            setTimeout(() => {
                onSelectNeighborhood(value);
            }, 300);
        }
    };

    return (
        <section id="locations" className="py-20 sm:py-24 bg-muted/30">
            <Container>
                <Reveal className="mb-4">
                    <h2 className="headline-underline font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                        {locations.title}
                    </h2>
                </Reveal>

                <Reveal className="mb-12">
                    <p className="text-muted-foreground max-w-xl">
                        {locations.subtitle}
                    </p>
                </Reveal>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {locations.cards.map((location) => (
                        <Reveal key={location.title}>
                            <Card className={`h-full flex flex-col ${location.tag === "LIVE"
                                    ? "border-accent/30 bg-accent/5"
                                    : ""
                                }`}>
                                {/* Tag */}
                                <div className="mb-4">
                                    <span
                                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${location.tag === "LIVE"
                                                ? "bg-accent/20 text-accent"
                                                : "bg-muted text-muted-foreground"
                                            }`}
                                    >
                                        {location.tag === "LIVE" && (
                                            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                                        )}
                                        {location.tag}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                                    {location.title}
                                </h3>

                                {/* Body */}
                                <p className="text-sm text-muted-foreground mb-6 flex-grow">
                                    {location.body}
                                </p>

                                {/* Button */}
                                <Button
                                    variant={location.tag === "LIVE" ? "primary" : "secondary"}
                                    className="w-full justify-center"
                                    onClick={() => handleCardClick(location.value)}
                                >
                                    {location.button}
                                </Button>
                            </Card>
                        </Reveal>
                    ))}
                </div>

                <Reveal className="mt-8">
                    <p className="text-sm text-muted-foreground text-center">
                        {locations.note}
                    </p>
                </Reveal>
            </Container>
        </section>
    );
}

import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/sections/Container";
import { Reveal } from "@/components/sections/Reveal";

export function WhatThisIs() {
    const { whatThisIs } = siteConfig;

    return (
        <section className="py-20 sm:py-24 bg-muted/30">
            <Container>
                <Reveal className="mb-12">
                    <h2 className="headline-underline font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                        {whatThisIs.title}
                    </h2>
                    {whatThisIs.subtitle && (
                        <p className="mt-4 text-base text-muted-foreground max-w-2xl">
                            {whatThisIs.subtitle}
                        </p>
                    )}
                </Reveal>

                <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
                    {/* For You Column */}
                    <Reveal>
                        <div className="rounded-xl border border-success/20 bg-success/5 p-6 sm:p-8">
                            <h3 className="mb-5 text-lg font-semibold text-foreground flex items-center gap-2">
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-success/20 text-sm">
                                    ✓
                                </span>
                                {whatThisIs.forYou.header}
                            </h3>
                            <ul className="space-y-3">
                                {whatThisIs.forYou.bullets.map((bullet, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3 text-sm text-muted-foreground"
                                    >
                                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-success" />
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>

                    {/* Not For You Column */}
                    <Reveal>
                        <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
                            <h3 className="mb-5 text-lg font-semibold text-foreground flex items-center gap-2">
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-muted text-sm">
                                    ✕
                                </span>
                                {whatThisIs.notForYou.header}
                            </h3>
                            <ul className="space-y-3">
                                {whatThisIs.notForYou.bullets.map((bullet, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3 text-sm text-muted-foreground"
                                    >
                                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground/40" />
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>
                </div>
            </Container>
        </section>
    );
}

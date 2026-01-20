import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/sections/Container";
import { Reveal } from "@/components/sections/Reveal";

export function SeatConfirmation() {
    const { seatConfirmation } = siteConfig;

    return (
        <section className="py-20 sm:py-24 bg-muted/30">
            <Container>
                <div className="max-w-2xl">
                    <Reveal>
                        <h2 className="headline-underline font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                            {seatConfirmation.title}
                        </h2>
                    </Reveal>

                    <Reveal className="mt-6">
                        <p className="text-base text-muted-foreground">
                            {seatConfirmation.intro}
                        </p>
                    </Reveal>

                    <Reveal className="mt-8">
                        <div className="rounded-xl border border-border bg-card p-6">
                            <ul className="space-y-4">
                                {seatConfirmation.bullets.map((bullet, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3 text-sm text-foreground"
                                    >
                                        <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs text-accent font-medium">
                                            {index === 0 ? "✓" : index === 1 ? "!" : "₹"}
                                        </span>
                                        {bullet}
                                    </li>
                                ))}
                            </ul>

                            {/* Founding Circle Pricing Note */}
                            {seatConfirmation.foundingCircle && (
                                <div className="mt-6 pt-6 border-t border-border/50">
                                    <div className="rounded-lg bg-secondary/50 p-4 border border-border/50">
                                        <p className="text-xs font-semibold text-foreground mb-1 uppercase tracking-wider opacity-80">
                                            {seatConfirmation.foundingCircle.title}
                                        </p>
                                        <p className="text-xs text-muted-foreground leading-relaxed">
                                            {seatConfirmation.foundingCircle.text}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </Reveal>
                </div>
            </Container>
        </section>
    );
}

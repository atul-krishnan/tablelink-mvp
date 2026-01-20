import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/sections/Container";
import { Reveal } from "@/components/sections/Reveal";

export function HowItWorks() {
    const { howItWorks } = siteConfig;

    return (
        <section id="how-it-works" className="py-20 sm:py-24">
            <Container>
                <Reveal className="mb-12">
                    <h2 className="headline-underline font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                        {howItWorks.title}
                    </h2>
                </Reveal>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {howItWorks.steps.map((step, index) => (
                        <Reveal key={step.number}>
                            <div className="relative rounded-xl border border-border bg-card p-6 h-full">
                                {/* Step number */}
                                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background font-display font-semibold text-sm">
                                    {step.number}
                                </div>

                                {/* Connector line (except last) */}
                                {index < howItWorks.steps.length - 1 && (
                                    <div
                                        className="hidden lg:block absolute top-11 left-full w-full h-px bg-border -translate-x-8"
                                        aria-hidden="true"
                                    />
                                )}

                                <h3 className="mb-2 font-semibold text-foreground">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </Container>
        </section>
    );
}

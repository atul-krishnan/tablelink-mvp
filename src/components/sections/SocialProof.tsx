import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/sections/Container";
import { Reveal } from "@/components/sections/Reveal";

export function SocialProof() {
    const { socialProof } = siteConfig;

    return (
        <section className="py-12 sm:py-16 border-y border-border/50 bg-muted/20">
            <Container>
                <Reveal>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 text-center">
                        {socialProof.stats.map((stat, index) => (
                            <div key={index} className="flex flex-col items-center gap-2">
                                <p className="text-3xl font-semibold text-accent font-display">
                                    {stat.value}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </Container>
        </section>
    );
}

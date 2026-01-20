import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/sections/Container";
import { Reveal } from "@/components/sections/Reveal";

export function LaunchPolicy() {
    const { launchPolicy } = siteConfig;

    return (
        <section className="py-20 sm:py-24">
            <Container>
                <Reveal className="max-w-3xl">
                    <h2 className="headline-underline font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                        {launchPolicy.title}
                    </h2>
                    <p className="mt-6 text-base text-muted-foreground leading-relaxed">
                        {launchPolicy.body}
                    </p>
                </Reveal>
            </Container>
        </section>
    );
}

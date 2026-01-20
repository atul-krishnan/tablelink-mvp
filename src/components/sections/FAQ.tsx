import { siteConfig } from "@/lib/site-config";
import { Accordion } from "@/components/ui/accordion";
import { Container } from "@/components/sections/Container";
import { Reveal } from "@/components/sections/Reveal";

export function FAQ() {
    return (
        <section className="py-20 sm:py-24 bg-muted/30">
            <Container>
                <Reveal className="mb-10 max-w-2xl">
                    <h2 className="headline-underline font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                        Frequently asked questions
                    </h2>
                </Reveal>
                <div className="max-w-2xl">
                    <Accordion items={siteConfig.faqs} />
                </div>
            </Container>
        </section>
    );
}

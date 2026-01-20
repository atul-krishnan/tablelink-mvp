import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/sections/Container";
import { Reveal } from "@/components/sections/Reveal";

export function Formats() {
    const { formats } = siteConfig;

    return (
        <section className="py-12 sm:py-16">
            <Container>
                <Reveal className="max-w-3xl">
                    <div className="rounded-xl border border-border bg-card/70 p-6 sm:p-8">
                        <h3 className="text-lg font-semibold text-foreground">
                            {formats.title}
                        </h3>
                        <ul className="mt-4 space-y-2 text-sm text-muted-foreground leading-relaxed">
                            {formats.lines.map((line) => (
                                <li key={line} className="flex items-start gap-2">
                                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-muted-foreground/50" />
                                    <span>{line}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Reveal>
            </Container>
        </section>
    );
}

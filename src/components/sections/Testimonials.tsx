import { Container } from "@/components/sections/Container";
import { Reveal } from "@/components/sections/Reveal";

const testimonials = [
    {
        quote: "Finally found my people. These dinners feel like coming home.",
        name: "Priya",
        role: "Product Designer",
        location: "Indiranagar",
        avatar: "👩🏽‍💻"
    },
    {
        quote: "I moved to Bangalore alone. TableLink gave me a real social circle.",
        name: "Ananya",
        role: "Marketing Lead",
        location: "Koramangala",
        avatar: "👩🏻‍💼"
    },
    {
        quote: "The vetting process actually works. Everyone I've met has been genuine.",
        name: "Meera",
        role: "Startup Founder",
        location: "Indiranagar",
        avatar: "👩🏽‍🚀"
    }
];

export function Testimonials() {
    return (
        <section className="py-20 sm:py-24 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 gradient-sheen opacity-50" aria-hidden="true" />

            <Container className="relative">
                <Reveal className="text-center mb-12">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground mb-4">
                        From the circle
                    </p>
                    <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                        Real friendships. Real stories.
                    </h2>
                </Reveal>

                <div className="grid gap-6 md:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <Reveal key={testimonial.name}>
                            <div className="h-full rounded-2xl border border-border bg-card p-6 sm:p-8 relative group hover:shadow-soft transition-shadow duration-300">
                                {/* Quote mark */}
                                <div className="absolute top-4 right-4 text-4xl text-accent/20 font-serif">
                                    "
                                </div>

                                {/* Quote */}
                                <p className="text-foreground leading-relaxed mb-6 relative z-10">
                                    "{testimonial.quote}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-2xl">
                                        {testimonial.avatar}
                                    </div>
                                    <div>
                                        <p className="font-medium text-foreground">{testimonial.name}</p>
                                        <p className="text-sm text-muted-foreground">
                                            {testimonial.role} • {testimonial.location}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* Stats row */}
                <Reveal className="mt-16">
                    <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
                        <div>
                            <p className="font-display text-3xl sm:text-4xl font-semibold text-foreground">50+</p>
                            <p className="text-sm text-muted-foreground mt-1">Dinners hosted</p>
                        </div>
                        <div>
                            <p className="font-display text-3xl sm:text-4xl font-semibold text-foreground">200+</p>
                            <p className="text-sm text-muted-foreground mt-1">Members vetted</p>
                        </div>
                        <div>
                            <p className="font-display text-3xl sm:text-4xl font-semibold text-foreground">4.9★</p>
                            <p className="text-sm text-muted-foreground mt-1">Avg. rating</p>
                        </div>
                    </div>
                </Reveal>
            </Container>
        </section>
    );
}

import type { Metadata } from "next";
import { Container } from "@/components/sections/Container";

export const metadata: Metadata = {
    title: "Terms of Service",
    description: "Terms of service for TableLink dinner club."
};

export default function TermsPage() {
    return (
        <section className="py-20 sm:py-24">
            <Container>
                <div className="max-w-2xl">
                    <h1 className="font-display text-4xl font-semibold tracking-tight mb-8">
                        Terms of Service
                    </h1>

                    <p className="text-muted-foreground mb-6">
                        Last updated: January 2026
                    </p>

                    <div className="prose prose-neutral max-w-none space-y-6 text-muted-foreground">
                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-3">
                                Acceptance of Terms
                            </h2>
                            <p>
                                By applying to or participating in TableLink dinner circles, you agree to be
                                bound by these Terms of Service and our Code of Conduct.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-3">
                                The ₹199 Refundable Hold
                            </h2>
                            <p>
                                When you are invited to a dinner circle, a ₹199 hold confirms your seat.
                                This amount is refunded after you attend. Late cancellations (less than 24 hours
                                before the event) and no-shows will not be refunded. Food and drinks are paid
                                directly to the venue.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-3">
                                Code of Conduct
                            </h2>
                            <p>
                                TableLink is designed for genuine friendships. Dating, networking, or solicitation
                                of any kind is not permitted. We have zero tolerance for boundary violations.
                                Violation of these guidelines may result in removal from our community.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-3">
                                Eligibility
                            </h2>
                            <p>
                                Currently, TableLink is open to women aged 20-35 who are working professionals
                                in Bangalore. We may expand eligibility in the future.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-3">
                                Contact Us
                            </h2>
                            <p>
                                If you have any questions about these Terms, please contact us at{" "}
                                <a href="mailto:hello@tablelink.club" className="text-accent hover:underline">
                                    hello@tablelink.club
                                </a>
                            </p>
                        </section>
                    </div>
                </div>
            </Container>
        </section>
    );
}

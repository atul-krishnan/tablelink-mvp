import type { Metadata } from "next";
import { Container } from "@/components/sections/Container";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Privacy policy for TableLink dinner club."
};

export default function PrivacyPage() {
    return (
        <section className="py-20 sm:py-24">
            <Container>
                <div className="max-w-2xl">
                    <h1 className="font-display text-4xl font-semibold tracking-tight mb-8">
                        Privacy Policy
                    </h1>

                    <p className="text-muted-foreground mb-6">
                        Last updated: January 2026
                    </p>

                    <div className="prose prose-neutral max-w-none space-y-6 text-muted-foreground">
                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-3">
                                Information We Collect
                            </h2>
                            <p>
                                We collect information you provide directly to us when applying to join TableLink,
                                including your name, age, WhatsApp number, neighborhood preference, work type,
                                social media URL, and responses to application questions.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-3">
                                How We Use Your Information
                            </h2>
                            <p>
                                We use the information we collect to review your application, contact you about
                                upcoming dinner circles, and ensure the safety and quality of our community.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-3">
                                Information Sharing
                            </h2>
                            <p>
                                We do not sell your personal information. We may share your first name with other
                                attendees at your table. Phone numbers are never shared without your explicit consent.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-3">
                                Contact Us
                            </h2>
                            <p>
                                If you have any questions about this Privacy Policy, please contact us at{" "}
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

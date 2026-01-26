import type { Metadata } from "next";
import { Container } from "@/components/sections/Container";

export const metadata: Metadata = {
    title: "Terms of Service - OffHoursPanda",
    description: "Terms of service for OffHoursPanda dinner circles."
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
                        Last updated: January 23, 2026
                    </p>

                    <div className="prose prose-neutral max-w-none space-y-6 text-muted-foreground">
                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-3">
                                Acceptance of Terms
                            </h2>
                            <p>
                                By applying to or participating in OffHoursPanda dinner circles, you agree to be
                                bound by these Terms of Service and our Code of Conduct.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-3">
                                The ₹299 Refundable Hold
                            </h2>
                            <p>
                                When you are invited to a dinner circle, a ₹299 hold confirms your seat.
                                This amount is refunded after you attend. Late cancellations (less than 24 hours
                                before the event) and no-shows will not be refunded. Food and drinks are paid
                                directly to the venue.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-3">
                                Profile Verification
                            </h2>
                            <p>
                                All participants must provide a public LinkedIn or Instagram profile for verification.
                                We verify profiles to ensure safety and authenticity. Providing false information or
                                refusing verification will result in application rejection.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-3">
                                Code of Conduct
                            </h2>
                            <p>
                                OffHoursPanda is designed for genuine friendships. Dating, networking, or solicitation
                                of any kind is not permitted. We have zero tolerance for boundary violations, harassment,
                                or inappropriate behavior. Violation of these guidelines may result in immediate removal
                                from our community without refund.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold mb-4 text-foreground">
                                Eligibility
                            </h2>
                            <p className="text-muted-foreground mb-4">
                                Currently, OffHoursPanda is launching with a women-first pilot for ages 20-45 in Bangalore.
                                We verify profiles via LinkedIn/Instagram to ensure the safety and quality of our community.
                                We reserve the right to decline any application at our discretion.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-3">
                                Application Process
                            </h2>
                            <p>
                                We review applications weekly. Not all applicants will be selected. Selection is based on
                                profile verification, neighborhood availability, and maintaining balanced group dynamics.
                                If selected, you'll receive an invite via WhatsApp with venue details.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold mb-4 text-foreground">
                                Cancellation Policy
                            </h2>
                            <p className="text-muted-foreground mb-4">
                                You may cancel your attendance up to 24 hours before the scheduled event for a full
                                refund of the hold amount. Cancellations made within
                                24 hours or no-shows will forfeit the ₹299 hold. Repeated cancellations may affect future
                                eligibility.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-3">
                                Liability
                            </h2>
                            <p>
                                OffHoursPanda facilitates connections but is not responsible for individual interactions,
                                venue safety, or personal belongings. Participants attend at their own risk. We recommend
                                following standard safety practices when meeting new people.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-3">
                                Changes to Terms
                            </h2>
                            <p>
                                We may update these Terms from time to time. We will notify you of significant changes
                                via email or WhatsApp. Continued participation after changes constitutes acceptance.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-3">
                                Contact Us
                            </h2>
                            <p>
                                If you have any questions about these Terms, please contact us at{" "}
                                <a href="mailto:offhourspanda@gmail.com" className="text-accent hover:underline">
                                    offhourspanda@gmail.com
                                </a>
                            </p>
                        </section>

                        <div className="mt-8 p-4 bg-muted/30 rounded-lg">
                            <p className="text-sm mb-0">
                                <strong>Pilot Program:</strong> We're starting small and building trust carefully.
                                These terms may evolve as we learn and grow.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

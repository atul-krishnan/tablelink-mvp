import type { Metadata } from "next";
import { Container } from "@/components/sections/Container";

export const metadata: Metadata = {
    title: "Privacy Policy - OffHoursPanda",
    description: "Privacy policy for OffHoursPanda dinner circles."
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
                        Last updated: January 23, 2026
                    </p>

                    <div className="prose prose-neutral max-w-none space-y-6 text-muted-foreground">
                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-3">
                                Information We Collect
                            </h2>
                            <p>
                                We collect information you provide when applying to OffHoursPanda,
                                including your name, age, WhatsApp number, neighborhood preference, work type,
                                LinkedIn or Instagram URL (public profiles only), and responses to application questions.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-3">
                                Profile Verification
                            </h2>
                            <p>
                                We verify all participants through their public LinkedIn or Instagram profiles to ensure
                                safety and authenticity. We only access publicly available information and do not store
                                sensitive profile data.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-3">
                                How We Use Your Information
                            </h2>
                            <p>
                                We use the information we collect to review your application, verify your identity,
                                match you with appropriate dinner groups based on neighborhood, send you WhatsApp
                                notifications about dinner details, and ensure the safety and quality of our community.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-3">
                                Information Sharing
                            </h2>
                            <p>
                                We do not sell your personal information. We may share your first name and general
                                interests with other attendees at your table. Phone numbers are never shared without
                                your explicit consent. We use Google Sheets for application management and WhatsApp
                                Business API for communications.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-3">
                                Data Security & Retention
                            </h2>
                            <p>
                                We implement industry-standard security measures including encrypted data transmission (HTTPS)
                                and secure storage. We retain application data for 6 months. If you attend a dinner, we keep
                                basic information (first name, preferences) for matching future events. You can request
                                deletion at any time.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-3">
                                Your Rights
                            </h2>
                            <p>
                                You have the right to access, correct, or delete your personal data, opt-out of communications,
                                and withdraw consent at any time. Our service is only for individuals aged 20-35.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-3">
                                Contact Us
                            </h2>
                            <p>
                                If you have any questions about this Privacy Policy, please contact us at{" "}
                                <a href="mailto:offhourspanda@gmail.com" className="text-accent hover:underline">
                                    offhourspanda@gmail.com
                                </a>
                            </p>
                        </section>

                        <div className="mt-8 p-4 bg-muted/30 rounded-lg">
                            <p className="text-sm mb-0">
                                <strong>Note:</strong> This is a pilot program. We're building trust slowly and carefully.
                                Your privacy and safety are our top priorities.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

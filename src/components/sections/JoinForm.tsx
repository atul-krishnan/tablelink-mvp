"use client";

import * as React from "react";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/sections/Container";
import { Reveal } from "@/components/sections/Reveal";
import { Button } from "@/components/ui/button";
import { Toast } from "@/components/ui/toast";

interface JoinFormProps {
    preselectedNeighborhood?: string;
}

interface FormData {
    fullName: string;
    age: string;
    whatsappNumber: string;
    neighborhood: string;
    maxTravelTime: string;
    workType: string;
    hopes: string;
    socialUrl: string;
    newToBangalore: string;
    howLong: string;
    consent: boolean;
}

interface FormErrors {
    [key: string]: string;
}

export function JoinForm({ preselectedNeighborhood }: JoinFormProps) {
    const { joinForm } = siteConfig;
    const [isSubmitted, setIsSubmitted] = React.useState(false);
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [toast, setToast] = React.useState({ visible: false, message: "", type: "success" as "success" | "error" });
    const [errors, setErrors] = React.useState<FormErrors>({});

    const [formData, setFormData] = React.useState<FormData>({
        fullName: "",
        age: "",
        whatsappNumber: "",
        neighborhood: preselectedNeighborhood || "",
        maxTravelTime: "",
        workType: "",
        hopes: "",
        socialUrl: "",
        newToBangalore: "",
        howLong: "",
        consent: false
    });

    // Update neighborhood when preselected changes
    React.useEffect(() => {
        if (preselectedNeighborhood) {
            setFormData(prev => ({ ...prev, neighborhood: preselectedNeighborhood }));
        }
    }, [preselectedNeighborhood]);

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = "Full name is required";
        }

        const age = parseInt(formData.age);
        if (!formData.age || isNaN(age) || age < 20 || age > 35) {
            newErrors.age = "Age must be between 20 and 35";
        }

        if (!formData.whatsappNumber.trim()) {
            newErrors.whatsappNumber = "WhatsApp number is required";
        } else if (!/^[+]?[\d\s-]{10,}$/.test(formData.whatsappNumber.replace(/\s/g, ""))) {
            newErrors.whatsappNumber = "Please enter a valid phone number";
        }

        if (!formData.neighborhood) {
            newErrors.neighborhood = "Please select a neighborhood";
        }

        if (!formData.maxTravelTime) {
            newErrors.maxTravelTime = "Please select max travel time";
        }

        if (!formData.workType) {
            newErrors.workType = "Please select work type";
        }

        if (!formData.hopes.trim() || formData.hopes.trim().length < 15) {
            newErrors.hopes = "Please write at least 15 characters";
        }

        if (!formData.socialUrl.trim()) {
            newErrors.socialUrl = "LinkedIn or Instagram URL is required";
        } else if (!formData.socialUrl.includes("linkedin.com") && !formData.socialUrl.includes("instagram.com")) {
            newErrors.socialUrl = "Please enter a valid LinkedIn or Instagram URL";
        }

        if (!formData.consent) {
            newErrors.consent = "You must agree to continue";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            const endpoint = process.env.NEXT_PUBLIC_SHEETS_ENDPOINT;

            if (!endpoint) {
                console.warn("No SHEETS_ENDPOINT configured, simulating success");
                // Simulate success for demo
                await new Promise(resolve => setTimeout(resolve, 1000));
                setIsSubmitted(true);
                setToast({ visible: true, message: "Application submitted successfully!", type: "success" });
                return;
            }

            const response = await fetch(endpoint, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...formData,
                    submittedAt: new Date().toISOString()
                })
            });

            // With no-cors, we can't read the response, so assume success
            setIsSubmitted(true);
            setToast({ visible: true, message: "Application submitted successfully!", type: "success" });
        } catch (error) {
            console.error("Submit error:", error);
            setToast({ visible: true, message: "Something went wrong. Please try again.", type: "error" });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;

        setFormData(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: "" }));
        }
    };

    // Success state
    if (isSubmitted) {
        return (
            <section id="join" className="py-20 sm:py-24">
                <Container>
                    <Reveal>
                        <div className="max-w-xl mx-auto text-center">
                            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-success/10 text-success text-2xl">
                                ✓
                            </div>
                            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl text-foreground">
                                {joinForm.success.headline}
                            </h2>
                            <p className="mt-4 text-muted-foreground">
                                {joinForm.success.text}
                            </p>
                            <p className="mt-6 text-sm text-muted-foreground/80 italic">
                                {joinForm.success.reminder}
                            </p>
                        </div>
                    </Reveal>
                </Container>
            </section>
        );
    }

    return (
        <section id="join" className="py-20 sm:py-24">
            <Container>
                <div className="max-w-2xl mx-auto">
                    <Reveal className="text-center mb-10">
                        <h2 className="headline-underline font-display text-3xl font-semibold tracking-tight sm:text-4xl inline-block">
                            {joinForm.title}
                        </h2>
                        <p className="mt-6 text-muted-foreground">
                            {joinForm.body}
                        </p>
                    </Reveal>

                    <Reveal>
                        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                            {/* Full Name */}
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-2">
                                    Full Name <span className="text-error">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your full name"
                                    aria-invalid={!!errors.fullName}
                                    aria-describedby={errors.fullName ? "fullName-error" : undefined}
                                />
                                {errors.fullName && (
                                    <p id="fullName-error" className="mt-1 text-sm text-error">{errors.fullName}</p>
                                )}
                            </div>

                            {/* Age */}
                            <div>
                                <label htmlFor="age" className="block text-sm font-medium text-foreground mb-2">
                                    Age <span className="text-error">*</span>
                                </label>
                                <input
                                    type="number"
                                    id="age"
                                    name="age"
                                    value={formData.age}
                                    onChange={handleChange}
                                    required
                                    min={20}
                                    max={35}
                                    placeholder="20-35"
                                    aria-invalid={!!errors.age}
                                    aria-describedby={errors.age ? "age-error" : undefined}
                                />
                                {errors.age && (
                                    <p id="age-error" className="mt-1 text-sm text-error">{errors.age}</p>
                                )}
                            </div>

                            {/* WhatsApp Number */}
                            <div>
                                <label htmlFor="whatsappNumber" className="block text-sm font-medium text-foreground mb-2">
                                    WhatsApp Number <span className="text-error">*</span>
                                </label>
                                <input
                                    type="tel"
                                    id="whatsappNumber"
                                    name="whatsappNumber"
                                    value={formData.whatsappNumber}
                                    onChange={handleChange}
                                    required
                                    placeholder="+91 98765 43210"
                                    aria-invalid={!!errors.whatsappNumber}
                                    aria-describedby={errors.whatsappNumber ? "whatsappNumber-error" : undefined}
                                />
                                {errors.whatsappNumber && (
                                    <p id="whatsappNumber-error" className="mt-1 text-sm text-error">{errors.whatsappNumber}</p>
                                )}
                            </div>

                            {/* Neighborhood */}
                            <div>
                                <label htmlFor="neighborhood" className="block text-sm font-medium text-foreground mb-2">
                                    Preferred Neighborhood <span className="text-error">*</span>
                                </label>
                                <select
                                    id="neighborhood"
                                    name="neighborhood"
                                    value={formData.neighborhood}
                                    onChange={handleChange}
                                    required
                                    aria-invalid={!!errors.neighborhood}
                                    aria-describedby={errors.neighborhood ? "neighborhood-error" : undefined}
                                >
                                    <option value="">Select neighborhood</option>
                                    {joinForm.neighborhoods.map((n) => (
                                        <option key={n} value={n}>{n}</option>
                                    ))}
                                </select>
                                {errors.neighborhood && (
                                    <p id="neighborhood-error" className="mt-1 text-sm text-error">{errors.neighborhood}</p>
                                )}
                            </div>

                            {/* Max Travel Time */}
                            <div>
                                <label htmlFor="maxTravelTime" className="block text-sm font-medium text-foreground mb-2">
                                    Max Travel Time <span className="text-error">*</span>
                                </label>
                                <select
                                    id="maxTravelTime"
                                    name="maxTravelTime"
                                    value={formData.maxTravelTime}
                                    onChange={handleChange}
                                    required
                                    aria-invalid={!!errors.maxTravelTime}
                                    aria-describedby={errors.maxTravelTime ? "maxTravelTime-error" : undefined}
                                >
                                    <option value="">Select max travel time</option>
                                    {joinForm.travelTimes.map((t) => (
                                        <option key={t} value={t}>{t}</option>
                                    ))}
                                </select>
                                {errors.maxTravelTime && (
                                    <p id="maxTravelTime-error" className="mt-1 text-sm text-error">{errors.maxTravelTime}</p>
                                )}
                            </div>

                            {/* Work Type */}
                            <div>
                                <label htmlFor="workType" className="block text-sm font-medium text-foreground mb-2">
                                    What best describes you? <span className="text-error">*</span>
                                </label>
                                <select
                                    id="workType"
                                    name="workType"
                                    value={formData.workType}
                                    onChange={handleChange}
                                    required
                                    aria-invalid={!!errors.workType}
                                    aria-describedby={errors.workType ? "workType-error" : undefined}
                                >
                                    <option value="">Select option</option>
                                    {joinForm.workTypes.map((w) => (
                                        <option key={w} value={w}>{w}</option>
                                    ))}
                                </select>
                                {errors.workType && (
                                    <p id="workType-error" className="mt-1 text-sm text-error">{errors.workType}</p>
                                )}
                            </div>

                            {/* Hopes */}
                            <div>
                                <label htmlFor="hopes" className="block text-sm font-medium text-foreground mb-2">
                                    What are you hoping to get out of this? <span className="text-error">*</span>
                                </label>
                                <textarea
                                    id="hopes"
                                    name="hopes"
                                    value={formData.hopes}
                                    onChange={handleChange}
                                    required
                                    rows={3}
                                    placeholder="Tell us a bit about what you're looking for..."
                                    aria-invalid={!!errors.hopes}
                                    aria-describedby={errors.hopes ? "hopes-error" : undefined}
                                />
                                {errors.hopes && (
                                    <p id="hopes-error" className="mt-1 text-sm text-error">{errors.hopes}</p>
                                )}
                            </div>

                            {/* Social URL */}
                            <div>
                                <label htmlFor="socialUrl" className="block text-sm font-medium text-foreground mb-2">
                                    LinkedIn or Instagram URL <span className="text-error">*</span>
                                </label>
                                <input
                                    type="url"
                                    id="socialUrl"
                                    name="socialUrl"
                                    value={formData.socialUrl}
                                    onChange={handleChange}
                                    required
                                    placeholder="https://linkedin.com/in/yourprofile"
                                    aria-invalid={!!errors.socialUrl}
                                    aria-describedby={errors.socialUrl ? "socialUrl-error" : undefined}
                                />
                                {errors.socialUrl && (
                                    <p id="socialUrl-error" className="mt-1 text-sm text-error">{errors.socialUrl}</p>
                                )}
                            </div>

                            {/* New to Bangalore */}
                            <div>
                                <label htmlFor="newToBangalore" className="block text-sm font-medium text-foreground mb-2">
                                    New to Bangalore?
                                </label>
                                <select
                                    id="newToBangalore"
                                    name="newToBangalore"
                                    value={formData.newToBangalore}
                                    onChange={handleChange}
                                >
                                    <option value="">Select</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>

                            {/* How Long - conditional */}
                            {formData.newToBangalore === "Yes" && (
                                <div>
                                    <label htmlFor="howLong" className="block text-sm font-medium text-foreground mb-2">
                                        How long have you been here?
                                    </label>
                                    <input
                                        type="text"
                                        id="howLong"
                                        name="howLong"
                                        value={formData.howLong}
                                        onChange={handleChange}
                                        placeholder="e.g., 6 months"
                                    />
                                </div>
                            )}

                            {/* Consent */}
                            <div className="flex items-start gap-3">
                                <input
                                    type="checkbox"
                                    id="consent"
                                    name="consent"
                                    checked={formData.consent}
                                    onChange={handleChange}
                                    required
                                    className="mt-1"
                                    aria-invalid={!!errors.consent}
                                    aria-describedby={errors.consent ? "consent-error" : undefined}
                                />
                                <label htmlFor="consent" className="text-sm text-muted-foreground">
                                    {joinForm.consentText} <span className="text-error">*</span>
                                </label>
                            </div>
                            {errors.consent && (
                                <p id="consent-error" className="text-sm text-error -mt-4">{errors.consent}</p>
                            )}

                            {/* Submit */}
                            <Button
                                type="submit"
                                variant="primary"
                                className="w-full justify-center py-4"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Submitting..." : joinForm.submitButton}
                            </Button>
                        </form>
                    </Reveal>
                </div>
            </Container>

            <Toast
                message={toast.message}
                isVisible={toast.visible}
                onClose={() => setToast(prev => ({ ...prev, visible: false }))}
                type={toast.type}
            />
        </section>
    );
}

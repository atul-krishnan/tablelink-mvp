export const siteConfig = {
    name: "TableLink",
    description: "A trust-first dinner club for real friendships. Curated dinner circles for working professionals who want genuine connection.",
    url: "https://tablelink.club",
    ogImage: "/og-image.png",

    navigation: [
        { title: "How it works", href: "#how-it-works" },
        { title: "Safety", href: "#safety" },
        { title: "Locations", href: "#locations" },
        { title: "Join", href: "#join" }
    ],

    hero: {
        headline: "A trust-first dinner club for real friendships.",
        subheadline: "Curated dinner circles for working professionals who want genuine connection — not dating, not networking.",
        badge: "Now launching in Bangalore with women-only tables.",
        holdLine: "₹199 refundable hold to confirm your seat (refunded after you attend). Food/drinks paid at the venue.",
        primaryCta: { label: "Join the circle", href: "#join" },
        secondaryCta: { label: "How it works", href: "#how-it-works" }
    },

    whatThisIs: {
        title: "Built for comfort, not chaos.",
        forYou: {
            header: "This is for you if you…",
            bullets: [
                "want real friendships and a consistent social circle",
                "prefer small groups over loud meetups",
                "are 20–35, working (job/business), ₹60k+ income",
                "can commit to showing up (we keep circles small on purpose)"
            ]
        },
        notForYou: {
            header: "This is NOT for you if you…",
            bullets: [
                "want a dating event",
                "want a networking mixer",
                "want a big 'meet strangers' meetup"
            ]
        }
    },

    howItWorks: {
        title: "How it works",
        steps: [
            {
                number: 1,
                title: "Apply",
                description: "Answer a few questions so we can curate the right table."
            },
            {
                number: 2,
                title: "Get vetted",
                description: "Verified profiles help keep circles safe and comfortable."
            },
            {
                number: 3,
                title: "Get invited",
                description: "If selected, you'll receive a WhatsApp invite with the details."
            },
            {
                number: 4,
                title: "Show up & build a circle",
                description: "Circles are designed for repeat comfort, not one-time novelty."
            }
        ]
    },

    seatConfirmation: {
        title: "Seat confirmation (₹199 refundable hold)",
        intro: "No-shows ruin small circles. The ₹199 refundable hold ensures everyone commits.",
        bullets: [
            "Refunded after you attend",
            "Non-refundable for late cancellations (<24h) or no-shows",
            "Food/drinks are paid directly to the venue"
        ]
    },

    safety: {
        title: "Safety is the baseline.",
        bullets: [
            "Launching with women-only tables",
            "Public, well-lit venues",
            "Verified profiles required (LinkedIn/Instagram)",
            "Clear code of conduct",
            "Zero tolerance for boundary violations"
        ],
        privacyLine: "We don't share phone numbers at the table. Any connections happen only by mutual opt-in."
    },

    locations: {
        title: "Starting city-by-city",
        subtitle: "We open one neighborhood at a time so tables fill reliably and quality stays high.",
        cards: [
            {
                tag: "LIVE",
                title: "Indiranagar",
                body: "Weekly dinner circles curated for comfort, safety, and repeatability.",
                button: "Join Indiranagar circle",
                value: "Indiranagar (Live)"
            },
            {
                tag: "COMING SOON",
                title: "Koramangala",
                body: "We'll launch when the waitlist hits critical mass.",
                button: "Join Koramangala waitlist",
                value: "Koramangala (Coming soon)"
            },
            {
                tag: "COMING SOON",
                title: "MG Road",
                body: "Join the waitlist to help us open circles here next.",
                button: "Join MG Road waitlist",
                value: "MG Road (Coming soon)"
            }
        ],
        note: "We're starting small on purpose. Quality first."
    },

    joinForm: {
        title: "Join the circle",
        body: "We review applications weekly. If selected, you'll get an invite on WhatsApp.",
        neighborhoods: [
            "Indiranagar (Live)",
            "Koramangala (Coming soon)",
            "MG Road (Coming soon)",
            "Other"
        ],
        travelTimes: ["15 min", "20 min", "30 min"],
        workTypes: ["Job", "Business", "Freelance"],
        consentText: "I agree to the code of conduct and understand the ₹199 hold policy.",
        submitButton: "Apply",
        success: {
            headline: "You're on the list.",
            text: "If selected, we'll reach out on WhatsApp with details for the next circle.",
            reminder: "Indiranagar invites go out first. Koramangala and MG Road will open based on demand."
        }
    },

    faqs: [
        {
            question: "Is this only for Bangalore?",
            answer: "We're starting with Bangalore to get the experience right. If it works, we'll expand city-by-city."
        },
        {
            question: "Is this dating?",
            answer: "No. Friendship-first only. If you're looking to date, this isn't the right place."
        },
        {
            question: "Is this networking?",
            answer: "No pitches, no 'salesy' vibe. Real conversations only."
        },
        {
            question: "How does the ₹199 hold work?",
            answer: "It confirms your seat and reduces no-shows. It's refunded after you attend. Late cancellations (<24 hours) and no-shows aren't refunded."
        },
        {
            question: "When do I get the venue details?",
            answer: "If selected, you'll receive the details via WhatsApp."
        }
    ],

    footer: {
        tagline: "Built with trust. Grown city-by-city.",
        contact: "hello@tablelink.club",
        instagram: "@tablelink",
        legal: [
            { label: "Privacy", href: "/privacy" },
            { label: "Terms", href: "/terms" }
        ]
    }
};

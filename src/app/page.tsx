"use client";

import * as React from "react";
import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { WhatThisIs } from "@/components/sections/WhatThisIs";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { SeatConfirmation } from "@/components/sections/SeatConfirmation";
import { SafetyTrust } from "@/components/sections/SafetyTrust";
import { Locations } from "@/components/sections/Locations";
import { JoinForm } from "@/components/sections/JoinForm";
import { FAQ } from "@/components/sections/FAQ";

export default function HomePage() {
    const [selectedNeighborhood, setSelectedNeighborhood] = React.useState("");

    return (
        <>
            <Hero />
            <SocialProof />
            <WhatThisIs />
            <HowItWorks />
            <SeatConfirmation />
            <SafetyTrust />
            <Locations onSelectNeighborhood={setSelectedNeighborhood} />
            <JoinForm preselectedNeighborhood={selectedNeighborhood} />
            <FAQ />
        </>
    );
}

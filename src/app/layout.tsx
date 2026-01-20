import "./globals.css";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { StickyNav } from "@/components/sections/StickyNav";
import { Footer } from "@/components/sections/Footer";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`
    },
    description: siteConfig.description,
    keywords: ["dinner club", "friendships", "Bangalore", "women", "social", "community", "curated", "offline circles"],
    openGraph: {
        title: siteConfig.name,
        description: siteConfig.description,
        url: siteConfig.url,
        siteName: siteConfig.name,
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: siteConfig.name
            }
        ],
        locale: "en_IN",
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: `${siteConfig.name} — Trust-first dinner club`,
        description: siteConfig.description,
        images: [siteConfig.ogImage]
    },
    robots: {
        index: true,
        follow: true
    }
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="font-sans">
            <body className="font-sans">
                <SmoothScrollProvider>
                    <div className="flex min-h-screen flex-col">
                        <StickyNav />
                        <main className="flex-1">{children}</main>
                        <Footer />
                    </div>
                </SmoothScrollProvider>
            </body>
        </html>
    );
}


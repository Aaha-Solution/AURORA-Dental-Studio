import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { CLINIC, REVIEW_SUMMARY } from "@/lib/constants";

const playfair = localFont({
  src: "./fonts/PlayfairDisplay-Variable.woff2",
  variable: "--font-playfair",
  display: "swap",
  weight: "400 700",
});

const inter = localFont({
  src: "./fonts/Inter-Variable.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "400 700",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://auroradentalstudio.example.com"),
  title: {
    default: "AURORA Dental Studio | Modern Dentistry",
    template: "%s | AURORA Dental Studio",
  },
  description:
    "Modern, personalized dental care designed around your comfort and confidence.",
  keywords: [
    "dental clinic",
    "cosmetic dentistry",
    "veneers",
    "dental implants",
    "teeth whitening",
    "orthodontics",
    "White Town",
    "Puducherry",
    "dentist",
    "AURORA Dental Studio",
  ],
  openGraph: {
    title: "AURORA Dental Studio | Modern Dentistry",
    description:
      "Modern, personalized dental care designed around your comfort and confidence.",
    siteName: "AURORA Dental Studio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AURORA Dental Studio | Modern Dentistry",
    description:
      "Modern, personalized dental care designed around your comfort and confidence.",
  },
  authors: [{ name: "AAHA Solutions" }],
  creator: "AAHA Solutions",
  publisher: "AAHA Solutions",
  other: {
    copyright: "© 2026 AAHA Solutions. All rights reserved. Unauthorized reproduction or use is strictly prohibited.",
  },
};

/** Dentist structured data. Helps search engines understand the clinic. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: CLINIC.name,
  description:
    "Modern, personalized dental care designed around your comfort and confidence.",
  url: "https://auroradentalstudio.example.com",
  telephone: CLINIC.phone,
  email: CLINIC.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "White Town",
    addressLocality: "Puducherry",
    addressRegion: "Puducherry",
    postalCode: "605001",
    addressCountry: "IN",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "10:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday"],
      opens: "10:00",
      closes: "14:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: REVIEW_SUMMARY.rating,
    reviewCount: 300,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        {/*
         * Preload critical 3D model and above-the-fold image assets
         */}
        <link
          rel="preload"
          as="fetch"
          href="/models/tooth.glb"
          crossOrigin="anonymous"
        />
        <link rel="preload" as="image" href="/images/doctor.png" />
        <link rel="preload" as="image" href="/images/featured_makeover.png" />
      </head>
      {/* suppressHydrationWarning: browser extensions (e.g. Grammarly) inject
          attributes onto <body> before hydration — this only silences that
          body-level attribute mismatch, not real mismatches in the tree. */}
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

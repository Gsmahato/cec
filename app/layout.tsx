import type { Metadata } from "next";
import "./globals.css";

// Comprehensive SEO Metadata Configuration covering Centrist Ideology & Keywords
export const metadata: Metadata = {
  title: {
    default: "Centrist Economic Club | आर्थिक साक्षरता र सन्तुलन",
    template: "%s | Centrist Economic Club"
  },
  description: "वित्तीय साक्षरता, डिजिटल ज्ञान, र सन्तुलित आर्थिक नीति मार्फत प्रत्येक नेपालीको प्रतिव्यक्ति आम्दानी $५,००० पुर्‍याउने महाअभियान। Join the Centrist Economic Club for extreme economic balance and local wealth creation.",
  keywords: [
    "Centrist Economic Club", 
    "केन्द्रमार्गी आर्थिक क्लब", 
    "Financial Literacy Nepal", 
    "आर्थिक साक्षरता अभियान", 
    "Per Capita Income 5000 USD Nepal", 
    "प्रति व्यक्ति ५००० डलर लक्ष्य", 
    "Centrist Economic Policy", 
    "सन्तुलित आर्थिक नीति", 
    "Share Market Literacy Nepal", 
    "सेयर बजार तालिम", 
    "Citizenism", 
    "नागरिकवाद", 
    "Eastern Philosophy Economy", 
    "पूर्वीय दर्शन"
  ],
  authors: [{ name: "Centrist Economic Club" }],
  creator: "Centrist Economic Club",
  publisher: "Centrist Economic Club",
  
  // OpenGraph configuration for rich card previews on social platforms (Facebook, LinkedIn, Twitter)
  openGraph: {
    title: "Centrist Economic Club | आर्थिक साक्षरता र सन्तुलन",
    description: "नेपालको वडा तहदेखि केन्द्रसम्म बलियो सञ्जाल बनाएर प्रत्येक व्यक्तिको वार्षिक आम्दानी $५,००० पुर्‍याउने संगठनात्मक संरचना र रणनीतिक मार्गचित्र।",
    url: "https://www.centristideology.com",
    siteName: "Centrist Economic Club",
    locale: "ne_NP",
    type: "website",
  },

  // Search Engine Bot Control Instructions
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Set to "ne" to correctly signal your primary Nepali content to search engine language bots
    <html lang="ne">
      {/* Added suppression for basic browser extension hydration attributes */}
      <body suppressHydrationWarning className="antialiased">
        {children}
      </body>
    </html>
  );
}
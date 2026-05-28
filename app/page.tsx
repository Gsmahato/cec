import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Structure from "./components/Structure";
import Training from "./components/Training";
import Philosophy from "./components/Philosophy";
import Footer from "./components/Footer";

export default function Home() {
  // Master JSON-LD Object explaining the Organization and its Core Curriculum
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.centristideology.com/#organization", // Replace with your domain
        "name": "Centrist Economic Club",
        "alternateName": "केन्द्रमार्गी आर्थिक क्लब",
        "url": "https://www.centristideology.com",
        "logo": "https://www.centristideology.com/logo.png",
        "description": "वित्तीय साक्षरता, डिजिटल ज्ञान, र सन्तुलित आर्थिक नीति मार्फत प्रत्येक नेपालीको प्रतिव्यक्ति आम्दानी $५,००० पुर्‍याउने महाअभियान।",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "NP"
        }
      },
      {
        "@type": "EducationalProgram",
        "name": "Centrist Economic Club Training Curriculum",
        "description": "प्रशिक्षण कार्यक्रम - साक्षरता कार्यक्रम र पूर्वीय दर्शन र विचारधारा",
        "provider": {
          "@id": "https://www.centristideology.com"
        },
        "hasCourse": [
          { "@type": "Course", "name": "Digital Literacy (डिजिटल साक्षरता)" },
          { "@type": "Course", "name": "Financial Literacy (वित्तीय साक्षरता)" },
          { "@type": "Course", "name": "SME Literacy (साना तथा मझौला उद्योग)" },
          { "@type": "Course", "name": "Share Market Literacy (सेयर बजार)" },
          { "@type": "Course", "name": "Insurance Literacy (बिमा साक्षरता)" },
          { "@type": "Course", "name": "Centrist Ideology (मध्यमार्गी विचारधारा)" },
          { "@type": "Course", "name": "Citizenism (नागरिकवाद)" },
          { "@type": "Course", "name": "Community-base Economic (समुदायमा आधारित अर्थतन्त्र)" },
          { "@type": "Course", "name": "Unite & Rule (एकता र नेतृत्व)" }
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Injecting Structured Data into the HTML Head for Search Bots */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      <Navbar />
      <Hero />
      <Structure />
      <Training />
      <Philosophy />
      <Footer />
    </main>
  );
}
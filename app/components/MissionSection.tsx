// components/MissionSection.tsx
import React from 'react';

export default function MissionSection() {
  return (
    <section id="philosophy" className="py-12 md:py-16 bg-blue-900 text-white text-center" itemScope itemType="https://schema.org/Article">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold mb-6" itemProp="headline">
          अन्तमा (Mission)
        </h2>
        
        <div className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
          <p itemProp="articleBody" className="text-blue-100">
            Centrist Economic Club ले नेपालको वडा तहदेखि प्रदेश र केन्द्रसम्म एउटा बलियो सञ्जाल (Network) बनाएर नेपाली नागरिकहरूलाई आधुनिक प्रविधि, व्यवसाय र अर्थतन्त्रमा साक्षर बनाउँदै पूर्वीय दर्शनको जगमा एउटा समृद्ध, सन्तुलित र आत्मनिर्भर आर्थिक समाज निर्माण गर्न खोजेको स्पष्ट मार्गचित्र प्रस्तुत गर्दछ।
          </p>
          
          <div className="mt-8 p-5 bg-green-600 rounded-xl inline-block shadow-md">
            <p className="font-bold text-xl md:text-2xl">
              #प्रशिक्षणमा सिकाउने बिषय बस्तुहरु
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
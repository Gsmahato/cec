// components/Hero.tsx
import React from 'react';

export default function Hero() {
  return (
    // Converted to a semantic <section> with campaign microdata for search crawlers
    <section 
      className="relative h-[550px] md:h-[600px] flex items-center justify-center overflow-hidden"
      itemScope 
      itemType="https://schema.org/CreativeWork"
    >
      {/* Cover Image Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 scale-105"
        style={{ backgroundImage: "url('/cec.jpeg')" }}
        role="img"
        aria-label="Centrist Economic Club Background Banner"
      >
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-blue-950/85"></div>
      </div>

      {/* Content Container - Consistent with global alignment constraints */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center text-white">
        
        {/* Main H1 heading optimized as the primary brand entity text */}
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 tracking-tight text-white dropped-shadow-sm"
          itemProp="name"
        >
          Centrist Economic Club
        </h1>
        
        {/* Secondary headline serving as the core ideology description */}
        <p 
          className="text-lg sm:text-xl md:text-2xl font-medium mb-8 text-blue-200"
          itemProp="alternativeHeadline"
        >
          आर्थिक साक्षरता र सन्तुलन
        </p>
        
        {/* Clear target metric container */}
        <div className="inline-block bg-green-600 hover:bg-green-500 px-6 py-3 sm:px-8 sm:py-4 rounded-full text-xl sm:text-2xl font-bold shadow-xl transform hover:scale-105 transition-all duration-300 ease-out border border-green-400/20">
          लक्ष्य: प्रति व्यक्ति $५,००० (अमेरिकी डलर)
        </div>
        
        {/* Target description mapped directly as the informational purpose string */}
        <p 
          className="mt-6 text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
          itemProp="abstract"
        >
          व्यक्तिगत आम्दानी $५,०००/- को लक्ष्य प्राप्त गर्नका लागि निर्माण गरिने देशव्यापी संगठनात्मक संरचना
        </p>
      </div>
    </section>
  );
}
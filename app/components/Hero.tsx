export default function Hero() {
  return (
    // Converted to a semantic <section> with campaign microdata for search crawlers
    <section 
      className="relative h-[600px] flex items-center justify-center"
      itemScope 
      itemType="https://schema.org/CreativeWork"
    >
      {/* Cover Image Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/cec.jpeg')" }}
        role="img"
        aria-label="Centrist Economic Club Background Banner"
      >
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-blue-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        {/* Main H1 heading optimized as the primary brand entity text */}
        <h1 
          className="text-4xl md:text-6xl font-bold mb-4"
          itemProp="name"
        >
          Centrist Economic Club
        </h1>
        
        {/* Secondary headline serving as the core ideology description */}
        <p 
          className="text-xl md:text-2xl mb-8"
          itemProp="alternativeHeadline"
        >
          आर्थिक साक्षरता र सन्तुलन
        </p>
        
        {/* Clear target metric container */}
        <div className="inline-block bg-green-500 px-8 py-4 rounded-full text-2xl font-bold shadow-lg transform hover:scale-105 transition">
          लक्ष्य: प्रति व्यक्ति $5000 (अमेरिकी डलर)
        </div>
        
        {/* Target description mapped directly as the informational purpose string */}
        <p 
          className="mt-6 text-gray-300"
          itemProp="abstract"
        >
          व्यक्ति आम्दानी $5000/- को लक्ष्य प्राप्त गर्नका लागि बनाउने संगठनात्मक संरचना
        </p>
      </div>
    </section>
  );
}
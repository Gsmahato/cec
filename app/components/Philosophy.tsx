export default function Philosophy() {
  return (
    // Converted to a semantic section wrapped in a creative work/article context for SEO indexing
    <section 
      id="philosophy" 
      className="py-16 bg-blue-900 text-white text-center"
      itemScope
      itemType="https://schema.org/Article"
    >
      <div className="container mx-auto px-4">
        {/* Main section header mapped as the title of this ideological block */}
        <h2 
          className="text-3xl font-bold mb-8"
          itemProp="headline"
        >
          अन्तमा (Mission)
        </h2>
        
        <div className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
          {/* Main vision text mapped as article body text for keywords tracking */}
          <p itemProp="articleBody">
            Centrist Economic Club ले नेपालको वडा तहदेखि प्रदेश र केन्द्रसम्म एउटा बलियो सञ्जाल (Network) बनाएर नेपाली नागरिकहरूलाई आधुनिक प्रविधि, व्यवसाय र अर्थतन्त्रमा साक्षर बनाउँदै पूर्वीय दर्शनको जगमा एउटा समृद्ध, सन्तुलित र आत्मनिर्भर आर्थिक समाज निर्माण गर्न खोजेको स्पष्ट मार्गचित्र प्रस्तुत गर्दछ।
          </p>
          
          {/* Training teaser container */}
          <div className="mt-12 p-6 bg-green-600 rounded-lg inline-block">
            <p className="font-bold text-2xl">
              #प्रशिक्षणमा सिकाउने बिषय बस्तुहरु
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
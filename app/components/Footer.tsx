export default function Footer() {
  const currentYear: number = new Date().getFullYear();

  return (
    // Added schema markup to flag this block as an Organization entity to search engine scrapers
    <footer 
      className="bg-gray-900 text-gray-400 py-8 text-center"
      itemScope 
      itemType="https://schema.org/Organization"
    >
      <div className="container mx-auto px-4">
        {/* Labeled the brand name for localized indexing */}
        <p>&copy; {currentYear} <span itemProp="name">Centrist Economic Club</span>. All Rights Reserved.</p>
        
        {/* Labeled the geographic market location */}
        <p className="mt-2">
          <span itemProp="legalName">Centrist Economic Club</span>
          <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <span itemProp="addressCountry"> Nepal</span>
          </span>.
        </p>
      </div>
    </footer>
  );
}
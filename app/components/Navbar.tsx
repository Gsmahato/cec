import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
  return (
    // Added semantic role and SiteNavigationElement schema markup for crawler parsing
    <nav 
      className="bg-blue-900 text-white shadow-md sticky top-0 z-50"
      role="navigation"
      itemScope
      itemType="https://schema.org/SiteNavigationElement"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Brand identity area wrapped in a homepage Link for typical SEO anchor flow */}
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <Logo />
          <span className="text-xl font-bold hidden md:block group-hover:text-gray-200 transition">
            Centrist Economic Club
          </span>
        </Link>

        {/* Navigation links with itemProp attributes to outline site sections */}
        <div className="flex gap-4 md:gap-6 font-medium text-sm md:text-base items-center">
          {/* Home Page Link */}
          <Link 
            href="/" 
            className="hover:text-green-400 transition"
            itemProp="url"
          >
            <span itemProp="name">गृहपृष्ठ</span>
          </Link>

          {/* Section Anchor Links */}
          <Link 
            href="#structure" 
            className="hover:text-green-400 transition"
            itemProp="url"
          >
            <span itemProp="name">संरचना</span>
          </Link>
          <Link 
            href="#training" 
            className="hover:text-green-400 transition"
            itemProp="url"
          >
            <span itemProp="name">प्रशिक्षण</span>
          </Link>
          <Link 
            href="#philosophy" 
            className="hover:text-green-400 transition"
            itemProp="url"
          >
            <span itemProp="name">दर्शन</span>
          </Link>

          {/* New Page Routes */}
          <Link 
            href="/gallery" 
            className="hover:text-green-400 transition"
            itemProp="url"
          >
            <span itemProp="name">ग्यालेरी</span>
          </Link>
          <Link 
            href="/about" 
            className="hover:text-green-400 transition"
            itemProp="url"
          >
            <span itemProp="name">हाम्रो बारेमा</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
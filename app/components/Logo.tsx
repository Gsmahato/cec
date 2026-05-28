import Image from "next/image";

// Defined an explicit interface data type for clean component props
interface LogoProps {
  altText?: string;
}

export default function Logo({ altText = "Centrist Economic Club Logo - आर्थिक साक्षरता र सन्तुलन" }: LogoProps) {
  return (
    <div className="w-10 h-10 relative">
      <Image 
        src="/logo.png" 
        // Enhanced for SEO image scanning and screen-reader accessibility
        alt={altText} 
        fill 
        className="object-contain"
        priority // Ensures the branding asset loads quickly (LCP boost)
      />
    </div>
  );
}
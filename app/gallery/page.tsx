'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// Data types definition for internal image structures
interface ImageItem {
  id: number;
  title: string;
  src: string;
}

export default function GalleryPage() {
  // Use state data types instead of direct DOM manipulation functions
  const [selectedImg, setSelectedImg] = useState<ImageItem | null>(null);
  
const galleryItems: ImageItem[] = [
  { id: 1, title: 'मध्यमार्गी विचारधारा सम्बन्धी पहिलो बैठकको छलफल तथा सुझाव संकलन', src: '/program/1.jpeg' },
  { id: 2, title: 'मध्यमार्गी विचारधारा सम्बन्धी पहिलो बैठकको छलफल तथा सुझाव संकलन', src: '/program/2.jpeg' },
  { id: 3, title: 'मध्यमार्गी विचारधारा सम्बन्धी पहिलो बैठकको छलफल तथा सुझाव संकलन', src: '/program/3.jpeg' },
  { id: 4, title: 'मध्यमार्गी विचारधारा सम्बन्धी पहिलो बैठकको छलफल तथा सुझाव संकलन', src: '/program/4.jpeg' },
  { id: 5, title: 'मध्यमार्गी विचारधारा सम्बन्धी पहिलो बैठकको छलफल तथा सुझाव संकलन', src: '/program/5.jpeg' },
  { id: 6, title: 'मध्यमार्गी विचारधारा सम्बन्धी पहिलो बैठकको छलफल तथा सुझाव संकलन', src: '/program/6.jpeg' },
  { id: 7, title: 'मध्यमार्गी विचारधारा सम्बन्धी पहिलो बैठकको छलफल तथा सुझाव संकलन', src: '/program/7.jpeg' },
];

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Breadcrumb Navigation */}
        <nav className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-900 transition">गृहपृष्ठ</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800 font-medium">ग्यालेरी</span>
        </nav>

        {/* Section Title */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">हाम्रो फोटो ग्यालेरी</h1>
          <p className="text-base text-emerald-600 font-medium">क्लबका गतिविधिहरू र विभिन्न कार्यक्रमका झलकहरू</p>
          <div className="w-24 h-1 bg-blue-900 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Images Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
          {galleryItems.map((item) => (
            <div 
              key={item.id}
              onClick={() => setSelectedImg(item)}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 cursor-pointer group transition duration-300 transform active:scale-95"
            >
              <div className="relative aspect-video w-full bg-gray-200 overflow-hidden">
                <img 
                  src={item.src} 
                  alt={item.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white drop-shadow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm font-semibold text-gray-800 line-clamp-1">{item.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Conditional state validation prevents empty img string rendering */}
        {selectedImg && (
          <div 
            className="fixed inset-0 bg-neutral-950/90 flex items-center justify-center p-4 backdrop-blur-sm"
            style={{ zIndex: 9999999 }}
            onClick={() => setSelectedImg(null)}
          >
            <div 
              className="relative max-w-4xl w-full bg-black rounded-xl overflow-hidden shadow-2xl border border-neutral-800"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Control Bar Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-neutral-900 border-b border-neutral-800">
                <p className="text-sm font-medium text-gray-200 truncate pr-8">{selectedImg.title}</p>
                <button 
                  onClick={() => setSelectedImg(null)}
                  className="text-gray-400 hover:text-white p-1 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition cursor-pointer"
                  type="button"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Image Canvas Box */}
              <div className="w-full bg-neutral-950 p-2 flex justify-center items-center">
                <img 
                  src={selectedImg.src} 
                  alt={selectedImg.title} 
                  className="max-w-full max-h-[70vh] object-contain select-none mx-auto" 
                />
              </div>

              <div className="bg-neutral-900 px-4 py-3 text-xs text-neutral-400 text-center">
                Centrist Economic Club (CEC) • ग्यालेरी
              </div>
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
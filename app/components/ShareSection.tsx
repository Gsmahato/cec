'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function ShareSection() {
  const [copied, setCopied] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const shareUrl = "https://tally.so/r/jakX5x";

  // Ensure code only targets execution safely on the client thread
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleCopy = async () => {
    if (!isMounted) return;

    // Fallback selection first to guarantee the user sees what's being copied
    if (inputRef.current) {
      inputRef.current.select();
    }

    try {
      // Primary modern method
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(shareUrl);
        triggerCopySuccess();
      } else {
        // Legacy fallback method for non-HTTPS or older environments
        const success = document.execCommand('copy');
        if (success) {
          triggerCopySuccess();
        } else {
          alert("Please manually copy the highlighted text field.");
        }
      }
    } catch (err) {
      // Secondary fallback execution if primary fails
      try {
        const success = document.execCommand('copy');
        if (success) triggerCopySuccess();
      } catch (fallbackErr) {
        console.error('All copy configurations failed:', fallbackErr);
      }
    }
  };

  const triggerCopySuccess = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleNativeShare = async () => {
    if (!isMounted) return;

    // Check if both the API exists and context supports sharing
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: 'Centrist Economic Club (CEC)',
          text: 'आर्थिक साक्षरता र सन्तुलन',
          url: shareUrl,
        });
      } catch (err) {
        // Avoid throwing errors if user simply cancels the share sheet
        if ((err as Error).name !== 'AbortError') {
          console.error('Share action error:', err);
        }
      }
    } else {
      // Fallback: Copy the link instead and notify user
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(shareUrl);
        alert("Share options not supported on this browser context. Link has been copied to your clipboard instead!");
      } else {
        alert("Sharing options are limited by your browser environment. Please copy the link text manually.");
      }
    }
  };

  // Prevent server-side rendering mismatch markup errors
  if (!isMounted) {
    return (
      <div className="max-w-2xl mx-auto my-8 p-6 bg-white rounded-xl shadow-md border border-gray-100 animate-pulse h-40" />
    );
  }

  return (
    <div className="max-w-2xl mx-auto my-8 p-6 bg-white rounded-xl shadow-md border border-gray-100 font-sans">
      
      {/* Header Layout */}
      <div className="mb-6 text-center sm:text-left">
        <h3 className="text-xl font-bold text-gray-900 mb-1">
          <a 
            href="https://tally.so/r/jakX5x" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors duration-200 inline-flex items-center justify-center sm:justify-start gap-2"
          >
            Centrist Economic Club (CEC)
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </h3>
        <p className="text-sm text-emerald-600 font-medium">आर्थिक साक्षरता र सन्तुलन</p>
      </div>

      <hr className="border-gray-100 mb-6" />

      {/* Sharing Field Row */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
          Campaign Share Link
        </label>
        
        <div className="flex flex-col sm:flex-row gap-2">
          {/* Read-only interactive input element */}
          <div className="relative flex-grow">
            <input 
              ref={inputRef}
              type="text" 
              value={shareUrl} 
              readOnly 
              onClick={(e) => (e.target as HTMLInputElement).select()}
              className="w-full bg-gray-50 border border-gray-200 text-gray-600 text-sm rounded-lg px-3 py-2.5 font-mono focus:outline-none select-all"
            />
          </div>
          
          {/* Controls Engine */}
          <div className="flex gap-2 shrink-0">
            {/* Open Action */}
            <a 
              href={shareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium text-sm px-4 py-2.5 rounded-lg inline-flex items-center justify-center gap-2 transition-colors duration-200"
              title="Open link directly"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <span>Open</span>
            </a>

            {/* Copy Action */}
            <button 
              onClick={handleCopy}
              className={`flex-1 sm:flex-none font-medium text-sm px-4 py-2.5 rounded-lg inline-flex items-center justify-center gap-2 transition-colors duration-200 text-white ${
                copied ? 'bg-emerald-600' : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {copied ? (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                  <span>Copy Link</span>
                </>
              )}
            </button>

            {/* Native Sheet Share Action */}
            <button 
              onClick={handleNativeShare}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium text-sm px-4 py-2.5 rounded-lg inline-flex items-center justify-center transition-colors duration-200"
              title="More share avenues"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 10.742l4.632-2.316m0 0a3 3 0 10-4.632-2.316 3 3 0 004.632 2.316zm0 0l4.632 2.316m-4.632-2.316a3 3 0 104.632 2.316 3 3 0 00-4.632-2.316zm-4.632 2.316a3 3 0 11-4.632-2.316 3 3 0 014.632 2.316z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const flags = {
  de: (
    <svg viewBox="0 0 5 3" className="w-full h-full">
      <rect width="5" height="1" y="0" fill="#000" />
      <rect width="5" height="1" y="1" fill="#D00" />
      <rect width="5" height="1" y="2" fill="#FFCE00" />
    </svg>
  ),
  en: (
    <svg viewBox="0 0 60 30" className="w-full h-full">
      <clipPath id="t">
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>
      </clipPath>
      <path d="M0,0 v30 h60 v-30 z" fill="#00247d"/>
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
      <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#cf142b" strokeWidth="4"/>
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
      <path d="M30,0 v30 M0,15 h60" stroke="#cf142b" strokeWidth="6"/>
    </svg>
  ),
};

const languageNames = {
  de: "Deutsch",
  en: "English",
};

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const otherLanguage = language === "de" ? "en" : "de";

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label={`Current language: ${languageNames[language]}`}
      >
        <div className="w-6 h-4 rounded overflow-hidden border border-gray-200 shadow-sm">
          {flags[language]}
        </div>
        <ChevronDown className={`h-3 w-3 text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1 bg-white rounded-lg shadow-lg border py-1 min-w-[120px] z-50">
          <button
            onClick={() => {
              setLanguage(otherLanguage);
              setIsOpen(false);
            }}
            className="w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-50 transition-colors"
          >
            <div className="w-6 h-4 rounded overflow-hidden border border-gray-200">
              {flags[otherLanguage]}
            </div>
            <span className="text-sm text-gray-700">{languageNames[otherLanguage]}</span>
          </button>
        </div>
      )}
    </div>
  );
}

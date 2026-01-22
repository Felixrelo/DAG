"use client";

import { useState, useEffect } from "react";
import brandConfig from "@/brand.json";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const primaryColor = brandConfig.theme?.colors?.primary || "#7c3aed";
  const features = (brandConfig as any).features || {};

  // Only render if enabled in config
  if (!features.scrollProgress) return null;

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = Math.min((scrolled / documentHeight) * 100, 100);
      setProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200/50 z-[60]">
      <div
        className="h-full transition-all duration-150 ease-out"
        style={{
          width: `${progress}%`,
          backgroundColor: primaryColor,
        }}
      />
    </div>
  );
}

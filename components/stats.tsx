"use client";

import { useState, useEffect, useRef } from "react";
import brandConfig from "@/brand.json";
import { useLanguage } from "@/lib/language-context";

function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(end * easeOut));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return { count, ref };
}

export function Stats() {
  const { t } = useLanguage();
  const primaryColor = brandConfig.theme?.colors?.primary || "#1E4785";
  const stats = (brandConfig as any).stats || {};
  const completedMoves = stats.completedMoves || 500;
  const yearsExperience = stats.yearsExperience || 10;
  const satisfiedCustomers = stats.satisfiedCustomers || Math.round(completedMoves * 0.95);

  const movesCounter = useCountUp(completedMoves);
  const yearsCounter = useCountUp(yearsExperience);
  const customersCounter = useCountUp(satisfiedCustomers);

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto" ref={movesCounter.ref}>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold" style={{ color: primaryColor }}>
              {movesCounter.count.toLocaleString()}+
            </div>
            <div className="text-sm text-gray-500 mt-1">{t.stats.orders}</div>
          </div>
          <div className="text-center" ref={yearsCounter.ref}>
            <div className="text-3xl md:text-4xl font-bold" style={{ color: primaryColor }}>
              {yearsCounter.count}+
            </div>
            <div className="text-sm text-gray-500 mt-1">{t.stats.years}</div>
          </div>
          <div className="text-center" ref={customersCounter.ref}>
            <div className="text-3xl md:text-4xl font-bold" style={{ color: primaryColor }}>
              {customersCounter.count.toLocaleString()}+
            </div>
            <div className="text-sm text-gray-500 mt-1">{t.stats.customers}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

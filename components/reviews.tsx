"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import brandConfig from "@/brand.json";

const defaultReviews = [
  { author: "Michael S.", rating: 5, text: "Absolut professioneller Umzug! Das Team war pünktlich, freundlich und hat alles sicher transportiert.", date: "vor 2 Wochen" },
  { author: "Sandra K.", rating: 5, text: "Sehr zu empfehlen! Faire Preise und zuverlässige Arbeit. Würde ich jederzeit wieder buchen.", date: "vor 1 Monat" },
  { author: "Thomas M.", rating: 5, text: "Schnell, sauber und unkompliziert. Die Jungs haben wirklich angepackt!", date: "vor 1 Monat" },
];

// Star component with brand colors and half-star support
function RatingStars({ rating, size = "md", useBrandColor = true }: { rating: number; size?: "sm" | "md" | "lg"; useBrandColor?: boolean }) {
  const primaryColor = brandConfig.theme?.colors?.primary || "#7c3aed";
  const starColor = useBrandColor ? primaryColor : "#facc15"; // yellow-400 fallback
  const sizes = { sm: "h-4 w-4", md: "h-5 w-5", lg: "h-6 w-6" };

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((i) => {
        const isFull = i <= Math.floor(rating);
        const isHalf = !isFull && i === Math.ceil(rating) && rating % 1 >= 0.5;

        return (
          <div key={i} className="relative">
            {/* Background star (empty) */}
            <Star className={`${sizes[size]} text-gray-300`} />
            {/* Filled star */}
            {isFull && (
              <Star
                className={`${sizes[size]} absolute inset-0`}
                style={{ fill: starColor, color: starColor }}
              />
            )}
            {/* Half star */}
            {isHalf && (
              <div className="absolute inset-0 overflow-hidden" style={{ width: "50%" }}>
                <Star
                  className={`${sizes[size]}`}
                  style={{ fill: starColor, color: starColor }}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// Grid variant
function ReviewsGrid({ reviews, googleReviewsUrl }: { reviews: any[]; googleReviewsUrl: string }) {
  const primaryColor = brandConfig.theme?.colors?.primary || "#7c3aed";

  return (
    <div className="grid md:grid-cols-3 gap-6 mb-8">
      {reviews.slice(0, 3).map((review: any, i: number) => (
        <div key={i} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
          <div className="flex mb-3">
            <RatingStars rating={review.rating} size="sm" />
          </div>
          <p className="text-gray-700 mb-4 line-clamp-4">"{review.text}"</p>
          <div className="flex items-center justify-between text-sm">
            <span className="font-semibold text-gray-900">{review.author}</span>
            <span className="text-gray-500">{review.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

// Carousel variant
function ReviewsCarousel({ reviews, googleReviewsUrl }: { reviews: any[]; googleReviewsUrl: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const primaryColor = brandConfig.theme?.colors?.primary || "#7c3aed";

  const next = () => setCurrentIndex((i) => (i + 1) % reviews.length);
  const prev = () => setCurrentIndex((i) => (i - 1 + reviews.length) % reviews.length);

  const review = reviews[currentIndex];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-gray-50 rounded-2xl p-8 md:p-12 relative">
        <Quote className="absolute top-6 left-6 h-8 w-8 text-gray-200" />

        <div className="text-center">
          <div className="flex justify-center mb-4">
            <RatingStars rating={review.rating} size="lg" />
          </div>

          <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed">
            "{review.text}"
          </blockquote>

          <div className="flex flex-col items-center">
            <span className="font-semibold text-gray-900 text-lg">{review.author}</span>
            <span className="text-gray-500 text-sm">{review.date}</span>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow border"
            aria-label="Previous review"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>

          <div className="flex items-center gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-colors ${i === currentIndex ? "" : "bg-gray-300"}`}
                style={{ backgroundColor: i === currentIndex ? primaryColor : undefined }}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow border"
            aria-label="Next review"
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}

// Single featured variant
function ReviewsFeatured({ reviews, googleReviewsUrl }: { reviews: any[]; googleReviewsUrl: string }) {
  const primaryColor = brandConfig.theme?.colors?.primary || "#7c3aed";
  const review = reviews[0];

  return (
    <div className="max-w-4xl mx-auto text-center">
      <div className="flex justify-center mb-6">
        <RatingStars rating={review.rating} size="lg" />
      </div>

      <blockquote className="text-2xl md:text-3xl lg:text-4xl text-gray-700 font-light leading-relaxed mb-8">
        "{review.text}"
      </blockquote>

      <div className="flex flex-col items-center">
        <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold mb-3" style={{ backgroundColor: primaryColor }}>
          {review.author.charAt(0)}
        </div>
        <span className="font-semibold text-gray-900 text-lg">{review.author}</span>
        <span className="text-gray-500">{review.date}</span>
      </div>
    </div>
  );
}

export function Reviews() {
  const googleReviewsUrl = brandConfig.links?.googleReviews || "#";
  const reviewsConfig = (brandConfig as any).reviews;
  const averageRating = reviewsConfig?.averageRating || 4.9;
  const totalReviews = reviewsConfig?.totalReviews || 100;
  const reviews = reviewsConfig?.items?.length > 0 ? reviewsConfig.items : defaultReviews;

  // Get layout variant
  const reviewsVariant = (brandConfig as any).layout?.variants?.reviews || "grid";
  const primaryColor = brandConfig.theme?.colors?.primary || "#7c3aed";

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <RatingStars rating={averageRating} size="lg" />
            <span className="text-2xl font-bold">{averageRating}</span>
            <span className="text-gray-500">/ 5</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Was unsere Kunden sagen</h2>
          <p className="text-lg text-gray-600">{totalReviews.toLocaleString()} zufriedene Kunden auf Google</p>
        </div>

        {/* Reviews variant */}
        {reviewsVariant === "grid" && <ReviewsGrid reviews={reviews} googleReviewsUrl={googleReviewsUrl} />}
        {reviewsVariant === "carousel" && <ReviewsCarousel reviews={reviews} googleReviewsUrl={googleReviewsUrl} />}
        {reviewsVariant === "single-featured" && <ReviewsFeatured reviews={reviews} googleReviewsUrl={googleReviewsUrl} />}

        {/* Google link */}
        <div className="text-center mt-8">
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border hover:bg-gray-50 transition-colors"
            style={{ borderColor: primaryColor, color: primaryColor }}
          >
            <span>Alle Bewertungen auf Google ansehen</span>
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

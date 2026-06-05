const galleryItems = [
  { src: "/images/moving/mov-01.webp", alt: "Umzugsteam bei der Arbeit" },
  { src: "/images/moving/mov-12.webp", alt: "Möbeltransport" },
  { src: "/images/moving/mov-11.webp", alt: "Verpackungsservice" },
  { src: "/images/moving/mov-09.webp", alt: "Umzugswagen wird beladen" },
  { src: "/images/moving/mov-10.webp", alt: "Büroumzug" },
  { src: "/images/moving/mov-05.webp", alt: "Möbelmontage" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Unsere Arbeit</h2>
          <p className="text-lg text-gray-600">Einblicke in unsere tägliche Arbeit.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, index) => (
            <div key={index} className="aspect-square rounded-xl overflow-hidden shadow-sm">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

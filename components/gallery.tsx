import brandConfig from "@/brand.json";

export function Gallery() {
  const primaryColor = brandConfig.theme?.colors?.primary || "#7c3aed";

  const placeholders = [
    "Umzugsteam bei der Arbeit",
    "Möbeltransport",
    "Verpackungsservice",
    "Umzugswagen",
    "Büroumzug",
    "Möbelmontage",
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Unsere Arbeit</h2>
          <p className="text-lg text-gray-600">Einblicke in unsere tägliche Arbeit.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {placeholders.map((alt, index) => (
            <div key={index} className="aspect-square bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
              <div className="text-gray-400 text-sm text-center p-4">
                <div className="w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center" style={{ backgroundColor: `${primaryColor}15` }}>
                  <svg className="w-6 h-6" style={{ color: primaryColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                {alt}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

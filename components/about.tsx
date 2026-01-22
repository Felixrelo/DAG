import { CheckCircle, Users, Award, Clock } from "lucide-react";
import brandConfig from "@/brand.json";

export function About() {
  const primaryColor = brandConfig.theme?.colors?.primary || "#7c3aed";
  const secondaryColor = brandConfig.theme?.colors?.secondary || "#ec4899";
  const stats = (brandConfig as any).stats || {};

  const highlights = [
    { icon: Users, text: "Familienunternehmen mit Tradition" },
    { icon: Award, text: "Höchste Qualitätsstandards" },
    { icon: Clock, text: "Pünktlich und zuverlässig" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Über <span style={{ color: secondaryColor }}>{brandConfig.company.name}</span>
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Mit über {stats.yearsExperience || 10} Jahren Erfahrung in der Umzugsbranche sind wir Ihr verlässlicher Partner
              für stressfreie Umzüge in {brandConfig.company.address?.city} und Umgebung.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Unser erfahrenes Team kümmert sich um jeden Umzug mit der gleichen Sorgfalt – ob Privatumzug,
              Firmenumzug oder Fernumzug. Qualität und Kundenzufriedenheit stehen bei uns an erster Stelle.
            </p>

            <div className="space-y-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${primaryColor}15` }}
                  >
                    <item.icon className="h-5 w-5" style={{ color: primaryColor }} />
                  </div>
                  <span className="font-medium text-gray-800">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: secondaryColor }}>
                {stats.completedMoves?.toLocaleString() || "500"}+
              </div>
              <div className="text-gray-600">Erfolgreiche Umzüge</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: secondaryColor }}>
                {stats.yearsExperience || 10}+
              </div>
              <div className="text-gray-600">Jahre Erfahrung</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: secondaryColor }}>
                {stats.satisfiedCustomers?.toLocaleString() || "475"}+
              </div>
              <div className="text-gray-600">Zufriedene Kunden</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: secondaryColor }}>
                4.9
              </div>
              <div className="text-gray-600">Google Bewertung</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

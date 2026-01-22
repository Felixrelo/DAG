import Image from "next/image";
import { Award, CheckCircle, Shield } from "lucide-react";
import brandConfig from "@/brand.json";

export function Certificates() {
  const primaryColor = brandConfig.theme?.colors?.primary || "#7c3aed";
  const secondaryColor = brandConfig.theme?.colors?.secondary || "#ec4899";
  const certificates = (brandConfig as any).certificates || [];

  // Default certificates if none provided
  const defaultCertificates = [
    { name: "AMÖ Fachbetrieb", icon: Award, description: "Mitglied im Bundesverband" },
    { name: "Vollversichert", icon: Shield, description: "Umfassender Versicherungsschutz" },
    { name: "Geprüfte Qualität", icon: CheckCircle, description: "Regelmäßige Qualitätskontrollen" },
  ];

  return (
    <section id="certificates" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Zertifizierungen & Auszeichnungen</h2>
          <p className="text-lg text-gray-600">Qualität, der Sie vertrauen können.</p>
        </div>

        {certificates.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {certificates.map((cert: { name: string; image: string }, index: number) => (
              <div key={index} className="group flex flex-col items-center">
                <div className="relative w-32 h-32 mb-4 rounded-xl overflow-hidden border hover:shadow-lg transition-shadow">
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform"
                  />
                </div>
                <span className="text-sm font-medium text-gray-700 text-center">{cert.name}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {defaultCertificates.map((cert, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-8 rounded-xl border hover:shadow-lg transition-shadow"
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${secondaryColor}15` }}
                >
                  <cert.icon className="h-10 w-10" style={{ color: secondaryColor }} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

import Image from "next/image";
import brandConfig from "@/brand.json";

export function Team() {
  const primaryColor = brandConfig.theme?.colors?.primary || "#7c3aed";
  const teamPhotos = (brandConfig as any).media?.teamPhotos || [];

  // Default team members if no photos provided
  const defaultTeam = [
    { name: "Teamleiter", role: "Umzugsleitung" },
    { name: "Möbelträger", role: "Transport" },
    { name: "Verpacker", role: "Verpackungsservice" },
    { name: "Fahrer", role: "Logistik" },
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Unser Team</h2>
          <p className="text-lg text-gray-600">Erfahrene Profis, die Ihren Umzug sicher durchführen.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {teamPhotos.length > 0 ? (
            teamPhotos.map((photo: string, index: number) => (
              <div key={index} className="group relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src={photo}
                  alt={`Teammitglied ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))
          ) : (
            defaultTeam.map((member, index) => (
              <div key={index} className="group relative aspect-square rounded-xl overflow-hidden bg-white border">
                <div className="w-full h-full flex flex-col items-center justify-center p-4" style={{ backgroundColor: `${primaryColor}05` }}>
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4"
                    style={{ backgroundColor: primaryColor }}
                  >
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

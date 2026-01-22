import Image from "next/image";
import brandConfig from "@/brand.json";

export function BrandingBanner() {
  const primaryColor = brandConfig.theme?.colors?.primary || "#1E4785";

  return (
    <section className="py-6" style={{ backgroundColor: primaryColor }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-4">
          <Image
            src="/images/logo.png"
            alt="DAG Dahoam Logistik"
            width={160}
            height={64}
            className="h-12 w-auto brightness-0 invert"
            priority
          />
          <div className="text-white">
            <p className="text-xl md:text-2xl font-bold">DAG Dahoam Logistik</p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { BrandingBanner } from "@/components/branding-banner";
import { Trust } from "@/components/trust";
import { Reviews } from "@/components/reviews";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { FAQ } from "@/components/faq";
import { ServiceAreas } from "@/components/service-areas";
import { Gallery } from "@/components/gallery";
import { ContactDialog } from "@/components/contact-dialog";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <BrandingBanner />
        <Services />
        <Process />
        <Reviews />
        <ServiceAreas />
        <Gallery />
        <ContactDialog />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

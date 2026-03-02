import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@/components/analytics";
import { MobileCTA } from "@/components/mobile-cta";
import { ScrollProgress } from "@/components/scroll-progress";
import { LanguageProvider } from "@/lib/language-context";
import brandConfig from "@/brand.json";

const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Performance: prevent layout shift
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "DAG Dahoam Logistik - Professionelle Umzüge",
  description: "Professionelle Umzüge in Augsburg und Umgebung. Privatumzug, Fernumzug, Entrümpelung und mehr.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "DAG Dahoam Logistik",
  },
  verification: {
    // Add Google Search Console verification if needed
    // google: 'verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        {/* Preconnect to external resources for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preload critical resources */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-54SKV2L4"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <LanguageProvider>
          <ScrollProgress />
          {children}
          <MobileCTA />
        <Analytics
          googleAnalyticsId={brandConfig.tracking?.googleAnalyticsId}
          metaPixelId={brandConfig.tracking?.metaPixelId}
          googleTagManagerId={brandConfig.tracking?.googleTagManagerId}
          googleAdsConversionId={brandConfig.tracking?.googleAdsConversionId}
        />
        </LanguageProvider>
      </body>
    </html>
  );
}

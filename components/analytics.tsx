"use client";

import Script from "next/script";

interface AnalyticsProps {
  googleAnalyticsId?: string | null;
  metaPixelId?: string | null;
  googleTagManagerId?: string | null;
  googleAdsConversionId?: string | null;
}

export function Analytics({ googleAnalyticsId, metaPixelId, googleTagManagerId, googleAdsConversionId }: AnalyticsProps) {
  // Determine which ID to use for gtag initialization
  const primaryGtagId = googleAnalyticsId || googleAdsConversionId;

  return (
    <>
      {/* Google Analytics and/or Google Ads */}
      {primaryGtagId && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${primaryGtagId}`} strategy="afterInteractive" />
          <Script id="google-analytics" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              ${googleAnalyticsId ? `gtag('config', '${googleAnalyticsId}');` : ""}
              ${googleAdsConversionId ? `gtag('config', '${googleAdsConversionId}');` : ""}
              ${googleAdsConversionId ? `gtag('event', 'conversion', {'send_to': '${googleAdsConversionId}/D3XJCKuFgPIbENqq1cBC', 'value': 1.0, 'currency': 'TRY'});` : ""}`}
          </Script>
        </>
      )}
      {googleTagManagerId && (
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${googleTagManagerId}');`}
        </Script>
      )}
      {metaPixelId && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${metaPixelId}');
          fbq('track', 'PageView');`}
        </Script>
      )}
    </>
  );
}

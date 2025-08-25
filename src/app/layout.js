import { Source_Sans_3 } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Footer from "@/components/globals/Footer";
import "./globals.css";
import Navbar from "@/components/globals/Navbar";
import AnimatedBackground from "@/components/globals/AnimatedBackground";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: true,
});

export const metadata = {
  metadataBase: new URL("https://phos.is"),
  title: {
    default: "PHOS - A Global Peace Movement | August 12, 2026",
    template: "%s | PHOS - Global Peace Movement",
  },
  description:
    "One Circle. One Light. One World. Join the global pause for peace on August 12, 2026. A moment to realign humanity with the cosmos through music, unity, and the solar eclipse.",
  keywords: [
    "PHOS",
    "peace movement",
    "global concert",
    "solar eclipse",
    "August 12 2026",
    "unity",
    "music",
    "light",
    "global peace",
    "humanity",
    "cosmos",
    "Iceland",
    "peace event",
    "world peace",
    "global unity",
    "solar eclipse concert",
    "peace through music",
  ],
  authors: [{ name: "PHOS Team", url: "https://phos.is" }],
  creator: "PHOS Team",
  publisher: "PHOS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://phos.is",
    languages: {
      "en-US": "https://phos.is/en",
      "is-IS": "https://phos.is/is",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://phos.is",
    siteName: "PHOS",
    title: "PHOS - A Global Peace Movement | August 12, 2026",
    description:
      "One Circle. One Light. One World. Join the global pause for peace on August 12, 2026. A moment to realign humanity with the cosmos.",
    images: [
      {
        url: "https://res.cloudinary.com/dy8q4hf0k/image/upload/v1756133844/phos-fb_lyxanj.jpg",
        width: 1200,
        height: 630,
        alt: "PHOS - Global Peace Movement Logo",
        type: "image/jpeg",
      },
      {
        url: "https://res.cloudinary.com/dy8q4hf0k/image/upload/v1756133844/phos-fb_lyxanj.jpg",
        width: 800,
        height: 600,
        alt: "PHOS - Global Peace Movement Logo",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@phos_peace",
    creator: "@phos_peace",
    title: "PHOS - A Global Peace Movement | August 12, 2026",
    description:
      "One Circle. One Light. One World. Join the global pause for peace on August 12, 2026.",
    images: [
      "https://res.cloudinary.com/dy8q4hf0k/image/upload/v1756133844/phos-fb_lyxanj.jpg",
    ],
  },
  other: {
    "theme-color": "#0B0F1A",
    "color-scheme": "dark",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "PHOS",
    "application-name": "PHOS",
    "msapplication-TileColor": "#0B0F1A",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/phos-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/phos-logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta name="theme-color" content="#0B0F1A" />
        <meta name="color-scheme" content="dark" />

        {/* Additional Facebook-specific meta tags */}
        <meta property="fb:app_id" content="" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta
          property="og:image:alt"
          content="PHOS - Global Peace Movement Logo"
        />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              name: "PHOS - A Global Peace Movement",
              description:
                "One Circle. One Light. One World. Join the global pause for peace on August 12, 2026. A moment to realign humanity with the cosmos through music, unity, and the solar eclipse.",
              startDate: "2026-08-12T12:00:00Z",
              endDate: "2026-08-12T23:59:59Z",
              location: {
                "@type": "Place",
                name: "Global",
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "IS",
                  addressLocality: "Iceland",
                },
              },
              organizer: {
                "@type": "Organization",
                name: "PHOS",
                url: "https://phos.is",
                email: "phos@phos.is",
              },
              performer: {
                "@type": "Organization",
                name: "Global Artists & Musicians",
              },
              eventStatus: "https://schema.org/EventScheduled",
              eventAttendanceMode:
                "https://schema.org/OfflineEventAttendanceMode",
              category: "Peace Movement",
              keywords: "peace, unity, music, solar eclipse, global movement",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "ISK",
                availability: "https://schema.org/InStock",
                validFrom: "2024-01-01T00:00:00Z",
              },
            }),
          }}
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "PHOS",
              url: "https://phos.is",
              logo: "https://phos.is/phos-logo.png",
              description:
                "A global peace movement uniting humanity through music, light, and the solar eclipse of August 12, 2026.",
              email: "phos@phos.is",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IS",
                addressLocality: "Iceland",
              },
              sameAs: [
                "https://twitter.com/phos_peace",
                "https://instagram.com/phos_peace",
                "https://facebook.com/phospeace",
              ],
              foundingDate: "2024",
              mission:
                "To unite humanity in a global pause for peace through the power of music and the cosmic alignment of the solar eclipse.",
            }),
          }}
        />
      </head>
      <body
        className={`${sourceSans.variable} ${playfairDisplay.variable} antialiased`}
      >
        <LanguageProvider>
          <AnimatedBackground />
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}

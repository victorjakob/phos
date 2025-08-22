import SupportForm from "./components/SupportForm";

export const metadata = {
  title: "Support PHOS - Global Peace Movement | August 12, 2026",
  description:
    "Support PHOS - a global peace movement. Help us build the movement and create the stage for this historic moment of unity through music and light on August 12, 2026.",
  keywords: [
    "support PHOS",
    "peace movement support",
    "global peace event",
    "August 12 2026",
    "music for peace",
    "unity movement support",
    "PHOS donation",
    "peace event funding",
  ],
  openGraph: {
    title: "Support PHOS - Global Peace Movement",
    description:
      "Support PHOS - a global peace movement. Help us build the movement and create the stage for this historic moment of unity through music and light on August 12, 2026.",
    url: "https://phos.is/support",
    type: "website",
    images: [
      {
        url: "/phos-logo.png",
        width: 1200,
        height: 630,
        alt: "Support PHOS - Global Peace Movement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Support PHOS - Global Peace Movement",
    description:
      "Support PHOS - a global peace movement. Help us build the movement and create the stage for this historic moment.",
    images: ["/phos-logo.png"],
  },
  alternates: {
    canonical: "https://phos.is/support",
  },
};

export default function SupportPage() {
  return <SupportForm />;
}

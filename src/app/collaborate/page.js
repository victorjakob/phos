import CollaborateForm from "./components/CollaborateForm";

export const metadata = {
  title: "Collaborate with PHOS - Global Peace Movement | August 12, 2026",
  description:
    "Collaborate with PHOS - a global peace movement uniting artists, leaders, and changemakers. Bring your voice and light to create unity through music and light on August 12, 2026.",
  keywords: [
    "collaborate PHOS",
    "artist collaboration",
    "peace movement collaboration",
    "global peace event",
    "August 12 2026",
    "music collaboration",
    "unity movement",
    "PHOS partnership",
  ],
  openGraph: {
    title: "Collaborate with PHOS - Global Peace Movement",
    description:
      "Collaborate with PHOS - a global peace movement uniting artists, leaders, and changemakers. Bring your voice and light to create unity through music and light on August 12, 2026.",
    url: "https://phos.is/collaborate",
    type: "website",
    images: [
      {
        url: "/phos-logo.png",
        width: 1200,
        height: 630,
        alt: "Collaborate with PHOS - Global Peace Movement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Collaborate with PHOS - Global Peace Movement",
    description:
      "Collaborate with PHOS - a global peace movement uniting artists, leaders, and changemakers.",
    images: ["/phos-logo.png"],
  },
  alternates: {
    canonical: "https://phos.is/collaborate",
  },
};

export default function CollaboratePage() {
  return <CollaborateForm />;
}

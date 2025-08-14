import JoinForm from "./components/JoinForm";

export const metadata = {
  title: "Join PHOS - Global Peace Movement | August 12, 2026",
  description:
    "Join the global pause for peace on August 12, 2026. Be part of PHOS - a movement uniting humanity through music, light, and the solar eclipse.",
  keywords: [
    "join PHOS",
    "peace movement signup",
    "global peace event",
    "August 12 2026",
    "solar eclipse peace",
    "music for peace",
    "unity movement",
    "PHOS registration",
  ],
  openGraph: {
    title: "Join PHOS - Global Peace Movement",
    description:
      "Join the global pause for peace on August 12, 2026. Be part of PHOS - a movement uniting humanity through music, light, and the solar eclipse.",
    url: "https://phos.is/join",
    type: "website",
    images: [
      {
        url: "/phos-logo.png",
        width: 1200,
        height: 630,
        alt: "Join PHOS - Global Peace Movement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Join PHOS - Global Peace Movement",
    description: "Join the global pause for peace on August 12, 2026.",
    images: ["/phos-logo.png"],
  },
  alternates: {
    canonical: "https://phos.is/join",
  },
};

export default function JoinPage() {
  return <JoinForm />;
}

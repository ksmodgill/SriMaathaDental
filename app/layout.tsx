import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { clinic } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["Arial", "sans-serif"],
  adjustFontFallback: true,
  variable: "--font-inter",
});

const title =
  "Sri Maatha Dental Hospital Karimnagar | Dr. Vivek Reddy";
const description =
  "Call Sri Maatha Multispeciality Dental Hospital in Karimnagar for dental implants, root canal treatment, braces, clear aligners, smile makeover, children's dentistry and emergency dental support led by Dr. B. Hemareddy Vivek Reddy.";
const allowIndexing = process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";

export const metadata: Metadata = {
  metadataBase: new URL("https://srimaathadentalhospital.com"),
  title,
  description,
  applicationName: clinic.name,
  keywords: [
    "Dentist in Karimnagar",
    "Dental Hospital in Karimnagar",
    "Dental Implants in Karimnagar",
    "Root Canal Treatment in Karimnagar",
    "Braces Treatment in Karimnagar",
    "Clear Aligners in Karimnagar",
    "Smile Makeover in Karimnagar",
    "Family Dentist in Karimnagar",
    "Emergency Dentist in Karimnagar",
  ],
  authors: [{ name: clinic.name }],
  icons: {
    icon: [
      {
        url: "/favicon.png",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: clinic.name,
    title,
    description,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: `${clinic.name} in Karimnagar`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.svg"],
  },
  robots: {
    index: allowIndexing,
    follow: allowIndexing,
    googleBot: {
      index: allowIndexing,
      follow: allowIndexing,
      "max-image-preview": allowIndexing ? "large" : "none",
      "max-snippet": allowIndexing ? -1 : 0,
      "max-video-preview": allowIndexing ? -1 : 0,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B1F3A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "NebulaMem: Futuristic Memecoin Landing Page for Crypto Fans",
  description: "NebulaMem's sleek single-page landing explains the concept, how to buy, and tokenomics with clear CTAs. Explore the futuristic vibe and join the community.",
  keywords: ["nebulamem","memecoin","futuristic","landing page","how to buy","tokenomics","crypto","cta","nebula","community"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "NebulaMem: Futuristic Memecoin Landing Page for Crypto Fans",
    description: "NebulaMem's sleek single-page landing explains the concept, how to buy, and tokenomics with clear CTAs. Explore the futuristic vibe and join the community.",
    type: "website",
    url: "/",
    siteName: "NebulaMem",
    images: [{ url: "/images/logo.svg", width: 1200, height: 630, alt: "NebulaMem: Futuristic Memecoin Landing Page for Crypto Fans" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "NebulaMem: Futuristic Memecoin Landing Page for Crypto Fans",
    description: "NebulaMem's sleek single-page landing explains the concept, how to buy, and tokenomics with clear CTAs. Explore the futuristic vibe and join the community.",
    images: ["/images/logo.svg"]
  },
  robots: { index: true, follow: true },
  icons: [{ rel: "icon", href: "/favicon.ico" }]
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${playfairDisplay.variable} antialiased`}>{children}</body>
    </html>
  );
}

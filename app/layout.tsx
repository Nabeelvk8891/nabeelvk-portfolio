import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import JsonLd from "@/components/seo/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nabeel | MERN Stack Developer",
  description: "Futuristic portfolio of a Full Stack Developer specializing in React, Node.js, and modern web technologies.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nabeel.dev",
    title: "Nabeel | MERN Stack Developer",
    description: "Building the future of the web with modern technologies.",
    siteName: "Nabeel Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nabeel | MERN Stack Developer",
    description: "Building the future of the web with modern technologies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={clsx(
          inter.variable,
          outfit.variable,
          "antialiased bg-background text-foreground font-sans selection:bg-cyan-500/30 selection:text-cyan-200"
        )}
      >
        <JsonLd />
        {children}
      </body>
    </html>
  );
}

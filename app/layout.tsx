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
  metadataBase: new URL("https://nabeelvk.vercel.app"),

  title: {
    default: "Muhammed Nabeel VK – Full Stack MERN Developer",
    template: "%s | Muhammed Nabeel VK"
  },

  description:
    "Muhammed Nabeel VK is a Full Stack MERN Developer based in Calicut, India specializing in React, Next.js, Node.js, and MongoDB. Explore portfolio, projects, and modern web development work.",

  keywords: [
    "Muhammed Nabeel VK",
    "Nabeel Developer",
    "MERN Developer Calicut",
    "Full Stack Developer India",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "MongoDB Developer",
    "Web Developer Kerala"
  ],

alternates: {
  canonical: "https://nabeelvk.vercel.app/",
},


  verification: {
    google: "Iyv3ozJXcrN2Wuhliz47YWdYM_qcielqtYS-nuVZzRY",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nabeelvk.vercel.app",
    title: "Muhammed Nabeel VK – MERN Stack Developer Portfolio",
    description:
      "Portfolio of Muhammed Nabeel VK, Full Stack MERN Developer from Calicut, India building modern web applications.",
    siteName: "Muhammed Nabeel Portfolio",
  },

  twitter: {
    card: "summary_large_image",
    title: "Muhammed Nabeel VK – MERN Developer",
    description:
      "Full Stack MERN Developer portfolio showcasing modern projects and skills.",
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

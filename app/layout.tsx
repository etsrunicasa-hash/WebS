import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, IBM_Plex_Sans } from "next/font/google";

import { absoluteUrl, siteConfig } from "@/lib/utils";
import "./globals.css";

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant-garamond",
  weight: ["400", "500", "600", "700"],
});

const bodyFont = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Corporate website for ETS RUNI, a Casablanca-based company with a longstanding institutional presence.",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: ["/favicon.ico"],
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    images: [
      {
        url: absoluteUrl("/R.png"),
        width: 512,
        height: 512,
        alt: "RUNI monogram",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [absoluteUrl("/R.png")],
  },
};

export const viewport: Viewport = {
  themeColor: "#007435",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-scroll-behavior="smooth" lang="fr" suppressHydrationWarning>
      <body
        className={`${headingFont.variable} ${bodyFont.variable}`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}

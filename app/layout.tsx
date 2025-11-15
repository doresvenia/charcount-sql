import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Character Counter | นับจำนวนตัวอักษร",
  description:
    "เว็บนับจำนวนตัวอักษรออนไลน์ ง่ายๆ ใช้งานฟรี",
  keywords: [
    "character counter",
    "นับจำนวนตัวอักษร",
    "SQL Server",
    "LEN",
    "นับตัวอักษร SQL",
    "ออนไลน์",
    "C#",
    ".NET",
  ],
  metadataBase: new URL("https://charcount-sql.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Character Counter",
    description:
      "เว็บนับจำนวนตัวอักษรออนไลน์",
    url: "/",
    siteName: "SQL LEN Character Counter",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Character Counter",
    description:
      "เว็บนับจำนวนตัวอักษรออนไลน์",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Character Counter",
              url: "https://charcount-sql.vercel.app",
              description:
                "เว็บนับจำนวนตัวอักษรออนไลน์เว็บนับจำนวนตัวอักษรออนไลน์",
              applicationCategory: "Utility",
              operatingSystem: "Web",
            }),
          }}
        />
        <Script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6302238359656907"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

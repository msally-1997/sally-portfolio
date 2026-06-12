import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sally Maroush | Mobile & Frontend Engineer",
  description: "Mobile and Frontend Engineer based in Abu Dhabi, UAE. Engineering next-generation mobile applications and high-performance web architectures.",
  openGraph: {
    title: "Sally Maroush | Mobile & Frontend Engineer",
    description: "Mobile and Frontend Engineer based in Abu Dhabi, UAE. Engineering next-generation mobile applications and high-performance web architectures.",
    url: "https://sally-maroush.dev",
    siteName: "Sally Maroush Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sally Maroush Portfolio Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sally Maroush | Mobile & Frontend Engineer",
    description: "Mobile and Frontend Engineer based in Abu Dhabi, UAE. Engineering next-generation mobile applications and high-performance web architectures.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

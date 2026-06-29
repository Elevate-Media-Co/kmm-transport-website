import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileStickyCTA from "@/components/layout/MobileStickyCTA";
import FloatingWhatsAppButton from "@/components/layout/FloatingWhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KMM Transport Services LLC | Medical Transportation Phoenix AZ",
  description: "KMM Transport Services LLC provides safe, reliable non-emergency medical transportation in Phoenix, AZ and surrounding areas.",
  icons: {
    icon: "/favicon.ico",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900 selection:bg-secondary-light selection:text-secondary pb-20 xl:pb-0">
        <Header />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
        <MobileStickyCTA />
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}

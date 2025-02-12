import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import NavigationBar from "@/components/NavigationBar";

import Footer from "@/components/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "68 Construction & Mechanical",
  description:
    "68 Construction & Mechanical: Your go-to general contractor. Transforming visions into stunning projects! Full remodels, kitchens, baths, decks, patios, roofing, siding & HVAC. Let's build together!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationBar />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

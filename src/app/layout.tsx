import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import NavigationBar from "@/components/NavigationBar";

import Footer from "@/components/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "68CONSTRUCTION",
  description:
    "At 68Construction, we transform your visions into stunning projects. With unwavering dedication and a commitment to excellence, we are your trusted partners in the world of construction.",
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
        {children}
        <Footer />
      </body>
    </html>
  );
}

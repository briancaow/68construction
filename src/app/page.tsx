"use client";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import "bootstrap/dist/css/bootstrap.min.css";
import { SizeMe } from "react-sizeme";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <div className="hidden lg:block">
        <div className="flex flex-row w-full justify-between px-2 bg-gray-700">
          <div className="text-white">
            (206) 383-4582 | 68constructionllc@gmail.com
          </div>
          <div className="text-white">Instagram | Facebook</div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row pt-1 text-center bg-slate-50">
        <div className="flex flex-col p-3 lg:items-start">
          <h1 className="text-5xl text-red-700">68CONSTRUCTION</h1>
        </div>
        <div className="flex flex-row items-center justify-end w-full">
          <div className="pr-3 space-x-3 hidden lg:block">
            <button className="text-lg p-3 text-red-700">Services</button>
            <button className="text-lg p-3 text-red-700">About Us</button>
            <button className="text-lg p-3 text-red-700">Portfolio</button>
            <button className="text-lg p-3 text-red-700">Testimonials</button>
            <button className="text-lg p-3 text-red-700">FAQs</button>
            <button className="text-lg p-3 text-red-700">Contact</button>
            <button className="text-lg p-3 text-red-700">Map</button>
          </div>
        </div>
      </div>
      <main className="flex flex-col w-full items-center overflow-y-auto pb-20">
        {/* Hero */}
        <Hero />

        {/* Services */}
        <Services />
        {/* Portfolio */}
        <SizeMe>{({ size }) => <Portfolio width={size.width} />}</SizeMe>

        {/* Team */}

        {/* Builds */}

        {/* Connect with us */}
        <ContactForm />
      </main>
    </div>
  );
}

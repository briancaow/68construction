"use client";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <header className="pt-1 text-center">
        <h1 className="text-red-700">68CONSTRUCTION</h1>
        <h2 className="text-black text-center w-full">
          Your Vision, Our Expertise
        </h2>
        <div className="py-1 bg-slate-300">
          (206) 383-4582 | 68constructionllc@gmail.com
        </div>
      </header>
      <main className="flex flex-col w-full items-center space-y-7 overflow-y-auto pb-20">
        {/* Hero */}
        <Hero />
        {/* Portfolio */}
        <Portfolio />
        {/* Team */}

        {/* Builds */}

        {/* Connect with us */}
        <ContactForm />
      </main>
    </div>
  );
}

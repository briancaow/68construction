"use client";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import "bootstrap/dist/css/bootstrap.min.css";
import { SizeMe } from "react-sizeme";
import Services from "@/components/Services";
import About from "@/components/About";
import { useEffect, useRef } from "react";

export default function Home() {
  const AboutUsRef = useRef(null);
  const ServicesRef = useRef(null);
  const PortfolioRef = useRef(null);

  return (
    <div className="relative flex flex-col">
      <main className="relative flex flex-col w-full items-center pb-20">
        <Hero />

        <div ref={AboutUsRef} />
        <About />

        <div ref={ServicesRef} />
        <Services />

        <div ref={PortfolioRef} />
        <SizeMe>{({ size }) => <Portfolio width={size.width} />}</SizeMe>

        <ContactForm />
      </main>
    </div>
  );
}

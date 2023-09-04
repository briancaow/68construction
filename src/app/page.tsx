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
import { useRef } from "react";
import NavigationButton from "@/components/NavigationButton";

export default function Home() {
  const handleScroll = (ref: any) => {
    ref.current.style.scrollMargin = "90px";
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const AboutUsRef = useRef(null);
  const ServicesRef = useRef(null);
  const PortfolioRef = useRef(null);

  return (
    <div className="relative flex flex-col">
      <header className="fixed top-0 z-20 w-full">
        {/* <div className="hidden lg:block">
          <div className="flex flex-row w-full justify-between px-2 bg-gray-700">
            <div className="text-white">
              (206) 383-4582 | 68constructionllc@gmail.com
            </div>
            <div className="text-white">Instagram | Facebook</div>
          </div>
        </div> */}

        <div className="flex flex-col lg:flex-row pt-1 text-center bg-opacity-90 bg-slate-50">
          <div className="flex flex-col p-3 lg:items-start">
            <h1 className="lg:text-4xl text-xl">68CONSTRUCTION</h1>
          </div>
          <div className="flex flex-row items-center justify-end w-full">
            <div className="pr-3 space-x-3 hidden lg:block">
              <NavigationButton
                onClick={() => {
                  handleScroll(AboutUsRef);
                }}
              >
                About Us
              </NavigationButton>
              <NavigationButton
                onClick={() => {
                  handleScroll(ServicesRef);
                }}
              >
                Services
              </NavigationButton>
              <NavigationButton
                onClick={() => {
                  handleScroll(PortfolioRef);
                }}
              >
                Portfolio
              </NavigationButton>

              <button className="text-lg p-3 text-red-700">Contact</button>
              <button className="text-lg p-3 text-red-700">Testimonials</button>
              <button className="text-lg p-3 text-red-700">FAQs</button>
              <button className="text-lg p-3 text-red-700">Map</button>
            </div>
          </div>
        </div>
      </header>

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
      <footer className="flex flex-col bg-slate-800">
        <h3></h3>
      </footer>
    </div>
  );
}

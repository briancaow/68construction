"use client";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";
import NavigationButton from "./NavigationButton";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NavigationBar() {
  return (
    <header className="fixed top-0 z-20 w-full">
      <div className="flex flex-row items-center justify-between pt-1 bg-opacity-90 bg-slate-50">
        <Link href={"/"}>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl ml-4 whitespace-nowrap">68 CONSTRUCTION & MECHANICAL</h1>
        </Link>

        <div className="pr-3 space-x-3 hidden lg:block w-full">
          <div className="flex flex-row items-center justify-end w-full h-full">
            <Link href={"/AboutUs"}>
              <NavigationButton isHeader={true}>About Us</NavigationButton>
            </Link>
            <Link href={"/Services"}>
              <NavigationButton isHeader={true}>Services</NavigationButton>
            </Link>
            <Link href={"/Portfolio"}>
              <NavigationButton isHeader={true}>Portfolio</NavigationButton>
            </Link>
            <Link href={"/Contact"}>
              <NavigationButton isHeader={true}>Contact</NavigationButton>
            </Link>
            <Link href={"/Testimonials"}>
              <NavigationButton isHeader={true}>Testimonials</NavigationButton>
            </Link>
            {/* <NavigationButton isHeader={true}>FAQs</NavigationButton> */}
            {/* <NavigationButton isHeader={true}>Map</NavigationButton> */}
          </div>
        </div>
        <div className="right-0 lg:hidden block">
          <NavDropdown
            title={
              <img src="/hamburger50.png" alt="Menu" width={25} height={25} />
            }
            id="collasible-nav-dropdown"
          >
            <NavDropdown.Item href="/AboutUs">About Us</NavDropdown.Item>
            <NavDropdown.Item href="/Services">Services</NavDropdown.Item>
            <NavDropdown.Item href="/Portfolio">Portfolio</NavDropdown.Item>
            <NavDropdown.Item href="/Contact">Contact</NavDropdown.Item>
            <NavDropdown.Item href="/Testimonials">
              Testimonials
            </NavDropdown.Item>
          </NavDropdown>
        </div>
      </div>
    </header>
  );
}

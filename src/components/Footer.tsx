"use client";
import { SocialIcon } from "react-social-icons";
import NavigationButton from "./NavigationButton";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col bg-gray-700 justify-center items-center py-4">
      <h1 className="lg:text-4xl text-xl text-gray-300">68CONSTRUCTION</h1>
      <div className="pr-3 space-x-3 hidden lg:block">
        <div className="flex flex-row items-center justify-center w-full">
          <Link href={"/AboutUs"}>
            <NavigationButton isHeader={false}>About Us</NavigationButton>
          </Link>
          <Link href={"/Services"}>
            <NavigationButton isHeader={false}>Services</NavigationButton>
          </Link>
          <Link href={"/Portfolio"}>
            <NavigationButton isHeader={false}>Portfolio</NavigationButton>
          </Link>
          <Link href={"/Contact"}>
            <NavigationButton>Contact</NavigationButton>
          </Link>
          <Link href={"/Testimonials"}>
            <NavigationButton isHeader={false}>Testimonials</NavigationButton>
          </Link>
          <NavigationButton isHeader={false}>FAQs</NavigationButton>
          <NavigationButton isHeader={false}>Map</NavigationButton>
        </div>
      </div>
      <div className="flex flex-row justify-center space-x-2">
        <SocialIcon url="https://www.instagram.com/68constructionllc/" />
        <SocialIcon url="https://www.facebook.com/68constructionllc" />
        <SocialIcon url="https://www.yelp.com/biz/68-construction-seattle-2" />
      </div>
      <div className="py-4 text-gray-300">
        (206) 383-4582 | 68constructionllc@gmail.com
      </div>
    </footer>
  );
}

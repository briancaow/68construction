"use client";
import Portfolio from "@/components/Portfolio";
import { SizeMe } from "react-sizeme";

export default function PortfolioPage() {
  return (
    <div className="flex justify-center items-center w-full min-h-screen pt-5">
      <SizeMe>{({ size }) => <Portfolio width={size.width} />}</SizeMe>
    </div>
  );
}

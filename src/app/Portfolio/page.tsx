"use client";
import Portfolio from "@/components/Portfolio";
import { SizeMe } from "react-sizeme";

export default function PortfolioPage() {
  return (
    <div className="flex justify-center items-start w-full min-h-screen py-[100px]">
      <SizeMe>{({ size }) => <Portfolio width={size.width} />}</SizeMe>
    </div>
  );
}

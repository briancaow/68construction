"use client";
import { SizeMe } from "react-sizeme";
import TestimonialCard from "@/components/TestimonialCard";
import { useEffect, useRef } from "react";
import StackGrid, { Grid } from "react-stack-grid";
import IframeResizer from "iframe-resizer-react";

export default function TestimonialPage() {
  return (
    <div className="min-h-screen w-full justify-start items-center mb-10 py-[100px] space-y-4">
      <h2 className="text-5xl w-full flex justify-center">Testimonials</h2>
      <IframeResizer
        src="https://embed-v2.testimonial.to/w/68construction-project?theme=light&card=base&loadMore=on&initialCount=20&tag=all"
        style={{ width: "1px", minWidth: "100%" }}
      />

      <div>
        <IframeResizer
          src="https://embed-v2.testimonial.to/c/68construction-project?theme=light"
          style={{ width: "1px", minWidth: "100%" }}
        />
      </div>
    </div>
  );
}

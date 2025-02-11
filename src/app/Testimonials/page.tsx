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
        src="https://embed-v2.testimonial.to/w/68constructionmechanical?theme=light&card=base&loadMore=on&initialCount=20&tag=all&cc=off"
        style={{ width: "1px", minWidth: "100%" }}
      />

      <div>
        <IframeResizer
          src="https://embed-v2.testimonial.to/c/68constructionmechanical?theme=light"
          style={{ width: "1px", minWidth: "100%" }}
        />
      </div>
    </div>
  );
}

// <script type="text/javascript" src="https://testimonial.to/js/iframeResizer.min.js"></script>
{/* <iframe id='testimonialto-68constructionmechanical-tag-all-light' src="https://embed-v2.testimonial.to/w/68constructionmechanical?theme=light&card=base&loadMore=on&initialCount=20&tag=all&cc=off" frameborder="0" scrolling="no" width="100%"></iframe>
<script type="text/javascript">iFrameResize({log: false, checkOrigin: false}, '#testimonialto-68constructionmechanical-tag-all-light');</script> */}
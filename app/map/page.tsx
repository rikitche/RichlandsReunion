"use client";

import Footer from "@/components/custom-footer";
import Page from "@/components/page";
import dynamic from "next/dynamic";

const GlobalMap = dynamic(() => import("./components/global-map"), {
  ssr: false,
});

export default function MapPage() {
  return (
    <Page>
      <div className=" flex flex-col items-center mb-10">
        <h2 className="font-serif text-4xl md:text-5xl text-rich-gold mb-8 text-center mt-5">
          Where are the Wildcats now?
        </h2>
        <div className="mt-10 relative w-250 h-full border-10 border-rich-blue">
          <GlobalMap key="global-map" />
        </div>
      </div>
      <Footer />
    </Page>
  );
}

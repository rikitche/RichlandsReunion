"use client";

import Footer from "@/components/custom-footer";
import Page from "@/components/page";
import dynamic from "next/dynamic";

const GlobalMap = dynamic(() => import("./components/global-map"), {
  ssr: false,
});

export default function MapPage() {
  return (
    <Page authRequired>
      <section className="relative py-16 px-4 bg-primary w-full h-auto overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-2 border-primary-foreground"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full border-2 border-primary-foreground"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full border-2 border-primary-foreground"></div>
        </div>

        <div className=" flex flex-col items-center mb-10">
          <h2 className="font-serif text-4xl md:text-5xl text-white font-semibold mb-8 text-center mt-5">
            Where are the Wildcats now?
          </h2>
          <div className="mt-10 relative w-250 h-full border-10 border-charcoal">
            <GlobalMap key="global-map" />
          </div>
        </div>
      </section>
      <Footer />
    </Page>
  );
}

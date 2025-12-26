import Footer from "@/components/custom-footer";
import Page from "@/components/page";
import Image from "next/image";

export default function MemoriamPage() {
  return (
    <Page>
      <h2 className="font-serif text-4xl md:text-5xl text-white mb-8 text-center pt-5 pb-5 font-bold leading-tight bg-rich-blue text-balance">
        In Loving Memory
      </h2>
      <section className="py-16 px-4 bg-charcoal w-0.8 h-auto mt-20 flex flex-col items-center mb-20">
        <div className="relative w-[250px] h-[250px] border-2 border-rich-blue overflow-hidden">
          <Image
            src="placeholder-logo.png"
            alt="placeholder"
            fill
            className="object-cover"
          />
        </div>
        <p className="text-white text-center max-w-2xl mt-15">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
      <Footer />
    </Page>
  );
}

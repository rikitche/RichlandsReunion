import ImageCarousel from "./image-carousel";

export default function LookingBackSection() {
  return (
    <section className="relative py-16 px-4 bg-primary w-full h-auto overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-2 border-primary-foreground"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full border-2 border-primary-foreground"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full border-2 border-primary-foreground"></div>
      </div>

      {/* Foreground content */}
      <div className="relative z-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-8 text-center">
            Looking Back on 2013
          </h2>
          <p className="text-white text-pretty text-lg text-center">
            Take a stroll down memory lane with us as we revisit some iconic
            moments from 2013.
          </p>
        </div>

        <ImageCarousel />
      </div>
    </section>
  );
}

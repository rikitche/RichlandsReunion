import ImageCarousel from "./image-carousel";

export default function LookingBackSection() {
  return (
    <section className="py-16 px-4 bg-charcoal w-full h-auto">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-rich-gold mb-8 text-center">
          Looking Back on 2013
        </h2>
        <p className="text-white text-pretty text-lg text-center">
          Take a stroll down memory lane with us as we revisit some iconic
          moments from 2013.
        </p>
      </div>
      <ImageCarousel />
    </section>
  );
}

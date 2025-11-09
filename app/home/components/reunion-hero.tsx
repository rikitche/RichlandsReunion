import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export function ReunionHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl mb-6 text-rich-gold text-balance leading-tight">
          Welcome Home, Wildcats
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty leading-relaxed text-white">
          xx years later, and the memories are still vivid. Join us for an
          unforgettable evening of reconnection and nostalgia.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-sage hover:bg-sage/90 text-white px-8 cursor-pointer"
          >
            RSVP Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-rich-gold text-rich-gold hover:bg-rich-gold/5 bg-transparent cursor-pointer"
          >
            View Photo Gallery
          </Button>
        </div>
      </div>
    </section>
  );
}

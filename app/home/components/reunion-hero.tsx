"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type ReunionHeroProps = {
  setIsRsvpModalOpen: (isOpen: boolean) => void;
};

export function ReunionHero({ setIsRsvpModalOpen }: ReunionHeroProps) {
  const router = useRouter();
  return (
    <section className="relative bg-primary text-primary-foreground py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-2 border-primary-foreground"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full border-2 border-primary-foreground"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full border-2 border-primary-foreground"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
            {"Welcome Back, Wildcats!"}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 text-pretty leading-relaxed">
            {
              "Join us for an unforgettable reunion as we celebrate 13 years of memories, friendships, and shared experiences"
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-rich-gold hover:bg-rich-gold/90 text-black font-semibold px-8 cursor-pointer"
              onClick={() => setIsRsvpModalOpen(true)}
            >
              RSVP Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8 cursor-pointer"
              onClick={() => router.push("/gallery")}
            >
              Gallery
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

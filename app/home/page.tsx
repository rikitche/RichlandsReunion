"use client";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import { ReunionHero } from "@/app/home/components/reunion-hero";
import Page from "@/components/page";
import AccouncementsSection from "./components/announcements";
import LookingBackSection from "./components/looking-back";
import { useState } from "react";
import Footer from "@/components/custom-footer";

export default function ReunionPage() {
  const [isRsvpModalOpen, setIsRsvpModalOpen] = useState(false);

  return (
    <Page
      customIsRsvpModalOpen={isRsvpModalOpen}
      customSetIsRsvpModalOpen={setIsRsvpModalOpen}
    >
      <ReunionHero setIsRsvpModalOpen={setIsRsvpModalOpen} />

      {/* Event Details */}
      <section className="py-16 md:py-24 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow border-2 bg-white/70">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Calendar className="w-8 h-8 text-rich-blue" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-2 text-foreground">
                {"When"}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {"Saturday, June 21, 2026"}
                <br />
                {"6:00 PM - 11:00 PM"}
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow border-2 bg-white/70">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                <MapPin className="w-8 h-8 text-rich-gold" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-2 text-foreground">
                {"Where"}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {"The Grand Ballroom"}
                <br />
                {"123 Memory Lane, City"}
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow border-2 bg-white/70">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Users className="w-8 h-8 text-rich-blue" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-2 text-foreground">
                {"Who"}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {"Class of 2013 Alumni"}
                <br />
                {"Plus Guests Welcome"}
              </p>
            </Card>
          </div>
        </div>
      </section>

      <AccouncementsSection />

      <LookingBackSection />

      {/* Schedule Section */}
      <section id="schedule" className="py-16 md:py-24 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground text-balance">
              {"Event Schedule"}
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              {"Here's what we have planned for our special evening"}
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-6">
            {[
              {
                time: "6:00 PM",
                title: "Doors Open & Reception",
                description: "Welcome drinks and appetizers",
              },
              {
                time: "7:00 PM",
                title: "Dinner Service",
                description: "Enjoy a delicious three-course meal",
              },
              {
                time: "8:30 PM",
                title: "Tribute & Slideshow",
                description: "A journey through our memories",
              },
              {
                time: "9:00 PM",
                title: "Dancing & Entertainment",
                description: "Live DJ playing our favorite hits",
              },
              {
                time: "11:00 PM",
                title: "Event Close",
                description: "Until we meet again",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="font-semibold text-primary">
                    {item.time}
                  </span>
                </div>
                <div className="flex-grow">
                  <Card className="p-6 border-l-4 border-l-rich-gold bg-white/70 hover:shadow-lg transition-shadow">
                    <h3 className="font-serif text-xl font-bold mb-1 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </Page>
  );
}

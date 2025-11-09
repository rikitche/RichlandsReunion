import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import { ReunionHero } from "@/app/home/components/reunion-hero";
import Page from "@/components/page";
import AccouncementsSection from "./components/announcements";

export default function ReunionPage() {
  return (
    <Page>
      <ReunionHero />

      {/* Event Details Section */}
      <section className="py-16 px-4 bg-charcoal">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-4 text-balance text-rich-gold">
            Save the Date
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto text-pretty text-white">
            After xx years, it's time to reconnect, reminisce, and celebrate the
            memories we made together
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 bg-rich-gold border-sage/20">
              <div className="flex flex-col items-center text-center gap-3">
                <div className="h-12 w-12 rounded-full bg-sage/10 flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-sage" />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">Date</h3>
                  <p className="text-sm text-muted-foreground">
                    Saturday, August 15th, 2025
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-rich-gold border-sage/20">
              <div className="flex flex-col items-center text-center gap-3">
                <div className="h-12 w-12 rounded-full bg-sage/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-sage" />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">Time</h3>
                  <p className="text-sm text-muted-foreground">
                    6:00 PM - 11:00 PM
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-rich-gold border-sage/20">
              <div className="flex flex-col items-center text-center gap-3">
                <div className="h-12 w-12 rounded-full bg-sage/10 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-sage" />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">Venue</h3>
                  <p className="text-sm text-muted-foreground">
                    The Grand Ballroom, Downtown
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-rich-gold border-sage/20">
              <div className="flex flex-col items-center text-center gap-3">
                <div className="h-12 w-12 rounded-full bg-sage/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-sage" />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">
                    Attending
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    127 Classmates
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <AccouncementsSection />

      {/* Schedule Section */}
      <section className="py-16 px-4 bg-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-4 text-rich-gold text-balance">
            Evening Schedule
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-pretty text-white">
            A night filled with memories, music, and meaningful connections
          </p>

          <div className="space-y-6">
            {[
              {
                time: "6:00 PM",
                title: "Arrival & Welcome Reception",
                description:
                  "Check in, grab a drink, and reconnect with old friends",
              },
              {
                time: "7:00 PM",
                title: "Class Photo & Memory Wall",
                description:
                  "Recreate our class photo and share your favorite memories",
              },
              {
                time: "8:00 PM",
                title: "Dinner Service",
                description: "Enjoy a delicious meal while catching up",
              },
              {
                time: "9:00 PM",
                title: "Throwback Music & Dancing",
                description: "Dance to the hits from our high school years",
              },
              {
                time: "10:30 PM",
                title: "Final Toast & Goodbyes",
                description: "Raise a glass to old friends and new memories",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="min-w-24 pt-1">
                  <span className="text-sage font-semibold">{item.time}</span>
                </div>
                <div className="flex-1 pb-6 border-l-2 border-sage/20 pl-6 relative">
                  <div className="absolute -left-2 top-2 h-3 w-3 rounded-full bg-sage" />
                  <h3 className="font-semibold text-rich-gold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground text-white">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="font-serif text-2xl mb-4">Class of 2013</h3>
          <p className="text-white/70 mb-6">
            Questions? Contact the reunion committee at xxxx@xxxx.com
          </p>
          <div className="flex justify-center gap-6 text-sm text-white/60">
            <span>Richlands High School</span>
            <span>•</span>
            <span>xx Year Reunion</span>
            <span>•</span>
            <span>2026</span>
          </div>
        </div>
      </footer>
    </Page>
  );
}

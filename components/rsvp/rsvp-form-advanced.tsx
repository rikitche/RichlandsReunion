"use client";
import { User } from "@/hooks/types";
import RsvpSubmitted from "./rsvp-submitted";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type RsvpFormAdvancedProps = {
  submitRsvp: () => void;
  submitted: boolean;
  setSubmitted: (submitted: boolean) => void;
  user: User;
  setUser: (user: User) => void;
  setPage: (page: number) => void;
};

export default function RsvpFormAdvanced({
  submitted,
  setSubmitted,
  submitRsvp,
  user,
  setUser,
  setPage,
}: RsvpFormAdvancedProps) {
  if (submitted) {
    return <RsvpSubmitted setSubmitted={setSubmitted} />;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // logic for setting a username and password
    setPage(4);
    submitRsvp();
  };

  return (
    <section className="py-16 px-4 bg-charcoal">
      <div className="max-w-xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-4 text-rich-gold text-balance">
          RSVP Today
        </h2>
        <p className="text-center text-muted-foreground mb-8 text-pretty text-white">
          Let us know you're coming so we can plan accordingly
        </p>

        <Card className="p-8 bg-charcoal border-sage/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-rich-gold">
                First Name
              </Label>
              <Input
                id="firstName"
                name="firstName"
                className="text-white"
                placeholder="John"
                value={user.firstName}
                onChange={(e) =>
                  setUser({ ...user, firstName: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="maiden" className="text-rich-gold">
                Last Name (Maiden name if applicable)
              </Label>
              <Input
                id="lastName"
                name="lastName"
                className="text-white"
                placeholder="Smith"
                value={user.lastName}
                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-rich-gold">
                Email Address
              </Label>
              <Input
                id="email"
                name="email"
                className="text-white"
                type="email"
                placeholder="john@example.com"
                required
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>

            <div className="space-y-3">
              <Label className="text-rich-gold">Will you be attending?</Label>
              <RadioGroup
                defaultValue="yes"
                name="attending"
                value={user.attending}
                required
                onValueChange={(value) =>
                  setUser({ ...user, attending: value })
                }
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="yes" />
                  <Label
                    htmlFor="yes"
                    className="font-normal cursor-pointer text-white"
                  >
                    Yes, I'll be there!
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="no" />
                  <Label
                    htmlFor="no"
                    className="font-normal cursor-pointer text-white"
                  >
                    Unfortunately, I can't make it
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="guests" className="text-rich-gold">
                Number of Guests (including yourself)
              </Label>
              <Input
                id="guests"
                name="guests"
                className="text-white"
                type="number"
                min="1"
                max="4"
                required
                value={user.guests}
                onChange={(e) =>
                  setUser({ ...user, guests: Number(e.target.value) })
                }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-rich-gold">
                Password
              </Label>
              <Input
                id="password"
                name="password"
                className="text-white"
                type="password"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-rich-gold">
                Confirm Password
              </Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                className="text-white"
                type="password"
                required
              />
            </div>

            <Button
              className="w-full bg-sage hover:bg-sage/90 text-white"
              type="submit"
            >
              Submit RSVP
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}

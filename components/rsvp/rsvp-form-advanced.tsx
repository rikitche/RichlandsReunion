"use client";
import { User } from "@/hooks/types";
import RsvpSubmitted from "./rsvp-submitted";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";

type RsvpFormAdvancedProps = {
  submitRsvp: () => void;
  submitted: boolean;
  setSubmitted: (submitted: boolean) => void;
  user: User;
  setUser: (user: User) => void;
  setPage?: (page: number) => void;
  onClose: () => void;
  loading: boolean;
};

export default function RsvpFormAdvanced({
  submitted,
  setSubmitted,
  submitRsvp,
  user,
  setUser,
  onClose,
  loading,
}: RsvpFormAdvancedProps) {
  const [error, setError] = useState<string>("");
  if (submitted) {
    return <RsvpSubmitted setSubmitted={setSubmitted} onClose={onClose} />;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    submitRsvp();
  };

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-4 text-rich-blue text-balance">
          RSVP Today
        </h2>
        <p className="text-center text-muted-foreground mb-8 text-pretty text-charcoal">
          Let us know you're coming so we can plan accordingly
        </p>

        <Card className="p-8 bg-background border-rich-gold/50">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-rich-blue">
                First Name
              </Label>
              <Input
                id="firstName"
                name="firstName"
                className="text-deep-blue"
                placeholder="John"
                value={user.firstName}
                onChange={(e) =>
                  setUser({ ...user, firstName: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="maiden" className="text-rich-blue">
                Last Name (Maiden name if applicable)
              </Label>
              <Input
                id="lastName"
                name="lastName"
                className="text-deep-blue"
                placeholder="Smith"
                value={user.lastName}
                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-rich-blue">
                Email Address
              </Label>
              <Input
                id="email"
                name="email"
                className="text-deep-blue"
                type="email"
                placeholder="john@example.com"
                required
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>

            <div className="space-y-3">
              <Label className="text-rich-blue">Will you be attending?</Label>
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
                    className="font-normal cursor-pointer text-deep-blue"
                  >
                    Yes, I'll be there!
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="no" />
                  <Label
                    htmlFor="no"
                    className="font-normal cursor-pointer text-deep-blue"
                  >
                    Unfortunately, I can't make it
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="guests" className="text-rich-blue">
                Number of Guests (including yourself)
              </Label>
              <Input
                id="guests"
                name="guests"
                className="text-deep-blue"
                type="number"
                min="1"
                max="4"
                required
                value={user.guests}
                onChange={(e) =>
                  setUser({
                    ...user,
                    guests: Number(e.target.value),
                  })
                }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-rich-blue">
                Password
              </Label>
              <Input
                id="password"
                name="password"
                className="text-deep-blue"
                type="password"
                required
                onChange={(e) =>
                  setUser({
                    ...user,
                    password: e.target.value,
                  })
                }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-rich-blue">
                Confirm Password
              </Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                className="text-deep-blue"
                type="password"
                required
              />
            </div>

            <Button
              className="w-full bg-sage hover:bg-sage/90 text-white cursor-pointer"
              type="submit"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit RSVP"}
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}

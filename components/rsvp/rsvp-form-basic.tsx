"use client";
import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { User } from "@/hooks/types";
type RsvpFormProps = {
  setPage: (page: number) => void;
  setUser: (user: User) => void;
};

export function RsvpForm({ setPage, setUser }: RsvpFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    // Construct the user object
    const user: User = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      attending: formData.get("attending") as string,
      guests: Number(formData.get("guests") as string),
      fullUser: false,
    };

    setPage(2);
    setUser(user);
    console.log("Form submitted");
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
                id="name"
                name="firstName"
                className="text-white"
                placeholder="John"
                required
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
              />
            </div>

            <div className="space-y-3">
              <Label className="text-rich-gold">Will you be attending?</Label>
              <RadioGroup name="attending" defaultValue="yes" required>
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
                defaultValue="1"
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

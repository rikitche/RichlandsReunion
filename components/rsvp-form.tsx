"use client";
import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function RsvpForm() {
  const [submitted, setSubmitted] = useState(false);
  const [page, setPage] = React.useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("Form submitted");
  };

  if (submitted) {
    return (
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-xl mx-auto">
          <Card className="p-8 text-center bg-white border-sage/20">
            <div className="h-16 w-16 rounded-full bg-sage/10 flex items-center justify-center mx-auto mb-4">
              <svg
                className="h-8 w-8 text-sage"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="font-serif text-3xl mb-2 text-charcoal">
              You're All Set!
            </h3>
            <p className="text-muted-foreground mb-4">
              We can't wait to see you at the reunion. Check your email for
              confirmation details.
            </p>
            <Button
              onClick={() => setSubmitted(false)}
              variant="outline"
              className="border-sage text-sage hover:bg-sage/5"
            >
              Submit Another RSVP
            </Button>
          </Card>
        </div>
      </section>
    );
  }
  return (
    <section className="py-16 px-4 bg-cream">
      <div className="max-w-xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-4 text-charcoal text-balance">
          RSVP Today
        </h2>
        <p className="text-center text-muted-foreground mb-8 text-pretty">
          Let us know you're coming so we can plan accordingly
        </p>

        <Card className="p-8 bg-white border-sage/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="John Smith" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="maiden">Maiden Name (if applicable)</Label>
              <Input id="maiden" placeholder="Optional" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="space-y-3">
              <Label>Will you be attending?</Label>
              <RadioGroup defaultValue="yes" required>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="yes" />
                  <Label htmlFor="yes" className="font-normal cursor-pointer">
                    Yes, I'll be there!
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="no" />
                  <Label htmlFor="no" className="font-normal cursor-pointer">
                    Unfortunately, I can't make it
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="guests">
                Number of Guests (including yourself)
              </Label>
              <Input
                id="guests"
                type="number"
                min="1"
                max="4"
                defaultValue="1"
                required
              />
            </div>

            <Button
              className="w-full bg-sage hover:bg-sage/90 text-white"
              onClick={() => setPage(2)}
            >
              Submit RSVP
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}

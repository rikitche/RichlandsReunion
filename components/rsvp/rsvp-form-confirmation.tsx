"use client";
import RsvpSubmitted from "./rsvp-submitted";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type RsvpFormConfirmationProps = {
  setPage: (page: number) => void;
  submitRsvp: () => void;
  submitted: boolean;
  setSubmitted: (submitted: boolean) => void;
};

export default function RsvpFormConfirmation({
  setPage,
  submitRsvp,
  submitted,
  setSubmitted,
}: RsvpFormConfirmationProps) {
  if (submitted) {
    return <RsvpSubmitted setSubmitted={setSubmitted} />;
  }

  const handleSubmit = () => {
    console.log("created user");
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
            <h2 className="text-l text-rich-gold text-center">
              Would you like to create an account to gain access to exclusive
              info on what your classmates have been up to?
            </h2>

            <Button
              className="w-full bg-sage hover:bg-sage/90 text-white cursor-pointer"
              onClick={() => setPage(3)}
            >
              Sure! Sign me up!
            </Button>

            <Button
              className="w-full bg-sage hover:bg-sage/90 text-white cursor-pointer"
              type="submit"
            >
              No thanks! Submit RSVP
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}

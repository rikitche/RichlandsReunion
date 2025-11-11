import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type RsvpSubmittedProps = {
  setSubmitted: (submitted: boolean) => void;
};

export default function RsvpSubmitted({ setSubmitted }: RsvpSubmittedProps) {
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

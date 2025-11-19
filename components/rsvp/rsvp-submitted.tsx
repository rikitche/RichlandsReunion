import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type RsvpSubmittedProps = {
  setSubmitted: (submitted: boolean) => void;
  onClose: () => void;
};

export default function RsvpSubmitted({
  setSubmitted,
  onClose,
}: RsvpSubmittedProps) {
  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };
  return (
    <section className="py-16 px-4 bg-charcoal">
      <div className="max-w-xl mx-auto">
        <Card className="p-8 text-center bg-charcoal border-sage/20">
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
          <h3 className="font-serif text-3xl mb-2 text-rich-gold">
            You're All Set!
          </h3>
          <p className="text-muted-foreground mb-4 text-white">
            We can't wait to see you at the reunion.
          </p>
          <Button
            onClick={handleClose}
            variant="outline"
            className="border-sage text-sage hover:bg-sage/5 bg-charcoal cursor-pointer"
          >
            Done!
          </Button>
        </Card>
      </div>
    </section>
  );
}

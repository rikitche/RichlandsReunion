import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type RsvpSubmittedProps = {
  setSubmitted: (submitted: boolean) => void;
  onClose: () => void;
  fullUser?: boolean;
};

export default function RsvpSubmitted({
  setSubmitted,
  onClose,
  fullUser,
}: RsvpSubmittedProps) {
  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-xl mx-auto">
        <Card className="p-8 text-center bg-background border-rich-gold/50">
          <div className="h-16 w-16 rounded-full bg-rich-gold/10 flex items-center justify-center mx-auto mb-4">
            <svg
              className="h-8 w-8 text-rich-gold"
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
          <h3 className="font-serif text-3xl mb-2 text-rich-blue">
            You're All Set!
          </h3>
          <p className="text-muted-foreground mb-4 text-charcoal">
            {fullUser
              ? "We can't wait to see you at the reunion. Please check your email to finish setting up your account."
              : "We can't wait to see you at the reunion."}
          </p>
          <Button
            onClick={handleClose}
            variant="outline"
            className="border-sage text-white hover:bg-sage/90 bg-sage cursor-pointer"
          >
            Done!
          </Button>
        </Card>
      </div>
    </section>
  );
}

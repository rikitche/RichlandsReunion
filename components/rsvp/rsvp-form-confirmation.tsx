"use client";
import RsvpSubmitted from "./rsvp-submitted";

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
  return <></>;
}

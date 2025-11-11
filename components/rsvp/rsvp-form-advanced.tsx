"use client";
import { User } from "@/hooks/types";
import RsvpSubmitted from "./rsvp-submitted";

type RsvpFormAdvancedProps = {
  submitRsvp: () => void;
  submitted: boolean;
  setSubmitted: (submitted: boolean) => void;
  user?: User;
  setUser: (user: User) => void;
};

export default function RsvpFormAdvanced({
  submitted,
  setSubmitted,
}: RsvpFormAdvancedProps) {
  if (submitted) {
    return <RsvpSubmitted setSubmitted={setSubmitted} />;
  }

  return <></>;
}

"use client";
import React, { useState } from "react";
import Modal from "../modal";
import { RsvpForm } from "./rsvp-form-basic";
import RsvpFormConfirmation from "./rsvp-form-confirmation";
import RsvpFormAdvanced from "./rsvp-form-advanced";
import { User } from "@/hooks/types";
import RsvpSubmitted from "./rsvp-submitted";

type RsvpModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function RsvpModal({ isOpen, onClose }: RsvpModalProps) {
  const emptyUser: User = {
    email: "",
    firstName: "",
    lastName: "",
    attending: "",
    guests: 0,
    fullUser: false,
  };

  const [page = 1, setPage] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [user, setUser] = useState<User>(emptyUser);

  if (page < 1 || page > 4) {
    return null;
  }

  const handleCreateRsvp = () => {
    console.log("RSVP Created");
  };

  const handleClose = () => {
    setPage(1);
    onClose();
  };

  const content =
    page === 1 ? (
      <>
        <RsvpForm setPage={setPage} setUser={setUser} />
      </>
    ) : page === 2 ? (
      <>
        <RsvpFormConfirmation
          setPage={setPage}
          submitRsvp={handleCreateRsvp}
          submitted={submitted}
          setSubmitted={setSubmitted}
        />
      </>
    ) : page === 3 ? (
      <>
        <RsvpFormAdvanced
          submitRsvp={handleCreateRsvp}
          submitted={submitted}
          setSubmitted={setSubmitted}
          user={user}
          setUser={setUser}
          setPage={setPage}
        />
      </>
    ) : (
      <RsvpSubmitted setSubmitted={setSubmitted} />
    );

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      {content}
    </Modal>
  );
}

"use client";
import React, { useState } from "react";
import Modal from "../modal";
import { RsvpForm } from "./rsvp-form-basic";
import RsvpFormConfirmation from "./rsvp-form-confirmation";
import RsvpFormAdvanced from "./rsvp-form-advanced";
import { User } from "@/hooks/types";

type RsvpModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function RsvpModal({ isOpen, onClose }: RsvpModalProps) {
  const [page = 1, setPage] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [user, setUser] = useState<User>();

  if (page < 1 || page > 3) {
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
        <RsvpForm setPage={setPage} />
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
    ) : (
      <>
        <RsvpFormAdvanced
          submitRsvp={handleCreateRsvp}
          submitted={submitted}
          setSubmitted={setSubmitted}
          user={user}
          setUser={setUser}
        />
      </>
    );

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="RSVP">
      {content}
    </Modal>
  );
}

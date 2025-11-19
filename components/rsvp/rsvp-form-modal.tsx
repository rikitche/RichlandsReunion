"use client";
import React, { useState } from "react";
import Modal from "../modal";
import { RsvpForm } from "./rsvp-form-basic";
import RsvpFormConfirmation from "./rsvp-form-confirmation";
import RsvpFormAdvanced from "./rsvp-form-advanced";
import { User } from "@/hooks/types";
import RsvpSubmitted from "./rsvp-submitted";
import { useCreateUser } from "@/hooks/useAddUser";
import { useRsvp } from "@/hooks/useRsvp";

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
  const { createUser, userLoading, userError, userSuccess } = useCreateUser();
  const { createRsvp, rsvpLoading, rsvpError, rsvpSuccess } = useRsvp();

  if (page < 1 || page > 4) {
    return null;
  }

  const handleCreateRsvp = async () => {
    console.log(user);
    if (user.password) {
      setUser({ ...user, fullUser: true });
      await createUser(user);
      if (userError) {
        alert(userError);
        return;
      } else {
        setPage(4);
      }
    } else {
      await createRsvp(user);
      if (rsvpError) {
        alert(rsvpError);
        return;
      } else {
        setPage(4);
      }
    }
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
          onClose={handleClose}
          loading={rsvpLoading}
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
          onClose={handleClose}
        />
      </>
    ) : (
      <RsvpSubmitted setSubmitted={setSubmitted} onClose={handleClose} />
    );

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      {content}
    </Modal>
  );
}

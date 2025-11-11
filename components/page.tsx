"use client";
import React from "react";
import NavBar from "./nav-bar";
import Modal from "./modal";
import { RsvpForm } from "./rsvp-form";
import { Typography, Button } from "@material-tailwind/react";

type PageProps = {
  children?: React.ReactNode;
};
export default function Page({ children }: PageProps) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  return (
    <div>
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-black -z-10" />
      <main
        className="relative min-h-screen h-full w-full bg-fixed bg-center bg-cover bg-blend-overlay bg-gray-900"
        style={{
          backgroundImage: "url('/wildcat-2.png')",
        }}
      >
        <NavBar>
          <Button
            {...({} as any)}
            variant="normal"
            size="sm"
            className="text-md bg-black border-rich-gold border-2 text-rich-gold hover:bg-charcoal hover:text-white cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <span>RSVP</span>
          </Button>
          <Button
            {...({} as any)}
            variant="gradient"
            size="sm"
            className="bg-rich-gold hover:bg-rich-blue text-rich-blue hover:text-rich-gold text-md rounded-20 cursor-pointer"
          >
            <span>LOG IN</span>
          </Button>
        </NavBar>
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="RSVP"
        >
          <RsvpForm />
        </Modal>
        {children}
      </main>
    </div>
  );
}

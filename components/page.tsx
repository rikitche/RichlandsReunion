"use client";
import React from "react";
import NavBar from "./nav-bar";
import { Typography, Button } from "@material-tailwind/react";
import RsvpModal from "./rsvp/rsvp-form-modal";
import { useSupabaseUser } from "@/hooks/useSupabaseUser";
import LoginModal from "./login/login-modal";
import useLogout from "@/hooks/useLogout";

type PageProps = {
  children?: React.ReactNode;
};
export default function Page({ children }: PageProps) {
  const [isRsvpModalOpen, setIsRsvpModalOpen] = React.useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = React.useState(false);

  const { user, loading } = useSupabaseUser();
  const logout = useLogout();
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
          {!loading && !user && (
            <>
              <Button
                {...({} as any)}
                variant="normal"
                size="sm"
                className="text-md bg-black border-rich-gold border-2 text-rich-gold hover:bg-charcoal hover:text-white cursor-pointer"
                onClick={() => setIsRsvpModalOpen(true)}
              >
                <span>RSVP</span>
              </Button>
              <Button
                {...({} as any)}
                variant="gradient"
                size="sm"
                className="bg-rich-gold hover:bg-rich-blue text-rich-blue hover:text-rich-gold text-md rounded-20 cursor-pointer"
                onClick={() => setIsLoginModalOpen(true)}
              >
                <span>LOG IN</span>
              </Button>
            </>
          )}
          {user && (
            <>
              <Button
                {...({} as any)}
                variant="gradient"
                size="sm"
                className="bg-rich-gold hover:bg-rich-blue text-rich-blue hover:text-rich-gold text-md rounded-20 cursor-pointer"
                onClick={logout}
              >
                <span>LOG OUT</span>
              </Button>
            </>
          )}
        </NavBar>
        <RsvpModal
          isOpen={isRsvpModalOpen}
          onClose={() => setIsRsvpModalOpen(false)}
        />
        <LoginModal
          isOpen={isLoginModalOpen}
          onClose={() => setIsLoginModalOpen(false)}
        />

        {children}
      </main>
    </div>
  );
}

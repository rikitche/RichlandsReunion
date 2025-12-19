"use client";
import React from "react";
import NavBar from "./nav-bar";
import { Typography, Button } from "@material-tailwind/react";
import RsvpModal from "./rsvp/rsvp-form-modal";
import { useSupabaseUser } from "@/hooks/useSupabaseUser";
import LoginModal from "./login/login-modal";
import useLogout from "@/hooks/useLogout";
import PageNotFound from "./page-not-found";

type PageProps = {
  children?: React.ReactNode;
  customIsRsvpModalOpen?: boolean;
  customSetIsRsvpModalOpen?: (isOpen: boolean) => void;
  authRequired?: boolean;
};
export default function Page({
  children,
  customIsRsvpModalOpen,
  customSetIsRsvpModalOpen,
  authRequired,
}: PageProps) {
  const [isRsvpModalOpenTemp, setIsRsvpModalOpenTemp] = React.useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = React.useState(false);

  const isRsvpModalOpen =
    customIsRsvpModalOpen !== undefined
      ? customIsRsvpModalOpen
      : isRsvpModalOpenTemp;

  const setIsRsvpModalOpen = customSetIsRsvpModalOpen ?? setIsRsvpModalOpenTemp;

  const { user, loading } = useSupabaseUser();
  const logout = useLogout();

  if (authRequired && !loading && !user) {
    return <PageNotFound />;
  }

  return (
    <div>
      <main
        className="relative min-h-screen h-full w-full bg-fixed bg-center bg-cover bg-blend-overlay bg-white/95"
        style={{
          backgroundImage: "url('/wildcat-2.png')",
        }}
      >
        {!loading && (
          <>
            <NavBar authed={user}>
              {!loading && !user && (
                <>
                  <Button
                    {...({} as any)}
                    variant="normal"
                    size="sm"
                    className="bg-rich-gold text-black hover:bg-rich-gold/90 rounded-20 cursor-pointer"
                    onClick={() => setIsRsvpModalOpen(true)}
                  >
                    <span>RSVP</span>
                  </Button>
                  <Button
                    {...({} as any)}
                    variant="gradient"
                    size="sm"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-20 cursor-pointer"
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
                    className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-20 cursor-pointer"
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
          </>
        )}
      </main>
    </div>
  );
}

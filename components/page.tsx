"use client";
import React from "react";
import NavBar from "./nav-bar";
import { Button } from "@material-tailwind/react";
import RsvpModal from "./rsvp/rsvp-form-modal";
import { useSupabaseUser } from "@/hooks/useSupabaseUser";
import { useGetUser } from "@/hooks/useGetUser";
import LoginModal from "./login/login-modal";
import useLogout from "@/hooks/useLogout";
import PageNotFound from "./page-not-found";
import { useRouter } from "next/navigation";

type PageProps = {
  children?: React.ReactNode;
  customIsRsvpModalOpen?: boolean;
  customSetIsRsvpModalOpen?: (isOpen: boolean) => void;
  authRequired?: boolean;
  adminRequired?: boolean;
};
export default function Page({
  children,
  customIsRsvpModalOpen,
  customSetIsRsvpModalOpen,
  authRequired,
  adminRequired,
}: PageProps) {
  const [isRsvpModalOpenTemp, setIsRsvpModalOpenTemp] = React.useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = React.useState(false);
  const router = useRouter();

  const isRsvpModalOpen =
    customIsRsvpModalOpen !== undefined
      ? customIsRsvpModalOpen
      : isRsvpModalOpenTemp;

  const setIsRsvpModalOpen = customSetIsRsvpModalOpen ?? setIsRsvpModalOpenTemp;

  const { authUser, authLoading } = useSupabaseUser();
  const email = authUser?.email ?? null;
  const { user, loading, error } = useGetUser(email);
  const logout = useLogout();

  const isAuthed = authUser && user?.validated;
  const isAdmin = authUser?.app_metadata?.role === 1;
  const isLoading = authLoading || loading;

  if (authRequired && !isLoading && !isAuthed) {
    return <PageNotFound />;
  }

  if (adminRequired && !isLoading && !isAdmin) {
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
        {!isLoading && (
          <>
            <NavBar authed={isAuthed == true} admin={isAdmin == true}>
              {!isLoading && !isAuthed && (
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
              {isAdmin && (
                <Button
                  {...({} as any)}
                  variant="normal"
                  size="sm"
                  className="bg-rich-gold text-black hover:bg-rich-gold/90 rounded-20 cursor-pointer"
                  onClick={() => router.push("/admin")}
                >
                  <span>ADMIN</span>
                </Button>
              )}
              {isAuthed && (
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

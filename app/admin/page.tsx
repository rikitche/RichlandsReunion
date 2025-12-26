"use client";

import Page from "@/components/page";
import RsvpEntry from "./components/rsvpEntry";
import { useListUsers } from "@/hooks/useListUsers";
import type { User } from "@/hooks/types";

export default function AdminPage() {
  const { users, loading, error } = useListUsers();
  if (loading) return <Page>Loading...</Page>;
  if (error) return <Page>Error: {error}</Page>;
  return (
    <Page>
      <h1 className="mt-10 mb-8 font-serif text-5xl text-black font-semibold mb-8 text-center">
        Admin Pannel
      </h1>
      <div className="max-w-4xl mx-auto p-4 grid gap-4">
        <h2 className="font-serif text-4xl md:text-3xl text-black font-semibold mb-8 text-center">
          Unverified Users
        </h2>
        {users.map((user: User) => (
          <RsvpEntry
            key={user.email}
            user={user}
            show={user.fullUser && user.validated == false}
          />
        ))}
      </div>

      <div className="mt-20 max-w-4xl mx-auto p-4 grid gap-4">
        <h2 className="font-serif text-4xl md:text-3xl text-black font-semibold mb-8 text-center">
          Verified Users
        </h2>
        {users.map((user: User) => (
          <RsvpEntry
            key={user.email}
            user={user}
            show={user.fullUser && user.validated == true}
          />
        ))}
      </div>
    </Page>
  );
}

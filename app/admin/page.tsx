"use client";

import Page from "@/components/page";
import RsvpEntry from "./components/rsvpEntry";
import { useListUsers } from "@/hooks/useListUsers";
import type { User } from "@/hooks/types";

export default function AdminPage() {
  const { users, loading, error, refetch } = useListUsers();
  if (loading) return <Page>Loading...</Page>;
  if (error) return <Page>Error: {error}</Page>;
  return (
    <Page authRequired adminRequired>
      <h2 className="font-serif text-4xl md:text-5xl text-white mb-8 text-center pt-5 pb-5 font-bold leading-tight bg-rich-blue text-balance">
        Admin Panel
      </h2>

      <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-8 h-[70vh]">
        {/* Verified Users Column */}
        <div className="flex flex-col h-full border p-4 rounded-lg overflow-y-auto">
          <h2 className="sticky top-0 bg-white z-10 font-serif text-3xl text-black font-semibold mb-4 text-center py-2 border-3 border-black rounded-lg">
            Verified Users
          </h2>
          <div className="grid gap-4">
            {users
              .filter((user) => user.fullUser && user.validated === true)
              .map((user) => (
                <RsvpEntry
                  key={user.email}
                  user={user}
                  show={true}
                  onChange={refetch}
                />
              ))}
          </div>
        </div>

        {/* Unverified Users Column */}
        <div className="flex flex-col h-full border p-4 rounded-lg overflow-y-auto">
          <h2 className="sticky top-0 bg-white z-10 font-serif text-3xl text-black font-semibold mb-4 text-center py-2 border-3 border-black rounded-lg">
            Unverified Users
          </h2>
          <div className="grid gap-4">
            {users
              .filter((user) => user.fullUser && user.validated === false)
              .map((user) => (
                <RsvpEntry
                  key={user.email}
                  user={user}
                  show={true}
                  onChange={refetch}
                />
              ))}
          </div>
        </div>
      </div>
    </Page>
  );
}

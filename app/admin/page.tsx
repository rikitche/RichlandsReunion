"use client";

import Page from "@/components/page";
import RsvpEntry from "./components/rsvpEntry";
import { useListUsers } from "@/hooks/useListUsers";
import type { User } from "@/hooks/types";

export default function AdminPage() {
  //const { users, loading, error } = useListUsers();
  //   if (loading) return <Page>Loading...</Page>;
  //   if (error) return <Page>Error: {error}</Page>;
  //   return (
  //     <Page>
  //       <div className="max-w-4xl mx-auto p-4 grid gap-4">
  //         {users.map((user: User) => (
  //           <RsvpEntry key={user.email} user={user} />
  //         ))}
  //       </div>
  //     </Page>
  //   );
}

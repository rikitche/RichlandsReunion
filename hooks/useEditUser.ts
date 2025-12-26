"use client";

import { useState } from "react";
import { supabase } from "@/hooks/supabase-client";
import type { User } from "@/hooks/types";

type EditUserInput = Partial<
  Pick<
    User,
    "firstName" | "lastName" | "attending" | "guests" | "validated" | "role"
  >
>;

export function useEditUser() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const editUser = async (email: string, updates: EditUserInput) => {
    if (!email) {
      setError("Email is required");
      return false;
    }

    setLoading(true);
    setError(null);

    const { error } = await supabase
      .from("rsvp")
      .update({
        first_name: updates.firstName,
        last_name: updates.lastName,
        attending: updates.attending,
        guests: updates.guests,
        validated: updates.validated,
        role: updates.role,
      })
      .eq("email", email);

    if (error) {
      console.error(error);
      setError(error.message);
      setLoading(false);
      return false;
    }

    setLoading(false);
    return true;
  };

  return { editUser, loading, error };
}

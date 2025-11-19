"use client";

import { useState } from "react";
import { supabase } from "./supabase-client";
import type { User } from "./types";

export function useCreateUser() {
  const [userLoading, setLoading] = useState(false);
  const [userError, setError] = useState<string | null>(null);
  const [userSuccess, setSuccess] = useState(false);

  const createUser = async (user: User) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    // Create auth user
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: user.email,
      password: user.password ?? "", // user must provide password
    });

    if (authError || !authData.user) {
      setError(authError?.message ?? "Failed to create account");
      setLoading(false);
      return null;
    }

    const authUser = authData.user;

    // Insert into your public "rsvp" table
    const { data, error: dbError } = await supabase.from("rsvp").insert({
      first_name: user.firstName,
      last_name: user.lastName,
      email: user.email,
      attending: user.attending,
      guests: user.guests,
      full_user: true,
    });

    if (dbError) {
      setError(dbError.message);
    } else {
      setSuccess(true);
    }

    setLoading(false);
    return data;
  };

  return { createUser, userLoading, userError, userSuccess };
}

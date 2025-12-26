"use client";

import { useEffect, useRef, useState } from "react";
import { supabase } from "@/hooks/supabase-client";
import type { User } from "@/hooks/types";

export function useGetUser(email: string | null) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const lastLoadedEmail = useRef<string | null>(null);

  useEffect(() => {
    if (!email || lastLoadedEmail.current === email) return;

    lastLoadedEmail.current = email;

    const loadUser = async () => {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase
        .from("rsvp")
        .select("*")
        .eq("email", email)
        .maybeSingle();

      if (error) {
        console.error("Supabase error: ", error);
        setError(error.message);
        setLoading(false);
        return;
      }

      if (!data) {
        setUser(null);
        setLoading(false);
        return;
      }

      setUser({
        email: data.email,
        firstName: data.first_name,
        lastName: data.last_name,
        attending: data.attending,
        guests: data.guests ?? 0,
        fullUser: true,
        role: data.role,
        validated: data.validated,
      });

      setLoading(false);
    };

    loadUser();
  }, [email]);

  return { user, loading, error };
}

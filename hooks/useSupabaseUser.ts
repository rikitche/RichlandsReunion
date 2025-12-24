"use client";
import { useEffect, useState } from "react";
import { supabase } from "./supabase-client";
import { User } from "./types";

export function useSupabaseUser() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchRsvpUser = async (authUser: { email?: string } | null) => {
    if (!authUser?.email) {
      setUser(null);
      setLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from("rsvp")
      .select("*")
      .eq("email", authUser.email)
      .single();

    if (error && error.code !== "PGRST116") {
      console.error(error);
      setLoading(false);
      return;
    }

    if (data) {
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
    } else {
      setUser({
        email: authUser.email,
        firstName: "",
        lastName: "",
        attending: "",
        guests: 0,
        fullUser: false,
      });
    }

    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);

    // Initial load
    supabase.auth.getUser().then(({ data }) => {
      fetchRsvpUser(data.user);
    });

    // Auth subscription
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setLoading(true);
      fetchRsvpUser(session?.user ?? null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return { user, loading };
}

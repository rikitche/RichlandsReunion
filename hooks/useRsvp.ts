import { useState } from "react";
import { supabase } from "./supabase-client";
import type { User } from "./types";

export function useRsvp() {
  const [rsvpLoading, setLoading] = useState(false);
  const [rsvpError, setError] = useState<string | null>(null);
  const [rsvpSuccess, setSuccess] = useState(false);

  const createRsvp = async (user: User) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    const { data, error: dbError } = await supabase.from("rsvp").insert({
      first_name: user.firstName,
      last_name: user.lastName,
      email: user.email,
      attending: user.attending,
      guests: user.guests,
      full_user: false,
    });
    setLoading(false);
    if (dbError) {
      setError(dbError.message);
    } else {
      setSuccess(true);
    }
    return data;
  };

  return { createRsvp, rsvpLoading, rsvpError, rsvpSuccess };
}

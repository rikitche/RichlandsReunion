"use client";

import { useState } from "react";
import { supabase } from "@/hooks/supabase-client";

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return { user: null, error };
    }

    setLoading(false);
    return { user: data.user, error: null };
  };

  return {
    login,
    loading,
    error,
  };
}

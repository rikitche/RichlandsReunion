"use client";

import { useEffect, useState } from "react";
import { supabase } from "./supabase-client";
import type { User as AuthUser } from "@supabase/supabase-js";

export function useSupabaseUser() {
  const [authUser, setAuthUser] = useState<AuthUser | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    supabase.auth.getUser().then(({ data }) => {
      if (!mounted) return;
      setAuthUser(data.user ?? null);
      setAuthLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (!mounted) return;
        setAuthUser(session?.user ?? null);
        setAuthLoading(false);
      }
    );

    return () => {
      mounted = false;
      listener.subscription.unsubscribe();
    };
  }, []);

  return { authUser, authLoading };
}

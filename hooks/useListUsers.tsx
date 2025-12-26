"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/hooks/supabase-client";
import type { User } from "@/hooks/types";

export type ListUsersFilters = {
  email?: string;
  firstName?: string;
  lastName?: string;
  attending?: string;
  validated?: boolean;
  role?: number;
};

export function useListUsers(filters?: ListUsersFilters) {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);

      let query = supabase
        .from("rsvp")
        .select("*")
        .order("last_name", { ascending: true });

      // Apply filters dynamically
      if (filters) {
        if (filters.email) query = query.ilike("email", `%${filters.email}%`);
        if (filters.firstName)
          query = query.ilike("first_name", `%${filters.firstName}%`);
        if (filters.lastName)
          query = query.ilike("last_name", `%${filters.lastName}%`);
        if (filters.attending) query = query.eq("attending", filters.attending);
        if (filters.validated) query = query.eq("validated", filters.validated);
        if (filters.role !== undefined) query = query.eq("role", filters.role);
      }

      const { data, error } = await query;

      if (error) {
        console.error(error);
        setError(error.message);
        setLoading(false);
        return;
      }

      const mapped: User[] =
        data?.map((row) => ({
          email: row.email,
          firstName: row.first_name,
          lastName: row.last_name,
          attending: row.attending,
          guests: row.guests ?? 0,
          fullUser: row.full_user,
          role: row.role,
          validated: row.validated,
        })) ?? [];

      setUsers(mapped);
      setLoading(false);
    };

    loadUsers();
  }, [filters]);

  return { users, loading, error };
}

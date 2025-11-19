"use client";
import { useState, useEffect } from "react";
import { supabase } from "./supabase-client";
import type { Announcement } from "./types";

export function useGetAnnouncements() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase
        .from("announcements")
        .select("*")
        .order("createdAt", { ascending: false });

      if (error) {
        setError(error.message);
        setLoading(false);
        return;
      }

      if (data) {
        // Map database results to your Announcement type
        const parsed: Announcement[] = data.map((item: any) => ({
          id: item.id,
          content: item.content,
          createdAt: new Date(item.date),
          postedBy: item.posted_by || item.postedBy,
        }));

        setAnnouncements(parsed);
      }

      setLoading(false);
    };

    fetchAnnouncements();
  }, []);

  return { announcements, loading, error };
}

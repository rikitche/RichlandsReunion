import { supabase } from "@/hooks/supabase-client";

export default function useLogout() {
  const logout = async () => {
    await supabase.auth.signOut();
  };
  return logout;
}

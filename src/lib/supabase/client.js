import { createClient } from "@supabase/supabase-js";

// Client-side Supabase client
// Use this in client components and for user interactions
export const supabaseClient = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
    "https://xsylgitzcqbmjbrmpcsy.supabase.co",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhzeWxnaXR6Y3FibWpicm1wY3N5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDczMzE4NDMsImV4cCI6MjA2MjkwNzg0M30.uSNheYcYYaCw4UNTZy-UPfVR9k0J_CzOs9u0p_2CRsQ"
);

// Client-side helper functions (read-only operations for now)
export const phosClient = {
  // Get current user session
  async getSession() {
    const {
      data: { session },
      error,
    } = await supabaseClient.auth.getSession();
    return { session, error };
  },

  // Get user profile
  async getUser() {
    const {
      data: { user },
      error,
    } = await supabaseClient.auth.getUser();
    return { user, error };
  },

  // Sign out
  async signOut() {
    const { error } = await supabaseClient.auth.signOut();
    return { error };
  },

  // Future: Add more client-side functions as needed
  // async getPublicData() { ... }
  // async subscribeToChanges(table, callback) { ... }
};

// Real-time subscriptions (for future use)
export const phosRealtime = {
  // Subscribe to form submissions (admin only)
  subscribeToFormSubmissions(callback) {
    return supabaseClient
      .channel("phos_form_submissions")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "phos_form_submissions",
        },
        callback
      )
      .subscribe();
  },

  // Unsubscribe from all channels
  unsubscribe() {
    supabaseClient.removeAllChannels();
  },
};

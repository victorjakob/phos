import { createClient } from "@supabase/supabase-js";

// Server-side Supabase client with full access
// Use this in API routes and server components
export const supabaseServer = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
    "https://xsylgitzcqbmjbrmpcsy.supabase.co",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhzeWxnaXR6Y3FibWpicm1wY3N5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDczMzE4NDMsImV4cCI6MjA2MjkwNzg0M30.uSNheYcYYaCw4UNTZy-UPfVR9k0J_CzOs9u0p_2CRsQ",
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
);

// Helper functions for common operations
export const phosDb = {
  // Form submissions
  async createFormSubmission(data) {
    const { data: result, error } = await supabaseServer
      .from("phos_form_submissions")
      .insert([data])
      .select();

    return { data: result, error };
  },

  async getFormSubmissions(formType = null) {
    let query = supabaseServer
      .from("phos_form_submissions")
      .select("*")
      .order("created_at", { ascending: false });

    if (formType) {
      query = query.eq("form_type", formType);
    }

    const { data, error } = await query;
    return { data, error };
  },

  async getFormSubmissionById(id) {
    const { data, error } = await supabaseServer
      .from("phos_form_submissions")
      .select("*")
      .eq("id", id)
      .single();

    return { data, error };
  },

  // Future: Add more helper functions as needed
  // async getUsers() { ... }
  // async createUser(data) { ... }
  // async updateUser(id, data) { ... }
  // async deleteUser(id) { ... }
};

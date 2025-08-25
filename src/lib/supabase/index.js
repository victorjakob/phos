// Main Supabase utilities export file
// Import what you need based on your use case

// Server-side utilities (API routes, server components)
export { supabaseServer, phosDb } from "./server";

// Client-side utilities (client components)
export { supabaseClient, phosClient, phosRealtime } from "./client";

// Common types and constants
export const PHOS_FORM_TYPES = {
  TUNE_IN: "tune-in",
  COLLABORATE: "collaborate",
  SUPPORT: "support",
  JOIN: "join",
};

// Database table names
export const PHOS_TABLES = {
  FORM_SUBMISSIONS: "phos_form_submissions",
};

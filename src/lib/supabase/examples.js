// Example usage patterns for Supabase utilities
// This file shows how to use the utilities in different contexts

// ===== SERVER-SIDE USAGE (API Routes, Server Components) =====

// In API routes (like /api/contact/route.js):
/*
import { phosDb } from '@/lib/supabase/server';

export async function POST(request) {
  const { data, error } = await phosDb.createFormSubmission({
    name: "John Doe",
    email: "john@example.com",
    form_type: "tune-in",
    form_data: { name: "John Doe", email: "john@example.com" }
  });
}
*/

// In Server Components:
/*
import { phosDb } from '@/lib/supabase/server';

export default async function AdminDashboard() {
  const { data: submissions, error } = await phosDb.getFormSubmissions();
  
  if (error) {
    console.error('Error fetching submissions:', error);
    return <div>Error loading data</div>;
  }
  
  return (
    <div>
      <h1>Form Submissions</h1>
      {submissions?.map(submission => (
        <div key={submission.id}>
          <h3>{submission.name}</h3>
          <p>{submission.email}</p>
          <p>Type: {submission.form_type}</p>
        </div>
      ))}
    </div>
  );
}
*/

// ===== CLIENT-SIDE USAGE (Client Components) =====

// In Client Components:
/*
"use client";
import { phosClient, phosRealtime } from '@/lib/supabase/client';
import { useEffect, useState } from 'react';

export default function RealTimeSubmissions() {
  const [submissions, setSubmissions] = useState([]);
  
  useEffect(() => {
    // Subscribe to real-time updates
    const subscription = phosRealtime.subscribeToFormSubmissions((payload) => {
      if (payload.eventType === 'INSERT') {
        setSubmissions(prev => [payload.new, ...prev]);
      }
    });
    
    return () => {
      phosRealtime.unsubscribe();
    };
  }, []);
  
  return (
    <div>
      <h2>Real-time Submissions</h2>
      {submissions.map(submission => (
        <div key={submission.id}>
          <p>{submission.name} - {submission.form_type}</p>
        </div>
      ))}
    </div>
  );
}
*/

// ===== FUTURE AUTH USAGE =====

// When you add authentication later:
/*
"use client";
import { phosClient } from '@/lib/supabase/client';

export default function UserProfile() {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    async function getUser() {
      const { user, error } = await phosClient.getUser();
      if (user) {
        setUser(user);
      }
    }
    getUser();
  }, []);
  
  const handleSignOut = async () => {
    const { error } = await phosClient.signOut();
    if (!error) {
      // Redirect to home page
    }
  };
  
  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.email}</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <p>Please sign in</p>
      )}
    </div>
  );
}
*/

// ===== CONSTANTS USAGE =====

// Using the constants for type safety:
/*
import { PHOS_FORM_TYPES, PHOS_TABLES } from '@/lib/supabase';

// Instead of hardcoding strings:
const formType = PHOS_FORM_TYPES.TUNE_IN; // 'tune-in'
const tableName = PHOS_TABLES.FORM_SUBMISSIONS; // 'phos_form_submissions'
*/

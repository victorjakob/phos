# PHOS Supabase Utilities

This directory contains reusable Supabase utilities for both server-side and client-side operations.

## 📁 File Structure

```
src/lib/supabase/
├── server.js      # Server-side utilities (API routes, server components)
├── client.js      # Client-side utilities (client components)
├── index.js       # Main exports and constants
├── examples.js    # Usage examples
└── README.md      # This file
```

## 🚀 Quick Start

### Server-Side Usage (API Routes, Server Components)

```javascript
import { phosDb } from "@/lib/supabase/server";

// Create a form submission
const { data, error } = await phosDb.createFormSubmission({
  name: "John Doe",
  email: "john@example.com",
  form_type: "tune-in",
  form_data: {
    /* all form data */
  },
});

// Get all form submissions
const { data: submissions, error } = await phosDb.getFormSubmissions();

// Get submissions by type
const { data: tuneInSubmissions, error } = await phosDb.getFormSubmissions(
  "tune-in"
);
```

### Client-Side Usage (Client Components)

```javascript
"use client";
import { phosClient, phosRealtime } from "@/lib/supabase/client";

// Get current user session
const { session, error } = await phosClient.getSession();

// Sign out
const { error } = await phosClient.signOut();

// Subscribe to real-time updates
const subscription = phosRealtime.subscribeToFormSubmissions((payload) => {
  console.log("New submission:", payload.new);
});
```

## 🔧 Available Utilities

### Server-Side (`phosDb`)

- `createFormSubmission(data)` - Create a new form submission
- `getFormSubmissions(formType?)` - Get all submissions or filter by type
- `getFormSubmissionById(id)` - Get a specific submission by ID

### Client-Side (`phosClient`)

- `getSession()` - Get current user session
- `getUser()` - Get current user profile
- `signOut()` - Sign out current user

### Real-time (`phosRealtime`)

- `subscribeToFormSubmissions(callback)` - Subscribe to form submission changes
- `unsubscribe()` - Unsubscribe from all channels

## 📊 Constants

```javascript
import { PHOS_FORM_TYPES, PHOS_TABLES } from "@/lib/supabase";

// Form types
PHOS_FORM_TYPES.TUNE_IN; // 'tune-in'
PHOS_FORM_TYPES.COLLABORATE; // 'collaborate'
PHOS_FORM_TYPES.SUPPORT; // 'support'
PHOS_FORM_TYPES.JOIN; // 'join'

// Table names
PHOS_TABLES.FORM_SUBMISSIONS; // 'phos_form_submissions'
```

## 🔐 Authentication (Future)

When you add authentication later, the utilities are already set up to handle:

- User sessions
- Authentication state
- Sign in/out operations
- Protected routes

## 📝 Database Schema

### `phos_form_submissions` Table

| Column       | Type      | Description            |
| ------------ | --------- | ---------------------- |
| `id`         | UUID      | Primary key            |
| `name`       | TEXT      | User's full name       |
| `email`      | TEXT      | User's email address   |
| `form_type`  | TEXT      | Type of form submitted |
| `form_data`  | JSONB     | Complete form data     |
| `created_at` | TIMESTAMP | Submission timestamp   |
| `updated_at` | TIMESTAMP | Last update timestamp  |

## 🛠️ Environment Variables

Make sure these are set in your Vercel deployment:

```env
RESEND_API_KEY=your_resend_api_key
NEXT_PUBLIC_SUPABASE_URL=https://xsylgitzcqbmjbrmpcsy.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 🔄 Adding New Features

To add new database operations:

1. **Server-side**: Add methods to `phosDb` in `server.js`
2. **Client-side**: Add methods to `phosClient` in `client.js`
3. **Constants**: Add new constants to `index.js`
4. **Examples**: Update `examples.js` with usage patterns

## 📚 Examples

See `examples.js` for detailed usage patterns in different contexts.

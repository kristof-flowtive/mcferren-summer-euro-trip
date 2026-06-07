/* ------------------------------------------------------------------
   Hotel storage + private-access configuration
   ------------------------------------------------------------------
   By default (all blank), hotel details save to THIS browser only
   (localStorage) — no setup, works immediately, but not shared.

   To SHARE hotel bookings across the family AND keep them behind a
   password, fill in all three values below after following the
   step-by-step in README.md → "Shared, password-protected hotels".

   - SUPABASE_URL / SUPABASE_ANON_KEY: from Supabase → Project
     Settings → API. (The anon key is safe to commit — it's public by
     design and protected by the database's security rules.)
   - FAMILY_EMAIL: the email of the ONE shared login you create in
     Supabase. Everyone uses this same login; only the password is
     typed into the site (never store the password here).
------------------------------------------------------------------ */

const TRIP_CONFIG = {
  SUPABASE_URL: "https://mvqzynftcvepwnrlgcjw.supabase.co",
  SUPABASE_ANON_KEY: "sb_publishable_44-Inl0myWyxPggKJZNDGA_4RGVC_ll", // public publishable key — safe to commit
  FAMILY_EMAIL: "kristof@getflowtive.com"  // the shared family login's email
};

/* ------------------------------------------------------------------
   Hotel storage configuration
   ------------------------------------------------------------------
   By default, hotel details save to THIS browser only (localStorage) —
   no setup needed, works immediately.

   To SHARE hotel bookings across the whole family on every device,
   create a free Supabase project (5 minutes) and paste the two values
   below. See README.md → "Sharing hotels across the family" for the
   step-by-step. Leave them blank to keep using local-only storage.
------------------------------------------------------------------ */

const TRIP_CONFIG = {
  SUPABASE_URL: "",       // e.g. "https://abcdxyz.supabase.co"
  SUPABASE_ANON_KEY: ""   // the public "anon" key from Supabase → Project Settings → API
};

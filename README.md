# 🚗 The McFerren's Summer Euro Trip

A clean, warm family website for our 12-day European road trip — an interactive
map of the whole route, things to do at every stop, and a place to keep hotel
bookings once we make them.

**Route:** Kent → Calais → Reims → Troyes → Beaune → **Basel (3 nights)** →
Black Forest → Strasbourg → Heidelberg → Luxembourg → Maastricht → Ghent/Bruges → home.

---

## ✨ What's on the site

- **Interactive map** of the full loop with every stop pinned and each drive drawn in.
- **Click any stop** (on the map or in the list) for a summary, drive time, and a
  curated list of local attractions and things to do — chosen with a toddler in mind.
- **Hotel bookings** — add each hotel's name, address, check-in/out dates,
  confirmation number, price, link and notes as you book them.
- **Practical notes** for driving your own UK-plated car (vignettes, Crit'Air,
  tolls, etc.).

No build step, no framework — just HTML, CSS and a little JavaScript, using the
free [Leaflet](https://leafletjs.com/) map library and OpenStreetMap/CARTO tiles.

---

## 🌐 It's live on GitHub Pages

The site is served straight from this repository. Any push to `main` updates the
live site automatically (give it ~1 minute).

To make changes, edit the files and commit:

- **`assets/data.js`** — all the stops, coordinates, drive times and attractions.
  This is the file to edit if you want to add a stop or tweak the itinerary.
- **`assets/config.js`** — hotel-sharing settings (see below).
- **`index.html` / `assets/styles.css` / `assets/app.js`** — layout, styling, logic.

---

## 🛏 Where hotel details are saved

**Out of the box:** hotel details save to **your own browser** (localStorage).
Zero setup, works immediately — but each person's entries stay on their own device.

### Sharing hotels across the whole family (optional, ~5 minutes)

To have everyone see the same hotel bookings on every device, connect a free
[Supabase](https://supabase.com) database:

1. Go to **supabase.com** → sign up (free) → **New project**. Give it any name and
   a database password, pick a region near you, and wait ~1 minute for it to spin up.
2. In the project, open the **SQL Editor** and run this once to create the table:

   ```sql
   create table hotels (
     stop_id    text primary key,
     data       jsonb,
     updated_at timestamptz default now()
   );

   -- Allow the site to read & write (this is a private family trip site).
   alter table hotels enable row level security;
   create policy "family access" on hotels
     for all using (true) with check (true);
   ```

3. Go to **Project Settings → API** and copy:
   - the **Project URL** (e.g. `https://abcdxyz.supabase.co`)
   - the **anon / public** API key
4. Paste both into **`assets/config.js`**:

   ```js
   const TRIP_CONFIG = {
     SUPABASE_URL: "https://abcdxyz.supabase.co",
     SUPABASE_ANON_KEY: "eyJhbGciOi...your-anon-key..."
   };
   ```
5. Commit and push. The banner at the bottom of the site will switch to
   **"shared across the family"** and everyone's bookings will sync. 🎉

> The anon key is safe to put in the repo — it's designed to be public and only
> ever touches this one `hotels` table.

---

## 🧑‍💻 Running it locally

It's all static files, so just open `index.html` in a browser — or, for a proper
local server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

---

Made with ❤️ for a very good summer.

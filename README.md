# 🚗 The McFerren's Summer Euro Trip

A clean, warm family website for our 12-day European road trip — an interactive
map of the whole route, things to do at every stop, and a place to keep hotel
bookings once we make them.

### 👉 Live site: https://kristof-flowtive.github.io/mcferren-summer-euro-trip/

**Route:** Kent → Calais → Reims → Troyes → Beaune → **Basel (3 nights)** →
Black Forest → Strasbourg → Heidelberg → Luxembourg → Maastricht → Ghent/Bruges → home.

---

## ✨ What's on the site

- **Interactive map** of the full loop with every stop pinned and each drive drawn in.
- **Click any stop** (on the map or in the list) for a summary, drive time, and a
  curated list of local attractions and things to do — chosen with a toddler in mind.
- **Hotel bookings** — add each hotel's name, address, check-in/out dates,
  confirmation number, price, link and notes as you book them. Can be shared
  across the family and **locked behind a password** (see below).
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

### Shared, password-protected hotels (~10 minutes)

This makes hotel bookings (a) shared across the family on every device and
(b) **locked behind a single family password** — so the public map stays open,
but only people with the password can see or edit the hotel details. The lock is
enforced by the database itself (Supabase Auth + Row-Level Security), not just
the page, so it's genuine protection — a curious visitor can't read the bookings
by poking at the code.

You'll do five things in Supabase, then paste three values into the site.

**1. Create the project.**
Go to **[supabase.com](https://supabase.com)** → sign up (free) → **New project**.
Give it a name and a database password (this is Supabase's own DB password — not
the family password), pick a nearby region, and wait ~1 minute.

**2. Create the table + lock it down.**
Open **SQL Editor** and run this once:

```sql
create table hotels (
  stop_id    text primary key,
  data       jsonb,
  updated_at timestamptz default now()
);

-- Turn on Row-Level Security and allow access ONLY to logged-in users.
-- (With RLS on and no policy for anonymous visitors, the public can't read it.)
alter table hotels enable row level security;

create policy "family members can read/write"
  on hotels for all
  to authenticated
  using (true) with check (true);
```

**3. Stop strangers from making their own logins.**
Go to **Authentication → Sign In / Providers → Email** (or **Authentication →
Settings**) and turn **OFF "Allow new users to sign up"**. This is important —
it ensures the only way in is the one shared login *you* create next.

**4. Create the one shared family login.**
Go to **Authentication → Users → Add user → Create new user**. Enter:
   - an **email** (any address — e.g. `mcferren.trip@gmail.com`; it just
     identifies the shared account),
   - a **password** — *this is the family password everyone will type into the
     site*. Pick something memorable and share it with the family.
   - tick **Auto Confirm User** so it works immediately.

**5. Copy your keys.**
Go to **Project Settings → API** and copy the **Project URL** and the
**anon / public** key.

**Finally — paste into `assets/config.js`:**

```js
const TRIP_CONFIG = {
  SUPABASE_URL: "https://abcdxyz.supabase.co",
  SUPABASE_ANON_KEY: "eyJhbGciOi...your-anon-key...",
  FAMILY_EMAIL: "mcferren.trip@gmail.com"   // the shared login's email from step 4
};
```

Commit and push. Now the hotel section on every stop shows a 🔒 **password
prompt**; enter the step-4 password once to unlock it on that device (it stays
unlocked until you click **"Lock again"**). The rest of the site — map,
attractions, dates — stays public for everyone.

> The anon key is safe to commit — it's public by design, and on its own it can't
> read the locked `hotels` table. The **family password is never stored in the
> repo**; it lives only in Supabase and in your family's heads.

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

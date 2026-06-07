/* ===================================================================
   The McFerren's Summer Euro Trip — app logic
   - Leaflet map with the full route + clickable stops
   - Per-stop attractions
   - Hotel bookings: localStorage by default, shared Supabase if configured
=================================================================== */

(function () {
  "use strict";

  /* ---------------- Hotel storage layer ---------------- */
  // Presents one async interface; backs onto Supabase if configured, else localStorage.
  const Store = {
    mode: "local",
    client: null,
    cache: {},
    LOCAL_KEY: "mcferren-hotels",

    async init() {
      const cfg = window.TRIP_CONFIG || {};
      if (cfg.SUPABASE_URL && cfg.SUPABASE_ANON_KEY) {
        try {
          await loadScript("https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2");
          this.client = window.supabase.createClient(cfg.SUPABASE_URL, cfg.SUPABASE_ANON_KEY);
          this.mode = "cloud";
        } catch (e) {
          console.warn("Supabase failed to load — falling back to local storage.", e);
          this.mode = "local";
        }
      }
      await this.refresh();
      return this.mode;
    },

    async refresh() {
      if (this.mode === "cloud") {
        const { data, error } = await this.client.from("hotels").select("stop_id, data");
        if (error) { console.warn(error); this.cache = this.readLocal(); return; }
        const map = {};
        (data || []).forEach((row) => { map[row.stop_id] = row.data; });
        this.cache = map;
      } else {
        this.cache = this.readLocal();
      }
    },

    readLocal() {
      try { return JSON.parse(localStorage.getItem(this.LOCAL_KEY) || "{}"); }
      catch { return {}; }
    },
    writeLocal() {
      localStorage.setItem(this.LOCAL_KEY, JSON.stringify(this.cache));
    },

    get(stopId) { return this.cache[stopId] || null; },

    async save(stopId, hotel) {
      this.cache[stopId] = hotel;
      if (this.mode === "cloud") {
        const { error } = await this.client
          .from("hotels")
          .upsert({ stop_id: stopId, data: hotel }, { onConflict: "stop_id" });
        if (error) { console.warn(error); alert("Couldn't save to the shared database — saved locally instead."); this.writeLocal(); }
      } else {
        this.writeLocal();
      }
    },

    async remove(stopId) {
      delete this.cache[stopId];
      if (this.mode === "cloud") {
        const { error } = await this.client.from("hotels").delete().eq("stop_id", stopId);
        if (error) console.warn(error);
      } else {
        this.writeLocal();
      }
    }
  };

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = src; s.onload = resolve; s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  /* ---------------- Helpers ---------------- */
  const $ = (sel, root = document) => root.querySelector(sel);
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const badgeText = (stop) =>
    stop.type === "overnight" ? (stop.nights > 1 ? stop.nights + "★" : "★")
    : stop.type === "endpoint" ? "⌂" : "•";

  /* ---------------- Map ---------------- */
  let map, markers = {};

  function initMap() {
    map = L.map("map", { scrollWheelZoom: true, zoomControl: true }).setView([48.6, 5.2], 6);

    L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: "abcd",
      maxZoom: 19
    }).addTo(map);

    // Route polyline following stop order. The first and last legs (the
    // Channel crossing) are drawn as a dashed "shuttle" line.
    const pts = TRIP.stops.map((s) => [s.lat, s.lng]);
    const n = pts.length;

    L.polyline([pts[0], pts[1]], { color: "#CB6843", weight: 3, dashArray: "4 8", opacity: 0.85 }).addTo(map); // Folkestone→Calais
    L.polyline(pts.slice(1, n - 1), { color: "#CB6843", weight: 3.5, opacity: 0.85, lineJoin: "round" }).addTo(map); // the loop
    L.polyline([pts[n - 2], pts[n - 1], pts[0]], { color: "#CB6843", weight: 3, dashArray: "4 8", opacity: 0.6 }).addTo(map); // Ghent→Calais→home

    TRIP.stops.forEach((stop) => {
      const cls = stop.type;
      const icon = L.divIcon({
        className: "pin-wrap",
        html: `<div class="pin ${cls}" data-id="${stop.id}"><span>${badgeText(stop)}</span></div>`,
        iconSize: cls === "overnight" ? [32, 32] : cls === "endpoint" ? [30, 30] : [22, 22],
        iconAnchor: cls === "overnight" ? [6, 32] : cls === "endpoint" ? [6, 30] : [4, 22]
      });
      const m = L.marker([stop.lat, stop.lng], { icon, title: stop.name, riseOnHover: true }).addTo(map);
      m.on("click", () => openStop(stop.id));
      m.bindPopup(popupHtml(stop), { closeButton: false, offset: [6, -6] });
      m.on("mouseover", function () { this.openPopup(); });
      markers[stop.id] = m;
    });

    // Fit to the European loop (skip the England endpoint so it's nicely centred)
    const loop = TRIP.stops.filter((s) => s.country !== "England").map((s) => [s.lat, s.lng]);
    map.fitBounds(loop, { padding: [50, 50] });
  }

  function popupHtml(stop) {
    const sub = stop.type === "overnight" ? stop.overnight
      : stop.type === "waypoint" ? "Stop en route" : "Start / finish";
    const dateLine = stop.date ? `🗓 ${esc(stop.date)} · ` : "";
    return `<div class="popup-name">${esc(stop.name)}</div>
            <div class="popup-sub">${dateLine}${esc(sub)}</div>
            <div class="popup-link" onclick="window.__openStop('${stop.id}')">See things to do →</div>`;
  }

  function highlightMarker(id) {
    document.querySelectorAll(".pin.active").forEach((el) => el.classList.remove("active"));
    const el = document.querySelector(`.pin[data-id="${id}"]`);
    if (el) el.classList.add("active");
  }

  /* ---------------- Itinerary list ---------------- */
  function renderList() {
    const ol = $("#stop-list");
    ol.innerHTML = "";
    TRIP.stops.forEach((stop) => {
      const booked = Store.get(stop.id);
      const li = document.createElement("li");
      const nightsLabel = stop.nights ? stop.nights + " night" + (stop.nights > 1 ? "s" : "") : "";
      const sub = stop.type === "overnight" ? `${stop.date} · ${nightsLabel}`
        : stop.type === "waypoint" ? `${stop.date} · stop en route`
        : stop.date;
      li.innerHTML = `
        <button class="stop-row" data-id="${stop.id}">
          <span class="stop-badge ${stop.type}">${badgeText(stop)}</span>
          <span class="meta">
            <span class="nm">${esc(stop.name)} ${booked ? '<span class="booked-tag">✓ Booked</span>' : ""}</span>
            <span class="ctry">${esc(stop.country)}</span>
            <span class="sub">${esc(sub)}</span>
          </span>
        </button>`;
      li.querySelector("button").addEventListener("click", () => openStop(stop.id));
      ol.appendChild(li);
    });
  }

  /* ---------------- Stop detail view ---------------- */
  let currentStop = null;

  function openStop(id) {
    const stop = TRIP.stops.find((s) => s.id === id);
    if (!stop) return;
    currentStop = id;

    map.flyTo([stop.lat, stop.lng], stop.type === "waypoint" ? 9 : 8, { duration: 0.7 });
    highlightMarker(id);
    if (markers[id]) markers[id].openPopup();

    const tags = [];
    if (stop.date) tags.push(`<span class="tag date">🗓 ${esc(stop.date)}</span>`);
    if (stop.type === "overnight") tags.push(`<span class="tag night">🛏 ${esc(stop.overnight)}</span>`);
    tags.push(`<span class="tag">📅 ${esc(stop.dayLabel)}</span>`);
    if (stop.drive) tags.push(`<span class="tag drive">🚗 ${esc(stop.drive)}</span>`);

    const things = stop.attractions.map((a) =>
      `<li class="thing"><b>${esc(a.name)}</b><p>${esc(a.desc)}</p></li>`).join("");

    const v = $("#stop-view");
    v.innerHTML = `
      <button class="back-btn" id="back-btn">← All stops</button>
      <div class="detail-head">
        <span class="stop-badge ${stop.type}">${badgeText(stop)}</span>
        <div>
          <h2>${esc(stop.name)}</h2>
          <div class="ctry">${esc(stop.country)}</div>
        </div>
      </div>
      ${galleryHtml(stop)}
      <div class="detail-tags">${tags.join("")}</div>
      <p class="summary">${esc(stop.summary)}</p>
      <div class="section-title">✨ Things to do</div>
      <ul class="things">${things}</ul>
      <div class="section-title">🛏 Where we're staying</div>
      <div id="hotel-mount"></div>
    `;
    $("#back-btn").addEventListener("click", showList);
    v.querySelectorAll(".g-img").forEach((btn) =>
      btn.addEventListener("click", () => openLightbox(stop.images, +btn.dataset.idx)));
    renderHotel(stop);

    $("#list-view").hidden = true;
    v.hidden = false;
    $("#detail-pane").scrollTop = 0;
  }

  function galleryHtml(stop) {
    const imgs = stop.images || [];
    if (!imgs.length) return "";
    const cls = imgs.length === 1 ? "one" : imgs.length === 2 ? "two" : "three";
    const cells = imgs.map((im, i) =>
      `<button class="g-img" data-idx="${i}" type="button" aria-label="View larger: ${esc(im.alt)}">
         <img src="${esc(im.url)}" alt="${esc(im.alt)}" loading="lazy" />
       </button>`).join("");
    return `<div class="gallery ${cls}">${cells}</div>`;
  }

  /* ---------------- Lightbox ---------------- */
  let lbImages = [], lbIndex = 0, lbEl = null;

  function openLightbox(images, index) {
    lbImages = images || []; lbIndex = index || 0;
    if (!lbEl) {
      lbEl = document.createElement("div");
      lbEl.className = "lightbox";
      lbEl.innerHTML = `
        <button class="lb-close" aria-label="Close">✕</button>
        <button class="lb-nav lb-prev" aria-label="Previous">‹</button>
        <figure class="lb-figure"><img alt="" /><figcaption></figcaption></figure>
        <button class="lb-nav lb-next" aria-label="Next">›</button>`;
      document.body.appendChild(lbEl);
      lbEl.addEventListener("click", (e) => { if (e.target === lbEl) closeLightbox(); });
      lbEl.querySelector(".lb-close").addEventListener("click", closeLightbox);
      lbEl.querySelector(".lb-prev").addEventListener("click", (e) => { e.stopPropagation(); stepLightbox(-1); });
      lbEl.querySelector(".lb-next").addEventListener("click", (e) => { e.stopPropagation(); stepLightbox(1); });
      document.addEventListener("keydown", (e) => {
        if (!lbEl.classList.contains("open")) return;
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") stepLightbox(-1);
        if (e.key === "ArrowRight") stepLightbox(1);
      });
    }
    renderLightbox();
    lbEl.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function renderLightbox() {
    const im = lbImages[lbIndex];
    lbEl.querySelector("img").src = im.url;
    lbEl.querySelector("img").alt = im.alt;
    lbEl.querySelector("figcaption").textContent = im.alt;
    const multi = lbImages.length > 1;
    lbEl.querySelector(".lb-prev").style.display = multi ? "" : "none";
    lbEl.querySelector(".lb-next").style.display = multi ? "" : "none";
  }
  function stepLightbox(d) {
    lbIndex = (lbIndex + d + lbImages.length) % lbImages.length;
    renderLightbox();
  }
  function closeLightbox() {
    if (lbEl) lbEl.classList.remove("open");
    document.body.style.overflow = "";
  }

  function showList() {
    currentStop = null;
    $("#stop-view").hidden = true;
    $("#list-view").hidden = false;
    document.querySelectorAll(".pin.active").forEach((el) => el.classList.remove("active"));
    renderList();
  }

  /* ---------------- Hotel card (view / form) ---------------- */
  function renderHotel(stop) {
    const mount = $("#hotel-mount");
    const h = Store.get(stop.id);

    // Maastricht is covered by relatives — gentle note instead of a form.
    if (stop.id === "maastricht" && !h) {
      mount.innerHTML = `<div class="hotel-card"><div class="hotel-empty">
        <p>👨‍👩‍👧 Staying with relatives here — no booking needed.<br>You can still add details below if you'd like.</p>
        <button class="btn btn-ghost btn-block" id="hotel-add">Add a note anyway</button>
      </div></div>`;
      $("#hotel-add").addEventListener("click", () => showHotelForm(stop, {}));
      return;
    }
    if (stop.type === "waypoint" || stop.type === "endpoint") {
      if (!h) {
        mount.innerHTML = `<div class="hotel-card"><div class="hotel-empty">
          <p>This is a ${stop.type === "endpoint" ? "start/finish point" : "stop en route"}, not an overnight — no hotel needed.</p>
        </div></div>`;
        return;
      }
    }

    if (!h) {
      mount.innerHTML = `<div class="hotel-card"><div class="hotel-empty">
        <p>No hotel saved yet for ${esc(stop.name)}.<br>Once you book, pop the details in here so they're handy on the road.</p>
        <button class="btn btn-primary btn-block" id="hotel-add">+ Add hotel details</button>
      </div></div>`;
      $("#hotel-add").addEventListener("click", () => showHotelForm(stop, {}));
      return;
    }

    // Booked — show summary
    const row = (label, val) => val ? `<dt>${label}</dt><dd>${val}</dd>` : "";
    const link = h.link ? `<dt>Link</dt><dd><a href="${esc(h.link)}" target="_blank" rel="noopener">Open booking ↗</a></dd>` : "";
    mount.innerHTML = `
      <div class="hotel-card booked">
        <div class="hotel-summary">
          <div class="hotel-name">${esc(h.name || "Hotel")}</div>
          <dl>
            ${row("Address", esc(h.address))}
            ${row("Check-in", esc(h.checkIn))}
            ${row("Check-out", esc(h.checkOut))}
            ${row("Confirmation", esc(h.confirmation))}
            ${row("Price", esc(h.price))}
            ${row("Notes", esc(h.notes))}
            ${link}
          </dl>
        </div>
        <div class="hotel-actions">
          <button class="btn btn-ghost" id="hotel-edit">Edit</button>
          <button class="btn btn-danger" id="hotel-del">Remove</button>
        </div>
      </div>`;
    $("#hotel-edit").addEventListener("click", () => showHotelForm(stop, h));
    $("#hotel-del").addEventListener("click", async () => {
      if (confirm(`Remove the hotel saved for ${stop.name}?`)) {
        await Store.remove(stop.id);
        renderHotel(stop);
      }
    });
  }

  function showHotelForm(stop, h) {
    const mount = $("#hotel-mount");
    const f = (id, label, val, type = "text", ph = "") =>
      `<div class="field">
         <label for="hf-${id}">${label}</label>
         <input id="hf-${id}" type="${type}" value="${esc(val || "")}" placeholder="${esc(ph)}" />
       </div>`;
    mount.innerHTML = `
      <div class="hotel-card">
        <form class="hotel-form" id="hotel-form">
          <div class="field full">
            <label for="hf-name">Hotel / apartment name</label>
            <input id="hf-name" type="text" value="${esc(h.name || "")}" placeholder="e.g. Hôtel de la Cathédrale" required />
          </div>
          <div class="field full">
            <label for="hf-address">Address</label>
            <input id="hf-address" type="text" value="${esc(h.address || "")}" placeholder="Street, city" />
          </div>
          ${f("checkIn", "Check-in", h.checkIn, "date")}
          ${f("checkOut", "Check-out", h.checkOut, "date")}
          ${f("confirmation", "Confirmation #", h.confirmation, "text", "Booking ref")}
          ${f("price", "Price", h.price, "text", "e.g. €420 total")}
          <div class="field full">
            <label for="hf-link">Booking link</label>
            <input id="hf-link" type="url" value="${esc(h.link || "")}" placeholder="https://..." />
          </div>
          <div class="field full">
            <label for="hf-notes">Notes</label>
            <textarea id="hf-notes" placeholder="Parking, cot, breakfast, contact number...">${esc(h.notes || "")}</textarea>
          </div>
          <div class="hotel-actions full">
            <button type="submit" class="btn btn-primary">Save hotel</button>
            <button type="button" class="btn btn-ghost" id="hotel-cancel">Cancel</button>
          </div>
        </form>
      </div>`;

    $("#hotel-cancel").addEventListener("click", () => renderHotel(stop));
    $("#hotel-form").addEventListener("submit", async (e) => {
      e.preventDefault();
      const val = (id) => $("#hf-" + id).value.trim();
      const hotel = {
        name: val("name"), address: val("address"),
        checkIn: val("checkIn"), checkOut: val("checkOut"),
        confirmation: val("confirmation"), price: val("price"),
        link: val("link"), notes: val("notes")
      };
      const btn = e.submitter; if (btn) { btn.disabled = true; btn.textContent = "Saving..."; }
      await Store.save(stop.id, hotel);
      renderHotel(stop);
    });
  }

  /* ---------------- Header stats + practical notes ---------------- */
  function renderChrome() {
    $("#subtitle").textContent = TRIP.subtitle;

    const nights = TRIP.stops.reduce((a, s) => a + (s.nights || 0), 0);
    const countries = new Set(TRIP.stops.map((s) => s.country)).size;
    const stats = [
      { num: "12", lab: "Days" },
      { num: String(nights), lab: "Nights" },
      { num: String(countries), lab: "Countries" },
      { num: "~22h", lab: "Driving" }
    ];
    $("#header-stats").innerHTML = stats.map((s) =>
      `<div class="stat"><span class="num">${s.num}</span><span class="lab">${s.lab}</span></div>`).join("");

    const box = $("#practical-box");
    box.innerHTML = TRIP.practical.map((p) =>
      `<div class="practical-item"><b>${esc(p.title)}</b><span>${esc(p.note)}</span></div>`).join("");
    $("#practical-toggle").addEventListener("click", () => {
      box.hidden = !box.hidden;
      $("#practical-toggle").textContent = box.hidden
        ? "🚙 Practical notes for the drive"
        : "🚙 Hide practical notes";
    });
  }

  function renderStorageBanner(mode) {
    const el = $("#storage-banner");
    if (mode === "cloud") {
      el.classList.add("cloud");
      el.innerHTML = "🌍 Hotel bookings are <b>shared across the family</b> — everyone sees updates on every device.";
    } else {
      el.innerHTML = "💾 Hotel bookings save to <b>this device</b>. To share them across the family, see the README → Supabase setup.";
    }
  }

  /* ---------------- Boot ---------------- */
  window.__openStop = openStop; // used by map popups

  async function boot() {
    renderChrome();
    initMap();
    const mode = await Store.init();
    renderStorageBanner(mode);
    renderList();
  }

  document.addEventListener("DOMContentLoaded", boot);
})();

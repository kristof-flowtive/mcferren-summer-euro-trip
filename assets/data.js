/* ------------------------------------------------------------------
   The McFerren's Summer Euro Trip — trip data
   Edit this file to tweak stops, attractions or drive times.
   Coordinates are [latitude, longitude].
------------------------------------------------------------------ */

const TRIP = {
  title: "The McFerren's Summer Euro Trip",
  subtitle: "A 12-day family loop · Kent → Burgundy → Basel → Alsace → home",
  totalDriving: "≈ 21–22 hours over 12 days · avg ~1 h 50 / day",

  // Stops are listed in travel order. `type` controls how they're drawn:
  //   endpoint = home (start/finish)   overnight = a night's stay   waypoint = stop en route, no overnight
  stops: [
    {
      id: "folkestone",
      name: "Folkestone",
      country: "England",
      lat: 51.0810, lng: 1.1700,
      type: "endpoint",
      dayLabel: "Day 1 · Start  ·  Day 12 · Finish",
      drive: "Le Shuttle to Calais — 35 min crossing",
      overnight: "Home",
      summary: "Where the adventure begins and ends. Board a morning Le Shuttle crossing on Day 1 (Folkestone → Calais, ~35 min) and roll off in France ready for the run to Reims.",
      attractions: [
        { name: "Le Shuttle terminal", desc: "Book a morning crossing for Day 1; arrive ~45 min ahead. Stay in your car, ~35 min under the Channel." },
        { name: "Folkestone Harbour Arm", desc: "If you've time before crossing — a restored pier with food stalls, bars and sea views." }
      ]
    },
    {
      id: "calais",
      name: "Calais",
      country: "France",
      lat: 50.9513, lng: 1.8587,
      type: "waypoint",
      dayLabel: "Day 1 · Arrival gateway",
      drive: "Calais → Reims — 2 h 40 (270 km)",
      overnight: "—",
      summary: "Your French gateway off Le Shuttle. No need to stop long — point the car south and make the comfortable motorway run to Reims for the first night.",
      attractions: [
        { name: "Fuel & stretch stop", desc: "Top up the tank and grab a coffee before the 2 h 40 motorway run to Reims." }
      ]
    },
    {
      id: "reims",
      name: "Reims",
      country: "France",
      lat: 49.2583, lng: 4.0317,
      type: "overnight",
      nights: 1,
      dayLabel: "Day 1 · Night 1",
      drive: "Arrive from Calais — 2 h 40 (270 km)",
      overnight: "Reims · 1 night",
      summary: "Champagne capital and home to a magnificent Gothic cathedral. A perfect first night — an easy motorway run from Calais, and your first taste of France.",
      attractions: [
        { name: "Notre-Dame de Reims", desc: "Soaring Gothic cathedral where French kings were crowned — UNESCO listed and stunning at golden hour." },
        { name: "Champagne house cellars", desc: "Tour the chalk cellars of Taittinger, Veuve Clicquot or Pommery — most run family-friendly daytime tours with tastings." },
        { name: "Palais du Tau", desc: "The former archbishop's palace beside the cathedral, full of coronation treasures." },
        { name: "Place Drouet d'Erlon", desc: "The city's lively pedestrian heart — cafés, brasseries and ice-cream for an easy first-night dinner." },
        { name: "Basilique Saint-Remi", desc: "A vast, calm Romanesque-Gothic basilica, also UNESCO listed and usually quiet." }
      ]
    },
    {
      id: "hautvillers",
      name: "Hautvillers",
      country: "France",
      lat: 49.0816, lng: 3.9526,
      type: "waypoint",
      dayLabel: "Day 2 · Champagne stop",
      drive: "Reims → Hautvillers — 35 min, then on to Troyes",
      overnight: "—",
      summary: "The village of Dom Pérignon, draped in vineyards above the Marne. An ideal mid-morning stop on Day 2 rather than an overnight — wander, taste, and carry on to Troyes.",
      attractions: [
        { name: "Abbey of Saint-Pierre", desc: "Resting place of Dom Pérignon, the monk who shaped champagne as we know it." },
        { name: "Vineyard viewpoints", desc: "Walk to the edge of the village for sweeping views over the Marne valley vines." },
        { name: "Wrought-iron village signs", desc: "Hautvillers is famous for its ornate hanging shop signs — a lovely slow stroll with a buggy." },
        { name: "Grower champagne tasting", desc: "Small family houses (e.g. G. Tribaut) offer relaxed tastings with valley views." }
      ]
    },
    {
      id: "troyes",
      name: "Troyes",
      country: "France",
      lat: 48.2973, lng: 4.0744,
      type: "overnight",
      nights: 1,
      dayLabel: "Day 2 · Night 2",
      drive: "Arrive from Hautvillers — 1 h 45 total (140 km)",
      overnight: "Troyes · 1 night",
      summary: "A gorgeous half-timbered medieval old town — compact, colourful and stroller-friendly. Keeps the Day 2–3 drives short and easy.",
      attractions: [
        { name: "Medieval old town", desc: "A maze of leaning, candy-coloured half-timbered houses — the historic centre is shaped like a champagne cork." },
        { name: "Ruelle des Chats", desc: "An impossibly narrow medieval alley where the rooftops almost touch overhead." },
        { name: "Cathédrale Saint-Pierre-et-Saint-Paul", desc: "Renowned for some of the finest stained glass in France." },
        { name: "Cité du Vitrail", desc: "A beautifully presented stained-glass museum — colourful and engaging for little ones too." },
        { name: "Outlet villages", desc: "Troyes is France's outlet capital (McArthurGlen & more) if you fancy a browse." }
      ]
    },
    {
      id: "beaune",
      name: "Beaune",
      country: "France",
      lat: 47.0257, lng: 4.8398,
      type: "overnight",
      nights: 1,
      dayLabel: "Day 3 · Night 3",
      drive: "Troyes → Beaune — 2 h 00 (190 km)",
      overnight: "Beaune · 1 night",
      summary: "The wine capital of the Côte d'Or and your Burgundy wish — ringed by ramparts, chateaux and legendary vineyards.",
      attractions: [
        { name: "Hospices de Beaune (Hôtel-Dieu)", desc: "The iconic 15th-century charity hospital with its dazzling glazed-tile roof — Beaune's must-see." },
        { name: "Wine cellar tasting", desc: "Descend into historic cellars at Patriarche or the Marché aux Vins for a Burgundy tasting." },
        { name: "Ramparts walk", desc: "Stroll the old town walls, dotted with bastions and gardens — flat and easy with a buggy." },
        { name: "Collégiale Notre-Dame", desc: "A serene Romanesque church with rare medieval tapestries." },
        { name: "Saturday market", desc: "If timing aligns, Beaune's market fills the centre with Burgundian produce, cheese and flowers." }
      ]
    },
    {
      id: "basel",
      name: "Basel",
      country: "Switzerland",
      lat: 47.5596, lng: 7.5886,
      type: "overnight",
      nights: 3,
      dayLabel: "Days 4–6 · Nights 4, 5 & 6",
      drive: "Beaune → Basel — 2 h 40 (230 km)",
      overnight: "Basel · 3 nights",
      summary: "Your anchor: two full unpacked days where the Rhine meets France, Germany and Switzerland. Toddler-friendly and brimming with day-trip options.",
      attractions: [
        { name: "Basel Zoo (Zolli)", desc: "One of Europe's best and oldest zoos, right in the city — a sure-fire toddler hit." },
        { name: "Rhine promenade & ferry", desc: "Stroll the riverbank and hop the quirky cable-guided reaction ferries across the Rhine." },
        { name: "Old town & Marktplatz", desc: "The crimson Town Hall, medieval lanes and the Tinguely Fountain of kinetic sculptures." },
        { name: "Basel Münster", desc: "Red-sandstone cathedral with cloisters and a terrace view over the Rhine." },
        { name: "Fondation Beyeler", desc: "A world-class art museum in a Renzo Piano building, set in parkland just outside town." },
        { name: "Day trip: Colmar", desc: "Storybook Alsace canals and half-timbered houses — just 45 min away." },
        { name: "Day trip: Rheinfelden thermal baths", desc: "Relaxing thermal spa 20 min from Basel — a lovely slow afternoon." },
        { name: "Day trip: Augusta Raurica", desc: "Switzerland's largest Roman site, with a reconstructed theatre — great for curious kids." },
        { name: "Day trip: Vitra Campus", desc: "An open-air museum of architecture by the world's great designers, 15 min over the German border." }
      ]
    },
    {
      id: "titisee",
      name: "Titisee / Black Forest",
      country: "Germany",
      lat: 47.9135, lng: 8.1530,
      type: "overnight",
      nights: 1,
      dayLabel: "Day 7 · Night 7",
      drive: "Basel → Titisee — 1 h 10 (75 km)",
      overnight: "Titisee or Freiburg · 1 night",
      summary: "A short, scenic climb into the Black Forest — lake, pine woods and cuckoo clocks. Weekday mornings beat the crowds. Freiburg makes a charming alternative or lunch stop en route.",
      attractions: [
        { name: "Lake Titisee", desc: "Pedalos, boat rides and a lakeside promenade ringed by forested hills." },
        { name: "Black Forest walks", desc: "Easy buggy-friendly trails through cool pine woods straight from the lakeshore." },
        { name: "House of 1000 Clocks", desc: "The Black Forest's famous cuckoo-clock emporium — a fun, only-here stop." },
        { name: "Triberg Waterfalls", desc: "Germany's highest falls, a short drive away, with an easy stepped path through the woods." },
        { name: "Freiburg old town", desc: "If en route: cobbled lanes threaded with 'Bächle' water channels, beneath a soaring minster (50 min from Basel)." }
      ]
    },
    {
      id: "riquewihr",
      name: "Riquewihr",
      country: "France",
      lat: 48.1668, lng: 7.2975,
      type: "waypoint",
      dayLabel: "Day 8 · Lunch stop",
      drive: "Titisee → Riquewihr — lunch stop, then Strasbourg",
      overnight: "—",
      summary: "The jewel of the Alsace wine route — a walled medieval village of flower-decked, half-timbered houses. A perfect lunch stop on the way to Strasbourg.",
      attractions: [
        { name: "Medieval walled village", desc: "Wander the ramparts and gateways of one of France's prettiest villages, barely changed since the 16th century." },
        { name: "Dolder Tower", desc: "The village's iconic 13th-century gate tower, with a small history museum inside." },
        { name: "Alsace wine tasting", desc: "Riesling and Gewürztraminer at long-established houses like Hugel & Fils and Dopff." },
        { name: "Flower-lined lanes", desc: "Geranium-draped balconies, storybook shopfronts and a famous year-round Christmas shop." }
      ]
    },
    {
      id: "strasbourg",
      name: "Strasbourg",
      country: "France",
      lat: 48.5734, lng: 7.7521,
      type: "overnight",
      nights: 1,
      dayLabel: "Day 8 · Night 8",
      drive: "Arrive from Titisee via Riquewihr — 2 h 45 total (175 km)",
      overnight: "Strasbourg · 1 night",
      summary: "Think 'big Colmar': a grand cathedral, the canal quarter of Petite France, and easy, flat strolling with a buggy.",
      attractions: [
        { name: "Cathédrale Notre-Dame", desc: "A rose-pink Gothic masterpiece with a famous astronomical clock and a climbable tower over the rooftops." },
        { name: "Petite France", desc: "The half-timbered former tanners' quarter, laced with canals, locks and flower-decked bridges." },
        { name: "Boat tour on the Ill", desc: "A relaxed Batorama river cruise circling the old town — a restful way to see it all with little legs." },
        { name: "Parc de l'Orangerie", desc: "Strasbourg's loveliest park, with free-roaming storks, a mini-zoo and playgrounds — ideal for toddlers." },
        { name: "European Parliament", desc: "The striking modern seat of European democracy, across the river from the Orangerie." }
      ]
    },
    {
      id: "heidelberg",
      name: "Heidelberg",
      country: "Germany",
      lat: 49.3988, lng: 8.6724,
      type: "overnight",
      nights: 1,
      dayLabel: "Day 9 · Night 9",
      drive: "Strasbourg → Heidelberg — 1 h 45 (140 km)",
      overnight: "Heidelberg · 1 night",
      summary: "A romantic castle ruin above the Neckar, a beautiful old town and a storied old bridge — the perfect way to break the run toward Luxembourg.",
      attractions: [
        { name: "Heidelberg Castle", desc: "The dramatic red-stone ruin on the hillside, reached by a fun funicular, with the Great Vat and terrace views." },
        { name: "Old Bridge (Alte Brücke)", desc: "The elegant Neckar bridge — rub the bridge monkey's mirror for good luck." },
        { name: "Philosophers' Walk", desc: "A hillside path with the postcard view back over the castle and old town (steep but rewarding)." },
        { name: "Marktplatz & old town", desc: "Germany's longest pedestrian street, leading to a lively market square below the church." },
        { name: "Königstuhl & fairy-tale park", desc: "Ride the historic funicular to the summit, with the Märchenparadies fairy-tale park for little ones." }
      ]
    },
    {
      id: "luxembourg",
      name: "Luxembourg City",
      country: "Luxembourg",
      lat: 49.6116, lng: 6.1319,
      type: "overnight",
      nights: 1,
      dayLabel: "Day 10 · Night 10",
      drive: "Heidelberg → Luxembourg — 2 h 45 (230 km)",
      overnight: "Luxembourg · 1 night",
      summary: "A dramatic UNESCO old town perched on cliffs above the green Grund valley — a spectacular last stop before family. And the public transport is free!",
      attractions: [
        { name: "Bock Casemates", desc: "Tunnels and cannon galleries carved into the cliff that founded the city — atmospheric and fun to explore." },
        { name: "Chemin de la Corniche", desc: "Dubbed 'the most beautiful balcony in Europe', this rampart walk looks down over the Grund." },
        { name: "The Grund", desc: "Take the free panoramic lift down to the riverside lower town — cafés, an old abbey and water meadows." },
        { name: "Place d'Armes", desc: "The leafy café-lined main square at the heart of the upper town." },
        { name: "Mudam & Philharmonie", desc: "Striking modern art museum and concert hall on the Kirchberg plateau, by I. M. Pei." }
      ]
    },
    {
      id: "maastricht",
      name: "Maastricht",
      country: "Netherlands",
      lat: 50.8514, lng: 5.6910,
      type: "overnight",
      nights: 1,
      dayLabel: "Day 11 · Night 11",
      drive: "Luxembourg → Maastricht — 2 h 30 (210 km)",
      overnight: "Maastricht · 1 night · with relatives",
      summary: "Family time in one of the Netherlands' oldest and most elegant cities, on the Maas river. Accommodation covered by relatives.",
      attractions: [
        { name: "Vrijthof square", desc: "The grand café-ringed heart of the city, framed by two historic churches." },
        { name: "Boekhandel Dominicanen", desc: "A spectacular bookshop set inside a soaring 13th-century Gothic church — unforgettable." },
        { name: "Sint-Pietersberg caves", desc: "Atmospheric underground marl tunnels and a star-shaped fort on the hill above town." },
        { name: "Markt & Saturday market", desc: "The lively market square below the town hall, busiest and best on a Saturday morning." },
        { name: "Riverside Maas walks", desc: "Easy strolls and bridges along the river, with playgrounds and ice-cream stops." }
      ]
    },
    {
      id: "ghent-bruges",
      name: "Ghent / Bruges",
      country: "Belgium",
      lat: 51.0543, lng: 3.7174,
      type: "waypoint",
      dayLabel: "Day 12 · Lunch stop",
      drive: "Maastricht → Ghent/Bruges → Calais → Le Shuttle home (3 h 20 total, in two legs)",
      overnight: "—",
      summary: "A canal-side Belgian lunch stop that splits the final drive home neatly in two. Pick Ghent (closer, less touristy) or detour a little further to fairy-tale Bruges.",
      attractions: [
        { name: "Ghent · Gravensteen", desc: "A moated medieval castle you can clamber through, smack in the city centre." },
        { name: "Ghent · Graslei & Korenlei", desc: "The photogenic guild-house waterfront — perfect for a canal-side lunch." },
        { name: "Ghent · St Bavo's Cathedral", desc: "Home to the world-famous Ghent Altarpiece by the Van Eyck brothers." },
        { name: "Bruges · Markt & Belfry", desc: "The iconic medieval square and its climbable bell tower (366 steps!)." },
        { name: "Bruges · canal boat tour", desc: "Glide beneath stone bridges through the 'Venice of the North' — a relaxing finale." },
        { name: "Bruges · Minnewater", desc: "The romantic 'Lake of Love' and the tranquil Beguinage — and, of course, chocolate shops everywhere." }
      ]
    }
  ],

  // Practical notes for driving your own UK-plated car through Europe.
  practical: [
    { title: "Le Shuttle", note: "Book a morning crossing for Day 1; ~35 min Folkestone → Calais. You stay in your car." },
    { title: "Swiss motorway vignette", note: "Required for Switzerland — CHF 40, buy online or at the border before Basel." },
    { title: "French autoroute tolls", note: "Roughly €60–80 total. A toll tag (e.g. Emovis) lets you skip the queues." },
    { title: "Crit'Air sticker (France)", note: "Needed for Strasbourg & Reims low-emission zones — order online ~2–3 weeks ahead (~€4.80)." },
    { title: "German Umweltplakette", note: "Needed for Freiburg & Heidelberg centres (~€10–15, available at TÜV stations en route)." },
    { title: "Car kit", note: "UK sticker and headlamp beam converters for driving on the right." }
  ]
};

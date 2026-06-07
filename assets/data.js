/* ------------------------------------------------------------------
   The McFerren's Summer Euro Trip — trip data
   Edit this file to tweak stops, attractions or drive times.
   Coordinates are [latitude, longitude].
------------------------------------------------------------------ */

const TRIP = {
  title: "The McFerren's Summer Euro Trip",
  subtitle: "29 June – 10 July 2026 · a 12-day family loop · Kent → Burgundy → Basel → Alsace → home",
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


/* ------------------------------------------------------------------
   Stop photos (lead images from Wikipedia / Wikimedia Commons,
   freely licensed). Attached to each stop on load. To swap a photo,
   replace its url below.
------------------------------------------------------------------ */
const TRIP_IMAGES = {
  "folkestone": [
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Folkestone_Harbour_with_Viaduct_and_Swing_Bridge.png/1280px-Folkestone_Harbour_with_Viaduct_and_Swing_Bridge.png", alt: "Folkestone" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Chargement_voiture_Eurotunnel.jpg/1280px-Chargement_voiture_Eurotunnel.jpg", alt: "Eurotunnel Le Shuttle" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Leas_Lift_%282%29.JPG/1280px-Leas_Lift_%282%29.JPG", alt: "Leas Lift" }
  ],
  "calais": [
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Jielbeaumadier_Calais_2008_35.jpeg/1280px-Jielbeaumadier_Calais_2008_35.jpeg", alt: "Calais" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Calais_Nord_phare.JPG/1280px-Calais_Nord_phare.JPG", alt: "Calais Lighthouse" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Calais_hotel_de_ville_face.jpg/1280px-Calais_hotel_de_ville_face.jpg", alt: "Hôtel de Ville" }
  ],
  "reims": [
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Exterior_view_of_the_west_facade_of_Notre-Dame_Cathedral_in_Reims.jpg/1280px-Exterior_view_of_the_west_facade_of_Notre-Dame_Cathedral_in_Reims.jpg", alt: "Reims Cathedral" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Palais_du_Tau_et_cath%C3%A9drale.jpg/1280px-Palais_du_Tau_et_cath%C3%A9drale.jpg", alt: "Palace of Tau" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Sub%C3%A9_Fountain%2C_Reims%2C_France.jpg/1280px-Sub%C3%A9_Fountain%2C_Reims%2C_France.jpg", alt: "Reims" }
  ],
  "hautvillers": [
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Town_Hall_Hautvillers.jpg/1280px-Town_Hall_Hautvillers.jpg", alt: "Hautvillers" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Glass_of_champagne.jpg/1280px-Glass_of_champagne.jpg", alt: "Champagne" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/La_Marne_a_Dormans_DSC_0117.JPG/1280px-La_Marne_a_Dormans_DSC_0117.JPG", alt: "Marne" }
  ],
  "troyes": [
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Troyes_centre_ville1.JPG/1280px-Troyes_centre_ville1.JPG", alt: "Troyes" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Cath%C3%A9drale_Saint-Pierre-et-Saint-Paul%2C_Troyes%2C_West_view_20140509_1.jpg/1280px-Cath%C3%A9drale_Saint-Pierre-et-Saint-Paul%2C_Troyes%2C_West_view_20140509_1.jpg", alt: "Troyes Cathedral" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Glass_of_champagne.jpg/1280px-Glass_of_champagne.jpg", alt: "Champagne" }
  ],
  "beaune": [
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Beaune_-_H%C3%B4tel-Dieu_-_Cour_-_05.jpg/1280px-Beaune_-_H%C3%B4tel-Dieu_-_Cour_-_05.jpg", alt: "Hôtel-Dieu de Beaune" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Beaune_-_H%C3%B4tel-Dieu_-_Cour_-_02.jpg/1280px-Beaune_-_H%C3%B4tel-Dieu_-_Cour_-_02.jpg", alt: "Beaune" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Vignobles_cotes_de_beaune-fr.svg/1280px-Vignobles_cotes_de_beaune-fr.svg.png", alt: "Côte de Beaune" }
  ],
  "basel": [
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Basler_-_Basler_M%C3%BCnster_Westfassade.jpg/1280px-Basler_-_Basler_M%C3%BCnster_Westfassade.jpg", alt: "Basel Minster" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Basel_-_M%C3%BCnsterpfalz1.jpg/1280px-Basel_-_M%C3%BCnsterpfalz1.jpg", alt: "Basel" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Zolli-logo.JPG/1280px-Zolli-logo.JPG", alt: "Basel Zoo" }
  ],
  "titisee": [
    { url: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Titisee-blick_von_hochfirst.jpg", alt: "Titisee" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Blick_vom_Hohfelsen.jpg/1280px-Blick_vom_Hohfelsen.jpg", alt: "Black Forest" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Triberg_waterfall.jpg/1280px-Triberg_waterfall.jpg", alt: "Triberg Waterfalls" }
  ],
  "riquewihr": [
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/0_Riquewihr_%281%29.jpg/1280px-0_Riquewihr_%281%29.jpg", alt: "Riquewihr" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Colmar_%2832350846618%29.jpg/1280px-Colmar_%2832350846618%29.jpg", alt: "Alsace" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Kaysersberg.jpg/1280px-Kaysersberg.jpg", alt: "Kaysersberg" }
  ],
  "strasbourg": [
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Strasbourg_Cathedral_Exterior_-_Diliff.jpg/1280px-Strasbourg_Cathedral_Exterior_-_Diliff.jpg", alt: "Strasbourg Cathedral" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Strasbourg_Petite-France_place_Benjamin-Zix_septembre_2015.jpg/1280px-Strasbourg_Petite-France_place_Benjamin-Zix_septembre_2015.jpg", alt: "Petite France" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Strasbourg_Cathedral.jpg/1280px-Strasbourg_Cathedral.jpg", alt: "Strasbourg" }
  ],
  "heidelberg": [
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Heidelberg-2726936.jpg/1280px-Heidelberg-2726936.jpg", alt: "Heidelberg Castle" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Alte_Br%C3%BCcke_Heidelberg.JPG/1280px-Alte_Br%C3%BCcke_Heidelberg.JPG", alt: "Old Bridge" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/K%C3%B6nigstuhl%2C_Heidelberg%2C_U-17.jpg/1280px-K%C3%B6nigstuhl%2C_Heidelberg%2C_U-17.jpg", alt: "Heidelberg" }
  ],
  "luxembourg": [
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Luxembourg_Grand_Ducal_Palace_01.jpg/1280px-Luxembourg_Grand_Ducal_Palace_01.jpg", alt: "Luxembourg City" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/5/57/Selig_Luxembourg_from_Paffendall.jpg", alt: "Bock" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/%C3%89glise_Saint-Jean_%28Neum%C3%BCnster%29_20180627.jpg/1280px-%C3%89glise_Saint-Jean_%28Neum%C3%BCnster%29_20180627.jpg", alt: "Grund" }
  ],
  "maastricht": [
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Maastricht_sunset.jpg/1280px-Maastricht_sunset.jpg", alt: "Maastricht" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Vrijthof_-_Maastricht%2C_Holland_-_panoramio.jpg/1280px-Vrijthof_-_Maastricht%2C_Holland_-_panoramio.jpg", alt: "Vrijthof" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Maastricht%2C_de_Sint_Servaasbasiliek_op_het_Vrijhof_foto8_2011-01-30_13.01.JPG/1280px-Maastricht%2C_de_Sint_Servaasbasiliek_op_het_Vrijhof_foto8_2011-01-30_13.01.JPG", alt: "Basilica of Saint Servatius" }
  ],
  "ghent-bruges": [
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Br%C3%BCgge_Blick_vom_Belfried_4.jpg/1280px-Br%C3%BCgge_Blick_vom_Belfried_4.jpg", alt: "Bruges" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Gent%2C_de_Graslei_vanaf_de_Korenlei_met_oeg24758tm61%2B25159_IMG_0447_2021-08-13_18.37.jpg/1280px-Gent%2C_de_Graslei_vanaf_de_Korenlei_met_oeg24758tm61%2B25159_IMG_0447_2021-08-13_18.37.jpg", alt: "Ghent" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Brugge_Belfort_HDR.jpg/1280px-Brugge_Belfort_HDR.jpg", alt: "Belfry of Bruges" }
  ]
};

// Attach photos to their stops.
TRIP.stops.forEach(function (s) { s.images = TRIP_IMAGES[s.id] || []; });


/* ------------------------------------------------------------------
   Trip dates — anchored on Basel (check-in Thu 2 Jul → check-out
   Sun 5 Jul 2026). Everything counts out from there. Attached to
   each stop on load.
------------------------------------------------------------------ */
const TRIP_DATES = {
  "folkestone":   "Mon 29 Jun · Fri 10 Jul 2026",
  "calais":       "Mon 29 Jun",
  "reims":        "Mon 29 Jun",
  "hautvillers":  "Tue 30 Jun",
  "troyes":       "Tue 30 Jun",
  "beaune":       "Wed 1 Jul",
  "basel":        "Thu 2 – Sun 5 Jul",
  "titisee":      "Sun 5 Jul",
  "riquewihr":    "Mon 6 Jul",
  "strasbourg":   "Mon 6 Jul",
  "heidelberg":   "Tue 7 Jul",
  "luxembourg":   "Wed 8 Jul",
  "maastricht":   "Thu 9 Jul",
  "ghent-bruges": "Fri 10 Jul"
};

// Attach dates to their stops.
TRIP.stops.forEach(function (s) { s.date = TRIP_DATES[s.id] || ""; });


/* ------------------------------------------------------------------
   Accommodation shortlist (public — for choosing & booking now).
   3 vetted options per overnight stop; ⭐ top pick flagged. Basel is
   already sorted, Maastricht is relatives. Source: accommodation-options.md
------------------------------------------------------------------ */
const TRIP_STAYS = {
  "reims": {
    options: [
      { top: true, name: "Residhome Appart Hotel Reims Centre", kind: "Aparthotel", price: "~€89–120/night", rating: "8.0/10 · 1,863 reviews",
        desc: "6 rue de Courcelles — 200 m from the station, 10–12 min walk to the cathedral. Kitchenette in every studio; on-site parking €10/night; free baby cot.",
        why: "Ticks every requirement in one go — and after the 2 h 40 from Calais you can walk straight to dinner.",
        links: [ { label: "Residhome", url: "https://www.residhome.com/uk/hotel-residence-aparthotel-reims-233.html" }, { label: "Booking.com", url: "https://www.booking.com/hotel/fr/residhome-reims-centre.en-gb.html" } ] },
      { name: "Appart'City Confort Reims Centre", kind: "Aparthotel", price: "~€63–110/night", rating: "8.1/10",
        desc: "700 m from the cathedral. Full kitchenette.",
        why: "Most walkable + cheapest — but no on-site parking (street/public nearby), the one caveat with a loaded car.",
        links: [ { label: "Appart'City", url: "https://www.appartcity.com/en/destinations/france/grand-est/reims/reims-centre" }, { label: "Booking.com", url: "https://www.booking.com/hotel/fr/appart-city-reims-centre.html" } ] },
      { name: "Séjours & Affaires Reims Clairmarais", kind: "Aparthotel", price: "~€70–100/night", rating: "7.9/10",
        desc: "Near the station, ~15 min walk to the cathedral. Kitchenette; on-site parking €9/day; cot on request.",
        why: "Cheapest secure-parking fallback; functional rather than charming.",
        links: [ { label: "Séjours & Affaires", url: "https://www.sejours-affaires.com/uk/hotel-residence-aparthotel-reims-177.html" } ] }
    ]
  },
  "troyes": {
    options: [
      { top: true, name: "SmartAppart Troyes", kind: "Aparthotel", price: "~€60–90/night", rating: "8.6/10 · best-reviewed in Troyes",
        desc: "In the old town, 10 min walk from the station. Equipped kitchenette; cots offered; paid public car park directly across the street.",
        why: "Right in the half-timbered centre at a great price; only compromise is the garage being across the road, not on-site.",
        links: [ { label: "SmartAppart", url: "https://www.smart-appart.fr/fr/hotels/troyes-smartappart-troyes/5" }, { label: "Booking.com", url: "https://www.booking.com/hotel/fr/smartappart-troyes.html" } ] },
      { name: "Kosy Appart'hotels Troyes City & Park", kind: "Aparthotel", price: "~€70–110/night", rating: "7.7/10 · no A/C",
        desc: "~800 m from the cathedral. Kitchenette; on-site parking ~€7/night; cots subject to availability. No A/C — worth noting for a July heatwave.",
        why: "The choice if you want the car on the property itself.",
        links: [ { label: "Kosy", url: "https://en.kosy-apparthotels.com/troyes-city-park/" }, { label: "Booking.com", url: "https://www.booking.com/hotel/fr/apparthotel-city-amp-park.en-gb.html" } ] },
      { name: "Appart'Hôtel Sainte Trinité", kind: "Apartments · character", price: "~€90–140/night", rating: "Mixed reviews",
        desc: "7 apartments in a converted medieval building, heart of the old town. Full kitchenette + dishwasher, A/C; secure on-site parking ~€20/day (tight spaces — reserve with the room). Narrow medieval stairs — weigh that with baby + luggage.",
        why: "The character pick if atmosphere beats convenience.",
        links: [ { label: "Booking.com", url: "https://www.booking.com/hotel/fr/appart-39-sainte-trinite.html" } ] }
    ]
  },
  "beaune": {
    priority: "Book 2nd",
    options: [
      { top: true, name: "Résidence Beaune Sweet Home", kind: "Serviced apartments", price: "~€130–180/night", rating: "9.2/10 · 115 reviews",
        desc: "4 air-conditioned apartments, 200–300 m from the Hospices. Full kitchens; secure covered parking included; cot + highchair on request.",
        why: "The strongest all-round match of the whole trip — explicitly baby-equipped, dead central, parking included.",
        links: [ { label: "beaune-sweethome.fr", url: "https://www.beaune-sweethome.fr/en/the-apartments/" }, { label: "Booking.com", url: "https://www.booking.com/hotel/fr/beaune-allerey.html" } ] },
      { name: "La Maison de Maurice", kind: "Designer apartments", price: "~€140–155/night", rating: "9.1/10 · 463 reviews",
        desc: "Designer apartments above a wine bar, 100 m from Notre-Dame. Full kitchen; cots can be added; no on-site parking (public garage ~300 m).",
        why: "Superb reviews and the most central address possible; you trade parking for a 300 m walk.",
        links: [ { label: "lamaisondemaurice-beaune.com", url: "https://www.lamaisondemaurice-beaune.com/la-maison-de-maurice-beaune-en.html" }, { label: "Booking.com", url: "https://www.booking.com/hotel/fr/la-maison-de-maurice.html" } ] },
      { name: "Chez Marie – Centre – Parking privé", kind: "Host-run apartment", price: "~€110–140/night", rating: "Small review base",
        desc: "1-bedroom apartment with terrace, central. Full kitchen; free private on-site parking; separate bedroom = easy travel-cot setup (message host re: cot).",
        why: "Only central option with free on-site parking and a proper separate bedroom for baby's sleep.",
        links: [ { label: "Booking.com", url: "https://www.booking.com/hotel/fr/chez-coco-t2-proche-centre-avec-parking-47-terrasse.fr.html" } ] }
    ]
  },
  "titisee": {
    priority: "Book 1st",
    note: "Peak season + small properties — book these first, ideally this month.",
    options: [
      { top: true, name: "Ferienwohnungen DaHeim Titisee (Hinterzarten)", kind: "Holiday apartments", price: "~€94–130/night", rating: "9.2/10",
        desc: "Family-run apartments on the Hinterzarten side of the lake. Full kitchen incl. oven + dishwasher; free parking; cot €6/night.",
        why: "Proper kitchen, free parking, cheap cot, top score, real Black Forest character.",
        links: [ { label: "Booking.com", url: "https://www.booking.com/hotel/de/ferienwohnungen-daheim-titisee.html" }, { label: "daheim.ferienhaeusle.com", url: "https://daheim.ferienhaeusle.com/" } ] },
      { name: "Appartements Waldrose", kind: "Lakefront apartments", price: "~€110–160/night", rating: "8.9/10",
        desc: "9 apartments directly on the lakefront (Bruderhalde, away from the touristy promenade), own boat dock. Kitchenette; free parking; cot €10/stay.",
        why: "Best lake position — morning pram walk along the water from your door.",
        links: [ { label: "Booking.com", url: "https://www.booking.com/hotel/de/appartements-waldrose.html" } ] },
      { name: "Ferienhaus Frei Apartments", kind: "Apartments · best value", price: "~€80–130/night", rating: "Book direct",
        desc: "Family-run apartments in Titisee-Neustadt, short drive to the lake. Full kitchens; free parking; cot + highchair free.",
        why: "The value fallback if the lakeside two are sold out.",
        links: [ { label: "ferienhaus-frei.com", url: "https://ferienhaus-frei.com/" } ] }
    ]
  },
  "strasbourg": {
    note: "Crit'Air sticker required for the low-emission zone (ANPR-enforced, €68 fine) — order now from certificat-air.gouv.fr, 2–4 weeks to the UK. All three picks have on-site parking.",
    options: [
      { top: true, name: "Aparthotel Adagio Access Strasbourg Petite France", kind: "Aparthotel", price: "~€100–150/night", rating: "8.1/10 · 3,500+ reviews",
        desc: "117-unit aparthotel, 5 min walk to Petite France. Kitchenette in every unit; on-site parking ~€15/night (reserve); cot on request.",
        why: "Best location-plus-parking combination — park inside the zone and stroll into Petite France with the pram.",
        links: [ { label: "Adagio", url: "https://www.adagio-city.com/gb/hotel-8446-aparthotel-adagio-access-strasbourg-petite-france/index.shtml" }, { label: "Booking.com", url: "https://www.booking.com/hotel/fr/adagio-access-strasbourg-petite-france.html" } ] },
      { name: "Citadines Kléber Strasbourg", kind: "Aparthotel · central", price: "~€120–180/night", rating: "8.4/10",
        desc: "On Place Kléber — dead centre, 8–10 min to both Petite France and the cathedral. Best kitchenette of the three (stovetop + dishwasher); secure underground parking ~€12–20/day; cot on request.",
        why: "The most central, with the best-equipped kitchen — priciest of the three.",
        links: [ { label: "Booking.com", url: "https://www.booking.com/hotel/fr/citadines-aparthotel-strasbourg.html" } ] },
      { name: "Odalys City Strasbourg Green Marsh", kind: "4★ residence · value", price: "~€95–140/night", rating: "8.0/10",
        desc: "Near the station, ~10 min flat walk to Petite France. Kitchenette + dishwasher; parking ~€12/day (limited — reserve at booking); cot on request.",
        why: "Good-value backup; station quarter is less charming but the walk is easy with a pram.",
        links: [ { label: "Odalys", url: "https://www.odalys-vacances.com/location-campagne/alsace-lorraine/strasbourg/green-marsh.html" } ] }
    ]
  },
  "heidelberg": {
    note: "All three sit just outside the Altstadt by design — Altstadt parking is scarce and the centre is an Umweltzone (order the green Umweltplakette ~2–3 weeks ahead, ~€6–15).",
    options: [
      { top: true, name: "Staycity Aparthotels Heidelberg", kind: "Aparthotel", price: "~€110–150/night", rating: "8.6/10 · 6,000+ reviews",
        desc: "In Bahnstadt, 7 min from the Hauptbahnhof; Altstadt ~10–15 min by tram. Full kitchenette incl. dishwasher; on-site garage ~€15–20 (limited — mention the car at booking); free cot AND highchair.",
        why: "The only Heidelberg option ticking every box outright.",
        links: [ { label: "staycity.com", url: "https://www.staycity.com/heidelberg/heidelberg" }, { label: "Booking.com", url: "https://www.booking.com/hotel/de/staycity-aparthotels-heidelberg-de.html" } ] },
      { name: "Aparthotel Adagio Heidelberg", kind: "Aparthotel · new 2024", price: "~€120–160/night", rating: "8.3/10",
        desc: "New aparthotel opposite the Hauptbahnhof. Full kitchen; underground garage ~€15–25/day; crib for a small fee. On-site grocery shop — handy for baby supplies.",
        why: "Newest rooms, everything in one building.",
        links: [ { label: "Booking.com", url: "https://www.booking.com/hotel/de/aparthotel-adagio-heidelberg.html" } ] },
      { name: "BoardingHouse Heidelberg", kind: "Serviced apartments", price: "~€95–135/night", rating: "7.9/10",
        desc: "By Bismarckplatz — closest to the Altstadt: ~14 min walk. Kitchenette; underground parking ~€15/day; cot unconfirmed (bring travel cot).",
        why: "Best walking position — leave the car garaged the whole stay.",
        links: [ { label: "Booking.com", url: "https://www.booking.com/hotel/de/boardingworld-heidelberg.html" } ] }
    ]
  },
  "luxembourg": {
    priority: "Book 3rd",
    note: "Luxembourg is pricey midweek, but all public transport is free nationwide — so a non-central base costs nothing in practice.",
    options: [
      { top: true, name: "The Central Kirchberg – Smart ApartHotel", kind: "Aparthotel", price: "~€110–160/night", rating: "8.9/10 · 1,020 reviews",
        desc: "86 apartments in Neudorf/Kirchberg; free bus/tram to the old town in 10–15 min. Full kitchen; secure basement garage €20/night; crib on request.",
        why: "Best value-for-requirements in an expensive city — and the tight Ville Haute parking never becomes your problem.",
        links: [ { label: "thecentral.lu", url: "https://thecentral.lu/smart-aparthotel-luxembourg-kirchberg/" }, { label: "Booking.com", url: "https://www.booking.com/hotel/lu/the-central-kirchberg-smart-aparthotel.html" } ] },
      { name: "The Central City – Luxury Serviced Residence", kind: "Serviced suites · above budget", price: "~€180–220+/night", rating: "No cribs — bring travel cot",
        desc: "Designer suites in the Gare district, 10–12 min flat walk to the old town. Full kitchen + in-unit laundry (useful mid-trip!); car-elevator parking.",
        why: "The stretch option: most walkable with secure indoor parking and a washing machine.",
        links: [ { label: "Booking.com", url: "https://www.booking.com/hotel/lu/the-central.html" } ] },
      { name: "Key Inn Appart Hotel Belair", kind: "Family residences · value", price: "~€100–140/night", rating: "~8/10",
        desc: "Family-oriented residences in quiet Belair, 10–15 min walk to the centre. Kitchenette; street parking only (overnight generally free in Belair); cot likely arrangeable — email ahead.",
        why: "Budget pick with family-sized units; weakest parking of the three.",
        links: [ { label: "key-inn.com", url: "https://www.key-inn.com/" }, { label: "Booking.com", url: "https://www.booking.com/hotel/lu/key-inn-appart-office.html" } ] }
    ]
  },
  "basel": { sorted: "Basel is already sorted — no booking needed here." }
};

// Attach accommodation options to their stops.
TRIP.stops.forEach(function (s) { s.stays = TRIP_STAYS[s.id] || null; });

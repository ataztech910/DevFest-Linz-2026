export const LOGO = "https://gdg-linz.at/gdg-linz-logo.png";
export const COMMUNITY_URL = "https://gdg.community.dev/gdg-linz/";
export const EVENT_URL = "https://gdg.community.dev/events/details/google-gdg-linz-presents-devfest-linz-2026/";
export const TOKENS_URL = "https://me.developers.google.com/benefits/claim/PROMO-0C2AA74D4BA7EB52";
const cdn = "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/";
const ev = "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/";
const sp = "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/";
const ph = "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,h_540,q_auto:good,w_720/v1/gcs/platform-data-goog/chapter_photos/";

export const organizers = [
  { name: "Andrii Khrystian", role: "GDG Organizer · Dynatrace", img: cdn + "andrii_khrystian_I81lrIO.jpg", url: "https://gdg.community.dev/u/m6tfsf/" },
  { name: "Gleb Maliborsky", role: "Organizer", img: cdn + "gleb_maliborsky_7wtEUr8.jpeg", url: "https://gdg.community.dev/u/gleb/" },
  { name: "Vladyslav Kravchenko", role: "Organizer · Dynatrace", img: cdn + "vladyslav_kravchenko_ySJIsZp.JPG", url: "https://gdg.community.dev/u/mzxvxf/" },
  { name: "Andrei Tazetdinov", role: "Organizer", img: cdn + "andrei_tazetdinov_bbc64f1b.png", url: "https://gdg.community.dev/u/andrei43/" },
];

export const pastEvents = [
  { date: "Aug 28, 2026", title: "Build With AI Series: AI Agents Development workshop", img: ev + "blob_cNpbRak", url: "https://gdg.community.dev/events/details/google-gdg-linz-presents-build-with-ai-series-ai-agents-development-workshop/" },
  { date: "Mar 31, 2026", title: "Launch of “Build with AI” Series: First meetup", img: ev + "forums/events/blob_mjcKKsy_Z1NfLTZ", url: "https://gdg.community.dev/events/details/google-gdg-linz-presents-launch-of-build-with-ai-series-first-meetup/" },
  { date: "Dec 6, 2025", title: "DevFest Linz: Great AI Hackathon", img: ev + "blob_0FmBpep", url: "https://gdg.community.dev/events/details/google-gdg-linz-presents-devfest-linz-great-ai-hackathon/" },
  { date: "Oct 1, 2025", title: "GDG Linz Autumn Meetup", img: ev + "blob_nmzu2Vi", url: "https://gdg.community.dev/events/details/google-gdg-linz-presents-gdg-linz-autumn-meetup/" },
];

export const partners = [
  { name: "Dynatrace", img: sp + "sponsors/blob_IUxFd1S", url: "https://www.dynatrace.com/" },
  { name: "Factory300", img: sp + "events/IMG_0122_CJ1Tj2h.png", url: "https://factory300.at/" },
  { name: "Young AI Leaders Linz", img: sp + "sponsors/blob_mRsXEv9", url: "https://youngaileaderslinz.at/" },
  { name: "Stadt Linz", img: sp + "sponsors/blob_qtdPVhh", url: "https://www.linz.at/" },
  { name: "JKU", img: sp + "sponsors/blob_dnj0VxD", url: "https://www.jku.at/" },
  { name: "Notion", img: sp + "sponsors/blob_gV93CVj", url: "https://www.notion.com/" },
  { name: "Startup Upper Austria", img: sp + "sponsors/blob_nWDkcXd", url: "https://startupsupperaustria.at/" },
];

export const photos = ["IMG_0120.jpeg", "IMG_0945_Original.jpeg", "IMG_0939_Original.jpeg", "IMG_0943_Original.jpeg"].map((f) => ph + f);

export type TrackKey = "ai" | "web" | "cloud" | "mobile";
export const trackMeta: Record<TrackKey, { label: string; color: string }> = {
  ai: { label: "AI & ML", color: "bg-g-blue" },
  web: { label: "Web & DX", color: "bg-g-yellow" },
  cloud: { label: "Cloud & Backend", color: "bg-g-red" },
  mobile: { label: "Mobile", color: "bg-g-green" },
};
export type TimetableTalk = { title: string; who: string; track: TrackKey; time?: string };
export type TimetableRow = { time: string; both?: string; kind?: "main" | "break"; a?: TimetableTalk; b?: TimetableTalk | TimetableTalk[] };

export const timetable: TimetableRow[] = [
  { time: "08:00–08:45", both: "Registration, welcome coffee & breakfast", kind: "break" },
  { time: "08:45–09:00", both: "DevFest Linz 2026 opening", kind: "main" },
  { time: "09:00–09:10", both: "Intro — Bernd Greifeneder, CTO of Dynatrace", kind: "main" },
  { time: "09:10–09:20", both: "Move to rooms", kind: "break" },
  { time: "09:20–10:00",
    a: { title: "The Agentic Web", who: "Kasper Kulikowski", track: "ai" },
    b: { title: "Beyond the Chatbox: On-Device AI for Real User Interfaces", who: "Marcel Bagemihl", track: "web" } },
  { time: "10:10–10:50",
    a: { title: "The (Abundant) State of the Web", who: "Jad Joubran", track: "web" },
    b: [
      { time: "10:10–10:30", title: "Three Responsible AI Checks for University Applications", who: "Kristine Kajaia", track: "ai" },
      { time: "10:30–10:50", title: "No more blind spots: Evaluating AI using Observability", who: "Indermohan Singh", track: "ai" },
    ] },
  { time: "10:50–11:20", both: "Coffee break", kind: "break" },
  { time: "11:20–12:00",
    a: { title: "Auto-Patching Vulnerabilities with CodeMender AI", who: "Marton Kodok", track: "cloud" },
    b: { title: "Game Over for Hallucinations: 5 Levels to Test Your Gemini App Before Your Users Do", who: "Manuel Alejandro Ledezma Falcon", track: "ai" } },
  { time: "12:10–12:50",
    a: { title: "Don't Replay It, Re-decide It: Recovering Deferred Work in Kafka and Java", who: "Ahmed ElGamal", track: "cloud" },
    b: { title: "Full Stack with Flutter — are we there yet?", who: "Nemanja Stošić", track: "mobile" } },
  { time: "12:50–14:00", both: "Lunch", kind: "break" },
  { time: "14:00–14:40",
    a: { title: "Debugging with AI + Observability", who: "Thomas Klambauer", track: "cloud" },
    b: { title: "The Cost of 12 Bytes in JavaScript", who: "Sergey Zelenov", track: "web" } },
  { time: "14:40–15:10", both: "Coffee break", kind: "break" },
  { time: "15:10–15:50",
    a: { title: "The Planet Earth. The Ethical Use of AI.", who: "Marie Dedíková", track: "ai" },
    b: [
      { time: "15:10–15:30", title: "The Physics of Voice: Building a Coach in Flutter with Whisper and Acoustic Analysis", who: "Andrii Khrystian", track: "mobile" },
      { time: "15:30–15:50", title: "Android first, iOS by Claude", who: "Rene Ferrari", track: "mobile" },
    ] },
  { time: "16:00–16:40",
    a: { title: "Building Human-Machine Teams Today", who: "Ilya Kaznacheev", track: "ai" },
    b: { title: "Ape, AI, and App Success: Why Simple Ideas Win in a Brave New Mobile World", who: "Viktor Arsovski", track: "mobile" } },
  { time: "16:50–17:10", both: "Closing remarks", kind: "main" },
  { time: "17:10–20:00", both: "Networking & after-party", kind: "main" },
];

export const tracks = [
  { name: "AI & Machine Learning", color: "bg-g-blue", talks: [
    ["The Agentic Web", "Kasper Kulikowski, DevRel @ Google Chrome"],
    ["Game Over for Hallucinations: 5 Levels to Test Your Gemini App Before Your Users Do", "Manuel Alejandro Ledezma Falcon"],
    ["The Planet Earth. The Ethical Use of AI.", "Marie Dedíková"],
    ["Building Human-Machine Teams Today", "Ilya Kaznacheev"],
    ["Three Responsible AI Checks for University Applications ⚡", "Kristine Kajaia"],
    ["No more blind spots: Evaluating AI using Observability ⚡", "Indermohan Singh"],
  ]},
  { name: "Mobile", color: "bg-g-green", talks: [
    ["Full Stack with Flutter – are we there yet?", "Nemanja Stošić"],
    ["Ape, AI, and App Success: Why Simple Ideas Win in a Brave New Mobile World", "Viktor Arsovski"],
    ["The Physics of Voice: Building a Coach in Flutter with Whisper and Acoustic Analysis ⚡", "Andrii Khrystian"],
    ["Android first, iOS by Claude ⚡", "Rene Ferrari"],
  ]},
  { name: "Cloud & Backend", color: "bg-g-red", talks: [
    ["Don't Replay It, Re-decide It: Recovering Deferred Work in Kafka and Java", "Ahmed ElGamal"],
    ["Debugging with AI + Observability", "Thomas Klambauer, Principal Software Engineer @ Dynatrace"],
    ["Auto-Patching Vulnerabilities with CodeMender AI", "Marton Kodok"],
  ]},
  { name: "Web & Developer Experience", color: "bg-g-yellow", talks: [
    ["Beyond the Chatbox: On-Device AI for Real User Interfaces", "Marcel Bagemihl"],
    ["The (Abundant) State of the Web", "Jad Joubran"],
    ["The Cost of 12 Bytes in JavaScript", "Sergey Zelenov"],
  ]},
] as const;

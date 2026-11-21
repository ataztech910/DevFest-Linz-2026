import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site-chrome";

export const Route = createFileRoute("/house-rules")({
  head: () => ({
    meta: [
      { title: "House Rules — DevFest Linz 2026" },
      { name: "description", content: "Code of conduct and venue rules for DevFest Linz 2026 at Dynatrace Engineering Headquarters." },
      { property: "og:title", content: "House Rules — DevFest Linz 2026" },
      { property: "og:description", content: "Be kind, be safe, have fun — rules for attendees of DevFest Linz 2026." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: HouseRules,
});

const rules = [
  ["Be respectful", "We follow the Google Developer Groups Code of Conduct. Harassment or discrimination of any kind is not tolerated."],
  ["Wear your badge", "Keep your name badge visible during the whole event — it's your ticket to the venue."],
  ["Stay in public areas", "Only visit rooms and floors marked for DevFest. Office areas of Dynatrace are off-limits."],
  ["Photos & video", "The event is photographed and recorded. Tell the registration desk if you prefer not to appear."],
  ["Keep it quiet in talks", "Silence your phone and move conversations to the hallway or networking area."],
  ["Food & drinks", "Enjoy meals in the catering area. Please use the bins and keep the venue clean."],
  ["Safety first", "Follow staff instructions and note the emergency exits. In an emergency, call 112."],
  ["Need help?", "Look for organizers and volunteers in DevFest shirts, or visit the registration desk."],
];

function HouseRules() {
  return (
    <>
      <PageHero eyebrow="DevFest Linz 2026" title="House Rules">
        Help us keep DevFest friendly, safe and inspiring for everyone.
      </PageHero>
      <div className="mx-auto grid max-w-6xl gap-5 px-5 pt-16 md:grid-cols-2">
        {rules.map(([t, d], i) => (
          <div key={t} className="surface flex gap-5 p-6">
            <span className="font-mono text-2xl text-primary">{String(i + 1).padStart(2, "0")}</span>
            <div><h2 className="text-lg font-semibold">{t}</h2><p className="mt-1 text-muted-foreground">{d}</p></div>
          </div>
        ))}
      </div>
      <p className="mx-auto mt-10 max-w-6xl px-5 text-sm text-muted-foreground">
        Read the full <a className="text-primary underline-offset-4 hover:underline" href="https://developers.google.com/community/gdg/code-of-conduct" target="_blank" rel="noreferrer">GDG Code of Conduct</a>.
      </p>
    </>
  );
}

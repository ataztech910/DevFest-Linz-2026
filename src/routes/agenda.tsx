import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site-chrome";
import { timetable, trackMeta, tracks, type TimetableTalk } from "@/lib/site-data";

export const Route = createFileRoute("/agenda")({
  head: () => ({
    meta: [
      { title: "Agenda — DevFest Linz 2026" },
      { name: "description", content: "Full timetable of DevFest Linz 2026: two rooms, 16 talks across AI, Mobile, Cloud and Web on 26 November at Dynatrace HQ." },
      { property: "og:title", content: "Agenda — DevFest Linz 2026" },
      { property: "og:description", content: "Full-day timetable: two parallel rooms and 16 talks across AI, Mobile, Cloud and Web." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Agenda,
});

function TalkCard({ talk }: { talk: TimetableTalk }) {
  const meta = trackMeta[talk.track];
  return (
    <div className="surface p-4">
      {talk.time && <p className="font-mono text-xs text-muted-foreground">{talk.time}</p>}
      <p className="mt-1 font-medium leading-snug">{talk.title}</p>
      <p className="mt-1 text-sm text-muted-foreground">{talk.who}</p>
      <span className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">
        <span className={"size-2 rounded-full " + meta.color} />
        {meta.label}
      </span>
    </div>
  );
}

function Agenda() {
  return (
    <>
      <PageHero eyebrow="DevFest Linz 2026 · 26 Nov" title="Agenda">
        Two parallel rooms, four tracks, sixteen talks — from breakfast to after-party.
      </PageHero>
      <div className="mx-auto max-w-6xl space-y-16 px-5 pt-16">
        <section>
          <h2 className="text-2xl font-semibold">Timetable</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Dynatrace Engineering HQ, Linz · 10-minute changeovers between talks · room names are placeholders
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-border">
            <div className="hidden grid-cols-[7rem_1fr_1fr] md:grid">
              <div className="bg-muted/60 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Time</div>
              <div className="bg-muted/60 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Room A</div>
              <div className="bg-muted/60 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Room B</div>
            </div>
            {timetable.map((row) =>
              row.both ? (
                <div
                  key={row.time}
                  className={
                    "flex flex-wrap items-baseline gap-x-4 gap-y-1 border-t border-border px-4 py-3 " +
                    (row.kind === "break" ? "bg-muted/40" : "")
                  }
                >
                  <p className="w-24 shrink-0 font-mono text-xs text-muted-foreground">{row.time}</p>
                  <p className={row.kind === "main" ? "font-semibold" : "font-medium"}>{row.both}</p>
                </div>
              ) : (
                <div key={row.time} className="grid gap-3 border-t border-border p-4 md:grid-cols-[7rem_1fr_1fr] md:gap-4">
                  <p className="font-mono text-xs text-muted-foreground md:pt-4">{row.time}</p>
                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground md:hidden">Room A</p>
                    {row.a && <TalkCard talk={row.a} />}
                  </div>
                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground md:hidden">Room B</p>
                    {row.b &&
                      (Array.isArray(row.b)
                        ? row.b.map((t) => <TalkCard key={t.title} talk={t} />)
                        : <TalkCard talk={row.b} />)}
                  </div>
                </div>
              ),
            )}
          </div>
        </section>
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Talks by track</h2>
          {tracks.map((t) => (
            <div key={t.name} className="surface p-6">
              <div className="flex items-center gap-3">
                <span className={"size-3 rounded-full " + t.color} />
                <h3 className="text-lg font-semibold">{t.name}</h3>
              </div>
              <ul className="mt-4 divide-y divide-border">
                {t.talks.map(([title, who]) => (
                  <li key={title} className="py-3">
                    <p className="font-medium">{title}</p>
                    <p className="text-sm text-muted-foreground">{who}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p className="text-sm text-muted-foreground">⚡ = lightning talk (20 min)</p>
        </section>
      </div>
    </>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GoogleBar } from "@/components/site-chrome";
import { COMMUNITY_URL, EVENT_URL, organizers, partners, pastEvents, photos } from "@/lib/site-data";

const BANNER = "https://res.cloudinary.com/startup-grind/image/upload/c_scale,w_2560/c_crop,h_640,w_2560/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/event_banners/blob_BpIVDYp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GDG Linz — Google Developer Group Linz" },
      { name: "description", content: "A community of 460+ developers in Linz exploring Google technologies. Join DevFest Linz 2026 on November 26." },
      { property: "og:title", content: "GDG Linz — Google Developer Group Linz" },
      { property: "og:description", content: "A community of developers in Linz. DevFest Linz 2026 · Nov 26 · Dynatrace HQ." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: BANNER },
      { name: "twitter:image", content: BANNER },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="dot-grid relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-[1.2fr_1fr] md:py-28">
          <div>
            <p className="eyebrow">Google Developer Group · Linz, Austria</p>
            <h1 className="mt-4 text-5xl font-semibold leading-[1.05] md:text-7xl">
              Build, learn &amp; connect <span className="text-primary">in Linz.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              A welcoming community of tech enthusiasts, innovators and developers passionate about Android, Flutter, Google Cloud, Firebase, AI and the web.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full"><a href={COMMUNITY_URL} target="_blank" rel="noreferrer">Join us <ArrowRight /></a></Button>
              <Button asChild size="lg" variant="outline" className="rounded-full"><Link to="/agenda">DevFest agenda</Link></Button>
            </div>
            <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground"><Users className="size-4" /> 460+ group members</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {photos.map((p, i) => (
              <img key={p} src={p} alt="GDG Linz community event" loading="lazy"
                className={"aspect-[4/3] w-full rounded-2xl object-cover shadow-soft " + (i % 2 ? "translate-y-6" : "")} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-20">
        <p className="eyebrow">Upcoming event</p>
        <div className="surface mt-4 overflow-hidden">
          <img src={BANNER} alt="DevFest Linz 2026" className="h-40 w-full object-cover md:h-56" />
          <GoogleBar />
          <div className="grid gap-8 p-6 md:grid-cols-[1.4fr_1fr] md:p-10">
            <div>
              <h2 className="text-3xl font-semibold md:text-4xl">DevFest Linz 2026</h2>
              <p className="mt-2 font-mono text-sm text-primary">Build, Secure, Scale: Developers and Builders in the Agentic Era</p>
              <p className="mt-4 text-muted-foreground">
                A full day of technology, learning and community. Two parallel tracks, 16 talks from speakers across Europe and beyond — AI, Mobile, Cloud and Web — plus the Vibe Lounge to build with Gemini.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="rounded-full"><a href={EVENT_URL} target="_blank" rel="noreferrer">Free registration <ArrowRight /></a></Button>
                <Button asChild variant="secondary" className="rounded-full"><Link to="/agenda">Agenda</Link></Button>
                <Button asChild variant="secondary" className="rounded-full"><Link to="/house-rules">House rules</Link></Button>
                <Button asChild variant="secondary" className="rounded-full"><Link to="/hackathon">Hackathon</Link></Button>
              </div>
            </div>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3"><CalendarDays className="size-5 text-g-red" /><span><b className="block text-foreground">Thursday, 26 November 2026</b><span className="text-muted-foreground">08:00 – 20:00 CET</span></span></li>
              <li className="flex gap-3"><MapPin className="size-5 text-g-green" /><span><b className="block text-foreground">Dynatrace Engineering HQ</b><span className="text-muted-foreground">Am Fünfundzwanziger Turm 20, 4020 Linz</span></span></li>
              <li className="flex gap-3"><Users className="size-5 text-g-blue" /><span><b className="block text-foreground">473+ RSVPs</b><span className="text-muted-foreground">With Young AI Leaders Linz</span></span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-24">
        <div className="grid gap-10 md:grid-cols-[1fr_1.5fr]">
          <div><p className="eyebrow">About</p><h2 className="mt-3 text-3xl font-semibold md:text-4xl">Collaboration &amp; knowledge sharing.</h2></div>
          <div className="space-y-4 text-muted-foreground">
            <p>We organize meetups, workshops and discussions across a wide range of Google products, tools and platforms. From hands-on coding sessions to insightful talks from industry experts, we inspire members to create innovative solutions.</p>
            <p>Whether you're a seasoned developer or just getting started, you'll find valuable resources, exciting opportunities and a friendly atmosphere that encourages growth.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-24">
        <p className="eyebrow">Past events</p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pastEvents.map((e) => (
            <a key={e.url} href={e.url} target="_blank" rel="noreferrer" className="surface group overflow-hidden transition-transform hover:-translate-y-1">
              <img src={e.img} alt={e.title} loading="lazy" className="aspect-square w-full object-cover" />
              <div className="p-4"><p className="font-mono text-xs text-muted-foreground">{e.date}</p><p className="mt-1 font-medium group-hover:text-primary">{e.title}</p></div>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-24">
        <p className="eyebrow">Organizers</p>
        <div className="mt-6 grid grid-cols-2 gap-5 md:grid-cols-4">
          {organizers.map((o) => (
            <a key={o.name} href={o.url} target="_blank" rel="noreferrer" className="surface p-5 text-center transition-transform hover:-translate-y-1">
              <img src={o.img} alt={o.name} loading="lazy" className="mx-auto size-24 rounded-full object-cover" />
              <p className="mt-4 font-medium">{o.name}</p><p className="text-sm text-muted-foreground">{o.role}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-24">
        <p className="eyebrow">Sponsors &amp; partners</p>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
          {partners.map((p) => (
            <a key={p.name} href={p.url} target="_blank" rel="noreferrer" title={p.name} className="surface flex h-24 items-center justify-center p-4">
              <img src={p.img} alt={p.name} loading="lazy" className="max-h-14 w-auto object-contain" />
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

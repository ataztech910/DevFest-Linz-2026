import { Link } from "@tanstack/react-router";
import { LOGO, COMMUNITY_URL } from "@/lib/site-data";

const nav = [
  // { to: "/", label: "Community" },
  { to: "/", label: "Agenda" },
  { to: "/house-rules", label: "House Rules" },
  { to: "/hackathon", label: "Vibe Lounge" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src={LOGO} alt="GDG Linz" className="h-8 w-auto" />
        </Link>
        <nav className="flex items-center gap-1 overflow-x-auto text-sm">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: true }}
              className="whitespace-nowrap rounded-full px-3 py-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "bg-accent !text-accent-foreground font-medium" }}>
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function GoogleBar() {
  return (
    <div className="flex h-1 w-full">
      <span className="flex-1 bg-g-blue" /><span className="flex-1 bg-g-red" />
      <span className="flex-1 bg-g-yellow" /><span className="flex-1 bg-g-green" />
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border">
      <GoogleBar />
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 py-10 text-sm text-muted-foreground md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <img src={LOGO} alt="GDG Linz" className="h-7 w-auto" />
          <span>Google Developer Group Linz · Austria</span>
        </div>
        <a href={COMMUNITY_URL} target="_blank" rel="noreferrer" className="hover:text-foreground">gdg.community.dev/gdg-linz →</a>
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <section className="dot-grid border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold md:text-6xl">{title}</h1>
        {children && <div className="mt-5 max-w-2xl text-lg text-muted-foreground">{children}</div>}
      </div>
    </section>
  );
}

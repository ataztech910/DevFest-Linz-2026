import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, KeyRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GoogleBar } from "@/components/site-chrome";
import { TOKENS_URL } from "@/lib/site-data";

export const Route = createFileRoute("/hackathon")({
  head: () => ({
    meta: [
      { title: "Hackathon — DevFest Linz 2026" },
      { name: "description", content: "Join the DevFest Linz 2026 hackathon: claim your tokens and start building with Gemini." },
      { property: "og:title", content: "Hackathon — DevFest Linz 2026" },
      { property: "og:description", content: "Claim your tokens and start building with Gemini." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Hackathon,
});

function Hackathon() {
  return (
    <section className="dot-grid">
      <div className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-5 py-20 text-center">
        <p className="eyebrow">DevFest Linz 2026 · Vibe Lounge</p>
        <h1 className="mt-4 text-5xl font-semibold md:text-6xl">Join the hackathon</h1>
        <p className="mt-5 text-lg text-muted-foreground">Get your tokens and start building with Gemini. No prior coding experience needed — bring your laptop.</p>
        <div className="surface mt-10 w-full overflow-hidden">
          <GoogleBar />
          <div className="flex flex-col items-center gap-5 p-8">
            <span className="flex size-14 items-center justify-center rounded-full bg-accent text-accent-foreground"><KeyRound /></span>
            <Button asChild size="lg" className="rounded-full px-8">
              <a href={TOKENS_URL} target="_blank" rel="noreferrer">Get your tokens <ArrowUpRight /></a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

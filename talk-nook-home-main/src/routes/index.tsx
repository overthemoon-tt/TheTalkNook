import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Talk Nook — A space to be heard" },
      { name: "description", content: "Peer emotional support in Bangladesh. Not therapy. No judgment." },
      { property: "og:title", content: "The Talk Nook — A space to be heard" },
      { property: "og:description", content: "Peer emotional support in Bangladesh." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteShell>
      <Hero />
    </SiteShell>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-primary/15 blur-3xl animate-float-slow" />
        <div className="absolute top-32 -right-10 h-80 w-80 rounded-full bg-accent/15 blur-3xl animate-float-slower" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-secondary/60 blur-3xl animate-float-slow" />
      </div>
      <div className="mx-auto max-w-4xl px-5 pt-20 pb-24 text-center">
        <span className="inline-block text-xs uppercase tracking-[0.18em] text-muted-foreground bg-secondary/60 px-3 py-1 rounded-full">
          Peer support · Bangladesh
        </span>
        <h1 className="mt-6 font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.1] text-foreground animate-fade-up">
          You don't need to have it all figured out.
          <br />
          <span className="text-primary italic">You can say what burdens you.</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
        A safe, judgment-free space where a trained peer listener meets you exactly where you are.
        </p>
        <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/book" search={{ s: "text_peer" } as never} className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm font-medium hover:opacity-90 transition">
            <MessageCircle className="h-4 w-4" /> Talk to a Listener
          </Link>
        </div>
        <p className="mt-6 text-xs text-muted-foreground">Not therapy. Not medical advice. Just real, human conversation.</p>
      </div>
    </section>
  );
}
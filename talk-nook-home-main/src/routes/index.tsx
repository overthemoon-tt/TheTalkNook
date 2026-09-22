import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Heart, Stethoscope, MessageCircle, UserCheck, ArrowRight, Calendar, Search, Users } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { supabase } from "@/integrations/supabase/client";

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
      <HowItWorks />
      <Services />
      <Impact />
      <Testimonials />
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

function StepCard({ n, icon: Icon, title, desc }: { n: number; icon: any; title: string; desc: string }) {
  return (
    <div className="relative rounded-2xl border border-border bg-card p-6">
      <div className="flex items-center gap-3">
        <span className="text-3xl font-serif text-primary/70">{String(n).padStart(2, "0")}</span>
        <span className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
          <Icon className="h-4 w-4 text-primary" />
        </span>
      </div>
      <h4 className="mt-4 font-serif text-lg">{title}</h4>
      <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}

function HowItWorks() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl sm:text-4xl">How it works</h2>
        <p className="mt-3 text-muted-foreground">Simple, gentle, and yours to pace.</p>
      </div>
      <div className="grid gap-10 md:grid-cols-1">
        <div>
          <p className="text-xs uppercase tracking-wider text-accent mb-4 font-medium">Peer Listening</p>
          <div className="grid gap-3">
            <StepCard n={1} icon={Calendar} title="Book" desc="Pick a time and a session that fits — text or voice." />
            <StepCard n={2} icon={UserCheck} title="Match" desc="We match you with a trained peer listener." />
            <StepCard n={3} icon={MessageCircle} title="Talk" desc="Show up as you are. Be heard. Leave lighter." />
          </div>
        </div>
      </div>
    </section>
  );
}
function Services() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-12">
      <div className="grid gap-6 md:grid-cols-2">
        <ServiceCard
          icon={<Heart className="h-5 w-5" />}
          title="Peer Listening"
          desc="Trained peer listeners who hold space without judgment. Text or voice. 25–30 minutes."
          to="/peer-support"
        />
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, desc, to }: { icon: React.ReactNode; title: string; desc: string; to: string }) {
  return (
    <div className="group rounded-3xl border border-border bg-card p-8 hover:border-primary/40 transition">
      <div className="flex items-center gap-3">
        <span className="h-11 w-11 rounded-full bg-primary/12 text-primary flex items-center justify-center">{icon}</span>
        <h3 className="font-serif text-2xl">{title}</h3>
      </div>
      <p className="mt-4 text-muted-foreground">{desc}</p>
      <Link to={to} className="mt-6 inline-flex items-center gap-2 text-sm text-primary font-medium">
        Learn more <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
      </Link>
    </div>
  );
}

function useStats() {
  const [stats, setStats] = useState({ sessions_held: 0, people_heard: 0, listeners_active: 0 });
  useEffect(() => {
    supabase.from("stats").select("*").eq("id", 1).maybeSingle().then(({ data }) => {
      if (data) setStats({
        sessions_held: data.sessions_held ?? 0,
        people_heard: data.people_heard ?? 0,
        listeners_active: data.listeners_active ?? 0,
      });
    });
  }, []);
  return stats;
}

function Counter({ value, label }: { value: number; label: string }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const dur = 1200;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.floor(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value]);
  return (
    <div className="text-center">
      <div className="font-serif text-5xl text-primary">{n}</div>
      <div className="mt-2 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

function Impact() {
  return (
    <section className="bg-secondary/40 py-20 mt-12">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl">Our quiet impact</h2>
          <p className="mt-3 text-muted-foreground">Every number here is a person who chose to speak.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-3xl mx-auto">
          <Counter value={19} label="Sessions held" />
          <Counter value={11} label="People heard" />
          <Counter value={5} label="Listeners active" />
        </div>
      </div>
    </section>
  );
}

const quotes = [
  { q: "I didn't realize how much I needed someone to just listen. No advice. Just listening.", a: "— University student, Dhaka" },
  { q: "I was scared to call. I'm so glad I did. They didn't make me feel small.", a: "— Anonymous" },
];

function Testimonials() {
  const [reviews, setReviews] = useState<{ rating: number; comment: string | null; created_at: string }[]>([]);

  useEffect(() => {
    supabase
      .from("session_feedback")
      .select("rating, comment, created_at")
      .not("comment", "is", null)
      .gte("rating", 4)
      .order("created_at", { ascending: false })
      .limit(6)
      .then(({ data }) => {
        if (data && data.length > 0) setReviews(data);
      });
  }, []);

  // Fall back to hardcoded quotes if no real reviews yet
  const hardcoded = [
    { q: "I didn't realize how much I needed someone to just listen. No advice. Just listening.", a: "— University student, Dhaka" },
    { q: "I was scared to call. I'm so glad I did. They didn't make me feel small.", a: "— Anonymous" },
  ];

  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl sm:text-4xl">In their own words</h2>
        {reviews.length > 0 && (
          <p className="mt-3 text-muted-foreground">Real feedback from real sessions.</p>
        )}
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {reviews.length > 0
          ? reviews.map((r, i) => (
              <div key={i} className="rounded-2xl border border-border bg-card p-7">
                {/* Star rating */}
                <div className="flex gap-0.5 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className={`text-lg ${r.rating >= star ? "text-yellow-400" : "text-muted-foreground/20"}`}>★</span>
                  ))}
                </div>
                <p className="font-serif text-lg leading-snug">"{r.comment}"</p>
                <p className="mt-4 text-sm text-muted-foreground">— Anonymous</p>
              </div>
            ))
          : hardcoded.map((t, i) => (
              <div key={i} className="rounded-2xl border border-border bg-card p-7">
                <Users className="h-5 w-5 text-accent mb-3" />
                <p className="font-serif text-lg leading-snug">"{t.q}"</p>
                <p className="mt-4 text-sm text-muted-foreground">{t.a}</p>
              </div>
            ))}
      </div>
    </section>
  );
}
import { createFileRoute } from "@tanstack/react-router";
import { Heart, Lock, Sparkles, HandHeart } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Talk Nook" },
      { name: "description", content: "Our mission to make emotional support accessible to everyone in Bangladesh — no appointments, no stigma." },
      { property: "og:title", content: "About Talk Nook" },
      { property: "og:description", content: "Making emotional support accessible to everyone in Bangladesh." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-3xl px-5 pt-20 pb-16">
        <p className="text-xs uppercase tracking-widest text-accent">About us</p>
        <h1 className="mt-4 font-serif text-4xl sm:text-5xl leading-tight">
          Being truly heard is a basic human need — not a luxury.
        </h1>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-12">
        <h2 className="font-serif text-2xl mb-4">Our Mission</h2>
        <p className="text-muted-foreground leading-relaxed">
          At Talk Nook, our mission is to make emotional support accessible to everyone in Bangladesh — no appointments, no stigma, no judgment. We believe that being truly heard is a basic human need, not a luxury. Through trained peer listeners and guided health navigation, we create a safe space where anyone — regardless of age, background, or circumstance — can show up exactly as they are, and leave feeling a little less alone.
        </p>
        <h2 className="font-serif text-2xl mt-10 mb-4">Our Vision</h2>
        <p className="text-muted-foreground leading-relaxed">
          We envision a Bangladesh where no one suffers in silence. A future where asking for support is as normal as asking for directions — where mental wellness is part of everyday conversation, not a whispered secret. Talk Nook aims to build the largest community-driven emotional support network in the country, one honest conversation at a time.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-24">
        <h2 className="font-serif text-2xl text-center mb-10">Our Values</h2>
        <div className="grid gap-5 grid-cols-2 md:grid-cols-4">
          {[
            { icon: Heart, label: "Empathy" },
            { icon: Lock, label: "Confidentiality" },
            { icon: HandHeart, label: "Accessibility" },
            { icon: Sparkles, label: "Non-Judgment" },
          ].map((v) => (
            <div key={v.label} className="rounded-2xl border border-border bg-card p-6 text-center">
              <span className="h-11 w-11 rounded-full bg-primary/12 text-primary mx-auto flex items-center justify-center">
                <v.icon className="h-5 w-5" />
              </span>
              <p className="mt-4 font-serif text-lg">{v.label}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}

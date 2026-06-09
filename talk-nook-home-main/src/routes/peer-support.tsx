import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle, Phone, Info } from "lucide-react";

export const Route = createFileRoute("/peer-support")({
  head: () => ({
    meta: [
      { title: "Peer Support — Talk Nook" },
      { name: "description", content: "Talk to a trained peer listener. Text or voice. Not therapy — just being heard." },
      { property: "og:title", content: "Peer Support — Talk Nook" },
      { property: "og:description", content: "Trained peer listeners. Text or voice sessions." },
    ],
  }),
  component: PeerPage,
});

function PeerPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-3xl px-5 pt-16 pb-10">
        <p className="text-xs uppercase tracking-widest text-accent">Peer Listening</p>
        <h1 className="mt-3 font-serif text-4xl sm:text-5xl leading-tight">A trained ear. No advice unless you ask.</h1>
        <p className="mt-5 text-muted-foreground text-lg">
          Sometimes you don't need a solution — you need to feel less alone. That's what peer listening is for.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-5">
        <div className="rounded-2xl border border-accent/40 bg-accent/8 p-6 flex gap-4">
          <Info className="h-5 w-5 text-accent mt-0.5 flex-none" />
          <div>
            <h3 className="font-serif text-xl">This is not therapy or counselling.</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Our peer listeners are trained to hold space, listen actively, and respond with empathy. They are not licensed mental health professionals. If you need clinical care, we'll gently help you find it.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16">
        <h2 className="font-serif text-3xl text-center mb-10">How it works</h2>
        <div className="grid gap-4 md:grid-cols-4">
          {[
            ["01", "Book", "Choose a session type and time."],
            ["02", "Pay via bKash", "Quick, manual confirmation."],
            ["03", "Get matched", "We pair you with a trained listener."],
            ["04", "Be heard", "Show up. We hold space."],
          ].map(([n, t, d]) => (
            <div key={n} className="rounded-2xl border border-border bg-card p-5">
              <div className="font-serif text-2xl text-primary/70">{n}</div>
              <div className="mt-2 font-serif text-lg">{t}</div>
              <div className="mt-1 text-sm text-muted-foreground">{d}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5">
        <h2 className="font-serif text-3xl text-center mb-8">Session Types</h2>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="rounded-3xl border border-border bg-card p-7">
            <MessageCircle className="h-6 w-6 text-primary" />
            <h3 className="mt-3 font-serif text-2xl">Text Session</h3>
            <p className="mt-2 text-sm text-muted-foreground">Real-time chat. 25 minutes. Type at your own pace.</p>
            <div className="mt-5 flex items-baseline gap-2">
              <span className="font-serif text-3xl text-primary">BDT 99</span>
              <span className="text-sm text-muted-foreground">/ session</span>
            </div>
            <Link to="/book" search={{ s: "text_peer" } as never} className="mt-6 inline-block rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90">
              Book text session
            </Link>
          </div>
          <div className="rounded-3xl border border-border bg-card p-7">
            <Phone className="h-6 w-6 text-primary" />
            <h3 className="mt-3 font-serif text-2xl">Voice Session</h3>
            <p className="mt-2 text-sm text-muted-foreground">Via Google Meet link. 30 minutes. Hear and be heard.</p>
            <div className="mt-5 flex items-baseline gap-2">
              <span className="font-serif text-3xl text-primary">BDT 149</span>
              <span className="text-sm text-muted-foreground">/ session</span>
            </div>
            <Link to="/book" search={{ s: "voice_peer" } as never} className="mt-6 inline-block rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90">
              Book voice session
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20">
        <h2 className="font-serif text-3xl text-center mb-8">Common questions</h2>
        <Accordion type="single" collapsible className="space-y-2">
          {[
            ["Is this confidential?", "Yes. Sessions are private between you and your listener. We never share your conversation."],
            ["Can I be anonymous?", "Yes. You can choose to share only a first name or stay completely anonymous."],
            ["What if I need a therapist?", "If your listener feels you'd benefit from clinical care, they'll gently let you know and help you find resources."],
            ["What if I miss my session?", "Reach out to us and we'll do our best to reschedule."],
          ].map(([q, a]) => (
            <AccordionItem key={q} value={q} className="rounded-2xl border border-border bg-card px-5">
              <AccordionTrigger className="text-left font-serif text-base">{q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-10 text-center">
          <Link to="/book" className="inline-block rounded-full bg-primary text-primary-foreground px-7 py-3 text-sm font-medium hover:opacity-90">
            Book a session
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}

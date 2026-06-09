import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AlertTriangle, Search, UserCheck, Stethoscope, HelpCircle } from "lucide-react";

export const Route = createFileRoute("/health-navigation")({
  head: () => ({
    meta: [
      { title: "Health Navigation — Talk Nook" },
      { name: "description", content: "Trained medical students help you figure out which specialist to see. Not medical advice." },
      { property: "og:title", content: "Health Navigation — Talk Nook" },
      { property: "og:description", content: "Guidance from medical student volunteers. Not a diagnosis." },
    ],
  }),
  component: HealthPage,
});

function HealthPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-3xl px-5 pt-16 pb-10">
        <p className="text-xs uppercase tracking-widest text-accent">Health Navigation</p>
        <h1 className="mt-3 font-serif text-4xl sm:text-5xl leading-tight">Confused about where to start? We'll help you figure it out.</h1>
        <p className="mt-5 text-muted-foreground text-lg">
          Talk to a trained medical student. They'll help you understand your symptoms and which kind of doctor to consult — without ever diagnosing you.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-5">
        <div className="rounded-2xl border-2 border-destructive/50 bg-destructive/5 p-6 flex gap-4">
          <AlertTriangle className="h-5 w-5 text-destructive mt-0.5 flex-none" />
          <div>
            <h3 className="font-serif text-xl text-destructive">Important disclaimer</h3>
            <p className="mt-2 text-sm text-foreground">
              This service does not constitute medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional. If you are experiencing a medical emergency, please go to the nearest hospital immediately.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16">
        <h2 className="font-serif text-3xl text-center mb-10">How it works</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            [Search, "Ask", "Tell us what's going on — symptoms, worries, confusion."],
            [UserCheck, "Connect", "Chat with a trained medical student volunteer."],
            [Stethoscope, "Navigate", "Get pointed toward the right specialist — never a diagnosis."],
          ].map(([Icon, t, d], i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-6">
              <Icon className="h-5 w-5 text-primary" />
              <div className="mt-3 font-serif text-lg">{t as string}</div>
              <p className="mt-1 text-sm text-muted-foreground">{d as string}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-serif text-xl">Which specialist should I see?</h3>
            <p className="mt-2 text-sm text-muted-foreground">We help you map symptoms to the right type of doctor — GP, dermatologist, gastroenterologist, and more.</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-serif text-xl">Should I go to the hospital right now?</h3>
            <p className="mt-2 text-sm text-muted-foreground">We help you understand urgency — but if in doubt, always go to the hospital.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16">
        <h2 className="font-serif text-2xl">Our medical student volunteers</h2>
        <p className="mt-3 text-muted-foreground">
          Our navigators are medical students from leading institutions in Bangladesh, trained in active listening, basic clinical reasoning, and the ethical limits of their role. They will never diagnose, prescribe, or replace your doctor.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-20">
        <h2 className="font-serif text-3xl text-center mb-8">Common questions</h2>
        <Accordion type="single" collapsible className="space-y-2">
          {[
            ["Can I get a diagnosis here?", "No. Our navigators do not diagnose, prescribe, or replace a doctor."],
            ["Is this confidential?", "Yes. Conversations stay between you and the navigator."],
            ["What if it's urgent?", "If you think this is an emergency, go to the nearest hospital immediately."],
          ].map(([q, a]) => (
            <AccordionItem key={q} value={q} className="rounded-2xl border border-border bg-card px-5">
              <AccordionTrigger className="text-left font-serif text-base flex items-center gap-2">
                <HelpCircle className="h-4 w-4 text-primary" /> {q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-10 text-center">
          <Link to="/book" search={{ s: "text_health" } as never} className="inline-block rounded-full bg-primary text-primary-foreground px-7 py-3 text-sm font-medium hover:opacity-90">
            Get health guidance
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}

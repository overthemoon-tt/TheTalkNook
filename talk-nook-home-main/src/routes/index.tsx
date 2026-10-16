import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Talk Nook — নিজের কথা বলার একটি জায়গা" },
      { name: "description", content: "এটি থেরাপি নয়। কোনো judgement or advice নেই।" },
      { property: "og:title", content: "The Talk Nook — নিজের কথা বলার একটি জায়গা" },
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
        <span className="inline-block text-xs text-muted-foreground bg-secondary/60 px-3 py-1 rounded-full">
          বাংলাদেশ
        </span>
        <h1 className="mt-8 font-serif text-foreground animate-fade-up">
          <span className="block text-xl sm:text-2xl md:text-3xl font-semibold leading-snug text-foreground/80">
            মনের কথাগুলো কি ঠিক গুছিয়ে উঠতে পারছেন না?
          </span>
          <span className="mt-5 block text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.35] text-primary">
            এলোমেলো ভাবেই বলুন নাহয়। <p></p>আমরা শুনবো, সবটুকু
          </span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
          একটি নিরাপদ, judgement free জায়গা, যেখানে প্রশিক্ষিত একজন লিসেনার আপনার পাশে থাকেন।
        </p>
        <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/book" search={{ s: "text_peer" } as never} className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm font-medium hover:opacity-90 transition">
            <MessageCircle className="h-4 w-4" /> কথা বলুন
          </Link>
        </div>
        <p className="mt-6 text-xs text-muted-foreground">এটি থেরাপি নয়। চিকিৎসা পরামর্শও নয়।</p>
      </div>
    </section>
  );
}
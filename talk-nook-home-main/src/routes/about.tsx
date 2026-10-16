import { createFileRoute } from "@tanstack/react-router";
import { Heart, Lock, Sparkles, HandHeart } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "আমাদের সম্পর্কে — Talk Nook" },
      { name: "description", content: "বাংলাদেশের সবার জন্য মানসিক সহায়তা সহজলভ্য করাই আমাদের উদ্দেশ্য।" },
      { property: "og:title", content: "আমাদের সম্পর্কে — Talk Nook" },
      { property: "og:description", content: "বাংলাদেশের সবার জন্য মানসিক সহায়তা সহজলভ্য করা।" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-3xl px-5 pt-20 pb-16">
        <p className="text-xs text-accent">আমাদের সম্পর্কে জানুন</p>
        <h1 className="mt-4 font-serif text-4xl sm:text-5xl leading-snug">
          কেউ আপনার কথা শুনুক, এটা কোনো বিলাসিতা নয় বরং একটি নিতান্তই মানবিক চাহিদা।
        </h1>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-16">
        <div className="rounded-2xl border border-border bg-secondary/40 p-8">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              আমরা বেশির ভাগ সময়েই মনে করি, একজন strong, independent মানুষ হওয়ার জন্য আমাদের মন খারাপের কথা, খারাপ লাগার কথা চেপে যেতে হবে। আবার অনেক সময়, কাছের মানুষদের সেসব বলতেও পারিনা, কারণ আমরা ভাবি তারা বুঝি আমাদেরকে judge করবে। সত্যি বলতে, এমন ভাবনা কিন্তু খুব একটা অযৌক্তিকও না।
            </p>
            <p>
              আর তাই, এই প্লাটফর্ম, আপনার মনের কথাগুলো খুলে বলুন, আমাদেরকে। নিজের নাম পরিচয় গোপন রেখেই। আর আমাদের "listener" - রাও কিন্তু নিজের পরিচয় আপনাকে জানাবেন না। Happy Sharing!
            </p>
          </div>
          <p className="mt-6 font-serif text-lg text-foreground">
            - K.T. Humaira
            <span className="block text-sm font-sans text-muted-foreground">Founder, The Talk Nook</span>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-12">
        <h2 className="font-serif text-2xl mb-4">আমাদের উদ্দেশ্য</h2>
        <p className="text-muted-foreground leading-relaxed">
          সামাজিক প্রতিবন্ধকতা, কুসংস্কার এবং ভ্রান্ত ধারণার ঊর্ধ্বে গিয়ে আপনাদের মানসিক ভার লাঘবের জন্য একটি নিরাপদ প্ল্যাটফর্ম তৈরি করাই আমাদের উদ্দেশ্য। আমরা মনে করি, কেউ আপনার কথা শুনুক, এটা কোনো বিলাসিতা নয় বরং একটি নিতান্তই মানবিক চাহিদা। প্রশিক্ষণপ্রাপ্ত লিসেনার দ্বারা পরিচালিত এই ওয়েবসাইটের মাধ্যমে আমরা বাংলাদেশের সকল শ্রেনী, পেশা ও বয়সের মানুষের কাছে পৌঁছাতে চাই। একজন মানুষও যদি একটু কম ক্লান্ত, কম একাকী বোধ করেন আমাদের প্রচেষ্টা সার্থক।
        </p>

        <h2 className="font-serif text-2xl mt-10 mb-4">আমাদের লক্ষ্য</h2>
        <p className="text-muted-foreground leading-relaxed">
          আমরা এমন এক বাংলাদেশের স্বপ্ন দেখি যেখানে কেউই নীরবে মনের বোঝা বহন করবে না। যেদিন মানসিক স্বাস্থ্য শারীরিক স্বাস্থ্যের মতোই সমান গুরুত্ব দিয়ে বিবেচনা করা হবে। মানসিক স্বাস্থ্যের প্রসঙ্গ এড়িয়ে না গিয়ে সবাই উৎসাহ নিয়ে আলোচনা করবে। সমাজের সকল স্তরের মানুষকে সাথে নিয়ে একটি পারস্পরিক সহযোগিতার বন্ধন গড়ে তোলাই আমাদের লক্ষ্য।
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-24">
        <h2 className="font-serif text-2xl text-center mb-10">আমাদের মূল্যবোধ</h2>
        <div className="grid gap-5 grid-cols-2 md:grid-cols-4">
          {[
            { icon: Heart, label: "সহমর্মিতা" },
            { icon: Lock, label: "গোপনীয়তা" },
            { icon: HandHeart, label: "সহজলভ্যতা" },
            { icon: Sparkles, label: "নির্ভরযোগ্যতা" },
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
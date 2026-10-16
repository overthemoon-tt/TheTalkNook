import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Mail, Facebook } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "যোগাযোগ — Talk Nook" },
      { name: "description", content: "Talk Nook-এর সাথে যোগাযোগ করুন।" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return toast.error("অনুগ্রহ করে সবগুলো ঘর পূরণ করুন।");
    setLoading(true);
    const { error } = await supabase.from("contact_messages").insert(form);
    setLoading(false);
    if (error) return toast.error(error.message);
    toast.success("ধন্যবাদ। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করবো।");
    setForm({ name: "", email: "", message: "" });
  };
  return (
    <SiteShell>
      <section className="mx-auto max-w-3xl px-5 pt-16 pb-20">
        <p className="text-xs text-accent">যোগাযোগ</p>
        <h1 className="mt-3 font-serif text-4xl sm:text-5xl leading-snug">যোগাযোগ করুন</h1>
        <p className="mt-4 text-muted-foreground">আমরা সাধারণত এক থেকে দুইদিনের মাঝে প্রতিটি মেসেজের জবাব দেই।</p>

        <div className="mt-10 grid gap-8 md:grid-cols-[1fr,300px]">
          <form onSubmit={submit} className="rounded-3xl border border-border bg-card p-7 space-y-4">
            <div>
              <label className="text-sm">আপনার নাম</label>
              <input className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-2.5" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </div>
            <div>
              <label className="text-sm">ইমেইল</label>
              <input type="email" className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-2.5" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
            <div>
              <label className="text-sm">আপনার বার্তা</label>
              <textarea rows={5} className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-2.5" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            </div>
            <button disabled={loading} className="rounded-full bg-primary text-primary-foreground px-6 py-2.5 text-sm font-medium hover:opacity-90 disabled:opacity-50">
              {loading ? "পাঠানো হচ্ছে..." : "সেন্ড মেসেজ"}
            </button>
          </form>
          <div className="space-y-4">
            <a href="mailto:thetalknook@proton.me" className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 hover:border-primary/40 transition">
              <Mail className="h-5 w-5 text-primary" />
              <div>
                <div className="text-xs text-muted-foreground">ইমেইল</div>
                <div className="text-sm">thetalknook@proton.me</div>
              </div>
            </a>
            <a href="https://www.facebook.com/thetalknook" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 hover:border-primary/40 transition">
              <Facebook className="h-5 w-5 text-primary" />
              <div>
                <div className="text-xs text-muted-foreground">ফেসবুক</div>
                <div className="text-sm">@thetalknook</div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
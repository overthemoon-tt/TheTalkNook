import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Check, MessageCircle, Phone, Stethoscope, Copy, ArrowRight } from "lucide-react";

type ServiceKey = "text_peer" | "voice_peer" | "text_health";

const SERVICES: Record<ServiceKey, { label: string; mins: number; price: number; icon: any; desc: string }> = {
  text_peer:   { label: "Text Venting",     mins: 25, price: 29,  icon: MessageCircle, desc: "Real-time chat with a trained peer listener." },
  voice_peer:  { label: "Voice Venting",    mins: 30, price: 99, icon: Phone,         desc: "Google Meet call with a peer listener." },
};

export const Route = createFileRoute("/book")({
  validateSearch: (s: Record<string, unknown>) => ({ s: (s.s as ServiceKey) || undefined }),
  head: () => ({ meta: [{ title: "Book a Session — The Talk Nook" }, { name: "description", content: "Book a peer support or health navigation session." }] }),
  component: BookPage,
});

function BookPage() {
  const { s } = Route.useSearch();
  const [step, setStep] = useState<1 | 2 | 3 | 4>(() => {
    if (typeof window === "undefined") return 1;
    const saved = localStorage.getItem('tn_confirmation');
    return saved ? 4 : 1;
  });
  
  const [service, setService] = useState<ServiceKey | null>(() => {
    if (typeof window === "undefined") return s ?? null;
    const saved = localStorage.getItem('tn_confirmation');
    if (saved) return JSON.parse(saved).service;
    return s ?? null;
  });
  
  const [confirmation, setConfirmation] = useState<{ ref: string; chatId?: string; meetLink?: string; bookingId?: string } | null>(() => {
    if (typeof window === "undefined") return null;
    const saved = localStorage.getItem('tn_confirmation');
    return saved ? JSON.parse(saved).confirmation : null;
  });
  const [userName, setUserName] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [txid, setTxid] = useState("");

  useEffect(() => { if (s) setService(s); }, [s]);

  return (
    <SiteShell>
      <section className="mx-auto max-w-2xl px-5 pt-14 pb-20">
        <p className="text-xs uppercase tracking-widest text-accent">Book a session</p>
        <h1 className="mt-3 font-serif text-4xl">Let's set you up.</h1>
        <Stepper step={step} />
        {step === 1 && <Step1 service={service} setService={setService} onNext={() => service && setStep(2)} />}
        {step === 2 && service && (
          <Step2
            service={service}
            userName={userName}
            setUserName={setUserName}
            isAnonymous={isAnonymous}
            setIsAnonymous={setIsAnonymous}
            onBack={() => setStep(1)}
            onNext={() => setStep(3)}
          />
        )}
        {step === 3 && service && (
          <Step3
            service={service}
            txid={txid}
            setTxid={setTxid}
            userName={userName}
            isAnonymous={isAnonymous}
            onBack={() => setStep(2)}
            onConfirmed={(r: string, c?: string, m?: string, id?: string) => {
              const data = { confirmation: { ref: r, chatId: c, meetLink: m, bookingId: id }, service };
              localStorage.setItem('tn_confirmation', JSON.stringify(data));
              setConfirmation({ ref: r, chatId: c, meetLink: m, bookingId: id });
              setStep(4);
            }}
          />
        )}
        {step === 4 && confirmation && service && (
          <Step4 service={service} confirmation={confirmation} />
        )}
      </section>
    </SiteShell>
  );
}

function Stepper({ step }: { step: number }) {
  const labels = ["Service", "Your details", "Payment", "Confirmed"];
  return (
    <div className="mt-6 mb-10 flex items-center gap-2">
      {labels.map((l, i) => {
        const n = i + 1;
        const active = step === n;
        const done = step > n;
        return (
          <div key={l} className="flex items-center flex-1">
            <div className={`h-7 w-7 rounded-full flex items-center justify-center text-xs ${done ? "bg-primary text-primary-foreground" : active ? "bg-accent text-accent-foreground" : "bg-secondary text-muted-foreground"}`}>
              {done ? <Check className="h-3.5 w-3.5" /> : n}
            </div>
            <div className="ml-2 text-xs hidden sm:block text-muted-foreground">{l}</div>
            {i < labels.length - 1 && <div className="flex-1 h-px bg-border mx-3" />}
          </div>
        );
      })}
    </div>
  );
}

function Step1({ service, setService, onNext }: { service: ServiceKey | null; setService: (s: ServiceKey) => void; onNext: () => void }) {
  return (
    <div className="space-y-3">
      {(Object.keys(SERVICES) as ServiceKey[]).map((k) => {
        const cfg = SERVICES[k];
        const Icon = cfg.icon;
        const active = service === k;
        return (
          <button key={k} onClick={() => setService(k)} className={`w-full text-left rounded-2xl border p-5 transition flex items-start gap-4 ${active ? "border-primary bg-primary/5" : "border-border bg-card hover:border-primary/40"}`}>
            <span className="h-10 w-10 rounded-full bg-primary/12 text-primary flex items-center justify-center"><Icon className="h-5 w-5" /></span>
            <div className="flex-1">
              <div className="flex items-baseline justify-between">
                <h3 className="font-serif text-lg">{cfg.label}</h3>
                <span className="font-serif text-xl text-primary">BDT {cfg.price}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">{cfg.desc}</p>
              <p className="text-xs text-muted-foreground mt-1">{cfg.mins} minutes</p>
            </div>
          </button>
        );
      })}
      <button disabled={!service} onClick={onNext} className="mt-4 w-full rounded-full bg-primary text-primary-foreground py-3 text-sm font-medium disabled:opacity-40">
        Continue
      </button>
    </div>
  );
}

function Step2({ service, userName, setUserName, isAnonymous, setIsAnonymous, onBack, onNext }: any) {
  const cfg = SERVICES[service as ServiceKey];
  const submit = () => {
    if (!userName.trim()) return toast.error("Please enter your name.");
    onNext();
  };
  return (
    <div className="space-y-4 rounded-3xl border border-border bg-card p-6">
      <h3 className="font-serif text-xl">Your details for {cfg.label}</h3>
      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" checked={isAnonymous} onChange={(e) => setIsAnonymous(e.target.checked)} />
        I'd like to stay anonymous (we still need a name to call you)
      </label>
      <div>
        <label className="text-sm">Your name (or nickname) *</label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-2.5"
        />
      </div>
      <div className="rounded-2xl border-2 border-primary bg-primary/5 px-5 py-4 flex items-start gap-4">
        <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center mt-0.5 shrink-0">
          <svg className="h-3 w-3 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <div className="font-medium text-sm">As soon as possible (ASAP)</div>
          <div className="text-xs text-muted-foreground mt-0.5">We'll match you with the next available listener and notify you shortly.</div>
        </div>
      </div>
      <div className="flex gap-3 pt-2">
        <button onClick={onBack} className="rounded-full border border-border px-5 py-2.5 text-sm">Back</button>
        <button onClick={submit} className="flex-1 rounded-full bg-primary text-primary-foreground py-2.5 text-sm font-medium">Continue to payment</button>
      </div>
    </div>
  );
}

function Step3({ service, txid, setTxid, userName, isAnonymous, onBack, onConfirmed }: any) {
  const cfg = SERVICES[service as ServiceKey];
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    if (!txid.trim()) return toast.error("Please enter your bKash Transaction ID.");
    setLoading(true);
  
    const today = new Date().toISOString().split('T')[0];
  
    const { data: booking, error } = await supabase
      .from("bookings")
      .insert({
        user_name: userName,
        preferred_date: today,
        preferred_time: "ASAP",
        is_anonymous: isAnonymous,
        session_type: service,
        bkash_transaction_id: txid.trim(),
        status: "pending_verification",
      })
      .select("id, reference_code")
      .maybeSingle();
  

      try {
        await fetch(`${import.meta.env.VITE_API_URL ?? ""}/api/notify-booking`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userName,
            service: cfg.label,
            txid: txid.trim(),
            ref: booking?.reference_code,
          }),
        });
      } catch (e) {
        console.error("Notification failed:", e);
      }

    if (error || !booking) {
      setLoading(false);
      return toast.error(error?.message || "Could not save booking.");
    }
  
    // Generate Meet link for voice sessions
    let meetLink: string | undefined;
    if (service === "voice_peer") 
      {
        meetLink = "https://meet.google.com/sfj-czep-ujc";
      }
  
    let chatId: string | undefined;
    if (service === "text_peer" || service === "text_health") {
      const { data: cs } = await supabase
        .from("chat_sessions")
        .insert({ booking_id: booking.id, status: "waiting" })
        .select("id")
        .maybeSingle();
      if (cs) {
        chatId = cs.id;
        await supabase.from("bookings").update({ chat_id: chatId }).eq("id", booking.id);
      }
    }
  
    setLoading(false);
    onConfirmed(booking.reference_code, chatId, meetLink, booking.id);
  };

  const copyNumber = () => { navigator.clipboard.writeText("01301046838"); toast.success("Number copied"); };

  return (
    <div className="space-y-4 rounded-3xl border border-border bg-card p-6">
      <div className="flex items-baseline justify-between">
        <h3 className="font-serif text-xl">Pay via bKash</h3>
        <div className="font-serif text-2xl text-primary">BDT {cfg.price}</div>
      </div>
      <ol className="text-sm text-muted-foreground space-y-3 list-decimal pl-5">
        <li>
          Send <b className="text-foreground">BDT {cfg.price}</b> to bKash merchant:
          <div className="mt-2 flex items-center gap-2 rounded-xl bg-secondary/60 border border-border px-3 py-2 w-fit">
            <span className="font-mono text-foreground text-base">01301046838</span>
            <button onClick={copyNumber} className="text-primary"><Copy className="h-4 w-4" /></button>
          </div>
        </li>
        <li>Copy your bKash Transaction ID (TrxID).</li>
        <li>Paste it below and confirm.</li>
      </ol>
      <div>
        <label className="text-sm">bKash Transaction ID *</label>
        <input value={txid} onChange={(e) => setTxid(e.target.value)} placeholder="e.g. 9A8B7C6D5E" className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-2.5 font-mono" />
      </div>
      <div className="flex gap-3 pt-2">
        <button onClick={onBack} className="rounded-full border border-border px-5 py-2.5 text-sm">Back</button>
        <button onClick={submit} disabled={loading} className="flex-1 rounded-full bg-primary text-primary-foreground py-2.5 text-sm font-medium disabled:opacity-50">
          {loading ? "Saving..." : "Confirm booking"}
        </button>
      </div>
    </div>
  );
}

// Replace your existing Step4 function in book.tsx with this

function Step4({ service, confirmation }: { 
  service: ServiceKey; 
  confirmation: { ref: string; chatId?: string; meetLink?: string; bookingId?: string } 
}) {
  const navigate = useNavigate();
  console.log('confirmation:', confirmation);
  const [status, setStatus] = useState<"pending_verification" | "confirmed" | "cancelled">("pending_verification");

  // Realtime — listen for admin confirming the booking
  useEffect(() => {
    if (!confirmation.bookingId) return;

    // Check current status first
    supabase
      .from("bookings")
      .select("status")
      .eq("id", confirmation.bookingId)
      .maybeSingle()
      .then(({ data }) => {
        if (data?.status) setStatus(data.status as any);
      });

    // Subscribe to changes
    const ch = supabase
      .channel(`booking_${confirmation.bookingId}`)
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "bookings",
          filter: `id=eq.${confirmation.bookingId}`,
        },
        (p) => {
          console.log('Realtime update received:', p.new);
          const newStatus = (p.new as any).status;
          if (newStatus) setStatus(newStatus);
        }
      )
      .subscribe();

    return () => { supabase.removeChannel(ch); };
  }, [confirmation.bookingId]);
  
  useEffect(() => {
    if (status === "completed") {
      localStorage.removeItem('tn_confirmation');
      window.location.href = '/book';
    }
  }, [status]);

  const isConfirmed = status === "confirmed";
  const isCancelled = status === "cancelled";

  const steps = [
    { label: "Booking received", done: true },
    { label: "Your listener is being assigned...", done: isConfirmed, active: !isConfirmed && !isCancelled },
    { label: "Room ready", done: isConfirmed },
  ];

  return (
    <div className="rounded-3xl border border-border bg-card p-8">
      
      {/* Header */}
      <div className="text-center mb-8">
        <div className="mx-auto h-14 w-14 rounded-full bg-primary/15 text-primary flex items-center justify-center mb-4">
          {isConfirmed ? (
            <Check className="h-7 w-7" />
          ) : isCancelled ? (
            <span className="text-xl">✕</span>
          ) : (
            <span className="text-2xl" style={{ animation: "pulse 2s infinite" }}>☕</span>
          )}
        </div>
        <h3 className="font-serif text-2xl">
          {isConfirmed
            ? "Your Talk Nook is ready"
            : isCancelled
            ? "Booking cancelled"
            : "Your Talk Nook is being prepared"}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          {isConfirmed
            ? "Your listener is ready. Join whenever you are."
            : isCancelled
            ? "Your booking was cancelled. Please reach us at thetalknook@proton.me if this was a mistake."
            : "Typical connection time: 25 minutes"}
        </p>
      </div>

      {/* Progress bar — only show while pending */}
      {!isConfirmed && !isCancelled && (
        <div className="mb-6 h-1 rounded-full bg-border overflow-hidden">
          <div
            className="h-full bg-primary/40 rounded-full"
            style={{
              width: "60%",
              animation: "progressPulse 2.5s ease-in-out infinite",
            }}
          />
        </div>
      )}

      {/* Steps */}
      <div className="space-y-3 mb-8">
        {steps.map((step, i) => (
          <div
            key={i}
            className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-500 ${
              step.done
                ? "bg-primary/8 border border-primary/20"
                : step.active
                ? "bg-secondary/60 border border-border"
                : "bg-secondary/30 border border-border opacity-50"
            }`}
          >
            <div
              className={`h-6 w-6 rounded-full flex items-center justify-center text-xs shrink-0 ${
                step.done
                  ? "bg-primary text-primary-foreground"
                  : step.active
                  ? "bg-border text-muted-foreground"
                  : "bg-border/50 text-muted-foreground"
              }`}
              style={step.active ? { animation: "pulse 1.5s infinite" } : undefined}
            >
              {step.done ? <Check className="h-3 w-3" /> : step.active ? "⏳" : "□"}
            </div>
            <span
              className={`text-sm ${
                step.done
                  ? "text-foreground font-medium"
                  : step.active
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              {step.label}
            </span>
          </div>
        ))}
      </div>

      {/* Reference code */}
      <div className="rounded-2xl bg-secondary/60 border border-border px-5 py-4 text-center mb-6">
        <div className="text-xs uppercase tracking-wider text-muted-foreground">Booking reference</div>
        <div className="font-mono text-lg mt-1">{confirmation.ref}</div>
        <div className="text-xs text-muted-foreground mt-1">Save this code to return to your session</div>
      </div>

      {/* Action button — only shows when confirmed */}
      {isConfirmed && (
        <div
          className="text-center"
          style={{ animation: "fadeSlideUp 0.5s ease forwards" }}
        >
          {service === "voice_peer" && confirmation.meetLink && (
            <a
              href={confirmation.meetLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => localStorage.removeItem('tn_confirmation')}
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-3 text-sm font-medium"
            >
              📹 Join Session <ArrowRight className="h-4 w-4" />
            </a>
          )}
          {(service === "text_peer" || service === "text_health") && confirmation.chatId && (
            <button
            onClick={() => {
              localStorage.removeItem('tn_confirmation');
              navigate({ to: "/chat/$chatId", params: { chatId: confirmation.chatId! } });
            }}
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-3 text-sm font-medium"
          >
            Enter Chat Room <ArrowRight className="h-4 w-4" />
          </button>
          )}
        </div>
      )}

      {/* CSS animations */}
      <style>{`
        @keyframes progressPulse {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(80%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "sonner";
import { LogOut, LayoutDashboard, ListChecks, MessageSquare, Search, AlertCircle, ChevronLeft, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/talknook-admin-panel")({
  head: () => ({ meta: [{ title: "Admin — The Talk Nook" }, { name: "robots", content: "noindex,nofollow" }] }),
  component: AdminPanel,
});

type Tab = "overview" | "bookings" | "chats";

function AdminPanel() {
  const [session, setSession] = useState<any>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState<Tab>("overview");

  useEffect(() => {
    let mounted = true;
    supabase.auth.getSession().then(({ data }) => {
      if (!mounted) return;
      setSession(data.session);
      if (data.session) setIsAdmin(true);
      setLoading(false);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => {
      if (!mounted) return;
      setSession(s);
      setIsAdmin(!!s);
      setLoading(false);
    });
    return () => { mounted = false; sub.subscription.unsubscribe(); };
  }, []);

  async function checkAdmin(uid: string) {
    const { data } = await supabase.from("user_roles").select("role").eq("user_id", uid).eq("role", "admin").maybeSingle();
    setIsAdmin(!!data);
  }

  if (loading) return <div className="p-10 text-muted-foreground">Loading…</div>;
  if (!session || !isAdmin) return <Login />;

  return (
    <div className="min-h-screen flex bg-background">
      <aside className="w-60 border-r border-border bg-card hidden md:flex md:flex-col p-4 gap-1">
        <div className="font-serif text-xl px-2 py-3">The Talk Nook · Admin</div>
        <NavItem icon={<LayoutDashboard className="h-4 w-4" />} label="Overview" active={tab === "overview"} onClick={() => setTab("overview")} />
        <NavItem icon={<ListChecks className="h-4 w-4" />} label="Bookings" active={tab === "bookings"} onClick={() => setTab("bookings")} />
        <NavItem icon={<MessageSquare className="h-4 w-4" />} label="Active Chats" active={tab === "chats"} onClick={() => setTab("chats")} />
        <div className="mt-auto">
          <button onClick={() => supabase.auth.signOut()} className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-secondary">
            <LogOut className="h-4 w-4" /> Sign out
          </button>
        </div>
      </aside>
      <main className="flex-1 p-6 overflow-auto">
        <div className="md:hidden flex gap-2 mb-4">
          {(["overview", "bookings", "chats"] as Tab[]).map(t => (
            <button key={t} onClick={() => setTab(t)} className={`px-3 py-1.5 rounded-full text-xs ${tab === t ? "bg-primary text-primary-foreground" : "bg-secondary"}`}>{t}</button>
          ))}
        </div>
        {tab === "overview" && <Overview />}
        {tab === "bookings" && <Bookings />}
        {tab === "chats" && <ActiveChats />}
      </main>
    </div>
  );
}

function NavItem({ icon, label, active, onClick }: any) {
  return (
    <button onClick={onClick} className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${active ? "bg-primary/12 text-foreground" : "text-muted-foreground hover:bg-secondary"}`}>
      {icon} {label}
    </button>
  );
}

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) toast.error("Invalid credentials");
  };
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-background">
      <form onSubmit={submit} className="w-full max-w-sm rounded-3xl border border-border bg-card p-7 space-y-4">
        <h1 className="font-serif text-2xl">Admin sign in</h1>
        <div>
          <label className="text-sm">Email</label>
          <input className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-2.5" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label className="text-sm">Password</label>
          <input type="password" className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-2.5" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button disabled={loading} className="w-full rounded-full bg-primary text-primary-foreground py-2.5 text-sm disabled:opacity-50">{loading ? "Signing in…" : "Sign in"}</button>
      </form>
    </div>
  );
}

function StatusBadge({ s }: { s: string }) {
  const map: Record<string, string> = {
    pending_verification: "bg-yellow-100 text-yellow-900 border-yellow-300",
    confirmed: "bg-primary/15 text-primary border-primary/40",
    cancelled: "bg-red-100 text-red-900 border-red-300",
    completed: "bg-secondary text-secondary-foreground border-border",
  };
  return <span className={`text-[11px] px-2 py-0.5 rounded-full border ${map[s] || ""}`}>{s.replace("_", " ")}</span>;
}

function ErrorState({ message, onRetry }: { message: string; onRetry?: () => void }) {
  return (
    <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-5 flex items-start gap-3">
      <AlertCircle className="h-5 w-5 text-destructive mt-0.5 shrink-0" />
      <div className="flex-1">``
        <div className="text-sm text-destructive font-medium">Couldn't load data</div>
        <div className="text-xs text-muted-foreground mt-1">{message}</div>
        {onRetry && (
          <button onClick={onRetry} className="mt-3 text-xs px-3 py-1 rounded-full bg-destructive/10 text-destructive">Retry</button>
        )}
      </div>
    </div>
  );
}

/* ============ Overview ============ */

function Overview() {
  return (
    <div className="space-y-6">
      <h1 className="font-serif text-3xl">Overview</h1>
      <StatCards />
      <RecentBookings />
    </div>
  );
}

function StatCards() {
  const [counts, setCounts] = useState({ total: 0, pending: 0, confirmed: 0, completed: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [{ count: total, error: e1 }, { count: pending, error: e2 }, { count: confirmed, error: e3 }, { count: completed, error: e4 }] = await Promise.all([
        supabase.from("bookings").select("*", { count: "exact", head: true }),
        supabase.from("bookings").select("*", { count: "exact", head: true }).eq("status", "pending_verification"),
        supabase.from("bookings").select("*", { count: "exact", head: true }).eq("status", "confirmed"),
        supabase.from("bookings").select("*", { count: "exact", head: true }).eq("status", "completed"),
      ]);
      const err = e1 || e2 || e3 || e4;
      if (err) throw err;
      setCounts({ total: total ?? 0, pending: pending ?? 0, confirmed: confirmed ?? 0, completed: completed ?? 0 });
    } catch (err: any) {
      setError(err.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  if (error) return <ErrorState message={error} onRetry={load} />;

  return (
    <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
      {loading
        ? Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} className="h-[92px] rounded-2xl" />)
        : (
          <>
            <Stat label="Total bookings" value={counts.total} />
            <Stat label="Pending verification" value={counts.pending} />
            <Stat label="Confirmed" value={counts.confirmed} />
            <Stat label="Completed" value={counts.completed} />
          </>
        )}
    </div>
  );
}

function RecentBookings() {
  const [recent, setRecent] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const { data, error } = await supabase
        .from("bookings")
        .select("id,user_name,session_type,preferred_date,preferred_time,bkash_transaction_id,status,created_at")
        .order("created_at", { ascending: false })
        .range(0, 9);
      if (error) throw error;
      setRecent(data || []);
    } catch (err: any) {
      setError(err.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  return (
    <div className="rounded-2xl border border-border bg-card">
      <div className="px-5 py-3 border-b border-border font-serif">Recent bookings</div>
      {error ? (
        <div className="p-5"><ErrorState message={error} onRetry={load} /></div>
      ) : loading ? (
        <div className="p-5 space-y-2">
          {Array.from({ length: 5 }).map((_, i) => <Skeleton key={i} className="h-10" />)}
        </div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow><TableHead>Name</TableHead><TableHead>Type</TableHead><TableHead>Date/Time</TableHead><TableHead>TrxID</TableHead><TableHead>Status</TableHead></TableRow>
          </TableHeader>
          <TableBody>
            {recent.map((b: any) => (
              <TableRow key={b.id}>
                <TableCell>{b.user_name}</TableCell>
                <TableCell className="text-xs">{b.session_type}</TableCell>
                <TableCell className="text-xs">{b.preferred_date} {b.preferred_time}</TableCell>
                <TableCell className="font-mono text-xs">{b.bkash_transaction_id}</TableCell>
                <TableCell><StatusBadge s={b.status} /></TableCell>
              </TableRow>
            ))}
            {recent.length === 0 && (
              <TableRow><TableCell colSpan={5} className="text-center text-muted-foreground py-8">No bookings yet.</TableCell></TableRow>
            )}
          </TableBody>
        </Table>
      )}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="mt-2 font-serif text-3xl">{value}</div>
    </div>
  );
}

/* ============ Bookings (paginated) ============ */

const PAGE_SIZE = 50;

function Bookings() {
  const [filter, setFilter] = useState<"all" | "pending_verification" | "confirmed" | "cancelled" | "completed">("all");
  const [rows, setRows] = useState<any[]>([]);
  const [page, setPage] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const from = page * PAGE_SIZE;
      const to = from + PAGE_SIZE - 1;
      let q = supabase
        .from("bookings")
        .select("*", { count: "exact" })
        .order("created_at", { ascending: false })
        .range(from, to);
      if (filter !== "all") q = q.eq("status", filter);
      const { data, error, count } = await q;
      if (error) throw error;
      setRows(data || []);
      setTotalCount(count ?? 0);
    } catch (err: any) {
      setError(err.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  }, [filter, page]);

  useEffect(() => { load(); }, [load]);
  useEffect(() => { setPage(0); }, [filter]);

  const updateStatus = async (b: any, status: string) => {
    try {
      let chat_id = b.chat_id;
      if (status === "confirmed" && (b.session_type === "text_peer" || b.session_type === "text_health") && !chat_id) {
        const { data: cs, error: csErr } = await supabase.from("chat_sessions").insert({ booking_id: b.id, status: "waiting" }).select("id").maybeSingle();
        if (csErr) throw csErr;
        chat_id = cs?.id;
      }
      const { error } = await supabase.from("bookings").update({ status, chat_id }).eq("id", b.id);
      if (error) throw error;
      toast.success("Updated");
      load();
    } catch (err: any) {
      toast.error(err.message || "Update failed");
    }
  };

  const totalPages = Math.max(1, Math.ceil(totalCount / PAGE_SIZE));

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <h1 className="font-serif text-3xl">Bookings</h1>
        <div className="flex gap-2 flex-wrap">
          {(["all", "pending_verification", "confirmed", "cancelled", "completed"] as const).map(f => (
            <button key={f} onClick={() => setFilter(f)} className={`px-3 py-1.5 rounded-full text-xs ${filter === f ? "bg-primary text-primary-foreground" : "bg-secondary"}`}>{f.replace("_", " ")}</button>
          ))}
        </div>
      </div>

      {error ? (
        <ErrorState message={error} onRetry={load} />
      ) : (
        <>
          <div className="rounded-2xl border border-border bg-card overflow-x-auto">
            {loading ? (
              <div className="p-5 space-y-2">
                {Array.from({ length: 8 }).map((_, i) => <Skeleton key={i} className="h-10" />)}
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Ref</TableHead><TableHead>Name</TableHead><TableHead>Phone</TableHead>
                    <TableHead>Type</TableHead><TableHead>When</TableHead><TableHead>TrxID</TableHead>
                    <TableHead>Status</TableHead><TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {rows.map((b: any) => (
                    <TableRow key={b.id}>
                      <TableCell className="font-mono text-xs">{b.reference_code}</TableCell>
                      <TableCell>{b.is_anonymous ? "Anonymous" : b.user_name}</TableCell>
                      <TableCell className="text-xs">{b.session_type}</TableCell>
                      <TableCell className="text-xs">{b.preferred_date}<br/>{b.preferred_time}</TableCell>
                      <TableCell className="font-mono text-xs">{b.bkash_transaction_id}</TableCell>
                      <TableCell><StatusBadge s={b.status} /></TableCell>
                      <TableCell>
                        <div className="flex gap-1 flex-wrap">
                          {b.status === "pending_verification" && <button onClick={() => updateStatus(b, "confirmed")} className="text-xs px-2 py-1 rounded bg-primary text-primary-foreground">Confirm</button>}
                          {b.status !== "cancelled" && b.status !== "completed" && <button onClick={() => updateStatus(b, "cancelled")} className="text-xs px-2 py-1 rounded bg-destructive/10 text-destructive">Cancel</button>}
                          {b.status === "confirmed" && <button onClick={() => updateStatus(b, "completed")} className="text-xs px-2 py-1 rounded bg-secondary">Complete</button>}
                          {b.status === "confirmed" && b.chat_id && (b.session_type === "text_peer" || b.session_type === "text_health") && (
                            <button onClick={() => navigate({ to: "/chat/$chatId", params: { chatId: b.chat_id }, search: { as: "listener" } as never })} className="text-xs px-2 py-1 rounded bg-accent text-accent-foreground">Enter chat</button>
                          )}
                          {b.session_type === "voice_peer" && (<a href="https://meet.google.com/sfj-czep-ujc" target="_blank" rel="noopener noreferrer" className="text-xs px-2 py-1 rounded bg-primary text-primary-foreground">Join Meet</a>)}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                  {rows.length === 0 && (
                    <TableRow><TableCell colSpan={8} className="text-center text-muted-foreground py-8">No bookings match this filter.</TableCell></TableRow>
                  )}
                </TableBody>
              </Table>
            )}
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="text-muted-foreground text-xs">
              {totalCount === 0 ? "0 results" : `Showing ${page * PAGE_SIZE + 1}–${Math.min((page + 1) * PAGE_SIZE, totalCount)} of ${totalCount}`}
            </div>
            <div className="flex gap-2 items-center">
              <button
                disabled={page === 0 || loading}
                onClick={() => setPage(p => Math.max(0, p - 1))}
                className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-secondary text-xs disabled:opacity-40"
              >
                <ChevronLeft className="h-3 w-3" /> Previous
              </button>
              <span className="text-xs text-muted-foreground">Page {page + 1} of {totalPages}</span>
              <button
                disabled={page >= totalPages - 1 || loading}
                onClick={() => setPage(p => p + 1)}
                className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-secondary text-xs disabled:opacity-40"
              >
                Next <ChevronRight className="h-3 w-3" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

/* ============ Active Chats ============ */

function ActiveChats() {
  const [rows, setRows] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [manual, setManual] = useState("");
  const navigate = useNavigate();

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const { data, error } = await supabase
        .from("bookings")
        .select("id,chat_id,user_name,is_anonymous,preferred_date,preferred_time,session_type")
        .in("session_type", ["text_peer", "text_health"])
        .eq("status", "confirmed")
        .not("chat_id", "is", null)
        .order("preferred_date", { ascending: true })
        .range(0, 49);
      if (error) throw error;
      setRows(data || []);
    } catch (err: any) {
      setError(err.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  return (
    <div className="space-y-5">
      <h1 className="font-serif text-3xl">Active chats</h1>
      <div className="flex gap-2 items-center max-w-md">
        <div className="relative flex-1">
          <Search className="h-4 w-4 absolute left-3 top-3 text-muted-foreground" />
          <input value={manual} onChange={e => setManual(e.target.value)} placeholder="Paste chat ID…" className="pl-9 w-full rounded-xl border border-input bg-background px-4 py-2 text-sm" />
        </div>
        <button onClick={() => manual && navigate({ to: "/chat/$chatId", params: { chatId: manual.trim() }, search: { as: "listener" } as never })} className="rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm">Enter</button>
      </div>
      {error ? (
        <ErrorState message={error} onRetry={load} />
      ) : (
        <div className="rounded-2xl border border-border bg-card overflow-x-auto">
          {loading ? (
            <div className="p-5 space-y-2">
              {Array.from({ length: 5 }).map((_, i) => <Skeleton key={i} className="h-10" />)}
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow><TableHead>Chat ID</TableHead><TableHead>User</TableHead><TableHead>Scheduled</TableHead><TableHead>Type</TableHead><TableHead></TableHead></TableRow>
              </TableHeader>
              <TableBody>
                {rows.map((b: any) => (
                  <TableRow key={b.id}>
                    <TableCell className="font-mono text-xs">{b.chat_id?.slice(0, 8)}…</TableCell>
                    <TableCell>{b.is_anonymous ? "Anonymous" : b.user_name}</TableCell>
                    <TableCell className="text-xs">{b.preferred_date} {b.preferred_time}</TableCell>
                    <TableCell className="text-xs">{b.session_type}</TableCell>
                    <TableCell>
                      <button onClick={() => navigate({ to: "/chat/$chatId", params: { chatId: b.chat_id }, search: { as: "listener" } as never })} className="text-xs px-3 py-1.5 rounded-full bg-primary text-primary-foreground">Enter chat</button>
                    </TableCell>
                  </TableRow>
                ))}
                {rows.length === 0 && (
                  <TableRow><TableCell colSpan={5} className="text-center text-muted-foreground py-8">No active chats yet.</TableCell></TableRow>
                )}
              </TableBody>
            </Table>
          )}
        </div>
      )}
    </div>
  );
}

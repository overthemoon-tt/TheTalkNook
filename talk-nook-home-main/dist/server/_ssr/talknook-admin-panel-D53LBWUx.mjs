import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { s as supabase } from "./router-FozfxTEg.mjs";
import { c as cn } from "./utils-H80jjgLf.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { L as LayoutDashboard, a as ListChecks, M as MessageSquare, b as LogOut, C as ChevronLeft, c as ChevronRight, S as Search, d as CircleAlert } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("animate-pulse rounded-md bg-primary/10", className), ...props });
}
const Table = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("table", { ref, className: cn("w-full caption-bottom text-sm", className), ...props }) })
);
Table.displayName = "Table";
const TableHeader = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { ref, className: cn("[&_tr]:border-b", className), ...props }));
TableHeader.displayName = "TableHeader";
const TableBody = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { ref, className: cn("[&_tr:last-child]:border-0", className), ...props }));
TableBody.displayName = "TableBody";
const TableFooter = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "tfoot",
  {
    ref,
    className: cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
    ...props
  }
));
TableFooter.displayName = "TableFooter";
const TableRow = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "tr",
    {
      ref,
      className: cn(
        "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
        className
      ),
      ...props
    }
  )
);
TableRow.displayName = "TableRow";
const TableHead = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "th",
  {
    ref,
    className: cn(
      "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    ),
    ...props
  }
));
TableHead.displayName = "TableHead";
const TableCell = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "td",
  {
    ref,
    className: cn(
      "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    ),
    ...props
  }
));
TableCell.displayName = "TableCell";
const TableCaption = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("caption", { ref, className: cn("mt-4 text-sm text-muted-foreground", className), ...props }));
TableCaption.displayName = "TableCaption";
function AdminPanel() {
  const [session, setSession] = reactExports.useState(null);
  const [isAdmin, setIsAdmin] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(true);
  const [tab, setTab] = reactExports.useState("overview");
  reactExports.useEffect(() => {
    let mounted = true;
    supabase.auth.getSession().then(({
      data
    }) => {
      if (!mounted) return;
      setSession(data.session);
      if (data.session) setIsAdmin(true);
      setLoading(false);
    });
    const {
      data: sub
    } = supabase.auth.onAuthStateChange((_e, s) => {
      if (!mounted) return;
      setSession(s);
      setIsAdmin(!!s);
      setLoading(false);
    });
    return () => {
      mounted = false;
      sub.subscription.unsubscribe();
    };
  }, []);
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-10 text-muted-foreground", children: "Loading…" });
  if (!session || !isAdmin) return /* @__PURE__ */ jsxRuntimeExports.jsx(Login, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "w-60 border-r border-border bg-card hidden md:flex md:flex-col p-4 gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-xl px-2 py-3", children: "The Talk Nook · Admin" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutDashboard, { className: "h-4 w-4" }), label: "Overview", active: tab === "overview", onClick: () => setTab("overview") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ListChecks, { className: "h-4 w-4" }), label: "Bookings", active: tab === "bookings", onClick: () => setTab("bookings") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-4 w-4" }), label: "Active Chats", active: tab === "chats", onClick: () => setTab("chats") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => supabase.auth.signOut(), className: "w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-secondary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4" }),
        " Sign out"
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1 p-6 overflow-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden flex gap-2 mb-4", children: ["overview", "bookings", "chats"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setTab(t), className: `px-3 py-1.5 rounded-full text-xs ${tab === t ? "bg-primary text-primary-foreground" : "bg-secondary"}`, children: t }, t)) }),
      tab === "overview" && /* @__PURE__ */ jsxRuntimeExports.jsx(Overview, {}),
      tab === "bookings" && /* @__PURE__ */ jsxRuntimeExports.jsx(Bookings, {}),
      tab === "chats" && /* @__PURE__ */ jsxRuntimeExports.jsx(ActiveChats, {})
    ] })
  ] });
}
function NavItem({
  icon,
  label,
  active,
  onClick
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick, className: `flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${active ? "bg-primary/12 text-foreground" : "text-muted-foreground hover:bg-secondary"}`, children: [
    icon,
    " ",
    label
  ] });
}
function Login() {
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const {
      error
    } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    setLoading(false);
    if (error) toast.error("Invalid credentials");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex items-center justify-center px-4 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "w-full max-w-sm rounded-3xl border border-border bg-card p-7 space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-2xl", children: "Admin sign in" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm", children: "Email" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "mt-1 w-full rounded-xl border border-input bg-background px-4 py-2.5", value: email, onChange: (e) => setEmail(e.target.value) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm", children: "Password" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", className: "mt-1 w-full rounded-xl border border-input bg-background px-4 py-2.5", value: password, onChange: (e) => setPassword(e.target.value) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: loading, className: "w-full rounded-full bg-primary text-primary-foreground py-2.5 text-sm disabled:opacity-50", children: loading ? "Signing in…" : "Sign in" })
  ] }) });
}
function StatusBadge({
  s
}) {
  const map = {
    pending_verification: "bg-yellow-100 text-yellow-900 border-yellow-300",
    confirmed: "bg-primary/15 text-primary border-primary/40",
    cancelled: "bg-red-100 text-red-900 border-red-300",
    completed: "bg-secondary text-secondary-foreground border-border"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[11px] px-2 py-0.5 rounded-full border ${map[s] || ""}`, children: s.replace("_", " ") });
}
function ErrorState({
  message,
  onRetry
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-destructive/30 bg-destructive/5 p-5 flex items-start gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-5 w-5 text-destructive mt-0.5 shrink-0" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
      "``",
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-destructive font-medium", children: "Couldn't load data" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: message }),
      onRetry && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onRetry, className: "mt-3 text-xs px-3 py-1 rounded-full bg-destructive/10 text-destructive", children: "Retry" })
    ] })
  ] });
}
function Overview() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-3xl", children: "Overview" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StatCards, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RecentBookings, {})
  ] });
}
function StatCards() {
  const [counts, setCounts] = reactExports.useState({
    total: 0,
    pending: 0,
    confirmed: 0,
    completed: 0
  });
  const [loading, setLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState(null);
  const load = reactExports.useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [{
        count: total,
        error: e1
      }, {
        count: pending,
        error: e2
      }, {
        count: confirmed,
        error: e3
      }, {
        count: completed,
        error: e4
      }] = await Promise.all([supabase.from("bookings").select("*", {
        count: "exact",
        head: true
      }), supabase.from("bookings").select("*", {
        count: "exact",
        head: true
      }).eq("status", "pending_verification"), supabase.from("bookings").select("*", {
        count: "exact",
        head: true
      }).eq("status", "confirmed"), supabase.from("bookings").select("*", {
        count: "exact",
        head: true
      }).eq("status", "completed")]);
      const err = e1 || e2 || e3 || e4;
      if (err) throw err;
      setCounts({
        total: total ?? 0,
        pending: pending ?? 0,
        confirmed: confirmed ?? 0,
        completed: completed ?? 0
      });
    } catch (err) {
      setError(err.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  }, []);
  reactExports.useEffect(() => {
    load();
  }, [load]);
  if (error) return /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorState, { message: error, onRetry: load });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 grid-cols-2 md:grid-cols-4", children: loading ? Array.from({
    length: 4
  }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-[92px] rounded-2xl" }, i)) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Total bookings", value: counts.total }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Pending verification", value: counts.pending }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Confirmed", value: counts.confirmed }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Completed", value: counts.completed })
  ] }) });
}
function RecentBookings() {
  const [recent, setRecent] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState(null);
  const load = reactExports.useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const {
        data,
        error: error2
      } = await supabase.from("bookings").select("id,user_name,session_type,preferred_date,preferred_time,bkash_transaction_id,status,created_at").order("created_at", {
        ascending: false
      }).range(0, 9);
      if (error2) throw error2;
      setRecent(data || []);
    } catch (err) {
      setError(err.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  }, []);
  reactExports.useEffect(() => {
    load();
  }, [load]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 py-3 border-b border-border font-serif", children: "Recent bookings" }),
    error ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorState, { message: error, onRetry: load }) }) : loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5 space-y-2", children: Array.from({
      length: 5
    }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10" }, i)) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Type" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Date/Time" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "TrxID" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Status" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TableBody, { children: [
        recent.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: b.user_name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs", children: b.session_type }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "text-xs", children: [
            b.preferred_date,
            " ",
            b.preferred_time
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-mono text-xs", children: b.bkash_transaction_id }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { s: b.status }) })
        ] }, b.id)),
        recent.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { colSpan: 5, className: "text-center text-muted-foreground py-8", children: "No bookings yet." }) })
      ] })
    ] })
  ] });
}
function Stat({
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 font-serif text-3xl", children: value })
  ] });
}
const PAGE_SIZE = 50;
function Bookings() {
  const [filter, setFilter] = reactExports.useState("all");
  const [rows, setRows] = reactExports.useState([]);
  const [page, setPage] = reactExports.useState(0);
  const [totalCount, setTotalCount] = reactExports.useState(0);
  const [loading, setLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState(null);
  const navigate = useNavigate();
  const load = reactExports.useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const from = page * PAGE_SIZE;
      const to = from + PAGE_SIZE - 1;
      let q = supabase.from("bookings").select("*", {
        count: "exact"
      }).order("created_at", {
        ascending: false
      }).range(from, to);
      if (filter !== "all") q = q.eq("status", filter);
      const {
        data,
        error: error2,
        count
      } = await q;
      if (error2) throw error2;
      setRows(data || []);
      setTotalCount(count ?? 0);
    } catch (err) {
      setError(err.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  }, [filter, page]);
  reactExports.useEffect(() => {
    load();
  }, [load]);
  reactExports.useEffect(() => {
    setPage(0);
  }, [filter]);
  const updateStatus = async (b, status) => {
    try {
      let chat_id = b.chat_id;
      if (status === "confirmed" && (b.session_type === "text_peer" || b.session_type === "text_health") && !chat_id) {
        const {
          data: cs,
          error: csErr
        } = await supabase.from("chat_sessions").insert({
          booking_id: b.id,
          status: "waiting"
        }).select("id").maybeSingle();
        if (csErr) throw csErr;
        chat_id = cs?.id;
      }
      const {
        error: error2
      } = await supabase.from("bookings").update({
        status,
        chat_id
      }).eq("id", b.id);
      if (error2) throw error2;
      toast.success("Updated");
      load();
    } catch (err) {
      toast.error(err.message || "Update failed");
    }
  };
  const totalPages = Math.max(1, Math.ceil(totalCount / PAGE_SIZE));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-3xl", children: "Bookings" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 flex-wrap", children: ["all", "pending_verification", "confirmed", "cancelled", "completed"].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setFilter(f), className: `px-3 py-1.5 rounded-full text-xs ${filter === f ? "bg-primary text-primary-foreground" : "bg-secondary"}`, children: f.replace("_", " ") }, f)) })
    ] }),
    error ? /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorState, { message: error, onRetry: load }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-border bg-card overflow-x-auto", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5 space-y-2", children: Array.from({
        length: 8
      }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10" }, i)) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Ref" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Phone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Type" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "When" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "TrxID" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TableBody, { children: [
          rows.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-mono text-xs", children: b.reference_code }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: b.is_anonymous ? "Anonymous" : b.user_name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs", children: b.session_type }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "text-xs", children: [
              b.preferred_date,
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              b.preferred_time
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-mono text-xs", children: b.bkash_transaction_id }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { s: b.status }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1 flex-wrap", children: [
              b.status === "pending_verification" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => updateStatus(b, "confirmed"), className: "text-xs px-2 py-1 rounded bg-primary text-primary-foreground", children: "Confirm" }),
              b.status !== "cancelled" && b.status !== "completed" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => updateStatus(b, "cancelled"), className: "text-xs px-2 py-1 rounded bg-destructive/10 text-destructive", children: "Cancel" }),
              b.status === "confirmed" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => updateStatus(b, "completed"), className: "text-xs px-2 py-1 rounded bg-secondary", children: "Complete" }),
              b.status === "confirmed" && b.chat_id && (b.session_type === "text_peer" || b.session_type === "text_health") && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => navigate({
                to: "/chat/$chatId",
                params: {
                  chatId: b.chat_id
                },
                search: {
                  as: "listener"
                }
              }), className: "text-xs px-2 py-1 rounded bg-accent text-accent-foreground", children: "Enter chat" }),
              b.session_type === "voice_peer" && /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://meet.google.com/sfj-czep-ujc", target: "_blank", rel: "noopener noreferrer", className: "text-xs px-2 py-1 rounded bg-primary text-primary-foreground", children: "Join Meet" })
            ] }) })
          ] }, b.id)),
          rows.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { colSpan: 8, className: "text-center text-muted-foreground py-8", children: "No bookings match this filter." }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-xs", children: totalCount === 0 ? "0 results" : `Showing ${page * PAGE_SIZE + 1}–${Math.min((page + 1) * PAGE_SIZE, totalCount)} of ${totalCount}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { disabled: page === 0 || loading, onClick: () => setPage((p) => Math.max(0, p - 1)), className: "flex items-center gap-1 px-3 py-1.5 rounded-full bg-secondary text-xs disabled:opacity-40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-3 w-3" }),
            " Previous"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
            "Page ",
            page + 1,
            " of ",
            totalPages
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { disabled: page >= totalPages - 1 || loading, onClick: () => setPage((p) => p + 1), className: "flex items-center gap-1 px-3 py-1.5 rounded-full bg-secondary text-xs disabled:opacity-40", children: [
            "Next ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3 w-3" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
function ActiveChats() {
  const [rows, setRows] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState(null);
  const [manual, setManual] = reactExports.useState("");
  const navigate = useNavigate();
  const load = reactExports.useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const {
        data,
        error: error2
      } = await supabase.from("bookings").select("id,chat_id,user_name,is_anonymous,preferred_date,preferred_time,session_type").in("session_type", ["text_peer", "text_health"]).eq("status", "confirmed").not("chat_id", "is", null).order("preferred_date", {
        ascending: true
      }).range(0, 49);
      if (error2) throw error2;
      setRows(data || []);
    } catch (err) {
      setError(err.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  }, []);
  reactExports.useEffect(() => {
    load();
  }, [load]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-3xl", children: "Active chats" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 items-center max-w-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4 absolute left-3 top-3 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: manual, onChange: (e) => setManual(e.target.value), placeholder: "Paste chat ID…", className: "pl-9 w-full rounded-xl border border-input bg-background px-4 py-2 text-sm" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => manual && navigate({
        to: "/chat/$chatId",
        params: {
          chatId: manual.trim()
        },
        search: {
          as: "listener"
        }
      }), className: "rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm", children: "Enter" })
    ] }),
    error ? /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorState, { message: error, onRetry: load }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-border bg-card overflow-x-auto", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5 space-y-2", children: Array.from({
      length: 5
    }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10" }, i)) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Chat ID" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "User" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Scheduled" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Type" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, {})
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TableBody, { children: [
        rows.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "font-mono text-xs", children: [
            b.chat_id?.slice(0, 8),
            "…"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: b.is_anonymous ? "Anonymous" : b.user_name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "text-xs", children: [
            b.preferred_date,
            " ",
            b.preferred_time
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs", children: b.session_type }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => navigate({
            to: "/chat/$chatId",
            params: {
              chatId: b.chat_id
            },
            search: {
              as: "listener"
            }
          }), className: "text-xs px-3 py-1.5 rounded-full bg-primary text-primary-foreground", children: "Enter chat" }) })
        ] }, b.id)),
        rows.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { colSpan: 5, className: "text-center text-muted-foreground py-8", children: "No active chats yet." }) })
      ] })
    ] }) })
  ] });
}
export {
  AdminPanel as component
};

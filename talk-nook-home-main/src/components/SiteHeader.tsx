import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/peer-support", label: "Peer Support" },
  { to: "/health-navigation", label: "Health Navigation" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-background/80 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="h-8 w-8 rounded-full bg-primary/15 flex items-center justify-center">
            <span className="h-3 w-3 rounded-full bg-primary" />
          </span>
          <span className="font-serif text-xl text-foreground">The Talk Nook</span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={`transition-colors hover:text-foreground ${path === n.to ? "text-foreground font-medium" : "text-muted-foreground"}`}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/book"
            className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm hover:opacity-90 transition"
          >
            Book a Session
          </Link>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <div className="px-5 py-4 flex flex-col gap-3">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="text-foreground py-1">
                {n.label}
              </Link>
            ))}
            <Link to="/book" onClick={() => setOpen(false)} className="mt-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-center">
              Book a Session
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

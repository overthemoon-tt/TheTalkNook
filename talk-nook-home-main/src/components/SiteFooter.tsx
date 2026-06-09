import { Link } from "@tanstack/react-router";
import { Facebook, Linkedin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-12 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-full bg-primary/15 flex items-center justify-center">
              <span className="h-3 w-3 rounded-full bg-primary" />
            </span>
            <span className="font-serif text-xl">The Talk Nook</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            A safe, judgment-free space to be heard. Based in Bangladesh.
          </p>
          <div className="mt-4 flex gap-3">
            <a href="https://www.facebook.com/thetalknook" target="_blank" rel="noreferrer" className="h-9 w-9 rounded-full bg-background border border-border flex items-center justify-center hover:text-primary transition">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" className="h-9 w-9 rounded-full bg-background border border-border flex items-center justify-center hover:text-primary transition">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/peer-support" className="hover:text-foreground">Peer Support</Link></li>
            <li><Link to="/health-navigation" className="hover:text-foreground">Health Navigation</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Join Us</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/contact" className="hover:text-foreground">Become a Listener</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Become a Navigator</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Partnerships</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Reach Us</h4>
          <p className="text-sm text-muted-foreground">thetalknook@proton.me</p>
          <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
            Talk Nook is not a medical or mental health service provider.
          </p>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-5 py-5 text-xs text-muted-foreground flex flex-wrap justify-between gap-3">
          <span>© {new Date().getFullYear()}The Talk Nook. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Disclaimers</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { sections } from "@/lib/content";

const links = [
  { to: "/", label: "Home", end: true },
  ...sections.map((s) => ({ to: `/${s.slug}`, label: s.label, end: false })),
  { to: "/about", label: "About", end: false },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav className="glass-strong mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-block h-6 w-6 rounded-full bg-[var(--gradient-aurora)] shadow-[0_0_20px_var(--accent-violet)]" />
          <span className="font-display text-xl tracking-wider">
            NATURE&apos;S <span className="text-gradient-aurora">SYMPHONY</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm transition-colors hover:bg-white/10 hover:text-foreground ${
                    isActive
                      ? "bg-white/15 text-foreground"
                      : "text-foreground/80"
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          aria-label="Toggle menu"
          className="md:hidden rounded-full p-2 hover:bg-white/10"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="glass-strong mx-auto mt-2 max-w-6xl rounded-3xl p-3 md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.end}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-2xl px-4 py-3 text-sm hover:bg-white/10 ${
                      isActive
                        ? "bg-white/15 text-foreground"
                        : "text-foreground/80"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

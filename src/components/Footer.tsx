import { Link } from "react-router-dom";
import { sections } from "@/lib/content";

export function Footer() {
  return (
    <footer className="relative mt-32 px-4 pb-10">
      <div className="glass mx-auto max-w-6xl rounded-3xl p-8 md:p-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-md">
            <h3 className="font-display text-3xl tracking-wider">
              <span className="text-gradient-aurora">LISTEN</span> TO THE WILD.
            </h3>
            <p className="mt-3 text-sm text-foreground/70">
              A love letter to forests, oceans, deserts, and every petal in between.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-foreground/70">
            <Link to="/" className="hover:text-foreground">Home</Link>
            {sections.map((s) => (
              <Link key={s.slug} to={`/${s.slug}`} className="hover:text-foreground">
                {s.label}
              </Link>
            ))}
            <Link to="/about" className="hover:text-foreground">About</Link>
          </nav>
        </div>
        <div className="mt-8 border-t border-white/10 pt-5 text-xs text-foreground/50">
          © {new Date().getFullYear()} Nature&apos;s Symphony. Made with reverence.
        </div>
      </div>
    </footer>
  );
}

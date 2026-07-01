import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="glass max-w-md rounded-3xl p-10 text-center">
        <h1 className="font-display text-7xl text-gradient-aurora">404</h1>
        <h2 className="mt-4 font-display text-2xl tracking-wider">
          LOST IN THE WOODS
        </h2>
        <p className="mt-2 text-sm text-foreground/70">
          That trail doesn&apos;t exist. Let&apos;s walk you back.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

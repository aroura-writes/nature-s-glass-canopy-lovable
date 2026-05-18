export function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="blob"
        style={{
          width: 520,
          height: 520,
          left: "-8%",
          top: "-10%",
          background: "var(--accent-violet)",
        }}
      />
      <div
        className="blob"
        style={{
          width: 460,
          height: 460,
          right: "-10%",
          top: "10%",
          background: "var(--accent-teal)",
          animationDelay: "-6s",
        }}
      />
      <div
        className="blob"
        style={{
          width: 600,
          height: 600,
          left: "20%",
          bottom: "-20%",
          background: "var(--accent-green)",
          animationDelay: "-12s",
        }}
      />
      <div
        className="blob"
        style={{
          width: 380,
          height: 380,
          right: "15%",
          bottom: "5%",
          background: "var(--accent-coral)",
          opacity: 0.35,
          animationDelay: "-3s",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,oklch(0.08_0.05_280/0.7))]" />
    </div>
  );
}

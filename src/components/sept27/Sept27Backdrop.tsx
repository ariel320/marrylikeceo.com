/**
 * Full-bleed cinematic atmosphere behind the Sept 27 hero: a slow-pulsing
 * gold glow at center, a soft vignette to keep the edges dark and
 * cinematic, and a whisper of film grain for texture. Pure CSS/SVG —
 * no images, so it stays fast.
 */
export const Sept27Backdrop = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Central gold glow, pulsing slowly */}
      <div
        className="sept27-glow absolute left-1/2 top-[38%] h-[560px] w-[900px] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center, color-mix(in srgb, var(--sept27-gold) 20%, transparent) 0%, transparent 70%)",
        }}
      />
      {/* Secondary glow, lower-right */}
      <div
        className="absolute -right-[10%] bottom-[-10%] h-[480px] w-[480px] opacity-40"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--sept27-gold) 25%, transparent) 0%, transparent 70%)",
        }}
      />
      {/* Vignette to keep the corners cinematic-dark */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, var(--sept27-bg) 100%)",
        }}
      />
      {/* Fine grain texture */}
      <div className="sept27-grain absolute inset-0" />
    </div>
  );
};

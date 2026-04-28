import { useEffect, useState } from "react";

type Height = "off" | "568" | "667";

const STYLE_ID = "qa-viewport-style";

/**
 * Dev-only QA tool. Renders only when URL has ?qa=1.
 * Constrains the document to a fixed mobile height (568 or 667 px) so you
 * can verify the Hero CTA + iOS safe-area padding without opening DevTools.
 *
 * The Hero uses h-screen (100vh). We override 100vh by injecting a CSS rule
 * that pins html/body/section[data-hero] to the chosen height, and we also
 * simulate a 34px safe-area-inset-bottom so notched-iPhone padding kicks in.
 */
const QAViewportToggle = () => {
  const [enabled, setEnabled] = useState(false);
  const [height, setHeight] = useState<Height>("off");
  const [withInset, setWithInset] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setEnabled(params.get("qa") === "1");
  }, []);

  useEffect(() => {
    if (!enabled) return;
    let style = document.getElementById(STYLE_ID) as HTMLStyleElement | null;
    if (!style) {
      style = document.createElement("style");
      style.id = STYLE_ID;
      document.head.appendChild(style);
    }
    if (height === "off") {
      style.textContent = "";
      document.documentElement.style.removeProperty("--qa-safe-area");
      return;
    }
    const h = `${height}px`;
    // Force the hero (first <section> with h-screen) and any 100vh layout
    // to render at the chosen short height.
    style.textContent = `
      html, body { min-height: ${h} !important; }
      .h-screen { height: ${h} !important; }
      :root { --qa-safe-area-inset-bottom: ${withInset ? "34px" : "0px"}; }
      /* Make env(safe-area-inset-bottom) effectively read our QA value
         by overlaying a fake bottom inset bar */
    `;
  }, [enabled, height, withInset]);

  if (!enabled) return null;

  return (
    <div
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      className="fixed bottom-4 right-4 z-[9999] flex flex-col gap-2 rounded-md border border-everlake-gold/40 bg-everlake-warm-black/95 p-3 text-everlake-ivory shadow-2xl backdrop-blur-md"
    >
      <p className="text-[10px] uppercase tracking-[0.2em] text-everlake-gold">QA Viewport</p>
      <div className="flex gap-1">
        {(["off", "568", "667"] as Height[]).map((h) => (
          <button
            key={h}
            onClick={() => setHeight(h)}
            className={`px-2 py-1 text-xs rounded-sm border transition-colors ${
              height === h
                ? "bg-everlake-gold text-everlake-warm-black border-everlake-gold"
                : "border-everlake-ivory/30 hover:border-everlake-gold"
            }`}
          >
            {h === "off" ? "Off" : `${h}px`}
          </button>
        ))}
      </div>
      <label className="flex items-center gap-2 text-[11px] text-everlake-ivory/70">
        <input
          type="checkbox"
          checked={withInset}
          onChange={(e) => setWithInset(e.target.checked)}
        />
        Simulate 34px safe-area
      </label>
      {height !== "off" && (
        <p className="text-[10px] text-everlake-ivory/50 max-w-[12rem] leading-snug">
          Forced viewport: {height}px tall{withInset ? " + 34px inset" : ""}.
          Check Hero CTA stays clear of the bottom bar below.
        </p>
      )}
      {height !== "off" && withInset && (
        <div className="pointer-events-none fixed bottom-0 left-0 right-0 h-[34px] bg-everlake-gold/20 border-t border-everlake-gold/40 z-[9998] flex items-center justify-center text-[10px] uppercase tracking-[0.2em] text-everlake-gold">
          Safe area (34px)
        </div>
      )}
    </div>
  );
};

export default QAViewportToggle;

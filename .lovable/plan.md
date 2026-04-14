

## Generate Standalone HTML Email — "Become a Founding VIP"

### What
Create a standalone HTML email file that replicates the VipUpgradeDialog popup design, ready to copy-paste into any email platform (Mailchimp, Klaviyo, Gmail, etc.).

### Design (matching the popup exactly)
- **Dark background**: `#1a1d1e` (hsl 200,10%,10%)
- **Gold accent**: `#c69a3f` (hsl 38,60%,55%)
- **Ivory text**: `#f5f0e8` (hsl 40,33%,96%)
- **Muted text**: `#b8a882` (hsl 40,20%,70%)
- **Fonts**: Playfair Display (heading), DM Sans (body) — with web-safe fallbacks
- **Layout**: Crown icon (emoji fallback), "EXCLUSIVE OPPORTUNITY" badge, "Become a Founding VIP" heading, subtitle, two-column Path A (gold border) vs Path B (grey border) comparison with checkmarks/X marks, reframe line, gold CTA button linking to `https://stay.everlakegeorgia.com/reservation`, footnote

### Content (English, from translations)
- Badge: "Limited-Time Offer"
- Title: "Become a Founding VIP"
- Subtitle: "Your email isn't on the VIP list yet — but you can join right now. Pay $50 today and unlock up to $445 in exclusive perks."
- Path A ("Pay $50 Now"): 3 benefit items with checkmarks
- Path B ("Wait & Do Nothing"): 3 downsides with X marks
- Reframe: "Your $50 isn't a fee — it's applied directly to your stay."
- CTA: "Reserve Your VIP Access"
- Footnote: "You'll be redirected to our reservation page to complete your purchase."

### Technical approach
- Use table-based layout for maximum email client compatibility
- Inline all CSS styles (no external stylesheets)
- Google Fonts via `@import` in a `<style>` block (graceful fallback to Georgia/Arial)
- Two-column comparison uses side-by-side `<td>` cells on desktop, stacks on mobile via media query
- Output as a single `.html` file to `/mnt/documents/`
- QA by converting to image and inspecting

### Deliverable
One file: `everlake-vip-email.html`




## Redesign VIP Upgrade Dialog — Two Paths Format (Keeping Header)

### What Changes
Keep the existing header (badge: "Limited-Time Offer", title: "Become a Founding VIP", subtitle about email not being on VIP list). Replace only the perks list and price section with the two-column "Pay $50 Now" vs "Wait & Do Nothing" comparison.

### Files to Modify

**1. `src/components/landing/VipUpgradeDialog.tsx`**
- Keep: Crown icon, "Limited-Time Offer" badge, "Become a Founding VIP" title, existing subtitle
- Remove: the $50 price block and the 6-perk checklist
- Add: two-column grid (`grid-cols-1 md:grid-cols-2`) below the subtitle
  - Left column (gold border/tint, check icons): "Pay $50 Now" — 3 bullets
  - Right column (muted, X icons): "Wait & Do Nothing" — 3 bullets
- Add below columns: "$50 isn't a fee — it's applied directly to your stay."
- Keep: CTA button and footnote as-is

**2. `src/i18n/translations.ts`**
- Keep existing: `upgrade.badge`, `upgrade.title`, `upgrade.subtitle`, `upgrade.cta`, `upgrade.footnote`
- Remove: `upgrade.perk1` through `upgrade.perk6`
- Add new keys (EN/ES):
  - `upgrade.pathA` — "Pay $50 Now" / "Paga $50 Ahora"
  - `upgrade.pathA1` — "Save up to 40% on your stay (rates from $330 vs. $600)"
  - `upgrade.pathA2` — "Book your preferred dates 15 days before the public"
  - `upgrade.pathA3` — "$100 resort credit + welcome basket included"
  - `upgrade.pathB` — "Wait & Do Nothing" / "Espera y No Hagas Nada"
  - `upgrade.pathB1` — "Pay full price ($600/night)"
  - `upgrade.pathB2` — "Wait 15 extra days to even see the calendar"
  - `upgrade.pathB3` — "Hope your dates are still available after 2,000 VIPs book first"
  - `upgrade.reframe` — "Your $50 isn't a fee — it's applied directly to your stay."

### Design
- Left column: subtle gold border + background tint, gold check icons
- Right column: muted/dim styling, red-muted X icons
- Responsive: side-by-side on md+, stacked on mobile
- Same dark bg, Playfair + DM Sans fonts throughout


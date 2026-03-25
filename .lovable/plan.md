

## Countdown Timer for VIP Section

**What we'll build:** A live countdown timer showing days, hours, and minutes until April 27, 2026, placed between the subtitle and the Shopify products.

### Plan

1. **Create a `CountdownTimer` component** (`src/components/landing/CountdownTimer.tsx`)
   - Uses `useState` + `useEffect` with a `setInterval` (every 60 seconds) to calculate remaining time until April 27, 2026 midnight
   - Displays three styled boxes: Days, Hours, Minutes — matching the dark/gold aesthetic
   - Shows "Offer Expired" message if the date has passed

2. **Add CountdownTimer to VipShopSection**
   - Import and render `<CountdownTimer />` right after the subtitle paragraph (line 127), inside the existing `motion.div` block
   - Add top margin for spacing

### Design
- Three side-by-side boxes with large gold numbers and small ivory labels underneath
- Font styling consistent with existing section (DM Sans, tracking, muted tones)
- Subtle entrance animation via the parent `motion.div`


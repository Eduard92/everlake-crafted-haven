

## Convert VIP Gate to VIP Shop Section Gate with $50 Upgrade Offer

### Overview

Remove the full-page email gate so everyone can browse the site freely. Instead, gate only the VIP Shop section: VIP members enter their email to reveal Shopify products, while non-VIP visitors see a compelling $50 upgrade offer that links to `stay.everlakegeorgia.com/reservation`. After purchase, users are redirected back with automatic access.

### How It Works

1. Visitor browses the entire site freely (no email gate on page load)
2. When they scroll to the VIP Shop section, they see an email input asking for their VIP email
3. **If email matches the Google Sheet** -- the Shopify products are revealed
4. **If email does NOT match** -- a branded popup appears offering VIP access for $50, highlighting the value proposition (save 40%, 15-day early booking access, up to $445 in perks)
5. The popup's CTA links to `https://stay.everlakegeorgia.com/reservation`
6. After purchase, users are redirected back to the site with a URL parameter (e.g., `?vip=unlocked`) that auto-grants access and stores it in localStorage

### Value Proposition (shown in the popup)

- Save 40% on your reservation starting May 1st
- Exclusive 15-day early access to the booking calendar
- $100 Resort Credit
- Welcome Basket (Value $75)
- Founding Guest Status
- Exclusive access to future deals

### Files to Modify

**1. Remove `VipGate` from `src/pages/Index.tsx`**
- Delete the `vipUnlocked` state and conditional rendering
- Render all sections for everyone
- Add logic to check for `?vip=unlocked` URL parameter on mount, and if present, store in localStorage

**2. Modify `src/components/landing/VipShopSection.tsx`**
- Add an inline email gate within this section only
- On valid email: reveal the Shopify products (save to localStorage)
- On invalid email: open a dialog popup with the $50 upgrade offer
- On return visits with localStorage set: show products directly

**3. Create `src/components/landing/VipUpgradeDialog.tsx`**
- Branded modal matching Everlake's dark aesthetic (dark bg, gold accents, editorial fonts)
- Headline: "Become a Founding VIP"
- Value proposition bullets from the reservation page
- Price: $50 USD
- CTA button: "Reserve Your VIP Access" linking to `https://stay.everlakegeorgia.com/reservation`
- Close button to dismiss

**4. Update `src/i18n/translations.ts`**
- Add bilingual translation keys for the VIP upgrade dialog copy, the inline email prompt in the shop section, and the value proposition bullets

### Auto-Unlock via Redirect

When someone completes payment on `stay.everlakegeorgia.com/reservation`, they can be redirected to `https://everlake-crafted-haven.lovable.app/?vip=unlocked`. The Index page detects this parameter and stores VIP status in localStorage, granting immediate access to the shop section without needing to enter an email.

### Technical Details

- The Google Sheet fetch logic moves from `VipGate.tsx` into `VipShopSection.tsx`
- localStorage key `everlake-vip-email` is reused for continuity
- A second localStorage key (e.g., `everlake-vip-purchased`) handles purchased-via-redirect users
- The upgrade dialog uses the existing Radix `Dialog` component from the UI library
- All copy is bilingual (EN/ES) via the existing translation system


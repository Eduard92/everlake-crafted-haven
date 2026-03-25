

## Plan: Replace "How It Works" with the Shopify Coupon Shop

### What changes

The current page has two related sections: **HowItWorksSection** (the 3-step guide) and **VipShopSection** (the Shopify embed). You want the Shopify coupon shop to take the position of the "How It Works" section.

### Implementation

1. **Remove HowItWorksSection** from `Index.tsx` — delete the import and usage.

2. **Move VipShopSection up** in the page order to where HowItWorksSection was (after HideawaysSection, before ExperiencesSection).

3. **Keep the existing Shopify Buy Button integration as-is** — it already uses the Shopify Buy Button JS SDK with your store's domain (`everlake-ga.myshopify.com`) and storefront access token (`4a2a39c0a67d9e67de13c575520cb0d9`), which is a publishable key safe to keep in the codebase. The collection ID `333377003713` pulls your existing coupons.

4. **Optionally delete** `HowItWorksSection.tsx` since it will no longer be used.

### Resulting page order

```text
Hero
Intro
Hideaways
VIP Shop (Shopify coupons) ← moved here
Experiences
Property Map
Location
FAQ
Gallery
Footer
```

### Technical notes

- The Shopify Buy Button SDK is a client-side embed — no backend or API tokens needed beyond the publishable storefront access token already in the code.
- No new dependencies required.


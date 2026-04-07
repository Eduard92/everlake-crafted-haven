

## Email Gate for VIP Access

### Overview
Add a full-screen email gate that visitors must pass before seeing the site. The VIP email list is maintained in a CSV file that can be updated easily. No passwords, no magic links — just enter your email and you're in.

### How It Works

1. Visitor lands on the site → sees a branded gate screen with an email input
2. They enter their email → it's checked against a CSV-based VIP list
3. If the email matches → access is granted, email is stored in localStorage so they don't have to re-enter it on future visits
4. If no match → a friendly message says they're not on the VIP list yet

### Files to Create/Modify

**1. Create `/public/vip-list.csv`**
A simple CSV with one column (`email`). You can update this file anytime to add/remove VIPs. Example:
```
email
john@example.com
maria@example.com
```

**2. Create `src/components/landing/VipGate.tsx`**
- Full-screen overlay matching Everlake branding (dark background, gold accents, editorial fonts)
- Everlake logo at top
- Email input field + "Enter" button
- Fetches `/vip-list.csv` at load, parses it, and checks the entered email (case-insensitive)
- On success: stores email in localStorage, calls a callback to unlock the site
- On failure: shows a message like "This email is not on the VIP list"
- Bilingual support via `useLanguage()` — add translation keys for gate text

**3. Modify `src/pages/Index.tsx`**
- Add state: `const [vipUnlocked, setVipUnlocked] = useState(false)`
- On mount, check localStorage for a previously verified email
- If not unlocked, render `<VipGate onUnlock={() => setVipUnlocked(true)} />` instead of the page content

**4. Update `src/i18n/translations.ts`**
Add translation keys for:
- Gate heading (e.g., "Exclusive VIP Access")
- Input placeholder
- Button text
- Error message for non-VIP emails
- Success/welcome message

### Technical Details
- CSV is fetched client-side from `/public/vip-list.csv` — no backend needed
- Email comparison is case-insensitive and trimmed
- localStorage key: `everlake-vip-email`
- The CSV approach means you can swap in an updated file anytime without code changes
- If you later want to use a Google Sheet, you can publish it as CSV and fetch the published URL instead

### Security Note
This is a soft gate — it's not cryptographically secure since the CSV is publicly accessible. It's designed to reduce friction and filter casual visitors, not to protect sensitive data. If stronger security is needed later, we can add a Supabase-backed check.




## Add Facebook Pixel + Google Analytics 4

### IDs
- **Facebook Pixel**: `760845936505991`
- **GA4 Measurement**: `G-XRPMZTPYYW`

### Implementation

**Edit `index.html`** — add both scripts to `<head>`, and Facebook `<noscript>` to `<body>`:

1. **GA4**: Add the standard `gtag.js` async script and config snippet with `G-XRPMZTPYYW`
2. **Facebook Pixel**: Add the Meta Pixel base code with ID `760845936505991`, plus the `<noscript><img>` fallback inside `<body>` (not `<head>`, per HTML5 rules)

Single file change. No dependencies or packages needed — both are inline script tags.


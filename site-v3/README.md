# Apollo Paints — site-v3

Single-page React + Vite rebuild of apollopaintsglobal.com. Replaces `site-v2/`
(static multi-page) and `site/` (v1 prototype, do not deploy — it contains
placeholder content and invented certifications).

## Local

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # -> dist/
npm run preview
```

## Cloudflare Pages settings

| Setting                | Value        |
| ---------------------- | ------------ |
| Root directory         | `site-v3`    |
| Build command          | `npm run build` |
| Build output directory | `dist`       |

Changing these in the Pages dashboard is required. The project currently builds
from `site/`; pushing this folder alone will not change what is served.

## Enquiry form

Both forms (`Contact.tsx` and the product modal in `Products.tsx`) POST to
FormSubmit via `src/lib/submitInquiry.ts`, delivering to
`sales@apollopaintsglobal.com`.

FormSubmit does not forward anything until that address is confirmed once —
it emails an activation link on the first submission. Send one test enquiry
after deploying and have Karan click the link, or nothing arrives.

## Known gaps

- Industry images are hotlinked from Unsplash; localise them into `public/`.
- `_redirects` maps the old `.html` URLs to the new anchors.

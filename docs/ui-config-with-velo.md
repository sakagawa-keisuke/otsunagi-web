UI Control via Velo + SiteConfig

Goal
- Switch visible UI (banner on/off, hero variant A/B, text and image) without changing layout in the editor, by updating Content Manager.

Prereqs
- Content Manager collection `SiteConfig` with primary key `main` and fields:
  - `showBanner` (boolean)
  - `layoutVariant` (text: expected `A` or `B`)
  - `heroTitle` (text)
  - `heroImage` (image or text URL)
- Page elements with IDs (create as needed):
  - `#promoStrip`, `#heroA`, `#heroB`, `#heroTitleA`, `#heroTitleB`, `#heroImageA`, `#heroImageB`

What’s included
- `src/public/site-config-controls.js`: Loads `SiteConfig` and applies values.
- `src/pages/masterPage.js`: Calls `applySiteConfig()` on page ready.

How it works
- On every page load, `applySiteConfig()` reads `SiteConfig/main` and:
  - Expands/Collapses `#promoStrip` based on `showBanner`.
  - Shows `#heroA` or `#heroB` based on `layoutVariant`.
  - Sets title/image on matching hero elements if present.
- All operations are safe if elements do not exist.

Updating from MCP
- Use the included MCP server in `/wix-mcp` from Claude Desktop.
- Example to switch layout variant to B and show the banner:
  - tool: `wix_request`
  - input:
    {
      "method": "PATCH",
      "path": "/content/v4/collections/SiteConfig/items/main",
      "body": { "data": { "showBanner": true, "layoutVariant": "B" } }
    }

Notes
- Ensure `SiteConfig` read permissions allow public read, write restricted to admins.
- Extend `site-config-controls.js` with additional mappings as needed (IDs and fields).


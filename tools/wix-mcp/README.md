Wix MCP Server (in-repo)

Setup
- Node 18+
- Install SDK in this folder:
  - `npm init -y && npm i @modelcontextprotocol/sdk`
- Env vars:
  - `WIX_ACCESS_TOKEN` (required)
  - `WIX_SITE_ID` (optional)

Claude Desktop config
{
  "mcpServers": {
    "wix": {
      "command": "node",
      "args": ["<abs-path>/tools/wix-mcp/server.mjs"],
      "env": {
        "WIX_ACCESS_TOKEN": "<token>",
        "WIX_SITE_ID": "<siteId>"
      }
    }
  }
}

Tools
- `wix_request` generic REST
- `update_site_config` convenience PATCH for `SiteConfig/main`
- `update_collection_item` generic item PATCH

Examples
- Update SiteConfig:
  { "data": { "showBanner": true, "layoutVariant": "B" } }


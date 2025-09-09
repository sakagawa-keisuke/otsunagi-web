import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const server = new Server(
  { name: "wix-mcp", version: "0.1.0" },
  { capabilities: { tools: {} } }
);

const BASE_URL = "https://www.wixapis.com";
const ACCESS_TOKEN = process.env.WIX_ACCESS_TOKEN;
const DEFAULT_SITE_ID = process.env.WIX_SITE_ID;

if (!ACCESS_TOKEN) {
  console.error("WIX_ACCESS_TOKEN is required.");
  process.exit(1);
}

server.tool(
  "wix_request",
  {
    description:
      "Call Wix REST API. Provide method, path (e.g. /site-properties/v4/sites/{siteId}), optional query/body/headers. Adds Authorization automatically.",
    inputSchema: {
      type: "object",
      properties: {
        method: { type: "string", enum: ["GET", "POST", "PUT", "PATCH", "DELETE"] },
        path: { type: "string", description: "Path starting with / under wixapis.com" },
        query: { type: "object", additionalProperties: true },
        body: { type: "object", additionalProperties: true },
        headers: { type: "object", additionalProperties: true },
        siteId: { type: "string", description: "Overrides default WIX_SITE_ID" }
      },
      required: ["method", "path"]
    }
  },
  async ({ input }) => {
    const { method, path, query = {}, body, headers = {}, siteId } = input;

    if (!path.startsWith("/")) {
      throw new Error("path must start with '/' (relative to wixapis.com)");
    }
    const url = new URL(BASE_URL + path);
    for (const [k, v] of Object.entries(query)) {
      url.searchParams.set(k, String(v));
    }

    const finalHeaders = {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      "Content-Type": "application/json",
      ...headers
    };

    const effectiveSiteId = siteId || DEFAULT_SITE_ID;
    if (effectiveSiteId && !("wix-site-id" in headers)) {
      finalHeaders["wix-site-id"] = effectiveSiteId;
    }

    const res = await fetch(url, {
      method,
      headers: finalHeaders,
      body: ["POST", "PUT", "PATCH"].includes(method) && body ? JSON.stringify(body) : undefined
    });

    const text = await res.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      data = text;
    }

    if (!res.ok) {
      return {
        content: [
          { type: "text", text: JSON.stringify({ status: res.status, data }, null, 2) }
        ],
        isError: true
      };
    }

    return {
      content: [
        { type: "text", text: JSON.stringify({ status: res.status, data }, null, 2) }
      ]
    };
  }
);

// Convenience tool: update_site_config (PATCH)
server.tool(
  "update_site_config",
  {
    description: "Patch Content Manager SiteConfig/main with provided fields.",
    inputSchema: {
      type: "object",
      properties: {
        data: { type: "object", additionalProperties: true }
      },
      required: ["data"]
    }
  },
  async ({ input }) => {
    const url = new URL(BASE_URL + "/content/v4/collections/SiteConfig/items/main");
    const headers = {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      "Content-Type": "application/json"
    };
    if (DEFAULT_SITE_ID) headers["wix-site-id"] = DEFAULT_SITE_ID;

    const res = await fetch(url, {
      method: "PATCH",
      headers,
      body: JSON.stringify({ data: input.data })
    });

    const bodyText = await res.text();
    let data;
    try { data = JSON.parse(bodyText); } catch { data = bodyText; }
    return {
      content: [{ type: "text", text: JSON.stringify({ status: res.status, data }, null, 2) }],
      isError: !res.ok
    };
  }
);

// Generic tool: update_collection_item (PATCH)
server.tool(
  "update_collection_item",
  {
    description: "Patch any Content Manager item by collectionId and itemId.",
    inputSchema: {
      type: "object",
      properties: {
        collectionId: { type: "string" },
        itemId: { type: "string" },
        data: { type: "object", additionalProperties: true }
      },
      required: ["collectionId", "itemId", "data"]
    }
  },
  async ({ input }) => {
    const { collectionId, itemId, data: patch } = input;
    const url = new URL(BASE_URL + `/content/v4/collections/${encodeURIComponent(collectionId)}/items/${encodeURIComponent(itemId)}`);
    const headers = {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      "Content-Type": "application/json"
    };
    if (DEFAULT_SITE_ID) headers["wix-site-id"] = DEFAULT_SITE_ID;

    const res = await fetch(url, {
      method: "PATCH",
      headers,
      body: JSON.stringify({ data: patch })
    });
    const bodyText = await res.text();
    let data;
    try { data = JSON.parse(bodyText); } catch { data = bodyText; }
    return {
      content: [{ type: "text", text: JSON.stringify({ status: res.status, data }, null, 2) }],
      isError: !res.ok
    };
  }
);

const transport = new StdioServerTransport();
server.connect(transport);


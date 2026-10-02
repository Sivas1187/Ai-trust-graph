export interface Env {
  NEO4J_HTTP_URL: string;
  NEO4J_USERNAME: string;
  NEO4J_PASSWORD: string;
  NEO4J_DATABASE?: string;
}

type Neo4jResponse = {
  results?: Array<{ data?: Array<{ row?: unknown[] }> }>;
  errors?: Array<{ code?: string; message?: string }>;
};

const SNAPSHOT_QUERY = `
MATCH (n)
WHERE n.atgPublicDemo = true
OPTIONAL MATCH (n)-[r]->(m)
WHERE m.atgPublicDemo = true
WITH
  collect(DISTINCT {
    id: n.id,
    type: n.type,
    label: n.label,
    summary: n.summary,
    x: n.displayX,
    y: n.displayY
  }) AS nodes,
  collect(DISTINCT CASE WHEN r IS NULL THEN null ELSE {
    id: r.id,
    from: n.id,
    to: m.id,
    type: type(r),
    label: r.label,
    conditions: r.conditions,
    state: r.state
  } END) AS relationships
RETURN nodes, relationships
`;

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
      "x-content-type-options": "nosniff",
    },
  });
}

async function runSnapshot(env: Env) {
  const database = env.NEO4J_DATABASE || "neo4j";
  const base = env.NEO4J_HTTP_URL.replace(/\/$/, "");
  const endpoint = `${base}/db/${encodeURIComponent(database)}/tx/commit`;
  const authorization = "Basic " + btoa(`${env.NEO4J_USERNAME}:${env.NEO4J_PASSWORD}`);

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      authorization,
      "content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({ statements: [{ statement: SNAPSHOT_QUERY }] }),
  });

  if (!response.ok) throw new Error(`Neo4j HTTP ${response.status}`);
  const payload = (await response.json()) as Neo4jResponse;
  if (payload.errors?.length) throw new Error(payload.errors[0].message || "Neo4j query failed");

  const row = payload.results?.[0]?.data?.[0]?.row;
  if (!row || !Array.isArray(row[0]) || !Array.isArray(row[1])) {
    throw new Error("Unexpected Neo4j response shape");
  }

  return {
    nodes: row[0],
    relationships: row[1].filter(Boolean),
    generatedAt: new Date().toISOString(),
  };
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (request.method !== "GET") return json({ error: "method_not_allowed" }, 405);

    if (url.pathname === "/graph-api/health") {
      return json({ ok: true, service: "ai-trust-graph-graph-api" });
    }

    if (url.pathname !== "/graph-api/snapshot") {
      return json({ error: "not_found" }, 404);
    }

    if (!env.NEO4J_HTTP_URL || !env.NEO4J_USERNAME || !env.NEO4J_PASSWORD) {
      return json({ error: "neo4j_not_configured" }, 503);
    }

    try {
      return json(await runSnapshot(env));
    } catch {
      // Do not expose database URLs, credentials, Cypher internals or upstream error text.
      return json({ error: "graph_backend_unavailable" }, 503);
    }
  },
};

# Neo4j-backed graph API

This directory is an optional implementation layer for the AI Trust Graph website. It does **not** change the public methodology, bind the methodology to Neo4j, or make the database a source of methodological authority.

## Architecture

```
aitrustgraph.org/graph/
        |
        | GET /graph-api/snapshot
        v
Cloudflare Worker (same-origin route)
        |
        | fixed read-only Cypher
        v
Neo4j / Neo4j Aura
```

The website always ships a synthetic fallback. If this Worker is unavailable or not configured, the graph page remains usable and explicitly says that it is showing the bundled synthetic example.

## Security boundary

The browser never receives Neo4j credentials. The Worker exposes only two fixed GET routes:

- `/graph-api/health`
- `/graph-api/snapshot`

It does not accept arbitrary Cypher, query parameters, writes, or credentials from the browser. Upstream error text is not returned to clients.

## Configure Neo4j

1. Create a Neo4j database or Aura instance for public demonstration data.
2. Use a dedicated **read-only** database user for the Worker.
3. Run `seed.cypher` against the demonstration database.
4. Confirm only nodes intended for public display have `atgPublicDemo = true`.

The seed is synthetic. Do not load client, employer, confidential or production assessment data into this public demonstration database.

## Configure Worker secrets

From this directory:

```bash
npm install
npx wrangler secret put NEO4J_HTTP_URL
npx wrangler secret put NEO4J_USERNAME
npx wrangler secret put NEO4J_PASSWORD
npm run deploy
```

`NEO4J_DATABASE` defaults to `neo4j` in `wrangler.toml`.

## Same-origin production route

After deploying the Worker, add a Cloudflare Worker route for:

```
aitrustgraph.org/graph-api/*
```

Do not proxy the browser directly to the Neo4j host and do not add the Neo4j origin to the website CSP. The existing website CSP already permits same-origin `connect-src 'self'`, which is the intended boundary.

## Verify

```bash
curl -i https://aitrustgraph.org/graph-api/health
curl -i https://aitrustgraph.org/graph-api/snapshot
```

Then open:

```
https://aitrustgraph.org/graph/
```

The source label should change from **Bundled synthetic example** to **Neo4j-backed snapshot**.

## Vendor-neutrality

Artifact #13 is explicitly non-normative and says the methodology can be implemented on any property-graph or RDF-reducible engine. This Worker is therefore an implementation demonstration only. If it conflicts with Artifacts #1–#12, the methodology governs and this implementation is wrong.

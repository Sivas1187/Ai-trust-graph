"use client";

import { useEffect, useState } from "react";
import { artifacts, companion, links, release } from "../../content";
import { artifactGroups, artifactMeta, type ArtifactGroup } from "../../site-content";

/**
 * Artifact library with filters. Status comes from the manifest: the twelve
 * normative artifacts are in the 1.0-rc.4 public-release candidate; #13 is a
 * non-normative companion. No artifact is "published" in the final sense yet,
 * so that filter shows an explanation instead of an empty grid. Without
 * JavaScript the filters are not rendered and every artifact is listed.
 */
type Filter = "all" | "foundation" | "assessment" | "execution" | "published" | "rc";
const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "foundation", label: "Foundation" },
  { id: "assessment", label: "Assessment" },
  { id: "execution", label: "Execution" },
  { id: "published", label: "Published" },
  { id: "rc", label: "Release candidate" },
];

type Row = {
  n: number;
  title: string;
  version: string;
  file: string;
  role: string;
  group: ArtifactGroup;
  dependsOn: number[];
  status: "rc" | "companion";
};

const rows: Row[] = [...artifacts, companion]
  .map((a) => ({
    n: a.n,
    title: a.title,
    version: a.version,
    file: a.file,
    role: a.role,
    group: artifactMeta[a.n].group,
    dependsOn: artifactMeta[a.n].dependsOn,
    status: (a.n === companion.n ? "companion" : "rc") as Row["status"],
  }))
  .sort((x, y) => x.n - y.n);

function matches(r: Row, f: Filter) {
  if (f === "all") return true;
  if (f === "published") return false;
  if (f === "rc") return r.status === "rc";
  return r.group === f;
}

export function ArtifactLibrary() {
  const [enhanced, setEnhanced] = useState(false);
  const [filter, setFilter] = useState<Filter>("all");
  useEffect(() => setEnhanced(true), []);
  const shown = enhanced ? rows.filter((r) => matches(r, filter)) : rows;

  return (
    <div className="library">
      {enhanced && (
        <div className="libFilters" role="group" aria-label="Filter artifacts">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              className="libFilter"
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>
      )}
      <p className="libCount" aria-live="polite">
        {shown.length === 0
          ? "No artifacts are published as a final release yet."
          : `Showing ${shown.length} of ${rows.length} artifacts.`}
      </p>
      {shown.length === 0 && (
        <p className="libEmpty">
          All twelve normative artifacts are in public-release candidate {release.bundle}. Final publication waits on the
          pending independent review gates listed under Status.
        </p>
      )}
      {artifactGroups.map((g) => {
        const items = shown.filter((r) => r.group === g.key);
        if (items.length === 0) return null;
        return (
          <section key={g.key} className={`libGroup libGroup-${g.key}`} aria-labelledby={`lib-${g.key}`}>
            <h3 id={`lib-${g.key}`} className="libGroupTitle">
              {g.label} <span className="libGroupNote">{g.note}</span>
            </h3>
            <ul className="libList">
              {items.map((r) => (
                <li key={r.n} className="libItem">
                  <p className="libNum" aria-hidden="true">
                    #{r.n}
                  </p>
                  <h4 className="libTitle">
                    <a href={links.doc(r.file)} rel="noopener noreferrer">
                      <span className="visuallyHidden">Artifact {r.n}: </span>
                      {r.title}
                      <span className="visuallyHidden"> (opens GitHub)</span>
                    </a>
                  </h4>
                  <p className="libRole">{r.role}</p>
                  <dl className="libMeta">
                    <div>
                      <dt>Version</dt>
                      <dd>{r.version}</dd>
                    </div>
                    <div>
                      <dt>Status</dt>
                      <dd>
                        <span className={`libStatus libStatus-${r.status}`}>
                          {r.status === "rc" ? "Release candidate" : "Non-normative companion"}
                        </span>
                      </dd>
                    </div>
                    <div>
                      <dt>Depends on</dt>
                      <dd>{r.dependsOn.length ? r.dependsOn.map((d) => `#${d}`).join(", ") : "None stated"}</dd>
                    </div>
                    <div>
                      <dt>Format</dt>
                      <dd>Markdown on GitHub</dd>
                    </div>
                  </dl>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}

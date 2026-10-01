import { artifacts, companion, links, release, scale } from "../content";
import { MarginReference } from "./Marginalia";

/**
 * Canonical source — the governed artifacts, set as a publication's table of
 * contents rather than a grid of cards.
 *
 * The METHODOLOGY_MANIFEST (the authority map) comes first, then where the
 * model's figures are defined, then the twelve normative artifacts in the
 * manifest's recommended reading order, then the non-normative companion.
 * Every link is pinned to the bundle commit (links.doc / links.manifest); the
 * website explains, the artifacts decide.
 */
export function CanonicalSource() {
  return (
    <section id="methodology" className="sourceAct" aria-labelledby="methodology-title">
      <div className="actFrame">
        <div className="actIntro">
          <MarginReference className="marginRefSide">
            <a href={links.manifest} rel="noopener noreferrer">
              Manifest
            </a>{" "}
            §2 · §4
          </MarginReference>
          <h2 id="methodology-title" className="actTitle">
            Read the methodology itself.
          </h2>
          <p className="actLede">
            This website explains; the artifacts on GitHub decide. Listed in the recommended reading order from the{" "}
            <a href={links.manifest} rel="noopener noreferrer">
              Methodology Manifest
            </a>
            .
          </p>
        </div>

        <div className="sourceManifest">
          <p className="sourceMeta">
            <span>Authority map</span>
            <span aria-hidden="true"> · </span>
            <span className="visuallyHidden">, </span>
            <span>Bundle {release.bundle}</span>
          </p>
          <p className="sourceManifestTitle">
            <a href={links.manifest} rel="noopener noreferrer">
              METHODOLOGY_MANIFEST
            </a>
          </p>
          <p className="sourceRole">
            Single canonical authority/dependency map and exact artifact-content registry for this repository
            snapshot.
          </p>
        </div>

        <dl className="sourceDefined" aria-label="Where the model's structure is defined">
          <div>
            <dt>
              {scale.domains} domains · {scale.controls} canonical controls
            </dt>
            <dd>Artifact #5</dd>
          </div>
          <div>
            <dt>
              {scale.capabilities} maturity capabilities · {scale.maturityLevels}
            </dt>
            <dd>Artifact #3 · cumulative, evidence-gated, not an average of control scores</dd>
          </div>
          <div>
            <dt>Evidence grades {scale.evidenceGrades}</dt>
            <dd>Artifact #6</dd>
          </div>
        </dl>

        <ol className="sourceList" aria-label="Normative artifacts, in the manifest's recommended reading order">
          {artifacts.map((a) => (
            <li key={a.n} className="sourceItem">
              <span className="sourceNum">Artifact #{a.n}</span>
              <a className="sourceTitle" href={links.doc(a.file)} rel="noopener noreferrer">
                {a.title}
              </a>
              <span className="sourceRole">{a.role}</span>
              <span className="sourceVersion">v{a.version}</span>
            </li>
          ))}
        </ol>

        <p className="sourceCompanion">
          <span className="sourceNum">
            Artifact #{companion.n} · Phase 2 companion
          </span>{" "}
          <a className="sourceTitle" href={links.doc(companion.file)} rel="noopener noreferrer">
            {companion.title}
          </a>{" "}
          <span className="sourceRole">
            <i>Non-normative.</i> {companion.role}. Informative only; carries no conformance weight.
          </span>
        </p>

        <MarginReference className="marginRefEnd actRefEnd">
          <a href={links.manifest} rel="noopener noreferrer">
            METHODOLOGY_MANIFEST
          </a>{" "}
          §2 · §4
        </MarginReference>
      </div>
    </section>
  );
}

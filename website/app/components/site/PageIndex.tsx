import { DepthControl } from "./DepthControl";

/** "On this page" with the reading-depth control. Website navigation only. */
const items = [
  { href: "#why", label: "Why it exists" },
  { href: "#methodology", label: "Outcomes" },
  { href: "#graph", label: "The graph" },
  { href: "#flow", label: "Reasoning chain" },
  { href: "#authority", label: "Authority" },
  { href: "#unknown", label: "Evidence and UNKNOWN" },
  { href: "#domains", label: "Domains" },
  { href: "#lifecycle", label: "Lifecycle" },
  { href: "#example", label: "Worked example" },
  { href: "#frameworks", label: "Frameworks" },
  { href: "#artifacts", label: "Artifacts" },
  { href: "#publications", label: "Publications" },
  { href: "#author", label: "Author" },
  { href: "#status", label: "Status and review" },
];

export function PageIndex() {
  return (
    <nav id="page-index" className="pageIndex" aria-labelledby="page-index-title">
      <div className="container pageIndexInner">
        <h2 id="page-index-title" className="pageIndexTitle">
          On this page
        </h2>
        <ol className="pageIndexList">
          {items.map((i, n) => (
            <li key={i.href}>
              <a href={i.href}>
                <span className="pageIndexNum" aria-hidden="true">
                  {String(n + 1).padStart(2, "0")}
                </span>
                {i.label}
              </a>
            </li>
          ))}
        </ol>
        <DepthControl />
      </div>
    </nav>
  );
}

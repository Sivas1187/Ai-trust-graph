import { AuthorityDistinction } from "./components/site/AuthorityDistinction";
import { Domains } from "./components/site/Domains";
import { EvidenceUnknown } from "./components/site/EvidenceUnknown";
import { Hero } from "./components/site/Hero";
import { AboutAuthor, Artifacts, Frameworks, Publications, StatusReview } from "./components/site/LaterSections";
import { Lifecycle } from "./components/site/Lifecycle";
import { Methodology } from "./components/site/Methodology";
import { PageIndex } from "./components/site/PageIndex";
import { ReasoningChain } from "./components/site/ReasoningChain";
import { SiteFooter } from "./components/site/SiteFooter";
import { SiteHeader } from "./components/site/SiteHeader";
import { WhyItExists } from "./components/site/WhyItExists";
import { WorkedExampleSection } from "./components/site/WorkedExampleSection";

/**
 * Home page. Section order follows the redesign brief; ids preserve every
 * deep link of the previous site (#problem, #methodology, #flow, #authority,
 * #breakpoints, #evidence, #decision, #domains, #unknown, #lifecycle,
 * #status, #review, #page-index). check-links fails the build on any
 * unresolved fragment.
 */
export default function Home() {
  return (
    <>
      <a className="skipLink" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <Hero />
        <PageIndex />
        <WhyItExists />
        <Methodology />
        <ReasoningChain />
        <AuthorityDistinction />
        <EvidenceUnknown />
        <Domains />
        <Lifecycle />
        <WorkedExampleSection />
        <Frameworks />
        <Artifacts />
        <Publications />
        <AboutAuthor />
        <StatusReview />
      </main>
      <SiteFooter />
    </>
  );
}

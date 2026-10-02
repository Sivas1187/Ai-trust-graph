import { AuthorityDistinction } from "./components/site/AuthorityDistinction";
import { BigIdea } from "./components/site/BigIdea";
import { Domains } from "./components/site/Domains";
import { EvidenceUnknown } from "./components/site/EvidenceUnknown";
import { Hero } from "./components/site/Hero";
import { AboutAuthor, Artifacts, Publications, StatusReview } from "./components/site/LaterSections";
import { Lifecycle } from "./components/site/Lifecycle";
import { MethodologyIntro, Signature } from "./components/site/Methodology";
import { Problem } from "./components/site/Problem";
import { ReasoningChain } from "./components/site/ReasoningChain";
import { SiteFooter } from "./components/site/SiteFooter";
import { SiteHeader } from "./components/site/SiteHeader";
import { WhyItExists } from "./components/site/WhyItExists";
import { WorkedExampleSection } from "./components/site/WorkedExampleSection";

/**
 * Home page: the research narrative, in the mandatory order.
 *   1 Why AI Trust Graph exists (hero + #why)   2 The problem (#problem)
 *   3 The big idea (#big-idea, with #frameworks) 4 The signature visual (#graph)
 *   5 The methodology (#methodology): 5.1 #flow (#decision), 5.2 #authority
 *     (#breakpoints), 5.3 #unknown (#evidence), 5.4 #domains, 5.5 #lifecycle,
 *     5.6 #example
 *   6 The artifacts (#artifacts)  7 Publications (#publications)
 *   8 About the author (#author)  then review and status (#status, #review)
 * Every anchor of the previous version still resolves; check-links fails the
 * build on any unresolved fragment and check-claims pins the order.
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
        <WhyItExists />
        <Problem />
        <BigIdea />
        <Signature />
        <MethodologyIntro />
        <ReasoningChain />
        <AuthorityDistinction />
        <EvidenceUnknown />
        <Domains />
        <Lifecycle />
        <WorkedExampleSection />
        <Artifacts />
        <Publications />
        <AboutAuthor />
        <StatusReview />
      </main>
      <SiteFooter />
    </>
  );
}

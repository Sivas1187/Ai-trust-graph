import type { Metadata } from "next";
import { links } from "../content";
import { SimplePage } from "../components/site/SimplePage";

export const metadata: Metadata = {
  title: "Privacy notice",
  description: "How the AI Trust Graph website handles visitor data: no analytics, no cookies, no trackers.",
  alternates: { canonical: "/privacy/" },
};

export default function Privacy() {
  return (
    <SimplePage title="Privacy notice">
      <p>This website does not use analytics, advertising, cookies, trackers or browser storage. It has no forms and no accounts.</p>
      <p>
        Pages, fonts and scripts are served from this site only. The interactive graph page may request a graph snapshot
        from this same site; if that request fails, it uses bundled synthetic data.
      </p>
      <p>
        The site is hosted on Cloudflare Pages. As the hosting provider, Cloudflare processes technical request data,
        such as IP addresses, to deliver and protect the site, under its own privacy policy.
      </p>
      <p>
        Links to GitHub take you to a separate service with its own terms and privacy policy. To raise a question about
        this notice, open an issue in the{" "}
        <a href={links.repo} rel="noopener noreferrer">
          GitHub repository
        </a>
        .
      </p>
    </SimplePage>
  );
}

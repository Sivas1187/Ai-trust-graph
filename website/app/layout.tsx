import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Trust Graph | Graph-based AI assurance",
  description:
    "AI Trust Graph is a public-release-candidate methodology for graph-based, evidence-driven assurance across connected AI systems.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

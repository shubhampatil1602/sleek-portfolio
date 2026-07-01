import { Metadata } from "next";
import { LinksPageContent } from "./links-page-content";

export const metadata: Metadata = {
  title: "Links | Shubham Patil",
  description: "All the important links to find Shubham Patil on the internet.",
};

export default function LinksPage() {
  return <LinksPageContent />;
}

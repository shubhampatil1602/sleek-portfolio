import { Metadata } from "next";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { ProjectList } from "@/components/project-list";
import { projects } from "@/constants/projects";
import { Scales } from "@/components/scales";
import { SubHeading } from "@/components/sub-heading";

export const metadata: Metadata = {
  title: "Projects | Shubham Patil",
  description:
    "Web products Shubham Patil has built and deployed: SnackDesk, Finance Snapshot and PR Pilot.",
};

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-4 pt-20 sm:px-8 md:pb-10">
        <Scales />
        <Heading>Projects</Heading>
        <SubHeading as="p">
          Web products I&apos;ve built and deployed end to end, from the
          database to the UI.
        </SubHeading>
        <ProjectList projects={projects} />
      </Container>
    </div>
  );
}

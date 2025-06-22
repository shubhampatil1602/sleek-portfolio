import { Metadata } from "next";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Projects } from "@/components/projects";
import { Scales } from "@/components/scales";
import { SubHeading } from "@/components/sub-heading";

export const metadata: Metadata = {
  title: "Projects | Shubham Patil",
  description:
    "Explore my projects showcasing my skills in software development, including web applications, tools, and more. Each project reflects my passion for coding and problem-solving.",
};

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-4 pt-20 sm:px-8 md:pb-10">
        <Scales />
        <Heading>Projects</Heading>
        <SubHeading>
          I&apos;m a passionate software engineer dedicated to crafting elegant
          solutions for complex problems. With expertise in full-stack
          development, I enjoy building user-centric applications that make a
          difference.
        </SubHeading>
        <Projects />
      </Container>
    </div>
  );
}

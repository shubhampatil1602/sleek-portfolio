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
          These projects reflect my journey in building web applications using
          modern frontend tools. Along the way, I’am also exploring backend
          concepts like API design and authentication to better understand how
          full-stack systems work.
        </SubHeading>
        <Projects />
      </Container>
    </div>
  );
}

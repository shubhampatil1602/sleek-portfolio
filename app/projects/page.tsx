import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Projects } from "@/components/projects";
import { SubHeading } from "@/components/sub-heading";

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-10 md:pb-10 md:pt-20">
        <Heading>Projects</Heading>
        <SubHeading>
          I&apos;m a passionate software engineer dedicated to crafting elegant
          solutions for complex problems. With expertise in full-stack
          development, I enjoy building user-centric applications that make a
          difference.
        </SubHeading>

        <p className="max-w-lg pt-4 text-sm text-secondary md:text-sm">
          I love building things
        </p>
        <Projects />
      </Container>
    </div>
  );
}

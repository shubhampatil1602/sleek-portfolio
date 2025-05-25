import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { LandingBlogs } from "@/components/landing-blogs";
import { Projects } from "@/components/projects";
import { SubHeading } from "@/components/sub-heading";
import { Testimonials } from "@/components/testimonials";

import { projects } from "@/constants/projects";

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-10 md:pb-10 md:pt-20">
        <Heading>Shubham Patil</Heading>
        <SubHeading>
          I&apos;m a software engineer with a passion for building scalable and
          efficient systems. I&apos;m currently working as an intern and looking
          for a frontend engineer or full stack engineer role.
        </SubHeading>
        <Projects projects={projects.slice(0, 3)} />
        <LandingBlogs />
        <Testimonials />
      </Container>
    </div>
  );
}

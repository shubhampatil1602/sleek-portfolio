import { Container } from "@/components/container";
import { CallToAction } from "@/components/cta";
import { Heading } from "@/components/heading";
import { LandingBlogs } from "@/components/landing-blogs";
import { Projects } from "@/components/projects";
import { Scales } from "@/components/scales";
import { SubHeading } from "@/components/sub-heading";
import { Testimonials } from "@/components/testimonials";
import { Work } from "@/components/work";

import { projects } from "@/constants/projects";
import { workData } from "@/constants/work";

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-4 pt-20 md:px-8 md:pb-10">
        <Scales />
        <Heading>Shubham Patil</Heading>
        <SubHeading>
          Full Stack Dev from India. Open to freelance work, remote roles, and
          full-time opportunities. Have an idea or project? Let’s connect for a{" "}
          <a
            className="text-blue-500 hover:underline"
            href="https://cal.com/shubhampatil1602/15min"
            target="_blank"
            rel="noopener noreferrer"
          >
            quick chat
          </a>
          .
        </SubHeading>
        <Projects projects={projects.slice(0, 3)} />
        <LandingBlogs />
        <Work work={workData} />
        <Testimonials />
        <CallToAction />
      </Container>
    </div>
  );
}

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
          Focused on sharp pixels and clean JavaScript, delivering digital
          experiences that are both beautiful and easy to use.
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

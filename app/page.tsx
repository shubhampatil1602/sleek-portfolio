import { LinkButton } from "@/components/button";
import { Container } from "@/components/container";
import { CallToAction } from "@/components/cta";
import { Heading } from "@/components/heading";
import { LandingBlogs } from "@/components/landing-blogs";
import { Testimonials } from "@/components/testimonials";
import { Projects } from "@/components/projects";
import { Scales } from "@/components/scales";
import { SubHeading } from "@/components/sub-heading";
import { Work } from "@/components/work";

import { projects } from "@/constants/projects";
import { workData } from "@/constants/work";
import { CAL_URL, EMAIL, GITHUB_URL, RESUME_URL } from "@/lib/constants";

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-4 pt-20 md:px-8 md:pb-10">
        <Scales />
        <Heading>Shubham Patil</Heading>
        <SubHeading as="p">
          Full-stack engineer from India. I build and ship web products end to
          end. I work mostly in Next.js, TypeScript and PostgreSQL.
        </SubHeading>
        <div className="flex flex-wrap gap-2 px-4 pt-5">
          <LinkButton href={RESUME_URL}>Resume</LinkButton>
          <LinkButton href={`mailto:${EMAIL}`}>Email</LinkButton>
          <LinkButton href={GITHUB_URL}>GitHub</LinkButton>
          <LinkButton href={CAL_URL}>Book a 15-min call</LinkButton>
        </div>
        <Projects projects={projects.slice(0, 3)} />
        <LandingBlogs />
        <Work work={workData} />
        <Testimonials />
        <CallToAction />
      </Container>
    </div>
  );
}

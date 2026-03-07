import { Metadata } from "next";
import { Collage } from "@/components/collage";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Scales } from "@/components/scales";
import { SectionHeading } from "@/components/section-heading";
import { SubHeading } from "@/components/sub-heading";
import { Timeline } from "@/components/timeline";

export const metadata: Metadata = {
  title: "About | Shubham Patil",
  description:
    "This is Shubham Patil's portfolio about page, showcasing his journey, skills, and experiences as a software engineer.",
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-4 pt-20 sm:px-8 md:pb-10">
        <Scales />
        <Heading>About Me</Heading>
        <SubHeading>
          I&apos;m a software engineer who enjoys building web applications and
          exploring how systems work behind the scenes. My main interest lies in
          backend development — designing APIs, handling data, and understanding
          the architecture that powers modern web apps.
        </SubHeading>
        <SectionHeading className="mx-4">I Love Travelling</SectionHeading>
        <Collage />

        <Timeline />
      </Container>
    </div>
  );
}

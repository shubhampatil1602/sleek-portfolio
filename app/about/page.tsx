import { Collage } from "@/components/collage";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Scales } from "@/components/scales";
import { SectionHeading } from "@/components/section-heading";
import { SubHeading } from "@/components/sub-heading";
import { Timeline } from "@/components/timeline";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-8 md:pb-10 md:pt-20">
        <Scales />
        <Heading>About Me</Heading>
        <SubHeading>
          I’m a frontend engineer focused on building reliable, responsive web
          applications using React and Tailwind CSS. I care about clean code,
          good design, and solving real problems through thoughtful development.
          Currently, I’m expanding my skills by learning full-stack development
          to build more complete and scalable solutions.
        </SubHeading>
        <SectionHeading className="max-w-lg px-4 pt-4 text-sm text-secondary md:text-sm">
          Travelling is in my blood
        </SectionHeading>
        <Collage />

        <SectionHeading className="max-w-lg px-4 pt-4 text-sm text-secondary md:text-sm">
          Here is the timeline of my life achievements.
        </SectionHeading>
        <Timeline />
      </Container>
    </div>
  );
}

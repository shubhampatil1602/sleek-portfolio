import { Collage } from "@/components/collage";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { SubHeading } from "@/components/sub-heading";
import { Timeline } from "@/components/timeline";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-10 md:pb-10 md:pt-20">
        <Heading>About Me</Heading>
        <SubHeading>
          I’m a frontend engineer focused on building reliable, responsive web
          applications using React and Tailwind CSS. I care about clean code,
          good design, and solving real problems through thoughtful development.
          Currently, I’m expanding my skills by learning full-stack development
          to build more complete and scalable solutions.
        </SubHeading>
        <p className="max-w-lg pt-4 text-sm text-secondary md:text-sm">
          I love to travel and explore new places. I am a big fan of nature and
          adventure. I am also big fan of technology and innovation.
        </p>
        <Collage />

        <p className="max-w-lg pt-4 text-sm text-secondary md:text-sm">
          Here is the timeline of my life achievements.
        </p>
        <Timeline />
      </Container>
    </div>
  );
}

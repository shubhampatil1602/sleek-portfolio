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
      <Container className="min-h-screen px-8 pt-20 md:pb-10">
        <Scales />
        <Heading>About Me</Heading>
        <SubHeading>
          I&apos;m a passionate software engineer dedicated to crafting elegant
          solutions for complex problems. With expertise in full-stack
          development, I enjoy building user-centric applications that make a
          difference.
        </SubHeading>
        <SectionHeading className="mx-4">
          Travelling is in my blood
        </SectionHeading>
        <Collage />

        <Timeline />
      </Container>
    </div>
  );
}

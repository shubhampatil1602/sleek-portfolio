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
    "About Shubham Patil, a full-stack engineer from India: background, experience and what he's looking for next.",
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-4 pt-20 sm:px-8 md:pb-10">
        <Scales />
        <Heading>About Me</Heading>
        <SubHeading as="p">
          I&apos;m a full-stack engineer from India. I like owning a product end
          to end, from the database schema to the last bit of UI polish. Most of
          my work is in Next.js, TypeScript and PostgreSQL.
        </SubHeading>
        <SubHeading as="p">
          I&apos;m looking for a full-stack, frontend, backend or product
          engineering role where I can ship to real users often.
        </SubHeading>

        <Timeline />

        <SectionHeading className="mx-4">Outside work, I travel</SectionHeading>
        <Collage />
      </Container>
    </div>
  );
}

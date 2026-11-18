import { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Scales } from "@/components/scales";
import { SubHeading } from "@/components/sub-heading";

export const metadata: Metadata = {
  title: "Contact | Shubham Patil",
  description:
    "Contact Shubham Patil about full-stack, frontend, backend or product engineering roles.",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-4 pt-20 sm:px-8 md:pb-10">
        <Scales />
        <Heading>Contact Me</Heading>
        <SubHeading>
          I&apos;m looking for full-stack, frontend, backend or product
          engineering roles. Send me a message below, or{" "}
          <a
            className="text-blue-500 hover:underline"
            href="https://cal.com/shubhampatil1602/15min"
            target="_blank"
            rel="noopener noreferrer"
          >
            book a 15-minute call
          </a>
          .
        </SubHeading>
        <ContactForm />
      </Container>
    </div>
  );
}

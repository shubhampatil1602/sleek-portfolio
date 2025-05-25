import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Scales } from "@/components/scales";
import { SubHeading } from "@/components/sub-heading";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-8 md:pb-10 md:pt-20">
        <Scales />
        <Heading>Contact Me</Heading>
        <SubHeading>
          I’m open to freelancing offers. Reach out to me to inquire more about
          my work.
        </SubHeading>
        <ContactForm />
      </Container>
    </div>
  );
}

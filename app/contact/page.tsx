import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { SubHeading } from "@/components/sub-heading";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-10 md:pb-10 md:pt-20">
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

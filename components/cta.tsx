import { CAL_URL, EMAIL, RESUME_URL } from "@/lib/constants";
import { LinkButton } from "./button";
import { SectionHeading } from "./section-heading";
import { SubHeading } from "./sub-heading";

export const CallToAction = () => {
  return (
    <div className="my-10 px-4 py-4">
      <SectionHeading delay={0.6}>Get in touch</SectionHeading>
      <SubHeading as="p" className="px-0">
        I&apos;m looking for full-stack, frontend, backend or product
        engineering roles. The quickest way to reach me is email, or book a
        15-minute call.
      </SubHeading>
      <div className="mt-4 flex flex-wrap gap-2">
        <LinkButton href={`mailto:${EMAIL}`}>{EMAIL}</LinkButton>
        <LinkButton href={CAL_URL}>Book a 15-min call</LinkButton>
        <LinkButton href={RESUME_URL}>Resume</LinkButton>
      </div>
    </div>
  );
};

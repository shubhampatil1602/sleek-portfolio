import { SectionHeading } from "./section-heading";
import { SubHeading } from "./sub-heading";

export const CallToAction = () => {
  return (
    <div className="my-10 border-neutral-100 px-4 py-4">
      <SectionHeading delay={1.2}>Get in touch</SectionHeading>
      <SubHeading className="px-0">
        I&apos;m currently looking for new opportunities. Whether you have a
        question or want to say hi, hit that button.
      </SubHeading>
      <div className="relative mt-4 max-w-lg">
        <input
          placeholder="Your email"
          className="w-full rounded-[6px] bg-white px-4 py-3 pr-[120px] text-sm text-neutral-700 shadow-custom focus:outline-none focus:ring-2 focus:ring-neutral-300 dark:bg-neutral-800 dark:text-neutral-200"
          type="email"
        ></input>
        <a
          href="mailto:shubhamspatilnbr@.com"
          className="shadow-buttonLightInset dark:shadow-buttonDarkInset absolute right-1 top-1/2 -translate-y-1/2 rounded-[6px] border border-neutral-200 bg-neutral-100 px-4 py-1.5 text-sm text-neutral-700 transition-colors hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
        >
          Send Enquiry
        </a>
      </div>
    </div>
  );
};

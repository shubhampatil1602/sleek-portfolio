import Marquee from "react-fast-marquee";

import { testimonialsData } from "@/constants/testimonials";
import { SectionHeading } from "./section-heading";

export function Testimonials() {
  return (
    <div className="my-10 border-neutral-100 px-4 py-4">
      <SectionHeading delay={0.8} className="mb-4">
        People love my work
      </SectionHeading>
      <div className="[mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <Marquee speed={40} pauseOnHover className="py-4">
          {testimonialsData.map((item, idx) => (
            <TestimonialCard key={`testimonial-${idx}`} {...item} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}

function TestimonialCard({ quote, name }: { quote: string; name: string }) {
  return (
    <div className="mx-4 flex h-48 w-full max-w-60 flex-col justify-between gap-4 rounded-xl p-4 shadow-custom transition duration-300 hover:shadow-md">
      <p className="text-sm text-neutral-700 dark:text-neutral-200">{quote}</p>
      <p className="text-sm text-neutral-500 dark:text-neutral-300">{name}</p>
    </div>
  );
}

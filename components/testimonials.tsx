import Image from "next/image";
import Marquee from "react-fast-marquee";

import { testimonialsData } from "@/constants/testimonials";
import { SectionHeading } from "./section-heading";

export function Testimonials() {
  return (
    <div className="py-10">
      <SectionHeading delay={0.8}>People love my work</SectionHeading>
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

function TestimonialCard({
  quote,
  name,
  avatar,
}: {
  quote: string;
  name: string;
  avatar: string;
}) {
  return (
    <div className="shadow-custom mx-4 flex h-48 w-full max-w-60 flex-col justify-between gap-4 rounded-xl p-4 transition duration-300 hover:shadow-md">
      <p className="text-sm text-neutral-700">{quote}</p>
      <div className="flex items-center gap-2">
        <Image
          width={40}
          height={40}
          src={avatar}
          alt={name}
          className="size-4 rounded-full object-cover"
        />
        <p className="text-sm text-neutral-500">{name}</p>
      </div>
    </div>
  );
}

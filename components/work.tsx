"use client";

import { SectionHeading } from "./section-heading";
import { TechStack } from "./tech-stack";
import { WorkData } from "@/constants/work";
import Image from "next/image";

export function Work({ work }: { work: WorkData[] }) {
  return (
    <div className="my-10 border-y border-neutral-100 px-4 py-6 shadow-sectionInset dark:border-neutral-800 dark:shadow-sectionInsetDark">
      <SectionHeading delay={0.4} className="mb-4">
        Work Experience
      </SectionHeading>
      <div className="flex flex-col gap-6 py-6">
        {work.map(({ company, description, duration, stack, title, logo }) => (
          <div
            key={company}
            className="flex flex-col justify-between md:flex-row md:items-start"
          >
            <div className="max-w-[80%]">
              <h2 className="font-medium text-neutral-900 dark:text-neutral-100">
                {company}
              </h2>
              <div className="flex flex-col gap-2 py-2 sm:flex-row sm:items-center">
                <p className="text-sm text-neutral-800 dark:text-neutral-200">
                  {title}
                </p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  {duration}
                </p>
              </div>
              <p className="text-sm text-neutral-500">{description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {stack.map((s) => (
                  <TechStack key={s} stack={s} />
                ))}
              </div>
            </div>

            <Image
              src={logo}
              alt={company}
              width={100}
              height={100}
              className="hidden max-h-[40px] w-fit max-w-[100px] object-contain md:block"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

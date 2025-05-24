"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

import { IconCircleCheckFilled } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

type Data = {
  title: string;
  content: {
    title: string;
    description?: string | React.ReactNode;
  }[];
};

export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });

  const data: Data[] = [
    {
      title: "2025",
      content: [
        {
          title: "Reached $20K MRR with my VSCode fork.",
          description:
            "Reached the revenue milestone of $20K MRR with my VSCode fork.",
        },
      ],
    },
    {
      title: "2024",
      content: [
        {
          title: "Launched my AI-powered resume builder.",
          description:
            "Built and launched a modern resume builder powered by AI that helps users generate personalized resumes in real-time.",
        },
      ],
    },
    {
      title: "2023",
      content: [
        {
          title: "Got my first paid open-source sponsorship.",
          description:
            "Received my first GitHub sponsorship for contributing to an open-source React UI library.",
        },
      ],
    },
    {
      title: "2022",
      content: [
        {
          title: "Built a Swiggy clone with live API integration.",
          description:
            "Developed a food ordering frontend using React and Tailwind with real-time Swiggy API integration for menus and cart management.",
        },
      ],
    },
    {
      title: "2021",
      content: [
        {
          title: "Started learning web development.",
          description:
            "Began my journey into web development by learning HTML, CSS, JavaScript, and eventually diving into React and TypeScript.",
        },
      ],
    },
    {
      title: "2020",
      content: [
        {
          title: "Built my first coding project in high school.",
          description:
            "Created a basic portfolio site using just HTML and CSS — my first step into the world of programming.",
        },
      ],
    },
  ];
  return (
    <div ref={ref} className="py-10">
      {data.map((year, index) => (
        <div key={year.title} content="px-4 py-1" className="mb-4">
          <motion.h2
            animate={{
              filter: isInView ? "blur(0px)" : "blur(6px)",
              opacity: isInView ? 1 : 0,
            }}
            transition={{
              duration: 0.3,
              delay: 0.1 * index,
              ease: "easeInOut",
            }}
            style={{
              boxShadow: "var(--custom-shadow)",
            }}
            className="mb-2 w-fit rounded-[5px] px-2 py-0.5 font-bold text-black"
          >
            {year.title}
          </motion.h2>
          <div className="flex flex-col gap-4">
            {year.content.map((item, idx) => (
              <div key={item.title} className="pl-4">
                <Step idx={idx} isInView={isInView}>
                  <motion.h3
                    animate={{
                      opacity: isInView ? 1 : 0,
                      y: isInView ? 0 : -10,
                    }}
                    transition={{
                      duration: 0.3,
                      delay: 0.2 * idx,
                      ease: "easeInOut",
                    }}
                    className="text-neutral-600"
                  >
                    {item.title}
                  </motion.h3>
                </Step>
                {item.description && (
                  <motion.p
                    animate={{
                      opacity: isInView ? 1 : 0,
                      y: isInView ? 0 : -10,
                    }}
                    transition={{
                      duration: 0.3,
                      delay: 0.3 * idx,
                      ease: "easeInOut",
                    }}
                    className="pl-6 pt-1 text-sm text-neutral-400"
                  >
                    {item.description}
                  </motion.p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function Step({
  className,
  children,
  isInView,
  idx,
}: {
  className?: string;
  children?: React.ReactNode;
  isInView?: boolean;
  idx?: number;
}) {
  return (
    <motion.div
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : -10,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 0.2 * idx!,
      }}
      className={cn("flex items-start gap-2", className)}
    >
      <IconCircleCheckFilled className="mt-1 h-4 w-4 text-neutral-500" />
      {children}
    </motion.div>
  );
}

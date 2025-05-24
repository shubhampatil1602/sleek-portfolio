"use client";

import Image from "next/image";
import { motion } from "motion/react";

import { PROJECTS } from "@/lib/constants";
import { Link } from "next-view-transitions";

export function Projects() {
  return (
    <div className="py-10">
      <p className="max-w-lg pt-4 text-sm text-secondary md:text-sm">
        I love building web apps and products that can impact millions of life
      </p>
      <div className="grid grid-cols-1 gap-10 py-4 md:grid-cols-2">
        {PROJECTS.map((project, idx) => (
          <motion.div
            initial={{
              opacity: 0,
              filter: "blur(10px)",
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
            }}
            transition={{
              duration: 0.3,
              delay: 0.1 * idx,
              ease: "easeInOut",
            }}
            key={project.title}
            className="group relative mb-4"
          >
            <Link href={project.href} target="_blank">
              <Image
                src={project.src}
                alt={project.title}
                height={300}
                width={300}
                className="w-full rounded-xl object-cover transition duration-200 group-hover:scale-[1.015]"
              />
              <h2 className="z-20 mt-2 font-medium tracking-tight text-neutral-500 dark:text-neutral-400">
                {project.title}
              </h2>
              <p className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-400">
                {project.description}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

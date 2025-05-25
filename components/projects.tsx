"use client";

import Image from "next/image";
import { motion } from "motion/react";

import { Link } from "next-view-transitions";
import {
  type Project,
  projects as defaultProjects,
  getProjectTags,
} from "@/constants/projects";
import { SectionHeading } from "./section-heading";
import { TechStack } from "./tech-stack";

export function Projects({
  projects = defaultProjects,
}: {
  projects?: Project[];
}) {
  return (
    <div className="shadow-sectionInset my-4 border-y border-neutral-100 px-4 py-6 dark:border-neutral-800">
      <SectionHeading delay={0.2}>I love building things</SectionHeading>
      <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-3">
        {projects.map((project, idx) => (
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
            className="group relative mb-4 rounded-2xl hover:shadow-custom"
          >
            <Link href={project.href} target="_blank">
              <Image
                src={project.src}
                alt={project.title}
                height={300}
                width={300}
                className="max-h-96 w-full rounded-xl object-cover transition duration-200 group-hover:scale-[1.02] lg:h-44"
              />
              <div className="flex flex-1 flex-col justify-between py-4 transition-all duration-300 group-hover:px-4">
                <h2 className="z-20 mt-2 font-medium tracking-tight text-neutral-500 dark:text-neutral-200">
                  {project.title}
                </h2>
                <p className="mt-2 max-w-[14rem] text-sm text-neutral-500 dark:text-neutral-400">
                  {project.description}
                </p>
                <div className="mt-2 flex max-w-[14rem] flex-wrap gap-1">
                  {getProjectTags(project.tags).map((tag) => (
                    <TechStack key={tag.name} tag={tag} />
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

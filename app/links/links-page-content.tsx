"use client";

import Image from "next/image";
import { Link } from "next-view-transitions";
import { motion } from "motion/react";

import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Scales } from "@/components/scales";
import { SubHeading } from "@/components/sub-heading";
import { SHUBHAM_IMAGE } from "@/lib/constants";
import { cn } from "@/lib/utils";

import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconMail,
  IconFileDescription,
  IconMessageCircle,
} from "@tabler/icons-react";

const links = [
  {
    name: "SnackDesk",
    url: "https://snackdesk.shubhamspatil.me",
    image:
      "https://res.cloudinary.com/dgiyltklg/image/upload/v1782870720/portfolio/projects/snacdesk.png",
    description: (
      <>
        Real-time multi-tenant snack ordering platform with dashboards and live
        updates{" "}
        <span className="font-semibold text-neutral-700 dark:text-neutral-300">
          actively used by 30+ users
        </span>
        .
      </>
    ),
    external: true,
  },
  {
    name: "GitHub",
    url: "https://github.com/shubhampatil1602",
    icon: IconBrandGithub,
    external: true,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/shubhmpatil/",
    icon: IconBrandLinkedin,
    external: true,
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/shubhamsp1602",
    icon: IconBrandX,
    external: true,
  },
  {
    name: "Resume",
    url: "https://resume.shubhamspatil.me",
    icon: IconFileDescription,
    external: true,
  },
  {
    name: "Email",
    url: "mailto:shubhamspatilnbr@gmail.com",
    icon: IconMail,
    external: true,
  },
  {
    name: "Quick Chat",
    url: "https://cal.com/shubhampatil1602/15min",
    icon: IconMessageCircle,
    external: true,
  },
];

export function LinksPageContent() {
  return (
    <div className="flex min-h-screen items-start justify-center">
      <Container className="min-h-screen w-full px-8 pt-24 md:pb-10 md:pt-32">
        <Scales />

        <div className="mx-auto mb-8 flex w-full max-w-md flex-row items-center gap-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="shrink-0 overflow-hidden rounded-full border-2 border-neutral-200 shadow-sm dark:border-neutral-800"
          >
            <Image
              src={SHUBHAM_IMAGE}
              height={100}
              width={100}
              alt="Shubham Patil"
              priority
              placeholder="blur"
              blurDataURL="/blur-placeholder.jpg"
              className="size-16 object-cover sm:size-20"
            />
          </motion.div>

          <div className="flex flex-col">
            <Heading className="px-0 text-left text-lg sm:text-xl md:text-2xl">
              Shubham Patil
            </Heading>

            <SubHeading className="px-0 pt-1 text-left text-sm leading-[1.2] text-neutral-600 dark:text-neutral-400">
              Building software that people actually enjoy coming back to.
            </SubHeading>
          </div>
        </div>

        <div className="mx-auto mt-10 flex w-full max-w-md flex-col gap-4">
          {links.map((link, idx) => {
            const Icon = link.icon;
            return (
              <motion.div
                key={link.name}
                initial={{
                  opacity: 0,
                  filter: "blur(10px)",
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  filter: "blur(0px)",
                  y: 0,
                }}
                transition={{
                  duration: 0.3,
                  delay: 0.3 + 0.1 * idx,
                  ease: "easeInOut",
                }}
              >
                <Link
                  href={link.url}
                  target={
                    link.external && !link.url.startsWith("mailto")
                      ? "_blank"
                      : undefined
                  }
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className={cn(
                    "group relative flex w-full items-center justify-between overflow-hidden rounded-[12px] border border-neutral-200 bg-neutral-100 px-4 py-3.5 text-neutral-700 shadow-buttonLightInset transition-all duration-200 hover:translate-x-0.5 hover:bg-neutral-200 hover:shadow-custom dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:shadow-buttonDarkInset",
                  )}
                >
                  <div className="flex items-center gap-4 text-left">
                    {link.image ? (
                      <Image
                        src={link.image}
                        alt={link.name}
                        width={40}
                        height={40}
                        className="h-12 w-14 shrink-0 rounded-md object-cover"
                      />
                    ) : Icon ? (
                      <Icon className="h-5 w-5 shrink-0 text-neutral-500 transition-colors group-hover:text-neutral-700 dark:text-neutral-400 dark:group-hover:text-neutral-200" />
                    ) : null}
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">{link.name}</span>
                      {link.description && (
                        <span className="mt-0.5 line-clamp-2 max-w-xs text-xs text-neutral-500 dark:text-neutral-400">
                          {link.description}
                        </span>
                      )}
                    </div>
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 rotate-45 text-neutral-400 opacity-0 transition-all group-hover:rotate-0 group-hover:opacity-100 dark:text-neutral-500"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l14 0" />
                    <path d="M13 18l6 -6" />
                    <path d="M13 6l6 6" />
                  </svg>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

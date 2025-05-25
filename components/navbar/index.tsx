"use client";

import Image from "next/image";
import { Container } from "../container";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";

import { NAV_ITEMS } from "./constants";
import { useState } from "react";
import { Link } from "next-view-transitions";

export function Navbar() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 100], [0, 10]);
  const width = useTransform(scrollY, [0, 100], ["60%", "50%"]);

  useMotionValueEvent(scrollY, "change", (value) => {
    if (value > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <Container>
      <motion.nav
        style={{
          boxShadow: scrolled ? "var(--custom-shadow)" : "none",
          width,
          y,
        }}
        transition={{ duration: 0.3, ease: "linear" }}
        className="fixed inset-x-0 top-0 z-50 mx-auto flex max-w-4xl items-center justify-between rounded-full bg-white px-2 py-2 dark:bg-neutral-900"
      >
        <Link href="/">
          <Image
            src="/shubham.png"
            height={"100"}
            width={"100"}
            alt="shubham"
            className="h-10 w-10 rounded-full"
          />
        </Link>

        <div className="flex items-center">
          {NAV_ITEMS.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="relative px-2 py-1 text-sm"
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              {hovered === idx && (
                <motion.span
                  layoutId="hovered-span"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute inset-0 h-full w-full rounded-[6px] bg-neutral-100 dark:bg-neutral-800"
                ></motion.span>
              )}
              <span className="relative z-10"> {item.title}</span>
            </Link>
          ))}
        </div>
      </motion.nav>
    </Container>
  );
}

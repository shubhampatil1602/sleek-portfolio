"use client";

import Image from "next/image";
import { Container } from "../container";
import Link from "next/link";

import { motion, useMotionValueEvent, useScroll } from "motion/react";

import { NAV_ITEMS } from "./constants";
import { useState } from "react";

export const Navbar = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const { scrollY } = useScroll();
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
        animate={{
          boxShadow: scrolled ? "var(--custom-shadow)" : "none",
          width: scrolled ? "50%" : "100%",
          y: scrolled ? 10 : 0,
        }}
        transition={{ duration: 0.3, ease: "linear" }}
        className="fixed inset-x-0 top-0 z-50 mx-auto flex max-w-4xl items-center justify-between rounded-full bg-white px-2 py-2 dark:bg-neutral-900"
      >
        <Image
          src="/shubham.png"
          height={"100"}
          width={"100"}
          alt="shubham"
          className="h-10 w-10 rounded-full"
        />

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
                  className="absolute inset-0 h-full w-full rounded-md bg-neutral-100 dark:bg-neutral-800"
                ></motion.span>
              )}
              <span className="relative z-10"> {item.title}</span>
            </Link>
          ))}
        </div>
      </motion.nav>
    </Container>
  );
};

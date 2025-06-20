"use client";

import { useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";

import { NAV_ITEMS } from "./constants";
import { Container } from "../container";
import { Link } from "next-view-transitions";
import { IconMoon, IconSun } from "@tabler/icons-react";

export function Navbar() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  const { setTheme, theme } = useTheme();

  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 100], [0, 10]);
  const width = useTransform(scrollY, [0, 100], ["92%", "85%"]);

  useMotionValueEvent(scrollY, "change", (value) => {
    if (value > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <Container>
      <div className="fixed inset-x-0 top-0 z-50 mx-auto hidden max-w-4xl md:block">
        <motion.nav
          style={{
            width,
            y,
          }}
          transition={{ duration: 0.3, ease: "linear" }}
          className={`mx-auto flex max-w-4xl items-center justify-between rounded-full bg-white/50 px-3 py-2 backdrop-blur-sm dark:bg-neutral-900/50 ${scrolled ? "shadow-custom" : ""}`}
        >
          <Link href="/">
            <motion.div
              className="relative h-10 w-10 overflow-hidden rounded-full"
              onMouseEnter={() => setIsLogoHovered(true)}
              onMouseLeave={() => setIsLogoHovered(false)}
            >
              <Image
                src="/shubham.png"
                height={"100"}
                width={"100"}
                alt="shubham"
                className="h-10 w-10 rounded-full"
              />
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: isLogoHovered ? "100%" : "-100%" }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
              />
            </motion.div>
          </Link>
          <div className="flex items-center">
            <ToggleThemeButton theme={theme} setTheme={setTheme} />
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
      </div>

      <nav className="fixed left-0 top-0 z-50 block w-full border-b border-neutral-100 bg-white dark:border-neutral-800 dark:bg-neutral-900 md:hidden">
        <div className="flex w-full items-center justify-between px-4 py-3">
          <Link href="/">
            <motion.div
              className="relative h-10 w-10 overflow-hidden rounded-full"
              onMouseEnter={() => setIsLogoHovered(true)}
              onMouseLeave={() => setIsLogoHovered(false)}
            >
              <Image
                src="/shubham.png"
                height={"100"}
                width={"100"}
                alt="shubham"
                className="h-10 w-10 rounded-full"
              />
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: isLogoHovered ? "100%" : "-100%" }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
              />
            </motion.div>
          </Link>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-md text-neutral-700 dark:text-neutral-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.3 },
            }}
            transition={{ duration: 0.3 }}
            className="fixed left-0 right-0 top-0 z-50 flex h-full flex-col items-center justify-center gap-8 bg-white dark:bg-neutral-900 md:hidden"
          >
            <button
              className="absolute right-4 top-3 flex h-10 w-10 items-center justify-center rounded-md text-neutral-700 dark:text-neutral-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            {NAV_ITEMS.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.3,
                  delay: idx * 0.1,
                  ease: "linear",
                }}
              >
                <Link
                  className="text-2xl font-medium text-neutral-800 transition-colors hover:text-neutral-500 dark:text-neutral-200 dark:hover:text-neutral-400"
                  href={item.href}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {item.title}
                </Link>
              </motion.div>
            ))}
            <ToggleThemeButton theme={theme} setTheme={setTheme} />
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  );
}

function ToggleThemeButton({
  theme,
  setTheme,
}: {
  theme?: string;
  setTheme: (theme: string) => void;
}) {
  return (
    <>
      {theme === "dark" ? (
        <button
          className="flex items-center rounded-[6px] px-2 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800"
          onClick={() => setTheme("light")}
        >
          <motion.div
            key={theme}
            initial={{ rotate: 0 }}
            animate={{ rotate: -90 }}
            transition={{ duration: 0.3 }}
          >
            <IconSun className="size-4 text-neutral-400" />
          </motion.div>
        </button>
      ) : (
        <button
          className="flex items-center rounded-[6px] px-2 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800"
          onClick={() => setTheme("dark")}
        >
          <motion.div
            key={theme}
            initial={{ rotate: 0 }}
            animate={{ rotate: 90 }}
            transition={{ duration: 0.3 }}
          >
            <IconMoon className="size-4 -rotate-90 text-neutral-800" />
          </motion.div>
        </button>
      )}
    </>
  );
}

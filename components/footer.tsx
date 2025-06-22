import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import { Link } from "next-view-transitions";

import { Container } from "./container";

export function Footer() {
  return (
    <Container className="relative mx-auto flex h-full w-full max-w-4xl justify-between border-t border-neutral-100 bg-white px-4 py-3 dark:border-neutral-800 dark:bg-neutral-900 sm:px-10 md:py-3">
      <p className="text-xs text-neutral-500">Built with love by Shubham</p>
      <div className="flex items-center justify-center gap-4">
        <Link href="https://x.com/shubhamsp1602">
          <IconBrandX className="size-4 text-neutral-500 hover:text-neutral-700" />
        </Link>
        <Link href="https://www.linkedin.com/in/shubhmpatil/">
          <IconBrandLinkedin className="size-4 text-neutral-500 hover:text-neutral-700" />
        </Link>
        <Link href="https://github.com/shubhampatil1602">
          <IconBrandGithub className="size-4 text-neutral-500 hover:text-neutral-700" />
        </Link>
      </div>
    </Container>
  );
}

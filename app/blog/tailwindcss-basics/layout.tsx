import type { Metadata } from "next";

import "../../globals.css";

import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Shubham Patil's Portfolio",
  description:
    "This is Shubham Patil's Portfolio built with React, Next.js, Tailwind CSS, motion and TypeScript showcasing his projects and skills. This website is designed with minimal and smooth micro-interactions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container className="prose px-10 md:pt-20 md:pb-10">{children}</Container>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ViewTransitions } from "next-view-transitions";
import { Toaster } from "sonner";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

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
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${inter.className} bg-neutral-100 antialiased dark:bg-neutral-700`}
        >
          <Toaster position="top-center" />

          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ViewTransitions>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ViewTransitions } from "next-view-transitions";
import { Toaster } from "sonner";

import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Chatbot } from "@/components/chatbot";

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
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${inter.className} relative bg-neutral-100 antialiased [--pattern-fg:var(--color-neutral-900)] dark:bg-black/50`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={true}
            disableTransitionOnChange
          >
            <Toaster position="top-center" />
            <main className="relative">
              <Navbar />
              {children}
              <Footer />

              <div className="fixed -bottom-1.5 right-[30%] sm:bottom-0 sm:right-0">
                <Chatbot />
              </div>
            </main>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}

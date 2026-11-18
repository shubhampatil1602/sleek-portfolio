import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

import { ViewTransitions } from "next-view-transitions";
import { Toaster } from "sonner";

import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SITE_URL } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const description =
  "Shubham Patil is a full-stack engineer from India who builds and ships web products with Next.js, TypeScript and PostgreSQL.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Shubham Patil · Full-stack engineer",
  description,
  openGraph: {
    title: "Shubham Patil · Full-stack engineer",
    description,
    url: SITE_URL,
    siteName: "Shubham Patil",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubham Patil · Full-stack engineer",
    description,
  },
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
            defaultTheme="light"
            enableSystem={true}
            disableTransitionOnChange
          >
            <Toaster position="top-center" />
            <main className="relative">
              <Navbar />
              {children}
              <Footer />
            </main>
          </ThemeProvider>
          <Analytics />
        </body>
      </html>
    </ViewTransitions>
  );
}

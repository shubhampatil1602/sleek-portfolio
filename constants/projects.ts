export type Project = {
  title: string;
  src: string;
  github: string;
  deploy: string;
  demoVideo?: string;
  description: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    title: "SnackDesk",
    src: "https://res.cloudinary.com/dgiyltklg/image/upload/v1794752657/portfolio/projects/snackdesk.png",
    github: "https://github.com/shubhampatil1602/snack-desks",
    deploy: "https://snackdesk.shubhamspatil.me",
    demoVideo: "https://www.youtube.com/watch?v=fp6EKVy0Zvc",
    description:
      "AI-powered snack-ordering app for teams, used by 30+ people. Users order, update and cancel by chatting with AI; admins use AI to open and close windows, name them and review history.",
    stack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Tailwind CSS",
      "SSE",
      "Docker",
      "AI",
    ],
  },
  {
    title: "Finance Snapshot",
    src: "https://res.cloudinary.com/dgiyltklg/image/upload/v1794751857/portfolio/projects/finanace-snapshot.png",
    github: "https://github.com/shubhampatil1602/finance-snapshot",
    deploy: "https://finance.shubhamspatil.me/",
    description:
      "Budgeting app built around one number: how much you can still spend this month. The money logic is unit-tested with Vitest and the main flows have Playwright end-to-end tests.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "MongoDB",
      "Tailwind CSS",
      "Playwright",
    ],
  },
  {
    title: "PR Pilot - AI Code Reviewer",
    src: "https://res.cloudinary.com/dgiyltklg/image/upload/v1784130368/portfolio/projects/pr-pilot.png",
    github: "https://github.com/shubhampatil1602/ai-pr-reviewer",
    deploy: "https://pr-pilot.shubhamspatil.me",
    description:
      "GitHub app that reviews pull requests with an LLM. Webhooks queue background jobs in Inngest, the repo is embedded into Pinecone for context, and comments are posted on the PR.",
    stack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Tailwind CSS",
      "Docker",
      "Inngest",
      "Pinecone",
      "OpenRouter",
    ],
  },
];

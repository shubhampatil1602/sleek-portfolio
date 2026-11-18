export type TimelineData = {
  title: string;
  content: {
    title: string;
    description?: string | React.ReactNode;
  }[];
};

export const timelineData: TimelineData[] = [
  {
    title: "2026",
    content: [
      {
        title: "Launched SnackDesk.",
        description:
          "An AI-powered snack-ordering app for teams with live updates, role-based access and order windows. Now actively used by 30+ people.",
      },
      {
        title: "Built Finance Snapshot.",
        description:
          "A budgeting app with unit-tested money logic and Playwright end-to-end tests.",
      },
    ],
  },
  {
    title: "2025",
    content: [
      {
        title: "Graduated in Computer Engineering (B.Tech).",
      },
      {
        title: "Started full-time as a software developer.",
        description: "After a 6-month internship at the same company.",
      },
    ],
  },
  {
    title: "2024",
    content: [
      {
        title: "Frontend internship at PHICSIT InfoTech.",
        description:
          "Merged 10+ pull requests into a React and TypeScript web app.",
      },
      {
        title: "Learned in public and got 2 internship offers.",
        description:
          "Sharing my projects online led to internship offers from two startups.",
      },
    ],
  },
];

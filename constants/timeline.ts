export type TimelineData = {
  title: string;
  content: {
    title: string;
    description?: string | React.ReactNode;
  }[];
};

export const timelineData: TimelineData[] = [
  {
    title: "2025",
    content: [
      {
        title: "Reached $20K MRR with my VSCode fork.",
        description:
          "Reached the revenue milestone of $20K MRR with my VSCode fork.",
      },
    ],
  },
  {
    title: "2024",
    content: [
      {
        title: "Launched my AI-powered resume builder.",
        description:
          "Built and launched a modern resume builder powered by AI that helps users generate personalized resumes in real-time.",
      },
    ],
  },
  {
    title: "2023",
    content: [
      {
        title: "Got my first paid open-source sponsorship.",
        description:
          "Received my first GitHub sponsorship for contributing to an open-source React UI library.",
      },
    ],
  },
  {
    title: "2022",
    content: [
      {
        title: "Built a Swiggy clone with live API integration.",
        description:
          "Developed a food ordering frontend using React and Tailwind with real-time Swiggy API integration for menus and cart management.",
      },
    ],
  },
  {
    title: "2021",
    content: [
      {
        title: "Started learning web development.",
        description:
          "Began my journey into web development by learning HTML, CSS, JavaScript, and eventually diving into React and TypeScript.",
      },
    ],
  },
  {
    title: "2020",
    content: [
      {
        title: "Built my first coding project in high school.",
        description:
          "Created a basic portfolio site using just HTML and CSS — my first step into the world of programming.",
      },
    ],
  },
];

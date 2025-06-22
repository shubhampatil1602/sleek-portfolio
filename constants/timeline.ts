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
        title: "Right joined 6 month full-time internship.",
        description:
          "Started my first full-time internship, gaining valuable industry experience and skills.",
      },
    ],
  },
  {
    title: "2024",
    content: [
      {
        title:
          "Involved in learning in public and received 2 internship offers.",
        description:
          "Started sharing my learning journey and projects publicly, which led to receiving two internship offers from startups.",
      },
    ],
  },
  {
    title: "2023",
    content: [
      {
        title: "Started DSA and building web dev projects.",
        description:
          "Began learning Data Structures and Algorithms (DSA) and started building web development projects to strengthen my programming and problem-solving skills.",
      },
    ],
  },
  {
    title: "2022",
    content: [
      {
        title: "Started learning web development.",
        description:
          "Began my journey into web development by learning HTML, CSS, JavaScript, and eventually diving into React and TypeScript.",
      },
    ],
  },
  {
    title: "2021",
    content: [
      {
        title: "Built my first coding project",
        description:
          "Created a basic portfolio site using just HTML and CSS — my first step into the world of programming.",
      },
    ],
  },
];

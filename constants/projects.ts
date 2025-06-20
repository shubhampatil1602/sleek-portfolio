export type Project = {
  title: string;
  src: string;
  href: string;
  deploy: string;
  description: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    title: "Bhaicode",
    src: "/bhaicode.png",
    href: "https://github.com/shubhampatil1602/bhaicode",
    deploy: "",
    description:
      "Bhaicode is a coding platform similar to leetcode where users can practice coding problems, participate in contests, and improve their coding skills with a wide range of coding challenges.",
    stack: [
      "React",
      "Express",
      "Node",
      "PostgreSQL",
      "Motion",
      "Tailwind CSS",
      "Docker",
      "AWS",
    ],
  },
  {
    title: "Resume Builder",
    src: "/resume-builder.png",
    href: "https://github.com/shubhampatil1602/resume-builder",
    deploy: "https://resume-builder-shubh.vercel.app/",
    description:
      "This real-time resume builder using React, allowing users to create and edit resumes dynamically. It features a user-friendly interface for easy resume management.",
    stack: ["React", "Motion", "Tailwind CSS"],
  },
  {
    title: "Food App",
    src: "/swiggy.png",
    href: "https://github.com/shubhampatil1602/swiggy-clone",
    deploy: "",
    description:
      "A food delivery app with integration of Swiggy API for real-time restaurant data. Implemented a config-driven UI to display nearby restaurants and enhance personalized browsing.",
    stack: ["React", "Redux", "Tailwind CSS"],
  },

  {
    title: "Youtube (FE) with live API",
    src: "/siuutube.png",
    href: "https://github.com/shubhampatil1602/SiuuTube",
    deploy: "",
    description:
      "Built a responsive video streaming platform using YouTube Live API with debounced, cached search and n-level nested comments. Integrated live chat, shimmer UI.",
    stack: ["React", "Redux", "Tailwind CSS"],
  },
  {
    title: "Hoobank UI",
    src: "/hoobank.png",
    href: "https://github.com/shubhampatil1602/HooBank-ui",
    deploy: "https://hoo-bank-ui-one.vercel.app/",
    description:
      "The HooBank UI is a fully responsive website built using React and Tailwind CSS, transforming a Figma design into clean, functional code.",
    stack: ["React", "Tailwind CSS"],
  },
  {
    title: "Moonex UI",
    src: "/moonex.png",
    href: "https://github.com/shubhampatil1602/dotprolabs-moonex-ui",
    deploy: "https://dotprolabs-moonex-ui-shubh.vercel.app/",
    description:
      "Moonex UI is a fully responsive website built using Next.js and Tailwind CSS, transforming a Figma design into clean, functional code.",
    stack: ["React", "Tailwind CSS"],
  },
];

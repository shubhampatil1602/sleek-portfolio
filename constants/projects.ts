export type Project = {
  title: string;
  src: string;
  github: string;
  deploy: string;
  description: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    title: "Bhaicode",
    src: "https://res.cloudinary.com/dgiyltklg/image/upload/v1750513164/portfolio/projects/bhaicode.png",
    github: "https://github.com/shubhampatil1602/bhaicode",
    deploy: "#",
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
    src: "https://res.cloudinary.com/dgiyltklg/image/upload/w_600,q_auto,f_auto/v1750513158/portfolio/projects/resume-builder.png",
    github: "https://github.com/shubhampatil1602/resume-builder",
    deploy: "https://resume-builder-shubh.vercel.app/",
    description:
      "This real-time resume builder using React, allowing users to create and edit resumes dynamically. It features a user-friendly interface for easy resume management.",
    stack: ["React", "Motion", "Tailwind CSS"],
  },
  {
    title: "Food App",
    src: "https://res.cloudinary.com/dgiyltklg/image/upload/w_600,q_auto,f_auto/v1750513172/portfolio/projects/swiggy.png",
    github: "https://github.com/shubhampatil1602/swiggy-clone",
    deploy: "https://foodapp-swiggy-clone.vercel.app/",
    description:
      "A frontend project with the live Swiggy API to display real-time restaurant data. Includes a config-driven UI, add to cart, smooth shimmer effects, and search functionality.",
    stack: ["React", "Redux", "Tailwind CSS"],
  },

  {
    title: "Youtube (FE) with live API",
    src: "https://res.cloudinary.com/dgiyltklg/image/upload/w_600,q_auto,f_auto/v1750513178/portfolio/projects/siuutube.png",
    github: "https://github.com/shubhampatil1602/SiuuTube",
    deploy: "https://siuu-tube.vercel.app/",
    description:
      "Frontend YouTube-like app with live API: debounced & cached search, infinite scroll, nested comments, live chat, shimmer loading, and theme toggle.",
    stack: ["React", "Redux", "Tailwind CSS"],
  },
  {
    title: "Hoobank UI",
    src: "https://res.cloudinary.com/dgiyltklg/image/upload/w_600,q_auto,f_auto/v1750513183/portfolio/projects/hoobank.png",
    github: "https://github.com/shubhampatil1602/HooBank-ui",
    deploy: "https://hoo-bank-ui-one.vercel.app/",
    description:
      "The HooBank UI is a fully responsive website built using React and Tailwind CSS, transforming a Figma design into clean, functional code.",
    stack: ["React", "Tailwind CSS"],
  },
  {
    title: "Moonex UI",
    src: "https://res.cloudinary.com/dgiyltklg/image/upload/w_600,q_auto,f_auto/v1750513178/portfolio/projects/moonex.png",
    github: "https://github.com/shubhampatil1602/dotprolabs-moonex-ui",
    deploy: "https://dotprolabs-moonex-ui-shubh.vercel.app/",
    description:
      "Moonex UI is a fully responsive website built using Next.js and Tailwind CSS, transforming a Figma design into clean, functional code.",
    stack: ["React", "Tailwind CSS"],
  },
];

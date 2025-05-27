import { IconType } from "react-icons";
import { FaReact } from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandCSharp, TbBrandFramerMotion } from "react-icons/tb";
import { FaUnity, FaHtml5, FaCss3, FaJsSquare } from "react-icons/fa";
import {
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiDocker,
  SiAmazon,
  SiNodedotjs,
} from "react-icons/si";

import { TbBrandRedux } from "react-icons/tb";

export type Project = {
  title: string;
  src: string;
  href: string;
  deploy?: string;
  description: string;
  tags: TagName[];
};

export type TagName =
  | "REACT"
  | "NEXTJS"
  | "TAILWIND"
  | "CSHARP"
  | "UNITY"
  | "HTML"
  | "CSS"
  | "JS"
  | "TYPESCRIPT"
  | "REDUX"
  | "MOTION"
  | "NODEJS"
  | "EXPRESSJS"
  | "MONGODB"
  | "DOCKER"
  | "AWS";

export type Tag = {
  name: string;
  icon: IconType;
  color?: string;
};

export const TAGS: Record<TagName, Tag> = {
  REACT: {
    name: "React",
    icon: FaReact,
    color: "#61DAFB",
  },
  NEXTJS: {
    name: "Next.js",
    icon: RiNextjsFill,
    color: `#000`,
  },
  TAILWIND: {
    name: "Tailwind CSS",
    icon: RiTailwindCssFill,
    color: "#00BCFF",
  },
  CSHARP: {
    name: "CSharp",
    icon: TbBrandCSharp,
    color: "#178600",
  },
  UNITY: {
    name: "Unity",
    icon: FaUnity,
    color: "#000",
  },
  HTML: {
    name: "HTML",
    icon: FaHtml5,
    color: "#E34F26",
  },
  CSS: {
    name: "CSS",
    icon: FaCss3,
    color: "#1572B6",
  },
  JS: {
    name: "JavaScript",
    icon: FaJsSquare,
    color: "#F7DF1E",
  },
  TYPESCRIPT: {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#007ACC",
  },
  REDUX: {
    name: "Redux",
    icon: TbBrandRedux,
    color: "#764ABC",
  },
  MOTION: {
    name: "Motion",
    icon: TbBrandFramerMotion,
    color: "#E10098",
  },

  NODEJS: {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#339933",
  },

  EXPRESSJS: {
    name: "Express.js",
    icon: SiExpress,
    color: "#000000",
  },

  MONGODB: {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
  },

  DOCKER: {
    name: "Docker",
    icon: SiDocker,
    color: "#2496ED",
  },

  AWS: {
    name: "AWS",
    icon: SiAmazon,
    color: "#FF9900",
  },
};

export const projects: Project[] = [
  {
    title: "Resume Builder",
    src: "/resume-builder.png",
    href: "https://github.com/shubhampatil1602/resume-builder",
    deploy: "https://resume-builder-shubh.vercel.app/",
    description:
      "This real-time resume builder using React, allowing users to create and edit resumes dynamically. It features a user-friendly interface for easy resume management.",
    tags: ["REACT", "TAILWIND", "MOTION"],
  },
  {
    title: "Food App",
    src: "/swiggy.png",
    href: "https://github.com/shubhampatil1602/swiggy-clone",
    description:
      "A food delivery app with integration of Swiggy API for real-time restaurant data. Implemented a config-driven UI to display nearby restaurants and enhance personalized browsing.",
    tags: ["REACT", "REDUX", "TAILWIND"],
  },

  {
    title: "Youtube (Frontend) with live API",
    src: "/siuutube.png",
    href: "https://github.com/shubhampatil1602/SiuuTube",
    description:
      "Built a responsive video streaming platform using YouTube Live API with debounced, cached search and n-level nested comments. Integrated live chat, shimmer UI, and ensured smooth performance under high traffic.",
    tags: ["REACT", "REDUX", "TAILWIND"],
  },
  {
    title: "Hoobank UI",
    src: "/hoobank.png",
    href: "https://github.com/shubhampatil1602/HooBank-ui",
    deploy: "https://hoo-bank-ui-one.vercel.app/",
    description:
      "The HooBank UI is a fully responsive website built using React and Tailwind CSS, transforming a Figma design into clean, functional code.",
    tags: ["REACT", "TAILWIND"],
  },
  {
    title: "Moonex UI",
    src: "/moonex.png",
    href: "https://github.com/shubhampatil1602/dotprolabs-moonex-ui",
    deploy: "https://dotprolabs-moonex-ui-shubh.vercel.app/",
    description:
      "Moonex UI is a fully responsive website built using Next.js and Tailwind CSS, transforming a Figma design into clean, functional code.",
    tags: ["REACT", "TAILWIND"],
  },
];

export const getProjectTags = (tagNames: TagName[]): Tag[] =>
  tagNames.map((name) => TAGS[name]);

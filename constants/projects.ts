import { IconType } from "react-icons";
import { FaReact } from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandCSharp } from "react-icons/tb";
import { FaUnity, FaHtml5, FaCss3, FaJsSquare } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";

export type Project = {
  title: string;
  src: string;
  href: string;
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
  | "REDUX";

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
    color: "#000000",
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
    color: "#000000",
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
};

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    src: "/shubham.png",
    href: "https://github.com/vercel/nextjs-commerce",
    description:
      "A full-stack e-commerce platform built with Next.js, featuring product catalog, shopping cart, and secure payment integration.",
    tags: ["NEXTJS", "REACT", "TAILWIND"],
  },
  {
    title: "Task Management App",
    src: "/shubham.png",
    href: "https://github.com/taskforcesh/bullmq",
    description:
      "A collaborative task management application with real-time updates, team workspaces, and progress tracking features.",
    tags: ["NEXTJS", "REACT", "TAILWIND"],
  },
  {
    title: "AI Image Generator",
    src: "/shubham.png",
    href: "https://github.com/CompVis/stable-diffusion",
    description:
      "An AI-powered image generation tool that creates unique artwork based on text prompts using machine learning models.",
    tags: ["NEXTJS", "REACT", "TAILWIND"],
  },
  {
    title: "AI Image Generator2",
    src: "/shubham.png",
    href: "https://github.com/CompVis/stable-diffusion",
    description:
      "An AI-powered image generation tool that creates unique artwork based on text prompts using machine learning models.",
    tags: ["NEXTJS", "REACT", "TAILWIND"],
  },
];

export const getProjectTags = (tagNames: TagName[]): Tag[] =>
  tagNames.map((name) => TAGS[name]);

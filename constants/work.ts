import { TagName } from "./projects";

export type WorkData = {
  company: string;
  title: string;
  duration: string;
  description: string;
  logo: string;
  technologies: TagName[];
};

export const workData: WorkData[] = [
  {
    company: "Tecknotrove Systems (I) Pvt. Ltd.",
    title: "SWE Intern",
    duration: "January 2025 - Present",
    description:
      "Working in driving simulator project and documentation website of internal projects",
    logo: "https://tecknotrove.com/wp-content/uploads/2023/10/Primary-Logo-White-BG-crop2.jpg",
    technologies: ["CSHARP", "UNITY", "HTML", "JS", "CSS"],
  },
  {
    company: "PHICSIT InfoTech Pvt. Ltd.",
    title: "Frontend Developer Intern",
    duration: "November 2024 - January 2025",
    description:
      "Merged 10+ PR's and Contributed to multiple pages across various branches in the project. Improved the UI/UX of the main page and several other pages.",
    logo: "https://phicsit.in/wp-content/uploads/2024/02/564341.png",
    technologies: [
      "REACT",
      "TAILWIND",
      "REDUX",
      "TYPESCRIPT",
      "HTML",
      "JS",
      "CSS",
    ],
  },
  {
    company: "InfoLabz IT Services Pvt. Ltd.",
    title: "Frontend Developer Intern",
    duration: "July 2024 - August 2024",
    description:
      "Completed a 1-month academic internship focused on building responsive web interfaces using React.js.",
    logo: "https://infolabz.in/photos/logo.png",
    technologies: ["REACT", "TAILWIND", "TYPESCRIPT", "HTML", "JS", "CSS"],
  },
];

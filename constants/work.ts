export type WorkData = {
  company: string;
  title: string;
  duration: string;
  description: string;
  logo: string;
  stack: string[];
};

export const workData: WorkData[] = [
  {
    company: "Tecknotrove Systems (I) Pvt. Ltd.",
    title: "SWE Intern",
    duration: "January 2025 - Present",
    description:
      "Working on dumper simulator project and documentation website of internal projects",
    logo: "https://res.cloudinary.com/dgiyltklg/image/upload/v1750513478/portfolio/companies/tecknotrove.webp",
    stack: ["CSharp", "Unity", "HTML", "JavaScript", "CSS", "React"],
  },
  {
    company: "PHICSIT InfoTech Pvt. Ltd.",
    title: "Frontend Developer Intern",
    duration: "November 2024 - January 2025",
    description:
      "Merged 10+ PR's and Contributed to multiple pages across various branches in the project. Improved the UI/UX of the main page and several other pages.",
    logo: "https://res.cloudinary.com/dgiyltklg/image/upload/v1750513579/portfolio/companies/phicsit.png",
    stack: [
      "React",
      "Tailwind CSS",
      "Redux",
      "TypeScript",
      "HTML",
      "JavaScript",
      "CSS",
    ],
  },
  {
    company: "InfoLabz IT Services Pvt. Ltd.",
    title: "Frontend Developer Intern",
    duration: "July 2024 - August 2024",
    description:
      "Completed a 1-month academic internship focused on building responsive web interfaces using React.js.",
    logo: "https://res.cloudinary.com/dgiyltklg/image/upload/v1750513586/portfolio/companies/infolabz.png",
    stack: ["React", "Tailwind CSS", "HTML", "JavaScript", "CSS"],
  },
];

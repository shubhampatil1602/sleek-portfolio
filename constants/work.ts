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
    title: "Software Engineer",
    duration: "July 2025 - Present",
    description: "Working on multiple simulator projects",
    logo: "https://res.cloudinary.com/dgiyltklg/image/upload/v1750513478/portfolio/companies/tecknotrove.webp",
    stack: ["CSharp", "Unity", "MySQL", "JavaScript"],
  },
  {
    company: "Tecknotrove Systems (I) Pvt. Ltd.",
    title: "SWE Intern",
    duration: "January 2025 - July 2025",
    description:
      "Worked on Driving and Dumper simulator project and documentation website for internal projects",
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
];

export type WorkData = {
  company: string;
  title: string;
  duration: string;
  description: string[];
  logo: string;
  stack: string[];
};

export const workData: WorkData[] = [
  {
    company: "Tecknotrove Systems (I) Pvt. Ltd.",
    title: "Software Engineer",
    duration: "July 2025 - Present",
    description: [
      "Developed and optimized simulator systems using C# and strong OOP principles, writing clean, modular, and maintainable code. Contributed to 3 successful project deliveries with zero major bugs at PDI by handling development, testing, and log-based debugging end-to-end.",
      "Refactored legacy modules and optimized core logic to improve performance and stability, reducing runtime inconsistencies and debugging time by ~25%. Ensured production reliability through structured documentation and SVN-based version control practices.",
      "Built internal debugging and utility tools to streamline issue identification, accelerate QA cycles, and improve overall development efficiency in cross-functional team environments.",
    ],
    logo: "https://res.cloudinary.com/dgiyltklg/image/upload/v1750513478/portfolio/companies/tecknotrove.webp",
    stack: ["CSharp", "Unity", "MySQL", "JavaScript"],
  },
  {
    company: "Tecknotrove Systems (I) Pvt. Ltd.",
    title: "SWE Intern",
    duration: "January 2025 - July 2025",
    description: [
      "Started from scratch with structured training in Unity and C#, building strong fundamentals in OOP and modular architecture. After 3 months, began contributing to live projects, implementing features, fixing bugs, and supporting testing under senior guidance. Gained hands-on experience with real-world development workflows and SVN-based version control.",
    ],
    logo: "https://res.cloudinary.com/dgiyltklg/image/upload/v1750513478/portfolio/companies/tecknotrove.webp",
    stack: ["CSharp", "Unity", "HTML", "JavaScript", "CSS", "React"],
  },
  {
    company: "PHICSIT InfoTech Pvt. Ltd.",
    title: "Frontend Developer Intern",
    duration: "November 2024 - January 2025",
    description: [
      "Merged 10+ PR's and Contributed to multiple pages across various branches in the project. Improved the UI/UX of the main page and several other pages.",
    ],
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

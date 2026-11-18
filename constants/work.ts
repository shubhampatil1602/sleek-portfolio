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
    title: "Software Developer",
    duration: "July 2025 - Present",
    description: [
      "Worked on 6 simulator projects in C# and Unity, building features for client deliveries that passed pre-delivery inspection with no major bugs.",
      "Refactored legacy modules to fix recurring runtime issues and make bugs easier to trace through logs.",
      "Built internal debugging tools that helped QA find and report issues faster.",
    ],
    logo: "https://res.cloudinary.com/dgiyltklg/image/upload/v1750513478/portfolio/companies/tecknotrove.webp",
    stack: ["CSharp", "Unity", "MySQL", "JavaScript"],
  },
  {
    company: "Tecknotrove Systems (I) Pvt. Ltd.",
    title: "Software Intern",
    duration: "January 2025 - July 2025",
    description: [
      "Trained in Unity and C# for 3 months, then worked on live client projects: building features, fixing bugs and supporting testing.",
    ],
    logo: "https://res.cloudinary.com/dgiyltklg/image/upload/v1750513478/portfolio/companies/tecknotrove.webp",
    stack: ["CSharp", "Unity", "HTML", "JavaScript", "CSS", "React"],
  },
  {
    company: "PHICSIT InfoTech Pvt. Ltd.",
    title: "Frontend Developer Intern",
    duration: "November 2024 - January 2025",
    description: [
      "Merged 10+ pull requests into a React and TypeScript web app, building and improving the UI of the landing page and several other pages.",
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

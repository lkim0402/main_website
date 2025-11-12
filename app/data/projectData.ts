import { ProjectType } from "../../types/ProjectTypes";

// src/projectsData.ts
type Link = {
  name: string;
  url: string;
};

export type ProjectStruct = {
  src: string;
  title: string;
  date: string;
  type: ProjectType[]; // categories = ['All', 'AI/ML', 'Games', 'Web/App'];
  links?: Link[];
  skills: string;
  explanation: string[];
};

export const projectData: ProjectStruct[] = [
  // MoNew
  {
    src: "/project/monew.gif",
    title: "MoNew",
    date: "Aug 2025",
    type: [ProjectType.Software],

    links: [
      {
        name: "Github",
        url: "https://github.com/sb04-team02/sb04-MoNew-team02",
      },
    ],
    skills:
      "Spring Boot (Java), PostgreSQL, MongoDB, Docker, AWS (S3, RDS, ECS/ECR), Github Actions",
    explanation: [
      "Built an AWS news community platform with a team of 6. Implemented async user tracking (Spring Events, MongoTemplate) and a read-only MongoDB model. Automated nightly S3 backups with Spring Batch. Engineered a CI/CD pipeline (GitHub Actions, Docker, ECS), reducing deployment time by 95%. Provisioned supporting AWS infrastructure (IAM, RDS, S3).",
    ],
  },

  // findex
  {
    src: "/project/findex.gif",
    title: "Findex",
    date: "June 2025",
    type: [ProjectType.Software],

    links: [
      {
        name: "Github",
        url: "https://github.com/Sprint-team-3/sb4-findex-team3",
      },
    ],
    skills: "Spring Boot (Java), PostgreSQL, Spring Data JPA, Open API",
    explanation: [
      "Led a 5-person team to engineer a financial analysis dashboard. Developed core backend APIs for tracking index performance, moving averages, and rankings. Optimized data processing by implementing a Java sliding window algorithm and complex PostgreSQL queries (aggregations, window functions), significantly reducing query latency.",
    ],
  },

  //crown of persuasion
  {
    src: "/project/crown.gif",
    title: "Crown of Persuasion",
    date: "Jan 2025",
    type: [ProjectType.Game],
    links: [
      { name: "itch.io", url: "https://aki-bread.itch.io/crown-of-persuasion" },
    ],
    skills: "Unity (C#), Procreate / Clip Studio Paint",
    explanation: [
      "Developed a dialogue-driven visual novel where you play as a sentient crown choosing a kingdom’s ruler based on persuasive arguments; leads to 3 different endings & routes. Implemented an event-driven system and the core game mechanics. Made in ~two weeks for the Pirate Game Jam 2025 with a team of 3.",
    ],
  },

  // ImpactEdu
  {
    src: "/project/ImpactEdu.gif",
    title: "ImpactEducation Website",
    date: "Nov 2025",
    type: [ProjectType.Web],

    links: [
      {
        name: "Webpage",
        url: "https://www.impactedu.org/en",
      },
    ],
    skills: "React, Tailwind(CSS), NextJS",
    explanation: [
      "Built the main user-facing pages for ImpactEducation with React and Tailwind CSS. Added English–Korean language support through a localization library and ensured consistent, responsive design across platforms.",
    ],
  },

  // bingenius
  {
    src: "/project/bingenius.png",
    title: "BinGenius",
    date: "Jan 2024",
    type: [ProjectType.AI],

    links: [
      {
        name: "Github",
        url: "https://github.com/lkim0402/BinGenius?tab=readme-ov-file",
      },
    ],
    skills: "TensorFlow (Python), HuggingFace, React, CSS/HTML/JS, Vercel",
    explanation: [
      "Developed a CNN model for trash classification, fine-tuned on ~5000 images from HuggingFace with VGG16, deployed via a Flask web interface with HTML/CSS, achieving 75% accuracy and winning 3rd place in the EduHacks hackathon 2025 with a team of 4.",
    ],
  },
];

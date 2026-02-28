import { sectionDetails } from "./types";

export const WorkDetails: sectionDetails[] = [
    {
    org: "Finda",
    // orgLink: "https://makeabilitylab.cs.washington.edu/",
    date: "Feb 2026 - Present",
    position: ["AI Intern"],
    skills: [["Python, LangChain, OpenAI API (GPT-4o), SQL, n8n"]],
    description: [
      [
        <>
          Engineering AI workflows
        </>
      ],
    ],
    icon: "/resumeIcons/finda.png",
    },
  {
    org: "Makeability Lab @ UW",
    orgLink: "https://makeabilitylab.cs.washington.edu/",
    date: "Sept 2024 - Present",
    position: ["Undergrad Research Assistant"],
    skills: [["Unity/C#, GPT API, Prompt Engineering, HoloLens, Python"]],
    description: [
      [
        <>
          Developed SonoCraftAR, an AR HoloLens system that enables DHH users to
          author personalized shape-based visualizations. Implemented real-time
          audio processing and script generation/compilation in Unity/C#, GPT
          API (4o), and Rosyln compiler; Designed a multi-agent AI pipeline,
          delegating specific tasks (e.g., Prompt enhancement, Code generation,
          Code checker) to specialized prompts with the GPT API, improving
          modularity.
        </>,
        <>
          Co-authored and published a workshop paper at{" "}
          <a
            className="textLink underline"
            href="https://www.ieeeismar.net/2025/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ISMAR IDEATExR 2025
          </a>
          .
        </>,
      ],
    ],
    icon: "/resumeIcons/makeabilitylab.png",
    link: {
      "Arxiv paper": "https://arxiv.org/abs/2508.17597",
      "Demo video": "https://youtu.be/cv5Ye8jqbN4",
    },
  },
  {
    org: "ArtygenSpace",
    orgLink: "https://www.artygenspace.com/artygenspace-eng-version",
    date: "Aug 2024 - Dec 2024",
    position: ["Software Engineer Intern"],
    skills: [
      [
        "Python",
        "LangChain",
        "HuggingFace",
        "ChromaDB",
        "GPT API",
        "Unity/C#",
        "LiDAR sensor",
        "Apple Vision Pro",
        "Vuforia",
      ],
      [],
    ],
    description: [
      [
        <>
          Automated real-time sound effect retrieval on 1,000+ sound samples
          with a GenAI-powered RAG pipeline (Python/LangChain), replacing manual
          workflows. Benchmarked LLMs and embeddings to optimize accuracy,
          latency, and cost, incorporating prompt engineering.
        </>,
        <>
          Developed and demonstrated multiple experimental AR/XR prototypes in
          Unity/C# for platforms including mobile AR & Apple Vision Pro,
          integrating features (real-time LiDAR data, multiplayer functionality,
          etc). Showcased projects at exhibitions, receiving positive feedback
          from 100+ industry attendees.
        </>,
      ],
    ],
    icon: "/resumeIcons/artygenspace.jpg",
  },
  {
    org: "Haemil School",
    date: "Jun 2023 - Sep 2023",
    position: ["IT Assistant Intern"],
    skills: [["Google Workspace Tools", "Google Cloud", "EdTech"]],
    description: [
      [
        <>
          Designed and implemented an integrated school database platform (
          ~30TB) using Google Workspace, enabling efficient access to grades,
          quick links, event pages, and staff schedules. Conducted a one-week
          training program for 15+ staff members on Google Workspace, IT tools,
          and edutech.
        </>,
      ],
    ],
    icon: "/resumeIcons/haemil.jpg",
  },
  {
    org: "Student Technology Assistance Team @ Pierce College",
    orgLink: "https://www.pierce.ctc.edu/computer-labs-stat",
    date: "Oct 2022 - Jun 2023",
    position: ["Assistant Technician/Help desk"],
    skills: [
      [
        "Customer Service, IT Hardware Support, Technical Support, Remote Support",
      ],
    ],
    description: [
      [
        <>
          Provided 1:1 technical support to 15+ students per week, handling
          software installation, account troubleshooting, and device
          connectivity issues.
        </>,
        "Diagnosed and resolved recurring IT problems (printer, Wi-Fi, Office accounts) and guided students on learning tools like Google Workspace, Canvas, and Zoom.",
      ],
    ],
    icon: "/resumeIcons/pierce.png",
  },
];

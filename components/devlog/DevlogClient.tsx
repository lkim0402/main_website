"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

type Project = {
  title: string;
  hasDevlogs: boolean;
};

export default function DevlogClient({
  projects,
}: {
  projects: Project[];
}) {
  const router = useRouter();

  const slugify = (text: string) => {
    return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "")
      .replace(/\-\-+/g, "-");
  };

  return (
    <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 animate-in fade-in duration-500">
        {projects.map((project) => (
        <button
          key={project.title}
          onClick={() => router.push(`/devlog/${slugify(project.title)}`)}
          className="group flex flex-col items-center gap-2 p-4 transition-all hover:scale-110 cursor-pointer"
        >
          <div className="relative transition-transform duration-200 group-hover:rotate-3">
            <Image
              src="/folder_icon.png"
              alt="Folder"
              width={80}
              height={80}
              className="drop-shadow-lg"
            />
          </div>
          <span className="microsoftFont text-center text-sm font-medium leading-tight text-indigo-100 group-hover:text-white">
            {project.title}
          </span>
        </button>
      ))}
    </div>
  );
}

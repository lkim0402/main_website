"use client";
import PageTitle from "../../components/PageTitle";
import Project from "../../components/projects/Project";
import { projectData } from "@/data/projectData";
import { ProjectType } from "../../types/ProjectTypes";

import { useState } from "react";

export default function Projects() {
  const projectTypeList = [];
  for (const value of Object.values(ProjectType)) {
    projectTypeList.push(value);
  }

  const [category, setCategory] = useState(ProjectType.All);

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    const valueFromButton = event.currentTarget.value;
    const category = valueFromButton as ProjectType;
    setCategory(category);
    console.log("Data received from child:", category);
  }
  return (
    <div>
      <PageTitle
        title="Projects"
        description="A showcase of projects I've worked on and those I'm currently working on."
      />

      <div className="mb-5 flex gap-4">
        {projectTypeList.map((el) => {
          return (
            <button
              key={el}
              value={el}
              onClick={handleClick}
              className={`microsoftFont px-2 py-1 hover:cursor-pointer ${
                el === category
                  ? "bg-indigo-400 text-sky-50"
                  : "dark:hover:bg- hover:bg-[#bec3f2]"
              }`}
            >
              {el}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 justify-items-center gap-15 xl:grid-cols-2">
        {projectData
          .filter(
            (el) => el.type.includes(category) || category === ProjectType.All,
          )
          .map((el) => {
            return <Project key={el.title} {...el} />;
          })}
      </div>
    </div>
  );
}

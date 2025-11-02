import { ProjectStruct } from "@/data/projectData";
import Image from "next/image";

import Link from "next/link";

export default function Project({
  src,
  title,
  date,
  type,
  links,
  skills,
  explanation,
}: ProjectStruct) {
  return (
    <div
      className="flex flex-col 
      h-auto min-w-[290px] mx-4
      align-center w-full 
      "
    >
      <div className="">
        <Image
          src={src}
          alt={title}
          width={500}
          height={500}
          className="object-cover h-[20rem] shadow-xl"
        />
      </div>

      {/* Project details below the image/gif */}
      <div className="space-y-2 px-2 mt-5">
        <h2 className="text-2xl font-bold text-indigo-400 dark:text-indigo-200 microsoftFont">
          {title}
        </h2>
        <div className="flex flex-wrap gap-2 text-gray-800 dark:text-gray-300 microsoftFont">
          <span className=" dark:text-white dark:opacity-70">{date}</span>
          <span>|</span>
          <span>{type}</span>
          <span>|</span>
          {links &&
            links.map((el, index) => {
              return (
                <Link
                  key={index}
                  href={el.url}
                  className="dark:text-gray-300
                  text-indigo-500
                   hover:text-indigo-700 dark:hover:text-indigo-200 
                   hover:scale-105"
                >
                  [{el.name}]
                </Link>
              );
            })}
        </div>
        <span className="microsoftFont text-gray-400 dark:text-gray-300">
          {skills}
        </span>
        <div className="py-2">
          {explanation.map((el, index) => {
            return <p key={index}>{el}</p>;
          })}
        </div>
      </div>
    </div>
  );
}

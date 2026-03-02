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
    <div className="mx-4 flex h-auto w-full min-w-[290px] flex-col items-center">
      <div className="">
        <Image
          src={src}
          alt={title}
          width={500}
          height={500}
          className="h-[20rem] rounded-xl object-cover shadow-xl"
        />
      </div>

      {/* Project details below the image/gif */}
      <div className="mt-5 space-y-2 px-2">
        <h2 className="microsoftFont text-2xl font-bold text-indigo-400 dark:text-[#f9faff]">
          {title}
        </h2>
        <div className="microsoftFont flex flex-wrap items-center gap-2 text-gray-800 dark:text-[#f0f1ff]">
          {date}
          <span>|</span>
          <span>{type}</span>
          <span>|</span>
          {links &&
            links.map((el, index) => {
              return (
                <Link
                  key={index}
                  href={el.url}
                  className="hover: px-1 dark:bg-[#5959a9] dark:hover:bg-[#aea8d1]"
                >
                  {el.name}
                </Link>
              );
            })}
        </div>
        <span className="microsoftFont text-gray-400 dark:text-[#e6e8fe]">
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

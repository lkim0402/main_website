// import Link from "next/link";
import { PostLink as PostLinkStruct } from "../../types/post";
// import React from "react";
import Link from "next/link";

export default function PostLink({ path, title, date }: PostLinkStruct) {
  return (
    <div className="flex flex-row items-center ">
      {/* Date */}
      <div
        className="
        basis-[6.5rem] shrink-0 grow-0
         text-gray-600
         microsoftFont
         pt-[0.25rem]
         "
      >
        {date}
      </div>

      {/* Content */}
      <section className="">
        <Link href={`/blog/${path}`}>
          <div
            className="text-gray-800 dark:text-gray-100
            transition-all duration-300 hover:scale-101
            line-clamp-2 font-normal underline decoration-dotted"
          >
            {title}
          </div>
        </Link>
      </section>
    </div>
  );
}

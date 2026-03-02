// import Link from "next/link";
import { PostLink as PostLinkStruct } from "../../types/BlogPost";
// import React from "react";
import Link from "next/link";

export default function PostLink({ path, title, date }: PostLinkStruct) {
  return (
    <div className="flex flex-row items-center">
      {/* Date */}
      <div className="microsoftFont shrink-0 grow-0 basis-[6.5rem] pt-[0.25rem] dark:text-[#bab1ec]">
        {date}
      </div>

      {/* Content */}
      <section className="">
        <Link href={`/blog/${path}`}>
          <div className="line-clamp-2 font-normal text-gray-800 underline decoration-dotted transition-all duration-300 hover:scale-101 dark:text-gray-100">
            {title}
          </div>
        </Link>
      </section>
    </div>
  );
}

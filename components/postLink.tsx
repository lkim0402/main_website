// import Link from "next/link";
import { PostLink as PostLinkStruct } from "../types/post";
// import React from "react";
import Link from "next/link";

export default function PostLink({ path, title, date }: PostLinkStruct) {
  return (
    <div className="flex flex-row">
      {/* Date */}
      <div
        className="
        basis-[6.5rem] shrink-0 grow-0
         text-gray-600
         microsoftFont"
      >
        {date}
      </div>

      {/* Content */}
      <section className="underline decoration-dotted">
        <Link href={`/blog/${path}`}>
          <h3
            className="text-gray-800 dark:text-gray-100
            transition-all duration-300 hover:scale-101
            line-clamp-2 "
          >
            {title}
          </h3>
        </Link>
      </section>
    </div>
  );
}

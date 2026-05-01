// import Link from "next/link";
import { PostLink as PostLinkStruct } from "../../types/BlogPost";
// import React from "react";
import Link from "next/link";

export default function PostLink({
  path,
  title,
  date,
  rootPath = "/blog",
}: PostLinkStruct & { rootPath?: string }) {
  return (
    <div className="flex flex-row items-center">
      {/* Date */}
      <div className="microsoftFont shrink-0 grow-0 basis-[6.5rem] pt-[0.25rem] text-[#bfc0f1]">
        {date}
      </div>

      {/* Content */}
      <section className="">
        <Link href={`${rootPath}/${path}`}>
          <div className="line-clamp-2 font-normal text-gray-100 underline decoration-dotted transition-all duration-300 hover:scale-101">
            {title}
          </div>
        </Link>
      </section>
    </div>
  );
}

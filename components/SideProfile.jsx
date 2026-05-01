"use client";
import Link from "next/link";
import Image from "next/image";

const headerElem = ["home", "resume", "projects", "devlog", "blog", "mind💭"];

export function SideProfile() {
  return (
    <div className="border-2 border-indigo-300/5 bg-blue-50/5">
      {/* picture */}
      <div className="flex justify-center">
        <Image src="/sky.gif" alt="test" width={200} height={500} />
      </div>
      {/* category */}
      <div className="microsoftFont mx-5 my-10 flex flex-col text-xl md:w-36">
        {headerElem.map((el) => (
          <Link
            key={el}
            href={
              el == "home"
                ? "/"
                : el == "mind💭"
                  ? "https://leejun-obsidian-vault.vercel.app/"
                  : `/${el}`
            }
            className={`transform transition-all duration-300 hover:scale-105 hover:text-blue-200 ${
              el == "mind" && "underline"
            }`}
            title={el == "mind" ? "obsidian vault" : undefined}
            rel={el == "mind" ? "noopener noreferrer" : undefined}
            target={el == "mind" ? "_blank" : undefined}
          >
            {el}
          </Link>
        ))}
      </div>
    </div>
  );
}

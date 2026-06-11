"use client";
import Link from "next/link";
import { IconList } from "components/IconList";

export default function Home() {
  return (
    <div>
      {/* section 1 - cover */}
      <section className="flex flex-col gap-6 sm:flex-row">
        {/* intro */}
        <div className="text-left">
          {/* 1st part of the intro */}
          <div className="microsoftFont mb-6">
            <p className="text-[2rem] font-bold">
              Welcome to my small corner of the web!
            </p>
            <div className="mb-3 text-[#dcdfff]">
              <p>🎧ྀ software engineer (ai, backend) </p>
            </div>
          </div>
          <div className="flex-col space-y-2">
            <p>
              I&apos;m Leejun, and I&apos;m a researcher / programmer. I&apos;m
              currently studying{" "}
              <span className="highlight">CS @ Paul G. Allen School</span>.
            </p>
            <div>
              Currently I&apos;m:
              <ul className="list-inside list-disc">
                <li>learning ai engineering & workflows</li>
                <li>
                  trying game dev (unity c#.. attempting a visual novel style
                  rpg)
                </li>
                <li>researching AR tech and LLMs at Makeability Lab @ UW</li>
              </ul>
            </div>
            <p>
              Outside of tech, I love reading, art, talking walks, and gaming.
            </p>
            <p>Feel free to reach out anywhere!</p>
          </div>
          <div className="mt-5">
            <IconList></IconList>
          </div>
        </div>
      </section>

      {/* Nav guide section */}
      <section className="mt-5 bg-blue-50/8 px-6 py-7 text-white">
        <p className="microsoftFont mb-3 text-[1.2rem] font-bold">
          What&apos;s here
        </p>
        <ul className="flex list-disc flex-col pl-6">
          <li>
            <span className="microsoftFont font-medium text-indigo-300">
              resume
            </span>
            {" — "}work experience, education, and skills
          </li>
          <li>
            <span className="microsoftFont font-medium text-indigo-300">
              projects
            </span>
            {" — "}personal and school projects
          </li>
          <li>
            <span className="microsoftFont font-medium text-indigo-300">
              blog
            </span>
            {" — "}technical notes, algorithms, and reflections
          </li>
          <li>
            <span className="microsoftFont font-medium text-indigo-300">
              case studies
            </span>
            {" — "}deep-dives into AI pipelines and systems I&apos;ve shipped
            professionally
          </li>
          <li>
            <span className="microsoftFont font-medium text-indigo-300">
              mind💭
            </span>
            {" — "}my obsidian vault, open to the public
          </li>
        </ul>
      </section>

      {/* About section*/}

      <section className="mt-5 border-[#787db8]] bg-blue-50/8 px-6 py-7 text-white">
        <section className="text-left">
          <p className="microsoftFont mb-1 text-[1.2rem] font-bold">
            About this website
          </p>
        </section>
        <div className="microsoftFont font-bold text-[#dcdfff]">
          🛠️ Tech stack: React, Tailwind CSS, NextJS, MDX, Vercel
        </div>
        <ul className="flex list-disc flex-col pl-6">
          <li>
            My website was created around March 2025 as a personal (online)
            journal, as well as keeping documentation or technical details for
            various tools & tech. Everything just reflects my personal opinions.
          </li>
          <li>
            I&apos;m primarily inspired by{" "}
            <a
              href="https://austinkleon.com/show-your-work/"
              className="textLink underline"
            >
              Show Your Work
            </a>{" "}
            and{" "}
            <Link
              href="https://www.swyx.io/learn-in-public"
              className="textLink underline"
            >
              Learn in Public
            </Link>
            .
          </li>
          <li>More thoughts about documentation (2/12/26)</li>
        </ul>
      </section>
    </div>
  );
}

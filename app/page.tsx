"use client";
import Link from "next/link";
import Image from "next/image";
import { IconList } from "components/IconList";
import { Picture } from "components/Picture";

export default function Home() {
  return (
    <div className="mt-4">
      {/* section 1 - cover */}
      <section className="flex flex-col gap-6 sm:flex-row">
        {/* picture */}
        {/* <Picture></Picture> */}

        {/* intro */}
        <div className="text-left">
          <IconList></IconList>
          {/* 1st part of the intro */}
          <div className="microsoftFont">
            <p className="text-[2rem] font-bold">Hi, I&apos;m Leejun Kim!</p>
            <div className="mb-3 text-gray-600 dark:text-[#dcdfff]">
              <p>🎧ྀ software engineer (ai, backend) </p>
            </div>
          </div>
          <div className="flex-col space-y-2">
            <p>Welcome to my small corner of the web!</p>
            <p>
              I&apos;m Leejun, and I&apos;m a researcher / programmer. I&apos;m
              currently studying{" "}
              <span className="highlight">CS @ Paul G. Allen School</span>.
            </p>
            <p>
              Currently, I&apos;m exploring different things! I’m polishing my
              full stack skills, learning AI-workflows, trying to document
              everything, making an AI + Unity based project thing, and
              researching{" "}
              <span className="highlight">
                {" "}
                AR tech and LLMs at Makeability Lab @ UW
              </span>
              .
            </p>
            <p>
              Outside of tech, I love reading (usually SF, drama, self-help,
              essays), art (drawing on my iPad!), and games (currently into
              balatro).
            </p>
            <p>Feel free to reach out anywhere!</p>
          </div>
        </div>
      </section>

      {/* About section*/}

      <section className="mt-10 bg-[#362F4F] px-6 py-7 text-[#362F4F] dark:bg-[#cbc9f9]">
        <section className="text-left">
          <p className="microsoftFont mb-1 text-[1.2rem] font-bold">
            About this website
          </p>
        </section>
        <div className="microsoftFont font-bold text-[#301e72]">
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

      {/* Recent posts */}
      {/* Recent projects */}
    </div>
  );
}

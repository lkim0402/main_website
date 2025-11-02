"use client";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-4">
      {/* section 1 - cover */}
      <section className="flex flex-col sm:flex-row gap-6">
        {/* picture */}
        <div className="w-[36rem] aspect-[3/4] relative picture-frame">
          <div className="absolute inset-0 flex flex-col pointer-events-none">
            {/* title bar */}
            <div className="h-7 bg-blue-100 border border-gray-500 shadow-sm px-2 text-xs">
              <div className="flex mt-1 items-center justify-end space-x-0.5">
                <div className="w-4 h-4 bg-gray-100 border border-gray-500 flex items-center justify-center text-gray-800">
                  _
                </div>
                <div className="w-4 h-4 bg-gray-100 border border-gray-500 flex items-center justify-center text-gray-800">
                  ◻
                </div>
                <div className="w-4 h-4 bg-gray-100 border border-gray-500 flex items-center justify-center text-gray-800">
                  X
                </div>
              </div>
            </div>

            <div className="h-6 bg-gray-100 border-l border-r  border-b border-gray-500 shadow-sm flex items-center px-1 text-xs microsoftFont">
              <span className="px-1 text-gray-800">File</span>
              <span className="px-1 text-gray-800">Edit</span>
              <span className="px-1 text-gray-800">View</span>
            </div>

            <div className="flex-grow bg-gray-300 p-1 border-t border-l  border-b border-r border-gray-500 shadow-inner relative">
              <Image
                src="/cand1.jpg"
                alt="test"
                fill
                className="object-cover"
              />
            </div>

            <div className="h-3 bg-gray-100 border-l border-r  border-b border-gray-500 shadow-sm flex items-center px-1 text-xs microsoftFont"></div>
          </div>
        </div>

        {/* intro */}
        <div className=" text-left">
          {/* 1st part of the intro */}
          <div className="microsoftFont">
            <p className="font-bold text-[2rem]">Hi, I&apos;m Leejun Kim!</p>
            <div className="text-gray-600 dark:text-indigo-200 mb-3 ">
              <p>🌀🐚 software engineer (backend, cloud, ai)</p>
              <div className="flex gap-2 mt-1">
                <Link
                  href="https://github.com/lkim0402"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="textLink"
                >
                  github
                </Link>
                <Link
                  href="https://www.linkedin.com/in/leejunkim/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="textLink"
                >
                  linkedln
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-col space-y-2">
            <p>Welcome to my small corner of the web!</p>
            <p>
              I&apos;m Leejun, and I&apos;m a researcher / programmer. I&apos;m
              currently studying CS @ Paul G. Allen School.
            </p>
            <p>
              Currently, I&apos;m exploring different things! I’m learning Java
              SpringBoot, aiming for AWS Certified Solutions Architect (cloud
              engineering seems cool), polishing my full stack skills, and
              researching AR tech and LLMs at Makeability Lab @ UW.
            </p>
            <p>
              Outside of tech, I love reading (hopefully I can finish my to-read
              list), art, games, and organizing my messy notes.
            </p>
            <p>Feel free to reach out anywhere!</p>
          </div>
        </div>
      </section>

      {/* About section*/}

      <section className="border-2 border-gray-300 shadow-sm py-7 px-6 mt-10 text-black bg-blue-100 dark:bg-[#cbc9f9]">
        <section className="text-left">
          <p className=" font-bold text-[1.2rem] mb-1 microsoftFont">
            About this website
          </p>
        </section>
        <div className="microsoftFont text-indigo-800">
          🛠️ Tech stack: React, Tailwind CSS, NextJS, MDX, Vercel
        </div>
        <ul className="flex flex-col list-disc pl-6">
          <li>
            My website was created around March 2025 as a personal (online)
            journal, as well as keeping documentation or technical details for
            various tools & tech. Everything just reflects my personal opinions.
          </li>
          <li>
            I&apos;m primarily inspired by{" "}
            <a
              href="https://austinkleon.com/show-your-work/"
              className="underline textLink"
            >
              Show Your Work
            </a>{" "}
            and{" "}
            <Link
              href="https://www.swyx.io/learn-in-public"
              className="underline textLink"
            >
              Learn in Public
            </Link>
            .
          </li>
        </ul>
      </section>

      {/* Recent posts */}
      {/* Recent projects */}
    </div>
  );
}

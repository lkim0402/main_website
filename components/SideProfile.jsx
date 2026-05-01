"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const headerElem = ["home", "resume", "projects", "devlog", "blog", "mind💭"];

export function SideProfile() {
  const [curTheme, setCurTheme] = useState("dark");
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setCurTheme("light");
      document.documentElement.classList.remove("dark");
    } else {
      setCurTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    if (typeof window !== "undefined") {
      const isDark = document.documentElement.classList.contains("dark");
      if (isDark) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        setCurTheme("light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        setCurTheme("dark");
      }
    }
  };

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
            className={`transform transition-all duration-300 hover:scale-105 hover:text-blue-600 dark:hover:text-blue-200 ${
              el == "mind" && "underline"
            }`}
            title={el == "mind" ? "obsidian vault" : undefined}
            rel={el == "mind" ? "noopener noreferrer" : undefined}
            target={el == "mind" ? "_blank" : undefined}
          >
            {el}
          </Link>
        ))}
        <button
          onClick={toggleTheme}
          className="relative rounded-full outline-offset-[-4px] transition-all duration-200 ease-in-out hover:cursor-pointer hover:opacity-40 active:scale-95 dark:outline-white"
          title="Toggle Theme"
        >
          {curTheme == "light" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-sun-icon lucide-sun"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-moon h-7 w-7 px-1 py-1"
              viewBox="0 0 16 16"
            >
              <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286" />
            </svg>
          )}
        </button>{" "}
      </div>
    </div>
  );
}

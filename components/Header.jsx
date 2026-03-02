"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const headerElem = ["home", "resume", "projects", "books", "blog", "mind💭"];

export function Header() {
  const [curTheme, setCurTheme] = useState("light");
  const [showSidebar, setShowSidebar] = useState(false);
  const pathname = usePathname();

  const toggleTheme = () => {
    if (typeof window !== "undefined" && document) {
      if (document.documentElement.classList.contains("dark")) {
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
    <header>
      {/* Sidebar for small screens */}
      <div className="text-md MicrosoftFont ml-10 flex justify-start md:hidden">
        {/* Menu Button */}
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="my-3 mr-10"
          aria-label="side menu button"
        >
          <Menu size={30} />
        </button>
        {/* Sidebar */}
        {
          <>
            {showSidebar && (
              <div
                onClick={() => setShowSidebar(false)} // click to close sidebar
                className="fixed inset-0 z-40 bg-black/50"
              ></div>
            )}
            <div
              className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col gap-4 bg-white p-6 shadow-lg duration-300 ease-in-out dark:bg-[#15182a] ${showSidebar ? "translate-x-0" : "-translate-x-full"}`}
            >
              <div className="mb-5 flex justify-between">
                <p className="font-bold">Menu</p>
                <button
                  onClick={() => setShowSidebar(false)} // click to close sidebar
                  aria-label="exit button"
                >
                  <X />
                </button>
              </div>
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
          </>
        }
      </div>

      {/* Top nav for medium and up */}
      <nav className="mx-auto my-4 hidden md:block md:w-7/12">
        <div className="flex justify-between">
          <div className="microsoftFont center relative top-2">
            <Link href="/">LEEJUN KIM</Link>
          </div>
          <div className="flex gap-4">
            {headerElem.map((el) => (
              <Link
                key={el}
                href={
                  el === "home"
                    ? "/"
                    : el === "mind💭"
                      ? "https://leejun-obsidian-vault.vercel.app/"
                      : `/${el.toLowerCase()}`
                }
                className={clsx(
                  "microsoftFont transform transition-all duration-300 hover:scale-105 hover:text-indigo-600 dark:hover:text-indigo-200",
                  {
                    "hover:underline": el === "mind",
                    "text-indigo-600 dark:text-indigo-300":
                      pathname ===
                      (el === "home" ? "/" : `/${el.toLowerCase()}`),
                  },
                )}
                title={el === "mind💭" ? "obsidian vault" : undefined}
                rel={el === "mind💭" ? "noopener noreferrer" : undefined}
                target={el === "mind💭" ? "_blank" : undefined}
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
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

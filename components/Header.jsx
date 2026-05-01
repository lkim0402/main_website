"use client";
import Link from "next/link";
import { useState } from "react";
import { X, Menu } from "lucide-react";
import { usePathname } from "next/navigation";

const headerElem = ["home", "resume", "projects", "devlog", "blog", "mind💭"];

export function Header() {
  const [showSidebar, setShowSidebar] = useState(false);
  const pathname = usePathname();

  return (
    <header>
      {/* Sidebar for small screens */}
      <div className="text-md microsoftFont justify-left ml-15 flex pt-8 md:hidden">
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
              className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col gap-4 bg-[#15182a] p-6 text-lg shadow-lg duration-300 ease-in-out ${
                showSidebar ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="mb-5 flex justify-end">
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
                  onClick={() => setShowSidebar(false)}
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
          </>
        }
      </div>
    </header>
  );
}

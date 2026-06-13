"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { X, Menu } from "lucide-react";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "home", path: "/" },
  { label: "resume", path: "/resume" },
  { label: "projects", path: "/projects" },
  { label: "blog", path: "/blog" },
  { label: "case studies", path: "/case-studies" },
  {
    label: "mind💭",
    path: "https://leejun-obsidian-vault.vercel.app/",
    external: true,
  },
];

export function Header() {
  const [showSidebar, setShowSidebar] = useState(false);
  const pathname = usePathname();
  const isActive = (path) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  return (
    <header>
      <div className="flex px-4 pt-4 md:hidden">
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="my-1 mb-10"
          aria-label="side menu button"
        >
          <Menu size={30} />
        </button>
      </div>

      {/* Backdrop */}
      {showSidebar && (
        <div
          onClick={() => setShowSidebar(false)}
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
        />
      )}

      {/* Sidebar — styled like SideProfile */}
      <div
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-2 border-indigo-300/5 bg-[#232338] shadow-lg transition-transform duration-300 ease-in-out md:hidden ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-3">
          <button onClick={() => setShowSidebar(false)} aria-label="close menu">
            <X />
          </button>
        </div>

        <div className="flex justify-center bg-blue-50/5">
          <Image src="/sky.gif" alt="sky" width={200} height={500} />
        </div>

        <div className="microsoftFont mx-5 my-10 ml-7 flex flex-col text-xl">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.path}
              onClick={() => setShowSidebar(false)}
              className={`transition-all duration-300 hover:text-blue-200 ${
                isActive(item.path) ? "text-indigo-300" : ""
              }`}
              rel={item.external ? "noopener noreferrer" : undefined}
              target={item.external ? "_blank" : undefined}
            >
              {isActive(item.path) ? `> ${item.label}` : item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

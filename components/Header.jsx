"use client";
import Link from "next/link";
import { useState } from "react";
import { X, Menu } from "lucide-react";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "home", path: "/" },
  { label: "resume", path: "/resume" },
  { label: "projects", path: "/projects" },
  { label: "blog", path: "/blog" },
  { label: "case studies", path: "/case-studies" },
  { label: "mind💭", path: "https://leejun-obsidian-vault.vercel.app/", external: true },
];

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
        <>
          {showSidebar && (
            <div
              onClick={() => setShowSidebar(false)}
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
                onClick={() => setShowSidebar(false)}
                aria-label="exit button"
              >
                <X />
              </button>
            </div>
            {navItems.map((item) => {
              const active =
                item.path === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.path);
              return (
                <Link
                  key={item.label}
                  href={item.path}
                  onClick={() => setShowSidebar(false)}
                  className={`transition-all duration-300 hover:text-blue-200 ${
                    active ? "text-indigo-300" : ""
                  }`}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  target={item.external ? "_blank" : undefined}
                >
                  {active ? `> ${item.label}` : item.label}
                </Link>
              );
            })}
          </div>
        </>
      </div>
    </header>
  );
}

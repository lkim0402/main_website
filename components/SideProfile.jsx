"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "home", path: "/" },
  { label: "resume", path: "/resume" },
  { label: "blog", path: "/blog" },
  // header
  { type: "header", label: "projects/devlogs" },
  { label: "project gallery", path: "/projects" },
  { label: "case studies", path: "/case-studies" },
  { label: "this website", path: "/blog/category/devlog/main-website" },
  // prob will add emergentmaze, trading bot, trustdrift

  // header
  { type: "header", label: "other" },
  { label: "guestbook", path: "/guestbook" },
  {
    label: "mind💭",
    path: "https://leejun-obsidian-vault.vercel.app/",
    external: true,
  },
];

export function SideProfile() {
  const pathname = usePathname();
  const isActive = (path) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  return (
    <div className="border-2 border-indigo-300/5 bg-blue-50/5">
      <div className="flex justify-center">
        <Image src="/sky.gif" alt="test" width={200} height={500} priority />
      </div>

      <div className="mx-4 my-6 flex flex-col md:w-44">
        {navItems.map((item, i) =>
          item.type === "header" ? (
            <div key={i} className="mt-5 mb-1">
              <span className="microsoftFont text-base text-indigo-300/40 select-none">
                {item.label}
              </span>
              <div className="mt-1 border-b border-indigo-300/20" />
            </div>
          ) : (
            <Link
              key={item.path}
              href={item.path}
              className={`py-0.5 microsoftFont text-base transition-all duration-200 hover:translate-x-1 hover:text-blue-200 ${
                isActive(item.path) ? "text-indigo-300" : "text-[#fffdf7]"
              }`}
              rel={item.external ? "noopener noreferrer" : undefined}
              target={item.external ? "_blank" : undefined}
            >
              {isActive(item.path) ? `> ${item.label}` : `  ${item.label}`}
            </Link>
          ),
        )}
      </div>
    </div>
  );
}

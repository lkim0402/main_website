"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "home", path: "/" },
  { label: "resume", path: "/resume" },
  { label: "projects", path: "/projects" },
  { label: "blog", path: "/blog" },
  { label: "case studies", path: "/case-studies" },
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
      {/* picture */}
      <div className="flex justify-center">
        <Image src="/sky.gif" alt="test" width={200} height={500} priority />
      </div>
      {/* category */}
      <div className="microsoftFont mx-5 my-10 flex flex-col text-xl md:w-36">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.path}
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
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { CaseStudyEntry } from "@/lib/posts";

export default function CaseStudiesClient({
  studies,
}: {
  studies: CaseStudyEntry[];
}) {
  const searchParams = useSearchParams();
  const initialOrg = searchParams.get("org") ?? "All";

  const orgs = ["All", ...Array.from(new Set(studies.map((s) => s.meta.org)))];
  const [selected, setSelected] = useState(
    orgs.includes(initialOrg) ? initialOrg : "All",
  );

  const filtered =
    selected === "All"
      ? studies
      : studies.filter((s) => s.meta.org === selected);

  return (
    <div>
      <div className="mb-5 flex flex-wrap gap-3">
        {orgs.map((org) => (
          <button
            key={org}
            onClick={() => setSelected(org)}
            className={`microsoftFont px-2 py-1 hover:cursor-pointer ${
              org === selected
                ? "bg-indigo-400 text-sky-50"
                : "hover:bg-[#4a4a7a]"
            }`}
          >
            {org}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        {filtered.map(({ slug, meta }) => (
          <Link key={slug} href={`/case-studies/${slug}`}>
            <div className="cursor-pointer border border-indigo-400/20 p-5 transition-colors hover:border-indigo-400/50">
              <div className="mb-1 flex items-start justify-between gap-4">
                <h2 className="text-lg font-semibold text-indigo-200">
                  {meta.title}
                </h2>
                <div className="microsoftFont flex shrink-0 flex-col items-end gap-1 text-xs text-[#bfc0f1]">
                  <span>{meta.org}</span>
                  <span>{meta.team}</span>
                </div>
              </div>
              <p className="mb-2 text-sm font-medium text-indigo-300">
                {meta.impact}
              </p>
              <p className="mb-4 text-sm text-[#e6e8fe]">{meta.summary}</p>
              <div className="flex flex-wrap gap-2">
                {meta.tech.slice(0, 6).map((t) => (
                  <span
                    key={t}
                    className="bg-indigo-400/20 px-2 py-0.5 text-xs text-indigo-200"
                  >
                    {t}
                  </span>
                ))}
                {meta.tech.length > 6 && (
                  <span className="text-xs text-indigo-400">
                    +{meta.tech.length - 6} more
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

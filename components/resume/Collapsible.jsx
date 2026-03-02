"use client";

import { useState } from "react";
import Section from "./Section";

export default function Collapsible({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="mb-3">
      <div className="">
        <button
          className="flex w-full cursor-pointer items-center justify-between transition-all disabled:pointer-events-none"
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          title={`${isOpen ? "Click to close" : "Click to expand"}`}
        >
          <div className="mb-8 flex w-full items-center justify-between border-b-2 border-indigo-100 dark:border-[#d5d8fb]">
            <Section title={title} />
            {/* the triangle icon*/}
            <div
              className={`transform transition-transform duration-300 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L6 6L11 1"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </button>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "h-auto opacity-100" : "h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

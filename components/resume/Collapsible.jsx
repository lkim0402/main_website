"use client";

import { useState } from "react";
import Section from "./Section";

export default function Collapsible({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className={`mb-4 border-2 border-[#787db8] bg-blue-50/5 px-5 py-5 transition-all duration-300`}
    >
      <button
        className="flex w-full cursor-pointer items-center justify-between transition-all"
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        {/* title and icon logic remains same, but wrapped in a simpler flex */}
        <Section title={title} />
        <div
          className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
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
      </button>

      {isOpen && (
        <div className="mt-3 border-b-2 border-[#787db8]" />
      )}

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "mt-4 h-auto opacity-100" : "h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

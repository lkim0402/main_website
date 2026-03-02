import { sectionDetails } from "@/data/types";
import Image from "next/image";

export default function SectionDetails({
  org: title,
  orgLink,
  date,
  position,
  skills = [],
  description = [],
  icon,
  link,
}: sectionDetails) {
  // Normalize subtitle to an array if it's a string
  const subtitleArray = Array.isArray(position) ? position : [position];

  return (
    <div className="mb-2 flex items-start gap-4">
      {/* Icon */}
      {icon && (
        <div className="mt-1 hidden h-[48px] min-w-[48px] md:block">
          <Image
            src={icon}
            alt="logo"
            width={68}
            height={68}
            className="rounded-md"
          />
        </div>
      )}

      {/* Right content */}
      <div className="flex-1 md:ml-6">
        {/* Render each role (subtitle) */}
        {subtitleArray.map((role, index) => (
          <div key={index} className="mb-6">
            <div className="mb-2">
              {/* title + desc */}
              <div className="flex">
                {icon && (
                  <div className="mt-1 mr-4 block h-[48px] min-w-[48px] md:hidden">
                    <Image
                      src={icon}
                      alt="logo"
                      width={68}
                      height={68}
                      className="rounded-md"
                    />
                  </div>
                )}
                {/* Role title */}
                <div>
                  <p className="text-[1.20rem] font-medium dark:text-indigo-200">
                    {role}
                  </p>

                  {/* Company and Date (only show on first role) */}
                  {index === 0 && (
                    <div className="mb-1 text-gray-600 dark:text-[#f3f4ff]">
                      {orgLink ? (
                        <a
                          href={orgLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {title}
                        </a>
                      ) : (
                        title
                      )}{" "}
                      | {date}
                    </div>
                  )}
                </div>
              </div>
              {/* Tech Stack */}
              {skills[index] && skills[index].length > 0 && (
                <p className="text-gray-600 italic dark:text-[#e6e8fe]">
                  {skills[index].join(", ")}
                </p>
              )}
            </div>

            {/* Description */}
            {description[index] && description[index].length > 0 && (
              <ul className="list-none space-y-1">
                {description[index].map((desc, descIdx) => (
                  <li key={descIdx}>{desc}</li>
                ))}
              </ul>
            )}

            {/* Links */}
            {link && (
              <div className="flex flex-row space-x-2">
                {Object.entries(link).map(([key, value]) => (
                  <div key={key} className="my-4 px-1.5 py-0.5">
                    <a
                      href={value}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="linkButton"
                    >
                      {key}
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

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
    <div className="flex items-start gap-4 mb-2">
      {/* Icon */}
      {icon && (
        <div className="min-w-[48px] h-[48px] mt-1 hidden md:block">
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
            <div className="mb-4">
              {/* title + desc */}
              <div className="flex ">
                {icon && (
                  <div className="min-w-[48px] h-[48px] mt-1 md:hidden block mr-4 ">
                    <Image
                      src={icon}
                      alt="logo"
                      width={68}
                      height={68}
                      className="rounded-md "
                    />
                  </div>
                )}
                {/* Role title */}
                <div>
                  <p className="font-medium text-[1.20rem] dark:text-indigo-200">
                    {role}
                  </p>

                  {/* Company and Date (only show on first role) */}
                  {index === 0 && (
                    <div className="text-gray-600 dark:text-gray-300 mb-1">
                      {orgLink ? (
                        <a
                          href={orgLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline textLink"
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
              {/* Skills */}
              {skills[index] && skills[index].length > 0 && (
                <p className="italic text-gray-600 dark:text-gray-300">
                  {skills[index].join(", ")}
                </p>
              )}
            </div>

            {/* Description */}
            {description[index] && description[index].length > 0 && (
              <ul className="list-none  space-y-1">
                {description[index].map((desc, descIdx) => (
                  <li key={descIdx}>{desc}</li>
                ))}
              </ul>
            )}

            {/* Links */}
            {link && (
              <div className="flex flex-row space-x-2">
                {Object.entries(link).map(([key, value]) => (
                  <div
                    key={key}
                    className="py-0.5 px-1.5  my-4 
                     "
                  >
                    <a
                      href={value}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="buttonLink"
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

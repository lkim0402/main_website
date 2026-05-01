"use client";

import SectionDetails from "../../components/resume/SectionDetails";
import Collapsible from "../../components/resume/Collapsible";

// importing data
import { WorkDetails } from "@/data/workDetails";
import { educationDetails } from "@/data/educationDetails";
import { activityDetails } from "@/data/activityDetails";
import PageTitle from "components/PageTitle";

export default function Resume() {
  return (
    <>
      <PageTitle title="Resume" description="internship/lab/work experiences" />

      <div className="flex flex-col">
        {/* Education - using Collapsible */}

        {/* Work Experience - using Collapsible */}
        <Collapsible title="Experience" defaultOpen>
          {WorkDetails.map((el) => {
            return <SectionDetails key={el.org} {...el} />;
          })}
        </Collapsible>

        <Collapsible title="Education" defaultOpen>
          {educationDetails.map((el) => {
            return <SectionDetails key={el.org} {...el} />;
          })}
        </Collapsible>

        {/* Certs - using Collapsible */}
        <Collapsible title="Certifications" defaultOpen>
          <div className="mb-6">
            <div className="mb-4">
              {/* Role title */}
              <p className="text-[1.45rem] font-medium text-indigo-200">
                AWS Certified Cloud Practitioner
              </p>

              {/* Company and Date (only show on first role) */}
              <div className="mb-1 text-gray-300">
                April 2025
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="mb-4">
              {/* Role title */}
              <p className="text-[1.45rem] font-medium text-indigo-200">
                TensorFlow Developer Certificate{" "}
              </p>

              {/* Company and Date (only show on first role) */}
              <div className="mb-1 text-gray-300">
                Sept 2023
              </div>
            </div>
          </div>
        </Collapsible>

        {/* Activities - using Collapsible */}
        <Collapsible title="Activities" defaultOpen>
          {/* Add your activities content here */}

          <div className="">
            {activityDetails.map((el) => {
              return <SectionDetails key={el.org} {...el} />;
            })}
          </div>
        </Collapsible>

        {/* Skills - using Collapsible */}
        <Collapsible title="Skills" defaultOpen>
          <div className="mb-4 flex flex-col space-y-6">
            <div>
              <p className="text-lg font-semibold">Languages</p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://skillicons.dev/icons?i=java,js,ts,python,cs,bash"
                alt="Languages"
              />
            </div>

            <div>
              <p className="text-lg font-semibold">Frameworks / Libraries</p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://skillicons.dev/icons?i=spring,react,nextjs,nodejs,express,tailwind,unity,aws,tensorflow"
                alt="Frameworks"
              />
            </div>

            <div>
              <p className="text-lg font-semibold">Databases</p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://skillicons.dev/icons?i=postgresql,mongodb"
                alt="Frameworks"
              />
            </div>
          </div>
        </Collapsible>
      </div>
    </>
  );
}

import { Suspense } from "react";
import PageTitle from "../../components/PageTitle";
import CaseStudiesClient from "../../components/case-studies/CaseStudiesClient";
import { getAllCaseStudies } from "../lib/posts";

export default async function CaseStudies() {
  const studies = getAllCaseStudies();

  return (
    <div>
      <PageTitle
        title="Case Studies"
        description="End-to-end AI pipelines and systems I've delivered across different organizations"
      />
      <Suspense>
        <CaseStudiesClient studies={studies} />
      </Suspense>
    </div>
  );
}

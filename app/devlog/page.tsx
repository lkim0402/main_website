import PageTitle from "../../components/PageTitle";
import DevlogClient from "../../components/devlog/DevlogClient";
import { getAllDevlogs, getDevlogProjectDirs } from "../lib/posts";

export default async function Devlog() {
  const posts = getAllDevlogs();
  const projectDirs = getDevlogProjectDirs();

  const projectsWithStatus = projectDirs
    .map((dirName) => ({
      title: dirName,
      hasDevlogs: posts.some((post) => post.project === dirName),
    }))
    .filter((p) => p.hasDevlogs);

  return (
    <div className="flex flex-col gap-">
      <PageTitle title="Devlogs" description="A project-based archive" />
      <DevlogClient projects={projectsWithStatus} />
    </div>
  );
}

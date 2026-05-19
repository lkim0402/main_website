import path from "path";
import PostLink from "../../../components/post/PostLink";
import BackButton from "components/BackButton";
import {
  getAllDevlogs,
  resolveDevlogProjectDir,
  formatDate,
} from "../../lib/posts";

export default async function ProjectDevlogPage({
  params,
}: {
  params: Promise<{ project: string }>;
}) {
  const { project: projectSlug } = await params;
  const actualDirName = resolveDevlogProjectDir(projectSlug);

  if (!actualDirName) {
    return <div>Project folder not found.</div>;
  }

  const posts = getAllDevlogs()
    .filter((d) => d.project === actualDirName)
    .map((d) => {
      const postSlug = d.slug.split("/").slice(1).join("/");
      return {
        slug: postSlug,
        title: d.meta.title || path.basename(d.fullPath, ".mdx"),
        date: formatDate(d.actualDate),
      };
    });

  return (
    <div className="animate-in fade-in duration-300">
      <BackButton />
      <div className="microsoftFont">Devlogs for {actualDirName}</div>

      <div className="mt-8">
        <div className="flex flex-col justify-center">
          <ul className="">
            {posts.map((post) => (
              <li key={post.slug}>
                <PostLink
                  path={post.slug}
                  date={post.date}
                  title={post.title}
                  rootPath={`/devlog/${projectSlug}`}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

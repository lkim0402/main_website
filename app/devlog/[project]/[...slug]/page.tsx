import { MDXRemote } from "next-mdx-remote/rsc";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import rehypeHighlight from "rehype-highlight";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import BackButton from "../../../../components/BackButton";
import ImageGrid from "../../../../components/ImageGrid";

const options = {
  mdxOptions: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeHighlight, rehypeKatex],
  },
};

const components = {
  ImageGrid,
};

const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
};

function getDevlogPost(projectSlug: string, postSlug: string[]) {
  const devlogDirectory = path.join(process.cwd(), "devlogs");

  // Find the actual directory name that matches the projectSlug
  const projectDirs = fs
    .readdirSync(devlogDirectory, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  const actualDirName = projectDirs.find((dir) => slugify(dir) === projectSlug);

  if (!actualDirName) {
    throw new Error(`Project folder not found for slug: ${projectSlug}`);
  }

  // Decode post slug parts
  const decodedPostSlug = postSlug.map((s) => decodeURIComponent(s));

  // The file should be at devlogs/[actualDirName]/[...decodedPostSlug].mdx
  const filePath =
    path.join(devlogDirectory, actualDirName, ...decodedPostSlug) + ".mdx";

  if (!fs.existsSync(filePath)) {
    throw new Error(`Devlog not found: ${filePath}`);
  }

  const markdownFile = fs.readFileSync(filePath, "utf-8");
  const { data: frontMatter, content } = matter(markdownFile);

  return {
    frontMatter,
    content,
    actualDirName,
  };
}

export default async function DevlogPostPage({
  params,
}: {
  params: Promise<{ project: string; slug: string[] }>;
}) {
  const { project, slug } = await params;
  const { frontMatter, content } = getDevlogPost(project, slug);

  return (
    <article>
      <BackButton />
      <div className="mb-10 border-b-2 border-dotted border-blue-300">
        <div className="text-4xl font-bold break-words">
          {frontMatter.title || slug[slug.length - 1]}
        </div>
        <div className="microsoftFont my-4 flex flex-row gap-3">
          <span className="flex shrink-0 items-center text-[#bfc0f1]">
            <svg
              className="mr-1 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {frontMatter.date
              ? new Date(frontMatter.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : "No date"}
          </span>
          <div className="space-x-[0.5rem]">
            {(frontMatter.Tags || []).map((el: string) => (
              <span
                className="bg-indigo-400/30 px-[0.35rem] py-[0.375rem]"
                key={el}
              >
                #{el}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="postContent">
        <MDXRemote source={content} options={options} components={components} />
      </div>
    </article>
  );
}

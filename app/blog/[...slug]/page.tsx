import { MDXRemote } from "next-mdx-remote/rsc";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import rehypeHighlight from "rehype-highlight";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import BackButton from "components/BackButton";

const options = {
  mdxOptions: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeHighlight, rehypeKatex],
  },
};

// helper function to get post path
function getPost(slug: string[]) {
  const markdownFile = fs.readFileSync(
    path.join(process.cwd(), "posts", ...slug) + ".mdx",
    "utf-8",
  );
  const { data: frontMatter, content } = matter(markdownFile);
  return {
    frontMatter,
    // slug,
    content,
  };
}

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const {
    frontMatter,
    // slug,
    content,
  } = getPost(slug);

  return (
    <article>
      <BackButton />
      <div className="mb-10 border-b-2 border-dotted border-blue-300">
        <div className="text-4xl font-bold break-words">
          {frontMatter.title}
        </div>
        <div className="microsoftFont my-4 flex flex-row gap-3">
          <span className="flex shrink-0 items-center">
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
            {new Date(frontMatter.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <div className="space-x-[0.5rem]">
            {frontMatter.Tags.map((el: string) => {
              return (
                <span
                  className="bg-indigo-400/30 px-[0.35rem] py-[0.375rem]"
                  key={el}
                >
                  #{el}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      <div className="postContent">
        <MDXRemote source={content} options={options} />
      </div>
    </article>
  );
}

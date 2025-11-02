import { MDXRemote } from "next-mdx-remote/rsc";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import rehypeHighlight from "rehype-highlight";
import "/styles/highlight-js/tokyo-night-dark.css";

const options = {
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [rehypeHighlight],
  },
};

// helper function to get post path
function getPost(slug: string[]) {
  const markdownFile = fs.readFileSync(
    path.join(process.cwd(), "posts", ...slug) + ".mdx",
    "utf-8"
  );
  const { data: frontMatter, content } = matter(markdownFile);
  return {
    frontMatter,
    // slug,
    content,
  };
}

export default async function Post({ params }: { params: { slug: string[] } }) {
  const { slug } = await params;
  const {
    frontMatter,
    // slug,
    content,
  } = await getPost(slug);
  return (
    <article>
      <div className="border-b-2 border-dotted border-blue-300 mb-10">
        <div className="text-4xl font-bold break-words ">
          {frontMatter.title}
        </div>
        <div className="flex flex-row gap-3 my-4 microsoftFont">
          <span className="flex items-center shrink-0">
            <svg
              className="w-4 h-4 mr-1"
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
                  className="bg-blue-100 text-blue-800 text-[0.9rem] py-0.5 px-2"
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

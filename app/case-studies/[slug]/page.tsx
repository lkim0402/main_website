import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import BackButton from "../../../components/BackButton";
import { getCaseStudyContent, getAllCaseStudies } from "../../lib/posts";

const options = {
  mdxOptions: {
    rehypePlugins: [rehypeHighlight],
  },
};

export async function generateStaticParams() {
  return getAllCaseStudies().map(({ slug }) => ({ slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { frontMatter, content } = getCaseStudyContent(slug);

  return (
    <article>
      <BackButton />
      <div className="mb-8 border-b-2 border-dotted border-blue-300">
        <h1 className="mb-3 break-words text-3xl font-bold">
          {frontMatter.title}
        </h1>
        <div className="microsoftFont my-3 flex flex-wrap gap-4 text-sm text-[#bfc0f1]">
          <span>{frontMatter.org}</span>
          <span>{frontMatter.team}</span>
        </div>
        <p className="mb-3 font-medium text-indigo-300">{frontMatter.impact}</p>
        <div className="mb-5 flex flex-wrap gap-2">
          {frontMatter.tech.map((t) => (
            <span
              key={t}
              className="bg-indigo-400/20 px-2 py-0.5 text-xs text-indigo-200"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="postContent">
        <MDXRemote source={content} options={options} />
      </div>
    </article>
  );
}

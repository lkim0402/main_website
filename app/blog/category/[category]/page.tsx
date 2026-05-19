import PostLink from "../../../../components/post/PostLink";
import PageTitle from "../../../../components/PageTitle";
import { getAllPosts, slugify } from "../../../lib/posts";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const processedBlogs = getAllPosts().filter(
    (blog) => slugify(blog.meta.Category) === category,
  );

  const displayCategory =
    processedBlogs.length > 0 ? processedBlogs[0].meta.Category : category;

  return (
    <div>
      <PageTitle
        title={displayCategory}
        description={"Blog posts under " + displayCategory}
      />
      <div>
        <div className="flex flex-col justify-center">
          <div className="flex flex-row "></div>
          <div>
            <ul className="">
              {processedBlogs.map((blog) => (
                <li key={blog.slug}>
                  <PostLink
                    path={blog.slug}
                    date={blog.formattedDate}
                    title={blog.meta.title}
                  ></PostLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

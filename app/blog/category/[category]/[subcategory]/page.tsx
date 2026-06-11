import PostLink from "../../../../../components/post/PostLink";
import PageTitle from "../../../../../components/PageTitle";
import BackButton from "../../../../../components/BackButton";
import { getAllPosts, slugify } from "../../../../lib/posts";

export async function generateStaticParams() {
  const posts = getAllPosts();
  const seen = new Set<string>();
  const params: { category: string; subcategory: string }[] = [];
  for (const post of posts) {
    if (!post.meta.Subcategory) continue;
    const key = `${slugify(post.meta.Category)}|${slugify(post.meta.Subcategory)}`;
    if (!seen.has(key)) {
      seen.add(key);
      params.push({
        category: slugify(post.meta.Category),
        subcategory: slugify(post.meta.Subcategory),
      });
    }
  }
  return params;
}

export default async function SubcategoryPage({
  params,
}: {
  params: Promise<{ category: string; subcategory: string }>;
}) {
  const { category, subcategory } = await params;
  const posts = getAllPosts().filter(
    (blog) =>
      slugify(blog.meta.Category) === category &&
      slugify(blog.meta.Subcategory ?? "") === subcategory,
  );

  const displayCategory = posts[0]?.meta.Category ?? category;
  const displaySubcategory = posts[0]?.meta.Subcategory ?? subcategory;

  return (
    <div>
      <BackButton />
      <PageTitle
        title={displaySubcategory}
        description={displayCategory + " : " + displaySubcategory}
      />
      <div className="mb-5 border-b-2 border-dotted border-blue-300"></div>

      <ul>
        {posts.map((blog) => (
          <li key={blog.slug}>
            <PostLink
              path={blog.slug}
              date={blog.formattedDate}
              title={blog.meta.title}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

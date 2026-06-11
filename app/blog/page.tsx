import PostLink from "../../components/post/PostLink";
import PageTitle from "../../components/PageTitle";
import Subtitle from "components/SubTitle";
import Link from "next/link";
import { getAllPosts, slugify } from "../lib/posts";

export default async function Workshop() {
  const processedBlogs = getAllPosts();
  const recentBlogs = processedBlogs.slice(0, 5);

  const postCounts = processedBlogs.reduce(
    (acc, blog) => {
      const year = blog.actualDate.getFullYear().toString();
      acc[year] = (acc[year] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );
  const yearList = Object.keys(postCounts).sort(
    (a, b) => Number(b) - Number(a),
  );

  type CategoryTree = Record<
    string,
    { total: number; subcategories: Record<string, number> }
  >;
  const categoryTree = processedBlogs.reduce((acc, blog) => {
    const cat = blog.meta.Category;
    const sub = blog.meta.Subcategory;
    if (!acc[cat]) acc[cat] = { total: 0, subcategories: {} };
    acc[cat].total++;
    if (sub)
      acc[cat].subcategories[sub] = (acc[cat].subcategories[sub] || 0) + 1;
    return acc;
  }, {} as CategoryTree);
  const categoryList = Object.keys(categoryTree).sort();

  return (
    <div>
      <PageTitle
        title="Blogging"
        description="Posts about programming, reflections, and almost anything that's on my mind"
      />
      <Subtitle title="Most Recent" />
      <div>
        <div className="flex flex-col justify-center">
          <div className="flex flex-row"></div>
          <div>
            <ul className="">
              {recentBlogs.map((blog) => (
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

      {/* Category */}
      <div className="mt-6">
        <Subtitle title="By Category" />
        <ul className="flex list-none flex-col gap-1 pl-3">
          <li>
            <div className="origin-left font-normal text-gray-100 transition duration-300 ease-in-out hover:scale-101 hover:underline hover:decoration-dotted">
              <Link href="/blog/all">All ({processedBlogs.length})</Link>
            </div>
          </li>
          {categoryList.map((category) => (
            <li key={category}>
              <div className="origin-left font-normal text-gray-100 transition duration-300 ease-in-out hover:scale-101 hover:underline hover:decoration-dotted">
                <Link href={"/blog/category/" + slugify(category) + "/"}>
                  {category} ({categoryTree[category].total})
                </Link>
              </div>
              {Object.keys(categoryTree[category].subcategories).length > 0 && (
                <ul className="mt-0.5 flex list-none flex-col gap-0.5 pl-5">
                  {Object.entries(categoryTree[category].subcategories)
                    .sort(([a], [b]) => a.localeCompare(b))
                    .map(([sub, count]) => (
                      <li key={sub}>
                        <div className="origin-left text-sm font-normal text-gray-300 transition duration-300 ease-in-out hover:scale-101 hover:underline hover:decoration-dotted">
                          <Link
                            href={
                              "/blog/category/" +
                              slugify(category) +
                              "/" +
                              slugify(sub) +
                              "/"
                            }
                          >
                            {sub} ({count})
                          </Link>
                        </div>
                      </li>
                    ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Year */}
      <div className="mt-6">
        <Subtitle title="By Year" />
        <ul className="flex list-none flex-col gap-1 pl-3">
          {yearList.map((year) => (
            <li key={year}>
              <div className="origin-left font-normal text-gray-100 transition duration-300 ease-in-out hover:scale-101 hover:underline hover:decoration-dotted">
                <Link href={"/blog/archive/" + year + "/"}>
                  {year} ({postCounts[year]})
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

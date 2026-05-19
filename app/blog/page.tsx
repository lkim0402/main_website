import PostLink from "../../components/post/PostLink";
import PageTitle from "../../components/PageTitle";
import Subtitle from "components/SubTitle";
import Link from "next/link";
import { getAllPosts, slugify } from "../lib/posts";

export default async function Workshop() {
  const processedBlogs = getAllPosts();
  const recentBlogs = processedBlogs.slice(0, 10);

  const postCounts = processedBlogs.reduce(
    (acc, blog) => {
      const year = blog.actualDate.getFullYear().toString();
      acc[year] = (acc[year] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );
  const yearList = Object.keys(postCounts).sort((a, b) => Number(b) - Number(a));

  const categoryCounts = processedBlogs.reduce(
    (acc, blog) => {
      const category = blog.meta.Category;
      acc[category] = (acc[category] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );
  const categoryList = Object.keys(categoryCounts).sort();

  return (
    <div>
      <PageTitle
        title="Blogging"
        description="Posts about programming, reflections, and almost anything that's on my mind"
      />
      <Subtitle title="Most Recent" />
      <div>
        <div className="flex flex-col justify-center">
          <div className="flex flex-row "></div>
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
        <ul className="list-disc pl-3">
          {categoryList.map((category) => (
            <li key={category}>
              <div
                className="text-gray-100
                transition duration-300 ease-in-out hover:scale-101
                origin-left
                font-normal underline decoration-dotted"
              >
                <Link href={"/blog/category/" + slugify(category) + "/"}>
                  {" "}
                  {category} ({categoryCounts[category]})
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Year */}
      <div className="mt-6">
        <Subtitle title="By Year" />
        <ul className="list-disc pl-3">
          {yearList.map((year) => (
            <li key={year}>
              <div
                className="text-gray-100
                transition duration-300 ease-in-out hover:scale-101
                origin-left
                font-normal underline decoration-dotted"
              >
                <Link href={"/blog/archive/" + year + "/"}>
                  {year} ({postCounts[year]}){" "}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

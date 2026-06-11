import PostLink from "../../../../components/post/PostLink";
import PageTitle from "../../../../components/PageTitle";
import { getAllPosts } from "../../../lib/posts";
import BackButton from "components/BackButton";

export default async function YearPage({
  params,
}: {
  params: Promise<{ year: string }>;
}) {
  const { year } = await params;
  const processedBlogs = getAllPosts().filter(
    (blog) => blog.actualDate.getFullYear().toString() === year,
  );

  return (
    <div>
      <BackButton />
      <PageTitle title={year} description={"Blog posts for " + year} />
      <div>
        <div className="flex flex-col justify-center">
          <div className="flex flex-row"></div>
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
